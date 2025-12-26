import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/lib/tripData";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mountain,
  Users,
  Star,
  Shield,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Slide content configuration
const slides = [
  {
    badge: "Elite Expeditions",
    subtitle: "Conquer the Legendary",
    title: "8000m",
    titleAccent: "Giants",
    highlight: "K2 • Broad Peak • Nanga Parbat",
    description:
      "Professional mountaineering expeditions to the world's most challenging summits with certified high-altitude guides.",
    location: "Karakoram Range, Pakistan",
  },
  {
    badge: "Iconic Treks",
    subtitle: "Journey to the Throne Room",
    title: "Mountain",
    titleAccent: "Gods",
    highlight: "Concordia & Beyond",
    description:
      "Trek to K2 Basecamp, cross Gondogoro La, and witness five 8000m peaks from the world's ultimate mountain amphitheater.",
    location: "Baltoro Glacier, Gilgit-Baltistan",
  },
  {
    badge: "Scenic Adventures",
    subtitle: "Discover Pakistan's Hidden",
    title: "Valley",
    titleAccent: "Treasures",
    highlight: "Hunza • Skardu • Deosai",
    description:
      "Explore ancient Silk Road heritage, mystical Fairy Meadows, and the enchanting valleys of the north.",
    location: "Northern Areas, Pakistan",
  },
  {
    badge: "Technical Climbing",
    subtitle: "Scale the World's Greatest",
    title: "Granite",
    titleAccent: "Spires",
    highlight: "Trango Towers & Beyond",
    description:
      "Technical rock climbing expeditions to legendary formations including Trango Tower and Nameless Tower.",
    location: "Trango Glacier, Karakoram",
  },
];

