// src/seo/types.ts

export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface OpenGraphMeta {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "product" | "profile";
  url?: string;
  siteName?: string;
  locale?: string;
}

export interface TwitterMeta {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export interface PageSEO {
  meta: SEOMeta;
  openGraph?: OpenGraphMeta;
  twitter?: TwitterMeta;
  structuredData?: object | object[];
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface DynamicPageData {
  title: string;
  description: string;
  image?: string;
  price?: number;
  currency?: string;
  duration?: string;
  difficulty?: string;
  maxAltitude?: string;
  rating?: number;
  reviewCount?: number;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  datePublished?: string;
  dateModified?: string;
}
