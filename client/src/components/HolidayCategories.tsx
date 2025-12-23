import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Mountain, Footprints, Map, Users, Compass } from "lucide-react";
import tourIcon from "@assets/tour_(1)_1766216911792.png";
import climbingIcon from "@assets/family_tours_1766216911791.png";
import expeditionIcon from "@assets/expitions_1766216911790.png";
import trekkingIcon from "@assets/treking_1766216911793.png";
import backgroundImage from "@assets/stock_images/bg-for-holiday.jfif";

// Available holiday category options with enhanced metadata
const categories = [
  {
    title: "Expeditions",
    subtitle: "8000m+ Peaks",
    description: "Summit the world's highest peaks with expert mountaineers and comprehensive support",
    icon: expeditionIcon,
    lucideIcon: Mountain,
    href: "/expeditions",
    stats: "15+ Routes",
    featured: true,
  },
  {
    title: "Trekking",
    subtitle: "Mountain Trails",
    description: "Trek through pristine valleys, ancient trails, and breathtaking landscapes",
    icon: trekkingIcon,
    lucideIcon: Footprints,
    href: "/trekking",
    stats: "30+ Trails",
    featured: false,
  },
  {
    title: "Tours",
    subtitle: "Cultural Journeys",
    description: "Explore scenic routes, historic sites, and authentic cultural experiences",
    icon: tourIcon,
    lucideIcon: Map,
    href: "/tours",
    stats: "25+ Tours",
    featured: false,
  },
  {
    title: "Family Tours",
    subtitle: "All Ages Welcome",
    description: "Family-friendly adventures designed for memorable experiences together",
    icon: climbingIcon,
    lucideIcon: Users,
    href: "/expeditions",
    stats: "20+ Trips",
    featured: false,
  },
];

export function HolidayCategories() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      data-testid="section-holiday-categories"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Multi-layer gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#006F61]/90 via-[#005249]/85 to-[#003d36]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-white/10 hidden lg:block" />
        <div className="absolute top-32 left-20 w-48 h-48 rounded-full border border-white/5 hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border border-white/10 hidden lg:block" />

        {/* Accent lines */}
        <div className="absolute top-1/2 left-0 w-24 h-px bg-gradient-to-r from-white/20 to-transparent hidden xl:block" />
        <div className="absolute top-1/2 right-0 w-24 h-px bg-gradient-to-l from-white/20 to-transparent hidden xl:block" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/10 backdrop-blur-sm border border-white/20
            text-white text-sm font-semibold mb-6">
            <Compass className="w-4 h-4" />
            <span>Choose Your Adventure</span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Find Your Perfect{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Holiday</span>
              {/* Decorative underline */}
              <span
                className="absolute bottom-1 left-0 w-full h-3 bg-white/20 -z-0
                  rounded-full transform -rotate-1"
              />
            </span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you seek adrenaline-pumping expeditions or peaceful family adventures,
            we have the perfect journey waiting for you
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.lucideIcon;
            const isHovered = hoveredIndex === index;

            return (
              <Link key={category.title} href={category.href}>
                <div
                  className={`group relative h-full transition-all duration-700
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                  style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  data-testid={`card-category-${category.title.toLowerCase().replace(' ', '-')}`}
                >
                  {/* Card Container */}
                  <div
                    className={`relative h-full min-h-[320px] md:min-h-[380px] rounded-2xl
                      overflow-hidden cursor-pointer transition-all duration-500
                      border-2 backdrop-blur-sm
                      ${isHovered
                        ? 'bg-white border-white shadow-2xl shadow-black/20 -translate-y-2'
                        : 'bg-white/5 border-white/20 hover:border-white/40'
                      }`}
                  >
                    {/* Featured Badge */}
                    {category.featured && (
                      <div className="absolute top-4 right-4 z-20">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                            transition-colors duration-300
                            ${isHovered
                              ? 'bg-[#006F61] text-white'
                              : 'bg-white/20 text-white'
                            }`}
                        >
                          Popular
                        </span>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="relative h-full flex flex-col p-6 md:p-8">

                      {/* Icon Section */}
                      <div className="flex-1 flex items-center justify-center mb-6">
                        <div className="relative">
                          {/* Custom Icon (from assets) */}
                          <div
                            className={`w-28 h-28 md:w-32 md:h-32 transition-all duration-500
                              ${isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
                          >
                            <img
                              src={category.icon}
                              alt=""
                              className="w-full h-full object-contain"
                              style={{
                                filter: isHovered
                                  ? 'none'
                                  : 'brightness(0) invert(1)'
                              }}
                            />
                          </div>

                          {/* Lucide Icon (shown on hover) */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center
                              transition-all duration-500
                              ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}
                          >
                            <div
                              className="w-20 h-20 rounded-2xl flex items-center justify-center"
                              style={{ backgroundColor: '#006F61' }}
                            >
                              <IconComponent className="w-10 h-10 text-white" />
                            </div>
                          </div>

                          {/* Decorative ring */}
                          <div
                            className={`absolute inset-0 -m-4 rounded-full border-2 border-dashed
                              transition-all duration-500
                              ${isHovered
                                ? 'border-[#006F61]/30 rotate-180'
                                : 'border-white/20 rotate-0'
                              }`}
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="text-center space-y-3">
                        {/* Subtitle */}
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider
                            transition-colors duration-300
                            ${isHovered ? 'text-[#006F61]' : 'text-white/60'}`}
                        >
                          {category.subtitle}
                        </span>

                        {/* Title */}
                        <h3
                          className={`font-heading font-bold text-xl md:text-2xl
                            transition-colors duration-300
                            ${isHovered ? 'text-gray-900' : 'text-white'}`}
                        >
                          {category.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-sm leading-relaxed line-clamp-2
                            transition-colors duration-300
                            ${isHovered ? 'text-gray-600' : 'text-white/70'}`}
                        >
                          {category.description}
                        </p>

                        {/* Stats Badge */}
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1.5
                            rounded-full text-xs font-semibold transition-all duration-300
                            ${isHovered
                              ? 'bg-[#006F61]/10 text-[#006F61]'
                              : 'bg-white/10 text-white/80'
                            }`}
                        >
                          <span>{category.stats}</span>
                        </div>
                      </div>

                      {/* CTA Arrow */}
                      <div
                        className={`absolute bottom-6 right-6 w-10 h-10 rounded-full
                          flex items-center justify-center transition-all duration-300
                          ${isHovered
                            ? 'bg-[#006F61] text-white translate-x-0 opacity-100'
                            : 'bg-white/10 text-white translate-x-2 opacity-0'
                          }`}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </div>
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
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-16 md:mt-20 text-center transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {/* Help text */}
            <p className="text-white/70 text-sm md:text-base">
              Not sure which adventure is right for you?
            </p>

            {/* CTA Button */}
            <Link href="/contact">
              <button
                className="group inline-flex items-center gap-2 px-6 py-3
                  rounded-full bg-white text-[#006F61] font-semibold
                  hover:bg-white/90 transition-all duration-300
                  shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Let Us Help You Decide</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12
            transition-all duration-700 delay-700
            ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {[
            { value: "100+", label: "Adventures" },
            { value: "4.9★", label: "Rating" },
            { value: "24/7", label: "Support" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {item.value}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
