import Link from "next/link";
import { AI_ISSUES } from "../data/ai-issues";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Signals Archive — Zackor",
  description: "Browse all Zackor AI Signals issues. Foundation models, agents, research, industry, and open source — three times daily.",
};

const SOCIAL = {
  twitter: "https://x.com/mindragon",
  linkedin: "https://www.linkedin.com/in/jeffersonnunn/",
};

export default function AIIssuesPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] flex flex-col">
      <nav className="border-b border-[#222235] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link href="/" className="text-xl font-bold"><span className="text-[#00d4aa]">Zackor</span> <span className="text-[#8888aa]">AI</span></Link>
        <div className="flex items-center gap-4">
          <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">𝕏</a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">in</a>
          <Link href="/issues" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">Blockchain →</Link>
          <span className="text-sm text-[#8888aa]">AI Archive</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🤖</span>
          <h1 className="text-3xl font-bold text-white">AI Signals</h1>
        </div>
        <p className="text-[#8888aa] mb-10">Foundation models · Agents · Research · Industry · Open Source — three times daily.</p>

        {AI_ISSUES.length === 0 ? (
          <div className="rounded-xl border border-[#222235] bg-[#111118] p-10 text-center text-[#8888aa]">
            No issues yet. First drop coming soon.
          </div>
        ) : (
          <div className="space-y-4">
            {[...AI_ISSUES].map(issue => {
              const topSignals = issue.sections.flatMap(s => s.signals).filter(s => !s.isNoise && s.rating >= 3).slice(0, 4);
              return (
                <div key={issue.id} className="rounded-xl border border-[#1a3a33] bg-[#0d1f1c] p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold rounded-full border border-[#00d4aa]/40 bg-[#00d4aa]/10 text-[#00d4aa] px-2.5 py-0.5">AI Issue #{issue.issueNumber}</span>
                        <span className="text-xs text-[#8888aa]">{issue.date} · {issue.time}</span>
                      </div>
                    </div>
                    <Link href={"/ai/" + issue.id} className="shrink-0 rounded-lg border border-[#00d4aa]/40 bg-[#00d4aa]/10 px-3 py-1.5 text-sm text-[#00d4aa] hover:bg-[#00d4aa]/20 transition">Read Issue →</Link>
                  </div>
                  <ul className="space-y-1.5">
                    {topSignals.map((s, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-[#00d4aa] shrink-0 text-xs mt-0.5">{"⚡".repeat(s.rating)}</span>
                        <span className="text-[#c8c8de] leading-snug">{s.headline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <footer className="border-t border-[#222235] px-6 py-6 text-center text-xs text-[#555566] max-w-5xl mx-auto w-full">
        <p><span className="text-[#00a07a] font-semibold">Zackor</span> · AI Signal Intelligence · <a href="https://zackor.news" className="hover:text-[#8888aa] transition">zackor.news</a></p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#8888aa] transition">𝕏 Twitter</a>
          <span>·</span>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#8888aa] transition">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
