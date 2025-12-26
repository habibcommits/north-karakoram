import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import visaHeaderImage from "@assets/stock_images/beautiful_mountain_p_1088467d.jpg";
import {
  CheckCircle,
  Clock,
  ExternalLink,
  FileText,
  Sparkles,
  Globe,
  Shield,
  Users,
  MapPin,
  Phone,
  ArrowRight,
  Plane,
  CreditCard,
  Building,
  Info,
  AlertCircle,
  Calendar,
  Mountain,
  Stamp,
  BookOpen,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

const visaOptions = [
  {
    icon: Plane,
    title: "On Arrival Visa (e-Visa)",
    description: "Quick processing for eligible countries",
    processing: "48-72 Hours",
    validity: "30 Days",
    entry: "Single Entry",
    recommended: true,
  },
  {
    icon: Globe,
    title: "Online Tourist Visa",
    description: "Apply from anywhere in the world",
    processing: "7-10 Days",
    validity: "Up to 6 Months",
    entry: "Single/Double Entry",
    recommended: false,
  },
  {
    icon: Building,
    title: "Embassy/Consulate",
    description: "Traditional application method",
    processing: "2-4 Weeks",
    validity: "Varies",
    entry: "Multiple Options",
    recommended: false,
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Check Eligibility",
    description: "Verify your country is eligible for the visa type you need",
    icon: CheckCircle,
  },
  {
    step: 2,
    title: "Gather Documents",
    description: "Prepare passport, photo, and supporting documents",
    icon: FileText,
  },
  {
    step: 3,
    title: "Complete Application",
    description: "Fill out the online form on the official portal",
    icon: BookOpen,
  },
  {
    step: 4,
    title: "Pay Fees",
    description: "Submit payment via Credit/Debit Card",
    icon: CreditCard,
  },
  {
    step: 5,
    title: "Receive Visa",
    description: "Get your e-visa via email or collect from embassy",
    icon: Stamp,
  },
];

const requiredDocuments = [
  "Valid Passport (6+ months validity)",
  "Recent Passport-size Photograph",
  "Invitation Letter or Hotel Booking",
  "Return Flight Tickets",
  "Proof of Sufficient Funds",
  "Travel Insurance (Recommended)",
];

const embassies = [
  {
    country: "United Kingdom",
    locations: [
      {
        city: "London",
        name: "High Commission of Pakistan",
        address: "35-36 Lowndes Square, London SW1X 9JN",
        phone: "+44 20 7664 9200",
      },
      {
        city: "Manchester",
        name: "Pakistan Consulate",
        address: "137 Dickenson Road, Manchester M14 5JB",
        phone: "+44 161 225 2005",
      },
    ],
  },
  {
    country: "United States",
    locations: [
      {
        city: "Washington DC",
        name: "Embassy of Pakistan",
        address: "3517 International Court NW, Washington DC 20008",
        phone: "+1 (202) 243 6500",
      },
      {
        city: "New York",
        name: "Consulate General",
        address: "12 East 65th Street, New York NY 10021",
        phone: "+1 (212) 879 5800",
      },
    ],
  },
  {
    country: "Canada",
    locations: [
      {
        city: "Ottawa",
        name: "High Commission of Pakistan",
        address: "10 Range Road, Ottawa ON K1N 8J3",
        phone: "+1 613-238-7881",
      },
      {
        city: "Toronto",
        name: "Pakistan Consulate",
        address: "7880 Keele Street Unit 14, Vaughan, Ontario L4K 4G7",
        phone: "+1 905-532-7878",
      },
    ],
  },
  {
    country: "Australia",
    locations: [
      {
        city: "Canberra",
        name: "High Commission of Pakistan",
        address: "4 Timbarra Crescent, O'Malley ACT 2606",
        phone: "+61 2 6290 1676",
      },
      {
        city: "Sydney",
        name: "Consulate General",
        address: "Suite 1, Level 5, 32 Martin Place, Sydney NSW 2000",
        phone: "+61 2 9231 5522",
      },
    ],
  },
];

const tips = [
  {
    icon: Clock,
    title: "Apply Early",
    description: "Submit your application at least 2 weeks before travel",
  },
  {
    icon: FileText,
    title: "Complete Documents",
    description: "Ensure all documents are clear and properly formatted",
  },
  {
    icon: Shield,
    title: "Valid Passport",
    description: "Passport must be valid for 6+ months beyond travel dates",
  },
  {
    icon: CreditCard,
    title: "Payment Ready",
    description: "Keep a valid credit/debit card for fee payment",
  },
];

const faqs = [
  {
    question: "How long does the e-visa take to process?",
    answer:
      "The on-arrival e-visa typically takes 48-72 working hours to process. We recommend applying at least 1 week before your travel date to account for any delays.",
  },
  {
    question: "Can I extend my tourist visa in Pakistan?",
    answer:
      "Yes, tourist visas can be extended in Pakistan. You need to apply at the nearest Passport Office before your current visa expires. Extensions are typically granted for up to 3 months.",
  },
  {
    question: "What if my visa application is rejected?",
    answer:
      "If your application is rejected, you'll receive a notification with the reason. You can reapply after addressing the issues mentioned. Visa fees are generally non-refundable.",
  },
  {
    question: "Do I need a visa if I'm just transiting through Pakistan?",
    answer:
      "Transit passengers who don't leave the airport within 24 hours typically don't need a visa. However, if you plan to exit the airport or stay longer, you'll need a transit visa.",
  },
];

const stats = [
  { value: "175+", label: "Eligible Countries", icon: Globe },
  { value: "48hrs", label: "Fastest Processing", icon: Clock },
  { value: "30-90", label: "Days Validity", icon: Calendar },
  { value: "100%", label: "Online Process", icon: CheckCircle },
];

export default function PakistanVisa() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [docsVisible, setDocsVisible] = useState(false);
  const [embassiesVisible, setEmbassiesVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const optionsRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);
  const docsRef = useRef<HTMLElement>(null);
  const embassiesRef = useRef<HTMLElement>(null);
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
      { ref: optionsRef, observer: createObserver(setOptionsVisible) },
      { ref: stepsRef, observer: createObserver(setStepsVisible) },
      { ref: docsRef, observer: createObserver(setDocsVisible) },
      { ref: embassiesRef, observer: createObserver(setEmbassiesVisible) },
      { ref: faqRef, observer: createObserver(setFaqVisible) },
      { ref: ctaRef, observer: createObserver(setCtaVisible) },
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
        <section ref={heroRef} className="relative h-[55vh] min-h-[450px]">
          <img
            src={visaHeaderImage}
            alt="Pakistan Visa"
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
            <div className="container mx-auto px-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.6)" }}
              >
                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  TRAVEL REQUIREMENTS
                </span>
              </div>
              <h1 className="font-heading font-bold text-2xl md:text-4xl lg:text-6xl text-white mb-4">
                Pakistan Visa & Passports
              </h1>
              <p className="text-white/80 text-md md:text-xl max-w-2xl mx-auto mb-8">
                Everything you need to know about obtaining your visa for an
                unforgettable adventure in Pakistan
              </p>

              {/* Quick Action Button */}
              <a
                href="https://visa.nadra.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className={`justify-center w-full md:w-fit inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: heroVisible ? "500ms" : "0ms" }}
              >
                Apply for Visa Now
                <ExternalLink className="hidden md:block w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
            </div>
          </div> */}
        </section>

        {/* Stats Section */}
        {/* <section className="py-12 md:py-16 relative overflow-hidden">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Introduction Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
            />
            <div className="absolute top-20 left-10 hidden xl:block">
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
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "#006F61" }}
                  >
                    VISA INFORMATION
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                  Your Gateway to{" "}
                  <span
                    className="relative inline-block"
                    style={{ color: "#006F61" }}
                  >
                    Pakistan
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
                  All foreign nationals require a Visa to enter Pakistan and a
                  Passport valid for at least 6 months beyond your intended
                  stay. Pakistan has introduced an efficient Online visa system
                  making it easier than ever to plan your adventure.
                </p>
              </div>

              {/* Important Notice */}
              <div
                className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4"
                role="alert"
              >
                <div className="hidden md:flex w-12 h-12 rounded-xl bg-amber-100 items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">
                    Important Notice
                  </h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Issuance of Pakistan Visa is the prerogative of the
                    Government of Pakistan. Please ensure all information
                    provided is accurate and complete to avoid delays in
                    processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Options Section */}
        <section
          ref={optionsRef}
          className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${optionsVisible
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
                  VISA OPTIONS
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Choose Your <span style={{ color: "#006F61" }}>Visa Type</span>
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Select the visa option that best suits your travel needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {visaOptions.map((option, index) => (
                <Card
                  key={index}
                  className={`group relative flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-gray-100 ${option.recommended ? "ring-2 ring-[#006F61]" : ""
                    } ${optionsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: optionsVisible
                      ? `${200 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  {option.recommended && (
                    <div
                      className="absolute top-0 right-0 px-4 py-1.5 text-xs font-bold text-white rounded-bl-xl"
                      style={{ backgroundColor: "#006F61" }}
                    >
                      RECOMMENDED
                    </div>
                  )}
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <option.icon
                        className="w-8 h-8"
                        style={{ color: "#006F61" }}
                      />
                    </div>

                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{option.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Processing</span>
                        <span className="font-semibold text-gray-900">
                          {option.processing}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Validity</span>
                        <span className="font-semibold text-gray-900">
                          {option.validity}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Entry</span>
                        <span className="font-semibold text-gray-900">
                          {option.entry}
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://visa.nadra.gov.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 font-semibold transition-colors"
                      style={{ color: "#006F61" }}
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </a>
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

        {/* Application Steps Section */}
        <section
          ref={stepsRef}
          className="py-20 md:py-28 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${stepsVisible
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
                  HOW TO APPLY
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Simple <span style={{ color: "#006F61" }}>5-Step</span> Process
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Follow these easy steps to obtain your Pakistan visa
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-6">
                {applicationSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative text-center transition-all duration-700 ${stepsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: stepsVisible
                        ? `${200 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    {/* Connector Line */}
                    {index < applicationSteps.length - 1 && (
                      <div
                        className="hidden md:block absolute top-10 left-1/2 w-full h-0.5"
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.2)" }}
                      />
                    )}

                    {/* Step Number */}
                    <div
                      className="relative w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl z-10"
                      style={{ backgroundColor: "#006F61" }}
                    >
                      {step.step}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents Section */}
        <section
          ref={docsRef}
          className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Documents List */}
              <div
                className={`transition-all duration-700 ${docsVisible
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
                    Required Documents
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                  What You'll <span style={{ color: "#006F61" }}>Need</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Prepare these documents before starting your visa application
                  to ensure a smooth process.
                </p>

                <div className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${docsVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                        }`}
                      style={{
                        transitionDelay: docsVisible
                          ? `${300 + index * 100}ms`
                          : "0ms",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                      >
                        <CheckCircle
                          className="w-5 h-5"
                          style={{ color: "#006F61" }}
                        />
                      </div>
                      <span className="text-gray-700 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Section */}
              <div
                className={`transition-all duration-700 delay-300 ${docsVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
                  }`}
              >
                <Card className="shadow-xl border-gray-100 overflow-hidden">
                  <div className="h-2" style={{ backgroundColor: "#006F61" }} />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                      >
                        <Info
                          className="w-6 h-6"
                          style={{ color: "#006F61" }}
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-gray-900">
                        Helpful Tips
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {tips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                          >
                            <tip.icon
                              className="w-5 h-5"
                              style={{ color: "#006F61" }}
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {tip.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {tip.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <a
                        href="https://visa.nadra.gov.pk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="w-full text-base py-6 h-auto font-semibold"
                          style={{ backgroundColor: "#006F61" }}
                        >
                          Start Application
                          <ExternalLink className="hidden md:block w-5 h-5 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Embassies Section */}
        <section
          ref={embassiesRef}
          className="py-20 md:py-28 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${embassiesVisible
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
                  EMBASSIES & CONSULATES
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Pakistan <span style={{ color: "#006F61" }}>Missions</span>{" "}
                Worldwide
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Find your nearest Pakistan embassy or consulate for in-person
                visa applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {embassies.map((embassy, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-500 border-gray-100 overflow-hidden ${embassiesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: embassiesVisible
                      ? `${200 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <CardContent className="p-0">
                    <div
                      className="p-6 border-b border-gray-100"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                        >
                          <Globe
                            className="w-6 h-6"
                            style={{ color: "#006F61" }}
                          />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-gray-900">
                          {embassy.country}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      {embassy.locations.map((location, locIndex) => (
                        <div key={locIndex}>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {location.city}
                          </h4>
                          <p className="text-sm text-gray-600 mb-1">
                            {location.name}
                          </p>
                          <div className="flex items-start gap-2 text-sm text-gray-500 mb-1">
                            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{location.address}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone
                              className="w-4 h-4"
                              style={{ color: "#006F61" }}
                            />
                            <a
                              href={`tel:${location.phone}`}
                              className="hover:underline"
                              style={{ color: "#006F61" }}
                            >
                              {location.phone}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  FAQ
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Frequently Asked{" "}
                <span style={{ color: "#006F61" }}>Questions</span>
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
                    <p className="text-sm md:text-md px-6 pb-6 text-gray-600 leading-relaxed">
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`max-w-3xl mx-auto text-center transition-all duration-700 ${ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  START YOUR JOURNEY
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Ready to Explore Pakistan?
              </h2>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                Get your visa and start planning your adventure to the majestic
                mountains of Pakistan. Our team is here to help with every step.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://visa.nadra.gov.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-fit inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Apply for Visa
                  <ExternalLink className="hidden md:block w-5 h-5" />
                </a>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-fit sm:w-auto text-lg px-8 py-4 h-auto border-2 border-white/50 text-white bg-transparent hover:bg-white/10 font-semibold transition-all duration-300 hover:-translate-y-1"
                  >
                    Need Assistance?
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
