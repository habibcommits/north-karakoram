import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Affiliations } from "@/components/Affiliations";
import trekkingImage from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";
import mountainImage1 from "@assets/stock_images/mountain_landscape_s_61ab8953.jpg";
import mountainImage2 from "@assets/stock_images/mountain_landscape_s_c524040f.jpg";
import mountainImage3 from "@assets/stock_images/mountain_landscape_s_e00bb14a.jpg";
import mountainImage4 from "@assets/stock_images/mountain_landscape_s_39d9031b.jpg";
import {
  Eye,
  Heart,
  Shield,
  Target,
  Mountain,
  Users,
  Award,
  Globe,
  Sparkles,
  MapPin,
  ArrowRight,
  Check,
  Compass,
  Calendar,
  Star,
  TreePine,
  Leaf,
  Quote,
  Route,
  Footprints,
  BadgeCheck,
  Gem,
  HandHeart,
  Binoculars,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide safe, professional, and unforgettable mountain experiences while respecting local communities and the environment.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the world's most trusted adventure company, inspiring people to explore the majestic peaks of the Karakoram and Himalaya.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Safety first, environmental stewardship, cultural respect, professional excellence, and creating lasting memories for our clients.",
  },
  {
    icon: Shield,
    title: "Our Promise",
    description:
      "Expert guides, quality equipment, comprehensive support, and an unwavering commitment to your safety and satisfaction.",
  },
];

const whyChooseUs = [
  {
    text: "Small groups & customized itineraries",
    icon: Users,
  },
  {
    text: "Experienced local guides & mountaineers",
    icon: Mountain,
  },
  {
    text: "Deep cultural immersion",
    icon: Heart,
  },
  {
    text: "Safety-first approach",
    icon: Shield,
  },
  {
    text: "Authentic mountain experiences",
    icon: Compass,
  },
  {
    text: "Personalized journeys",
    icon: Sparkles,
  },
];

const whatSetsUsApart = [
  {
    icon: Gem,
    title: "Personalized Experiences",
    description: "Small groups and customized itineraries that let you explore at your own pace with deeper, more meaningful connections.",
  },
  {
    icon: Users,
    title: "Expert Local Team",
    description: "Experienced local guides, mountaineers, and support staff who prioritize safety, comfort, and cultural respect.",
  },
  {
    icon: Binoculars,
    title: "Authentic Adventures",
    description: "Journeys designed to combine adventure, culture, and nature — a genuine connection with the land and its people.",
  },
];

const destinations = [
  "K2 Region",
  "Hunza Valley",
  "Skardu",
  "Fairy Meadows",
  "Deosai Plateau",
  "Concordia",
];

const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "150+", label: "Expeditions", icon: Mountain },
  { value: "1000+", label: "Happy Travelers", icon: Users },
  { value: "50+", label: "Destinations", icon: Globe },
];

const timeline = [
  {
    year: "2009",
    title: "The Beginning",
    description:
      "Founded with a passion for sharing the beauty of Karakoram with the world.",
  },
  {
    year: "2012",
    title: "First Major Expedition",
    description:
      "Successfully led our first K2 Base Camp expedition with international climbers.",
  },
  {
    year: "2016",
    title: "Expanded Operations",
    description:
      "Grew our team and added new destinations across the Himalaya and Hindu Kush ranges.",
  },
  {
    year: "2020",
    title: "Sustainability Focus",
    description:
      "Launched eco-friendly initiatives and community partnership programs.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description:
      "Recognized as a leading adventure tour operator in the region with international certifications.",
  },
];

