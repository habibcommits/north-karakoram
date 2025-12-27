import type { ExpeditionData } from "@/lib/expeditionData";
import { tours as expeditions } from "@/lib/tourData";
import { SITE_CONFIG } from "@/seo/config";
import { usePageSEO } from "@/seo/hooks/useSeo";
import { SEOHead } from "@/seo/SEOHead";
import { CollectionSchema } from "@/seo/StructuredData";
import {
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Clock,
  Filter,
  MapPin,
  Mountain,
  Search,
  Sparkles,
  TrendingUp,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

// Peak categories based on altitude
const peakCategories = [
  { id: "all", label: "All Peaks", range: null },
  { id: "6000m", label: "6000m+", range: [6000, 7000], badge: "Elite" },
  { id: "5000m", label: "5000m+", range: [5000, 6000], badge: "Advanced" },
  { id: "4000m", label: "4000m+", range: [4000, 5000], badge: "Challenging" },
];

const difficulties = ["All Levels", "Moderate", "Challenging", "Difficult", "Extreme"];
const seasons = ["All Seasons", "Summer", "Winter", "Spring", "Autumn"];

// Helper to extract numeric altitude
const getAltitudeNumber = (altitude: string): number => {
  const match = altitude.match(/[\d,]+/);
  if (match) {
    return parseInt(match[0].replace(',', ''));
  }
  return 0;
};

// Helper to get peak category
const getPeakCategory = (altitude: string): string => {
  const alt = getAltitudeNumber(altitude);
  if (alt >= 6000) return "6000m+";
  if (alt >= 5000) return "5000m+";
  if (alt >= 4000) return "4000m+";
  return "Below 4000m";
};

// Helper to get category badge color
const getCategoryColor = (altitude: string): string => {
  const alt = getAltitudeNumber(altitude);
  if (alt >= 6000) return "bg-gradient-to-r from-amber-500 to-orange-500";
  if (alt >= 5000) return "bg-gradient-to-r from-purple-500 to-indigo-500";
  if (alt >= 4000) return "bg-gradient-to-r from-emerald-500 to-teal-500";
  return "bg-gray-500";
};

function ExpeditionCard({ expedition }: { expedition: ExpeditionData }) {
  const peakCategory = getPeakCategory(expedition.altitude);
  const categoryColor = getCategoryColor(expedition.altitude);

  return (
    <Link href={`/tour/${expedition.slug}`}>
      <div className="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
        {/* Image max-w-7xl */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={expedition.image}
            alt={expedition.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start z-10">
            <div className="flex flex-col gap-2">
              {/* Peak Category Badge */}
              <span className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-white text-[10px] sm:text-xs font-bold shadow-lg ${categoryColor}`}>
                {peakCategory}
              </span>
              {/* Difficulty Badge */}
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-medium border border-white/30">
                {expedition.difficulty}
              </span>
            </div>

            {/* Altitude Badge */}
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#006F61]" />
              <span className="text-white text-xs sm:text-sm font-bold">{expedition.altitude}</span>
            </div>
          </div>

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm mb-2">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">{expedition.location}</span>
            </div>
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-white leading-tight line-clamp-2 group-hover:text-[#006F61] transition-colors duration-300">
              {expedition.name}
            </h3>
          </div>

          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all duration-300 z-20">
            <ArrowUpRight className="w-5 h-5 text-[#006F61]" />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
            {expedition.description}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-gray-50 hover:bg-[#006F61]/5 transition-colors">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#006F61] mb-1" />
              <span className="text-[10px] sm:text-xs text-gray-500">Duration</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">{expedition.duration}</span>
            </div>
            {/* <div className="flex flex-col items-center p-2 sm:p-3 rounded-xl bg-gray-50 hover:bg-[#006F61]/5 transition-colors">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#006F61] mb-1" />
              <span className="text-[10px] sm:text-xs text-gray-500">Season</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">{expedition.bestSeason || "N/A"}</span>
            </div> */}
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            {/* <div>
              <span className="text-xs text-gray-500">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-bold text-[#006F61]">
                  ${expedition.price.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500">/person</span>
              </div>
            </div> */}
            <button className="w-full flex justify-center items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#006F61] hover:bg-[#005a4d] text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#006F61]/30 group/btn">
              <span>View Details</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#006F61]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </Link>
  );
}

export default function Tours() {
  const seo = usePageSEO('tours');

  // Generate schema items from data
  const schemaItems = expeditions?.map((exp) => ({
    name: exp.name,
    url: `${SITE_CONFIG.url}/tour/${exp.slug}`,
    image: exp.image,
  })) || [];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeakCategory, setSelectedPeakCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");
  const [selectedSeason, setSelectedSeason] = useState("All Seasons");
  const [showFilters, setShowFilters] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredExpeditions = expeditions.filter((exp) => {
    const matchesSearch = exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.location.toLowerCase().includes(searchQuery.toLowerCase());

    const altNumber = getAltitudeNumber(exp.altitude);
    let matchesPeak = selectedPeakCategory === "all";
    if (selectedPeakCategory === "6000m") matchesPeak = altNumber >= 6000;
    if (selectedPeakCategory === "5000m") matchesPeak = altNumber >= 5000 && altNumber < 6000;
    if (selectedPeakCategory === "4000m") matchesPeak = altNumber >= 4000 && altNumber < 5000;

    const matchesDifficulty = selectedDifficulty === "All Levels" || exp.difficulty === selectedDifficulty;
    const matchesSeason = selectedSeason === "All Seasons" ||
      (exp.bestSeason && exp.bestSeason.toLowerCase().includes(selectedSeason.toLowerCase()));

    return matchesSearch && matchesPeak && matchesDifficulty && matchesSeason;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedPeakCategory("all");
    setSelectedDifficulty("All Levels");
    setSelectedSeason("All Seasons");
  };

  const hasActiveFilters = searchQuery ||
    selectedPeakCategory !== "all" ||
    selectedDifficulty !== "All Levels" ||
    selectedSeason !== "All Seasons";

  // Count expeditions by category
  const counts = {
    all: expeditions.length,
    "6000m": expeditions.filter(e => getAltitudeNumber(e.altitude) >= 6000).length,
    "5000m": expeditions.filter(e => {
      const alt = getAltitudeNumber(e.altitude);
      return alt >= 5000 && alt < 6000;
    }).length,
    "4000m": expeditions.filter(e => {
      const alt = getAltitudeNumber(e.altitude);
      return alt >= 4000 && alt < 5000;
    }).length,
  };


  return (
    <>
      {seo && <SEOHead seo={seo} path="/tour" />}
      <CollectionSchema
        name="Mountaineering Expeditions in Pakistan"
        description="Complete list of our high-altitude expeditions to Pakistan's 8000m peaks and beyond"
        url={`${SITE_CONFIG.url}/tour`}
        items={schemaItems}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[75vh] md:h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full animate-ken-burns">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
                alt="Mountain Tours"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="absolute top-20 right-10 lg:right-20 w-20 lg:w-32 h-20 lg:h-32 border border-white/10 rounded-full hidden md:block" />
            <div className="absolute top-24 right-14 lg:right-24 w-14 lg:w-24 h-14 lg:h-24 border border-[#006F61]/30 rounded-full hidden md:block" />

            {/* Side decoration */}
            <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#006F61] shadow-lg shadow-[#006F61]/50" />
              <div className="w-px h-16 bg-gradient-to-b from-white/20 via-white/40 to-transparent" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="h-full flex flex-col justify-center max-w-4xl">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006F61] text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg w-fit animate-fade-in"
              >
                <Sparkles className="w-4 h-4" />
                <span className="tracking-wide">Scenic Adventures</span>
              </div>

              {/* Title */}
              <h1
                className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-2 sm:mb-3 leading-[1.1] tracking-tight animate-fade-in-up"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
              >
                Discover Valley Treasures
              </h1>

              {/* Subtitle with background */}
              <div className="inline-block mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h2
                  className="w-fit font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight px-3 sm:px-4 py-1.5 sm:py-2 -ml-3 sm:-ml-4 rounded-lg bg-gradient-to-r from-[#006F61] to-[#006F61]/80 text-white shadow-xl border-l-4 border-white/40"
                >
                  Hunza • Skardu • Deosai
                </h2>
              </div>

              {/* Description */}
              <p
                className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-6 sm:mb-8 animate-fade-in-up"
                style={{ animationDelay: '0.2s', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
              >
                Professional tours to Deosai Plateau, Astore Valley, Khunjerab Pass and more.
                Challenge yourself with world-class mountaineering adventures.
              </p>

              {/* Quick Stats */}
              <div
                className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                {peakCategories.slice(1).map((cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedPeakCategory(cat.id);
                      window.scrollTo({ top: window.innerHeight * 0.65, behavior: 'smooth' });
                    }}
                  >
                    <Mountain className="w-4 h-4 text-[#006F61]" />
                    <span className="text-white text-xs sm:text-sm font-medium">{cat.label}</span>
                    <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] sm:text-xs font-bold">
                      {counts[cat.id as keyof typeof counts]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />
        </section>

        {/* Filter Section */}
        <section className={`sticky top-0 z-40 bg-white/95 backdrop-blur-lg transition-all duration-300 ${isScrolled ? 'shadow-lg border-b border-gray-100' : 'shadow-sm'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            {/* Peak Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {peakCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedPeakCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${selectedPeakCategory === cat.id
                    ? 'bg-[#006F61] text-white shadow-lg shadow-[#006F61]/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${selectedPeakCategory === cat.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-500'
                    }`}>
                    {counts[cat.id as keyof typeof counts]}
                  </span>
                </button>
              ))}

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`md:hidden flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ml-auto ${showFilters
                  ? 'bg-[#006F61] text-white'
                  : 'bg-gray-100 text-gray-600'
                  }`}
              >
                {showFilters ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
                <span>Filters</span>
              </button>
            </div>

            {/* Search & Filters Row */}
            <div className={`${showFilters ? 'block' : 'hidden md:block'} space-y-3`}>
              <div className="flex flex-col md:flex-row gap-3">
                {/* Search */}
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search tours by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006F61] focus:outline-none focus:ring-2 focus:ring-[#006F61]/20 transition-all text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Dropdowns */}
                <div className="flex gap-3">
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="flex-1 md:flex-none px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006F61] focus:outline-none transition-colors text-gray-700 bg-white cursor-pointer min-w-[140px]"
                  >
                    {difficulties.map((diff) => (
                      <option key={diff} value={diff}>{diff}</option>
                    ))}
                  </select>

                  <select
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                    className="flex-1 md:flex-none px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006F61] focus:outline-none transition-colors text-gray-700 bg-white cursor-pointer min-w-[140px]"
                  >
                    {seasons.map((season) => (
                      <option key={season} value={season}>{season}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="flex items-center gap-2 flex-wrap pt-2">
                  <span className="text-sm text-gray-500">Active:</span>
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery("")} className="ml-1 hover:text-[#005a4d]">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedPeakCategory !== "all" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium w-fit">
                      {peakCategories.find(c => c.id === selectedPeakCategory)?.label}
                      <button onClick={() => setSelectedPeakCategory("all")} className="ml-1 hover:text-[#005a4d]">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedDifficulty !== "All Levels" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                      {selectedDifficulty}
                      <button onClick={() => setSelectedDifficulty("All Levels")} className="ml-1 hover:text-[#005a4d]">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedSeason !== "All Seasons" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                      {selectedSeason}
                      <button onClick={() => setSelectedSeason("All Seasons")} className="ml-1 hover:text-[#005a4d]">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium transition-colors"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Expeditions Grid */}
        <section className="py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
              <div>
                <p className="text-[#006F61] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2">
                  {selectedPeakCategory === "all" ? "All Categories" : peakCategories.find(c => c.id === selectedPeakCategory)?.label}
                </p>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900">
                  {selectedPeakCategory === "6000m" && "Six-Thousander Tours"}
                  {selectedPeakCategory === "5000m" && "Five-Thousander Tours"}
                  {selectedPeakCategory === "4000m" && "Four-Thousander Tours"}
                  {selectedPeakCategory === "all" && "All Peak Tours"}
                </h2>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                <span className="font-semibold text-gray-800">{filteredExpeditions.length}</span> {filteredExpeditions.length === 1 ? 'tour' : 'tours'} available
              </p>
            </div>

            {/* No Results */}
            {filteredExpeditions.length === 0 ? (
              <div className="text-center py-16 sm:py-20 lg:py-24">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <Mountain className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">No tours found</h3>
                <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-md mx-auto">
                  We couldn't find any tours matching your current filters. Try adjusting your search criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#006F61] hover:bg-[#005a4d] text-white font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                {filteredExpeditions.map((expedition) => (
                  <ExpeditionCard key={expedition.id} expedition={expedition} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#006F61] to-[#004d44] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Ready to Conquer the Giants?
              </h2>
              <p className="text-white/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
                Join our expert-led tours to the world's most challenging peaks. From K2 to Broad Peak, we'll guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#006F61] font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    Plan Your Tour
                  </button>
                </Link>
                <Link href="/about">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300">
                    Learn About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-out infinite alternate;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </div>
    </>
  );
}