// Stats for trust indicators
const stats = [
  { icon: Mountain, value: "150+", label: "Expeditions" },
  { icon: Users, value: "2,500+", label: "Happy Travelers" },
  { icon: Star, value: "4.9", label: "Rating" },
  { icon: Shield, value: "100%", label: "Safety Record" },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    if (!loadedImages.has(nextIndex)) {
      const img = new Image();
      img.src = heroImages[nextIndex];
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, nextIndex]));
      };
    }
  }, [currentSlide, loadedImages]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning, currentSlide]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] sm:min-h-[700px] max-h-[1200px] overflow-hidden bg-black">
      {/* Background Images with Elegant Ken Burns */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-[1200ms] ease-out",
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-[1.02]"
          )}
        >
          <div
            className={cn(
              "w-full h-full",
              index === currentSlide && "animate-subtle-zoom"
            )}
          >
            <img
              src={image}
              alt={slides[index]?.title || "Mountain landscape"}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </div>
      ))}

      {/* Refined Gradient Overlays - Lighter for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* Decorative Elements - Minimal */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner accent */}
        <div className="absolute top-32 right-12 w-24 h-24 border border-white/5 rounded-full hidden xl:block" />
        <div className="absolute top-36 right-16 w-16 h-16 border border-white/10 rounded-full hidden xl:block" />

        {/* Vertical line accent - left side */}
        <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
          <div className="w-2 h-2 rounded-full bg-[#006F61]" />
          <div className="w-px h-16 bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
        </div>
      </div>

      {/* Main Content max-w-7xl */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-5xl pt-16 sm:pt-20 lg:pt-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 ease-out",
                  index === currentSlide
                    ? "opacity-100 translate-y-0 relative"
                    : "opacity-0 translate-y-12 absolute top-0 left-0 pointer-events-none"
                )}
              >
                {/* Badge - Minimal elegant style */}
                <div
                  className={cn(
                    "flex items-center gap-3 mb-4 sm:mb-6 transition-all duration-600 delay-100",
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6"
                  )}
                >
                  <span className="w-8 sm:w-12 h-px bg-[#006F61]" />
                  <span className="text-white/70 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
                    {slide.badge}
                  </span>
                </div>

                {/* Subtitle */}
                <p
                  className={cn(
                    "text-white/60 text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-2 sm:mb-3 transition-all duration-600 delay-150",
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  )}
                >
                  {slide.subtitle}
                </p>

                {/* Main Title - Split design */}
                <div
                  className={cn(
                    "mb-4 sm:mb-6 transition-all duration-600 delay-200",
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  )}
                >
                  <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1] tracking-tight">
                    {slide.title}{" "}
                    <span className="text-white/90">{slide.titleAccent}</span>
                  </h1>
                </div>

                {/* Highlight with accent line */}
                <div
                  className={cn(
                    "flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 transition-all duration-600 delay-250",
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  )}
                >
                  <span className="w-1 h-6 sm:h-8 bg-[#006F61] rounded-full flex-shrink-0" />
                  <h2 className="text-white/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                    {slide.highlight}
                  </h2>
                </div>

                {/* Description */}
                <p
                  className={cn(
                    "text-white/50 text-sm sm:text-base md:text-lg max-w-lg lg:max-w-xl leading-relaxed mb-4 sm:mb-6 transition-all duration-600 delay-300",
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  )}
                >
                  {slide.description}
                </p>

                {/* Location Tag */}
                <div
                  className={cn(
                    "inline-flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-8 sm:mb-10 transition-all duration-600 delay-350",
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  )}
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#006F61]" />
                  <span>{slide.location}</span>
                </div>

                {/* CTA Buttons - Clean white primary */}
                <div
                  className={cn(
                    "flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-600 delay-400",
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  )}
                >
                  <Link href="/expedition">
                    <Button
                      size="lg"
                      className="group w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 h-auto text-sm sm:text-base font-semibold
                        bg-white text-gray-900 hover:bg-gray-100
                        shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30
                        transition-all duration-300 hover:-translate-y-0.5 rounded-lg sm:rounded-xl"
                    >
                      Explore Expeditions
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="group w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 h-auto text-sm sm:text-base font-semibold
                        bg-white/5 backdrop-blur-sm border border-white/20 text-white
                        hover:bg-white/10 hover:border-white/40
                        transition-all duration-300 rounded-lg sm:rounded-xl"
                    >
                      Plan Your Journey
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls - Refined bottom center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div
          className="flex items-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6 py-3 sm:py-4 rounded-full
          bg-white/5 backdrop-blur-md border border-white/10"
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-white/20 text-white/70
              flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:text-white
              transition-all duration-300 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-1.5 sm:gap-2 items-center px-1 sm:px-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "relative h-1 sm:h-1.5 rounded-full transition-all duration-500 overflow-hidden",
                  index === currentSlide
                    ? "w-8 sm:w-10 lg:w-12 bg-white/30"
                    : "w-1.5 sm:w-2 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              >
                {/* Progress bar for active slide */}
                {index === currentSlide && isAutoPlaying && (
                  <span
                    className="absolute inset-0 bg-white rounded-full origin-left animate-progress"
                    style={{ animationDuration: "7s" }}
                  />
                )}
                {index === currentSlide && !isAutoPlaying && (
                  <span className="absolute inset-0 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-white/20 text-white/70
              flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:text-white
              transition-all duration-300 disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white/10" />

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 text-white/50
              items-center justify-center hover:bg-white/10 hover:text-white/80
              transition-all duration-300"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            ) : (
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Stats Bar - Bottom, elegant minimal */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block">
        <div className="bg-gradient-to-t from-black/60 via-black/30 to-transparent pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-8 xl:px-12">
            <div className="flex justify-end items-center gap-8 xl:gap-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/60 hover:text-white/80 transition-colors group"
                >
                  <stat.icon className="w-4 h-4 text-[#006F61] group-hover:text-[#00897b] transition-colors" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-white font-semibold text-base xl:text-lg">
                      {stat.value}
                    </span>
                    <span className="text-[10px] xl:text-xs uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Slide Counter - Right Side */}
      <div className="absolute right-4 sm:right-6 lg:right-10 xl:right-16 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-3">
        <span className="text-white font-bold text-xl lg:text-2xl xl:text-3xl tabular-nums">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <div className="w-px h-8 lg:h-12 bg-white/20" />
        <span className="text-white/30 text-xs lg:text-sm">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll Indicator - Right bottom */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 lg:bottom-12 right-4 sm:right-6 lg:right-10 xl:right-16 z-20
          hidden md:flex flex-col items-center gap-2
          text-white/30 hover:text-white/60 transition-all duration-300 group"
        aria-label="Scroll to explore"
      >
        <span
          className="text-[10px] font-medium tracking-[0.15em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div
          className="w-5 h-8 rounded-full border border-current
          flex justify-center items-start pt-2 group-hover:border-white/40 transition-colors"
        >
          <span className="w-0.5 h-1.5 bg-current rounded-full animate-bounce" />
        </div>
      </button>

      {/* Mobile Stats - Bottom of screen on mobile */}
      <div className="absolute bottom-20 sm:bottom-24 left-0 right-0 z-10 lg:hidden px-4 sm:px-6">
        <div className="flex justify-center gap-4 sm:gap-6">
          {stats.slice(0, 3).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <stat.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#006F61]" />
                <span className="text-white font-semibold text-sm sm:text-base">
                  {stat.value}
                </span>
              </div>
              <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
