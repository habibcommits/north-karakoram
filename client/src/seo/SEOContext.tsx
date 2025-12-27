// src/seo/SEOContext.tsx

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { PageSEO, BreadcrumbItem, DynamicPageData } from './types';
import { SITE_CONFIG } from './config';

interface SEOContextType {
  currentSEO: PageSEO | null;
  breadcrumbs: BreadcrumbItem[];
  setSEO: (seo: PageSEO) => void;
  setBreadcrumbs: (items: BreadcrumbItem[]) => void;
  generateDynamicSEO: (
    type: 'expedition' | 'trekking' | 'tour' | 'rock-climbing',
    slug: string,
    data: DynamicPageData
  ) => PageSEO;
  siteConfig: typeof SITE_CONFIG;
}

const SEOContext = createContext<SEOContextType | undefined>(undefined);

export function SEOProvider({ children }: { children: ReactNode }) {
  const [currentSEO, setCurrentSEO] = useState<PageSEO | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  const setSEO = useCallback((seo: PageSEO) => {
    setCurrentSEO(seo);
  }, []);

  const generateDynamicSEO = useCallback(
    (
      type: 'expedition' | 'trekking' | 'tour' | 'rock-climbing',
      slug: string,
      data: DynamicPageData
    ): PageSEO => {
      const typeLabels = {
        expedition: 'Expedition',
        trekking: 'Trek',
        tour: 'Tour',
        'rock-climbing': 'Rock Climbing',
      };

      const typeLabel = typeLabels[type];
      const canonicalUrl = `${SITE_CONFIG.url}/${type}/${slug}`;

      return {
        meta: {
          title: `${data.title} | ${typeLabel} in Pakistan | ${SITE_CONFIG.shortName}`,
          description: data.description.slice(0, 160),
          keywords: [
            data.title,
            `${type} Pakistan`,
            `${data.title} ${type}`,
            'Pakistan adventure',
            SITE_CONFIG.shortName,
          ],
          canonical: canonicalUrl,
        },
        openGraph: {
          title: `${data.title} - ${typeLabel}`,
          description: data.description.slice(0, 200),
          image: data.image || SITE_CONFIG.defaultImage,
          imageAlt: `${data.title} - ${typeLabel} in Pakistan`,
          type: 'product',
          url: canonicalUrl,
        },
        // twitter: {
        //   card: 'summary_large_image',
        //   title: `${data.title} - ${typeLabel}`,
        //   description: data.description.slice(0, 200),
        //   image: data.image || SITE_CONFIG.defaultImage,
        // },
        structuredData: generateProductSchema(type, slug, data),
      };
    },
    []
  );

  return (
    <HelmetProvider>
      <SEOContext.Provider
        value={{
          currentSEO,
          breadcrumbs,
          setSEO,
          setBreadcrumbs,
          generateDynamicSEO,
          siteConfig: SITE_CONFIG,
        }}
      >
        {children}
      </SEOContext.Provider>
    </HelmetProvider>
  );
}

export function useSEOContext() {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEOContext must be used within SEOProvider');
  }
  return context;
}

// Generate Product/Service schema for detail pages
function generateProductSchema(
  type: string,
  slug: string,
  data: DynamicPageData
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.title,
    description: data.description,
    image: data.image || SITE_CONFIG.defaultImage,
    url: `${SITE_CONFIG.url}/${type}/${slug}`,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    offers: {
      '@type': 'Offer',
      // price: data.price || 0,
      priceCurrency: data.currency || 'PKR',
      availability: `https://schema.org/${data.availability || 'InStock'}`,
      url: `${SITE_CONFIG.url}/${type}/${slug}`,
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    },
    ...(data.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.rating,
        reviewCount: data.reviewCount || 1,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    additionalProperty: [
      ...(data.difficulty
        ? [
          {
            '@type': 'PropertyValue',
            name: 'Difficulty',
            value: data.difficulty,
          },
        ]
        : []),
      ...(data.maxAltitude
        ? [
          {
            '@type': 'PropertyValue',
            name: 'Maximum Altitude',
            value: data.maxAltitude,
          },
        ]
        : []),
    ],
  };
}
