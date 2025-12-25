import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Mountain,
  Users,
  Award,
  Globe,
  Sparkles,
  MapPin,
  Heart
} from "lucide-react";
import mountainImage1 from "@assets/stock_images/mountain_landscape_s_61ab8953.jpg";
import mountainImage2 from "@assets/stock_images/mountain_landscape_s_c524040f.jpg";
import mountainImage3 from "@assets/stock_images/mountain_landscape_s_e00bb14a.jpg";
import mountainImage4 from "@assets/stock_images/mountain_landscape_s_39d9031b.jpg";

// Key selling points displayed in the benefits list
const whyChooseUs = [
  {
    text: "Tailored adventures for every pace",
    icon: Sparkles,
  },
  {
    text: "Authentic culture and heritage",
    icon: Heart,
  },
  {
    text: "Expert guidance and full support",
    icon: Users,
  },
  {
    text: "Small groups, deeper connections",
    icon: Globe,
  },
  {
    text: "Life-changing experiences",
    icon: Mountain,
  },
  {
    text: "Adventure. Culture. Mountains",
    icon: MapPin,
  },
];

// Company statistics
const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "150+", label: "Expeditions", icon: Mountain },
  { value: "2500+", label: "Happy Travelers", icon: Users },
  { value: "50+", label: "Destinations", icon: Globe },
];

