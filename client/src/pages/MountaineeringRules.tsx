import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  AlertTriangle,
  Shield,
  TreePine,
  Users,
  Backpack,
  Mountain,
  Droplet,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Heart,
  Clock,
  Thermometer,
  Wind,
  MapPin,
  Phone,
  BookOpen,
  Award,
  Target,
  AlertCircle,
} from "lucide-react";
import mountainImage from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";

const sections = [
  {
    icon: Shield,
    title: "Safety First, Summits Second",
    badge: "Priority #1",
    color: "#006F61",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 font-medium italic border-l-4 pl-4 py-2 bg-gray-50 rounded-r-lg" style={{ borderColor: "#006F61" }}>
          "The mountain will always be there, but the opportunity to climb it depends on your safety today."
        </p>
        <div className="space-y-4">
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: "#006F61" }} />
              The Turn-Around Rule
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Respect the "turn-around time" set by your lead guide. If you haven't reached the summit by the designated time, you must descend immediately to ensure a safe return before dark or deteriorating weather.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Wind className="w-4 h-4" style={{ color: "#006F61" }} />
              Weather Authority
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Weather in the Karakoram and Himalayas can change in minutes. The Lead Guide has the final authority to cancel or alter a climb based on weather conditions.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4" style={{ color: "#006F61" }} />
              Health Transparency
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Never hide an injury or symptom of illness (especially altitude sickness) from your guide. Early detection saves lives.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: TreePine,
    title: "Respect the Environment",
    badge: "Leave No Trace",
    color: "#006F61",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          We act as stewards of these pristine landscapes. We strictly follow the "Leave No Trace" principles.
        </p>
        <div className="space-y-4">
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Backpack className="w-4 h-4" style={{ color: "#006F61" }} />
              Pack It In, Pack It Out
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Every piece of trash—from food wrappers to used batteries—must be carried back down. Do not bury trash in the snow or hide it under rocks.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Droplet className="w-4 h-4" style={{ color: "#006F61" }} />
              Water Sources
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Do not wash dishes or use soap directly in streams or lakes. Keep water sources clean for local communities and wildlife.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" style={{ color: "#006F61" }} />
              Wildlife
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Observe wildlife from a distance. Do not feed animals or disrupt their natural behaviors.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "The Team Dynamic",
    badge: "Teamwork",
    color: "#006F61",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Expeditions are built on trust and teamwork. Success depends on every member working together.
        </p>
        <div className="space-y-4">
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" style={{ color: "#006F61" }} />
              Follow the Leader
            </h4>
            <p className="text-gray-600 leading-relaxed">
              The Expedition Leader or High-Altitude Guide is the captain of the ship. Their instructions regarding route, pace, and safety techniques are non-negotiable.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" style={{ color: "#006F61" }} />
              Stay Together
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Never wander off from the group without notifying a guide. On technical terrain, maintain the specified rope distance and pace.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4" style={{ color: "#006F61" }} />
              Respect Culture
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Treat our porters, cooks, and local staff with the same respect you treat your fellow climbers. They are the backbone of your expedition.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Backpack,
    title: "Preparation & Gear",
    badge: "Be Ready",
    color: "#006F61",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Success relies on preparation before you even step onto the mountain.
        </p>
        <div className="space-y-4">
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: "#006F61" }} />
              Mandatory Gear
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Do not compromise on equipment. You must carry the mandatory gear list provided for your specific expedition (e.g., crampons, harness, down suit).
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" style={{ color: "#006F61" }} />
              Self-Sufficiency
            </h4>
            <p className="text-gray-600 leading-relaxed">
              While our team supports you, you must be capable of managing your personal gear, layering systems, and basic needs in extreme conditions.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Mountain className="w-4 h-4" style={{ color: "#006F61" }} />
              Physical Fitness
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Arrive in the physical condition required for your objective. Underestimating the physical toll of high altitude endangers the entire team.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Mountain,
    title: "Acclimatization Protocols",
    badge: "Altitude Safety",
    color: "#006F61",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Altitude is the great equalizer. We follow strict protocols to manage the thin air.
        </p>
        <div className="space-y-4">
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Thermometer className="w-4 h-4" style={{ color: "#006F61" }} />
              Climb High, Sleep Low
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Follow the acclimatization schedule designed by our experts. Do not rush ascents.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Droplet className="w-4 h-4" style={{ color: "#006F61" }} />
              Hydration
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Drink 3-4 liters of water daily. Dehydration accelerates altitude sickness.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" style={{ color: "#006F61" }} />
              No Alcohol
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Consumption of alcohol is strictly prohibited during the ascent phase of any high-altitude expedition, as it depresses breathing and masks AMS symptoms.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Emergency Protocols",
    badge: "Critical",
    color: "#006F61",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          In the mountains, being prepared for emergencies can mean the difference between life and death.
        </p>
        <div className="space-y-4">
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" style={{ color: "#006F61" }} />
              Communication
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Always stay within communication range. Carry and know how to use emergency communication devices provided by the team.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: "#006F61" }} />
              Know Your Location
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Always be aware of your position on the mountain. In case of separation, stay calm and follow the emergency protocols briefed before the climb.
            </p>
          </div>
          <div className="group">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" style={{ color: "#006F61" }} />
              First Aid Knowledge
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Basic first aid knowledge is essential. Attend the pre-expedition briefings and learn how to recognize and respond to common mountain emergencies.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const keyPrinciples = [
  {
    icon: Shield,
    title: "Safety",
    description: "Your wellbeing is our top priority",
  },
  {
    icon: TreePine,
    title: "Environment",
    description: "Protect and preserve nature",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Success through collaboration",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Highest standards always",
  },
];

