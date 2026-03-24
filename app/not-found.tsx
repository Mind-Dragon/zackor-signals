import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] flex flex-col">
      <nav className="border-b border-[#222235] px-6 py-4 max-w-5xl mx-auto w-full">
        <Link href="/" className="text-xl font-bold">
          <span className="text-[#7c6aff]">Zackor</span> Signals
        </Link>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-7xl font-black text-[#7c6aff] mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-3">Signal not found</h1>
        <p className="text-[#8888aa] mb-8 max-w-sm">
          This issue or page doesn&apos;t exist. Maybe it hasn&apos;t been published yet — or it moved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="rounded-lg bg-[#7c6aff] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#6b5aee] transition"
          >
            ← Home
          </Link>
          <Link
            href="/issues"
            className="rounded-lg border border-[#7c6aff]/40 bg-[#7c6aff]/10 px-6 py-2.5 text-sm font-semibold text-[#7c6aff] hover:bg-[#7c6aff]/20 transition"
          >
            Issues Archive
          </Link>
        </div>
      </div>

      <footer className="border-t border-[#222235] px-6 py-6 text-center text-xs text-[#555566] max-w-5xl mx-auto w-full">
        <p>
          <span className="text-[#5a4baa] font-semibold">Zackor</span> · AI Signal Intelligence ·{" "}
          <a href="https://zackor.news" className="hover:text-[#8888aa] transition">
            zackor.news
          </a>
        </p>
      </footer>
    </div>
  );
}
