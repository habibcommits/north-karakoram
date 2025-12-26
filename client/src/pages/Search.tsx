import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Mountain,
  MapPin,
  Clock,
  Users,
  X,
  ChevronRight,
  Sparkles,
  TrendingUp,
  SlidersHorizontal,
  Grid3X3,
  List,
  ArrowUpDown,
} from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "wouter";

// Import your data files
import { trekkings as trekkingData } from "@/lib/trekkingData";
import { tours as toursData } from "@/lib/tourData";
import { rockClimbings as rockClimbingData } from "@/lib/rockClimbingData";
import { expeditions as expeditionsData } from "@/lib/expeditionData";

// Types
interface SearchResult {
  id: string;
  name: string;
  slug: string;
  altitude?: string;
  location: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  image: string;
  description: string;
  category: "expedition" | "trekking" | "tour" | "rock-climbing";
  highlights?: string[];
}

const difficultyColors: Record<string, string> = {
  Extreme: "bg-red-100 text-red-700 border border-red-200",
  "Very Hard": "bg-orange-100 text-orange-700 border border-orange-200",
  Hard: "bg-amber-100 text-amber-700 border border-amber-200",
  Moderate: "bg-[#006F61]/10 text-[#006F61] border border-[#006F61]/20",
  "Moderate to Challenging": "bg-yellow-100 text-yellow-700 border border-yellow-200",
  Challenging: "bg-orange-100 text-orange-700 border border-orange-200",
  Easy: "bg-green-100 text-green-700 border border-green-200",
  Beginner: "bg-green-100 text-green-700 border border-green-200",
  Intermediate: "bg-blue-100 text-blue-700 border border-blue-200",
  Advanced: "bg-purple-100 text-purple-700 border border-purple-200",
};

const categoryConfig: Record<
  string,
  { label: string; icon: string; color: string; bgColor: string }
