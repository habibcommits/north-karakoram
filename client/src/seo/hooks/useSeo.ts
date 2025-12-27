// src/seo/hooks/useSEO.ts

import { useEffect } from "react";
import { useSEOContext } from "../SEOContext";
import { PageSEO, DynamicPageData } from "../types";
import { PAGE_SEO } from "../config";

// Hook for static pages
export function usePageSEO(pageKey: keyof typeof PAGE_SEO) {
  const { setSEO } = useSEOContext();
  const pageSEO = PAGE_SEO[pageKey];

  useEffect(() => {
    if (pageSEO) {
      setSEO(pageSEO);
    }
  }, [pageKey, pageSEO, setSEO]);

  return pageSEO;
}

// Hook for dynamic pages (detail pages)
export function useDynamicSEO(
  type: "expedition" | "trekking" | "tour" | "rock-climbing",
  slug: string,
  data: DynamicPageData | null
) {
  const { setSEO, generateDynamicSEO } = useSEOContext();

  useEffect(() => {
    if (data && slug) {
      const seo = generateDynamicSEO(type, slug, data);
      setSEO(seo);
    }
  }, [type, slug, data, generateDynamicSEO, setSEO]);
}

// Hook for custom SEO
export function useCustomSEO(seo: PageSEO) {
  const { setSEO } = useSEOContext();

  useEffect(() => {
    setSEO(seo);
  }, [seo, setSEO]);
}
