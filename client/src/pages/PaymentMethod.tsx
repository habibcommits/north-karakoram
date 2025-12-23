import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import paymentHeaderImage from "@assets/stock_images/mountain_expedition__228548ef.jpg";
import {
  Banknote,
  CheckCircle,
  MessageCircle,
  Users,
  CreditCard,
  Shield,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Building,
  FileText,
  HelpCircle,
  ChevronRight,
  AlertCircle,
  Send,
  Mountain,
  Receipt,
  UserCheck,
  Wallet,
} from "lucide-react";

const paymentSteps = [
  {
    step: 1,
    title: "Choose Your Trip",
    description: "Select your adventure and review the total cost",
    icon: Mountain,
  },
  {
    step: 2,
    title: "Pay 30% Deposit",
    description: "Transfer the advance deposit via bank or mobile banking",
    icon: Wallet,
  },
  {
    step: 3,
    title: "Share Receipt",
    description: "Send payment proof and guest details via WhatsApp",
    icon: Send,
  },
  {
    step: 4,
    title: "Get Confirmation",
    description: "Receive booking confirmation and itinerary details",
    icon: CheckCircle,
  },
  {
    step: 5,
    title: "Pay Balance",
    description: "Complete the remaining 70% upon arrival",
    icon: Receipt,
  },
];

const paymentFeatures = [
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "All payments through verified banking channels",
  },
  {
    icon: Clock,
    title: "Quick Confirmation",
    description: "Booking confirmed within 24 hours of payment",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Split payment - 30% now, 70% on arrival",
  },
  {
    icon: FileText,
    title: "Digital Receipts",
    description: "Instant confirmation and receipts provided",
  },
];

const faqs = [
  {
    question: "What happens after I pay the 30% deposit?",
    answer:
      "Once we receive your funds and guest details, your slot is secured. We will promptly send you a booking confirmation message and itinerary details via WhatsApp or Email.",
  },
  {
    question: "When is the remaining 70% due?",
    answer:
      "The outstanding balance is collected just before the tour begins or upon your arrival at the destination. We will send a courtesy reminder as your trip date approaches.",
  },
  {
    question: "Do you accept international transfers?",
    answer:
      "Yes, we welcome international guests. Please reach out to us for specific SWIFT/IBAN details to facilitate a smooth international transaction.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Refunds depend on the timing of the cancellation. Generally, cancellations 30+ days prior receive an 80% refund. Please refer to our terms and conditions for full details.",
  },
];

const stats = [
  { value: "30%", label: "Advance Deposit", icon: Wallet },
  { value: "70%", label: "On Arrival", icon: Receipt },
  { value: "PKR", label: "Currency Accepted", icon: Banknote },
  { value: "24/7", label: "WhatsApp Support", icon: MessageCircle },
];

