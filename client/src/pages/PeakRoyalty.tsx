import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import mountainImage from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";
import {
  AlertCircle,
  CheckCircle2,
  DollarSign,
  Users,
  Mountain,
  Sparkles,
  ChevronRight,
  Shield,
  FileText,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Award,
  TrendingDown,
  Calendar,
  MapPin,
} from "lucide-react";

const feeCategories = [
  {
    icon: Mountain,
    title: "The 8,000m Giants",
    subtitle: "K2, Nanga Parbat, Broad Peak, Gasherbrums",
    badge: "Premium",
    badgeColor: "#dc2626",
    items: [
      "Standard Season (Summer): Full royalty rates apply",
      "Discounted Season (Winter/Autumn): Substantial reductions available",
      "Team Size: Fees cover up to 7 members with additional charges for larger teams",
    ],
  },
  {
    icon: TrendingDown,
    title: "7,000m - 7,500m Peaks",
    subtitle: "Gasherbrum IV, Masherbrum, Rakaposhi, Spantik",
    badge: "Popular",
    badgeColor: "#f59e0b",
    items: [
      "Fees tiered based on exact altitude",
      "Significant discounts for off-peak season climbs",
      "Attractive mid-range objectives for technical teams",
    ],
  },
  {
    icon: Award,
    title: "6,500m - 7,000m Peaks",
    subtitle: "Trango Towers group and similar",
    badge: "Technical",
    badgeColor: "#006F61",
    items: [
      "Lower royalty structure vs. 8,000m giants",
      "Attractive for technical alpine expeditions",
      "Still require royalty payment and liaison officer",
    ],
  },
  {
    icon: Sparkles,
    title: "Below 6,500m (Royalty Free)",
    subtitle: "Pastore Peak, Mingling Sar, Laila Peak",
    badge: "Free",
    badgeColor: "#22c55e",
    items: [
      "Pastore Peak (6,209m) - No royalty required",
      "Laila Peak (6,096m) - No royalty required",
      "Cost-effective options for high-altitude experience",
    ],
  },
];

const essentialRegs = [
  {
    icon: Users,
    title: "Liaison Officer (LO)",
    description:
      "Required for all peaks above 6,500m or within restricted zones. Team provides LO's equipment, food, transport, and daily allowance.",
  },
  {
    icon: Shield,
    title: "Environmental Fee",
    description:
      "Non-refundable mandatory fee for all expeditions contributing toward waste management and conservation in the region.",
  },
  {
    icon: FileText,
    title: "Briefing & De-Briefing",
    description:
      "Every expedition must attend mandatory briefing at Alpine Club of Pakistan in Islamabad before and after the trip.",
  },
  {
    icon: AlertCircle,
    title: "Search & Rescue",
    description:
      "A deposit or guarantee for helicopter rescue is mandatory before the climbing permit is issued.",
  },
];

const whatsCovered = [
  { text: "All Government Royalty Fees", icon: DollarSign },
  { text: "Central Karakoram National Park Entry Fees", icon: MapPin },
  { text: "Liaison Officer Salary, Kit & Allowances", icon: Users },
  { text: "Waste Management Fees", icon: Shield },
  { text: "Permit Process Handling", icon: FileText },
];

const stats = [
  { value: "8,611m", label: "K2 Height", icon: Mountain },
  { value: "14", label: "8000ers Worldwide", icon: Award },
  { value: "5", label: "In Pakistan", icon: MapPin },
  { value: "100+", label: "Expeditions/Year", icon: Calendar },
];

const faqs = [
  {
    question: "Are royalty fees included in your expedition packages?",
    answer:
      "Yes, unless you book 'Base Camp Services Only', our full-service expedition packages include all government royalty fees, CKNP entry fees, and permit processing.",
  },
  {
    question: "Can I climb peaks below 6,500m without paying royalty?",
    answer:
      "Yes! The government has waived royalty fees for peaks below 6,500m to promote tourism and alpine climbing. Peaks like Laila Peak and Pastore Peak are royalty-free.",
  },
  {
    question: "What is a Liaison Officer and do I need one?",
    answer:
      "A Liaison Officer is a government-appointed official required for all expeditions above 6,500m. Your team is responsible for their expenses including equipment, food, and allowances.",
  },
  {
    question: "How often do royalty rates change?",
    answer:
      "Royalty rates are set by the Government of Pakistan and can change periodically. We recommend contacting us for the most current fee structure before planning your expedition.",
  },
];

