#!/usr/bin/env node
/**
 * push_ai_issue.js
 * Prepends a new AI issue block to app/data/ai-issues.ts and pushes as a SINGLE atomic commit.
 * Usage: node src/push_ai_issue.js <gh_token> <issue_ts_file> <commit_msg>
 */
const https = require('https');
const fs = require('fs');

const GH_TOKEN = process.argv[2];
const ISSUE_FILE = process.argv[3];
const COMMIT_MSG = process.argv[4] || 'feat(ai-issues): add new AI issue';

if (!GH_TOKEN || !ISSUE_FILE) {
  console.error('Usage: node push_ai_issue.js <gh_token> <issue_ts_file> <commit_msg>');
  process.exit(1);
}

const OWNER = 'Mind-Dragon';
const REPO = 'zackor-signals';
const FILE_PATH = 'app/data/ai-issues.ts';

function apiRequest(method, urlPath, body, token) {
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : undefined;
    const options = {
      hostname: 'api.github.com',
      path: urlPath, method,
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent': 'zackor-ai-push',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        ...(bodyStr ? { 'Content-Length': Buffer.byteLength(bodyStr) } : {})
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => { try { resolve({ status: res.statusCode, body: JSON.parse(data) }); } catch (e) { resolve({ status: res.statusCode, body: data }); } });
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

async function main() {
  console.log('Fetching current ai-issues.ts from GitHub...');
  const getRes = await apiRequest('GET', `/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`, null, GH_TOKEN);
  if (getRes.status !== 200) { console.error('Failed to fetch ai-issues.ts:', JSON.stringify(getRes.body)); process.exit(1); }
  const currentSha = getRes.body.sha;
  const currentContent = Buffer.from(getRes.body.content, 'base64').toString('utf8');
  console.log(`Current file: ${currentContent.split('\n').length} lines, SHA: ${currentSha}`);

  const newIssueBlock = fs.readFileSync(ISSUE_FILE, 'utf8').trim();

  const insertionMarker = 'export const AI_ISSUES: AIIssue[] = [';
  const insertionIdx = currentContent.indexOf(insertionMarker);
  if (insertionIdx === -1) { console.error('ERROR: Could not find insertion point in ai-issues.ts'); process.exit(1); }
  const afterMarker = insertionIdx + insertionMarker.length;

  const newContent = currentContent.slice(0, afterMarker) + '\n\n' + newIssueBlock + '\n' + currentContent.slice(afterMarker);

  console.log('Validating...');
  const newLines = newContent.split('\n');
  console.log(`New file will have ${newLines.length} lines`);

  const rating5Lines = newLines.filter(l => l.includes('rating: 5') || l.includes('rating:5'));
  if (rating5Lines.length > 0) { console.error(`ERROR: Found rating:5!`); process.exit(1); }
  const backtickLines = newLines.filter(l => l.includes('`'));
  if (backtickLines.length > 0) { console.error(`ERROR: Found backtick!`); process.exit(1); }
  const openCurly = (newContent.match(/\{/g) || []).length;
  const closeCurly = (newContent.match(/\}/g) || []).length;
  if (openCurly !== closeCurly) { console.error(`ERROR: Unbalanced {}: ${openCurly} vs ${closeCurly}`); process.exit(1); }
  console.log('Validation passed');

  console.log('Pushing to GitHub...');
  const newContentB64 = Buffer.from(newContent, 'utf8').toString('base64');
  const updateRes = await apiRequest('PUT', `/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`, {
    message: COMMIT_MSG,
    content: newContentB64,
    sha: currentSha,
    committer: { name: 'Zackor AI', email: 'zackor@zackor.news' }
  }, GH_TOKEN);
  if (updateRes.status !== 200 && updateRes.status !== 201) { console.error('Failed to push:', JSON.stringify(updateRes.body)); process.exit(1); }
  const newCommitSha = updateRes.body.commit.sha;
  console.log(`Pushed! Commit: ${newCommitSha}`);
  console.log(JSON.stringify({ success: true, commitSha: newCommitSha, lines: newLines.length, message: COMMIT_MSG }));
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
