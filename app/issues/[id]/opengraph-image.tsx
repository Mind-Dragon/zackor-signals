// Per-issue dynamic OG image — shows BTC price, issue number, top signals
import { ImageResponse } from "next/og";
import { ISSUES } from "../../data/issues";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata({ params }: { params: { id: string } }) {
  const issue = ISSUES.find((i) => i.id === params.id);
  return [
    {
      id: params.id,
      alt: issue
        ? `Zackor Signals: Powered by Sure Thing Issue #${issue.issueNumber} \u2014 ${issue.date}`
        : "Zackor Signals: Powered by Sure Thing",
    },
  ];
}

export default function Image({ params }: { params: { id: string } }) {
  const issue = ISSUES.find((i) => i.id === params.id);
  const topSignals = issue
    ? issue.sections.flatMap((s) => s.signals).filter((s) => !s.isNoise && s.rating >= 3).slice(0, 3)
    : [];

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, sans-serif",
          padding: "56px 64px",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(124,106,255,0.12) 0%, transparent 60%)",
          }}
        />
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 52, height: 52,
              background: "rgba(124,106,255,0.2)",
              border: "1px solid rgba(124,106,255,0.4)",
              borderRadius: 12, fontSize: 30, fontWeight: 900, color: "#7c6aff",
            }}
          >
            Z
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#ffffff", display: "flex" }}>
              <span style={{ color: "#7c6aff" }}>Zackor</span>&nbsp;Signals
            </div>
            <div style={{ fontSize: 14, color: "#555566" }}>AI \u00b7 Crypto \u00b7 Market Intelligence</div>
          </div>
          <div style={{ flex: 1 }} />
          <div
            style={{
              display: "flex",
              background: "rgba(124,106,255,0.15)",
              border: "1px solid rgba(124,106,255,0.4)",
              borderRadius: 100, padding: "6px 20px",
              fontSize: 16, color: "#9d8fff", fontWeight: 700,
            }}
          >
            Issue #{issue?.issueNumber ?? "\u2014"}
          </div>
        </div>
        {/* Date + Prices */}
        <div style={{ display: "flex", gap: 24, marginBottom: 32, alignItems: "center" }}>
          <div style={{ fontSize: 18, color: "#8888aa" }}>
            {issue?.date ?? ""} \u00b7 {issue?.time ?? ""}
          </div>
          <div
            style={{
              display: "flex", background: "#111118", border: "1px solid #222235",
              borderRadius: 10, padding: "6px 16px", gap: 20, fontSize: 18,
            }}
          >
            <span style={{ color: "#8888aa" }}>
              \u20bf{" "}
              <span style={{ color: "#ffffff", fontWeight: 700 }}>{issue?.btcPrice ?? ""}</span>
              {issue && (
                <span style={{ color: issue.btcUp ? "#34d399" : "#f87171" }}>
                  {" "}{issue.btcUp ? "\u25b2" : "\u25bc"}{issue.btcChange}
                </span>
              )}
            </span>
            <span style={{ color: "#555566" }}>|</span>
            <span style={{ color: "#8888aa" }}>
              \u039e{" "}
              <span style={{ color: "#ffffff", fontWeight: 700 }}>{issue?.ethPrice ?? ""}</span>
              {issue && (
                <span style={{ color: issue.ethUp ? "#34d399" : "#f87171" }}>
                  {" "}{issue.ethUp ? "\u25b2" : "\u25bc"}{issue.ethChange}
                </span>
              )}
            </span>
          </div>
        </div>
        {/* Signal list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
          {topSignals.map((signal, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                background: "#111118", border: "1px solid #222235",
                borderRadius: 12, padding: "14px 20px",
              }}
            >
              <span style={{ fontSize: 18, color: "#facc15", minWidth: 40 }}>
                {"\u26a1".repeat(signal.rating)}
              </span>
              <span style={{ fontSize: 20, color: "#d8d8ee", lineHeight: 1.4, flex: 1 }}>
                {signal.headline.length > 90 ? signal.headline.slice(0, 87) + "\u2026" : signal.headline}
              </span>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 16, color: "#555566" }}>zackor.news</div>
          <div
            style={{
              fontSize: 16, color: "#7c6aff",
              background: "rgba(124,106,255,0.1)",
              border: "1px solid rgba(124,106,255,0.3)",
              borderRadius: 100, padding: "4px 16px",
            }}
          >
            Free signal reports \u2192 zackor.news
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
