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
  Shield,
  Award,
  Camera,
  Map
} from "lucide-react";

// Mock data for tours
const mockTours = [
  {
    id: 1,
    title: "Hunza Valley Cultural Tour",
    destination: "Hunza Valley",
    category: "Tour",
    duration: "7 Days",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    shortDescription: "Experience the rich culture and stunning beauty of Hunza Valley with local guides.",
    difficulty: "Easy",
    season: "All Year"
  },
  {
    id: 2,
    title: "Skardu Scenic Adventure",
    destination: "Skardu",
    category: "Tour",
    duration: "5 Days",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
    shortDescription: "Discover the breathtaking landscapes and serene lakes of Skardu region.",
    difficulty: "Easy",
    season: "Summer"
  },
  {
    id: 3,
    title: "Swat Valley Heritage Tour",
    destination: "Swat Valley",
    category: "Tour",
    duration: "6 Days",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    shortDescription: "Explore the Switzerland of Pakistan with its lush valleys and ancient sites.",
    difficulty: "Easy",
    season: "Summer"
  },
  {
    id: 4,
    title: "Fairy Meadows Expedition",
    destination: "Fairy Meadows",
    category: "Tour",
    duration: "4 Days",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=600&fit=crop",
    shortDescription: "Visit one of the most beautiful alpine meadows with views of Nanga Parbat.",
    difficulty: "Moderate",
    season: "Summer"
  },
  {
    id: 5,
    title: "Kalash Valley Cultural Experience",
    destination: "Chitral",
    category: "Tour",
    duration: "5 Days",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    shortDescription: "Immerse yourself in the unique culture of the Kalash people.",
    difficulty: "Easy",
    season: "All Year"
  },
  {
    id: 6,
    title: "Neelum Valley Paradise",
    destination: "Neelum Valley",
    category: "Tour",
    duration: "6 Days",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
    shortDescription: "Journey through the stunning Neelum Valley with its rivers and forests.",
    difficulty: "Easy",
    season: "Summer"
  }
];

const stats = [
  { icon: Map, value: "100+", label: "Tour Destinations" },
  { icon: Users, value: "5,000+", label: "Happy Travelers" },
  { icon: Camera, value: "50+", label: "Photo Spots" },
  { icon: Award, value: "20 Years", label: "Experience" }
];

const categories = ["All Activities", "Tour", "Cultural", "Scenic", "Adventure"];
const seasons = ["All Seasons", "Summer", "Winter", "Spring", "Autumn", "All Year"];
const destinations = ["All Destinations", "Hunza Valley", "Skardu", "Swat Valley", "Chitral", "Neelum Valley"];

function TourCard({ tour }) {
  const renderStars = (rating) => {
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

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="px-3 py-1.5 rounded-full bg-[#006F61] text-white text-xs font-semibold shadow-lg">
            {tour.category}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
            {tour.difficulty}
          </span>
        </div>

        {/* Rating Stars */}
        <div className="hidden md:flex absolute top-4 right-4 gap-0.5 z-10">
          {renderStars(tour.rating)}
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            <span>{tour.destination}</span>
          </div>
          <h3 className="font-bold text-xl text-white mb-1 line-clamp-2">
            {tour.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {tour.shortDescription}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Compass className="w-4 h-4" />
            <span>{tour.season}</span>
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

export default function Tours() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Activities");
  const [selectedSeason, setSelectedSeason] = useState("All Seasons");
  const [selectedDestination, setSelectedDestination] = useState("All Destinations");
  const [showFilters, setShowFilters] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTours = mockTours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Activities" || tour.category === selectedCategory;
    const matchesSeason = selectedSeason === "All Seasons" || tour.season === selectedSeason;
    const matchesDestination = selectedDestination === "All Destinations" || tour.destination === selectedDestination;

    return matchesSearch && matchesCategory && matchesSeason && matchesDestination;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Activities");
    setSelectedSeason("All Seasons");
    setSelectedDestination("All Destinations");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden bg-gray-900">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0">
          <div className="w-full h-full animate-ken-burns">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
              alt="Scenic tour landscape"
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
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#006F61] text-white text-sm font-semibold mb-6 shadow-lg shadow-[#006F61]/30 animate-fade-in">
              <span className="tracking-wide">Discover Pakistan's Beauty</span>
            </div>

            {/* Subtitle */}
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-3 font-light tracking-wide animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Experience the Culture
            </p>

            {/* Main Title */}
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-3 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Scenic Tours
            </h1>

            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.3s', color: '#006F61', textShadow: '0 4px 30px rgba(0, 111, 97, 0.3), 0 0 60px rgba(0, 111, 97, 0.2)' }}>
              & Packages
            </h2>

            {/* Description */}
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Explore Pakistan's breathtaking landscapes, rich culture, and warm hospitality. From valley tours to cultural experiences, discover the beauty that awaits.
            </p>
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
            <h3 className="font-semibold text-lg">Filters</h3>
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
                placeholder="Search tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#006F61] focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            {(searchQuery || selectedCategory !== "All Activities" || selectedSeason !== "All Seasons" || selectedDestination !== "All Destinations") && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-600">Active filters:</span>
                {searchQuery && (
                  <span className="px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                    "{searchQuery}"
                  </span>
                )}
                {selectedCategory !== "All Activities" && (
                  <span className="px-3 py-1 rounded-full bg-[#006F61]/10 text-[#006F61] text-sm font-medium">
                    {selectedCategory}
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

      {/* Tours Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#006F61] font-semibold text-sm uppercase tracking-wider mb-2">
              Explore Our
            </p>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900">
              Tour Packages
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'} available
            </p>
          </div>

          {/* No Results */}
          {filteredTours.length === 0 ? (
            <div className="text-center py-20">
              <Mountain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-6">No tours found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 rounded-xl bg-[#006F61] hover:bg-[#005a4d] text-white font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          )}
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
