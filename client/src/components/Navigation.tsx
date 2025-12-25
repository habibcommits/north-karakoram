import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@assets/logo-white-transparent.png";
import { SiTiktok } from "react-icons/si";

interface NavigationProps {
  onLanguageChange?: (language: string) => void;
}

interface NavItem {
  label: string;
  href: string;
}

interface NavCategory {
  [key: string]: NavItem[];
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

// --- DATA STRUCTURES ---

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
];

const expeditionItems: NavCategory = {
  "8000m Peaks": [
    { label: "K2 Expedition", href: "/expedition/k2-expedition" },
    { label: "Broad Peak Expedition", href: "/expedition/broad-expedition" },
    { label: "Nanga Parbat Expedition", href: "/expedition/nanga-parbat-expedition" },
    { label: "Gasherbrum I Expedition", href: "/expedition/gasherbrum-I-expedition" },
    { label: "Gasherbrum II Expedition", href: "/expedition/gasherbrum-II-expedition" },
  ],
  "7000m Peaks": [
    { label: "Spantik Expedition", href: "/expedition/spantik-expedition" },
    { label: "Gasherbrum III Expedition", href: "/expedition/gasherbrum-iii-expedition" },
    { label: "Gasherbrum IV Expedition", href: "/expedition/gasherbrum-iv-expedition" },
    { label: "Masherbrum Expedition", href: "/expedition/masherbrum-expedition" },
    { label: "Rakaposhi Expedition", href: "/expedition/rakaposhi-expedition" },
    { label: "Chogolisa Expedition", href: "/expedition/chogolisa-expedition" },
    { label: "Trich Mir Expedition", href: "/expedition/trich-mir-expedition" },
  ],
  "6000m Peaks": [
    { label: "Laila Peak Expedition", href: "/expedition/laila-expedition" },
    { label: "Pastore Expedition", href: "/expedition/pastore-expedition" },
    { label: "Gondogoro Expedition", href: "/expedition/gondogoro-expedition" },
    { label: "Bondit Expedition", href: "/expedition/bondit-expedition" },
    { label: "K7 Expedition", href: "/expedition/k7-expedition" },
    { label: "Drifika Expedition", href: "/expedition/drifika-expedition" },
    { label: "Cigarette Expedition", href: "/expedition/cigarette-expedition" },
    { label: "Khosar Gang Expedition", href: "/expedition/khosar-gang-expedition" },
  ],
};

const trekkingItems: NavItem[] = [
  { label: "K2 & Gondogoro La Trek", href: "/trekking/k2-gondogoro-trek" },
  { label: "K2 Base Camp Concordia Trek", href: "/trekking/k2-base-camp-concordia-trek" },
  { label: "Five 8000m Base Camp Trek", href: "/trekking/five-8000m-base-camp-trek" },
  { label: "Nangma Valley Trek", href: "/trekking/nangma-valley-trek" },
  { label: "Thalle La Trek", href: "/trekking/thalle-la-trek" },
];

const rockClimbingItems: NavItem[] = [
  { label: "Trango Tower", href: "/rock-climbing/trango-tower" },
  { label: "Amin Braq", href: "/rock-climbing/amin-braq" },
  { label: "Shipton Spire", href: "/rock-climbing/shipton-spire" },
  { label: "Shingo Chatpa Peak", href: "/rock-climbing/shingo-chatpa-peak" },
];

const tourItems: NavItem[] = [
  { label: "Deosai Plateau Tour", href: "/tour/deosai-plateau-tour" },
  { label: "Astore Valley Tour", href: "/tour/astore-valley-tour" },
  { label: "Fairy Meadow Tour", href: "/tour/fairy-meadow-tour" },
  { label: "Khunjerab Pass Tour", href: "/tour/khunjerab-pass-tour" },
  { label: "Hunza Valley Tour", href: "/tour/hunza-valley-tour" },
];

const aboutItems: NavItem[] = [
  { label: "Our Team", href: "/team" },
  { label: "Company Info", href: "/about" },
  { label: "Travel Info", href: "/travel-info" },
  { label: "Mountaineering Rules", href: "/mountaineering-rules" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100093782443750", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/northkarakoram", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@northkarakoram", label: "YouTube" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@northkarakoram", label: "TikTok" },
];

// --- HELPER COMPONENTS ---

