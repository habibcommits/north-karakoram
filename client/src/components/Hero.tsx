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
  Compass,
  Play,
  Pause
} from "lucide-react";

// Slide content configuration with enhanced content
const slides = [
  {
    badge: "Elite Expeditions",
    subtitle: "Conquer the Legendary",
    title: "8000m Giants",
    highlight: "K2 • Broad Peak • Nanga Parbat",
    description: "Professional mountaineering expeditions to K2, Broad Peak, Nanga Parbat, Gasherbrum I & II – the world's most challenging and rewarding summits with certified guides.",
    location: "Karakoram Range, Pakistan",
  },
  {
    badge: "Iconic Treks",
    subtitle: "Journey to the Throne Room of",
    title: "Mountain",
    highlight: "Concordia & Beyond",
    description: "Trek to K2 Basecamp, cross Gondogoro La, explore Snow Lake, and witness five 8000m peaks from Concordia – the world's ultimate mountain amphitheater.",
    location: "Baltoro Glacier, Gilgit-Baltistan",
  },
  {
    badge: "Scenic Adventures",
    subtitle: "Discover Pakistan's Hidden",
    title: "Valley Treasures",
    highlight: "Hunza • Skardu • Deosai",
    description: "Explore ancient Silk Road heritage in Hunza, mystical Fairy Meadows, the world's second-highest plateau Deosai, and the enchanting valleys of the north.",
    location: "Northern Areas, Pakistan",
  },
  {
    badge: "Technical Climbing",
    subtitle: "Scale the World's Greatest",
    title: "Granite Spires",
    highlight: "Trango Towers & Beyond",
    description: "Technical rock climbing expeditions to legendary formations including Trango Tower, Great Tower, Nameless Tower, Shipton Spire, and Amin Braq.",
    location: "Trango Glacier, Karakoram",
  },
];

