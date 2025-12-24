import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Menu,
  Search,
  X,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@assets/logo-white-transparent.png";

interface NavigationProps {
  onSearch?: (query: string) => void;
}

interface NavItem {
  label: string;
  href: string;
}

interface NavCategory {
  [key: string]: NavItem[];
}

// --- DATA STRUCTURES ---

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
    { label: "Gasherbrum IV Expedition", href: "/expedition/gasherbrum-iv-expedition" },
    { label: "Gasherbrum V Expedition", href: "/expedition/gasherbrum-v-expedition" },
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
  { label: "K2 & Gondogoro La Trek", href: "/expedition/k2-gondogoro-trek" },
  { label: "K2 Base Camp Trek", href: "/expedition/k2-base-camp-trek" },
  { label: "Five 8000m Base Camp Trek", href: "/expedition/five-8000m-base-camp-trek" },
  { label: "Nanga Parbat Base Camp", href: "/expedition/nanga-parbat-base-camp-trek" },
  { label: "Fairy Meadows Trek", href: "/expedition/fairy-meadows-trek" },
  { label: "Snow Lake-Hispar La Trek", href: "/expedition/snow-lake-hispar-trek" },
];

const rockClimbingItems: NavItem[] = [
  { label: "Trango Tower", href: "/expedition/trango-tower" },
  { label: "Great Tower", href: "/expedition/great-tower" },
  { label: "Amin Braq", href: "/expedition/amin-braq" },
  { label: "Nangma Valley", href: "/expedition/nangma-valley" },
];

const tourItems: NavCategory = {
  "Spring Tours": [
    { label: "Hunza Valley Spring", href: "/tours" },
    { label: "Skardu Valley Spring", href: "/tours" },
    { label: "Cherry Blossom Tour", href: "/tours" },
  ],
  "Summer Tours": [
    { label: "Fairy Meadows Tour", href: "/tours" },
    { label: "Deosai Plateau Tour", href: "/tours" },
    { label: "Shandur Polo Festival", href: "/tours" },
  ],
  "Autumn Tours": [
    { label: "Hunza Autumn Colors", href: "/tours" },
    { label: "Baltistan Explorer", href: "/tours" },
  ],
};

const aboutItems: NavItem[] = [
  { label: "Our Team", href: "/team" },
  { label: "Company Info", href: "/about" },
  { label: "Travel Info", href: "/travel-info" },
  { label: "Mountaineering Rules", href: "/mountaineering-rules" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/northkarakoram", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/northkarakoram", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/northkarakoram", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/northkarakoram", label: "Twitter" },
];

