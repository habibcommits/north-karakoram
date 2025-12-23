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
    text: "Tailored adventures for every pace",
    icon: Sparkles,
  },
  {
    text: "Authentic culture and heritage",
    icon: Heart,
  },
  {
    text: "Expert guidance and full support",
    icon: Users,
  },
  {
    text: "Small groups, deeper connections",
    icon: Globe,
  },
  {
    text: "Life-changing experiences",
    icon: Mountain,
  },
  {
    text: "Adventure. Culture. Mountains",
    icon: MapPin,
  },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "150+", label: "Expeditions", icon: Mountain },
  { value: "2500+", label: "Happy Travelers", icon: Users },
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
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image Gallery */}
              <div
                className={`relative transition-all duration-700 delay-200 ${storyVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
                  }`}
              >
                <div className="relative h-[500px] md:h-[600px]">
                  {/* Main Image */}
                  <div className="absolute top-0 left-0 w-[75%] h-[65%] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 z-20 group">
                    <img
                      src={mountainImage1}
                      alt="Majestic Karakoram peaks"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                      <span className="text-sm font-semibold text-gray-800">
                        📍 Karakoram Range
                      </span>
                    </div>
                  </div>

                  {/* Secondary Image */}
                  <div className="absolute top-4 right-0 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-xl shadow-black/10 z-10 group border-4 border-white">
                    <img
                      src={mountainImage2}
                      alt="Mountain trekking adventure"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Third Image */}
                  <div className="absolute bottom-0 left-[15%] w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-xl shadow-black/10 z-30 group border-4 border-white">
                    <img
                      src={mountainImage3}
                      alt="Cultural heritage experience"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-6 -left-6 md:left-0 z-40 bg-white rounded-2xl shadow-2xl shadow-black/10 p-5 border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "#006F61" }}
                      >
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          15+
                        </div>
                        <div className="text-sm text-gray-500 font-medium">
                          Years of Excellence
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Circle */}
                  <div
                    className="absolute -top-6 right-[30%] w-24 h-24 rounded-full border-4 border-dashed z-0 hidden md:block"
                    style={{ borderColor: "rgba(0, 111, 97, 0.2)" }}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div
                className={`transition-all duration-700 delay-300 ${storyVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
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
                    Our Story
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                  Crafting Unforgettable{" "}
                  <span style={{ color: "#006F61" }}>Mountain Adventures</span>{" "}
                  Since 2009
                </h2>

                <div className="space-y-5 mb-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Step into the extraordinary with North Karakoram, your
                    licensed guide to the majestic Karakoram and Himalaya
                    ranges. We offer trekking, hiking, and mountaineering
                    expeditions designed to give you more than just a journey —
                    <span className="font-semibold text-gray-800">
                      {" "}
                      an immersive experience
                    </span>{" "}
                    of the mountains, the people, and the culture.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    What makes us different? Every adventure is personalized,
                    small-group, and authentic. Walk through hidden valleys,
                    connect with local communities, and discover the rich
                    heritage that thrives alongside the peaks.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Our team of experienced mountaineers and cultural guides
                    ensures your safety while creating memories that last a
                    lifetime. From the legendary K2 to the serene Hunza Valley,
                    we open doors to Pakistan's most breathtaking landscapes.
                  </p>
                </div>

                {/* Why Choose Us */}
                <div className="mb-10">
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-5 flex items-center gap-2">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <Sparkles className="w-4 h-4" style={{ color: "#006F61" }} />
                    </span>
                    Why Choose Us?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {whyChooseUs.map((item, index) => (
                      <div
                        key={index}
                        className={`group relative bg-white rounded-xl p-4 border border-gray-100
                          hover:border-opacity-30 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default
                          ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        style={{
                          transitionDelay: storyVisible
                            ? `${400 + index * 100}ms`
                            : "0ms",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 flex-shrink-0 group-hover:text-white"
                            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                          >
                            <item.icon
                              className="w-5 h-5 transition-colors duration-300"
                              style={{ color: "#006F61" }}
                            />
                          </div>
                          <span className="text-sm md:text-base text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                            {item.text}
                          </span>
                        </div>
                        <div
                          className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                          style={{ backgroundColor: "#006F61" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/team">
                    <Button
                      size="lg"
                      className="group w-full sm:w-auto text-base px-8 py-6 h-auto text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      style={{ backgroundColor: "#006F61" }}
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Meet Our Team
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
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-16 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #006F61 0%, #005249 100%)",
            }}
          />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-6 left-6 w-20 h-20 border border-white/10 rounded-full" />
          <div className="absolute bottom-6 right-6 w-32 h-32 border border-white/10 rounded-full" />
        </section> */}

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

        {/* Timeline Section */}
        {/* <section
          ref={timelineRef}
          className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${timelineVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <Calendar className="w-4 h-4" style={{ color: "#006F61" }} />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  OUR JOURNEY
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Milestones That{" "}
                <span style={{ color: "#006F61" }}>Define Us</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                From humble beginnings to becoming a trusted name in mountain
                adventures
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.2)" }}
              />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 last:mb-0 transition-all duration-700 ${timelineVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{
                    transitionDelay: timelineVisible
                      ? `${300 + index * 150}ms`
                      : "0ms",
                  }}
                >
                  <div
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg md:-translate-x-1/2 z-10"
                    style={{ backgroundColor: "#006F61" }}
                  />

                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 text-white"
                        style={{ backgroundColor: "#006F61" }}
                      >
                        {item.year}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

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
              <Link href="/expeditions">
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
