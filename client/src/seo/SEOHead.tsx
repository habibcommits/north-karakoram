// src/seo/SEOHead.tsx

import { Helmet } from 'react-helmet-async';
import { PageSEO } from './types';
import { SITE_CONFIG } from './config';

interface SEOHeadProps {
  seo: PageSEO;
  path?: string;
}

export function SEOHead({ seo, path = '' }: SEOHeadProps) {
  const { meta, openGraph, structuredData } = seo;

  const canonicalUrl = meta.canonical || `${SITE_CONFIG.url}${path}`;
  const ogTitle = openGraph?.title || meta.title;
  const ogDescription = openGraph?.description || meta.description;
  const ogImage = openGraph?.image || SITE_CONFIG.defaultImage;
  // const twitterCard = twitter?.card || 'summary_large_image';

  // Combine robots directives
  const robotsContent = [
    meta.noindex ? 'noindex' : 'index',
    meta.nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && meta.keywords.length > 0 && (
        <meta name="keywords" content={meta.keywords.join(', ')} />
      )}
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:url" content={openGraph?.url || canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      {openGraph?.imageAlt && (
        <meta property="og:image:alt" content={openGraph.imageAlt} />
      )}
      <meta property="og:site_name" content={openGraph?.siteName || SITE_CONFIG.name} />
      <meta property="og:locale" content={openGraph?.locale || SITE_CONFIG.locale} />

      {/* Twitter */}
      {/* <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitter?.site || SITE_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={twitter?.creator || SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={twitter?.title || ogTitle} />
      <meta name="twitter:description" content={twitter?.description || ogDescription} />
      <meta name="twitter:image" content={twitter?.image || ogImage} />
      {(twitter?.imageAlt || openGraph?.imageAlt) && (
        <meta name="twitter:image:alt" content={twitter?.imageAlt || openGraph?.imageAlt} />
      )} */}

      {/* Additional SEO Meta Tags */}
      <meta name="author" content={SITE_CONFIG.name} />
      <meta name="publisher" content={SITE_CONFIG.name} />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="PK" />
      <meta name="geo.placename" content="Pakistan" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(structuredData) ? structuredData : structuredData
          )}
        </script>
      )}
    </Helmet>
  );
}
