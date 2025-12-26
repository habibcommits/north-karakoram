import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Michael Chen",
    country: "USA",
    role: "Adventure Enthusiast",
    rating: 5,
    text: "North Karakoram made our K2 Base Camp trek an unforgettable experience. The guides were incredibly knowledgeable and the logistics were flawless. Every detail was perfectly planned.",
    initials: "MC",
    expedition: "K2 Base Camp Trek",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    country: "United Kingdom",
    role: "Professional Climber",
    rating: 5,
    text: "Professional team, amazing scenery, and perfect organization. Our expedition to Broad Peak was challenging but the support was outstanding. Would highly recommend!",
    initials: "SJ",
    expedition: "Broad Peak Expedition",
  },
  {
    id: 3,
    name: "Hans Mueller",
    country: "Germany",
    role: "Mountain Guide",
    rating: 5,
    text: "I've been on many mountain expeditions, but North Karakoram's attention to safety and client care is unmatched. Their expertise is truly world-class.",
    initials: "HM",
    expedition: "Gasherbrum II Summit",
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    country: "Japan",
    role: "Travel Photographer",
    rating: 5,
    text: "The Fairy Meadows trek exceeded all expectations. The views of Nanga Parbat were breathtaking. Captured some of the best shots of my career!",
    initials: "YT",
    expedition: "Fairy Meadows Trek",
  },
  {
    id: 5,
    name: "Emma Williams",
    country: "Australia",
    role: "Adventure Blogger",
    rating: 5,
    text: "An absolutely world-class experience! The team's expertise and attention to detail made our Hunza Valley trek the highlight of our lives.",
    initials: "EW",
    expedition: "Hunza Valley Tour",
  },
  {
    id: 6,
    name: "Diego Rodriguez",
    country: "Spain",
    role: "Expedition Leader",
    rating: 5,
    text: "Exceeded expectations in every way. The mountain guides are experienced professionals and the camps were comfortable despite the altitude.",
    initials: "DR",
    expedition: "Spantik Expedition",
  },
];

export function ClientReviews() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Get visible reviews (3 at a time on desktop)
  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      result.push({ ...reviews[index], displayIndex: i });
    }
    return result;
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
      data-testid="section-reviews"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient blobs */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ backgroundColor: "#006F61" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.02]"
          style={{ backgroundColor: "#006F61" }}
        />

        {/* Quote decoration */}
        <div className="absolute top-20 right-20 hidden xl:block">
          <Quote
            className="w-32 h-32 opacity-[0.03]"
            style={{ color: "#006F61" }}
          />
        </div>

        {/* Decorative dots pattern - left side */}
        <div className="absolute bottom-40 left-10 hidden xl:block">
          <div className="grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              />
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
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#006F61" }} />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "#006F61" }}
            >
              TESTIMONIALS
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            What Our{" "}
            <span className="relative inline-block" style={{ color: "#006F61" }}>
              Adventurers
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
            </span>{" "}
            Say
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Real experiences from travelers who have explored the majestic
            mountains of Pakistan with our expert team.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div
          className={`relative transition-all duration-700 delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-lg border-gray-200
                hover:shadow-xl hover:border-gray-300 transition-all duration-300
                hover:-translate-x-1"
              style={{ color: "#006F61" }}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          <div className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg border-gray-200
                hover:shadow-xl hover:border-gray-300 transition-all duration-300
                hover:translate-x-1"
              style={{ color: "#006F61" }}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getVisibleReviews().map((review, index) => {
              const isHovered = hoveredCard === review.id;

              return (
                <div
                  key={`${review.id}-${currentIndex}-${index}`}
                  className={`transition-all duration-700
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                  }}
                  onMouseEnter={() => setHoveredCard(review.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="group relative h-full bg-white rounded-2xl p-6 md:p-8
                      shadow-sm hover:shadow-2xl hover:shadow-black/10
                      border border-gray-100 hover:border-gray-200
                      transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Quote Icon */}
                    <div
                      className="absolute top-6 right-6 w-12 h-12 rounded-full
                        flex items-center justify-center transition-all duration-300
                        group-hover:scale-110"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <Quote className="w-5 h-5" style={{ color: "#006F61" }} />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                      "{review.text}"
                    </blockquote>

                    {/* Expedition Tag */}
                    <div className="mb-6">
                      <span
                        className="inline-flex items-center px-3 py-1.5 rounded-full
                          text-xs font-semibold"
                        style={{
                          backgroundColor: "rgba(0, 111, 97, 0.1)",
                          color: "#006F61",
                        }}
                      >
                        {review.expedition}
                      </span>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      {/* Avatar */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center
                          text-white font-bold text-sm transition-transform duration-300
                          group-hover:scale-110"
                        style={{ backgroundColor: "#006F61" }}
                      >
                        {review.initials}
                      </div>

                      {/* Name & Details */}
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <p className="text-sm text-gray-500">
                          {review.role} • {review.country}
                        </p>
                      </div>
                    </div>

                    {/* Hover accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                        transition-transform duration-300 origin-left scale-x-0
                        group-hover:scale-x-100"
                      style={{ backgroundColor: "#006F61" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full"
              style={{ color: "#006F61", borderColor: "#006F61" }}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="w-12 h-12 rounded-full"
              style={{ color: "#006F61", borderColor: "#006F61" }}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div
          className={`flex justify-center gap-2 mt-10 transition-all duration-700 delay-400
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300
                ${index === currentIndex
                  ? "w-8"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              style={
                index === currentIndex ? { backgroundColor: "#006F61" } : {}
              }
              aria-label={`Go to review ${index + 1}`}
              data-testid={`button-review-dot-${index}`}
            />
          ))}
        </div>

        {/* Stats Row */}
        {/* <div
          className={`mt-16 md:mt-20 transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
            style={{ backgroundColor: "rgba(0, 111, 97, 0.05)" }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-50"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.05)" }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "2,500+", label: "Happy Travelers" },
                { value: "4.9/5", label: "Average Rating" },
                { value: "98%", label: "Would Recommend" },
                { value: "15+", label: "Years of Trust" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: "#006F61" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
