/**
 * Navigation.tsx - Main Site Navigation Component
 *
 * Responsive navigation header with:
 * - Desktop: Full mega-menu dropdowns with nested flyouts
 * - Mobile: Slide-out sheet menu with accordion-style dropdowns
 * - Search functionality and Book Now CTA button
 * * Typography: Fixed to text-base and font-bold across all navigation layers.
 */

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Menu, Search, X, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoImage from "@assets/white_logo_(3)_1766041182585.png";

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
  "8000": [
    { label: "K2 Expedition", href: "/expedition/k2-expedition" },
    { label: "Broad Peak Expedition", href: "/expedition/broad-peak-expedition" },
    { label: "Nanga Parbat Expedition", href: "/expedition/nanga-parbat-expedition" },
    { label: "Gasherbrum I Expedition", href: "/expedition/gasherbrum-i" },
    { label: "Gasherbrum II Expedition", href: "/expedition/gasherbrum-ii" },
  ],
  "7000": [
    { label: "Gasherbrum III Expedition", href: "/expeditions" },
    { label: "Gasherbrum IV Expedition", href: "/expeditions" },
    { label: "Masherbrum Expedition", href: "/expeditions" },
    { label: "Spantik Expedition", href: "/expedition/spantik-expedition" },
    { label: "Chogolisa Expedition", href: "/expeditions" },
    { label: "K6 Expedition", href: "/expeditions" },
    { label: "Rakaposhi Expedition", href: "/expeditions" },
  ],
  "6000 and below": [
    { label: "Laila Peak Expedition", href: "/expeditions" },
    { label: "Pastore Peak Expedition", href: "/expeditions" },
    { label: "Khusrogang Expedition", href: "/expeditions" },
    { label: "Gondogoro Peak Expedition", href: "/expeditions" },
  ],
};

const trekkingItems: NavItem[] = [
  { label: "K2 and Gondogoro La Trek", href: "/trekking" },
  { label: "K2 Base Camp Trek", href: "/trekking" },
  { label: "Five 8000m Base Camp Trek", href: "/trekking" },
  { label: "Nanga Parbat Base Camp Trek", href: "/trekking" },
  { label: "Fairy Meadow Trek", href: "/trekking" },
  { label: "Around Nanga Parbat Trek", href: "/trekking" },
  { label: "Nangma Valley Trek", href: "/trekking" },
  { label: "Thalle La Trek", href: "/trekking" },
  { label: "Snow Lake-Hispar La Trek", href: "/trekking" },
  { label: "Pastore Peak", href: "/trekking" },
  { label: "Shimshal Pass Trek", href: "/trekking" },
];

const rockClimbingItems: NavItem[] = [
  { label: "Trango Tower", href: "/expeditions" },
  { label: "Great Tower", href: "/expeditions" },
  { label: "K7", href: "/expeditions" },
  { label: "Amin Braq", href: "/expeditions" },
  { label: "Nangma Valley", href: "/expeditions" },
  { label: "Latok Ogri", href: "/expeditions" },
  { label: "Charakusa Valley", href: "/expeditions" },
];

const tourItems: NavCategory = {
  "Spring Season": [
    { label: "Hunza Valley Spring Escapes", href: "/tours" },
    { label: "Skardu Valley Spring Escapes", href: "/tours" },
    { label: "Khaplu Valley Spring Escapes", href: "/tours" },
    { label: "Astore Valley Spring Escapes", href: "/tours" },
  ],
  "Summer Season": [
    { label: "Fairy Meadows Tour", href: "/tours" },
    { label: "Hunza Valley Summer Tour", href: "/tours" },
    { label: "Skardu Valley Summer Tour", href: "/tours" },
    { label: "Deosai Plateau Tour", href: "/tours" },
    { label: "Shandur Polo Festival", href: "/tours" },
    { label: "Khunjerab Pass Tour", href: "/tours" },
  ],
  "Autumn Season": [
    { label: "Phandar Autumn Tour", href: "/tours" },
    { label: "Hunza Valley Autumn Tour", href: "/tours" },
    { label: "Skardu Valley Autumn Tour", href: "/tours" },
    { label: "Baltistan Autumn Tour", href: "/tours" },
    { label: "Hunza Panorama Tour", href: "/tours" },
  ],
};

const aboutItems: NavItem[] = [
  { label: "Our Team", href: "/team" },
  { label: "Mountaineering Rule", href: "/about" },
  { label: "Mountains List In Pakistan", href: "/about" },
  { label: "Peak Royalty In Pakistan", href: "/about" },
  { label: "Term & Conditions", href: "/about" },
  { label: "Company Info", href: "/about" },
];

// --- HELPER COMPONENTS ---