// --- HELPER COMPONENTS ---

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
              isHovered ? "bg-white" : "bg-white/40"
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
            isHovered ? "text-white translate-x-0.5" : "text-white/50"
          )}
        />
      </div>

      {/* Flyout submenu - No gap between parent and child */}
      <div
        className={cn(
          "absolute left-full top-0 min-w-[240px] rounded-r-xl shadow-2xl border border-white/10 border-l-0 py-2 transition-all duration-200 origin-left",
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
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
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
}: {
  trigger: string;
  items: NavCategory | NavItem[];
  isCategory?: boolean;
  isActive?: boolean;
  viewAllHref: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100);
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
          "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
          isActive || isOpen
            ? "text-white bg-white/10"
            : "text-white/80 hover:text-white hover:bg-white/5"
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

      {/* Invisible bridge to prevent gap issues */}
      <div
        className={cn(
          "absolute top-full left-0 w-full h-3",
          isOpen ? "block" : "hidden"
        )}
      />

      {/* Dropdown panel - positioned directly below with no visual gap */}
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
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))
          )}

          {/* View all link */}
          <div className="mt-2 pt-2 border-t border-white/10 mx-2">
            <Link
              href={viewAllHref}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white
                hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              <span>View All {trigger}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
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
}: {
  label: string;
  items: NavCategory | NavItem[];
  isCategory?: boolean;
  onClose: () => void;
  viewAllHref: string;
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
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
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
                    <div className="w-2 h-2 rounded-full bg-white/40" />
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

          {/* View All Link */}
          <Link
            href={viewAllHref}
            onClick={onClose}
            className="flex items-center justify-between mx-4 mt-2 px-4 py-3 text-sm font-semibold
              text-white bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
          >
            <span>View All {label}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---

export function Navigation({ onSearch }: NavigationProps = {}) {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) onSearch(searchQuery.trim());
      setLocation(`/expeditions?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div
        className="hidden lg:block border-b transition-all duration-300 text-black"
        style={{
          backgroundColor: "#fff",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-11">
            {/* Left - Contact Info */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+923330228111"
                className="flex items-center gap-2 text-black hover:text-[#f58220] transition-colors text-sm font-semibold"
              >
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="font-medium">+92 333 0228111</span>
              </a>
              <a
                href="mailto:info@northkarakoram.com"
                className="flex items-center gap-2 text-black font-semibold hover:text-[#f58220] transition-colors text-sm"
              >
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="font-medium">info@northkarakoram.com</span>
              </a>
            </div>

            {/* Right - Location & Social */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-black text-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span>Near Hishpar Hotel, Sathang, Skardu</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-1 pl-4 border-l border-white/20">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#f58220] flex items-center justify-center
                      text-white border border-[#f58220] hover:text-black hover:bg-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-3.5 h-3.5" />
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
          isScrolled ? "shadow-xl" : "shadow-md"
        )}
        style={{ backgroundColor: "#006F61" }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - Made larger and more prominent */}
            <Link href="/" className="flex items-center flex-shrink-0 group">
              <div className="relative">
                <img
                  src={logoImage}
                  alt="North Karakoram"
                  className="h-14 sm:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                {/* Optional glow effect on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-colors duration-300" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
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
                viewAllHref="/expeditions"
              />
              <DropdownMenu
                trigger="Trekking"
                items={trekkingItems}
                isActive={location === "/trekking"}
                viewAllHref="/trekking"
              />
              <DropdownMenu
                trigger="Tours"
                items={tourItems}
                isCategory
                isActive={location === "/tours"}
                viewAllHref="/tours"
              />
              <DropdownMenu
                trigger="Rock Climbing"
                items={rockClimbingItems}
                isActive={location === "/rock-climbing"}
                viewAllHref="/rock-climbing"
              />

              {/* <Link
                href="/travel-info"
                className={cn(
                  "px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200",
                  location === "/travel-info"
                    ? "text-white bg-white/15"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                Travel Info
              </Link> */}

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
                viewAllHref="/about"
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
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-11 h-11 flex items-center justify-center rounded-xl
                  text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

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
                      text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200"
                    aria-label="Open menu"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-full sm:w-[380px] p-0 border-l"
                  style={{
                    backgroundColor: "#006F61",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-5 border-b border-white/10">
                      <img src={logoImage} alt="Logo" className="h-12 w-auto" />
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-10 h-10 flex items-center justify-center rounded-xl
                          text-white/60 hover:text-white bg-white/10 hover:bg-white/20 transition-all"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Mobile Search */}
                    <div className="p-5 border-b border-white/10">
                      <form onSubmit={handleSearch}>
                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                          <Input
                            type="search"
                            placeholder="Search expeditions, treks..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-12 pl-12 pr-4 bg-white/10 border-white/20
                              text-white placeholder:text-white/50 rounded-xl text-base
                              focus:bg-white/15 focus:border-white/30"
                          />
                          {searchQuery && (
                            <button
                              type="submit"
                              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5
                                bg-white/20 hover:bg-white/30 text-white text-sm font-medium
                                rounded-lg transition-colors"
                            >
                              Search
                            </button>
                          )}
                        </div>
                      </form>
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
                        viewAllHref="/expeditions"
                      />
                      <MobileAccordionItem
                        label="Trekking"
                        items={trekkingItems}
                        onClose={() => setMobileMenuOpen(false)}
                        viewAllHref="/trekking"
                      />
                      <MobileAccordionItem
                        label="Tours"
                        items={tourItems}
                        isCategory
                        onClose={() => setMobileMenuOpen(false)}
                        viewAllHref="/tours"
                      />
                      <MobileAccordionItem
                        label="Rock Climbing"
                        items={rockClimbingItems}
                        onClose={() => setMobileMenuOpen(false)}
                        viewAllHref="/rock-climbing"
                      />
                      <MobileAccordionItem
                        label="About"
                        items={aboutItems}
                        onClose={() => setMobileMenuOpen(false)}
                        viewAllHref="/about"
                      />

                      {/* <Link
                        href="/travel-info"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center px-5 py-4 text-base font-semibold
                          text-white/80 hover:text-white hover:bg-white/5
                          border-b border-white/10 transition-all"
                      >
                        Travel Info
                      </Link> */}

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
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">+92 333 0228111</span>
                        </a>
                        <a
                          href="mailto:info@northkarakoram.com"
                          className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
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
                              text-white/70 hover:text-white hover:bg-white/20 transition-all duration-200"
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

        {/* Full-width Search Overlay */}
        <div
          className={cn(
            "absolute inset-x-0 top-full transition-all duration-300 z-50",
            searchOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          />

          {/* Search Container */}
          <div className="relative" style={{ backgroundColor: "#005249" }}>
            <div className="container mx-auto px-4 lg:px-6 py-6">
              <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/50" />
                  <Input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search expeditions, treks, tours..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-16 pl-14 pr-32 bg-white/10 border-2 border-white/20
                      text-white text-lg placeholder:text-white/50 rounded-2xl
                      focus:bg-white/15 focus:border-white/40 transition-all"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    {searchQuery && (
                      <Button
                        type="submit"
                        className="h-12 px-6 font-semibold rounded-xl"
                        style={{ backgroundColor: "#f58220" }}
                      >
                        Search
                      </Button>
                    )}
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="w-12 h-12 flex items-center justify-center rounded-xl
                        text-white/60 hover:text-white bg-white/10 hover:bg-white/20 transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-white/50 text-sm">Popular:</span>
                  {["K2 Expedition", "Fairy Meadows", "Hunza Valley", "Broad Peak"].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        setSearchQuery(term);
                        searchInputRef.current?.focus();
                      }}
                      className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white
                        bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
