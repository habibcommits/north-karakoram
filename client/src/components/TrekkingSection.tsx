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
  ArrowUpRight,
  Footprints,
  Compass
} from "lucide-react";
import { trekkings } from "@/lib/trekkingData";
import type { ExpeditionData } from "@/lib/expeditionData";

// Category configuration with colors
const categoryConfig = {
  "all": {
    label: "All Treks",
    color: "#006F61",
    bgColor: "bg-[#006F61]",
    lightBg: "bg-emerald-50",
    textColor: "text-[#006F61]"
  },
  "6000m": {
    label: "6000m+",
    color: "#f59e0b",
    bgColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600",
    badge: "Elite"
  },
  "5000m": {
    label: "5000m+",
    color: "#8b5cf6",
    bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
    lightBg: "bg-purple-50",
    textColor: "text-purple-600",
    badge: "Advanced"
  },
  "4000m": {
    label: "4000m+",
    color: "#10b981",
    bgColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
    badge: "Moderate"
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
const getPeakCategory = (altitude: string): "6000m" | "5000m" | "4000m" => {
  const alt = getAltitudeNumber(altitude);
  if (alt >= 6000) return "6000m";
  if (alt >= 5000) return "5000m";
  return "4000m";
};

// Trekking Card Component
function TrekkingCard({ trek, index, isVisible }: {
  trek: ExpeditionData;
  index: number;
  isVisible: boolean;
}) {
  const peakCategory = getPeakCategory(trek.altitude);
  const categoryData = categoryConfig[peakCategory];

  return (
    <Link href={`/trekking/${trek.slug}`}>
      <div
        className={`group relative h-full transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
      >
        <div className="relative h-full bg-white rounded-2xl lg:rounded-3xl overflow-hidden
          shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15
          border border-gray-100 hover:border-gray-200
          transition-all duration-500 hover:-translate-y-2">

          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={trek.image}
              alt={trek.name}
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
                  {trek.difficulty}
                </span>
              </div>

              {/* Altitude Badge */}
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2
                rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#006F61]" />
                <span className="text-white text-xs sm:text-sm font-bold">
                  {trek.altitude}
                </span>
              </div>
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm mb-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{trek.location}</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-white
                leading-tight line-clamp-2 group-hover:text-[#006F61]
                transition-colors duration-300">
                {trek.name}
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
              {trek.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5">
              <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-xl
                bg-gray-50 hover:bg-[#006F61]/5 transition-colors">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#006F61] mb-1" />
                <span className="text-[10px] sm:text-xs text-gray-500">Duration</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                  {trek.duration}
                </span>
              </div>
              <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-xl
                bg-gray-50 hover:bg-[#006F61]/5 transition-colors">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#006F61] mb-1" />
                <span className="text-[10px] sm:text-xs text-gray-500">Season</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                  {trek.bestSeason || "N/A"}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="w-full group/btn font-semibold rounded-xl py-5 h-auto
                bg-[#006F61] hover:bg-[#005a4d] transition-all duration-300
                hover:shadow-lg hover:shadow-[#006F61]/30"
            >
              <span>View Trek Details</span>
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

export function TrekkingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLElement>(null);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array]
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const randomizedTrekkings = useMemo(() => {
    const list =
      activeFilter === "all"
        ? trekkings
        : trekkings.filter(trek => {
          const alt = getAltitudeNumber(trek.altitude);
          if (activeFilter === "8000m") return alt >= 8000;
          if (activeFilter === "7000m") return alt >= 7000 && alt < 8000;
          if (activeFilter === "6000m") return alt >= 6000 && alt < 7000;
          return true;
        });

    return shuffleArray(list).slice(0, 6);
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
  const filters = ["all", "6000m", "5000m", "4000m"];

  // Filter trekkings based on active filter
  const filteredTrekkings = activeFilter === "all"
    ? trekkings.slice(0, 6) // Show max 6 treks
    : trekkings.filter(trek => {
      const altNumber = getAltitudeNumber(trek.altitude);
      if (activeFilter === "6000m") return altNumber >= 6000;
      if (activeFilter === "5000m") return altNumber >= 5000 && altNumber < 6000;
      if (activeFilter === "4000m") return altNumber >= 4000 && altNumber < 5000;
      return true;
    }).slice(0, 6);

  // Count trekkings by category
  const counts = {
    all: trekkings.length,
    "6000m": trekkings.filter(e => getAltitudeNumber(e.altitude) >= 6000).length,
    "5000m": trekkings.filter(e => {
      const alt = getAltitudeNumber(e.altitude);
      return alt >= 5000 && alt < 6000;
    }).length,
    "4000m": trekkings.filter(e => {
      const alt = getAltitudeNumber(e.altitude);
      return alt >= 4000 && alt < 5000;
    }).length,
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#006F61' }}
      data-testid="section-trekking"
    >
      {/* Background Pattern & Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#005a4d] via-[#006F61] to-[#007d6e]" />

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Large decorative circles */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-white/5" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/5" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full border border-white/5" />

        {/* Floating accent dots */}
        <div className="absolute top-20 right-20 hidden lg:block">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/10 backdrop-blur-sm border border-white/20
            text-white text-sm font-semibold mb-4 sm:mb-6">
            <Compass className="w-4 h-4" />
            <span>Explore Pakistan's Trails</span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4">
            Trekking Adventures in{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Pakistan</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-white/20 rounded-full transform -rotate-1" />
            </span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0">
            Experience the majestic Karakoram and Himalayas with professionally guided
            trekking adventures. From Concordia to Fairy Meadows, discover iconic trails.
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
                    ? 'bg-white text-gray-900 shadow-lg shadow-black/20'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                  }`}
              >
                <Footprints className={`w-4 h-4 transition-transform group-hover:scale-110`}
                  style={isActive ? { color: configData.color } : {}}
                />
                <span>{configData.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold
                  ${isActive ? 'bg-gray-100 text-gray-600' : 'bg-white/20 text-white'}`}>
                  {counts[filter as keyof typeof counts]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Trekkings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {randomizedTrekkings.map((trek, index) => (
            <TrekkingCard
              key={trek.id}
              trek={trek}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredTrekkings.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full
              bg-white/10 flex items-center justify-center">
              <Footprints className="w-8 h-8 sm:w-10 sm:h-10 text-white/60" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              No treks available
            </h3>
            <p className="text-white/60 mb-6 text-sm sm:text-base">
              Check back soon or explore other categories.
            </p>
            <Button
              onClick={() => setActiveFilter("all")}
              className="bg-white hover:bg-gray-100"
              style={{ color: '#006F61' }}
            >
              View All Treks
            </Button>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div
          className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/trekking">
              <Button
                size="lg"
                className="w-full sm:w-fit group bg-white hover:bg-gray-100 font-semibold
                  px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl shadow-xl transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-2xl"
                style={{ color: '#006F61' }}
              >
                <Footprints className="w-5 h-5 mr-2" />
                <span>Explore All Trekking</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform
                  group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-fit group font-semibold px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl
                  border-2 border-white/80 text-white bg-transparent
                  hover:bg-white hover:text-[#006F61] hover:border-white
                  transition-all duration-300 hover:-translate-y-0.5"
              >
                <Compass className="w-5 h-5 mr-2" />
                <span>Plan Custom Trek</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
