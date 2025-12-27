// src/seo/config.ts

import { PageSEO } from "./types";

// Site-wide configuration
export const SITE_CONFIG = {
  name: "North Karakoram",
  shortName: "North Karakoram",
  url: "https://northkarakoram.com",
  logo: "https://northkarakoram.com/logo.png",
  defaultImage: "https://northkarakoram.com/og-default.jpg",
  twitterHandle: "@northkarakoram",
  locale: "en_US",
  phone: "+92-333-0228111",
  email: "info@northkarakoram.com",
  dtsLicense: "2640",
  address: {
    streetAddress: "Gilgit Baltistan", // Update with actual address
    addressLocality: "Gilgit",
    addressRegion: "Gilgit-Baltistan",
    postalCode: "15100",
    addressCountry: "PK",
  },
  socialLinks: {
    facebook:
      "https://www.facebook.com/profile.php?id=100093782443750&rdid=j90AVS0yTRTTZeBk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AhZLfuCzQ%2F#",
    instagram:
      "https://www.instagram.com/northkarakoram?igsh=MWlseHgycWNybWx2MA%3D%3D&utm_source=qr",
    youtube: "https://youtube.com/@northkarakoram?si=PJHwQm8bP2nMLBwe",
    tiktok: "https://www.tiktok.com/@northkarakoram?_r=1&_t=ZS-92TItqmrAx7",
  },
};