const commitments = [
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    description:
      "We follow Leave No Trace principles and actively participate in mountain cleanup initiatives.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "We employ local guides and porters, ensuring tourism benefits reach mountain communities.",
  },
  {
    icon: TreePine,
    title: "Conservation Efforts",
    description:
      "Part of our profits go towards protecting the fragile mountain ecosystems we explore.",
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [commitmentVisible, setCommitmentVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
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
      { ref: timelineRef, observer: createObserver(setTimelineVisible) },
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
            alt="Mountain expedition team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div
            className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <div className="container mx-auto px-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.6)" }}
              >
                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  DISCOVER OUR STORY
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                About North Karakoram
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Your trusted partner for extraordinary mountain adventures in
                the Karakoram and Himalaya
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section - Enhanced */}
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
            {/* Decorative dots */}
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
            <div className="absolute bottom-20 right-10 hidden xl:block">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
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
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: "#006F61" }}
                />
                <span
                  className="font-semibold text-sm uppercase tracking-wider"
                  style={{ color: "#006F61" }}
                >
                  Our Story
                </span>
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: "#006F61" }}
                />
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                Not Just Adventures —{" "}
                <span className="relative inline-block" style={{ color: "#006F61" }}>
                  Life-Changing Experiences
                  <span
                    className="absolute -bottom-2 left-0 w-full h-3 rounded-full opacity-20 -z-10"
                    style={{ backgroundColor: "#006F61" }}
                  />
                </span>{" "}
                <br className="hidden md:block" />
                in the Mountains
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                North Karakoram is a licensed adventure travel company specializing in trekking,
                mountaineering expeditions, and guided tours across the northern regions of Pakistan.
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
                      alt="Majestic Karakoram peaks"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: "#006F61" }} />
                        Karakoram Range
                      </span>
                    </div>
                  </div>

                  {/* Secondary Image */}
                  <div className="absolute top-4 right-0 w-[45%] sm:w-[42%] h-[38%] rounded-2xl overflow-hidden shadow-xl shadow-black/10 z-10 group border-4 border-white">
                    <img
                      src={mountainImage2}
                      alt="Mountain trekking adventure"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Third Image */}
                  <div className="absolute bottom-0 left-[12%] sm:left-[15%] w-[55%] sm:w-[50%] h-[42%] sm:h-[45%] rounded-2xl overflow-hidden shadow-xl shadow-black/10 z-30 group border-4 border-white">
                    <img
                      src={mountainImage3}
                      alt="Cultural heritage experience"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:left-0 z-40 bg-white rounded-2xl shadow-2xl shadow-black/10 p-4 sm:p-5 border border-gray-100">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "#006F61" }}
                      >
                        <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">15+</div>
                        <div className="text-xs sm:text-sm text-gray-500 font-medium">Years of Excellence</div>
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
                  <div className="relative pl-6 border-l-4 rounded-sm" style={{ borderColor: "#006F61" }}>
                    <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed italic">
                      "We don't just take you to the mountains — we help you experience them."
                    </p>
                  </div>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We operate in some of the world's most spectacular mountain landscapes, including
                    the <span className="font-semibold text-gray-800">Karakoram and Himalayan ranges</span>.
                    Our journeys are carefully designed to combine adventure, culture, and nature.
                  </p>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    From high-altitude treks to scenic valley tours, every trip is thoughtfully planned
                    to offer a <span className="font-semibold text-gray-800">genuine connection</span> with
                    the land and the people who call it home.
                  </p>
                </div>

                {/* Destinations Tags */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Popular Destinations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destinations.map((dest, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 cursor-default
                          hover:shadow-md ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                        style={{
                          backgroundColor: "rgba(0, 111, 97, 0.1)",
                          color: "#006F61",
                          transitionDelay: storyVisible ? `${400 + index * 50}ms` : "0ms",
                        }}
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
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
                      className="group w-full sm:w-auto text-base px-8 py-6 h-auto font-semibold transition-all duration-300 hover:-translate-y-0.5"
                      style={{ borderColor: "#006F61", color: "#006F61" }}
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Get in Touch
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
                  What Sets{" "}
                  <span style={{ color: "#006F61" }}>North Karakoram</span>{" "}
                  Apart
                </h3>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                  We focus on creating personalized, meaningful adventures that go beyond typical tourism
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
                      <item.icon
                        className="w-7 h-7 md:w-8 md:h-8"
                        style={{ color: "#006F61" }}
                      />
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

            {/* Explore With Confidence Banner */}
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

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
                      <Compass className="w-4 h-4" />
                      <span>Explore With Confidence</span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-tight">
                      Explore Northern Pakistan With Confidence
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                      From the legendary K2 region to the peaceful landscapes of Hunza Valley,
                      Skardu, and beyond — our treks, expeditions, and tours are designed for
                      both seasoned adventurers and travelers seeking an authentic mountain experience.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["K2 Region", "Hunza Valley", "Skardu", "Fairy Meadows"].map((place, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: BadgeCheck, value: "Licensed", label: "Tour Operator" },
                      { icon: Shield, value: "100%", label: "Safety Record" },
                      { icon: Users, value: "1000+", label: "Happy Travelers" },
                      { icon: Star, value: "4.9/5", label: "Customer Rating" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center border border-white/10 hover:bg-white/15 transition-colors duration-300"
                      >
                        <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white mx-auto mb-2" />
                        <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-white/60 text-xs md:text-sm font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          ref={valuesRef}
          className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-40 right-20 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${valuesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <Target className="w-4 h-4" style={{ color: "#006F61" }} />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  WHAT DRIVES US
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Our Values &{" "}
                <span style={{ color: "#006F61" }}>Mission</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                The principles that guide every expedition and interaction with
                our valued travelers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-gray-100 ${valuesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: valuesVisible
                      ? `${200 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <value.icon
                        className="w-8 h-8"
                        style={{ color: "#006F61" }}
                      />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-4 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
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
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${galleryVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <Compass className="w-4 h-4" style={{ color: "#006F61" }} />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  EXPLORE WITH US
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Glimpses of{" "}
                <span style={{ color: "#006F61" }}>Adventure</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Experience the beauty and majesty of the world's greatest
                mountain ranges
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[mountainImage1, mountainImage2, mountainImage3, mountainImage4].map(
                (img, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-700 ${index === 0 ? "col-span-2 row-span-2" : ""
                      } ${galleryVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: galleryVisible
                        ? `${200 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <div
                      className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"
                        }`}
                    >
                      <img
                        src={img}
                        alt={`Adventure ${index + 1}`}
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
                )
              )}
            </div>

            <div
              className={`text-center mt-12 transition-all duration-700 delay-500 ${galleryVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
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
                className={`transition-all duration-700 ${commitmentVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
                  }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: "#006F61" }}
                  />
                  <span
                    className="font-semibold text-sm uppercase tracking-wider"
                    style={{ color: "#006F61" }}
                  >
                    Our Commitment
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                  Responsible{" "}
                  <span style={{ color: "#006F61" }}>Travel</span> &
                  Sustainability
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  We believe in leaving mountains better than we found them.
                  Our commitment to sustainable tourism means protecting the
                  environment and supporting local communities while delivering
                  exceptional adventures.
                </p>

                <div className="space-y-6">
                  {commitments.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 transition-all duration-700 ${commitmentVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                        }`}
                      style={{
                        transitionDelay: commitmentVisible
                          ? `${300 + index * 100}ms`
                          : "0ms",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                      >
                        <item.icon
                          className="w-6 h-6"
                          style={{ color: "#006F61" }}
                        />
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
                className={`relative transition-all duration-700 delay-300 ${commitmentVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
                  }`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={mountainImage4}
                    alt="Sustainable mountain adventure"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating Quote Card */}
                <div className="absolute -bottom-8 -left-8 md:left-8 bg-white rounded-2xl shadow-xl p-6 max-w-sm border border-gray-100">
                  <Quote
                    className="w-8 h-8 mb-3"
                    style={{ color: "#006F61" }}
                  />
                  <p className="text-gray-700 italic leading-relaxed">
                    "The mountains are calling and we must go – responsibly."
                  </p>
                  <p
                    className="mt-3 font-semibold text-sm"
                    style={{ color: "#006F61" }}
                  >
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
              Trusted & Certified By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {[
                "Tourism Board",
                "Safety Certified",
                "Eco Friendly",
                "Local Partner",
                "Mountain Safety",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Check className="w-4 h-4" style={{ color: "#006F61" }} />
                  <span className="text-gray-700 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Affiliations />
      </main>
    </div>
  );
}
