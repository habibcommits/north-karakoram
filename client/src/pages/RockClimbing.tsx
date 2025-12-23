import { useState, useEffect } from "react";
import {
  Mountain,
  MapPin,
  Clock,
  Star,
  Search,
  ChevronRight,
  Filter,
  X,
  Compass,
  Users,
  TrendingUp,
  Award,
  Anchor,
  Shield,
  Target,
  Zap
} from "lucide-react";

// Mock data for rock climbing adventures
const mockClimbingTrips = [
  {
    id: 1,
    title: "Trango Towers Expedition",
    destination: "Karakoram Range",
    category: "Rock Climbing",
    duration: "21 Days",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop",
    shortDescription: "Conquer the legendary Trango Towers, featuring some of the world's most spectacular granite spires.",
    difficulty: "Expert",
    season: "Summer",
    elevation: "6,286m"
  },
  {
    id: 2,
    title: "Uli Biaho Tower Climb",
    destination: "Baltoro Glacier",
    category: "Rock Climbing",
    duration: "18 Days",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop",
    shortDescription: "Technical climbing on one of the most challenging granite towers in the Karakoram.",
    difficulty: "Expert",
    season: "Summer",
    elevation: "6,109m"
  },
  {
    id: 3,
    title: "Passu Cones Climbing",
    destination: "Hunza Valley",
    category: "Rock Climbing",
    duration: "10 Days",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1516651029879-bcd191e7d33b?w=800&h=600&fit=crop",
    shortDescription: "Scale the iconic cathedral-shaped peaks of Passu with stunning glacier views.",
    difficulty: "Advanced",
    season: "Summer",
    elevation: "5,800m"
  },
  {
    id: 4,
    title: "Shigar Rock Climbing",
    destination: "Skardu",
    category: "Rock Climbing",
    duration: "7 Days",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&h=600&fit=crop",
    shortDescription: "Perfect introduction to high-altitude rock climbing on granite formations near Shigar.",
    difficulty: "Intermediate",
    season: "Spring",
    elevation: "4,500m"
  },
  {
    id: 5,
    title: "Baltoro Cathedral Expedition",
    destination: "Baltoro Glacier",
    category: "Rock Climbing",
    duration: "25 Days",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
    shortDescription: "Attempt one of the most beautiful and challenging rock spires in the world.",
    difficulty: "Expert",
    season: "Summer",
    elevation: "5,828m"
  },
  {
    id: 6,
    title: "Hushe Valley Rock Course",
    destination: "Gilgit-Baltistan",
    category: "Rock Climbing",
    duration: "5 Days",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop",
    shortDescription: "Learn rock climbing techniques on accessible crags with expert instructors.",
    difficulty: "Beginner",
    season: "All Year",
    elevation: "3,200m"
  },
  {
    id: 7,
    title: "Namika Rock Expedition",
    destination: "Karakoram Range",
    category: "Rock Climbing",
    duration: "14 Days",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop",
    shortDescription: "Technical multi-pitch climbing on pristine granite walls with panoramic views.",
    difficulty: "Advanced",
    season: "Summer",
    elevation: "5,600m"
  },
  {
    id: 8,
    title: "Deosai Bouldering",
    destination: "Skardu",
    category: "Bouldering",
    duration: "4 Days",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1516651029879-bcd191e7d33b?w=800&h=600&fit=crop",
    shortDescription: "Unique bouldering experience on the world's second-highest plateau.",
    difficulty: "Intermediate",
    season: "Summer",
    elevation: "4,100m"
  },
  {
    id: 9,
    title: "Lady Finger Peak Attempt",
    destination: "Hunza Valley",
    category: "Rock Climbing",
    duration: "12 Days",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&h=600&fit=crop",
    shortDescription: "Challenge yourself on the iconic Lady Finger peak with its distinctive spire.",
    difficulty: "Advanced",
    season: "Summer",
    elevation: "6,000m"
  }
];

const stats = [
  { icon: Anchor, value: "50+", label: "Climbing Routes" },
  { icon: Users, value: "2,000+", label: "Climbers Guided" },
  { icon: TrendingUp, value: "95%", label: "Summit Rate" },
  { icon: Award, value: "12 Years", label: "Experience" }
];

