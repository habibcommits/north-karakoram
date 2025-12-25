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

  return (
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
            <div className="container mx-auto px-4">
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
          ref={storyRef}
          className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
            />
            <div
              className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.02)" }}
            />
            <div className="absolute top-20 left-10 hidden xl:block">
              <div className="grid grid-cols-5 gap-2">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div
              className={`text-center max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "#006F61" }} />
                <span
                  className="font-semibold text-sm uppercase tracking-wider"
                  style={{ color: "#006F61" }}
                >
                  Our Story
                </span>
                <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "#006F61" }} />
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                Not Just Adventures —{" "}
                <span className="relative inline-block" style={{ color: "#006F61" }}>
                  Life-Changing Experiences
                </span>{" "}
                <br className="hidden md:block" />
                in the Mountains
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                North Karakoram Trek & Tours is a registered adventure travel company based in
                Gilgit-Baltistan, Pakistan, founded by local professionals with firsthand mountain experience.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
              {/* Image Gallery */}
              <div
                className={`relative transition-all duration-700 delay-200 ${storyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
              >
                <div className="relative h-[450px] sm:h-[500px] md:h-[550px]">
                  {/* Main Image */}
                  <div className="absolute top-0 left-0 w-[70%] sm:w-[65%] h-[60%] rounded-2xl overflow-hidden shadow-2xl shadow-black/15 z-20 group">
                    <img
                      src={mountainImage1}
                      alt="K2 and Concordia region"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: "#006F61" }} />
                        Gilgit-Baltistan
                      </span>
                    </div>
                  </div>

                  {/* Secondary Image */}
                  <div className="absolute top-4 right-0 w-[45%] sm:w-[42%] h-[38%] rounded-2xl overflow-hidden shadow-xl shadow-black/10 z-10 group border-4 border-white">
                    <img
                      src={mountainImage2}
                      alt="Trekking in Hunza Valley"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Third Image */}
                  <div className="absolute bottom-0 left-[12%] sm:left-[15%] w-[55%] sm:w-[50%] h-[42%] sm:h-[45%] rounded-2xl overflow-hidden shadow-xl shadow-black/10 z-30 group border-4 border-white">
                    <img
                      src={mountainImage3}
                      alt="Cultural experience in mountain villages"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* License Badge */}
                  <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:left-0 z-40 bg-white rounded-2xl shadow-2xl shadow-black/10 p-4 sm:p-5 border border-gray-100">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "#006F61" }}
                      >
                        <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-gray-900">Licensed Operator</div>
                        <div className="text-xs sm:text-sm text-gray-500 font-medium">DTS License #2640</div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Circle */}
                  <div
                    className="absolute -top-4 sm:-top-6 right-[25%] sm:right-[30%] w-16 sm:w-24 h-16 sm:h-24 rounded-full border-4 border-dashed z-0 hidden sm:block"
                    style={{ borderColor: "rgba(0, 111, 97, 0.2)" }}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div
                className={`transition-all duration-700 delay-300 ${storyVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
              >
                <div className="space-y-6 mb-8">
                  <div
                    className="relative pl-6 border-l-4 rounded-sm"
                    style={{ borderColor: "#006F61" }}
                  >
                    <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed italic">
                      "We don't just take you to the mountains — we help you experience them."
                    </p>
                  </div>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We specialize in{" "}
                    <span className="font-semibold text-gray-800">
                      trekking expeditions, mountaineering logistics, K2 Base Camp treks, cultural tours,
                      jeep safaris, and tailor-made adventure journeys
                    </span>{" "}
                    throughout Gilgit-Baltistan.
                  </p>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Our itineraries are carefully designed for both international and domestic travelers —
                    from experienced climbers and trekkers to photographers, families, and solo explorers
                    seeking <span className="font-semibold text-gray-800">meaningful travel experiences</span>.
                  </p>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    From permits and logistics to accommodation, transport, and professional guiding services,
                    every detail is handled with precision by our team of experienced local guides, cooks,
                    porters, and logistics staff.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/expedition">
                    <Button
                      size="lg"
                      className="group w-full sm:w-auto text-base px-8 py-6 h-auto text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                      style={{ backgroundColor: "#006F61" }}
                    >
                      <Mountain className="w-5 h-5 mr-2" />
                      Explore Expeditions
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="group w-full sm:w-auto text-base px-8 py-6 h-auto font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006F61] hover:text-white hover:border-[#006F61]"
                      style={{ borderColor: "#006F61", color: "#006F61" }}
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Plan Your Journey
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* What Sets Us Apart Section */}
            <div
              className={`transition-all duration-700 delay-400 ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="text-center mb-12">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                  What Sets <span style={{ color: "#006F61" }}>North Karakoram</span> Apart
                </h3>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                  Regional specialization allows us to maintain high service standards and deep destination knowledge
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {whatSetsUsApart.map((item, index) => (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100
                      shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: storyVisible ? `${500 + index * 100}ms` : "0ms",
                    }}
                  >
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <item.icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: "#006F61" }} />
                    </div>
                    <h4 className="font-heading font-bold text-lg md:text-xl text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ backgroundColor: "#006F61" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Destinations Banner */}
            <div
              className={`mt-16 md:mt-20 transition-all duration-700 delay-500 ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16"
                style={{ backgroundColor: "#006F61" }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                {/* Decorative circles */}
                <div className="absolute top-6 left-6 w-16 h-16 md:w-20 md:h-20 border border-white/10 rounded-full hidden md:block" />
                <div className="absolute bottom-6 right-6 w-24 h-24 md:w-32 md:h-32 border border-white/10 rounded-full hidden md:block" />

                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
                      <Compass className="w-4 h-4" />
                      <span>Our Operational Focus</span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-tight">
                      Explore Gilgit-Baltistan With Confidence
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                      Our operational focus is exclusively within Gilgit-Baltistan, covering iconic destinations
                      from the legendary K2 region to the peaceful landscapes of Hunza Valley and beyond.
                    </p>
                  </div>

                  {/* Destinations Grid */}
                  <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {destinations.map((dest, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center border border-white/10 hover:bg-white/15 transition-colors duration-300"
                      >
                        <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-2" />
                        <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-white/60 text-xs md:text-sm font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={servicesRef}
          className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-gray-100 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: valuesVisible ? `${200 + index * 100}ms` : "0ms",
                  }}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
  );
}
