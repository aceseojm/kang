import type { MetadataRoute } from "next";
import { poems } from "@/lib/poems";
import { seasons } from "@/lib/seasons";

const BASE_URL = "https://www.kanggilwon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/gallery`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/poems`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/notice`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const seasonRoutes: MetadataRoute.Sitemap = seasons.map((season) => ({
    url: `${BASE_URL}/poems/${encodeURIComponent(season.id)}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const poemRoutes: MetadataRoute.Sitemap = poems.map((poem) => ({
    url: `${BASE_URL}/poems/${encodeURIComponent(poem.season)}/${encodeURIComponent(poem.slug)}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...seasonRoutes, ...poemRoutes];
}
