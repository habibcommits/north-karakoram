// src/seo/hooks/useBreadcrumbs.ts

import { useEffect, useMemo } from "react";
import { useLocation } from "wouter";
import { useSEOContext } from "../SEOContext";
import { BreadcrumbItem } from "../types";

// Route to label mapping
const ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  "/expedition": "Expeditions",
  "/trekking": "Trekking",
  "/tour": "Tours",
  "/rock-climbing": "Rock Climbing",
  "/about": "About Us",
  "/team": "Our Team",
  "/travel-info": "Travel Information",
  "/mountaineering-rules": "Mountaineering Rules",
  "/peak-royalty": "Peak Royalty",
  "/pakistan-visa": "Pakistan Visa",
  "/payment-method": "Payment Methods",
  "/contact": "Contact",
  "/search": "Search",
};

export function useBreadcrumbs(customItems?: BreadcrumbItem[]) {
  const [location] = useLocation();
  const { setBreadcrumbs } = useSEOContext();

  const breadcrumbs = useMemo(() => {
    if (customItems) {
      return [{ name: "Home", path: "/" }, ...customItems];
    }

    const pathSegments = location.split("/").filter(Boolean);
    const items: BreadcrumbItem[] = [{ name: "Home", path: "/" }];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = ROUTE_LABELS[currentPath] || formatSegmentLabel(segment);
      items.push({ name: label, path: currentPath });
    });

    return items;
  }, [location, customItems]);

  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
  }, [breadcrumbs, setBreadcrumbs]);

  return breadcrumbs;
}

function formatSegmentLabel(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
