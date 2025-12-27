import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import expeditionImage from "@assets/stock_images/beautiful_mountain_p_1088467d.jpg";
import {
  AlertCircle,
  Backpack,
  Calendar,
  DollarSign,
  Heart,
  Plane,
  Users,
  Sparkles,
  ChevronRight,
  CheckCircle,
  MapPin,
  Mountain,
  Shield,
  Clock,
  Thermometer,
  Wifi,
  CreditCard,
  Camera,
  Sun,
  CloudSnow,
  Leaf,
  Flower2,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  FileText,
  HelpCircle,
} from "lucide-react";
import { usePageSEO } from "@/seo/hooks/useSeo";
import { SEOHead } from "@/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/seo/StructuredData";
import { SITE_CONFIG } from "@/seo/config";

const quickFacts = [
  { icon: Globe, label: "Language", value: "Urdu, Balti, English" },
  { icon: CreditCard, label: "Currency", value: "Pakistani Rupee (PKR)" },
  { icon: Clock, label: "Time Zone", value: "PKT (UTC+5)" },
  { icon: Thermometer, label: "Summer Temp", value: "15-25°C (59-77°F)" },
];

const seasons = [
  {
    icon: Sun,
    name: "Summer",
    months: "June - August",
    description: "Prime trekking & mountaineering season",
    highlights: ["K2 Base Camp", "Gondogoro La", "High passes open"],
    recommended: true,
  },
  {
    icon: Flower2,
    name: "Spring",
    months: "April - May",
    description: "Cherry blossoms & cultural tours",
    highlights: ["Hunza Valley", "Lower altitude treks", "Pleasant weather"],
    recommended: false,
  },
  {
    icon: Leaf,
    name: "Autumn",
    months: "September - October",
    description: "Golden foliage & clear skies",
    highlights: ["Photography tours", "Valley exploration", "Stable weather"],
    recommended: false,
  },
  {
    icon: CloudSnow,
    name: "Winter",
    months: "December - March",
    description: "Snow leopard tracking & winter adventures",
    highlights: ["Wildlife tracking", "Snow activities", "Fewer tourists"],
    recommended: false,
  },
];

const packingCategories = [
  {
    category: "Clothing",
    items: [
      "Base layers (moisture-wicking)",
      "Insulating fleece/down jacket",
      "Waterproof/windproof shell",
      "Trekking pants & shorts",
      "Warm hat & sun hat",
      "Gloves (liner & insulated)",
    ],
  },
  {
    category: "Footwear",
    items: [
      "Broken-in trekking boots",
      "Camp shoes/sandals",
      "Gaiters for snow",
      "Moisture-wicking socks",
    ],
  },
  {
    category: "Gear",
    items: [
      "Daypack (30-40L)",
      "Trekking poles",
      "Headlamp + batteries",
      "Water bottles/hydration bladder",
      "Sleeping bag liner",
    ],
  },
  {
    category: "Protection",
    items: [
      "High SPF sunscreen",
      "UV-blocking sunglasses",
      "Lip balm with SPF",
      "First aid kit",
      "Personal medications",
    ],
  },
];

