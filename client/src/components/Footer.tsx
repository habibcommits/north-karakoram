import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import {
  SiWhatsapp,
  SiYoutube,
  SiTiktok,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";
import logoImage from "@assets/logo-white-transparent.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Expeditions", href: "/expedition" },
  { label: "Trekking", href: "/trekking" },
  { label: "Tours", href: "/tour" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const usefulLinks = [
  { label: "Pakistan Visa", href: "/pakistan-visa" },
  { label: "Payment Method", href: "/payment-method" },
  { label: "Peak Royalty", href: "/peak-royalty" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: SiFacebook,
    href: "https://www.facebook.com/profile.php?id=100093782443750",
    hoverColor: "#1877F2",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/northkarakoram",
    hoverColor: "#E4405F",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    href: "https://youtube.com/@northkarakoram",
    hoverColor: "#FF0000",
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    href: "https://www.tiktok.com/@northkarakoram",
    hoverColor: "#ffffff",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative text-white"
      style={{ backgroundColor: "#006F61" }}
      data-testid="footer"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div
          className={`flex justify-between flex-wrap gap-x-6 gap-y-8 lg:gap-x-8 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Brand Column */}
          <div className="w-full sm:w-auto sm:flex-1 lg:max-w-[240px]">
            <Link
              href="/"
              className="inline-block mb-3"
              data-testid="link-footer-logo"
            >
              <img
                src={logoImage}
                alt="North Karakoram"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Professional trekking, mountaineering, and tour services led by
              experienced local guides in the Karakoram.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                const isHovered = hoveredSocial === social.name;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-md flex items-center justify-center
                      border border-white/20 transition-all duration-300
                      hover:-translate-y-0.5"
                    style={{
                      backgroundColor: isHovered
                        ? social.hoverColor
                        : "rgba(255, 255, 255, 0.1)",
                      borderColor: isHovered ? social.hoverColor : undefined,
                    }}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <IconComponent className="w-3.5 h-3.5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-[calc(50%-12px)] sm:w-auto sm:min-w-[120px]">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white
                      transition-colors duration-200 text-[13px]"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="w-[calc(50%-12px)] sm:w-auto sm:min-w-[130px]">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Useful Links
            </h3>
            <ul className="space-y-1.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white
                      transition-colors duration-200 text-[13px]"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-auto sm:min-w-[180px]">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/50 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-[13px] leading-tight">
                  Sathang, Skardu, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
                <a
                  href="tel:+923330228111"
                  className="text-white/70 text-[13px] hover:text-white transition-colors"
                >
                  +92 333 0228111
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
                <a
                  href="mailto:info@northkarakoram.com"
                  className="text-white/70 text-[13px] hover:text-white transition-colors"
                >
                  info@northkarakoram.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <SiWhatsapp className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <a
                  href="https://wa.me/923330228111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-[13px] hover:text-white transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="w-full sm:w-auto sm:flex-1 lg:max-w-[200px]">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Find Us
            </h3>
            <div className="relative rounded-lg overflow-hidden h-28 sm:h-32 border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3257.5303149828032!2d75.63823007576941!3d35.267938972723485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDE2JzA0LjYiTiA3NcKwMzgnMjYuOSJF!5e0!3m2!1sen!2s!4v1766220460032!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="map-skardu"
                title="North Karakoram Location"
              />
              <a
                href="https://maps.google.com/?q=35.267939,75.638230"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-transparent hover:bg-black/20 transition-colors
                  flex items-end justify-center pb-2 opacity-0 hover:opacity-100"
              >
                <span className="text-[11px] text-white bg-black/60 px-2 py-1 rounded flex items-center gap-1">
                  Open Maps <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-8 pt-5 border-t border-white/10 transition-all duration-700 delay-200
            ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-white/40 text-[11px] text-center sm:text-left">
              © {currentYear} North Karakoram. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-3 text-[11px] text-white/40">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/terms" className="hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-50 w-9 h-9 rounded-full
          flex items-center justify-center shadow-lg border border-white/20
          transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
          ${showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
        style={{ backgroundColor: "#005249" }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 text-white" />
      </button> */}
    </footer>
  );
}