export default function PaymentMethod() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [bankVisible, setBankVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [groupVisible, setGroupVisible] = useState(false);
  const [privacyVisible, setPrivacyVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const bankRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);
  const groupRef = useRef<HTMLElement>(null);
  const privacyRef = useRef<HTMLElement>(null);
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
      { ref: bankRef, observer: createObserver(setBankVisible) },
      { ref: stepsRef, observer: createObserver(setStepsVisible) },
      { ref: groupRef, observer: createObserver(setGroupVisible) },
      { ref: privacyRef, observer: createObserver(setPrivacyVisible) },
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
            src={paymentHeaderImage}
            alt="Payment Methods"
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
                style={{ backgroundColor: "rgba(0, 111, 97, 0.3)" }}
              >
                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  BOOKING ESSENTIALS
                </span>
              </div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-6xl text-white mb-4">
                Payment Options
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Simple and secure payment methods for your Pakistani adventure
              </p>

              {/* Quick Action Button */}
              <button
                onClick={() =>
                  window.open("https://wa.me/923330228111", "_blank")
                }
                className={`w-full md:w-fit inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-md md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: heroVisible ? "500ms" : "0ms" }}
              >
                <MessageCircle className="hidden md:block w-5 h-5" />
                Contact via WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="hidden md:block py-12 md:py-16 relative overflow-hidden">
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
        </section>

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
                    PAYMENT INFORMATION
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                  Secure Your{" "}
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
                  To confirm your reservation, please remit an{" "}
                  <span className="font-bold" style={{ color: "#006F61" }}>
                    advance deposit of 30%
                  </span>{" "}
                  per person. The remaining 70% balance is due upon your
                  arrival.
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
                    This payment method is only for local payments. We accept
                    payments via standard Bank Transfer or Mobile Banking
                    services. Once the transaction is complete, please share the
                    receipt along with the Names and CNIC numbers of all
                    travelers via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {paymentFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <feature.icon
                        className="w-7 h-7"
                        style={{ color: "#006F61" }}
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Banking Details Section */}
        <section
          ref={bankRef}
          className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${bankVisible
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
                  BANK TRANSFER
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Banking <span style={{ color: "#006F61" }}>Details</span>
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Transfer your deposit to our official bank account
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-gray-100 ${bankVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: bankVisible ? "200ms" : "0ms" }}
              >
                <div className="h-2" style={{ backgroundColor: "#006F61" }} />
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="hidden md:flex w-16 h-16 rounded-2xl items-center justify-center"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <Banknote
                        className="w-8 h-8"
                        style={{ color: "#006F61" }}
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-gray-900">
                        Soneri Bank
                      </h3>
                      <p className="text-gray-600">Soneri Ikhtiar Account</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {[
                      {
                        label: "Account Title",
                        value: "NORTH KARAKORAM TREKS & TOURS",
                      },
                      { label: "Account Number", value: "20015237768" },
                      { label: "IBAN", value: "PK91SONE0005220015237768" },
                      { label: "Branch", value: "Chandni Chowk RWP-0052" },
                      { label: "Account Type", value: "Current" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100"
                      >
                        <span className="text-sm font-medium text-gray-500 mb-1 sm:mb-0">
                          {item.label}
                        </span>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">
                          {item.value}
                        </span>
                      </div>
                    ))}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-green-50 border border-green-200">
                      <span className="text-sm font-medium text-gray-500 mb-1 sm:mb-0">
                        Account Status
                      </span>
                      <span className="font-semibold text-green-600 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Active
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Steps Section */}
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
                <MessageCircle
                  className="w-4 h-4"
                  style={{ color: "#006F61" }}
                />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  HOW IT WORKS
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Simple <span style={{ color: "#006F61" }}>5-Step</span> Process
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Follow these easy steps to complete your booking
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-6">
                {paymentSteps.map((step, index) => (
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
                    {index < paymentSteps.length - 1 && (
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

            {/* Detailed Instructions Card */}
            <div className="max-w-3xl mx-auto mt-16">
              <Card
                className={`border-gray-100 shadow-xl overflow-hidden transition-all duration-700 ${stepsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: stepsVisible ? "700ms" : "0ms" }}
              >
                <div className="h-2" style={{ backgroundColor: "#006F61" }} />
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-6 flex items-center gap-3">
                    <Send className="w-6 h-6" style={{ color: "#006F61" }} />
                    What to Send Us
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        num: 1,
                        title: "Payment Receipt",
                        desc: "Screenshot or photo of your transaction confirmation",
                      },
                      {
                        num: 2,
                        title: "Guest Names",
                        desc: "Full names of all travelers as per CNIC/Passport",
                      },
                      {
                        num: 3,
                        title: "CNIC Numbers",
                        desc: "Valid CNIC numbers for all Pakistani travelers",
                      },
                    ].map((item) => (
                      <div key={item.num} className="flex gap-4">
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                          style={{ backgroundColor: "#006F61" }}
                        >
                          {item.num}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {item.title}
                          </p>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-6 p-4 rounded-xl flex items-center gap-4"
                    style={{ backgroundColor: "rgba(0, 111, 97, 0.05)" }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "#006F61" }} />
                    <span className="text-gray-700">
                      WhatsApp:{" "}
                      <span
                        className="font-bold"
                        style={{ color: "#006F61" }}
                      >
                        +92 333 0228111
                      </span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Group Reservations Section */}
        <section
          ref={groupRef}
          className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Content */}
              <div
                className={`transition-all duration-700 ${groupVisible
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
                    Group Bookings
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                  Traveling with a{" "}
                  <span style={{ color: "#006F61" }}>Team?</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  To ensure smooth processing of logistics and permits, please
                  provide a compiled list of all attendees along with their
                  CNIC/Passport numbers when submitting your deposit slip.
                </p>

                <div className="space-y-4">
                  {[
                    "Check availability for large groups by contacting us beforehand",
                    "Special discounts may apply for larger expeditions",
                    "Customized itineraries are available upon request",
                    "Dedicated group coordinator assigned for seamless experience",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${groupVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                        }`}
                      style={{
                        transitionDelay: groupVisible
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
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card */}
              <div
                className={`transition-all duration-700 delay-300 ${groupVisible
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
                        <Users
                          className="w-6 h-6"
                          style={{ color: "#006F61" }}
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-gray-900">
                        Group Benefits
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          icon: UserCheck,
                          title: "Personalized Service",
                          desc: "Dedicated support for your entire group",
                        },
                        {
                          icon: Wallet,
                          title: "Group Discounts",
                          desc: "Special pricing for larger parties",
                        },
                        {
                          icon: FileText,
                          title: "Custom Itineraries",
                          desc: "Tailored experiences for your team",
                        },
                        {
                          icon: Shield,
                          title: "Permit Handling",
                          desc: "We manage all necessary documentation",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                          >
                            <item.icon
                              className="w-5 h-5"
                              style={{ color: "#006F61" }}
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Button
                        className="w-full text-base py-6 h-auto font-semibold"
                        style={{ backgroundColor: "#006F61" }}
                        onClick={() =>
                          window.open("https://wa.me/923330228111", "_blank")
                        }
                      >
                        Inquire About Group Booking
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Data Privacy Section */}
        <section
          ref={privacyRef}
          className="py-20 md:py-28 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${privacyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <Shield className="w-4 h-4" style={{ color: "#006F61" }} />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  SECURITY & PRIVACY
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Your Data is <span style={{ color: "#006F61" }}>Safe</span>
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                We take your privacy and financial security seriously
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Strict Confidentiality",
                  desc: "Your financial data is handled with utmost care",
                },
                {
                  icon: Building,
                  title: "Verified Channels",
                  desc: "Payments routed through official banking systems",
                },
                {
                  icon: CheckCircle,
                  title: "Official Accounts",
                  desc: "Only transfer to our listed company accounts",
                },
                {
                  icon: FileText,
                  title: "Digital Receipts",
                  desc: "Instant receipts provided for your records",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`group text-center p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-gray-100 ${privacyVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: privacyVisible
                      ? `${200 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <CardContent className="p-0">
                    <div
                      className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <item.icon
                        className="w-7 h-7"
                        style={{ color: "#006F61" }}
                      />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
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
                    <span className="font-heading font-bold text-lg text-gray-900 pr-4">
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
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
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
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Ready to Book Your Adventure?
              </h2>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                Have questions regarding payments or availability? Reach out to
                us directly. We're here to help 24/7.
              </p>

              <div className="flex flex-col items-center gap-4 mb-10">
                <p className="font-heading font-bold text-3xl md:text-4xl text-white">
                  +92 333 0228111
                </p>
                <p className="text-white/70">WhatsApp: Active 24/7</p>
                <div className="flex items-center gap-2 text-white/70">
                  <Mail className="w-4 h-4" />
                  <span>info@northkarakoram.com</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 h-auto bg-white text-gray-900 font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  onClick={() =>
                    window.open("https://wa.me/923330228111", "_blank")
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact via WhatsApp
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 h-auto border-2 border-white/50 text-white bg-transparent hover:bg-white/10 font-semibold transition-all duration-300 hover:-translate-y-1"
                  onClick={() =>
                    (window.location.href = "mailto:info@northkarakoram.com")
                  }
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