const stats = [
  { value: "100%", label: "Safety Record", icon: Shield },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "150+", label: "Expeditions Led", icon: Mountain },
  { value: "0", label: "Compromises on Safety", icon: AlertCircle },
];

export default function MountaineeringRules() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [principlesVisible, setPrinciplesVisible] = useState(false);
  const [rulesVisible, setRulesVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const principlesRef = useRef<HTMLElement>(null);
  const rulesRef = useRef<HTMLElement>(null);
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
      { ref: introRef, observer: createObserver(setIntroVisible) },
      { ref: principlesRef, observer: createObserver(setPrinciplesVisible) },
      { ref: rulesRef, observer: createObserver(setRulesVisible) },
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
            src={mountainImage}
            alt="Mountaineering"
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
                  SAFETY & EXCELLENCE
                </span>
              </div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-6xl text-white mb-4">
                Mountaineering Rules
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Essential guidelines for a safe and successful expedition in the world's greatest mountain ranges
              </p>

              {/* Quick Stats */}
              {/* <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center transition-all duration-700 ${heroVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                      }`}
                    style={{
                      transitionDelay: heroVisible
                        ? `${500 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
            </div>
          </div> */}
        </section>

        {/* Introduction Section */}
        <section
          ref={introRef}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden"
        >
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
            <div
              className={`max-w-4xl mx-auto text-center transition-all duration-700 ${introVisible
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
                  OUR STANDARDS
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                Safety, Respect &{" "}
                <span className="relative inline-block" style={{ color: "#006F61" }}>
                  Excellence
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
                At North Karakoram, we believe that the summit is only half the journey;
                <span className="font-semibold text-gray-800"> returning home safely is the other half</span>.
                Mountaineering in the high ranges requires discipline, respect, and strict adherence to safety protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Key Principles Section */}
        <section
          ref={principlesRef}
          className="py-12 md:py-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #006F61 0%, #005249 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {keyPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className={`text-center group transition-all duration-700 ${principlesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: principlesVisible
                      ? `${200 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-md lg:text-xl font-bold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-white/70 lg:text-sm font-medium">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section
          ref={rulesRef}
          className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-40 right-20 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
            />
            <div
              className="absolute bottom-40 left-20 w-80 h-80 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.02)" }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${rulesVisible
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
                  ESSENTIAL GUIDELINES
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                Rules Every <span style={{ color: "#006F61" }}>Climber</span> Must Follow
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                These guidelines ensure the safety and success of every expedition member
              </p>
            </div>

            {/* Rules Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {sections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <Card
                    key={idx}
                    className={`group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-gray-100 overflow-hidden ${rulesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: rulesVisible
                        ? `${200 + idx * 100}ms`
                        : "0ms",
                    }}
                  >
                    <CardContent className="p-0">
                      {/* Card Header */}
                      <div
                        className="p-6 border-b border-gray-100"
                        style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="hidden md:flex w-14 h-14 rounded-2xl items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                          >
                            <Icon className="w-7 h-7" style={{ color: "#006F61" }} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                                style={{ backgroundColor: "#006F61" }}
                              >
                                {section.badge}
                              </span>
                            </div>
                            <h3 className="font-heading font-bold text-xl text-gray-900">
                              {section.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">{section.content}</div>

                      {/* Bottom Accent */}
                      <div
                        className="h-1 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                        style={{ backgroundColor: "#006F61" }}
                      />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Important Notice Section */}
        <section className="py-16 bg-amber-50 border-y border-amber-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                    Important Notice
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These rules are not suggestions—they are mandatory requirements for participation in any North Karakoram expedition. Failure to comply with these guidelines may result in removal from the expedition without refund, as the safety of all participants is our highest priority.
                  </p>
                  <p className="text-gray-600 text-sm">
                    By joining our expedition, you acknowledge that you have read, understood, and agree to follow all safety rules and guidelines.
                  </p>
                </div>
              </div>
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
                Ready for Your Adventure?
              </h2>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                Now that you understand our safety standards, explore our expeditions and find the perfect adventure that matches your skill level and aspirations.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/expedition">
                  <Button
                    size="lg"
                    className="group w-full md:w-fit sm:w-auto text-lg px-8 py-6 h-auto bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    Explore Expeditions
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-fit sm:w-auto text-lg px-8 py-6 h-auto border-2 border-white/50 text-white bg-transparent hover:bg-white/10 font-semibold transition-all duration-300 hover:-translate-y-1"
                  >
                    Contact Our Team
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
