import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Clock,
  MapPin,
  TrendingUp,
  Mountain,
  ArrowRight,
  ChevronRight,
  Footprints,
  Compass,
  Star,
  Users,
  Calendar,
  Shield,
  Route,
  Maximize2
} from "lucide-react";
import trekkingImage1 from "@assets/stock_images/mountain_trekking_ex_54bf77cb.jpg";
import trekkingImage2 from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";
import trekkingImage3 from "@assets/stock_images/mountain_trekking_ex_40f18eca.jpg";
import valleyImage1 from "@assets/stock_images/pakistan_mountain_va_c849d0c5.jpg";
import valleyImage2 from "@assets/stock_images/pakistan_mountain_va_42ede9d1.jpg";
import baseCampImage from "@assets/stock_images/mountain_base_camp_t_930df7d7.jpg";

// Difficulty configuration with colors and icons
const difficultyConfig = {
  Easy: {
    color: "#22c55e",
    bgColor: "bg-green-500",
    lightBg: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    label: "Beginner Friendly",
    icon: Footprints,
  },
  Moderate: {
    color: "#f59e0b",
    bgColor: "bg-amber-500",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
    label: "Some Experience",
    icon: TrendingUp,
  },
  Challenging: {
    color: "#ef4444",
    bgColor: "bg-red-500",
    lightBg: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    label: "Expert Level",
    icon: Mountain,
  },
};

// Enhanced trekking trips data
const trekkingTrips = [
  {
    id: 1,
    title: "K2 Base Camp Trek",
    subtitle: "The Ultimate Adventure",
    location: "Karakoram Range",
    region: "Baltistan",
    duration: "14-18 Days",
    difficulty: "Challenging" as keyof typeof difficultyConfig,
    elevation: "5,150m",
    distance: "140 km",
    image: trekkingImage1,
    href: "/trekking",
    rating: 4.9,
    reviews: 87,
    groupSize: "8-12",
    bestSeason: "Jun - Sep",
    featured: true,
    highlights: ["Concordia", "Baltoro Glacier", "K2 Views"],
    description: "Trek to the base of the world's second highest peak through the legendary Baltoro Glacier.",
  },
  {
    id: 2,
    title: "Fairy Meadows Trek",
    subtitle: "Gateway to Nanga Parbat",
    location: "Nanga Parbat Region",
    region: "Diamer",
    duration: "4-5 Days",
    difficulty: "Moderate" as keyof typeof difficultyConfig,
    elevation: "3,300m",
    distance: "28 km",
    image: valleyImage1,
    href: "/trekking",
    rating: 4.8,
    reviews: 156,
    groupSize: "6-15",
    bestSeason: "May - Oct",
    featured: false,
    highlights: ["Nanga Parbat Views", "Alpine Meadows", "Beyal Camp"],
    description: "Experience stunning views of the 'Killer Mountain' from lush green meadows.",
  },
  {
    id: 3,
    title: "Biafo & Snow Lake Trek",
    subtitle: "Glacier Paradise",
    location: "Karakoram Range",
    region: "Shigar",
    duration: "16-20 Days",
    difficulty: "Challenging" as keyof typeof difficultyConfig,
    elevation: "4,950m",
    distance: "120 km",
    image: trekkingImage2,
    href: "/trekking",
    rating: 4.9,
    reviews: 62,
    groupSize: "6-10",
    bestSeason: "Jul - Aug",
    featured: true,
    highlights: ["Snow Lake", "Hispar Pass", "Biafo Glacier"],
    description: "Traverse one of the world's longest glacier systems to the pristine Snow Lake.",
  },
  {
    id: 4,
    title: "Hushe Valley Trek",
    subtitle: "Hidden Gem of Baltistan",
    location: "Baltistan",
    region: "Ghanche",
    duration: "8-10 Days",
    difficulty: "Moderate" as keyof typeof difficultyConfig,
    elevation: "4,200m",
    distance: "65 km",
    image: valleyImage2,
    href: "/trekking",
    rating: 4.7,
    reviews: 94,
    groupSize: "8-12",
    bestSeason: "Jun - Sep",
    featured: false,
    highlights: ["Masherbrum Views", "Local Villages", "Charakusa Valley"],
    description: "Explore the stunning Hushe Valley with views of Masherbrum and K6 peaks.",
  },
  {
    id: 5,
    title: "Gondogoro La Pass Trek",
    subtitle: "High Altitude Challenge",
    location: "Karakoram Range",
    region: "Baltistan",
    duration: "18-21 Days",
    difficulty: "Challenging" as keyof typeof difficultyConfig,
    elevation: "5,585m",
    distance: "150 km",
    image: trekkingImage3,
    href: "/trekking",
    rating: 4.8,
    reviews: 48,
    groupSize: "6-10",
    bestSeason: "Jul - Aug",
    featured: false,
    highlights: ["Gondogoro Pass", "Four 8000ers Views", "Technical Sections"],
    description: "Cross the legendary Gondogoro La with views of four 8000-meter peaks.",
  },
  {
    id: 6,
    title: "Deosai Plateau Trek",
    subtitle: "Land of Giants",
    location: "Gilgit-Baltistan",
    region: "Skardu",
    duration: "5-7 Days",
    difficulty: "Easy" as keyof typeof difficultyConfig,
    elevation: "4,100m",
    distance: "45 km",
    image: baseCampImage,
    href: "/trekking",
    rating: 4.6,
    reviews: 128,
    groupSize: "8-20",
    bestSeason: "Jun - Sep",
    featured: false,
    highlights: ["Wildlife", "Sheosar Lake", "Wildflowers"],
    description: "Trek across one of the world's highest plateaus, home to Himalayan brown bears.",
  },
];