> = {
  expedition: {
    label: "Expedition",
    icon: "🏔️",
    color: "text-[#006F61]",
    bgColor: "bg-[#006F61]/10",
  },
  trekking: {
    label: "Trekking",
    icon: "🥾",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  tour: {
    label: "Tour",
    icon: "🗺️",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  "rock-climbing": {
    label: "Rock Climbing",
    icon: "🧗",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
};

// Helper function to extract days from duration string
const extractDays = (duration: string): number => {
  if (!duration) return 0;
  const match = duration.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

export default function SearchPage() {
  const [isVisible, setIsVisible] = useState(true); // Set to true by default
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("relevance");

  // Get query from URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");
    if (query) {
      setSearchQuery(decodeURIComponent(query));
    }
  }, []);

  // Combine all data sources
  const allData: SearchResult[] = useMemo(() => {
    const expeditions: SearchResult[] = (expeditionsData || []).map(
      (item: any) => ({
        id: item.id || item.slug,
        name: item.name,
        slug: item.slug,
        altitude: item.altitude,
        location: item.location,
        duration: item.duration,
        difficulty: item.difficulty,
        groupSize: item.groupSize,
        image: item.image,
        description: item.description || item.overview,
        highlights: item.highlights,
        category: "expedition" as const,
      })
    );

    const trekking: SearchResult[] = (trekkingData || []).map((item: any) => ({
      id: item.id || item.slug,
      name: item.name,
      slug: item.slug,
      altitude: item.altitude,
      location: item.location,
      duration: item.duration,
      difficulty: item.difficulty,
      groupSize: item.groupSize,
      image: item.image,
      description: item.description || item.overview,
      highlights: item.highlights,
      category: "trekking" as const,
    }));

    const tours: SearchResult[] = (toursData || []).map((item: any) => ({
      id: item.id || item.slug,
      name: item.name,
      slug: item.slug,
      altitude: item.altitude,
      location: item.location,
      duration: item.duration,
      difficulty: item.difficulty,
      groupSize: item.groupSize,
      image: item.image,
      description: item.description || item.overview,
      highlights: item.highlights,
      category: "tour" as const,
    }));

    const rockClimbing: SearchResult[] = (rockClimbingData || []).map(
      (item: any) => ({
        id: item.id || item.slug,
        name: item.name,
        slug: item.slug,
        altitude: item.altitude,
        location: item.location,
        duration: item.duration,
        difficulty: item.difficulty,
        groupSize: item.groupSize,
        image: item.image,
        description: item.description || item.overview,
        highlights: item.highlights,
        category: "rock-climbing" as const,
      })
    );

    return [...expeditions, ...trekking, ...tours, ...rockClimbing];
  }, []);

  // Filter and search logic
  const filteredResults = useMemo(() => {
    let results = [...allData];

    // Search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter(
        (item) =>
          item.name?.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.location?.toLowerCase().includes(query) ||
          item.highlights?.some((h) => h.toLowerCase().includes(query)) ||
          item.category?.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      results = results.filter((item) => item.category === selectedCategory);
    }

    // Difficulty filter
    if (selectedDifficulty !== "all") {
      results = results.filter(
        (item) =>
          item.difficulty?.toLowerCase() === selectedDifficulty.toLowerCase()
      );
    }

    // Duration filter (10 to 80 days range)
    if (selectedDuration !== "all") {
      results = results.filter((item) => {
        const days = extractDays(item.duration);
        switch (selectedDuration) {
          case "10-20":
            return days >= 10 && days <= 20;
          case "21-40":
            return days >= 21 && days <= 40;
          case "41-60":
            return days >= 41 && days <= 60;
          case "61-80":
            return days >= 61 && days <= 80;
          default:
            return true;
        }
      });
    }

    // Sorting
    switch (sortBy) {
      case "name-asc":
        results.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        break;
      case "name-desc":
        results.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
        break;
      case "duration-asc":
        results.sort((a, b) => extractDays(a.duration) - extractDays(b.duration));
        break;
      case "duration-desc":
        results.sort((a, b) => extractDays(b.duration) - extractDays(a.duration));
        break;
      default:
        // relevance - keep original order
        break;
    }

    return results;
  }, [allData, searchQuery, selectedCategory, selectedDifficulty, selectedDuration, sortBy]);

  // Get unique difficulties for filter
  const difficulties = useMemo(() => {
    const unique = [...new Set(allData.map((item) => item.difficulty))].filter(Boolean);
    return unique.sort();
  }, [allData]);

  // Intersection observer for animations
  useEffect(() => {
    setIsVisible(true); // Force visible immediately

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedDifficulty("all");
    setSelectedDuration("all");
    setSortBy("relevance");
  };

  const activeFiltersCount = [
    selectedCategory !== "all",
    selectedDifficulty !== "all",
    selectedDuration !== "all",
  ].filter(Boolean).length;

  const getCategoryLink = (category: string, slug: string) => {
    switch (category) {
      case "expedition":
        return `/expedition/${slug}`;
      case "trekking":
        return `/trekking/${slug}`;
      case "tour":
        return `/tour/${slug}`;
      case "rock-climbing":
        return `/rock-climbing/${slug}`;
      default:
        return `/${slug}`;
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search query
    const url = new URL(window.location.href);
    if (searchQuery.trim()) {
      url.searchParams.set("query", searchQuery.trim());
    } else {
      url.searchParams.delete("query");
    }
    window.history.pushState({}, "", url.toString());
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-8 md:py-16 lg:py-24 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/50" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006F61' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#006F61]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#006F61]/3 blur-3xl" />
        <div className="absolute top-32 right-10 w-64 h-64 rounded-full border border-[#006F61]/10 hidden lg:block" />
        <div className="absolute bottom-32 left-10 w-80 h-80 rounded-full border border-[#006F61]/10 hidden lg:block" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 md:mb-6 bg-[#006F61]/10 border border-[#006F61]/20">
            <Search className="w-4 h-4 text-[#006F61]" />
            <span className="text-sm font-semibold tracking-wide text-[#006F61]">
              SEARCH ADVENTURES
            </span>
          </div>

          <h1 className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl text-gray-900 mb-3 md:mb-4">
            Find Your Perfect{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#006F61]">Adventure</span>
            </span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed px-4">
            Explore our curated collection of expeditions, treks, tours, and
            climbing experiences across the magnificent Karakoram and Himalayan
            ranges.
          </p>
        </div>

        {/* Search Bar */}
        <div
          className={`max-w-4xl mx-auto mb-6 md:mb-8 transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <form onSubmit={handleSearch}>
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 bg-white rounded-2xl border-2 border-gray-200 shadow-lg shadow-gray-200/50 focus-within:border-[#006F61] focus-within:shadow-[#006F61]/10 transition-all duration-300 p-3 sm:p-0">
              <div className="flex items-center flex-1">
                <Search className="w-5 h-5 text-gray-400 ml-2 sm:ml-5 flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="Search expeditions, treks, tours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent text-base md:text-lg py-4 md:py-6 px-3 md:px-4 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-2 mr-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                )}
              </div>
              <Button
                type="submit"
                className="sm:m-2 px-6 py-4 md:py-6 h-auto bg-[#006F61] hover:bg-[#005a4d] rounded-xl font-semibold transition-all duration-300"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </form>
        </div>

        {/* Filters Section */}
        <div
          className={`max-w-7xl mx-auto mb-6 md:mb-8 transition-all duration-700 delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Filter Toggle & View Mode */}
          <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className={`rounded-xl border-2 transition-all duration-300 text-sm md:text-base ${showFilters || activeFiltersCount > 0
                  ? "border-[#006F61] text-[#006F61] bg-[#006F61]/5"
                  : "border-gray-200"
                  }`}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-2 px-2 py-0.5 text-xs font-bold bg-[#006F61] text-white rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-[#006F61] transition-colors flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">Clear all</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              {/* Results count */}
              <span className="text-xs md:text-sm text-gray-500">
                <span className="font-semibold text-gray-900">
                  {filteredResults.length}
                </span>{" "}
                results
              </span>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px] md:w-[180px] rounded-xl border-2 border-gray-200 text-sm">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  <SelectItem value="duration-asc">Duration: Short to Long</SelectItem>
                  <SelectItem value="duration-desc">Duration: Long to Short</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="hidden sm:flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid"
                    ? "bg-white shadow-sm text-[#006F61]"
                    : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "list"
                    ? "bg-white shadow-sm text-[#006F61]"
                    : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden transition-all duration-500 ${showFilters ? "max-h-[500px] opacity-100 mb-6" : "max-h-0 opacity-0"
              }`}
          >
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full rounded-xl border-2 border-gray-200">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="expedition">Expeditions</SelectItem>
                  <SelectItem value="trekking">Trekking</SelectItem>
                  <SelectItem value="tour">Tours</SelectItem>
                  <SelectItem value="rock-climbing">Rock Climbing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Difficulty Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Difficulty</label>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-full rounded-xl border-2 border-gray-200">
                  <SelectValue placeholder="All Difficulties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  {difficulties.map((diff) => (
                    <SelectItem key={diff} value={diff.toLowerCase()}>
                      {diff}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Duration Filter (10-80 days) */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Duration</label>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="w-full rounded-xl border-2 border-gray-200">
                  <SelectValue placeholder="Any Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Duration</SelectItem>
                  <SelectItem value="10-20">10-20 Days</SelectItem>
                  <SelectItem value="21-40">21-40 Days</SelectItem>
                  <SelectItem value="41-60">41-60 Days</SelectItem>
                  <SelectItem value="61-80">61-80 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filter Tags */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                  {categoryConfig[selectedCategory]?.label || selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="hover:bg-[#006F61]/20 rounded-full p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
              {selectedDifficulty !== "all" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium capitalize">
                  {selectedDifficulty}
                  <button
                    onClick={() => setSelectedDifficulty("all")}
                    className="hover:bg-[#006F61]/20 rounded-full p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
              {selectedDuration !== "all" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                  {selectedDuration} days
                  <button
                    onClick={() => setSelectedDuration("all")}
                    className="hover:bg-[#006F61]/20 rounded-full p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto">
          {filteredResults.length === 0 ? (
            /* No Results State */
            <div
              className={`text-center py-16 md:py-20 transition-all duration-700 delay-300
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto px-4">
                We couldn't find any adventures matching your search. Try
                adjusting your filters or search terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    clearFilters();
                  }}
                  className="bg-[#006F61] hover:bg-[#005a4d] rounded-xl px-6 py-5 h-auto"
                >
                  Clear Search
                </Button>
                <Link href="/expedition">
                  <Button
                    variant="outline"
                    className="border-2 border-[#006F61] text-[#006F61] rounded-xl px-6 py-5 h-auto w-full sm:w-auto"
                  >
                    Browse All Adventures
                  </Button>
                </Link>
              </div>
            </div>
          ) : viewMode === "grid" ? (
            /* Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredResults.map((result, index) => {
                const isHovered = hoveredCard === result.id;
                const category = categoryConfig[result.category] || categoryConfig.expedition;

                return (
                  <div
                    key={`${result.category}-${result.id}-${index}`}
                    className={`group relative transition-all duration-500
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    style={{
                      transitionDelay: `${Math.min(index * 50, 300)}ms`,
                    }}
                    onMouseEnter={() => setHoveredCard(result.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Link href={getCategoryLink(result.category, result.slug)}>
                      <div
                        className={`relative h-full bg-white rounded-2xl overflow-hidden
                          border-2 transition-all duration-500 cursor-pointer
                          ${isHovered
                            ? "border-[#006F61] shadow-2xl shadow-[#006F61]/15 -translate-y-2"
                            : "border-gray-100 shadow-lg shadow-gray-200/50 hover:border-[#006F61]/30"
                          }`}
                      >
                        {/* Image Section */}
                        <div className="relative h-44 md:h-48 overflow-hidden">
                          <img
                            src={result.image || "/placeholder-image.jpg"}
                            alt={result.name}
                            className={`w-full h-full object-cover transition-transform duration-700
                              ${isHovered ? "scale-110" : "scale-100"}`}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                          {/* Category Badge */}
                          <div className="absolute top-3 md:top-4 left-3 md:left-4">
                            <span
                              className={`px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider
                                ${category.bgColor} ${category.color}`}
                            >
                              {category.icon} {category.label}
                            </span>
                          </div>

                          {/* Title Overlay */}
                          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                            <h3 className="text-base md:text-lg font-bold text-white line-clamp-2 drop-shadow-lg">
                              {result.name}
                            </h3>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-4 md:p-5">
                          {/* Location */}
                          <div className="flex items-center gap-2 text-gray-600 text-sm mb-3 md:mb-4">
                            <MapPin className="w-4 h-4 text-[#006F61] flex-shrink-0" />
                            <span className="line-clamp-1">{result.location || "Location TBD"}</span>
                          </div>

                          {/* Info Grid */}
                          <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
                            <div
                              className={`flex items-center gap-2 p-2 md:p-2.5 rounded-xl transition-colors duration-300
                                ${isHovered ? "bg-[#006F61]/5" : "bg-gray-50"}`}
                            >
                              <Clock className="w-4 h-4 text-[#006F61] flex-shrink-0" />
                              <span className="text-xs md:text-sm text-gray-700 truncate">
                                {result.duration || "Duration TBD"}
                              </span>
                            </div>
                            <div
                              className={`flex items-center gap-2 p-2 md:p-2.5 rounded-xl transition-colors duration-300
                                ${isHovered ? "bg-[#006F61]/5" : "bg-gray-50"}`}
                            >
                              <Users className="w-4 h-4 text-[#006F61] flex-shrink-0" />
                              <span className="text-xs md:text-sm text-gray-700 truncate">
                                {result.groupSize || "Group TBD"}
                              </span>
                            </div>
                          </div>

                          {/* Difficulty Badge */}
                          <div className="flex items-center justify-between mb-3 md:mb-4">
                            <span
                              className={`px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold
                                ${difficultyColors[result.difficulty] || difficultyColors["Moderate"]}`}
                            >
                              {result.difficulty || "Moderate"}
                            </span>
                            {result.altitude && (
                              <span className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                                <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                                {result.altitude}
                              </span>
                            )}
                          </div>

                          {/* CTA Button */}
                          <Button
                            className={`w-full group/btn font-semibold rounded-xl py-4 md:py-5 h-auto text-sm md:text-base
                              transition-all duration-300
                              ${isHovered
                                ? "bg-[#006F61] hover:bg-[#005a4d] text-white shadow-lg shadow-[#006F61]/30"
                                : "bg-white border-2 border-[#006F61] text-[#006F61] hover:bg-[#006F61] hover:text-white"
                              }`}
                          >
                            <span>View Details</span>
                            <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>

                        {/* Bottom accent line */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500
                            ${isHovered ? "bg-[#006F61]" : "bg-transparent"}`}
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {filteredResults.map((result, index) => {
                const isHovered = hoveredCard === result.id;
                const category = categoryConfig[result.category] || categoryConfig.expedition;

                return (
                  <div
                    key={`${result.category}-${result.id}-${index}`}
                    className={`transition-all duration-500
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{
                      transitionDelay: `${Math.min(index * 30, 200)}ms`,
                    }}
                    onMouseEnter={() => setHoveredCard(result.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Link href={getCategoryLink(result.category, result.slug)}>
                      <div
                        className={`relative bg-white rounded-2xl overflow-hidden
                          border-2 transition-all duration-500 cursor-pointer
                          ${isHovered
                            ? "border-[#006F61] shadow-xl shadow-[#006F61]/10"
                            : "border-gray-100 shadow-md hover:border-[#006F61]/30"
                          }`}
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Image */}
                          <div className="relative w-full md:w-64 lg:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                            <img
                              src={result.image || "/placeholder-image.jpg"}
                              alt={result.name}
                              className={`w-full h-full object-cover transition-transform duration-700 md:min-h-[200px]
                                ${isHovered ? "scale-110" : "scale-100"}`}
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:bg-gradient-to-r md:from-transparent md:to-white/50" />

                            {/* Category Badge (Mobile) */}
                            <div className="absolute top-4 left-4 md:hidden">
                              <span
                                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider
                                  ${category.bgColor} ${category.color}`}
                              >
                                {category.icon} {category.label}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                            <div>
                              {/* Top row */}
                              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                <div className="flex-1 min-w-0">
                                  {/* Category Badge (Desktop) */}
                                  <span
                                    className={`hidden md:inline-flex px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2
                                      ${category.bgColor} ${category.color}`}
                                  >
                                    {category.icon} {category.label}
                                  </span>
                                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-2 line-clamp-2">
                                    {result.name}
                                  </h3>
                                </div>
                              </div>

                              {/* Location */}
                              <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                                <MapPin className="w-4 h-4 text-[#006F61] flex-shrink-0" />
                                <span className="line-clamp-1">{result.location || "Location TBD"}</span>
                              </div>

                              {/* Description */}
                              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                {result.description || "Discover an unforgettable adventure experience."}
                              </p>

                              {/* Tags */}
                              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                                <span
                                  className={`px-3 py-1.5 rounded-full text-xs font-semibold
                                    ${difficultyColors[result.difficulty] || difficultyColors["Moderate"]}`}
                                >
                                  {result.difficulty || "Moderate"}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm text-gray-600">
                                  <Clock className="w-4 h-4" />
                                  {result.duration || "Duration TBD"}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm text-gray-600">
                                  <Users className="w-4 h-4" />
                                  {result.groupSize || "Group TBD"}
                                </span>
                                {result.altitude && (
                                  <span className="flex items-center gap-1.5 text-sm text-gray-600">
                                    <TrendingUp className="w-4 h-4" />
                                    {result.altitude}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-4 flex justify-end">
                              <Button
                                className={`group/btn font-semibold rounded-xl px-5 md:px-6 py-3 md:py-4 h-auto
                                  transition-all duration-300
                                  ${isHovered
                                    ? "bg-[#006F61] hover:bg-[#005a4d] text-white"
                                    : "bg-[#006F61]/10 text-[#006F61] hover:bg-[#006F61] hover:text-white"
                                  }`}
                              >
                                View Details
                                <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom CTA Section */}
        {filteredResults.length > 0 && (
          <div
            className={`mt-12 md:mt-16 transition-all duration-700 delay-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden p-6 md:p-8 lg:p-12 text-center
                bg-gradient-to-br from-gray-50 to-white border-2 border-[#006F61]/20"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[#006F61] blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#006F61] blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="absolute top-6 left-6 w-16 md:w-20 h-16 md:h-20 border border-[#006F61]/10 rounded-full hidden md:block" />
              <div className="absolute bottom-6 right-6 w-24 md:w-32 h-24 md:h-32 border border-[#006F61]/10 rounded-full hidden md:block" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006F61]/10 mb-4 md:mb-6">
                  <Sparkles className="w-4 h-4 text-[#006F61]" />
                  <span className="text-[#006F61] text-sm font-medium">
                    Need Help Choosing?
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-gray-900 mb-3 md:mb-4">
                  Can't Find What You're Looking For?
                </h3>
                <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                  Our expert team can help you plan a custom adventure tailored
                  to your preferences, experience level, and schedule.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full sm:w-fit group bg-[#006F61] hover:bg-[#005a4d] font-semibold
                        px-6 md:px-8 py-5 md:py-6 h-auto rounded-xl shadow-lg transition-all duration-300
                        hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#006F61]/30"
                    >
                      <span>Contact Our Team</span>
                      <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>

                  <Link href="/expedition">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-fit group font-semibold px-6 md:px-8 py-5 md:py-6 h-auto rounded-xl
                        border-2 border-[#006F61] text-[#006F61] bg-white
                        hover:bg-[#006F61] hover:text-white
                        transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span>Browse All Expeditions</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
