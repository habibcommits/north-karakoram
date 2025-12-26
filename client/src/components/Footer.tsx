import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
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
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: SiFacebook,
    href: "https://www.facebook.com/profile.php?id=100093782443750&rdid=j90AVS0yTRTTZeBk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AhZLfuCzQ%2F#",
    hoverColor: "#1877F2",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/northkarakoram?igsh=MWlseHgycWNybWx2MA%3D%3D&utm_source=qr",
    hoverColor: "#E4405F",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    href: "https://youtube.com/@northkarakoram?si=PJHwQm8bP2nMLBwe",
    hoverColor: "#FF0000",
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    href: "https://www.tiktok.com/@northkarakoram?_r=1&_t=ZS-92TItqmrAx7",
    hoverColor: "#ffffff",
  },
  // {
  //   name: "WhatsApp",
  //   icon: SiWhatsapp,
  //   href: "https://wa.me/923330228111",
  //   hoverColor: "#25D366",
  // },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Brand Column */}
          <div className="col-span-2 xl:col-span-4">
            <Link
              href="/"
              className="inline-block mb-4"
              data-testid="link-footer-logo"
            >
              <img
                src={logoImage}
                alt="North Karakoram"
                className="h-16 md:h-20 w-auto"
              />
            </Link>

            <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-xs">
              Professional trekking, mountaineering, and tour services led by
              experienced local guides in the Karakoram.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                const isHovered = hoveredSocial === social.name;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center
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
                    <IconComponent className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-white/75 hover:text-white
                      transition-colors duration-200 text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-white/75 hover:text-white
                      transition-colors duration-200 text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <span className="text-white/75 text-sm">
                  Near Hishpar Hotel, Sathang, Skardu, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/60 flex-shrink-0" />
                <a
                  href="tel:+923330228111"
                  className="text-white/75 text-sm hover:text-white transition-colors"
                >
                  +92 333 0228111
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/60 flex-shrink-0" />
                <a
                  href="mailto:info@northkarakoram.com"
                  className="text-white/75 text-sm hover:text-white transition-colors"
                >
                  info@northkarakoram.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <SiWhatsapp className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href="https://wa.me/923330228111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 text-sm hover:text-white transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  +92 333 0228111
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Location
            </h3>
            <div className="relative rounded-xl overflow-hidden h-36 lg:h-40 border border-white/20">
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
              {/* Map overlay for click */}
              <a
                href="https://maps.google.com/?q=35.267939,75.638230"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-transparent hover:bg-white/5 transition-colors
                  flex items-end justify-center pb-2 opacity-0 hover:opacity-100"
              >
                <span className="text-xs text-white bg-black/50 px-2 py-1 rounded flex items-center gap-1">
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-10 pt-6 border-t border-white/15 transition-all duration-700 delay-200
            ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/50 text-xs text-center sm:text-left">
              © {currentYear} North Karakoram. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-lg
          flex items-center justify-center shadow-lg
          transition-all duration-300 hover:-translate-y-0.5
          ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "#005249" }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 text-white" />
      </button> */}
    </footer>
  );
}
