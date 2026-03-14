import Link from "next/link";
import { ISSUES } from "../data/issues";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Issues Archive — Zackor Signals",
  description: "Browse all Zackor Signals newsletter issues. AI, crypto, and market intelligence — twice daily.",
};

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0f]">
      <nav className="border-b border-[#222235] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold"><span className="text-[#7c6aff]">Zackor</span> Signals</Link>
        <span className="text-sm text-[#8888aa]">Issues Archive</span>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Issues Archive</h1>
        <p className="text-[#8888aa] mb-10">All signal reports, newest first.</p>

        {ISSUES.length === 0 ? (
          <div className="rounded-xl border border-[#222235] bg-[#111118] p-10 text-center text-[#8888aa]">
            No issues yet. First drop coming soon.
          </div>
        ) : (
          <div className="space-y-4">
            {[...ISSUES].reverse().map(issue => {
              const topSignals = issue.sections.flatMap(s => s.signals).filter(s => !s.isNoise && s.rating >= 3).slice(0, 4);
              return (
                <div key={issue.id} className="rounded-xl border border-[#222235] bg-[#111118] p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold rounded-full border border-[#7c6aff]/40 bg-[#7c6aff]/10 text-[#7c6aff] px-2.5 py-0.5">Issue #{issue.issueNumber}</span>
                        <span className="text-xs text-[#8888aa]">{issue.date} · {issue.time}</span>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span className="text-[#8888aa]">₿ {issue.btcPrice} <span className={issue.btcUp ? "text-emerald-400" : "text-red-400"}>{issue.btcUp ? "▲" : "▼"}{issue.btcChange}</span></span>
                        <span className="text-[#8888aa]">Ξ {issue.ethPrice} <span className={issue.ethUp ? "text-emerald-400" : "text-red-400"}>{issue.ethUp ? "▲" : "▼"}{issue.ethChange}</span></span>
                      </div>
                    </div>
                    <Link href={`/issues/${issue.id}`} className="shrink-0 rounded-lg border border-[#7c6aff]/40 bg-[#7c6aff]/10 px-3 py-1.5 text-sm text-[#7c6aff] hover:bg-[#7c6aff]/20 transition">Read Issue →</Link>
                  </div>
                  <ul className="space-y-1.5">
                    {topSignals.map((s, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-yellow-400 shrink-0 text-xs mt-0.5">{"⚡".repeat(s.rating)}</span>
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
    </div>
  );
}