// Filter options
const difficultyFilters = ["All", "Easy", "Moderate", "Challenging"];

export function TrekkingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Filter trips based on active filter
  const filteredTrips = activeFilter === "All"
    ? trekkingTrips
    : trekkingTrips.filter(trip => trip.difficulty === activeFilter);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
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

        {/* Mountain silhouette decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-40 opacity-10">
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path
              fill="white"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,181.3C672,171,768,181,864,186.7C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

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
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/10 backdrop-blur-sm border border-white/20
            text-white text-sm font-semibold mb-6">
            <Compass className="w-4 h-4" />
            <span>Explore Pakistan's Trails</span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Trekking Adventures in{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Pakistan</span>
              {/* Decorative underline */}
              <span className="absolute bottom-1 left-0 w-full h-3 bg-white/20 rounded-full transform -rotate-1" />
            </span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Experience the majestic Karakoram and Himalayas with professionally guided
            trekking adventures. Safe, meticulously planned treks for all experience levels.
          </p>
        </div>

        {/* Quick Stats */}
        {/* <div
          className={`flex flex-wrap justify-center gap-8 md:gap-12 mb-12 transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {[
            { icon: Route, value: "25+", label: "Trek Routes" },
            { icon: Mountain, value: "8000m", label: "Max Elevation" },
            { icon: Users, value: "500+", label: "Trekkers/Year" },
            { icon: Shield, value: "100%", label: "Safety Record" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 backdrop-blur-sm
                border border-white/20 flex items-center justify-center
                group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* Difficulty Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-150
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {difficultyFilters.map((filter) => {
            const isActive = activeFilter === filter;
            const config = filter !== "All" ? difficultyConfig[filter as keyof typeof difficultyConfig] : null;
            const Icon = config?.icon || Footprints;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium
                  transition-all duration-300 text-sm md:text-base
                  ${isActive
                    ? 'bg-white text-gray-900 shadow-lg shadow-black/20'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                  }`}
              >
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110
                  ${isActive && config ? '' : ''}`}
                  style={isActive && config ? { color: config.color } : {}}
                />
                <span>{filter}</span>
                {filter !== "All" && (
                  <span
                    className={`w-2 h-2 rounded-full transition-all
                      ${isActive ? '' : 'bg-white/40'}`}
                    style={isActive && config ? { backgroundColor: config.color } : {}}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Trekking Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTrips.map((trip, index) => {
            const difficultyData = difficultyConfig[trip.difficulty];
            const DifficultyIcon = difficultyData.icon;
            const isHovered = hoveredCard === trip.id;

            return (
              <Link key={trip.id} href={trip.href}>
                <div
                  className={`group relative h-full transition-all duration-700
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                  style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
                  onMouseEnter={() => setHoveredCard(trip.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  data-testid={`card-trekking-${trip.id}`}
                >
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden
                    shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30
                    transition-all duration-500 hover:-translate-y-2">

                    {/* Image Container */}
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-full object-cover transition-transform duration-700
                          group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Top Row - Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        {/* Difficulty Badge */}
                        <div
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                            text-white text-xs font-bold uppercase tracking-wide
                            shadow-lg backdrop-blur-sm"
                          style={{ backgroundColor: difficultyData.color }}
                        >
                          <DifficultyIcon className="w-3.5 h-3.5" />
                          <span>{trip.difficulty}</span>
                        </div>

                        {/* Featured Badge */}
                        {/* {trip.featured && (
                          <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm
                            text-xs font-bold uppercase tracking-wide shadow-lg"
                            style={{ color: '#006F61' }}
                          >
                            ⭐ Featured
                          </div>
                        )} */}
                      </div>

                      {/* Bottom Row - Quick Info */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-white/90 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{trip.location}</span>
                        </div>

                        {/* Elevation Badge */}
                        <div className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm
                          text-white text-xs font-semibold">
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5" />
                            {trip.elevation}
                          </span>
                        </div>
                      </div>

                      {/* Hover Overlay with Quick Actions */}
                      <div
                        className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center
                          justify-center transition-all duration-300
                          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <div
                          className="w-14 h-14 rounded-full bg-white flex items-center justify-center
                            shadow-xl transform transition-all duration-300
                            hover:scale-110"
                          style={{ color: '#006F61' }}
                        >
                          <Maximize2 className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Subtitle */}
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: '#006F61' }}
                      >
                        {trip.subtitle}
                      </p>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-xl text-gray-900 mb-3
                        group-hover:text-[#006F61] transition-colors">
                        {trip.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {trip.description}
                      </p>

                      {/* Meta Info Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" style={{ color: '#006F61' }} />
                          <span>{trip.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Route className="w-4 h-4" style={{ color: '#006F61' }} />
                          <span>{trip.distance}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Users className="w-4 h-4" style={{ color: '#006F61' }} />
                          <span>{trip.groupSize} pax</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" style={{ color: '#006F61' }} />
                          <span>{trip.bestSeason}</span>
                        </div>
                      </div>

                      {/* Highlights Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {trip.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full text-xs font-medium
                              bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Row - Rating & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="font-bold text-gray-900">{trip.rating}</span>
                          </div>
                          <span className="text-gray-400 text-sm">
                            ({trip.reviews})
                          </span>
                        </div>

                        {/* CTA */}
                        <div
                          className="flex items-center gap-1 font-semibold text-sm
                            transition-all group-hover:gap-2"
                          style={{ color: '#006F61' }}
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300
                        origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: '#006F61' }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTrips.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10
              flex items-center justify-center">
              <Footprints className="w-10 h-10 text-white/60" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              No treks available for this difficulty
            </h3>
            <p className="text-white/60 mb-6">
              Try selecting a different difficulty level.
            </p>
            <Button
              onClick={() => setActiveFilter("All")}
              className="bg-white hover:bg-gray-100"
              style={{ color: '#006F61' }}
            >
              View All Treks
            </Button>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div
          className={`mt-16 md:mt-20 text-center transition-all duration-700 delay-500`}
        >
          {/* CTA Card */}
          <div className="relative ">

            {/* Decorative elements */}
            {/* <div className="absolute top-6 left-6 w-16 h-16 border border-white/10 rounded-full hidden md:block" />
            <div className="absolute bottom-6 right-6 w-24 h-24 border border-white/10 rounded-full hidden md:block" /> */}

            <div className="relative z-10">
              {/* Icon */}
              {/* <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20
                flex items-center justify-center">
                <Mountain className="w-8 h-8 text-white" />
              </div> */}

              {/* <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                Ready for Your Trekking Adventure?
              </h3>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Explore all our trekking routes and find the perfect trail for your skill level.
                From beginner-friendly walks to challenging high-altitude expeditions.
              </p> */}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/trekking">
                  <Button
                    size="lg"
                    className="w-full md:w-fit group bg-white hover:bg-gray-100 font-semibold
                      px-8 py-6 h-auto rounded-xl shadow-xl transition-all duration-300
                      hover:-translate-y-0.5 hover:shadow-2xl"
                    style={{ color: '#006F61' }}
                    data-testid="button-view-all-trekking"
                  >
                    <Footprints className="w-5 h-5 mr-2" />
                    <span>View All Trekking Trips</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform
                      group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-fit group font-semibold px-8 py-6 h-auto rounded-xl
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

          {/* Trust indicators */}
          {/* <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { icon: Shield, text: "Licensed Operator" },
              { icon: Users, text: "Expert Guides" },
              { icon: Star, text: "Top Rated" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/60 text-sm"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