export default function PeakRoyalty() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [regsVisible, setRegsVisible] = useState(false);
  const [coveredVisible, setCoveredVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const regsRef = useRef<HTMLElement>(null);
  const coveredRef = useRef<HTMLElement>(null);
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
      { ref: statsRef, observer: createObserver(setStatsVisible) },
      { ref: categoriesRef, observer: createObserver(setCategoriesVisible) },
      { ref: regsRef, observer: createObserver(setRegsVisible) },
      { ref: coveredRef, observer: createObserver(setCoveredVisible) },
      { ref: faqRef, observer: createObserver(setFaqVisible) },
      { ref: ctaRef, observer: createObserver(setCtaVisible) },
    ];

    observers.forEach(({ ref, observer }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observers.forEach(({ observer }) => observer.disconnect());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[400px] h-[50vh] sm:h-[55vh] md:h-[60vh]"
        >
          <img
            src={mountainImage}
            alt="Peak Royalty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
            <div className="absolute top-20 left-10 w-24 lg:w-32 h-24 lg:h-32 border border-white/10 rounded-full" />
            <div className="absolute bottom-20 right-10 w-32 lg:w-48 h-32 lg:h-48 border border-white/10 rounded-full" />
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-1000 ${heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <div className="container mx-auto px-4 sm:px-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.6)" }}
              >
                <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wide">
                  GOVERNMENT FEES
                </span>
              </div>
              <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4">
                Peak Royalty Fees
              </h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                Understanding Pakistan's climbing permit structure and
                conservation fees for the world's greatest peaks
              </p>

              {/* Quick Action Button */}
              <a
                href="#categories"
                className={`w-full md:w-fit inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl bg-white text-gray-900 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: heroVisible ? "500ms" : "0ms" }}
              >
                <span>View Fee Structure</span>
                <ChevronRight className="hidden md:block w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section
          ref={statsRef}
          className="py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #006F61 0%, #005249 100%)",
            }}
          />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 rounded-full bg-white/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center group transition-all duration-700 ${statsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                    }`}
                  style={{
                    transitionDelay: statsVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-xs sm:text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <span
                  className="text-xs sm:text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  TRANSPARENCY FIRST
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
                Understanding{" "}
                <span style={{ color: "#006F61" }}>Royalty Fees</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
                In Pakistan, the Government of Gilgit-Baltistan and the Ministry
                of Tourism require all climbing expeditions attempting peaks
                above 6,500 meters to pay a royalty fee.
              </p>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                These fees are vital for the{" "}
                <span className="font-semibold" style={{ color: "#006F61" }}>
                  conservation of our mountain ranges
                </span>
                , maintenance of trekking routes, and economic support of local
                communities. At North Karakoram, we believe in complete
                transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Fee Categories Section */}
        <section
          ref={categoriesRef}
          id="categories"
          className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${categoriesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <span
                  className="text-xs sm:text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  FEE STRUCTURE 2024-2025
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4">
                Royalty <span style={{ color: "#006F61" }}>Categories</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                Fees are determined by peak altitude and season. Off-season
                climbs often receive significant discounts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {feeCategories.map((category, index) => (
                <Card
                  key={index}
                  className={`group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-gray-100 ${categoriesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: categoriesVisible
                      ? `${200 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="hidden md:flex w-10 h-10 sm:w-12 sm:h-12 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                        >
                          <category.icon
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            style={{ color: "#006F61" }}
                          />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900">
                            {category.title}
                          </h3>
                          <p className="text-gray-500 text-xs sm:text-sm">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>
                      <span
                        className="px-2 py-1 rounded-full text-white text-[10px] sm:text-xs font-bold"
                        style={{ backgroundColor: category.badgeColor }}
                      >
                        {category.badge}
                      </span>
                    </div>

                    <ul className="space-y-2 sm:space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600"
                        >
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: "#006F61" }}
                          />
                          <span>{item}</span>
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

            <p
              className={`text-center text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8 italic transition-all duration-700 ${categoriesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: categoriesVisible ? "600ms" : "0ms" }}
            >
              Note: Official rates change periodically. Contact us for the
              latest fee structure for your team size and target peak.
            </p>
          </div>
        </section>

        {/* Essential Regulations Section */}
        <section
          ref={regsRef}
          className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${regsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <span
                  className="text-xs sm:text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  IMPORTANT REQUIREMENTS
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4">
                Essential <span style={{ color: "#006F61" }}>Regulations</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                Key requirements for all climbing expeditions in Pakistan
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {essentialRegs.map((reg, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-gray-100 ${regsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: regsVisible
                      ? `${200 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                      >
                        <reg.icon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          style={{ color: "#006F61" }}
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">
                          {reg.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {reg.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Covered Section */}
        <section
          ref={coveredRef}
          className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div
                className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${coveredVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <span
                    className="text-xs sm:text-sm font-semibold tracking-wide"
                    style={{ color: "#006F61" }}
                  >
                    INCLUDED IN OUR PACKAGES
                  </span>
                </div>

                <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3 sm:mb-4">
                  What We <span style={{ color: "#006F61" }}>Cover</span>
                </h2>

                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
                  Our full-service expedition packages include all essential
                  fees and permits
                </p>
              </div>

              <Card
                className={`border-gray-100 shadow-xl overflow-hidden transition-all duration-700 ${coveredVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: coveredVisible ? "200ms" : "0ms" }}
              >
                <div className="h-2" style={{ backgroundColor: "#006F61" }} />
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {whatsCovered.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 ${coveredVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                          }`}
                        style={{
                          transitionDelay: coveredVisible
                            ? `${300 + index * 75}ms`
                            : "0ms",
                        }}
                      >
                        <div
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                        >
                          <item.icon
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            style={{ color: "#006F61" }}
                          />
                        </div>
                        <span className="font-medium text-gray-900 text-xs sm:text-sm">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-6 p-4 rounded-xl border border-amber-200"
                    style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}
                  >
                    <p className="text-amber-800 text-xs sm:text-sm">
                      <strong>Note:</strong> Unless you book "Base Camp Services
                      Only," these items are included in our full-service
                      expedition packages.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${faqVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <span
                  className="text-xs sm:text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  FAQ
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3 sm:mb-4">
                Common <span style={{ color: "#006F61" }}>Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden bg-white transition-all duration-700 ${faqVisible
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
                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base md:text-lg text-gray-900 pr-3 sm:pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${expandedFaq === index ? "rotate-45" : ""
                        }`}
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <span
                        className="text-xl sm:text-2xl leading-none"
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
                    <p className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
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
          className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #006F61 0%, #004d44 100%)",
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 border border-white/10 rounded-full hidden sm:block" />
            <div className="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 border border-white/10 rounded-full hidden sm:block" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`max-w-3xl mx-auto text-center transition-all duration-700 ${ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4 sm:mb-6">
                <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide">
                  PLAN YOUR EXPEDITION
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 px-2">
                Ready to Conquer Your Peak?
              </h2>

              <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 px-2">
                Royalty fees vary by season and team size. We handle the
                paperwork so you can focus on the climb.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full md:w-fit sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto bg-white text-gray-900 font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 shadow-lg rounded-lg sm:rounded-xl"
                  >
                    <Mail className="hidden md:block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get Custom Quote
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full md:w-fit sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto border-2 border-white/50 text-white bg-transparent hover:bg-white/10 font-semibold transition-all duration-300 hover:-translate-y-1 rounded-lg sm:rounded-xl"
                  onClick={() =>
                    window.open("https://wa.me/923330228111", "_blank")
                  }
                >
                  <MessageCircle className="hidden md:block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm">
                <a
                  href="tel:+923330228111"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>+92 333 0228111</span>
                </a>
                <a
                  href="mailto:info@northkarakoram.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="break-all sm:break-normal">
                    info@northkarakoram.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
