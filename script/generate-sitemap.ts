/* =========================================================
   Sitemap Generator (Node-safe, JSON-based)
   ========================================================= */

   import fs from "fs";
   import path from "path";
   import { fileURLToPath } from "url";

   /* ---------------------------------------------------------
      ESM dirname support
      --------------------------------------------------------- */

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);

   /* ---------------------------------------------------------
      IMPORT JSON DATA
      --------------------------------------------------------- */

   // Note: Use 'with' syntax for Node 22+, 'assert' for older versions
   import adventureData from "../client/src/lib/adventureData.json" with { type: "json" };

   /* ---------------------------------------------------------
      CONFIG
      --------------------------------------------------------- */

   const CONFIG = {
     siteUrl: "https://northkarakoram.com",
     outputDir: path.resolve(__dirname, "../client/public"),
     today: new Date().toISOString().split("T")[0],
   } as const;

   /* ---------------------------------------------------------
      TYPES
      --------------------------------------------------------- */

   type ChangeFreq =
     | "always"
     | "hourly"
     | "daily"
     | "weekly"
     | "monthly"
     | "yearly"
     | "never";

   interface SitemapImage {
     loc: string;
     title?: string;
     caption?: string;
   }

   interface SitemapURL {
     loc: string;
     lastmod?: string;
     changefreq?: ChangeFreq;
     priority?: number;
     images?: SitemapImage[];
   }

   interface AdventureItem {
     slug: string;
     name?: string;
     image?: string;
     gallery?: string[];
   }

   interface AdventureData {
     expeditions?: AdventureItem[];
     trekkings?: AdventureItem[];
     tours?: AdventureItem[];
     rockClimbing?: AdventureItem[];
   }

   /* ---------------------------------------------------------
      EXTRACT JSON DATA
      --------------------------------------------------------- */

   const {
     expeditions = [],
     trekkings = [],
     tours = [],
     rockClimbing = [],
   } = adventureData as AdventureData;

   /* ---------------------------------------------------------
      STATIC ROUTES
      --------------------------------------------------------- */

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

   /* ---------------------------------------------------------
      HELPERS
      --------------------------------------------------------- */

   function absoluteUrl(p: string): string {
     if (p.startsWith("http://") || p.startsWith("https://")) {
       return p;
     }
     const cleanPath = p.startsWith("/") ? p : `/${p}`;
     return `${CONFIG.siteUrl}${cleanPath}`;
   }

   function escapeXml(text: string): string {
     const xmlEntities: Record<string, string> = {
       "&": "&amp;",
       "<": "&lt;",
       ">": "&gt;",
       '"': "&quot;",
       "'": "&apos;",
     };
     return text.replace(/[&<>"']/g, (char) => xmlEntities[char] ?? char);
   }

   function normalizeImages(
     image?: string,
     gallery?: string[],
     title?: string
   ): SitemapImage[] | undefined {
     const images: SitemapImage[] = [];

     if (image) {
       images.push({ loc: absoluteUrl(image), title });
     }

     if (gallery?.length) {
       for (const img of gallery) {
         // Avoid duplicating the main image
         const imgUrl = absoluteUrl(img);
         if (!images.some((existing) => existing.loc === imgUrl)) {
           images.push({ loc: imgUrl, title });
         }
       }
     }

     return images.length > 0 ? images : undefined;
   }

   function createRouteEntry(
     basePath: string,
     item: AdventureItem,
     changefreq: ChangeFreq,
     priority: number
   ): SitemapURL | null {
     if (!item.slug) {
       console.warn(`⚠️  Skipping item without slug in ${basePath}`);
       return null;
     }

     return {
       loc: `${basePath}/${item.slug}`,
       lastmod: CONFIG.today,
       changefreq,
       priority,
       images: normalizeImages(item.image, item.gallery, item.name),
     };
   }

   /* ---------------------------------------------------------
      DYNAMIC ROUTES
      --------------------------------------------------------- */

   function generateDynamicRoutes(): SitemapURL[] {
     const routeConfigs: Array<{
       items: AdventureItem[];
       basePath: string;
       changefreq: ChangeFreq;
       priority: number;
     }> = [
       { items: expeditions, basePath: "/expedition", changefreq: "weekly", priority: 0.9 },
       { items: trekkings, basePath: "/trekking", changefreq: "weekly", priority: 0.8 },
       { items: tours, basePath: "/tour", changefreq: "weekly", priority: 0.8 },
       { items: rockClimbing, basePath: "/rock-climbing", changefreq: "monthly", priority: 0.7 },
     ];

     const urls: SitemapURL[] = [];

     for (const { items, basePath, changefreq, priority } of routeConfigs) {
       for (const item of items) {
         const entry = createRouteEntry(basePath, item, changefreq, priority);
         if (entry) {
           urls.push(entry);
         }
       }
     }

     return urls;
   }

   /* ---------------------------------------------------------
      XML GENERATOR
      --------------------------------------------------------- */

   function generateSitemapXML(urls: SitemapURL[]): string {
     const lines: string[] = [
       '<?xml version="1.0" encoding="UTF-8"?>',
       '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
       '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
     ];

     for (const u of urls) {
       lines.push("  <url>");
       lines.push(`    <loc>${escapeXml(absoluteUrl(u.loc))}</loc>`);
       lines.push(`    <lastmod>${u.lastmod ?? CONFIG.today}</lastmod>`);
       lines.push(`    <changefreq>${u.changefreq ?? "weekly"}</changefreq>`);
       lines.push(`    <priority>${u.priority ?? 0.5}</priority>`);

       if (u.images) {
         for (const img of u.images) {
           lines.push("    <image:image>");
           lines.push(`      <image:loc>${escapeXml(img.loc)}</image:loc>`);
           if (img.title) {
             lines.push(`      <image:title>${escapeXml(img.title)}</image:title>`);
           }
           if (img.caption) {
             lines.push(`      <image:caption>${escapeXml(img.caption)}</image:caption>`);
           }
           lines.push("    </image:image>");
         }
       }

       lines.push("  </url>");
     }

     lines.push("</urlset>");
     return lines.join("\n");
   }

   /* ---------------------------------------------------------
      ROBOTS.TXT
      --------------------------------------------------------- */

   function generateRobotsTxt(): string {
     return `User-agent: *
   Allow: /

   Sitemap: ${CONFIG.siteUrl}/sitemap.xml
   `;
   }

   /* ---------------------------------------------------------
      MAIN
      --------------------------------------------------------- */

   async function main(): Promise<void> {
     console.log("🚀 Generating sitemap...\n");

     try {
       // Ensure output directory exists
       await fs.promises.mkdir(CONFIG.outputDir, { recursive: true });

       const dynamicRoutes = generateDynamicRoutes();
       const allUrls = [...STATIC_ROUTES, ...dynamicRoutes];

       // Write files concurrently
       await Promise.all([
         fs.promises.writeFile(
           path.join(CONFIG.outputDir, "sitemap.xml"),
           generateSitemapXML(allUrls),
           "utf8"
         ),
         fs.promises.writeFile(
           path.join(CONFIG.outputDir, "robots.txt"),
           generateRobotsTxt(),
           "utf8"
         ),
       ]);

       console.log("✅ sitemap.xml generated");
       console.log("✅ robots.txt generated");
       console.log(`📄 Total URLs: ${allUrls.length}`);
       console.log(`   - Static: ${STATIC_ROUTES.length}`);
       console.log(`   - Dynamic: ${dynamicRoutes.length}`);
     } catch (error) {
       console.error("❌ Failed to generate sitemap:", error);
       process.exit(1);
     }
   }

   /* ---------------------------------------------------------
      RUN
      --------------------------------------------------------- */

   main();