function FlyoutMenuItem({ label, items, onClose }: { label: string; items: NavItem[]; onClose: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={itemRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between px-4 py-2.5 text-base text-white font-bold cursor-pointer border border-transparent hover:border-white rounded-md transition-all mx-1">
        <span>{label}</span>
        <ChevronRight className="w-4 h-4 text-white/70" />
      </div>

      {isHovered && (
        <div className="absolute left-full top-0 ml-1 min-w-[250px] bg-[#005a50] rounded-lg shadow-xl border border-white/20 py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-2.5 text-base text-white font-bold border border-transparent hover:border-white rounded-md transition-all mx-1 mb-1 last:mb-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownMenu({ trigger, items, isCategory = false, isActive = false }: { trigger: string; items: NavCategory | NavItem[]; isCategory?: boolean; isActive?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-base font-bold text-white rounded-md transition-all duration-200 border-2 border-transparent hover:border-white",
          (isActive || isOpen) && "border-white"
        )}
      >
        {trigger}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 min-w-[240px] bg-[#00685d] rounded-lg shadow-2xl border border-white/20 py-2 z-50">
          {isCategory ? (
            Object.entries(items as NavCategory).map(([category, categoryItems]) => (
              <FlyoutMenuItem key={category} label={category} items={categoryItems} onClose={() => setIsOpen(false)} />
            ))
          ) : (
            (items as NavItem[]).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-base text-white font-bold border border-transparent hover:border-white rounded-md transition-all mx-1 mb-1 last:mb-0"
              >
                {item.label}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

function MobileAccordionItem({ label, items, isCategory = false, onClose, location }: { label: string; items: NavCategory | NavItem[]; isCategory?: boolean; onClose: () => void; location: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("w-[calc(100%-1rem)] mx-2 my-1 flex items-center justify-between px-4 py-3 text-white text-base font-bold rounded-md border-2 border-transparent", isOpen && "border-white")}
      >
        <span>{label}</span>
        <ChevronDown className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="bg-black/10">
          {isCategory ? (
            Object.entries(items as NavCategory).map(([cat, subItems]) => (
              <div key={cat}>
                <button
                  onClick={() => setOpenSub(openSub === cat ? null : cat)}
                  className="w-full flex items-center justify-between px-8 py-2 text-white/90 text-base font-bold"
                >
                  <span>{cat}</span>
                  <ChevronDown className={cn("w-4 h-4", openSub === cat && "rotate-180")} />
                </button>
                {openSub === cat && subItems.map(item => (
                  <Link key={item.label} href={item.href} onClick={onClose} className="block px-12 py-2 text-white/70 text-base font-bold hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            ))
          ) : (
            (items as NavItem[]).map(item => (
              <Link key={item.label} href={item.href} onClick={onClose} className="block px-8 py-2 text-white/90 text-base font-bold">
                {item.label}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

// --- MAIN COMPONENT ---

export function Navigation({ onSearch }: NavigationProps = {}) {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#00685d]">
      <div className="flex">
        <div className="flex items-center px-4 h-[65px]">
          <Link href="/" className="flex items-center">
            <img src={logoImage} alt="North Karakoram" className="h-14 w-auto" />
          </Link>
        </div>

        <div className="flex-1">
          <div className="container mx-auto px-4">
            <div className="flex h-[65px] items-center justify-between gap-4">
              <nav className="hidden lg:flex items-center gap-1">
                <Link href="/" className={cn("px-3 py-2 text-base font-bold text-white border-2 border-transparent rounded-md", location === "/" && "border-white")}>Home</Link>

                <DropdownMenu trigger="Expedition" items={expeditionItems} isCategory isActive={location.includes("expedition")} />
                <DropdownMenu trigger="Trekking" items={trekkingItems} isActive={location === "/trekking"} />
                <DropdownMenu trigger="Tours" items={tourItems} isCategory isActive={location === "/tours"} />
                <DropdownMenu trigger="Rock Climbing" items={rockClimbingItems} />

                <Link href="/about" className={cn("px-3 py-2 text-base font-bold text-white border-2 border-transparent rounded-md", location === "/about" && "border-white")}>Travel Info</Link>
                <DropdownMenu trigger="About Us" items={aboutItems} isActive={location === "/team"} />
                <Link href="/contact" className={cn("px-3 py-2 text-base font-bold text-white border-2 border-transparent rounded-md", location === "/contact" && "border-white")}>Contact</Link>
              </nav>

              <div className="flex items-center gap-2 ml-auto">
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="relative hidden sm:flex items-center">
                    <Input
                      type="search"
                      placeholder="Search trips..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48 bg-white/20 text-white font-bold"
                      autoFocus
                    />
                    <Button size="icon" variant="ghost" className="absolute right-0 text-white" onClick={() => setSearchOpen(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </form>
                ) : (
                  <Button size="icon" variant="ghost" className="text-white" onClick={() => setSearchOpen(true)}>
                    <Search className="w-5 h-5" />
                  </Button>
                )}

                <ThemeToggle />

                <Link href="/contact" className="hidden sm:block">
                  <Button className="bg-[#f58220] hover:bg-[#e07210] text-white font-bold text-base px-4">
                    Book Now
                  </Button>
                </Link>

                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button size="icon" variant="ghost" className="lg:hidden text-white">
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[320px] p-0 bg-[#00685d] border-l border-white/10">
                    <div className="flex flex-col h-full">
                      <div className="p-4 border-b border-white/10">
                        <img src={logoImage} alt="Logo" className="h-12 w-auto" />
                      </div>
                      <nav className="flex-1 overflow-y-auto pt-2">
                        <MobileAccordionItem label="Expeditions" items={expeditionItems} isCategory onClose={() => setMobileMenuOpen(false)} location={location} />
                        <MobileAccordionItem label="Treks" items={trekkingItems} onClose={() => setMobileMenuOpen(false)} location={location} />
                        <MobileAccordionItem label="Tours" items={tourItems} isCategory onClose={() => setMobileMenuOpen(false)} location={location} />
                        <MobileAccordionItem label="Rock Climbing" items={rockClimbingItems} onClose={() => setMobileMenuOpen(false)} location={location} />
                        <MobileAccordionItem label="About Us" items={aboutItems} onClose={() => setMobileMenuOpen(false)} location={location} />
                      </nav>
                      <div className="p-4">
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="w-full bg-[#f58220] font-bold text-base py-6">Book Now</Button>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
