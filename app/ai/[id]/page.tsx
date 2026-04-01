import Link from "next/link";
import { AI_ISSUES } from "../../data/ai-issues";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return AI_ISSUES.map(issue => ({ id: issue.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const issue = AI_ISSUES.find(i => i.id === params.id);
  if (!issue) return {};
  const url = "https://zackor.news/ai/" + issue.id;
  const topHeadline = issue.sections[0]?.signals[0]?.headline ?? "AI intelligence curated daily";
  return {
    title: "AI Signals Issue #" + issue.issueNumber + " — Zackor",
    description: "Zackor AI Signals Issue #" + issue.issueNumber + " · " + issue.date + " · " + topHeadline,
    openGraph: {
      title: "Zackor AI Signals — Issue #" + issue.issueNumber,
      description: issue.date + " · AI Signals · Foundation Models · Agents · Research",
      url,
      type: "article",
      siteName: "Zackor Signals: Powered by Sure Thing",
    },
    twitter: {
      card: "summary_large_image",
      site: "@mindragon",
      creator: "@mindragon",
      title: "Zackor AI Signals — Issue #" + issue.issueNumber,
      description: issue.date + " · AI intelligence · Agents · Research · Industry",
    },
  };
}

function BoltRating({ rating, isNoise }: { rating: number; isNoise?: boolean }) {
  if (isNoise) return <span className="text-gray-500 text-xs">⚠️</span>;
  const color = rating >= 4 ? "text-[#00ffcc]" : "text-[#00d4aa]";
  return <span className={color + " text-xs shrink-0"}>{"⚡".repeat(rating)}</span>;
}

const SOCIAL = {
  twitter: "https://x.com/mindragon",
  linkedin: "https://www.linkedin.com/in/jeffersonnunn/",
};

export default function AIIssuePage({ params }: { params: { id: string } }) {
  const issue = AI_ISSUES.find(i => i.id === params.id);
  if (!issue) notFound();

  const issueUrl = "https://zackor.news/ai/" + issue.id;
  const topHeadline = issue.sections[0]?.signals[0]?.headline ?? "AI intelligence curated daily";
  const tweetText = "Zackor AI Signals — Issue #" + issue.issueNumber + " · " + issue.date + " · " + topHeadline;
  const twitterShareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText) + "&url=" + encodeURIComponent(issueUrl);
  const linkedinShareUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(issueUrl);

  return (
    <div className="min-h-screen bg-[#0d0d0f]">
      <nav className="border-b border-[#222235] px-6 py-4 flex items-center justify-between max-w-3xl mx-auto">
        <Link href="/" className="text-lg font-bold"><span className="text-[#00d4aa]">Zackor</span> <span className="text-[#8888aa]">AI</span></Link>
        <div className="flex items-center gap-4">
          <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">𝕏</a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">in</a>
          <Link href="/ai" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">← AI Archive</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Issue Header */}
        <div className="rounded-xl border border-[#1a3a33] bg-gradient-to-br from-[#0d1f1c] to-[#0a1a17] p-6 mb-6 text-center">
          <div className="text-2xl font-bold text-white"><span className="text-[#00d4aa]">Zackor</span> <span className="text-[#8888aa]">AI Signals</span></div>
          <div className="text-xs text-[#8888aa] tracking-widest uppercase mt-1">Foundation Models · Agents · Research · Industry · Open Source</div>
          <div className="text-xs text-[#555566] mt-3">Issue #{issue.issueNumber} · {issue.date} · {issue.time}</div>
        </div>

        {/* Sections */}
        <div className="space-y-4 mb-10">
          {issue.sections.map(section => (
            <div key={section.title} className="rounded-xl border border-[#1a3a33] bg-[#0d1f1c] p-5">
              <div className="flex items-center gap-2 border-b border-[#1a3a33] pb-3 mb-4">
                <span className="text-lg">{section.icon}</span>
                <h2 className="font-bold text-white text-sm">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.signals.map((signal, i) => (
                  <div key={i} className={i < section.signals.length - 1 ? "pb-3 border-b border-[#0f2a24]" : ""}>
                    <div className="flex gap-2">
                      <BoltRating rating={signal.rating} isNoise={signal.isNoise} />
                      <div>
                        <p className={"text-sm font-medium leading-snug " + (signal.isNoise ? "text-gray-500" : signal.isCarryForward ? "text-[#8888aa]" : "text-[#d8d8ee]")}>
                          {signal.isCarryForward && <span className="mr-1">📌</span>}
                          {signal.headline}
                        </p>
                        {signal.detail && <p className="text-xs text-[#7a9990] mt-0.5 leading-relaxed">{signal.detail}</p>}
                        {signal.source && <p className="text-xs text-[#3a5550] italic mt-0.5">[{signal.source}]</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Share Bar */}
        <div className="rounded-xl border border-[#1a3a33] bg-[#0d1f1c] p-4 mb-6 flex items-center justify-between">
          <span className="text-sm text-[#8888aa]">Share this issue</span>
          <div className="flex gap-3">
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer"
              className="rounded-lg border border-[#00d4aa]/40 bg-[#00d4aa]/10 px-4 py-1.5 text-sm text-[#00d4aa] hover:bg-[#00d4aa]/20 transition">
              𝕏 Share on X
            </a>
            <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer"
              className="rounded-lg border border-[#00d4aa]/40 bg-[#00d4aa]/10 px-4 py-1.5 text-sm text-[#00d4aa] hover:bg-[#00d4aa]/20 transition">
              Share on LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-[#404050] border-t border-[#1a3a33] pt-6">
          <p className="font-semibold text-[#00a07a]">Zackor · AI Signal Intelligence · <a href="https://zackor.news" className="hover:underline">zackor.news</a></p>
          <p className="mt-1">Issue #{issue.issueNumber} · {issue.date}</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-[#00a07a] hover:underline">𝕏 Twitter</a>
            <span>·</span>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#00a07a] hover:underline">LinkedIn</a>
          </div>
          <p className="mt-2">
            <a href="mailto:zackor@zackor.news?subject=Unsubscribe AI" className="text-[#00a07a] hover:underline">Unsubscribe</a>
            {" · "}
            <a href="mailto:zackor@zackor.news?subject=AI Feedback" className="text-[#00a07a] hover:underline">Send feedback</a>
          </p>
        </div>
      </div>
    </div>
  );
}
