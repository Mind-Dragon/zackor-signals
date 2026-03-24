// Homepage OG image — generated dynamically via Next.js Edge Runtime
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zackor Signals — AI Crypto Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,106,255,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Border */}
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid rgba(124,106,255,0.3)",
            borderRadius: 24,
          }}
        />
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            background: "rgba(124,106,255,0.15)",
            border: "2px solid rgba(124,106,255,0.5)",
            borderRadius: 20,
            marginBottom: 32,
            fontSize: 56,
            fontWeight: 900,
            color: "#7c6aff",
          }}
        >
          Z
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-2px",
            marginBottom: 16,
            display: "flex",
          }}
        >
          <span style={{ color: "#7c6aff" }}>Zackor</span>&nbsp;Signals
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#8888aa",
            marginBottom: 48,
            letterSpacing: "0.5px",
          }}
        >
          AI · Crypto · Market Intelligence
        </div>
        {/* Badge row */}
        <div style={{ display: "flex", gap: 16 }}>
          {["\u26a1 Signal Ratings", "\u20bf Bitcoin \u00b7 \u039e Ethereum", "\ud83e\udd16 AI Agents", "\ud83d\udd07 Noise Filtered"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  background: "rgba(124,106,255,0.1)",
                  border: "1px solid rgba(124,106,255,0.3)",
                  borderRadius: 100,
                  padding: "8px 20px",
                  fontSize: 18,
                  color: "#c8c8de",
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>
        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            fontSize: 18,
            color: "#555566",
            letterSpacing: "1px",
          }}
        >
          zackor.news · twice daily · 8am & noon CT
        </div>
      </div>
    ),
    { ...size }
  );
}