const sections = [
  {
    id: "visa",
    icon: FileText,
    title: "Visa Requirements",
    subtitle: "Entry documentation made simple",
    content: [
      {
        heading: "Tourist E-Visa",
        text: "Most nationalities are eligible for Pakistan's convenient online E-Visa system. Apply from home and receive your visa electronically.",
      },
      {
        heading: "Trekking Visa",
        text: "For restricted zones like Baltoro Glacier and K2 Base Camp, a specific Trekking Visa with special permits is required.",
      },
      {
        heading: "Our Support",
        text: "As your licensed tour operator, North Karakoram provides the official Letter of Invitation (LOI) and all supporting documents for your visa application.",
      },
    ],
  },
  {
    id: "getting-here",
    icon: Plane,
    title: "Getting Here",
    subtitle: "Your journey to the mountains",
    content: [
      {
        heading: "International Arrival",
        text: "Fly into Islamabad International Airport (ISB). We recommend arriving 1-2 days early to rest and handle any logistical delays.",
      },
      {
        heading: "Scenic Flight",
        text: "A breathtaking 1-hour flight from Islamabad to Skardu offers views of Nanga Parbat and the Karakoram range. Note: Weather dependent.",
      },
      {
        heading: "Karakoram Highway",
        text: "If flights are cancelled, travel the legendary KKH - an adventure itself, following the Indus River through stunning landscapes.",
      },
    ],
  },
  {
    id: "health",
    icon: Heart,
    title: "Health & Altitude",
    subtitle: "Stay safe at elevation",
    content: [
      {
        heading: "Acclimatization",
        text: "Skardu sits at 2,228m (7,310ft). Our itineraries feature gradual ascent profiles designed to prevent Acute Mountain Sickness (AMS).",
      },
      {
        heading: "Physical Fitness",
        text: "Ensure you're physically prepared for your chosen activity. Technical treks require good cardiovascular endurance and stamina.",
      },
      {
        heading: "Travel Insurance",
        text: "Mandatory for all trekkers. Must cover medical evacuation (helicopter rescue) up to 6,000m or your trek's maximum altitude.",
      },
    ],
  },
  {
    id: "money",
    icon: DollarSign,
    title: "Money & Connectivity",
    subtitle: "Practical tips for remote areas",
    content: [
      {
        heading: "Currency",
        text: "The Pakistani Rupee (PKR) is the local currency. Exchange rates are favorable for most major currencies.",
      },
      {
        heading: "Cash is Essential",
        text: "ATMs are unreliable in remote mountain regions. Carry sufficient cash for personal expenses, souvenirs, and tips.",
      },
      {
        heading: "Mobile Connectivity",
        text: "International roaming often doesn't work. SCOM is the local provider - we'll help you get a local SIM for 4G in major towns.",
      },
    ],
  },
  {
    id: "culture",
    icon: Users,
    title: "Cultural Etiquette",
    subtitle: "Respect local traditions",
    content: [
      {
        heading: "Dress Code",
        text: "Modest clothing is appreciated. For both men and women, covering shoulders and knees shows respect for local customs.",
      },
      {
        heading: "Photography",
        text: "Always ask permission before photographing locals, especially women. Most people are friendly and happy to pose.",
      },
      {
        heading: "Leave No Trace",
        text: "The mountains are sacred to many communities. Follow Leave No Trace principles to keep our environment pristine.",
      },
    ],
  },
];

const faqs = [
  {
    question: "Do I need a visa to visit Pakistan?",
    answer: "Yes, most nationalities require a visa. Pakistan offers an easy E-Visa system for tourists. We provide all necessary support documents including the Letter of Invitation.",
  },
  {
    question: "How fit do I need to be for trekking?",
    answer: "Fitness requirements vary by trek. For K2 Base Camp, you should be able to walk 6-8 hours per day with a daypack. We recommend starting a training program 3-4 months before your trip.",
  },
  {
    question: "Is it safe to travel to Gilgit-Baltistan?",
    answer: "Gilgit-Baltistan is one of the safest regions in Pakistan for tourists. The local communities are incredibly hospitable, and crime against tourists is virtually unheard of.",
  },
  {
    question: "What about altitude sickness?",
    answer: "Our itineraries are designed with proper acclimatization. We ascend gradually, include rest days, and our guides are trained to recognize and manage AMS symptoms.",
  },
];

