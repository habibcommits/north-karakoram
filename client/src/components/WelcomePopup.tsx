import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Mountain,
  MapPin,
  Phone,
  Sparkles,
  ChevronRight,
  Star,
  Shield,
  X,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/white_logo_(3)_1766041182585.png";

const features = [
  {
    icon: Mountain,
    title: "Expert Expeditions",
    description: "K2, Nanga Parbat, Broad Peak & More",
  },
  {
    icon: MapPin,
    title: "Based in Skardu",
    description: "Gilgit Baltistan, Pakistan",
  },
  {
    icon: Phone,
    title: "Contact Us",
    description: "+92 355 5718293",
  },
];

const stats = [
  { value: "150+", label: "Expeditions" },
  { value: "5000+", label: "Clients" },
  { value: "15+", label: "Years" },
];

export function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("welcomePopupSeen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true);
        setTimeout(() => setIsAnimating(true), 100);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setOpen(false);
      sessionStorage.setItem("welcomePopupSeen", "true");
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="p-0 gap-0 border-0 overflow-hidden w-[92vw] max-w-[400px] sm:max-w-[480px] md:max-w-[520px] rounded-2xl shadow-2xl"
        data-testid="welcome-popup"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Header Section with Gradient Background */}
        <div
          className="relative px-4 sm:px-6 pt-6 sm:pt-8 pb-8 sm:pb-10 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #006F61 0%, #004d44 100%)",
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-white/5 blur-2xl" />

            {/* Animated Stars - Hidden on very small screens */}
            <div className="absolute top-4 right-12 animate-pulse hidden xs:block">
              <Sparkles className="w-3 h-3 text-white/20" />
            </div>
            <div
              className="absolute bottom-6 left-8 animate-pulse hidden sm:block"
              style={{ animationDelay: "0.5s" }}
            >
              <Star className="w-2.5 h-2.5 text-white/15" />
            </div>
          </div>

          <div
            className={`relative z-10 text-center transition-all duration-500 ${isAnimating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
              }`}
          >
            {/* Logo */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div
                className={`relative transition-all duration-500 delay-75 ${isAnimating ? "scale-100 opacity-100" : "scale-90 opacity-0"
                  }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-white/15">
                  <img
                    src={logoImage}
                    alt="North Karakoram"
                    className="h-10 sm:h-12 md:h-14 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Welcome Badge */}
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-2 sm:mb-3 transition-all duration-500 delay-100 ${isAnimating
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
                }`}
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span className="text-white/90 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                Welcome Explorer
              </span>
            </div>

            {/* Title */}
            <h2
              className={`font-heading font-bold text-lg sm:text-xl md:text-2xl text-white mb-1 sm:mb-1.5 transition-all duration-500 delay-150 ${isAnimating
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
                }`}
            >
              North Karakoram
            </h2>

            {/* Subtitle */}
            <p
              className={`text-white/75 text-xs sm:text-sm transition-all duration-500 delay-200 ${isAnimating
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
                }`}
            >
              Your Gateway to Pakistan's Majestic Peaks
            </p>
          </div>

          {/* Stats Row */}
          {/* <div
            className={`relative z-10 flex justify-center gap-6 sm:gap-8 mt-5 sm:mt-6 transition-all duration-500 delay-250 ${isAnimating
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
              }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[10px] sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Content Section */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-white">
          {/* Features */}
          <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`w-[90%] group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 ${isAnimating
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-3"
                  }`}
                style={{
                  transitionDelay: isAnimating
                    ? `${350 + index * 75}ms`
                    : "0ms",
                }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <feature.icon
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: "#006F61" }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight">
                    {feature.title}
                  </p>
                  <p className="text-gray-500 text-[10px] sm:text-xs truncate leading-tight mt-0.5">
                    {feature.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`space-y-2 sm:space-y-0 flex flex-col lg:flex-row gap-4 justify-center transition-all duration-500 ${isAnimating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
              }`}
            style={{ transitionDelay: isAnimating ? "600ms" : "0ms" }}
          >
            <Button
              onClick={handleClose}
              className="w-[90%] md:w-fit h-10 sm:h-11 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#006F61" }}
              data-testid="button-close-popup"
            >
              Explore Adventures
            </Button>

            <Button
              variant="outline"
              className="w-[90%] md:w-fit sm:flex-1 h-10 sm:h-11 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl border-2 border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300 group"
              onClick={() => {
                window.open("https://wa.me/923555718293", "_blank");
                handleClose();
              }}
            >
              <span className="text-gray-700 group-hover:text-gray-900">
                WhatsApp Us
              </span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