// SEO configuration for each static page
export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    meta: {
      title:
        "North Karakoram Trek & Tours | K2 Expeditions, Trekking & Adventure Travel in Pakistan",
      description:
        "North Karakoram Trek & Tours (DTS License No.2640) - Premier adventure travel company in Gilgit-Baltistan. Expert-led K2 expeditions, trekking, mountaineering, cultural tours & jeep safaris across the Karakoram, Himalaya & Hindu Kush ranges.",
      keywords: [
        "North Karakoram",
        "Pakistan expeditions",
        "K2 expedition",
        "Gilgit-Baltistan tours",
        "trekking Pakistan",
        "mountaineering Pakistan",
        "Karakoram tours",
        "Himalayan adventures",
        "Broad Peak climbing",
        "Nanga Parbat expedition",
        "adventure travel Pakistan",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt:
        "Stunning view of K2 and Karakoram mountains in Gilgit-Baltistan, Pakistan",
    },
  },

  expeditions: {
    meta: {
      title:
        "Mountaineering Expeditions in Pakistan | K2, Broad Peak, Nanga Parbat & 8000m Peaks",
      description:
        "Join North Karakoram's expert-led expeditions to Pakistan's highest peaks. K2, Broad Peak, Gasherbrum I-IV, Nanga Parbat, Spantik, Rakaposhi & more. Full logistics support, experienced guides, and professional mountaineering services.",
      keywords: [
        "8000m expeditions Pakistan",
        "K2 climbing expedition",
        "Broad Peak expedition",
        "Nanga Parbat expedition",
        "Gasherbrum expedition",
        "Spantik expedition",
        "Rakaposhi expedition",
        "Pakistan mountaineering",
        "high altitude expeditions",
        "Karakoram climbing",
        "North Karakoram expeditions",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt:
        "Mountaineers climbing in the Karakoram range with North Karakoram Trek & Tours",
    },
  },

  trekking: {
    meta: {
      title:
        "Trekking in Pakistan | K2 Base Camp, Concordia, Snow Lake & Fairy Meadows Treks",
      description:
        "Discover Pakistan's most breathtaking trekking routes with North Karakoram. K2 Base Camp, Concordia, Gondogoro La, Snow Lake-Hispar, Fairy Meadows, Nangma Valley & more. Experienced local guides and full trekking support.",
      keywords: [
        "Pakistan trekking",
        "K2 base camp trek",
        "Concordia trek",
        "Gondogoro La trek",
        "Snow Lake Hispar trek",
        "Fairy Meadows trek",
        "Baltoro Glacier trek",
        "Karakoram trekking",
        "Gilgit-Baltistan trekking",
        "North Karakoram treks",
        "Nanga Parbat trek",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "Trekkers at Concordia with K2 and Broad Peak in background",
    },
  },

  tours: {
    meta: {
      title:
        "Cultural Tours in Pakistan | Hunza, Skardu, Deosai & Gilgit-Baltistan Tours",
      description:
        "Experience Pakistan's rich culture and stunning landscapes with North Karakoram. Guided tours to Hunza Valley, Skardu, Deosai Plateau, Khaplu, Fairy Meadows, Khunjerab Pass & Shandoor Polo Festival. Comfortable accommodations and authentic local experiences.",
      keywords: [
        "Gilgit-Baltistan tours",
        "Hunza Valley tour",
        "Skardu tour",
        "Deosai Plateau tour",
        "Khunjerab Pass tour",
        "cultural tours Pakistan",
        "Fairy Meadows tour",
        "Shandoor Polo Festival",
        "Khaplu Valley tour",
        "Northern Pakistan tourism",
        "jeep safari Pakistan",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "Beautiful Hunza Valley landscape with Rakaposhi peak",
    },
  },

  rockClimbing: {
    meta: {
      title:
        "Rock Climbing in Pakistan | Trango Towers, Shipton Spire & Karakoram Big Walls",
      description:
        "World-class rock climbing expeditions in Pakistan's Karakoram with North Karakoram. Trango Tower, Great Tower, Shipton Spire, Amin Braq, Mitre Peak & K7 climbing with technical support and experienced guides.",
      keywords: [
        "rock climbing Pakistan",
        "Trango Tower climbing",
        "Shipton Spire expedition",
        "big wall climbing Karakoram",
        "technical climbing Pakistan",
        "Amin Braq climbing",
        "Mitre Peak climbing",
        "Great Tower climbing",
        "K7 Charakusa climbing",
        "North Karakoram rock climbing",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "Climber on Trango Tower granite wall in Karakoram",
    },
  },

  about: {
    meta: {
      title:
        "About North Karakoram Trek & Tours | Gilgit-Baltistan's Premier Adventure Company",
      description:
        "North Karakoram Trek & Tours (DTS License No.2640) - A registered adventure travel company based in Gilgit-Baltistan. Founded by local professionals with firsthand mountain experience, committed to safe, authentic, and sustainable adventure travel.",
      keywords: [
        "North Karakoram Trek Tours",
        "Gilgit-Baltistan adventure company",
        "Pakistan expedition company",
        "mountaineering guides Pakistan",
        "local mountain guides",
        "sustainable adventure tourism",
        "DTS licensed tour operator",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "North Karakoram Trek & Tours team at K2 base camp",
    },
  },

  team: {
    meta: {
      title:
        "Our Expert Team | North Karakoram Trek & Tours Mountain Guides & Staff",
      description:
        "Meet North Karakoram's team of certified mountain guides, expedition leaders, cooks, porters, and logistics staff. Locally trained professionals with deep knowledge of Karakoram terrain, weather, and culture.",
      keywords: [
        "Gilgit-Baltistan mountain guides",
        "Pakistan expedition leaders",
        "certified climbing guides",
        "high altitude porters",
        "professional mountaineers Pakistan",
        "local trekking guides",
        "North Karakoram team",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "North Karakoram Trek & Tours experienced mountain guide team",
    },
  },

  travelInfo: {
    meta: {
      title:
        "Travel Information for Pakistan | Essential Guide for Gilgit-Baltistan Visitors",
      description:
        "Complete travel guide for Pakistan and Gilgit-Baltistan. Visa requirements, best time to visit, packing lists, health & safety, altitude acclimatization, weather conditions, and cultural tips for your Karakoram adventure.",
      keywords: [
        "Pakistan travel guide",
        "Gilgit-Baltistan travel info",
        "travel tips Pakistan",
        "best time visit Karakoram",
        "altitude sickness prevention",
        "Pakistan travel requirements",
        "trekking season Pakistan",
        "expedition season Karakoram",
      ],
    },
    openGraph: {
      type: "article",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "Travel essentials for Karakoram adventures in Pakistan",
    },
  },

  mountaineeringRules: {
    meta: {
      title:
        "Mountaineering Rules & Regulations in Pakistan | Official Guidelines",
      description:
        "Official mountaineering regulations, permit requirements, and climbing rules for Pakistan's peaks. Updated guidelines from Alpine Club of Pakistan and government authorities for Karakoram and Himalayan expeditions.",
      keywords: [
        "Pakistan mountaineering rules",
        "climbing permits Pakistan",
        "Alpine Club Pakistan regulations",
        "peak climbing rules Karakoram",
        "expedition permits Pakistan",
        "mountaineering guidelines",
        "K2 permit requirements",
      ],
    },
    openGraph: {
      type: "article",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "Mountaineering permit documents for Pakistan peaks",
    },
  },

  peakRoyalty: {
    meta: {
      title:
        "Peak Royalty Fees in Pakistan | 2024-2025 Updated Rates for All Peaks",
      description:
        "Complete guide to peak royalty and permit fees for climbing in Pakistan. Updated 2024-2025 rates for K2, Broad Peak, Nanga Parbat, Gasherbrum, Spantik, and all trekking peaks in the Karakoram.",
      keywords: [
        "Pakistan peak royalty fees",
        "climbing permit fees Pakistan",
        "K2 permit cost",
        "8000m peak fees",
        "Broad Peak royalty",
        "trekking peak permits",
        "mountaineering costs Pakistan",
        "Gasherbrum permit fee",
      ],
    },
    openGraph: {
      type: "article",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "Peak royalty fee chart for Pakistan Karakoram mountains",
    },
  },

  pakistanVisa: {
    meta: {
      title:
        "Pakistan Visa Guide | Tourist & Mountaineering Visa Requirements 2024",
      description:
        "Complete Pakistan visa guide for tourists and mountaineers. E-visa process, required documents, processing times, visa on arrival, and NOC requirements for Gilgit-Baltistan travel and expeditions.",
      keywords: [
        "Pakistan visa",
        "Pakistan tourist visa",
        "Pakistan e-visa",
        "mountaineering visa Pakistan",
        "Pakistan visa requirements",
        "Gilgit-Baltistan travel permit",
        "NOC Pakistan travel",
        "visa on arrival Pakistan",
      ],
    },
    openGraph: {
      type: "article",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "Pakistan visa application guide for travelers",
    },
  },

  paymentMethod: {
    meta: {
      title:
        "Payment Methods | Secure Booking with North Karakoram Trek & Tours",
      description:
        "Secure payment options for booking your expedition, trek, or tour with North Karakoram. Bank transfer, credit card, PayPal, and installment plans available. 100% secure transactions and flexible booking.",
      keywords: [
        "expedition payment",
        "secure booking Pakistan tours",
        "tour payment options",
        "expedition deposit",
        "North Karakoram booking",
        "adventure travel payment",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "Secure payment options at North Karakoram Trek & Tours",
    },
  },

  contact: {
    meta: {
      title:
        "Contact Us | North Karakoram Trek & Tours - Plan Your Pakistan Adventure",
      description:
        "Contact North Karakoram Trek & Tours for inquiries, custom trip planning, and bookings. Based in Gilgit-Baltistan, available for your Pakistan mountaineering, trekking, and tour questions. Get a free quote today!",
      keywords: [
        "contact North Karakoram",
        "Pakistan tour inquiry",
        "expedition booking Pakistan",
        "custom trip planning Karakoram",
        "Gilgit-Baltistan tour operator",
        "mountaineering inquiry",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: "Contact North Karakoram Trek & Tours team",
    },
  },

  search: {
    meta: {
      title: "Search Expeditions, Treks & Tours | North Karakoram Trek & Tours",
      description:
        "Search our complete collection of expeditions, treks, and tours in Gilgit-Baltistan and Pakistan. Filter by difficulty, duration, and destination to find your perfect Karakoram adventure.",
      keywords: [
        "search expeditions Pakistan",
        "find Karakoram tours",
        "adventure search",
        "trek finder Pakistan",
      ],
      noindex: true,
    },
    openGraph: {
      type: "website",
    },
  },

  notFound: {
    meta: {
      title: "Page Not Found | North Karakoram Trek & Tours",
      description:
        "The page you are looking for could not be found. Explore our expeditions, treks, and tours in Pakistan's Karakoram, Himalaya, and Hindu Kush ranges.",
      noindex: true,
      nofollow: true,
    },
  },
};

// Dynamic SEO generators for expedition/trek/tour/climbing detail pages
export const DYNAMIC_SEO = {
  expedition: (name: string, slug: string) => ({
    meta: {
      title: `${name} | North Karakoram Trek & Tours Pakistan`,
      description: `Join the ${name} with North Karakoram Trek & Tours. Expert guides, full logistics support, permits, and professional mountaineering services for your Pakistan climbing adventure.`,
      keywords: [
        name.toLowerCase(),
        `${name.toLowerCase()} Pakistan`,
        "mountaineering Pakistan",
        "Karakoram expedition",
        "climbing Pakistan",
        "North Karakoram expeditions",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: `${name} with North Karakoram Trek & Tours`,
    },
  }),

  trek: (name: string, slug: string) => ({
    meta: {
      title: `${name} | North Karakoram Trek & Tours Pakistan`,
      description: `Experience the ${name} with North Karakoram Trek & Tours. Professional local guides, camping equipment, porters, and full trekking support in Gilgit-Baltistan.`,
      keywords: [
        name.toLowerCase(),
        `${name.toLowerCase()} Pakistan`,
        "trekking Pakistan",
        "Karakoram trekking",
        "Gilgit-Baltistan treks",
        "North Karakoram treks",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: `${name} with North Karakoram Trek & Tours`,
    },
  }),

  tour: (name: string, slug: string) => ({
    meta: {
      title: `${name} | North Karakoram Trek & Tours Pakistan`,
      description: `Explore the ${name} with North Karakoram Trek & Tours. Comfortable transport, quality accommodations, and authentic cultural experiences in Gilgit-Baltistan.`,
      keywords: [
        name.toLowerCase(),
        `${name.toLowerCase()} Pakistan`,
        "Gilgit-Baltistan tours",
        "cultural tours Pakistan",
        "Northern Pakistan tourism",
        "North Karakoram tours",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/logo.jpeg`,
      imageAlt: `${name} with North Karakoram Trek & Tours`,
    },
  }),

  rockClimbing: (name: string, slug: string) => ({
    meta: {
      title: `${name} | North Karakoram Trek & Tours Pakistan`,
      description: `Technical climbing expedition to ${name} with North Karakoram Trek & Tours. Professional guides, permits, logistics, and full climbing support in the Karakoram.`,
      keywords: [
        name.toLowerCase(),
        `${name.toLowerCase()} climbing`,
        "rock climbing Pakistan",
        "Karakoram big walls",
        "technical climbing",
        "North Karakoram climbing",
      ],
    },
    openGraph: {
      type: "website",
      image: `${SITE_CONFIG.url}/images/rock-climbing/${slug}.jpg`,
      imageAlt: `${name} climbing with North Karakoram Trek & Tours`,
    },
  }),
};

// Helper to get page SEO by route
export function getPageSEOByRoute(route: string): PageSEO | undefined {
  const routeMap: Record<string, keyof typeof PAGE_SEO> = {
    "/": "home",
    "/expedition": "expeditions",
    "/trekking": "trekking",
    "/tour": "tours",
    "/rock-climbing": "rockClimbing",
    "/about": "about",
    "/team": "team",
    "/travel-info": "travelInfo",
    "/mountaineering-rules": "mountaineeringRules",
    "/peak-royalty": "peakRoyalty",
    "/pakistan-visa": "pakistanVisa",
    "/payment-method": "paymentMethod",
    "/contact": "contact",
    "/search": "search",
  };

  const key = routeMap[route];
  return key ? PAGE_SEO[key] : undefined;
}

// Helper to get dynamic SEO for detail pages
export function getDynamicSEO(
  type: "expedition" | "trek" | "tour" | "rockClimbing",
  name: string,
  slug: string
) {
  return DYNAMIC_SEO[type](name, slug);
}