export default function TravelInfo() {
  const seo = usePageSEO('travelInfo');

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Travel Information', path: '/travel-info' },
  ];

  const [heroVisible, setHeroVisible] = useState(false);
  const [factsVisible, setFactsVisible] = useState(false);
  const [seasonsVisible, setSeasonsVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState(false);
  const [packingVisible, setPackingVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  const heroRef = useRef<HTMLElement>(null);
  const factsRef = useRef<HTMLElement>(null);
  const seasonsRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLElement>(null);
  const packingRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const createObserver = (
      setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setter(true);
      }, observerOptions);
    };

    const observers = [
      { ref: heroRef, observer: createObserver(setHeroVisible) },
      { ref: factsRef, observer: createObserver(setFactsVisible) },
      { ref: seasonsRef, observer: createObserver(setSeasonsVisible) },
      { ref: sectionsRef, observer: createObserver(setSectionsVisible) },
      { ref: packingRef, observer: createObserver(setPackingVisible) },
      { ref: faqRef, observer: createObserver(setFaqVisible) },
      { ref: ctaRef, observer: createObserver(setCtaVisible) },
    ];

    observers.forEach(({ ref, observer }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observers.forEach(({ observer }) => observer.disconnect());
  }, []);

  return (
    <>
      {seo && <SEOHead seo={seo} path="/travel-info" />}
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema
        title="Travel Information for Pakistan & Gilgit-Baltistan"
        description="Complete travel guide for visiting Pakistan's northern areas including visa requirements, best time to visit, packing lists, and health & safety tips."
        image={`${SITE_CONFIG.url}/logo.jpeg`}
        datePublished="2025-12-27"
        dateModified="2025-12-27"
        path="/travel-info"
      />
      <FAQSchema items={faqs} />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-1">
          {/* Hero Section */}
          <section ref={heroRef} className="relative h-[60vh] min-h-[500px]">
            <img
              src={expeditionImage}
              alt="Travel preparation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full" />
              <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/10 rounded-full" />
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-1000 ${heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.6)" }}
                >
                  <span className="text-white/90 text-sm font-semibold tracking-wide">
                    PLAN YOUR JOURNEY
                  </span>
                </div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Travel Information
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                  Everything you need to know for a seamless adventure in the
                  Karakoram and Himalayan mountains
                </p>

                {/* Quick Navigation Pills */}
                <div className="hidden lg:flex flex-wrap justify-center gap-3">
                  {["Visa", "Getting Here", "Seasons", "Packing"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Quick Facts Bar */}
          {/* <section
          ref={factsRef}
          className="py-8 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #006F61 0%, #005249 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${factsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                    }`}
                  style={{
                    transitionDelay: factsVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <fact.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/60 text-xs font-medium mb-1">
                    {fact.label}
                  </p>
                  <p className="text-white font-semibold">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

          {/* Introduction Section */}
          <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "#006F61" }}
                  >
                    ESSENTIAL INFORMATION
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                  Preparing for Your{" "}
                  <span
                    className="relative inline-block"
                    style={{ color: "#006F61" }}
                  >
                    Adventure
                    {/* <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8.5C50 2.5 150 2.5 198 8.5"
                      stroke="#006F61"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeOpacity="0.3"
                    />
                  </svg> */}
                  </span>
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                  An expedition to the Karakoram and Himalayas is the adventure of
                  a lifetime. To ensure your journey with North Karakoram is
                  seamless and memorable, we've compiled everything you need to
                  know before you pack your bags.
                </p>
              </div>
            </div>
          </section>

          {/* Best Time to Visit Section */}
          <section
            ref={seasonsRef}
            id="seasons"
            className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${seasonsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "#006F61" }}
                  >
                    BEST TIME TO VISIT
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                  Choose Your <span style={{ color: "#006F61" }}>Season</span>
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  Each season offers a unique experience in the mountains
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {seasons.map((season, index) => (
                  <Card
                    key={index}
                    className={`group relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-gray-100 ${season.recommended ? "ring-2 ring-[#006F61]" : ""
                      } ${seasonsVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: seasonsVisible
                        ? `${200 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    {season.recommended && (
                      <div
                        className="absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white rounded-bl-xl z-10"
                        style={{ backgroundColor: "#006F61" }}
                      >
                        RECOMMENDED
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                      >
                        <season.icon
                          className="w-7 h-7"
                          style={{ color: "#006F61" }}
                        />
                      </div>

                      <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">
                        {season.name}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{ color: "#006F61" }}>
                        {season.months}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {season.description}
                      </p>

                      <ul className="space-y-2">
                        {season.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-500"
                          >
                            <CheckCircle
                              className="w-4 h-4 flex-shrink-0"
                              style={{ color: "#006F61" }}
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div
                      className="h-1 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: "#006F61" }}
                    />
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Main Information Sections */}
          <section
            ref={sectionsRef}
            className="py-20 md:py-28 bg-white relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${sectionsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "#006F61" }}
                  >
                    DETAILED GUIDES
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                  Everything You{" "}
                  <span style={{ color: "#006F61" }}>Need to Know</span>
                </h2>
              </div>

              <div className="max-w-6xl mx-auto">
                {/* Desktop: Side Navigation + Content */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-8">
                  {/* Navigation */}
                  <div className="col-span-4">
                    <div className="sticky top-32 space-y-2">
                      {sections.map((section, index) => (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(index)}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${activeSection === index
                            ? "bg-[#006F61] text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeSection === index
                              ? "bg-white/20"
                              : "bg-white"
                              }`}
                          >
                            <section.icon
                              className={`w-5 h-5 ${activeSection === index
                                ? "text-white"
                                : "text-[#006F61]"
                                }`}
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{section.title}</p>
                            <p
                              className={`text-xs ${activeSection === index
                                ? "text-white/70"
                                : "text-gray-500"
                                }`}
                            >
                              {section.subtitle}
                            </p>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 ml-auto transition-transform ${activeSection === index ? "translate-x-1" : ""
                              }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-8">
                    <Card className="border-gray-100 shadow-xl overflow-hidden">
                      <div
                        className="h-2"
                        style={{ backgroundColor: "#006F61" }}
                      />
                      <CardContent className="p-8 md:p-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                          >
                            {(() => {
                              const Icon = sections[activeSection].icon;
                              return (
                                <Icon
                                  className="w-8 h-8"
                                  style={{ color: "#006F61" }}
                                />
                              );
                            })()}
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-2xl text-gray-900">
                              {sections[activeSection].title}
                            </h3>
                            <p className="text-gray-500">
                              {sections[activeSection].subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {sections[activeSection].content.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                              >
                                <CheckCircle
                                  className="w-4 h-4"
                                  style={{ color: "#006F61" }}
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                  {item.heading}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Mobile: Accordion Style */}
                <div className="lg:hidden space-y-4">
                  {sections.map((section, index) => (
                    <Card
                      key={section.id}
                      className={`border-gray-100 overflow-hidden transition-all duration-500 ${sectionsVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                      style={{
                        transitionDelay: sectionsVisible
                          ? `${200 + index * 100}ms`
                          : "0ms",
                      }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                          >
                            <section.icon
                              className="w-6 h-6"
                              style={{ color: "#006F61" }}
                            />
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-lg text-gray-900">
                              {section.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                              {section.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {section.content.map((item, idx) => (
                            <div key={idx}>
                              <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                                <CheckCircle
                                  className="w-4 h-4"
                                  style={{ color: "#006F61" }}
                                />
                                {item.heading}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed ml-6">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Packing Essentials Section */}
          <section
            ref={packingRef}
            id="packing"
            className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${packingVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "#006F61" }}
                  >
                    PACKING GUIDE
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                  What to <span style={{ color: "#006F61" }}>Bring</span>
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  We provide camping equipment. Here's your personal gear
                  checklist.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {packingCategories.map((category, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-gray-100 ${packingVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: packingVisible
                        ? `${200 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <CardContent className="p-6">
                      <h3
                        className="font-heading font-bold text-lg mb-4 pb-3 border-b"
                        style={{ borderColor: "rgba(0, 111, 97, 0.2)" }}
                      >
                        {category.category}
                      </h3>
                      <ul className="space-y-3">
                        {category.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <CheckCircle
                              className="w-4 h-4 flex-shrink-0 mt-0.5"
                              style={{ color: "#006F61" }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Download Packing List CTA */}
              <div
                className={`text-center mt-12 transition-all duration-700 delay-500 ${packingVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <p className="text-gray-500 mb-4">
                  Want a complete detailed packing list?
                </p>
                <Button
                  variant="outline"
                  className="w-full md:w-fit border-2 font-semibold"
                  style={{ borderColor: "#006F61", color: "#006F61" }}
                >
                  Download Full Packing Guide
                  <ArrowRight className="hidden md:block w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section
            ref={faqRef}
            className="py-20 md:py-28 bg-white relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${faqVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <HelpCircle className="w-4 h-4" style={{ color: "#006F61" }} />
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "#006F61" }}
                  >
                    FAQ
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                  Common <span style={{ color: "#006F61" }}>Questions</span>
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`border border-gray-200 rounded-2xl overflow-hidden bg-white transition-all duration-700 ${faqVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: faqVisible
                        ? `${200 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <button
                      onClick={() =>
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-heading font-bold text-md lg:text-lg text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${expandedFaq === index ? "rotate-45" : ""
                          }`}
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                      >
                        <span
                          className="text-2xl leading-none"
                          style={{ color: "#006F61" }}
                        >
                          +
                        </span>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? "max-h-48" : "max-h-0"
                        }`}
                    >
                      <p className="text-sm lg:text-md px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section
            ref={ctaRef}
            className="py-20 md:py-28 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #006F61 0%, #004d44 100%)",
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`max-w-3xl mx-auto text-center transition-all duration-700 ${ctaVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                  <Mountain className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm font-semibold tracking-wide">
                    READY TO START?
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                  Have More Questions?
                </h2>

                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                  Our team is here to help you plan the perfect adventure. Reach
                  out anytime and we'll guide you through every step.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full md:w-fit sm:w-auto text-lg px-8 py-4 h-auto bg-white text-gray-900 font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                      <Mail className="hidden md:block w-5 h-5 mr-2" />
                      Contact Us
                    </Button>
                  </Link>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-fit sm:w-auto text-lg px-8 py-4 h-auto border-2 border-white/50 text-white bg-transparent hover:bg-white/10 font-semibold transition-all duration-300 hover:-translate-y-1"
                    onClick={() =>
                      window.open("https://wa.me/923330228111", "_blank")
                    }
                  >
                    <MessageCircle className="hidden md:block w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </div>

                {/* Quick Contact Info */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/70">
                  <a
                    href="tel:+923330228111"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+92 333 0228111</span>
                  </a>
                  <a
                    href="mailto:info@northkarakoram.com"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@northkarakoram.com</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
