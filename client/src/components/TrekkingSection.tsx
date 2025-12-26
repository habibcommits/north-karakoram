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

// Category configuration with unified green theme
const categoryConfig = {
  "all": {
    label: "All Treks",
    color: "#006F61",
    bgColor: "bg-[#006F61]",
    lightBg: "bg-[#006F61]/5",
    textColor: "text-[#006F61]"
  },
  "6000m": {
    label: "6000m+",
    color: "#006F61",
    bgColor: "bg-[#006F61]",
    lightBg: "bg-[#006F61]/5",
    textColor: "text-[#006F61]",
    badge: "Elite"
  },
  "5000m": {
    label: "5000m+",
    color: "#006F61",
    bgColor: "bg-[#006F61]/90",
    lightBg: "bg-[#006F61]/5",
    textColor: "text-[#006F61]",
    badge: "Advanced"
  },
  "4000m": {
    label: "4000m+",
    color: "#006F61",
    bgColor: "bg-[#006F61]/80",
    lightBg: "bg-[#006F61]/5",
    textColor: "text-[#006F61]",
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
  const [isHovered, setIsHovered] = useState(false);
  const peakCategory = getPeakCategory(trek.altitude);

  return (
    <Link href={`/trekking/${trek.slug}`}>
      <div
        className={`group relative h-full transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative h-full bg-white rounded-2xl lg:rounded-3xl overflow-hidden
          border-2 transition-all duration-500
          ${isHovered
            ? 'border-[#006F61] shadow-2xl shadow-[#006F61]/15 -translate-y-2'
            : 'border-gray-100 shadow-lg shadow-gray-200/50 hover:border-[#006F61]/30'
          }`}>

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
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-white
                  text-[10px] sm:text-xs font-bold uppercase tracking-wide
                  shadow-lg backdrop-blur-sm bg-[#006F61]">
                  {categoryConfig[peakCategory].label}
                </span>
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full
                  bg-white/95 backdrop-blur-md text-[#006F61] text-[10px] sm:text-xs
                  font-semibold border border-white/30 shadow-sm">
                  {trek.difficulty}
                </span>
              </div>

              {/* Altitude Badge */}
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2
                rounded-xl bg-white/95 backdrop-blur-md border border-white/30 shadow-sm">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#006F61]" />
                <span className="text-gray-800 text-xs sm:text-sm font-bold">
                  {trek.altitude}
                </span>
              </div>
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm mb-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{trek.location}</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-white
                leading-tight line-clamp-2 transition-colors duration-300">
                {trek.name}
              </h3>
            </div>

            {/* Hover Arrow */}
            <div className={`absolute top-4 right-4 w-10 h-10 rounded-full
              flex items-center justify-center transition-all duration-300 z-20
              ${isHovered
                ? 'opacity-100 bg-[#006F61]'
                : 'opacity-0 bg-white'
              }`}>
              <ArrowUpRight className={`w-5 h-5 ${isHovered ? 'text-white' : 'text-[#006F61]'}`} />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 lg:p-6">
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
              {trek.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-5">
              <div className={`flex flex-col items-center p-2.5 sm:p-3 rounded-xl
                transition-colors duration-300
                ${isHovered ? 'bg-[#006F61]/10' : 'bg-gray-50'}`}>
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#006F61] mb-1" />
                <span className="text-[10px] sm:text-xs text-gray-500">Duration</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                  {trek.duration}
                </span>
              </div>
              {/* <div className={`flex flex-col items-center p-2.5 sm:p-3 rounded-xl
                transition-colors duration-300
                ${isHovered ? 'bg-[#006F61]/10' : 'bg-gray-50'}`}>
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#006F61] mb-1" />
                <span className="text-[10px] sm:text-xs text-gray-500">Season</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                  {trek.bestSeason || "N/A"}
                </span>
              </div> */}
            </div>

            {/* CTA Button */}
            <Button
              className={`w-full group/btn font-semibold rounded-xl py-5 h-auto
                transition-all duration-300
                ${isHovered
                  ? 'bg-[#006F61] hover:bg-[#005a4d] text-white shadow-lg shadow-[#006F61]/30'
                  : 'bg-white border-2 border-[#006F61] text-[#006F61] hover:bg-[#006F61] hover:text-white'
                }`}
            >
              <span>View Trek Details</span>
              <ChevronRight className="w-4 h-4 ml-2 transition-transform
                group-hover/btn:translate-x-1" />
            </Button>
          </div>

          {/* Bottom accent line */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500
              ${isHovered ? 'bg-[#006F61]' : 'bg-transparent'}`}
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
          if (activeFilter === "6000m") return alt >= 6000;
          if (activeFilter === "5000m") return alt >= 5000 && alt < 6000;
          if (activeFilter === "4000m") return alt >= 4000 && alt < 5000;
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
      className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-white overflow-hidden"
      data-testid="section-trekking"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/50" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23006F61' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient blobs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#006F61]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#006F61]/3 blur-3xl" />

        {/* Decorative circles */}
        <div className="absolute top-32 right-10 w-64 h-64 rounded-full border border-[#006F61]/10 hidden lg:block" />
        <div className="absolute top-48 right-24 w-48 h-48 rounded-full border border-[#006F61]/5 hidden lg:block" />
        <div className="absolute bottom-32 left-10 w-80 h-80 rounded-full border border-[#006F61]/10 hidden lg:block" />

        {/* Floating accent dots */}
        <div className="absolute top-20 right-20 hidden xl:block">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#006F61]/10" />
            ))}
          </div>
        </div>

        <div className="absolute bottom-40 left-20 hidden xl:block">
          <div className="grid grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#006F61]/10" />
            ))}
          </div>
        </div>

        {/* Accent lines */}
        <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-[#006F61]/20 to-transparent hidden lg:block" />
        <div className="absolute top-2/3 right-0 w-32 h-px bg-gradient-to-l from-[#006F61]/20 to-transparent hidden lg:block" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-[#006F61]/10 border border-[#006F61]/20
            text-[#006F61] text-sm font-semibold mb-4 sm:mb-6">
            <Footprints className="w-4 h-4" />
            <span>Explore Pakistan's Trails</span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4">
            Trekking Adventures in{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#006F61]">Pakistan</span>
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0">
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
                  transition-all duration-300 text-sm border-2
                  ${isActive
                    ? 'bg-[#006F61] text-white border-[#006F61] shadow-lg shadow-[#006F61]/20'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#006F61]/50 hover:text-[#006F61] hover:shadow-md'
                  }`}
              >
                <Footprints className={`w-4 h-4 transition-all group-hover:scale-110
                  ${isActive ? 'text-white' : 'text-[#006F61]'}`}
                />
                <span>{configData.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold
                  ${isActive ? 'bg-white/20 text-white' : 'bg-[#006F61]/10 text-[#006F61]'}`}>
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
        {randomizedTrekkings.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full
              bg-[#006F61]/10 flex items-center justify-center">
              <Footprints className="w-8 h-8 sm:w-10 sm:h-10 text-[#006F61]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              No treks available
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Check back soon or explore other categories.
            </p>
            <Button
              onClick={() => setActiveFilter("all")}
              className="bg-[#006F61] hover:bg-[#005a4d] text-white"
            >
              View All Treks
            </Button>
          </div>
        )}

        {/* Stats Section */}
        <div
          className={`mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12
            transition-all duration-700 delay-300
            ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {[
            { value: trekkings.length, label: "Total Treks" },
            { value: "4.9★", label: "Avg Rating" },
            { value: "500+", label: "Happy Trekkers" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#006F61]">
                {typeof item.value === 'number' ? `${item.value}+` : item.value}
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-10 sm:mt-12 transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/trekking">
              <Button
                size="lg"
                className="w-full sm:w-fit group bg-[#006F61] hover:bg-[#005a4d] font-semibold
                  px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl shadow-lg transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#006F61]/30"
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
                  border-2 border-[#006F61] text-[#006F61] bg-white
                  hover:bg-[#006F61] hover:text-white
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
