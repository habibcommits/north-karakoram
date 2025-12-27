import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Affiliations } from "@/components/Affiliations";
import trekkingImage from "@assets/stock_images/beautiful_mountain_p_1088467d.jpg";
import mountainImage1 from "@assets/k7/k1.jpeg";
import mountainImage2 from "@assets/k2-base-camp-trek/k1.jpeg";
import mountainImage3 from "@assets/shandoor/s1.jpg";
import mountainImage4 from "@assets/great-tower/g1.jpeg";
import mountainImage5 from "@assets/nangma-valley-trek/n1.jpeg";
import mountainImage6 from "@assets/thalle-la-trek/t1.jpeg";
import mountainImage7 from "@assets/naltar/n1.jfif";
import {
  Eye,
  Heart,
  Shield,
  Target,
  Mountain,
  Users,
  Award,
  Globe,
  MapPin,
  ArrowRight,
  Check,
  Compass,
  Star,
  TreePine,
  Leaf,
  Quote,
  BadgeCheck,
  Gem,
  Binoculars,
  Route,
  Calendar,
  Handshake,
  ClipboardCheck,
  Truck,
  Home,
  UserCheck,
} from "lucide-react";
import { usePageSEO } from "@/seo/hooks/useSeo";
import { SEOHead } from "@/seo/SEOHead";
import { BreadcrumbSchema, OrganizationSchema } from "@/seo/StructuredData";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver authentic, safe, and well-organized adventure travel across the highlands of northern Pakistan while respecting local communities and the environment.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To offer travelers a deeper connection with the landscapes, cultures, and people of Gilgit-Baltistan through quality mountain experiences.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Safety, responsible tourism, environmental awareness, cultural respect, and ensuring tourism benefits the region sustainably.",
  },
  {
    icon: Shield,
    title: "Our Promise",
    description:
      "Quality monitored at every stage — from the first inquiry to the final feedback. Reliable services and unforgettable experiences.",
  },
];

const whatSetsUsApart = [
  {
    icon: Gem,
    title: "Personalized Journeys",
    description:
      "Small groups and customized itineraries that let you explore at your own pace with deeper, more meaningful connections to the land.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Experienced local guides, mountaineers, cooks, porters, and support staff who understand the terrain, weather, and culture of the Karakoram.",
  },
  {
    icon: Binoculars,
    title: "Authentic Experiences",
    description:
      "Journeys designed to combine adventure, culture, and nature — a genuine connection with the landscapes and people of Gilgit-Baltistan.",
  },
];

const services = [
  {
    icon: Mountain,
    title: "Trekking Expeditions",
    description: "High-altitude treks through the world's most spectacular mountain landscapes.",
  },
  {
    icon: Route,
    title: "Mountaineering Logistics",
    description: "Complete support for climbing expeditions including K2, Broad Peak, and Gasherbrum.",
  },
  {
    icon: Compass,
    title: "Cultural Tours",
    description: "Immersive experiences exploring the rich heritage of northern Pakistan.",
  },
  {
    icon: Truck,
    title: "Jeep Safaris",
    description: "Scenic drives through valleys and along historic mountain routes.",
  },
  {
    icon: ClipboardCheck,
    title: "Permits & Logistics",
    description: "Complete handling of permits, documentation, and travel arrangements.",
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "Quality lodging from hotels to mountain camps, arranged with care.",
  },
];

const whyChooseUs = [
  {
    text: "Licensed & Registered (DTS #2640)",
    icon: Shield,
  },
  {
    text: "Local Experts with Mountain Experience",
    icon: Users,
  },
  {
    text: "Small Groups, Personalized Itineraries",
    icon: Heart,
  },
  {
    text: "Full-Service Expedition Support",
    icon: Compass,
  },
  {
    text: "Authentic Cultural Immersion",
    icon: Globe,
  },
  {
    text: "Responsible & Sustainable Tourism",
    icon: TreePine,
  },
];

const destinations = [
  "K2 & Concordia",
  "Broad Peak Base Camp",
  "Gasherbrum Base Camp",
  "Fairy Meadows",
  "Nanga Parbat Region",
  "Hunza & Nagar Valleys",
  "Skardu Valley",
  "Deosai Plateau",
];

