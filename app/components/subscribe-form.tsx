"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message || "You\'re on the list!");
        setName(""); setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#7c6aff]/40 bg-[#7c6aff]/10 px-6 py-5 text-center">
        <div className="text-2xl mb-2">⚡</div>
        <p className="text-[#e8e8ea] font-semibold">{message}</p>
        <p className="text-[#8888aa] text-sm mt-1">Watch for your first signal report.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md mx-auto">
      <input
        type="text" value={name} onChange={e => setName(e.target.value)}
        placeholder="Your name" required
        className="rounded-lg border border-[#222235] bg-[#111118] px-4 py-3 text-[#e8e8ea] placeholder-[#8888aa] focus:border-[#7c6aff] focus:outline-none focus:ring-1 focus:ring-[#7c6aff] transition"
      />
      <input
        type="email" value={email} onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com" required
        className="rounded-lg border border-[#222235] bg-[#111118] px-4 py-3 text-[#e8e8ea] placeholder-[#8888aa] focus:border-[#7c6aff] focus:outline-none focus:ring-1 focus:ring-[#7c6aff] transition"
      />
      <button
        type="submit" disabled={status === "loading"}
        className="rounded-lg bg-[#7c6aff] px-6 py-3 font-semibold text-white hover:bg-[#6b5aee] disabled:opacity-60 transition"
      >
        {status === "loading" ? "Joining..." : "Get Early Access →"}
      </button>
      {status === "error" && <p className="text-red-400 text-sm text-center">{message}</p>}
    </form>
  );
}