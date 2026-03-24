import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zackor Signals",
    short_name: "Zackor",
    description: "AI Crypto Intelligence — twice-daily signal reports with impact ratings",
    start_url: "/",
    display: "browser",
    background_color: "#0d0d0f",
    theme_color: "#7c6aff",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
