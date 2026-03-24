import Link from "next/link";
import { ISSUES } from "../../data/issues";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return ISSUES.map(issue => ({ id: issue.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const issue = ISSUES.find(i => i.id === params.id);
  if (!issue) return {};
  const url = `https://zackor.news/issues/${issue.id}`;
  return {
    title: `Issue #${issue.issueNumber} — Zackor Signals`,
    description: `Zackor Signals Issue #${issue.issueNumber} · ${issue.date} · BTC ${issue.btcPrice} · ETH ${issue.ethPrice}`,
    openGraph: {
      title: `Zackor Signals — Issue #${issue.issueNumber}`,
      description: `${issue.date} · BTC ${issue.btcPrice} · ETH ${issue.ethPrice} · AI Crypto Intelligence`,
      url,
      type: "article",
      siteName: "Zackor Signals",
    },
    twitter: {
      card: "summary_large_image",
      site: "@mindragon",
      creator: "@mindragon",
      title: `Zackor Signals — Issue #${issue.issueNumber}`,
      description: `${issue.date} · BTC ${issue.btcPrice} · ETH ${issue.ethPrice} · AI Crypto Intelligence`,
    },
  };
}

function BoltRating({ rating, isNoise }: { rating: number; isNoise?: boolean }) {
  if (isNoise) return <span className="text-gray-500 text-xs">⚠️</span>;
  const color = rating >= 4 ? "text-orange-400" : "text-yellow-400";
  return <span className={`${color} text-xs shrink-0`}>{"⚡".repeat(rating)}</span>;
}

const SOCIAL = {
  twitter: "https://x.com/mindragon",
  linkedin: "https://www.linkedin.com/in/jeffersonnunn/",
};

export default function IssuePage({ params }: { params: { id: string } }) {
  const issue = ISSUES.find(i => i.id === params.id);
  if (!issue) notFound();

  const issueUrl = `https://zackor.news/issues/${issue.id}`;
  const tweetText = `Zackor Signals — Issue #${issue.issueNumber} · ${issue.date} · BTC ${issue.btcPrice} · ETH ${issue.ethPrice} · AI Crypto Intelligence`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(issueUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(issueUrl)}`;

  return (
    <div className="min-h-screen bg-[#0d0d0f]">
      <nav className="border-b border-[#222235] px-6 py-4 flex items-center justify-between max-w-3xl mx-auto">
        <Link href="/" className="text-lg font-bold"><span className="text-[#7c6aff]">Zackor</span> Signals</Link>
        <div className="flex items-center gap-4">
          <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">𝕏</a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">in</a>
          <Link href="/issues" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">← Archive</Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Issue Header */}
        <div className="rounded-xl border border-[#2a2a4a] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 mb-6 text-center">
          <div className="text-2xl font-bold text-white"><span className="text-[#7c6aff]">Zackor</span> Signals</div>
          <div className="text-xs text-[#8888aa] tracking-widest uppercase mt-1">AI · Crypto · Market Intelligence</div>
          <div className="flex justify-center gap-4 mt-4">
            <span className="rounded-lg border border-[#2a2a4a] bg-[#0d0d1f] px-4 py-2 text-sm text-[#ccc]">
              ₿ <strong className="text-white">{issue.btcPrice}</strong> <span className={issue.btcUp ? "text-emerald-400" : "text-red-400"}>{issue.btcUp ? "▲" : "▼"}{issue.btcChange}</span>
            </span>
            <span className="rounded-lg border border-[#2a2a4a] bg-[#0d0d1f] px-4 py-2 text-sm text-[#ccc]">
              Ξ <strong className="text-white">{issue.ethPrice}</strong> <span className={issue.ethUp ? "text-emerald-400" : "text-red-400"}>{issue.ethUp ? "▲" : "▼"}{issue.ethChange}</span>
            </span>
          </div>
          <div className="text-xs text-[#555566] mt-3">Issue #{issue.issueNumber} · {issue.date} · {issue.time}</div>
        </div>

        {/* Sections */}
        <div className="space-y-4 mb-10">
          {issue.sections.map(section => (
            <div key={section.title} className="rounded-xl border border-[#222235] bg-[#111118] p-5">
              <div className="flex items-center gap-2 border-b border-[#1e1e30] pb-3 mb-4">
                <span className="text-lg">{section.icon}</span>
                <h2 className="font-bold text-white text-sm">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.signals.map((signal, i) => (
                  <div key={i} className={i < section.signals.length - 1 ? "pb-3 border-b border-[#1a1a28]" : ""}>
                    <div className="flex gap-2">
                      <BoltRating rating={signal.rating} isNoise={signal.isNoise} />
                      <div>
                        <p className={`text-sm font-medium leading-snug ${signal.isNoise ? "text-gray-500" : signal.isCarryForward ? "text-[#8888aa]" : "text-[#d8d8ee]"}`}>
                          {signal.isCarryForward && <span className="mr-1">📌</span>}
                          {signal.headline}
                        </p>
                        {signal.detail && <p className="text-xs text-[#7a7a99] mt-0.5 leading-relaxed">{signal.detail}</p>}
                        {signal.source && <p className="text-xs text-[#505066] italic mt-0.5">[{signal.source}]</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Share Bar */}
        <div className="rounded-xl border border-[#222235] bg-[#111118] p-4 mb-6 flex items-center justify-between">
          <span className="text-sm text-[#8888aa]">Share this issue</span>
          <div className="flex gap-3">
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#7c6aff]/40 bg-[#7c6aff]/10 px-4 py-1.5 text-sm text-[#7c6aff] hover:bg-[#7c6aff]/20 transition"
            >
              𝕏 Share on X
            </a>
            <a
              href={linkedinShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#7c6aff]/40 bg-[#7c6aff]/10 px-4 py-1.5 text-sm text-[#7c6aff] hover:bg-[#7c6aff]/20 transition"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-[#404050] border-t border-[#222235] pt-6">
          <p className="font-semibold text-[#5a4baa]">Zackor · AI Signal Intelligence · <a href="https://zackor.news" className="hover:underline">zackor.news</a></p>
          <p className="mt-1">Issue #{issue.issueNumber} · {issue.date}</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-[#6655bb] hover:underline">𝕏 Twitter</a>
            <span>·</span>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#6655bb] hover:underline">LinkedIn</a>
          </div>
          <p className="mt-2">
            <a href="mailto:zackor@agentmail.to?subject=Unsubscribe" className="text-[#6655bb] hover:underline">Unsubscribe</a>
            {" · "}
            <a href="mailto:zackor@agentmail.to?subject=Feedback" className="text-[#6655bb] hover:underline">Send feedback</a>
          </p>
        </div>
      </div>
    </div>
  );
}
