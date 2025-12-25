import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Clock,
  Mountain,
  ArrowRight,
  Sparkles,
  TrendingUp,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";
import { expeditions } from "@/lib/expeditionData";
import type { ExpeditionData } from "@/lib/expeditionData";

// Peak category configuration with colors
const categoryConfig = {
  "all": {
    label: "All Peaks",
    color: "#006F61",
    bgColor: "bg-[#006F61]",
    lightBg: "bg-emerald-50",
    textColor: "text-[#006F61]"
  },
  "8000m": {
    label: "8000m+",
    color: "#f59e0b",
    bgColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600",
    badge: "Elite"
  },
  "7000m": {
    label: "7000m+",
    color: "#8b5cf6",
    bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
    lightBg: "bg-purple-50",
    textColor: "text-purple-600",
    badge: "Advanced"
  },
  "6000m": {
    label: "6000m+",
    color: "#10b981",
    bgColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
    badge: "Challenging"
  },
};

// Helper to extract numeric altitude
const getAltitudeNumber = (altitude: string): number => {
  const match = altitude.match(/[\d,]+/);
  if (match) {
    return parseInt(match[0].replace(',', ''));
  }
  return 0;
};

// Helper to get peak category
const getPeakCategory = (altitude: string): "8000m" | "7000m" | "6000m" => {
  const alt = getAltitudeNumber(altitude);
  if (alt >= 8000) return "8000m";
  if (alt >= 7000) return "7000m";
  return "6000m";
};