const commitments = [
  {
    icon: Leaf,
    title: "Environmental Awareness",
    description:
      "We follow ethical trekking and mountaineering practices to protect the fragile mountain ecosystems we explore.",
  },
  {
    icon: Users,
    title: "Community Partnership",
    description:
      "We work closely with local communities, employing local staff and ensuring tourism benefits the region sustainably.",
  },
  {
    icon: TreePine,
    title: "Responsible Tourism",
    description:
      "Our operations prioritize minimal environmental impact while maximizing positive outcomes for local people.",
  },
];

const stats = [
  { icon: BadgeCheck, value: "DTS #2640", label: "Licensed Operator" },
  { icon: MapPin, value: "Gilgit-Baltistan", label: "Headquartered" },
  { icon: Globe, value: "Worldwide", label: "Travelers Served" },
  { icon: Star, value: "Quality", label: "At Every Stage" },
];

export default function About() {
  const seo = usePageSEO('about');

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [commitmentVisible, setCommitmentVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const commitmentRef = useRef<HTMLElement>(null);

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
      { ref: heroRef, observer: createObserver(setIsVisible) },
      { ref: storyRef, observer: createObserver(setStoryVisible) },
      { ref: valuesRef, observer: createObserver(setValuesVisible) },
      { ref: servicesRef, observer: createObserver(setServicesVisible) },
      { ref: galleryRef, observer: createObserver(setGalleryVisible) },
      { ref: commitmentRef, observer: createObserver(setCommitmentVisible) },
    ];

    observers.forEach(({ ref, observer }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observers.forEach(({ observer }) => observer.disconnect());
  }, []);

  const sectionRef = useRef<HTMLElement>(null);


  return (
    <>
      {seo && <SEOHead seo={seo} path="/about" />}
      <BreadcrumbSchema items={breadcrumbs} />
      <OrganizationSchema />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section ref={heroRef} className="relative h-[50vh] min-h-[400px]">
            <img
              src={trekkingImage}
              alt="Mountain expedition in Gilgit-Baltistan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
            <div
              className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.6)" }}
                >
                  <BadgeCheck className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm font-semibold tracking-wide">
                    DTS LICENSE NO. 2640
                  </span>
                </div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  About North Karakoram
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                  Your gateway to the world's greatest mountain ranges — the Karakoram, Himalaya, and Hindu Kush
                </p>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section
            ref={sectionRef}
            className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
            data-testid="section-about"
          >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full
            bg-[#006F61]/[0.03] blur-3xl"
              />
              <div
                className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full
            bg-[#006F61]/[0.02] blur-3xl"
              />

              {/* Decorative dots pattern */}
              <div className="absolute top-20 left-10 hidden xl:block">
                <div className="grid grid-cols-5 gap-2">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#006F61]/10"
                    />
                  ))}
                </div>
              </div>

              <div
                className="absolute top-1/2 right-0 w-32 h-px
            bg-gradient-to-l from-[#006F61]/20 to-transparent hidden lg:block"
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Section Header */}
              <div
                className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-[#006F61]/10 text-[#006F61] text-sm font-semibold mb-6">
                  <Mountain className="w-4 h-4" />
                  <span>Our Story</span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl
            text-gray-900 mb-4 leading-tight">
                  Not Just Adventures —{" "}
                  <span className="text-[#006F61]">
                    Life-Changing Experiences
                  </span>
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  Gateway to the world's greatest mountain ranges — the Karakoram, Himalaya, and Hindu Kush
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

                {/* LEFT COLUMN: Image Gallery */}
                <div
                  className={`flex flex-col md:relative md:block gap-4 md:gap-0 md:h-[600px] transition-all duration-700 delay-200
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                >
                  {/* Main Large Image */}
                  <div
                    className="md:absolute md:top-0 md:left-0 md:w-[75%] md:h-[65%] relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden
                shadow-2xl shadow-black/10 z-20 group"
                  >
                    <img
                      src={mountainImage1}
                      alt="K2 and Concordia region - Karakoram Range"
                      className="w-full h-full object-cover transition-transform duration-700
                  group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Location badge */}
                    <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full
                bg-white/95 backdrop-blur-sm shadow-lg">
                      <span className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#006F61]" />
                        Gilgit-Baltistan, Pakistan
                      </span>
                    </div>
                  </div>

                  {/* Secondary Image - Top Right */}
                  <div
                    className="md:absolute md:top-4 md:right-0 md:w-[45%] md:h-[40%] relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden
                shadow-xl shadow-black/10 z-10 group border-4 border-white"
                  >
                    <img
                      src={mountainImage2}
                      alt="Trekking expedition in Hunza Valley"
                      className="w-full h-full object-cover transition-transform duration-700
                  group-hover:scale-105"
                    />
                  </div>

                  {/* Third Image - Bottom Center */}
                  <div
                    className="md:absolute md:bottom-0 md:left-[15%] md:w-[50%] md:h-[45%] relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden
                shadow-xl shadow-black/10 z-30 group border-4 border-white"
                  >
                    <img
                      src={mountainImage3}
                      alt="Cultural heritage and local communities"
                      className="w-full h-full object-cover transition-transform duration-700
                  group-hover:scale-105"
                    />
                  </div>

                  {/* Fourth Image - Bottom Right */}
                  <div
                    className="md:absolute md:bottom-8 md:right-0 md:w-[40%] md:h-[35%] relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden
                shadow-xl shadow-black/10 z-20 group border-4 border-white"
                  >
                    <img
                      src={mountainImage4}
                      alt="Deosai Plateau landscape"
                      className="w-full h-full object-cover transition-transform duration-700
                  group-hover:scale-105"
                    />
                  </div>

                  {/* License Badge - Floating Card */}
                  <div
                    className="md:absolute md:-bottom-6 md:-left-6 md:left-0 relative mt-4 z-40
                bg-white rounded-2xl shadow-2xl shadow-black/10 p-4
                border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#006F61]"
                      >
                        <BadgeCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">DTS License #2640</div>
                        <div className="text-xs text-gray-500">Registered & Verified</div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div
                    className="absolute -top-6 right-[30%] w-24 h-24 rounded-full
                border-4 border-dashed border-[#006F61]/20 z-0 hidden md:block"
                  />
                </div>

                {/* RIGHT COLUMN: Text Content */}
                <div
                  className={`transition-all duration-700 delay-300
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                >
                  {/* Subtitle Tag */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-1 rounded-full bg-[#006F61]" />
                    <span className="text-[#006F61] font-semibold text-sm uppercase tracking-wider">
                      About North Karakoram
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl
              text-gray-900 mb-6 leading-tight">
                    Your Trusted Partner for{" "}
                    <span className="text-[#006F61]">Mountain Adventures</span>{" "}
                    in Pakistan
                  </h3>

                  {/* Description */}
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      <span className="font-semibold text-gray-800">North Karakoram Trek & Tours</span> is
                      a registered adventure travel company based in Gilgit-Baltistan, Pakistan. Founded by
                      local professionals with firsthand mountain experience, we specialize in{" "}
                      <span className="font-medium text-gray-700">trekking expeditions, mountaineering logistics,
                        K2 Base Camp treks, cultural tours, and jeep safaris</span> throughout the highlands
                      of northern Pakistan.
                    </p>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      We don't just take you to the mountains — <span className="font-semibold text-gray-800">
                        we help you experience them</span>. Our journeys combine adventure, culture, and nature,
                      offering genuine connections with the land and the people who call it home. From permits
                      and logistics to accommodation and professional guiding, every detail is handled with precision.
                    </p>
                  </div>

                  {/* Destinations Tag Cloud */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Destinations We Cover
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {destinations.map((dest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-sm font-medium text-[#006F61] bg-[#006F61]/10
                      rounded-full border border-[#006F61]/20"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Why Choose Us Section */}
                  {/* <div className="mb-10">
                  <h4 className="font-heading font-bold text-xl text-gray-900 mb-5
                flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#006F61]/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#006F61]" />
                    </span>
                    What Sets Us Apart
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {whyChooseUs.map((item, index) => (
                      <div
                        key={index}
                        className={`group relative bg-white rounded-xl p-4
                      border border-gray-100 hover:border-[#006F61]/30
                      shadow-sm hover:shadow-lg hover:shadow-[#006F61]/5
                      transition-all duration-300 cursor-default
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        style={{
                          transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms'
                        }}
                        data-testid={`item-benefit-${index}`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center
                          bg-[#006F61]/10 group-hover:bg-[#006F61]
                          transition-colors duration-300 flex-shrink-0"
                          >
                            <item.icon
                              className="w-5 h-5 text-[#006F61] group-hover:text-white
                            transition-colors duration-300"
                            />
                          </div>
                          <span className="text-sm md:text-base text-gray-700 font-medium
                        group-hover:text-gray-900 transition-colors">
                            {item.text}
                          </span>
                        </div>
                        <div
                          className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full
                        bg-[#006F61] scale-x-0 group-hover:scale-x-100
                        transition-transform duration-300 origin-left"
                        />
                      </div>
                    ))}
                  </div>
                </div> */}

                  {/* Call-to-Action Buttons */}
                  <div
                    className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[800ms]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    <Link href="/team">
                      <Button
                        size="lg"
                        className="group w-full sm:w-auto text-base px-8 py-6 h-auto
                    bg-[#006F61] hover:bg-[#005a4d] text-white font-semibold
                    shadow-lg shadow-[#006F61]/25 hover:shadow-xl hover:shadow-[#006F61]/30
                    transition-all duration-300 hover:-translate-y-0.5"
                        data-testid="button-about-learn-more"
                      >
                        Meet Our Team
                      </Button>
                    </Link>

                    <Link href="/contact">
                      <Button
                        size="lg"
                        variant="outline"
                        className="group w-full sm:w-auto text-base px-8 py-6 h-auto
                    border-2 border-[#006F61] text-[#006F61] font-semibold
                    hover:bg-[#006F61] hover:text-white
                    transition-all duration-300 hover:-translate-y-0.5"
                        data-testid="button-about-contact"
                      >
                        Plan Your Adventure
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div
          className={`mt-20 md:mt-28 transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="relative bg-gradient-to-br from-[#006F61] to-[#005249]
              rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full
                bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full
                bg-white/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Explore Northern Pakistan With Confidence
                </h3>
                <p className="text-white/80 max-w-2xl mx-auto">
                  From the legendary K2 region to the peaceful landscapes of Hunza Valley,
                  Skardu, and beyond — we open access to Pakistan's most breathtaking destinations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                  hover:bg-white/15 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Safety First</h4>
                  <p className="text-white/70 text-sm">
                    Experienced local guides and support staff who prioritize your safety with
                    deep knowledge of terrain and weather conditions.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                  hover:bg-white/15 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Complete Logistics</h4>
                  <p className="text-white/70 text-sm">
                    Full-board expedition services including permits, accommodation, transport,
                    equipment, and professional guiding — all handled with precision.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                  hover:bg-white/15 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Community Focus</h4>
                  <p className="text-white/70 text-sm">
                    We work closely with local communities, following ethical practices to ensure
                    tourism benefits the region sustainably.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-6 left-6 w-20 h-20 border border-white/10 rounded-full" />
            <div className="absolute bottom-6 right-6 w-32 h-32 border border-white/10 rounded-full" />
          </div>
        </div> */}
            </div>
          </section>

          {/* Services Section */}
          <section
            ref={servicesRef}
            className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <ClipboardCheck className="w-4 h-4" style={{ color: "#006F61" }} />
                  <span className="text-sm font-semibold tracking-wide" style={{ color: "#006F61" }}>
                    WHAT WE OFFER
                  </span>
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                  Our <span style={{ color: "#006F61" }}>Services</span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  Full-board expedition services and flexible, customized travel arrangements for every type of adventurer
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-gray-100 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: servicesVisible ? `${200 + index * 100}ms` : "0ms",
                    }}
                  >
                    <CardContent className="p-6 md:p-8 relative overflow-hidden">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                      >
                        <service.icon className="w-7 h-7" style={{ color: "#006F61" }} />
                      </div>
                      <h3 className="font-heading font-bold text-lg md:text-xl mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        style={{ backgroundColor: "#006F61" }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section
            ref={valuesRef}
            className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-40 right-20 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <Target className="w-4 h-4" style={{ color: "#006F61" }} />
                  <span className="text-sm font-semibold tracking-wide" style={{ color: "#006F61" }}>
                    WHAT DRIVES US
                  </span>
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                  Our Values & <span style={{ color: "#006F61" }}>Mission</span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  The principles that guide every expedition and interaction with our valued travelers
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-gray-100 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: valuesVisible ? `${200 + index * 100}ms` : "0ms",
                    }}
                  >
                    <CardContent className="p-4 text-center relative overflow-hidden">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                      >
                        <value.icon className="w-8 h-8" style={{ color: "#006F61" }} />
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-4 text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                        style={{ backgroundColor: "#006F61" }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section
            ref={galleryRef}
            className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <Compass className="w-4 h-4" style={{ color: "#006F61" }} />
                  <span className="text-sm font-semibold tracking-wide" style={{ color: "#006F61" }}>
                    GLIMPSES OF ADVENTURE
                  </span>
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                  Experience the <span style={{ color: "#006F61" }}>Karakoram</span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  Peak trekking and expedition seasons are summer and early autumn, when conditions
                  in the high mountains are most favorable
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[mountainImage5, mountainImage6, mountainImage7, mountainImage4].map((img, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-700 ${index === 0 ? "col-span-2 row-span-2" : ""
                      } ${galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{
                      transitionDelay: galleryVisible ? `${200 + index * 100}ms` : "0ms",
                    }}
                  >
                    <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                      <img
                        src={img}
                        alt={`Adventure in Gilgit-Baltistan ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white font-semibold text-sm md:text-base">
                        Discover More
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`text-center mt-12 transition-all duration-700 delay-500 ${galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <Link href="/expedition">
                  <Button
                    size="lg"
                    className="group text-base px-8 py-6 h-auto text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                    style={{ backgroundColor: "#006F61" }}
                  >
                    View All Expeditions
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section
            ref={commitmentRef}
            className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div
                  className={`transition-all duration-700 ${commitmentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "#006F61" }} />
                    <span
                      className="font-semibold text-sm uppercase tracking-wider"
                      style={{ color: "#006F61" }}
                    >
                      Our Commitment
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                    Responsible <span style={{ color: "#006F61" }}>Travel</span> & Sustainability
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    Safety, responsible tourism, and environmental awareness are central to our operations.
                    We work closely with local communities and follow ethical trekking and mountaineering
                    practices to ensure that tourism benefits the region sustainably.
                  </p>

                  <div className="space-y-6">
                    {commitments.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-4 transition-all duration-700 ${commitmentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                        style={{
                          transitionDelay: commitmentVisible ? `${300 + index * 100}ms` : "0ms",
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                        >
                          <item.icon className="w-6 h-6" style={{ color: "#006F61" }} />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative transition-all duration-700 delay-300 ${commitmentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={mountainImage7}
                      alt="Sustainable mountain adventure in Deosai"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Floating Quote Card */}
                  <div className="absolute -bottom-8 -left-8 md:left-8 bg-white rounded-2xl shadow-xl p-6 max-w-sm border border-gray-100">
                    <Quote className="w-8 h-8 mb-3" style={{ color: "#006F61" }} />
                    <p className="text-gray-700 italic leading-relaxed">
                      "Our goal is not only to guide travelers through the mountains, but to offer them
                      a deeper connection with the landscapes, cultures, and people of Gilgit-Baltistan."
                    </p>
                    <p className="mt-3 font-semibold text-sm" style={{ color: "#006F61" }}>
                      — North Karakoram Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-gray-500 text-sm font-medium mb-8 uppercase tracking-wider text-center">
                Why Travelers Trust Us
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {[
                  "DTS Licensed (#2640)",
                  "Local Expert Team",
                  "Safety First",
                  "Eco-Friendly Practices",
                  "Community Partner",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#006F61]/30 transition-all duration-300"
                  >
                    <Check className="w-4 h-4" style={{ color: "#006F61" }} />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-28" style={{ backgroundColor: "#006F61" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                  Ready to Experience the Karakoram?
                </h2>
                <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
                  Whether you're planning a classic trek, a high-altitude expedition, or a private
                  adventure tailored to your interests, we're committed to providing reliable services
                  and unforgettable experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/expedition">
                    <Button
                      size="lg"
                      className="group w-full sm:w-auto text-base px-8 py-6 h-auto bg-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                      style={{ color: "#006F61" }}
                    >
                      <Mountain className="w-5 h-5 mr-2" />
                      Browse Expeditions
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="group w-full sm:w-auto text-base px-8 py-6 h-auto font-semibold transition-all duration-300 hover:-translate-y-0.5 border-2 border-white text-white hover:bg-white hover:text-[#006F61]"
                    >
                      <Handshake className="w-5 h-5 mr-2" />
                      Contact Us Today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <Affiliations />
        </main>
      </div>
    </>
  );
}
