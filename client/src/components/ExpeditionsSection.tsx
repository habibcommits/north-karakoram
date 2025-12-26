import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const expeditionCategories = [
  {
    title: "8000M PEAKS",
    subtitle: "The Ultimate Challenge",
    description: "Conquer the world's highest mountains with expert guidance and comprehensive support.",
    peaks: [
      { name: "K2", elevation: "8611m", difficulty: "Extreme" },
      { name: "Nanga Parbat", elevation: "8126m", difficulty: "Extreme" },
      { name: "Gasherbrum II", elevation: "8034m", difficulty: "Very Hard" },
    ],
    gradient: "from-rose-500 to-orange-500",
    accentColor: "#ef4444",
    icon: "🏔️",
  },
  {
    title: "7000M PEAKS",
    subtitle: "High Altitude Excellence",
    description: "Experience breathtaking summits with challenging yet achievable expeditions.",
    peaks: [
      { name: "Gasherbrum III", elevation: "7952m", difficulty: "Hard" },
      { name: "Masherbrum", elevation: "7806m", difficulty: "Hard" },
      { name: "Spantik", elevation: "7027m", difficulty: "Moderate" },
    ],
    gradient: "from-amber-500 to-yellow-500",
    accentColor: "#f59e0b",
    icon: "⛰️",
  },
  {
    title: "6000M PEAKS",
    subtitle: "Gateway to Greatness",
    description: "Perfect introduction to high-altitude mountaineering with stunning rewards.",
    peaks: [
      { name: "Laila Peak", elevation: "6096m", difficulty: "Moderate" },
      { name: "Pastore Peak", elevation: "6210m", difficulty: "Moderate" },
      { name: "Khurdopin", elevation: "6400m", difficulty: "Moderate" },
    ],
    gradient: "from-emerald-500 to-teal-500",
    accentColor: "#10b981",
    icon: "🗻",
  },
];

const difficultyColors: Record<string, string> = {
  "Extreme": "bg-red-100 text-red-700",
  "Very Hard": "bg-orange-100 text-orange-700",
  "Hard": "bg-amber-100 text-amber-700",
  "Moderate": "bg-emerald-100 text-emerald-700",
};

export function ExpeditionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ backgroundColor: "#006F61" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.02]"
          style={{ backgroundColor: "#006F61" }}
        />

        {/* Decorative dots pattern */}
        <div className="absolute top-40 right-10 hidden xl:block">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              />
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div
          className="absolute top-1/3 left-0 w-32 h-px hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,111,97,0.2) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
          >
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "#006F61" }}
            >
              EXPEDITIONS
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Guided Expeditions to{" "}
            <span className="relative inline-block" style={{ color: "#006F61" }}>
              Legendary Peaks
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            North Karakoram offers professional mountaineering expeditions
            across the Karakoram and Himalayan ranges. From challenging
            6000-meter summits to world-renowned peaks like K2, our experienced
            guides ensure safe, expertly planned adventures.
          </p>
        </div>

        {/* Expedition Cards Grid - Equal Height with Aligned Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expeditionCategories.map((category, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={category.title}
                className={`group relative h-full transition-all duration-700
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container - Full height flex column */}
                <div
                  className="relative h-full flex flex-col bg-white rounded-2xl overflow-hidden
                    shadow-sm hover:shadow-2xl hover:shadow-black/10
                    border border-gray-100 hover:border-gray-200
                    transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Header with gradient - Fixed height, no shrink */}
                  <div
                    className={`relative h-32 flex-shrink-0 bg-gradient-to-r ${category.gradient} p-6 overflow-hidden`}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white blur-3xl -translate-y-1/2 translate-x-1/2" />
                    </div>

                    {/* Icon */}
                    <div className="hidden lg:block absolute top-4 right-4 text-4xl opacity-30 group-hover:opacity-50 transition-opacity">
                      {category.icon}
                    </div>

                    {/* Title content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-white/80" />
                        <span className="text-white/80 text-sm font-medium">
                          {category.subtitle}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content - Flex grow to fill space, flex column for internal layout */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Peaks List - Flex grow to push button down */}
                    <div className="space-y-3 flex-1">
                      {category.peaks.map((peak) => (
                        <div
                          key={peak.name}
                          className="flex flex-col xl:flex-row items-start lg:items-center gap-2 lg:gap-0 justify-between p-3 rounded-xl
                            bg-gray-50 group-hover:bg-gray-100/80 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: "#006F61" }}
                            />
                            <div>
                              <span className="font-semibold text-gray-900">
                                {peak.name}
                              </span>
                              <span className="text-gray-500 text-sm ml-2">
                                {peak.elevation}
                              </span>
                            </div>
                          </div>
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${difficultyColors[peak.difficulty]}`}
                          >
                            {peak.difficulty}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button - Always at bottom with mt-auto */}
                    <div className="mt-6 pt-0">
                      <Link href="/expedition" className="block">
                        <Button
                          className="w-full group/btn font-semibold rounded-xl py-5 h-auto
                            transition-all duration-300 text-white"
                          style={{
                            backgroundColor: "#006F61",
                            boxShadow: isHovered
                              ? "0 10px 30px -10px rgba(0, 111, 97, 0.5)"
                              : "none",
                          }}
                        >
                          <span>Explore Expeditions</span>
                          <ArrowRight
                            className="w-4 h-4 ml-2 transition-transform
                            group-hover/btn:translate-x-1"
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300
                      origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: category.accentColor }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats & CTA */}
        <div
          className={`mt-16 md:mt-20 transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* CTA Card */}
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center"
            style={{ backgroundColor: "#006F61" }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-20 h-20 border border-white/10 rounded-full hidden md:block" />
            <div className="absolute bottom-6 right-6 w-32 h-32 border border-white/10 rounded-full hidden md:block" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white/90 text-sm font-medium">
                  Start Your Journey
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                Ready to Conquer Your Peak?
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Explore all our expeditions and find the perfect challenge for
                you. Our expert mountaineering team is ready to guide you to the
                summit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/expedition">
                  <Button
                    size="lg"
                    className="w-full md:w-fit group bg-white hover:bg-gray-100 font-semibold
                      px-8 py-6 h-auto rounded-xl shadow-xl transition-all duration-300
                      hover:-translate-y-0.5"
                    style={{ color: "#006F61" }}
                  >
                    <span>View All Expeditions</span>
                    <ArrowRight
                      className="w-5 h-5 ml-2 transition-transform
                      group-hover:translate-x-1"
                    />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-fit group font-semibold px-8 py-6 h-auto rounded-xl
                      border-2 border-white/30 text-white bg-white/10
                      hover:bg-white hover:border-white transition-all duration-300
                      hover:-translate-y-0.5 hover:text-[#006F61]"
                  >
                    <span>Plan Custom Expedition</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