// Expedition Card Component
function ExpeditionCard({ expedition, index, isVisible }: {
  expedition: ExpeditionData;
  index: number;
  isVisible: boolean;
}) {
  const peakCategory = getPeakCategory(expedition.altitude);
  const categoryData = categoryConfig[peakCategory];

  return (
    <Link href={`/expedition/${expedition.slug}`}>
      <div
        className={`group relative h-full transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
      >
        <div className="relative h-full bg-white rounded-2xl lg:rounded-3xl overflow-hidden
          shadow-sm hover:shadow-2xl hover:shadow-black/10
          border border-gray-100 hover:border-gray-200
          transition-all duration-500 hover:-translate-y-2">

          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={expedition.image}
              alt={expedition.name}
              className="w-full h-full object-cover transition-transform duration-700
                group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Top badges row */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start">
              {/* Category & Difficulty Badges */}
              <div className="flex flex-col gap-2">
                <span className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-white
                  text-[10px] sm:text-xs font-bold uppercase tracking-wide
                  shadow-lg backdrop-blur-sm ${categoryData.bgColor}`}>
                  {categoryData.label}
                </span>
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full
                  bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs
                  font-medium border border-white/30">
                  {expedition.difficulty}
                </span>
              </div>

              {/* Altitude Badge */}
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2
                rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#006F61]" />
                <span className="text-white text-xs sm:text-sm font-bold">
                  {expedition.altitude}
                </span>
              </div>
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm mb-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{expedition.location}</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-white
                leading-tight line-clamp-2 group-hover:text-[#006F61]
                transition-colors duration-300">
                {expedition.name}
              </h3>
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/0
              flex items-center justify-center opacity-0 group-hover:opacity-100
              group-hover:bg-white transition-all duration-300 z-20">
              <ArrowUpRight className="w-5 h-5 text-[#006F61]" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 lg:p-6">
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
              {expedition.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-5">
              <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-xl
                bg-gray-50 hover:bg-[#006F61]/5 transition-colors">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#006F61] mb-1" />
                <span className="text-[10px] sm:text-xs text-gray-500">Duration</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                  {expedition.duration}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="w-full group/btn font-semibold rounded-xl py-5 h-auto
                bg-[#006F61] hover:bg-[#005a4d] transition-all duration-300
                hover:shadow-lg hover:shadow-[#006F61]/30"
            >
              <span>View Expedition</span>
              <ChevronRight className="w-4 h-4 ml-2 transition-transform
                group-hover/btn:translate-x-1" />
            </Button>
          </div>

          {/* Hover accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300
              origin-left scale-x-0 group-hover:scale-x-100 bg-[#006F61]"
          />
        </div>
      </div>
    </Link>
  );
}

export function SeasonWiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLElement>(null);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array]
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const randomizedExpeditions = useMemo(() => {
    const list =
      activeFilter === "all"
        ? expeditions
        : expeditions.filter(exp => {
          const alt = getAltitudeNumber(exp.altitude);
          if (activeFilter === "8000m") return alt >= 8000;
          if (activeFilter === "7000m") return alt >= 7000 && alt < 8000;
          if (activeFilter === "6000m") return alt >= 6000 && alt < 7000;
          return true;
        });

    return shuffleArray(list).slice(0, 4);
  }, [activeFilter]);


  // Intersection observer for scroll animations
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

  // Filter options
  const filters = ["all", "8000m", "7000m", "6000m"];

  // Filter expeditions based on active filter
  const filteredExpeditions = activeFilter === "all"
    ? expeditions.slice(0, 8) // Show max 8 expeditions
    : expeditions.filter(exp => {
      const altNumber = getAltitudeNumber(exp.altitude);
      if (activeFilter === "8000m") return altNumber >= 8000;
      if (activeFilter === "7000m") return altNumber >= 7000 && altNumber < 8000;
      if (activeFilter === "6000m") return altNumber >= 6000 && altNumber < 7000;
      return true;
    }).slice(0, 8);

  // Count expeditions by category
  const counts = {
    all: expeditions.length,
    "8000m": expeditions.filter(e => getAltitudeNumber(e.altitude) >= 8000).length,
    "7000m": expeditions.filter(e => getAltitudeNumber(e.altitude) >= 7000 && getAltitudeNumber(e.altitude) < 8000).length,
    "6000m": expeditions.filter(e => getAltitudeNumber(e.altitude) >= 6000 && getAltitudeNumber(e.altitude) < 7000).length,
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
      data-testid="section-expeditions"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient blobs */}
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ backgroundColor: '#006F61' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.02]"
          style={{ backgroundColor: '#006F61' }}
        />

        {/* Decorative dots pattern */}
        <div className="absolute top-40 right-10 hidden xl:block">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'rgba(0, 111, 97, 0.1)' }}
              />
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div
          className="absolute top-1/3 left-0 w-32 h-px hidden lg:block"
          style={{ background: 'linear-gradient(90deg, rgba(0,111,97,0.2) 0%, transparent 100%)' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-6"
            style={{ backgroundColor: 'rgba(0, 111, 97, 0.1)' }}
          >
            <Sparkles className="w-4 h-4" style={{ color: '#006F61' }} />
            <span className="text-sm font-semibold" style={{ color: '#006F61' }}>
              Elite Mountaineering
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4">
            Explore Our{" "}
            <span className="relative inline-block" style={{ color: '#006F61' }}>
              Peak Expeditions
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0">
            Professional expeditions to the world's most challenging peaks. From K2 to Broad Peak,
            experience world-class mountaineering adventures with certified guides.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const configData = categoryConfig[filter as keyof typeof categoryConfig];

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium
                  transition-all duration-300 text-sm
                  ${isActive
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                style={isActive ? {
                  backgroundColor: configData.color,
                  boxShadow: `0 10px 30px -10px ${configData.color}66`
                } : {}}
              >
                <Mountain className={`w-4 h-4 transition-transform group-hover:scale-110
                  ${isActive ? 'text-white' : ''}`}
                  style={!isActive ? { color: configData.color } : {}}
                />
                <span>{configData.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold
                  ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {counts[filter as keyof typeof counts]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Expeditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {randomizedExpeditions.map((expedition, index) => (
            <ExpeditionCard
              key={expedition.id}
              expedition={expedition}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredExpeditions.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0, 111, 97, 0.1)' }}
            >
              <Mountain className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#006F61' }} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              No expeditions available
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Check back soon or explore other peak categories.
            </p>
            <Button
              onClick={() => setActiveFilter("all")}
              style={{ backgroundColor: '#006F61' }}
              className="text-white"
            >
              View All Expeditions
            </Button>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div
          className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/expeditions">
              <Button
                size="lg"
                className="w-full sm:w-fit group bg-[#006F61] hover:bg-[#005a4d] font-semibold
                  px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl shadow-lg transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#006F61]/30"
              >
                <span>Explore All Expeditions</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform
                  group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-fit group font-semibold px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl
                  border-2 border-gray-300 text-gray-700 bg-white
                  hover:bg-[#006F61] hover:border-[#006F61] hover:text-white
                  transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Plan Custom Expedition</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
