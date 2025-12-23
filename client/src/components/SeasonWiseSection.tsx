import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Sun,
  Flower2,
  Leaf,
  Snowflake,
  Heart
} from "lucide-react";
import hunzaImage from "@assets/stock_images/hunza_valley_spring__a35ac63e.jpg";
import fairyMeadowImage from "@assets/stock_images/fairy_meadow_mountai_a8bee0ee.jpg";
import skarduImage from "@assets/stock_images/skardu_valley_lake_m_4b59ff74.jpg";
import deosaImage from "@assets/stock_images/deosai_plateau_wildf_f1a3427f.jpg";

// Season configuration with colors and icons
const seasonConfig = {
  Spring: {
    icon: Flower2,
    color: "#ec4899",
    bgColor: "bg-pink-500",
    lightBg: "bg-pink-50",
    textColor: "text-pink-600"
  },
  Summer: {
    icon: Sun,
    color: "#f59e0b",
    bgColor: "bg-amber-500",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600"
  },
  Autumn: {
    icon: Leaf,
    color: "#ea580c",
    bgColor: "bg-orange-500",
    lightBg: "bg-orange-50",
    textColor: "text-orange-600"
  },
  Winter: {
    icon: Snowflake,
    color: "#0ea5e9",
    bgColor: "bg-sky-500",
    lightBg: "bg-sky-50",
    textColor: "text-sky-600"
  },
};

// Enhanced tour data with additional details
const tours = [
  {
    id: 1,
    title: "Hunza Valley Blossom Tour",
    location: "Hunza Valley",
    description: "Experience the spectacular spring blossoms across Hunza Valley. A scenic journey through blooming orchards and pristine landscapes.",
    season: "Spring" as keyof typeof seasonConfig,
    image: hunzaImage,
    duration: "7 Days",
    groupSize: "8-12",
    rating: 4.9,
    reviews: 128,
    price: "$899",
    featured: true,
    highlights: ["Cherry Blossoms", "Karimabad", "Attabad Lake"],
  },
  {
    id: 2,
    title: "Fairy Meadow Adventure",
    location: "Nanga Parbat Base",
    description: "Trek to the stunning Fairy Meadow with breathtaking views of Nanga Parbat. Experience alpine meadows and mountain serenity.",
    season: "Summer" as keyof typeof seasonConfig,
    image: fairyMeadowImage,
    duration: "5 Days",
    groupSize: "6-10",
    rating: 4.8,
    reviews: 95,
    price: "$749",
    featured: false,
    highlights: ["Nanga Parbat Views", "Alpine Meadows", "Camping"],
  },
  {
    id: 3,
    title: "Skardu Valley Explorer",
    location: "Skardu, Baltistan",
    description: "Explore the beautiful Skardu Valley during summer. Visit pristine lakes, ancient monasteries, and dramatic mountain passes.",
    season: "Summer" as keyof typeof seasonConfig,
    image: skarduImage,
    duration: "8 Days",
    groupSize: "8-15",
    rating: 4.9,
    reviews: 156,
    price: "$999",
    featured: true,
    highlights: ["Shangrila Lake", "Deosai", "Cold Desert"],
  },
  {
    id: 4,
    title: "Deosai Plateau Expedition",
    location: "Deosai, Baltistan",
    description: "Discover the alpine beauty of Deosai Plateau. Trek through wildflower meadows and enjoy panoramic mountain views.",
    season: "Summer" as keyof typeof seasonConfig,
    image: deosaImage,
    duration: "6 Days",
    groupSize: "6-12",
    rating: 4.7,
    reviews: 82,
    price: "$849",
    featured: false,
    highlights: ["Wildlife", "Sheosar Lake", "Wildflowers"],
  },
];

