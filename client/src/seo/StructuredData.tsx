// src/seo/StructuredData.tsx

import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from './config';
import { BreadcrumbItem } from './types';

// Organization Schema - Add to root/layout
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: SITE_CONFIG.logo,
    },
    image: SITE_CONFIG.defaultImage,
    description: 'Premier mountaineering expeditions and trekking adventures in Pakistan.',
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      ...SITE_CONFIG.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6844,
      longitude: 73.0479,
    },
    sameAs: Object.values(SITE_CONFIG.socialLinks),
    // priceRange: '$$$',
    // openingHoursSpecification: {
    //   '@type': 'OpeningHoursSpecification',
    //   dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    //   opens: '09:00',
    //   closes: '18:00',
    // },
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Adventure Tours & Expeditions',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Mountaineering Expeditions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'K2 Expedition',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Broad Peak Expedition',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Trekking Tours',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Cultural Tours',
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Website Schema with SearchAction
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: 'Premier mountaineering expeditions and trekking adventures in Pakistan.',
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Breadcrumb Schema
interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// FAQ Schema for information pages
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  if (items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: SITE_CONFIG.logo,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    address: {
      '@type': 'PostalAddress',
      ...SITE_CONFIG.address,
    },
    // priceRange: '$$$',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Article Schema for blog/info pages
interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  path: string;
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName = SITE_CONFIG.name,
  path,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logo,
      },
    },
    datePublished: datePublished,
    // dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}${path}`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Event Schema for expeditions with dates
interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
  price: number;
  currency?: string;
  url: string;
  availability?: 'InStock' | 'SoldOut' | 'PreOrder';
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  price,
  currency = 'USD',
  url,
  availability = 'InStock',
}: EventSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: name,
    description: description,
    startDate: startDate,
    endDate: endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
      },
    },
    image: image,
    organizer: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url: url,
      validFrom: new Date().toISOString(),
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// TouristTrip Schema
interface TouristTripSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  provider?: string;
  duration?: string;
  audience?: string;
}

export function TouristTripSchema({
  name,
  description,
  image,
  url,
  provider = SITE_CONFIG.name,
  duration,
  audience,
}: TouristTripSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: name,
    description: description,
    image: image,
    url: url,
    provider: {
      '@type': 'TravelAgency',
      name: provider,
      url: SITE_CONFIG.url,
    },
    ...(duration && { duration: duration }),
    ...(audience && {
      audience: {
        '@type': 'Audience',
        audienceType: audience,
      },
    }),
    touristType: ['Adventure tourist', 'Mountaineer', 'Trekker'],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Collection page schema for list pages
interface CollectionSchemaProps {
  name: string;
  description: string;
  url: string;
  items: Array<{
    name: string;
    url: string;
    image?: string;
  }>;
}

export function CollectionSchema({ name, description, url, items }: CollectionSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: name,
    description: description,
    url: url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
        ...(item.image && { image: item.image }),
      })),
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