const categories = ["All Types", "Rock Climbing", "Bouldering", "Alpine Climbing"];
const seasons = ["All Seasons", "Summer", "Winter", "Spring", "Autumn", "All Year"];
const destinations = ["All Destinations", "Karakoram Range", "Hunza Valley", "Gilgit-Baltistan", "Baltoro Glacier", "Skardu"];
const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced", "Expert"];

function ClimbingCard({ trip }: { trip: typeof mockClimbingTrips[0] }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < Math.floor(rating)
          ? "fill-yellow-400 text-yellow-400"
          : "text-white/30"
          }`}
      />
    ));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500";
      case "Intermediate": return "bg-yellow-500";
      case "Advanced": return "bg-orange-500";
      case "Expert": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={trip.imageUrl}
          alt={trip.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="px-3 py-1.5 rounded-full bg-[#006F61] text-white text-xs font-semibold shadow-lg">
            {trip.category}
          </span>
          <span className={`px-3 py-1.5 rounded-full ${getDifficultyColor(trip.difficulty)} text-white text-xs font-semibold shadow-lg`}>
            {trip.difficulty}
          </span>
        </div>

        {/* Rating Stars */}
        <div className="hidden md:flex absolute top-4 right-4 gap-0.5 z-10">
          {renderStars(trip.rating)}
        </div>

        {/* Elevation Badge */}
        <div className="absolute bottom-4 right-4 z-10">
          <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
            {trip.elevation}
          </span>
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            <span>{trip.destination}</span>
          </div>
          <h3 className="font-bold text-xl text-white mb-1 line-clamp-2">
            {trip.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {trip.shortDescription}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{trip.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Compass className="w-4 h-4" />
            <span>{trip.season}</span>
          </div>
        </div>

        <button className="w-full bg-[#006F61] hover:bg-[#005a4d] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#006F61]/30 flex items-center justify-center gap-2 group/btn">
          <span>Book Now</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#006F61]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function RockClimbing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Types");
  const [selectedSeason, setSelectedSeason] = useState("All Seasons");
  const [selectedDestination, setSelectedDestination] = useState("All Destinations");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");
  const [showFilters, setShowFilters] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTrips = mockClimbingTrips.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Types" || trip.category === selectedCategory;
    const matchesSeason = selectedSeason === "All Seasons" || trip.season === selectedSeason || trip.season === "All Year";
    const matchesDestination = selectedDestination === "All Destinations" || trip.destination === selectedDestination;
    const matchesDifficulty = selectedDifficulty === "All Levels" || trip.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesSeason && matchesDestination && matchesDifficulty;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Types");
    setSelectedSeason("All Seasons");
    setSelectedDestination("All Destinations");
    setSelectedDifficulty("All Levels");
  };

  const hasActiveFilters = searchQuery ||
    selectedCategory !== "All Types" ||
    selectedSeason !== "All Seasons" ||
    selectedDestination !== "All Destinations" ||
    selectedDifficulty !== "All Levels";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden bg-gray-900">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0">
          <div className="w-full h-full animate-ken-burns">
            <img
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1920&h=1080&fit=crop"
              alt="Rock climbing adventure"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Multi-layer Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#006F61]/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_0%,rgba(0,0,0,0.4)_70%)]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full hidden lg:block" />
          <div className="absolute top-24 right-24 w-24 h-24 border border-[#006F61]/30 rounded-full hidden lg:block" />
          <div className="absolute bottom-40 left-10 w-16 h-16 border border-white/10 rounded-full hidden lg:block" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#006F61] text-white text-sm font-semibold mb-6 shadow-lg shadow-[#006F61]/30 animate-fade-in">
              <span className="tracking-wide">Vertical Adventures</span>
            </div>

            {/* Subtitle */}
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-3 font-light tracking-wide animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Conquer the Heights
            </p>

            {/* Main Title */}
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-3 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Rock Climbing
            </h1>

            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.3s', color: '#006F61', textShadow: '0 4px 30px rgba(0, 111, 97, 0.3), 0 0 60px rgba(0, 111, 97, 0.2)' }}>
              Expeditions
            </h2>

            {/* Description */}
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Scale legendary granite spires, master technical routes, and experience the thrill of vertical ascents in the world's most spectacular mountain ranges with expert guides.
            </p>

            {/* Feature Pills */}
            <div className="hidden lg:flex flex-wrap justify-center gap-3 mt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
                <Shield className="w-4 h-4" />
                <span>Safety First</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
                <Target className="w-4 h-4" />
                <span>Expert Guides</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
                <Zap className="w-4 h-4" />
                <span>All Skill Levels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-[#006F61] hover:border-[#006F61] transition-all duration-300">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      {/* Filter Section */}
      <section className={`sticky top-0 z-30 bg-white shadow-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Mobile Filter Toggle */}
          <div className="flex md:hidden justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-900">Filters</h3>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {showFilters ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
              <span className="text-sm font-medium">{showFilters ? 'Close' : 'Filters'}</span>
            </button>
          </div>

          {/* Filter Controls */}
          <div className={`${showFilters ? 'block' : 'hidden md:block'} space-y-4`}>
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search climbing adventures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006F61] focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006F61] focus:outline-none transition-colors text-gray-700 bg-white cursor-pointer"
              >
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>{dest}</option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006F61] focus:outline-none transition-colors text-gray-700 bg-white cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006F61] focus:outline-none transition-colors text-gray-700 bg-white cursor-pointer"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>

              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006F61] focus:outline-none transition-colors text-gray-700 bg-white cursor-pointer"
              >
                {seasons.map((season) => (
                  <option key={season} value={season}>{season}</option>
                ))}
              </select>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-600">Active filters:</span>
                {searchQuery && (
                  <span className="px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                    "{searchQuery}"
                  </span>
                )}
                {selectedCategory !== "All Types" && (
                  <span className="px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                    {selectedCategory}
                  </span>
                )}
                {selectedDifficulty !== "All Levels" && (
                  <span className="px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                    {selectedDifficulty}
                  </span>
                )}
                {selectedSeason !== "All Seasons" && (
                  <span className="px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                    {selectedSeason}
                  </span>
                )}
                {selectedDestination !== "All Destinations" && (
                  <span className="px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                    {selectedDestination}
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

      {/* Why Choose Us Section */}
      {/* <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#006F61] font-semibold text-sm uppercase tracking-wider mb-2">
              Why Climb With Us
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
              World-Class Climbing Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "Certified guides, top-tier equipment, and strict safety protocols"
              },
              {
                icon: Award,
                title: "Expert Instructors",
                description: "Learn from internationally certified climbing professionals"
              },
              {
                icon: Target,
                title: "All Skill Levels",
                description: "Programs for beginners to advanced climbers"
              },
              {
                icon: Mountain,
                title: "Iconic Routes",
                description: "Access to the world's most legendary climbing destinations"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-[#006F61] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-[#006F61]/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-[#006F61] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Trips Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#006F61] font-semibold text-sm uppercase tracking-wider mb-2">
              Discover Our
            </p>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900">
              Climbing Expeditions
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {filteredTrips.length} {filteredTrips.length === 1 ? 'expedition' : 'expeditions'} available
            </p>
          </div>

          {/* No Results */}
          {filteredTrips.length === 0 ? (
            <div className="text-center py-20">
              <Anchor className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-6">No climbing expeditions found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 rounded-xl bg-[#006F61] hover:bg-[#005a4d] text-white font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.map((trip) => (
                <ClimbingCard key={trip.id} trip={trip} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #006F61 0%, #004d44 100%)' }}>
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Anchor className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                START YOUR CLIMB
              </span>
            </div>

            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to Reach New Heights?
            </h2>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              Whether you're a beginner or an experienced climber, our expert team will guide you to the summit. Contact us to plan your next vertical adventure.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => window.open('https://wa.me/923330228111', '_blank')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Custom Quote
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                View All Expeditions
                <Mountain className="w-5 h-5" />
              </button>
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
      `}</style>
    </div>
  );
}