export function SeasonWiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [likedTours, setLikedTours] = useState<number[]>([]);
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

  // Filter options
  const filters = ["All", "Spring", "Summer", "Autumn", "Winter"];

  // Filter tours based on active filter
  const filteredTours = activeFilter === "All"
    ? tours
    : tours.filter(tour => tour.season === activeFilter);

  // Toggle like
  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedTours(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
      data-testid="section-tours"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient blobs */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ backgroundColor: '#006F61' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.02]"
          style={{ backgroundColor: '#006F61' }}
        />

        {/* Decorative dots pattern - right side */}
        <div className="absolute top-40 right-10 hidden xl:block">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(16)].map((_, i) => (
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
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(0, 111, 97, 0.1)' }}
          >
            <Sparkles className="w-4 h-4" style={{ color: '#006F61' }} />
            <span className="text-sm font-semibold" style={{ color: '#006F61' }}>
              Featured Tours
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Explore Our{" "}
            <span className="relative inline-block" style={{ color: '#006F61' }}>
              Seasonal Tours
              {/* Decorative underline */}
              {/* <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8.5C50 2.5 150 2.5 198 8.5"
                  stroke="#006F61"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.3"
                />
              </svg> */}
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Discover northern Pakistan with expertly guided tours. From scenic mountain valleys
            to culturally rich villages, experience safe and immersive adventures.
          </p>
        </div>

        {/* Season Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const seasonData = filter !== "All" ? seasonConfig[filter as keyof typeof seasonConfig] : null;
            const SeasonIcon = seasonData?.icon;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium
                  transition-all duration-300 text-sm md:text-base
                  ${isActive
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                style={isActive ? {
                  backgroundColor: filter === "All" ? '#006F61' : seasonData?.color || '#006F61',
                  boxShadow: `0 10px 30px -10px ${filter === "All" ? 'rgba(0, 111, 97, 0.4)' : seasonData?.color || 'rgba(0, 111, 97, 0.4)'}`
                } : {}}
              >
                {SeasonIcon && (
                  <SeasonIcon className={`w-4 h-4 transition-transform group-hover:rotate-12
                    ${isActive ? 'text-white' : ''}`}
                    style={!isActive ? { color: seasonData?.color } : {}}
                  />
                )}
                <span>{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredTours.map((tour, index) => {
            const seasonData = seasonConfig[tour.season];
            const SeasonIcon = seasonData.icon;
            const isHovered = hoveredCard === tour.id;
            const isLiked = likedTours.includes(tour.id);

            return (
              <Link key={tour.id} href="/tours">
                <div
                  className={`group relative h-full transition-all duration-700
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                  style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
                  onMouseEnter={() => setHoveredCard(tour.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  data-testid={`card-tour-${index}`}
                >
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden
                    shadow-sm hover:shadow-2xl hover:shadow-black/10
                    border border-gray-100 hover:border-gray-200
                    transition-all duration-500 hover:-translate-y-2">

                    {/* Image Container */}
                    <div className="relative h-52 md:h-56 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700
                          group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Top badges row */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        {/* Season Badge */}
                        <div
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full
                            text-white text-xs font-bold uppercase tracking-wide
                            shadow-lg backdrop-blur-sm ${seasonData.bgColor}`}
                        >
                          <SeasonIcon className="w-3.5 h-3.5" />
                          <span>{tour.season}</span>
                        </div>

                        {/* Like Button */}
                        <button
                          onClick={(e) => toggleLike(tour.id, e)}
                          className={`w-9 h-9 rounded-full flex items-center justify-center
                            backdrop-blur-sm transition-all duration-300
                            ${isLiked
                              ? 'bg-red-500 text-white'
                              : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                        >
                          <Heart
                            className={`w-4 h-4 transition-transform
                              ${isLiked ? 'fill-current scale-110' : ''}`}
                          />
                        </button>
                      </div>

                      {/* Featured Badge */}
                      {tour.featured && (
                        <div className="absolute top-14 left-4">
                          <span
                            className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase
                              tracking-wider text-white shadow-lg"
                            style={{ backgroundColor: '#006F61' }}
                          >
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Price Tag */}
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-white rounded-xl px-3 py-2 shadow-lg">
                          <span className="text-xs text-gray-500">From</span>
                          <div className="font-bold text-lg" style={{ color: '#006F61' }}>
                            {tour.price}
                          </div>
                        </div>
                      </div>

                      {/* Location overlay */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1.5 text-white/90 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{tour.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-gray-900">{tour.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">
                          ({tour.reviews} reviews)
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-lg text-gray-900 mb-2
                        group-hover:text-[#006F61] transition-colors line-clamp-2">
                        {tour.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {tour.description}
                      </p>

                      {/* Meta info */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          <span>{tour.groupSize}</span>
                        </div>
                      </div>

                      {/* Highlights Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {tour.highlights.slice(0, 3).map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-full text-xs font-medium
                              bg-gray-100 text-gray-600"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className="w-full group/btn font-semibold rounded-xl py-5 h-auto
                          transition-all duration-300"
                        style={{
                          backgroundColor: '#006F61',
                          boxShadow: isHovered ? '0 10px 30px -10px rgba(0, 111, 97, 0.5)' : 'none'
                        }}
                        data-testid={`button-tour-${index}`}
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform
                          group-hover/btn:translate-x-1" />
                      </Button>
                    </div>

                    {/* Hover accent line */}
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
        {filteredTours.length === 0 && (
          <div className="text-center py-16">
            <div
              className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0, 111, 97, 0.1)' }}
            >
              <Calendar className="w-10 h-10" style={{ color: '#006F61' }} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No tours available for this season
            </h3>
            <p className="text-gray-600 mb-6">
              Check back soon or explore other seasonal tours.
            </p>
            <Button
              onClick={() => setActiveFilter("All")}
              style={{ backgroundColor: '#006F61' }}
              className="text-white"
            >
              View All Tours
            </Button>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div
          className={`mt-16 md:mt-20 transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Stats Row */}
          {/* <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {[
              { value: "50+", label: "Tours Available" },
              { value: "4.9", label: "Average Rating" },
              { value: "2500+", label: "Happy Travelers" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: '#006F61' }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}

          {/* CTA Card */}
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center"
          // style={{ backgroundColor: '#006F61' }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {/* <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full
                  bg-white blur-3xl -translate-y-1/2 translate-x-1/2"
              />
              <div
                className="absolute bottom-0 left-0 w-64 h-64 rounded-full
                  bg-white blur-3xl translate-y-1/2 -translate-x-1/2"
              /> */}
            </div>

            {/* Decorative Elements */}
            {/* <div className="absolute top-6 left-6 w-20 h-20 border border-white/10 rounded-full hidden md:block" />
            <div className="absolute bottom-6 right-6 w-32 h-32 border border-white/10 rounded-full hidden md:block" />

            <div className="relative z-10">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                Ready for Your Next Adventure?
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Explore all our tours and find the perfect journey for you.
                Our expert team is ready to make your dream adventure a reality.
              </p> */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tours">
                <Button
                  size="lg"
                  className="w-full md:w-fit group bg-white hover:bg-gray-100 font-semibold
                      px-8 py-6 h-auto rounded-xl shadow-xl transition-all duration-300
                      hover:-translate-y-0.5"
                  style={{ color: '#006F61' }}
                  data-testid="button-explore-all-tours"
                >
                  <span>Explore All Tours</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform
                      group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full md:w-fit group font-semibold px-8 py-6 h-auto rounded-xl
                      border-2 border-black/90 text-[#006F61] bg-white/10
                      hover:bg-[#006F61] hover:border-white transition-all duration-300
                      hover:-translate-y-0.5"
                  style={{
                    color: '#006F61',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#006F61';
                  }}
                >
                  <span>Plan Custom Tour</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
