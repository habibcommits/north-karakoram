// src/seo/sitemap.ts

import { SITE_CONFIG } from "./config";
import { expeditions } from "@/lib/expeditionData";
import { trekkings as treks } from "@/lib/trekkingData";
import { tours } from "@/lib/tourData";
import { rockClimbings as rockClimbingRoutes } from "@/lib/rockClimbingData";

/* ---------------------------------------------
   Types
--------------------------------------------- */

export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  images?: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
}

/* ---------------------------------------------
   Constants
--------------------------------------------- */

const TODAY = new Date().toISOString().split("T")[0];

/* ---------------------------------------------
   Static Routes
--------------------------------------------- */

const STATIC_ROUTES: SitemapURL[] = [
  { loc: "/", changefreq: "weekly", priority: 1.0 },
  { loc: "/expedition", changefreq: "weekly", priority: 0.9 },
  { loc: "/trekking", changefreq: "weekly", priority: 0.9 },
  { loc: "/tour", changefreq: "weekly", priority: 0.9 },
  { loc: "/rock-climbing", changefreq: "weekly", priority: 0.8 },
  { loc: "/about", changefreq: "monthly", priority: 0.7 },
  { loc: "/team", changefreq: "monthly", priority: 0.6 },
  { loc: "/travel-info", changefreq: "monthly", priority: 0.7 },
  { loc: "/mountaineering-rules", changefreq: "monthly", priority: 0.6 },
  { loc: "/peak-royalty", changefreq: "yearly", priority: 0.5 },
  { loc: "/pakistan-visa", changefreq: "monthly", priority: 0.7 },
  { loc: "/payment-method", changefreq: "yearly", priority: 0.4 },
  { loc: "/contact", changefreq: "yearly", priority: 0.6 },
];

/* ---------------------------------------------
   Helpers
--------------------------------------------- */

function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_CONFIG.url}${path}`;
}

function normalizeImages(
  mainImage?: string,
  gallery?: string[],
  title?: string
) {
  const images: SitemapURL["images"] = [];

  if (mainImage) {
    images.push({
      loc: absoluteUrl(mainImage),
      title,
    });
  }

  gallery?.forEach((img) => {
    images.push({
      loc: absoluteUrl(img),
      title,
    });
  });

  return images.length ? images : undefined;
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/* ---------------------------------------------
   Dynamic Routes (LOCAL DATA ONLY)
--------------------------------------------- */

export function generateDynamicSitemap(): SitemapURL[] {
  const urls: SitemapURL[] = [];

  // Expeditions
  expeditions.forEach((exp) => {
    urls.push({
      loc: `/expedition/${exp.slug}`,
      lastmod: TODAY,
      changefreq: "weekly",
      priority: 0.9,
      images: normalizeImages(exp.image, exp.gallery, exp.name),
    });
  });

  // Trekking
  treks.forEach((trek) => {
    urls.push({
      loc: `/trekking/${trek.slug}`,
      lastmod: TODAY,
      changefreq: "weekly",
      priority: 0.8,
      images: normalizeImages(trek.image, trek.gallery, trek.name),
    });
  });

  // Tours
  tours.forEach((tour) => {
    urls.push({
      loc: `/tour/${tour.slug}`,
      lastmod: TODAY,
      changefreq: "weekly",
      priority: 0.8,
      images: normalizeImages(tour.image, tour.gallery, tour.name),
    });
  });

  // Rock Climbing
  rockClimbingRoutes.forEach((route) => {
    urls.push({
      loc: `/rock-climbing/${route.slug}`,
      lastmod: TODAY,
      changefreq: "monthly",
      priority: 0.7,
      images: normalizeImages(route.image, route.gallery, route.name),
    });
  });

  return urls;
}

/* ---------------------------------------------
   XML Generator
--------------------------------------------- */

export function generateSitemap(dynamicRoutes: SitemapURL[] = []): string {
  const allUrls = [...STATIC_ROUTES, ...dynamicRoutes];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  allUrls.forEach((url) => {
    xml += `  <url>\n`;
    xml += `    <loc>${absoluteUrl(url.loc)}</loc>\n`;
    xml += `    <lastmod>${url.lastmod || TODAY}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq || "weekly"}</changefreq>\n`;
    xml += `    <priority>${url.priority ?? 0.5}</priority>\n`;

    url.images?.forEach((img) => {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`;
      if (img.title) {
        xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
      }
      if (img.caption) {
        xml += `      <image:caption>${escapeXml(
          img.caption
        )}</image:caption>\n`;
      }
      xml += `    </image:image>\n`;
    });

    xml += `  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
}

/* ---------------------------------------------
   API / Express Handler
--------------------------------------------- */

export async function sitemapHandler(req: any, res: any) {
  try {
    const dynamicRoutes = generateDynamicSitemap();
    const sitemap = generateSitemap(dynamicRoutes);

    res.setHeader("Content-Type", "application/xml");
    res.setHeader(
      "Cache-Control",
      "public, max-age=86400, stale-while-revalidate"
    );
    res.send(sitemap); // ✅ Actually use the generated sitemap!
  } catch (error) {
    console.error("Sitemap generation error:", error);
    res.status(500).send("Error generating sitemap");
  }
}
