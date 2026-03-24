import { MetadataRoute } from "next";
import { ISSUES } from "./data/issues";

export default function sitemap(): MetadataRoute.Sitemap {
  const issueUrls: MetadataRoute.Sitemap = ISSUES.map(issue => ({
    url: `https://zackor.news/issues/${issue.id}`,
    lastModified: new Date(issue.date + " 2026"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://zackor.news",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://zackor.news/issues",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...issueUrls,
  ];
}