// Image gallery data
const galleryImages = [
  { src: mountainImage1, alt: "Majestic Karakoram peaks at sunrise", span: "large" },
  { src: mountainImage2, alt: "Trekkers on mountain trail", span: "small" },
  { src: mountainImage3, alt: "Traditional mountain village", span: "small" },
  { src: mountainImage4, alt: "Himalayan landscape panorama", span: "medium" },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
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

  // Auto-rotate featured image
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
      data-testid="section-about"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large decorative circle */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full
            bg-[#006F61]/[0.03] blur-3xl"
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full
            bg-[#006F61]/[0.02] blur-3xl"
        />

        {/* Decorative dots pattern */}
        <div className="absolute top-20 left-10 hidden xl:block">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#006F61]/10"
              />
            ))}
          </div>
        </div>

        {/* Decorative line accent */}
        <div
          className="absolute top-1/2 right-0 w-32 h-px
            bg-gradient-to-l from-[#006F61]/20 to-transparent hidden lg:block"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Centered */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-[#006F61]/10 text-[#006F61] text-sm font-semibold mb-6">
            <span>Discover Our Story</span>
          </div>

          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl
            text-gray-900 mb-4 leading-tight">
            Welcome to{" "}
            <span
              className="relative inline-block"
              style={{ color: '#006F61' }}
            >
              North Karakoram
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
            Your licensed guide to the majestic Karakoram and Himalaya ranges
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* LEFT COLUMN: Image Gallery */}
          <div
            className={`relative transition-all duration-700 delay-200
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            {/* Image Gallery with Overlapping Design */}
            <div className="relative h-[500px] md:h-[600px]">

              {/* Main Large Image */}
              <div
                className="absolute top-0 left-0 w-[75%] h-[65%] rounded-2xl overflow-hidden
                  shadow-2xl shadow-black/10 z-20 group"
              >
                <img
                  src={mountainImage1}
                  alt="Majestic Karakoram peaks"
                  className="w-full h-full object-cover transition-transform duration-700
                    group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full
                  bg-white/90 backdrop-blur-sm shadow-lg">
                  <span className="text-sm font-semibold text-gray-800">
                    📍 Karakoram Range
                  </span>
                </div>
              </div>

              {/* Secondary Image - Top Right */}
              <div
                className="absolute top-4 right-0 w-[45%] h-[40%] rounded-2xl overflow-hidden
                  shadow-xl shadow-black/10 z-10 group border-4 border-white"
              >
                <img
                  src={mountainImage2}
                  alt="Mountain trekking adventure"
                  className="w-full h-full object-cover transition-transform duration-700
                    group-hover:scale-105"
                />
              </div>

              {/* Third Image - Bottom Center */}
              <div
                className="absolute bottom-0 left-[15%] w-[50%] h-[45%] rounded-2xl overflow-hidden
                  shadow-xl shadow-black/10 z-30 group border-4 border-white"
              >
                <img
                  src={mountainImage3}
                  alt="Cultural heritage experience"
                  className="w-full h-full object-cover transition-transform duration-700
                    group-hover:scale-105"
                />
              </div>

              {/* Fourth Image - Bottom Right */}
              <div
                className="absolute bottom-8 right-0 w-[40%] h-[35%] rounded-2xl overflow-hidden
                  shadow-xl shadow-black/10 z-20 group border-4 border-white"
              >
                <img
                  src={mountainImage4}
                  alt="Himalayan landscape"
                  className="w-full h-full object-cover transition-transform duration-700
                    group-hover:scale-105"
                />
              </div>

              {/* Experience Badge - Floating Card */}
              {/* <div
                className="absolute -bottom-6 -left-6 md:left-0 z-40
                  bg-white rounded-2xl shadow-2xl shadow-black/10 p-5
                  border border-gray-100 animate-float"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#006F61' }}
                  >
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-500 font-medium">Years of Excellence</div>
                  </div>
                </div>
              </div> */}

              {/* Decorative Element */}
              <div
                className="absolute -top-6 right-[30%] w-24 h-24 rounded-full
                  border-4 border-dashed border-[#006F61]/20 z-0 hidden md:block"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div
            className={`transition-all duration-700 delay-300
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {/* Subtitle Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 rounded-full bg-[#006F61]" />
              <span className="text-[#006F61] font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl
              text-gray-900 mb-6 leading-tight">
              Crafting Unforgettable{" "}
              <span style={{ color: '#006F61' }}>Mountain Adventures</span>{" "}
              Since 2009
            </h3>

            {/* Description Paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Step into the extraordinary with North Karakoram, your licensed guide to the
                majestic Karakoram and Himalaya ranges. We offer trekking, hiking, and
                mountaineering expeditions designed to give you more than just a journey —
                <span className="font-semibold text-gray-800"> an immersive experience</span> of
                the mountains, the people, and the culture.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                What makes us different? Every adventure is personalized, small-group, and
                authentic. Walk through hidden valleys, connect with local communities, and
                discover the rich heritage that thrives alongside the peaks.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-10">
              <h4 className="font-heading font-bold text-xl text-gray-900 mb-5
                flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#006F61]/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#006F61]" />
                </span>
                Why Choose Us?
              </h4>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-xl p-4
                      border border-gray-100 hover:border-[#006F61]/30
                      shadow-sm hover:shadow-lg hover:shadow-[#006F61]/5
                      transition-all duration-300 cursor-default
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{
                      transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms'
                    }}
                    data-testid={`item-benefit-${index}`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon with animated background */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center
                          bg-[#006F61]/10 group-hover:bg-[#006F61]
                          transition-colors duration-300 flex-shrink-0"
                      >
                        <item.icon
                          className="w-5 h-5 text-[#006F61] group-hover:text-white
                            transition-colors duration-300"
                        />
                      </div>

                      {/* Text */}
                      <span className="text-sm md:text-base text-gray-700 font-medium
                        group-hover:text-gray-900 transition-colors">
                        {item.text}
                      </span>
                    </div>

                    {/* Hover accent line */}
                    <div
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full
                        bg-[#006F61] scale-x-0 group-hover:scale-x-100
                        transition-transform duration-300 origin-left"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[800ms]
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Link href="/team">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto text-base px-8 py-6 h-auto
                    bg-[#006F61] hover:bg-[#005a4d] text-white font-semibold
                    shadow-lg shadow-[#006F61]/25 hover:shadow-xl hover:shadow-[#006F61]/30
                    transition-all duration-300 hover:-translate-y-0.5"
                  data-testid="button-about-learn-more"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Meet Our Team
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform
                    group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="group w-full sm:w-auto text-base px-8 py-6 h-auto
                    border-2 border-[#006F61] text-[#006F61] font-semibold
                    hover:bg-[#006F61] hover:text-white
                    transition-all duration-300 hover:-translate-y-0.5"
                  data-testid="button-about-contact"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div
          className={`mt-20 md:mt-28 transition-all duration-700 delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="relative bg-gradient-to-br from-[#006F61] to-[#005249]
              rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full
                bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full
                bg-white/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl
                      bg-white/10 backdrop-blur-sm border border-white/20
                      flex items-center justify-center
                      group-hover:bg-white/20 group-hover:scale-110
                      transition-all duration-300"
                  >
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>

                  <div className="text-white/70 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-6 left-6 w-20 h-20 border border-white/10 rounded-full" />
            <div className="absolute bottom-6 right-6 w-32 h-32 border border-white/10 rounded-full" />
          </div>
        </div> */}

        {/* Trust Badges / Partners */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">
            Trusted & Certified By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* Placeholder for partner/certification logos */}
            {['Tourism Board', 'Safety Certified', 'Eco Friendly', 'Local Partner'].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-gray-50 border border-gray-100"
              >
                <Check className="w-4 h-4 text-[#006F61]" />
                <span className="text-gray-600 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