// Trust indicators / stats
const stats = [
  { icon: Mountain, value: "150+", label: "Expeditions Completed" },
  { icon: Users, value: "2,500+", label: "Happy Travelers" },
  { icon: Star, value: "4.9/5", label: "Customer Rating" },
  { icon: Shield, value: "100%", label: "Safety Record" },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

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
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full min-h-screen min-h-[700px] max-h-[1200px] overflow-hidden bg-gray-900 pt-12"
      data-testid="section-hero"
    >
      {/* Background Images with Ken Burns Effect */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide
            ? "opacity-100 scale-100"
            : "opacity-0 scale-110"
            }`}
        >
          <div
            className={`w-full h-full ${index === currentSlide ? "animate-ken-burns" : ""
              }`}
          >
            <img
              src={image}
              alt={`${slides[index]?.title || 'Mountain landscape'}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>

          {/* Enhanced gradient overlays for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Decorative geometric elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />

        {/* Decorative corner accent */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full hidden lg:block" />
        <div className="absolute top-24 right-24 w-24 h-24 border border-[#006F61]/30 rounded-full hidden lg:block" />

        {/* Side line decoration */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/40 to-white/20" />
          <div className="w-3 h-3 rounded-full bg-[#006F61] shadow-lg shadow-[#006F61]/50" />
          <div className="w-px h-24 bg-gradient-to-b from-white/20 via-white/40 to-transparent" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-full flex flex-col justify-center pb-32 lg:pb-40">
          <div className="max-w-5xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${index === currentSlide ? "relative" : "absolute"
                  } transition-all duration-700 ease-out ${index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
              >
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-[#006F61] text-white text-sm font-semibold mb-6
                    shadow-lg shadow-black/30 border border-[#006F61]/50
                    transition-all duration-500 delay-100
                    ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                >
                  <Compass className="w-4 h-4" />
                  <span className="tracking-wide">{slide.badge}</span>
                </div>

                {/* Subtitle */}
                <p
                  className={`text-white/90 text-lg md:text-xl lg:text-2xl mb-2
                    font-light tracking-wide transition-all duration-500 delay-150
                    drop-shadow-lg
                    ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                >
                  {slide.subtitle}
                </p>

                {/* Main Title */}
                <h1
                  className={`font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                    text-white mb-1 leading-[1.05] tracking-tight transition-all duration-500 delay-200
                    ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)' }}
                >
                  {slide.title}
                </h1>

                {/* Highlight Text - With background for visibility */}
                <div
                  className={`inline-block mb-6 transition-all duration-500 delay-[250ms]
                    ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <h2
                    className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                      leading-tight px-4 py-2 -ml-4 rounded-lg
                      bg-gradient-to-r from-[#006F61]/90 to-[#006F61]/70
                      text-white backdrop-blur-sm
                      shadow-xl shadow-[#006F61]/20
                      border-l-4 border-white/30"
                  >
                    {slide.highlight}
                  </h2>
                </div>

                {/* Description */}
                <p
                  className={`text-white/90 text-base sm:text-lg md:text-xl max-w-2xl
                    leading-relaxed mb-4 transition-all duration-500 delay-300
                    ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
                >
                  {slide.description}
                </p>

                {/* Location Tag */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    bg-white/10 backdrop-blur-sm border border-white/20
                    text-white/90 text-sm mb-8
                    transition-all duration-500 delay-[350ms]
                    ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <MapPin className="w-4 h-4 text-[#006F61]" />
                  <span>{slide.location}</span>
                </div>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 delay-[400ms]
                    ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <Link href="/expedition">
                    <Button
                      size="lg"
                      className="w-full md:w-fit group text-base sm:text-lg px-8 py-6 h-auto
                        bg-[#006F61] hover:bg-[#005a4d] text-white font-semibold
                        shadow-xl shadow-black/30 border border-[#006F61]
                        transition-all duration-300
                        hover:shadow-2xl hover:shadow-[#006F61]/40
                        hover:-translate-y-1 active:translate-y-0"
                      data-testid="button-hero-explore"
                    >
                      Explore Expeditions
                      <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full md:w-fit group text-base sm:text-lg px-8 py-6 h-auto
                        bg-white/10 backdrop-blur-md
                        border-2 border-white/40 text-white font-semibold
                        hover:bg-white hover:text-[#006F61] hover:border-white
                        shadow-lg shadow-black/20
                        transition-all duration-300
                        hover:-translate-y-1 active:translate-y-0"
                      data-testid="button-hero-contact"
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

      {/* Navigation Controls */}
      <div className="absolute bottom-4 lg:bottom-16 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-4 sm:gap-6 px-4 py-3 rounded-full
          bg-black/40 backdrop-blur-md border border-white/10 shadow-xl">

          {/* Previous Button */}
          <Button
            size="icon"
            variant="ghost"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full
              bg-white/10 text-white border border-white/20
              hover:bg-[#006F61] hover:border-[#006F61]
              transition-all duration-300 hover:scale-105"
            onClick={prevSlide}
            data-testid="button-hero-prev"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex gap-2 sm:gap-3 items-center px-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`relative h-2.5 rounded-full transition-all duration-500
                  overflow-hidden ${index === currentSlide
                    ? "w-10 sm:w-12 bg-[#006F61]"
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                onClick={() => goToSlide(index)}
                data-testid={`button-hero-dot-${index}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              >
                {/* Progress bar animation for active slide */}
                {index === currentSlide && isAutoPlaying && (
                  <span
                    className="absolute inset-0 bg-white/30 origin-left animate-progress"
                    style={{ animationDuration: '6s' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <Button
            size="icon"
            variant="ghost"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full
              bg-white/10 text-white border border-white/20
              hover:bg-[#006F61] hover:border-[#006F61]
              transition-all duration-300 hover:scale-105"
            onClick={nextSlide}
            data-testid="button-hero-next"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          {/* Play/Pause Button */}
          <div className="hidden sm:block w-px h-6 bg-white/20" />
          <Button
            size="icon"
            variant="ghost"
            className="hidden sm:flex w-10 h-10 rounded-full
              bg-white/10 text-white border border-white/20
              hover:bg-[#006F61] hover:border-[#006F61]
              transition-all duration-300"
            onClick={toggleAutoPlay}
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator - Right Side */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 right-8 z-30 hidden md:flex flex-col items-center gap-3
          text-white/60 hover:text-white transition-all duration-300 group"
        aria-label="Scroll to explore"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase
          writing-mode-vertical rotate-180"
          style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="w-5 h-10 rounded-full border-2 border-current
          flex justify-center items-start pt-2
          group-hover:border-[#006F61] transition-colors">
          <span className="w-1 h-2 bg-current rounded-full animate-bounce
            group-hover:bg-[#006F61]" />
        </div>
      </button>
    </section>
  );
}
