import Link from "next/link";
import SubscribeForm from "./components/subscribe-form";
import { ISSUES } from "./data/issues";
import { AI_ISSUES } from "./data/ai-issues";

const SOCIAL = {
  twitter: "https://x.com/mindragon",
  linkedin: "https://www.linkedin.com/in/jeffersonnunn/",
  website: "https://zackor.news",
};

export default function Home() {
  const latestIssue = ISSUES[0];
  const latestAI = AI_ISSUES[0];
  const topSignals = latestIssue?.sections.flatMap(s => s.signals).filter(s => !s.isNoise && s.rating >= 3).slice(0, 4) ?? [];
  const topAISignals = latestAI?.sections.flatMap(s => s.signals).filter(s => !s.isNoise && s.rating >= 3).slice(0, 4) ?? [];

  return (
    <div className="min-h-screen bg-[#0d0d0f]">
      {/* NAV */}
      <nav className="border-b border-[#222235] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-xl font-bold"><span className="text-[#7c6aff]">Zackor</span> Signals</span>
        <div className="flex items-center gap-4">
          <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">𝕏</a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">in</a>
          <Link href="/issues" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">Blockchain →</Link>
          <Link href="/ai" className="text-sm text-[#00d4aa] hover:text-[#00ffcc] transition font-medium">AI Signals →</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#222235] bg-[#111118] px-4 py-1.5 text-sm text-[#8888aa] mb-8">
          <span className="text-[#7c6aff]">⚡</span> 3x daily · 8am, noon &amp; 6pm CT
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          <span className="text-[#7c6aff]">Zackor</span> Signals
        </h1>
        <p className="text-lg text-[#8888aa] mb-2">
          <span className="text-[#7c6aff]">Blockchain</span> &amp; <span className="text-[#00d4aa]">AI</span> · Market Intelligence
        </p>
        <p className="text-[#8888aa] mb-10 max-w-xl mx-auto">
          Every signal rated by impact. Noise filtered. Two dedicated feeds — crypto and AI — delivered three times daily.
        </p>
        <SubscribeForm />
        <p className="text-xs text-[#555566] mt-4">Join 10+ early subscribers · No spam · Unsubscribe anytime</p>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: "⚡", title: "Signal Strength Ratings", body: "Every story rated ⚡ to ⚡⚡⚡⚡ by market impact so you instantly know what matters." },
            { icon: "🤖", title: "Dedicated AI Feed", body: "Foundation models, agents, research, open source — a full AI signals newsletter separate from crypto." },
            { icon: "🚫", title: "Noise Filtered", body: "Engagement-bait and unverified hype flagged ⚠️ so you never waste time on junk." },
          ].map(f => (
            <div key={f.title} className="rounded-xl border border-[#222235] bg-[#111118] p-6">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-[#8888aa] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TWO-COLUMN LATEST ISSUES */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">

          {/* BLOCKCHAIN */}
          {latestIssue && (
            <div className="rounded-xl border border-[#222235] bg-[#111118] p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-[#7c6aff] uppercase tracking-wider">⛓ Blockchain</span>
                <span className="text-xs text-[#555566]">Issue #{latestIssue.issueNumber}</span>
              </div>
              <div className="mb-3">
                <div className="text-xs text-[#8888aa] mb-1">{latestIssue.date} · {latestIssue.time}</div>
                <div className="flex gap-3">
                  <span className="text-sm text-[#8888aa]">₿ {latestIssue.btcPrice} <span className="text-red-400">▼{latestIssue.btcChange}</span></span>
                  <span className="text-sm text-[#8888aa]">Ξ {latestIssue.ethPrice} <span className="text-red-400">▼{latestIssue.ethChange}</span></span>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {topSignals.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-yellow-400 shrink-0">{"⚡".repeat(s.rating)}</span>
                    <span className="text-[#d8d8ee]">{s.headline}</span>
                  </li>
                ))}
              </ul>
              <Link href={"/issues/" + latestIssue.id} className="text-sm text-[#7c6aff] hover:text-[#9d8fff] font-medium transition">Read Issue →</Link>
            </div>
          )}

          {/* AI */}
          {latestAI && (
            <div className="rounded-xl border border-[#1a3a33] bg-[#0d1f1c] p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-[#00d4aa] uppercase tracking-wider">🤖 AI Signals</span>
                <span className="text-xs text-[#555566]">Issue #{latestAI.issueNumber}</span>
              </div>
              <div className="mb-3">
                <div className="text-xs text-[#8888aa] mb-1">{latestAI.date} · {latestAI.time}</div>
              </div>
              <ul className="space-y-2 mb-4">
                {topAISignals.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-[#00d4aa] shrink-0">{"⚡".repeat(s.rating)}</span>
                    <span className="text-[#d8d8ee]">{s.headline}</span>
                  </li>
                ))}
              </ul>
              <Link href={"/ai/" + latestAI.id} className="text-sm text-[#00d4aa] hover:text-[#00ffcc] font-medium transition">Read AI Issue →</Link>
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-4">
          <Link href="/issues" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">All Blockchain issues →</Link>
          <span className="text-[#333345]">·</span>
          <Link href="/ai" className="text-sm text-[#8888aa] hover:text-[#e8e8ea] transition">All AI issues →</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#222235] px-6 py-8 text-center text-sm text-[#555566]">
        <p><span className="text-[#5a4baa] font-semibold">Zackor</span> · AI Signal Intelligence · <a href={SOCIAL.website} className="hover:text-[#8888aa] transition">zackor.news</a></p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#8888aa] transition">𝕏 Twitter</a>
          <span>·</span>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#8888aa] transition">LinkedIn</a>
          <span>·</span>
          <a href="mailto:zackor@zackor.news" className="hover:text-[#8888aa] transition">zackor@zackor.news</a>
        </div>
        <p className="mt-3">
          <a href="mailto:zackor@zackor.news?subject=Unsubscribe" className="hover:text-[#8888aa] transition">Unsubscribe</a>
          {" · "}
          <a href="mailto:zackor@zackor.news?subject=Feedback" className="hover:text-[#8888aa] transition">Send feedback</a>
        </p>
      </footer>
    </div>
  );
}