function LanguageSelector({
  selectedLanguage,
  onLanguageChange,
  isMobile = false,
}: {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  isMobile?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className={cn(
          "flex items-center gap-2 rounded-xl transition-all duration-200",
          isMobile
            ? "w-full px-4 py-3 bg-white/10 hover:bg-white/15 justify-between"
            : "px-3 py-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/15"
        )}
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="text-lg">{selectedLanguage.flag}</span>
          <span className={cn("font-medium", isMobile ? "text-base" : "text-sm")}>
            {selectedLanguage.code.toUpperCase()}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown */}
      <div
        className={cn(
          "absolute z-50 min-w-[200px] rounded-xl shadow-2xl border border-white/10 py-2 transition-all duration-200 origin-top",
          isMobile ? "left-0 right-0 top-full mt-2" : "right-0 top-[calc(100%+8px)]",
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
        style={{ backgroundColor: "#006F61" }}
      >
        {/* Arrow indicator - desktop only */}
        {!isMobile && (
          <div
            className="absolute -top-2 right-4 w-4 h-4 rotate-45 border-l border-t border-white/10"
            style={{ backgroundColor: "#006F61" }}
          />
        )}

        <div className="relative z-10 max-h-[300px] overflow-y-auto">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language);
                setIsOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-200",
                selectedLanguage.code === language.code
                  ? "text-white bg-white/15"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              <span className="text-xl">{language.flag}</span>
              <span className="text-sm font-medium flex-1">{language.name}</span>
              {selectedLanguage.code === language.code && (
                <Check className="w-4 h-4 text-[#f58220]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlyoutMenuItem({
  label,
  items,
  onClose,
}: {
  label: string;
  items: NavItem[];
  onClose: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsHovered(false), 100);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200 group",
          isHovered ? "bg-white/10" : ""
        )}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              isHovered ? "bg-[#f58220]" : "bg-white/40"
            )}
          />
          <span
            className={cn(
              "text-sm font-medium transition-all duration-200",
              isHovered ? "text-white" : "text-white/80"
            )}
          >
            {label}
          </span>
        </div>
        <ChevronRight
          className={cn(
            "w-4 h-4 transition-all duration-200",
            isHovered ? "text-[#f58220] translate-x-0.5" : "text-white/50"
          )}
        />
      </div>

      {/* Flyout submenu */}
      <div
        className={cn(
          "absolute left-full top-0 min-w-[260px] rounded-r-xl shadow-2xl border border-white/10 border-l-0 py-2 transition-all duration-200 origin-left",
          isHovered
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
        style={{ backgroundColor: "#005a50" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="group flex items-center gap-3 px-4 py-2.5 text-white/80 hover:text-white
              hover:bg-white/10 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#f58220] transition-colors" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function DropdownMenu({
  trigger,
  items,
  isCategory = false,
  isActive = false,
  viewAllHref,
  showViewAll = true,
}: {
  trigger: string;
  items: NavCategory | NavItem[];
  isCategory?: boolean;
  isActive?: boolean;
  viewAllHref?: string;
  showViewAll?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200",
          isActive || isOpen
            ? "text-white bg-white/15"
            : "text-white/85 hover:text-white hover:bg-white/10"
        )}
      >
        {trigger}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Invisible bridge */}
      <div
        className={cn(
          "absolute top-full left-0 w-full h-3",
          isOpen ? "block" : "hidden"
        )}
      />

      {/* Dropdown panel */}
      <div
        className={cn(
          "absolute top-[calc(100%+8px)] left-0 min-w-[280px] rounded-xl shadow-2xl border border-white/10 py-2 transition-all duration-200 origin-top z-50",
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
        style={{ backgroundColor: "#006F61" }}
      >
        {/* Arrow indicator */}
        <div
          className="absolute -top-2 left-6 w-4 h-4 rotate-45 border-l border-t border-white/10"
          style={{ backgroundColor: "#006F61" }}
        />

        <div className="relative z-10">
          {isCategory ? (
            Object.entries(items as NavCategory).map(([category, categoryItems]) => (
              <FlyoutMenuItem
                key={category}
                label={category}
                items={categoryItems}
                onClose={() => setIsOpen(false)}
              />
            ))
          ) : (
            (items as NavItem[]).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 px-4 py-2.5 text-white/80 hover:text-white
                  hover:bg-white/10 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#f58220] transition-colors" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))
          )}

          {/* View all link - conditionally rendered */}
          {showViewAll && viewAllHref && (
            <div className="mt-2 pt-2 border-t border-white/10 mx-2">
              <Link
                href={viewAllHref}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white
                  hover:text-white transition-colors rounded-lg hover:bg-white/10 group"
              >
                <span>View All {trigger}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileAccordionItem({
  label,
  items,
  isCategory = false,
  onClose,
  viewAllHref,
  showViewAll = true,
}: {
  label: string;
  items: NavCategory | NavItem[];
  isCategory?: boolean;
  onClose: () => void;
  viewAllHref?: string;
  showViewAll?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-5 py-4 transition-all duration-200",
          isOpen ? "bg-white/5" : ""
        )}
      >
        <span
          className={cn(
            "text-base font-semibold transition-colors",
            isOpen ? "text-white" : "text-white/80"
          )}
        >
          {label}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-white/60 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white/5 py-2">
          {isCategory ? (
            Object.entries(items as NavCategory).map(([cat, subItems]) => (
              <div key={cat}>
                <button
                  onClick={() => setOpenSub(openSub === cat ? null : cat)}
                  className="w-full flex items-center justify-between px-6 py-3 text-white/70
                    hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      openSub === cat ? "bg-[#f58220]" : "bg-white/40"
                    )} />
                    <span className="text-sm font-medium">{cat}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      openSub === cat && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openSub === cat ? "max-h-[400px]" : "max-h-0"
                  )}
                >
                  <div className="bg-white/5 py-1">
                    {subItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="block px-10 py-3 text-sm text-white/60 hover:text-white
                          hover:bg-white/5 transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            (items as NavItem[]).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-6 py-3 text-white/70 hover:text-white
                  hover:bg-white/5 transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-white/40" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))
          )}

          {/* View All Link - conditionally rendered */}
          {showViewAll && viewAllHref && (
            <Link
              href={viewAllHref}
              onClick={onClose}
              className="flex items-center justify-between mx-4 mt-2 px-4 py-3 text-sm font-semibold
                text-white bg-[#f58220]/20 rounded-lg hover:bg-[#f58220]/30 transition-all duration-200"
            >
              <span>View All {label}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---

export function Navigation({ onLanguageChange }: NavigationProps = {}) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    if (onLanguageChange) {
      onLanguageChange(language.code);
    }
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div
        className="hidden lg:block border-b transition-all duration-300"
        style={{
          backgroundColor: "#fff",
          borderColor: "rgba(0,0,0,0.08)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            {/* Left - Contact Info */}
            <div className="flex items-center gap-8">
              <a
                href="tel:+923330228111"
                className="flex items-center gap-2.5 text-gray-700 hover:text-[#006F61] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#006F61] text-white flex items-center justify-center group-hover:bg-[#f58220] transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-sm">+92 333 0228111</span>
              </a>
              <a
                href="mailto:info@northkarakoram.com"
                className="flex items-center gap-2.5 text-gray-700 hover:text-[#006F61] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#006F61] text-white flex items-center justify-center group-hover:bg-[#f58220] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-sm">info@northkarakoram.com</span>
              </a>
            </div>

            {/* Right - Location & Social */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-[#006F61]" />
                <span>Near Hishpar Hotel, Sathang, Skardu</span>
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-gray-200" />

              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#006F61] flex items-center justify-center
                      text-white hover:bg-[#f58220] transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "shadow-xl" : "shadow-lg"
        )}
        style={{ backgroundColor: "#006F61" }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - Made larger */}
            <Link href="/" className="flex items-center flex-shrink-0 group">
              <div className="relative">
                <img
                  src={logoImage}
                  alt="North Karakoram"
                  className="h-16 sm:h-20 lg:h-24 xl:h-28 w-auto transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-colors duration-300" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5">
              <Link
                href="/"
                className={cn(
                  "px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200",
                  location === "/"
                    ? "text-white bg-white/15"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                Home
              </Link>

              <DropdownMenu
                trigger="Expeditions"
                items={expeditionItems}
                isCategory
                isActive={location.includes("expedition")}
                viewAllHref="/expedition"
                showViewAll={true}
              />
              <DropdownMenu
                trigger="Trekking"
                items={trekkingItems}
                isActive={location.includes("trekking")}
                viewAllHref="/trekking"
                showViewAll={true}
              />
              <DropdownMenu
                trigger="Tours"
                items={tourItems}
                isActive={location.includes("tour")}
                viewAllHref="/tour"
                showViewAll={true}
              />
              <DropdownMenu
                trigger="Rock Climbing"
                items={rockClimbingItems}
                isActive={location.includes("rock-climbing")}
                viewAllHref="/rock-climbing"
                showViewAll={true}
              />

              <Link
                href="/pakistan-visa"
                className={cn(
                  "px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200",
                  location === "/pakistan-visa"
                    ? "text-white bg-white/15"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                Visa Info
              </Link>

              <DropdownMenu
                trigger="About"
                items={aboutItems}
                isActive={location === "/team" || location === "/about"}
                showViewAll={false}
              />

              <Link
                href="/contact"
                className={cn(
                  "px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200",
                  location === "/contact"
                    ? "text-white bg-white/15"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                Contact
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Language Selector - Desktop */}
              <div className="hidden lg:block">
                <LanguageSelector
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={handleLanguageSelect}
                />
              </div>

              {/* Book Now Button - Desktop */}
              <Link href="/contact" className="hidden sm:block">
                <Button
                  className="h-11 px-6 font-bold text-sm rounded-xl shadow-lg
                    hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                  style={{
                    backgroundColor: "#f58220",
                    color: "white",
                  }}
                >
                  Book Now
                </Button>
              </Link>

              {/* Mobile Menu Trigger */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="xl:hidden w-11 h-11 flex items-center justify-center rounded-xl
                      text-white/90 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200"
                    aria-label="Open menu"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-full sm:w-[400px] p-0 border-l"
                  style={{
                    backgroundColor: "#006F61",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-5 border-b border-white/10">
                      <img src={logoImage} alt="Logo" className="h-14 w-auto" />
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-10 h-10 flex items-center justify-center rounded-xl
                          text-white/60 hover:text-white bg-white/10 hover:bg-white/20 transition-all"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Mobile Language Selector */}
                    <div className="px-5 py-4 border-b border-white/10">
                      <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
                        Select Language
                      </p>
                      <LanguageSelector
                        selectedLanguage={selectedLanguage}
                        onLanguageChange={handleLanguageSelect}
                        isMobile
                      />
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 overflow-y-auto">
                      <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center px-5 py-4 text-base font-semibold border-b border-white/10 transition-all",
                          location === "/"
                            ? "text-white bg-white/10"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        )}
                      >
                        Home
                      </Link>

                      <MobileAccordionItem
                        label="Expeditions"
                        items={expeditionItems}
                        isCategory
                        onClose={() => setMobileMenuOpen(false)}
                        viewAllHref="/expedition"
                        showViewAll={true}
                      />
                      <MobileAccordionItem
                        label="Trekking"
                        items={trekkingItems}
                        onClose={() => setMobileMenuOpen(false)}
                        viewAllHref="/trekking"
                        showViewAll={true}
                      />
                      <MobileAccordionItem
                        label="Tours"
                        items={tourItems}
                        onClose={() => setMobileMenuOpen(false)}
                        viewAllHref="/tour"
                        showViewAll={true}
                      />
                      <MobileAccordionItem
                        label="Rock Climbing"
                        items={rockClimbingItems}
                        onClose={() => setMobileMenuOpen(false)}
                        viewAllHref="/rock-climbing"
                        showViewAll={true}
                      />
                      <MobileAccordionItem
                        label="About"
                        items={aboutItems}
                        onClose={() => setMobileMenuOpen(false)}
                        showViewAll={false}
                      />

                      <Link
                        href="/pakistan-visa"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center px-5 py-4 text-base font-semibold
                          text-white/80 hover:text-white hover:bg-white/5
                          border-b border-white/10 transition-all"
                      >
                        Visa Info
                      </Link>

                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center px-5 py-4 text-base font-semibold
                          text-white/80 hover:text-white hover:bg-white/5
                          border-b border-white/10 transition-all"
                      >
                        Contact
                      </Link>
                    </nav>

                    {/* Mobile Footer */}
                    <div className="p-5 border-t border-white/10 space-y-4" style={{ backgroundColor: "#005249" }}>
                      {/* Contact Info */}
                      <div className="space-y-3">
                        <a
                          href="tel:+923330228111"
                          className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                        >
                          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">+92 333 0228111</span>
                        </a>
                        <a
                          href="mailto:info@northkarakoram.com"
                          className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                        >
                          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                            <Mail className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">info@northkarakoram.com</span>
                        </a>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                        {socialLinks.map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center
                              text-white/70 hover:text-white hover:bg-[#f58220] transition-all duration-200"
                            aria-label={social.label}
                          >
                            <social.icon className="w-4 h-4" />
                          </a>
                        ))}
                      </div>

                      {/* Book Now Button */}
                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block"
                      >
                        <Button
                          className="w-full h-14 font-bold text-base rounded-xl shadow-lg"
                          style={{ backgroundColor: "#f58220" }}
                        >
                          Book Your Adventure
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
