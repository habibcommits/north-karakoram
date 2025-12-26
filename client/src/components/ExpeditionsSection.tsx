import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Mountain,
  ChevronRight
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
    icon: "🏔️",
    badge: "Elite",
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
    icon: "⛰️",
    badge: "Advanced",
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
    icon: "🗻",
    badge: "Starter",
  },
];

const difficultyColors: Record<string, string> = {
  "Extreme": "bg-[#006F61]/20 text-[#006F61] border border-[#006F61]/30",
  "Very Hard": "bg-[#006F61]/15 text-[#006F61] border border-[#006F61]/25",
  "Hard": "bg-[#006F61]/10 text-[#006F61] border border-[#006F61]/20",
  "Moderate": "bg-[#006F61]/5 text-[#006F61] border border-[#006F61]/15",
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
      className="relative py-20 md:py-28 lg:py-32 bg-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/50" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006F61' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient blobs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#006F61]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#006F61]/3 blur-3xl" />

        {/* Decorative circles */}
        <div className="absolute top-32 right-10 w-64 h-64 rounded-full border border-[#006F61]/10 hidden lg:block" />
        <div className="absolute top-48 right-24 w-48 h-48 rounded-full border border-[#006F61]/5 hidden lg:block" />
        <div className="absolute bottom-32 left-10 w-80 h-80 rounded-full border border-[#006F61]/10 hidden lg:block" />

        {/* Decorative dots pattern */}
        <div className="absolute top-40 right-10 hidden xl:block">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#006F61]/10"
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-40 left-20 hidden xl:block">
          <div className="grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#006F61]/10"
              />
            ))}
          </div>
        </div>

        {/* Decorative lines */}
        <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-[#006F61]/20 to-transparent hidden lg:block" />
        <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-[#006F61]/20 to-transparent hidden lg:block" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
            bg-[#006F61]/10 border border-[#006F61]/20">
            <Mountain className="w-4 h-4 text-[#006F61]" />
            <span className="text-sm font-semibold tracking-wide text-[#006F61]">
              EXPEDITIONS
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Guided Expeditions to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#006F61]">Legendary Peaks</span>
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            North Karakoram offers professional mountaineering expeditions
            across the Karakoram and Himalayan ranges. From challenging
            6000-meter summits to world-renowned peaks like K2, our experienced
            guides ensure safe, expertly planned adventures.
          </p>
        </div>

        {/* Expedition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expeditionCategories.map((category, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={category.title}
                className={`group relative transition-all duration-700
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative h-full bg-white rounded-2xl overflow-hidden
                    border-2 transition-all duration-500
                    ${isHovered
                      ? 'border-[#006F61] shadow-2xl shadow-[#006F61]/15 -translate-y-2'
                      : 'border-gray-100 shadow-lg shadow-gray-200/50 hover:border-[#006F61]/30'
                    }`}
                >
                  {/* Header */}
                  <div
                    className={`relative h-36 p-6 overflow-hidden transition-colors duration-500
                      ${isHovered ? 'bg-[#006F61]' : 'bg-gray-50'}`}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2
                        ${isHovered ? 'bg-white' : 'bg-[#006F61]'}`} />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                        transition-colors duration-300
                        ${isHovered
                          ? 'bg-white/20 text-white'
                          : 'bg-[#006F61] text-white'
                        }`}>
                        {category.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`hidden md:block absolute bottom-4 right-4 text-4xl transition-opacity duration-300
                      ${isHovered ? 'opacity-30' : 'opacity-20'}`}>
                      {category.icon}
                    </div>

                    {/* Title content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className={`w-5 h-5 transition-colors duration-300
                          ${isHovered ? 'text-white/80' : 'text-[#006F61]'}`} />
                        <span className={`text-sm font-medium transition-colors duration-300
                          ${isHovered ? 'text-white/80' : 'text-[#006F61]'}`}>
                          {category.subtitle}
                        </span>
                      </div>
                      <h3 className={`text-2xl font-bold tracking-wide transition-colors duration-300
                        ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Peaks List */}
                    <div className="space-y-3 mb-6">
                      {category.peaks.map((peak) => (
                        <div
                          key={peak.name}
                          className={`flex items-center justify-between p-3 rounded-xl
                            transition-colors duration-300
                            ${isHovered ? 'bg-[#006F61]/5' : 'bg-gray-50'}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full flex-shrink-0 bg-[#006F61]" />
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
                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${difficultyColors[peak.difficulty]}`}
                          >
                            {peak.difficulty}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link href="/expedition" className="block">
                      <Button
                        className={`w-full group/btn font-semibold rounded-xl py-5 h-auto
                          transition-all duration-300
                          ${isHovered
                            ? 'bg-[#006F61] hover:bg-[#005a4d] text-white shadow-lg shadow-[#006F61]/30'
                            : 'bg-white border-2 border-[#006F61] text-[#006F61] hover:bg-[#006F61] hover:text-white'
                          }`}
                      >
                        <span>Explore Expeditions</span>
                        <ChevronRight
                          className="w-4 h-4 ml-2 transition-transform
                          group-hover/btn:translate-x-1"
                        />
                      </Button>
                    </Link>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500
                      ${isHovered ? 'bg-[#006F61]' : 'bg-transparent'}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        {/* <div
          className={`mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12
            transition-all duration-700 delay-300
            ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {[
            { value: "15+", label: "Peak Expeditions" },
            { value: "98%", label: "Summit Success" },
            { value: "500+", label: "Climbers Guided" },
            { value: "25+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#006F61]">
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* Bottom CTA Section */}
        <div
          className={`mt-12 md:mt-16 transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* CTA Card */}
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center
            bg-gradient-to-br from-gray-50 to-white border-2 border-[#006F61]/20">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#006F61] blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#006F61] blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-20 h-20 border border-[#006F61]/10 rounded-full hidden md:block" />
            <div className="absolute bottom-6 right-6 w-32 h-32 border border-[#006F61]/10 rounded-full hidden md:block" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006F61]/10 mb-6">
                <Sparkles className="w-4 h-4 text-[#006F61]" />
                <span className="text-[#006F61] text-sm font-medium">
                  Start Your Journey
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                Ready to Conquer Your{" "}
                <span className="text-[#006F61]">Peak</span>?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Explore all our expeditions and find the perfect challenge for
                you. Our expert mountaineering team is ready to guide you to the
                summit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/expedition">
                  <Button
                    size="lg"
                    className="w-full sm:w-fit group bg-[#006F61] hover:bg-[#005a4d] font-semibold
                      px-8 py-6 h-auto rounded-xl shadow-lg transition-all duration-300
                      hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#006F61]/30"
                  >
                    <Mountain className="w-5 h-5 mr-2" />
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
                    className="w-full sm:w-fit group font-semibold px-8 py-6 h-auto rounded-xl
                      border-2 border-[#006F61] text-[#006F61] bg-white
                      hover:bg-[#006F61] hover:text-white
                      transition-all duration-300 hover:-translate-y-0.5"
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
