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
  "8000m": [
    { label: "K2 EXPEDITION", href: "/expedition/k2-expedition" },
    { label: "BROAD PEAK EXPEDITION", href: "/expedition/broad-peak-expedition" },
    { label: "NANGA PARBAT EXPEDITION", href: "/expedition/nanga-parbat-expedition" },
    { label: "GASHERBRUM I & II EXPEDITION", href: "/expedition/gasherbrum-expedition" },
  ],
  "7000m": [
    { label: "SPANTIK EXPEDITION", href: "/expedition/spantik-expedition" },
    { label: "GASHERBRUM III EXPEDITION", href: "/expeditions" },
    { label: "GASHERBRUM IV EXPEDITION", href: "/expeditions" },
    { label: "MASHERBRUM EXPEDITION", href: "/expeditions" },
    { label: "CHOGOLISA EXPEDITION", href: "/expeditions" },
    { label: "K6 EXPEDITION", href: "/expeditions" },
    { label: "RAKAPOSHI EXPEDITION", href: "/expeditions" },
  ],
  "6000m": [
    { label: "LAILA PEAK EXPEDITION", href: "/expeditions" },
    { label: "PASTORE PEAK EXPEDITION", href: "/expeditions" },
    { label: "KHUSROGANG EXPEDITION", href: "/expeditions" },
    { label: "GONDOGORO PEAK EXPEDITION", href: "/expeditions" },
  ],
};

const trekkingItems: NavItem[] = [
  { label: "K2 AND GONDOGORO LA TREK", href: "/expedition/k2-gondogoro-trek" },
  { label: "K2 BASE CAMP TREK", href: "/expedition/k2-base-camp-trek" },
  { label: "FIVE 8000m BASE CAMP TREK", href: "/expedition/five-8000m-base-camp-trek" },
  { label: "NANGA PARBAT BASE CAMP TREK", href: "/expedition/nanga-parbat-base-camp-trek" },
  { label: "FAIRY MEADOW TREK", href: "/expedition/fairy-meadows-trek" },
  { label: "AROUND NANGA PARBAT TREK", href: "/trekking" },
  { label: "NANGMA VALLEY TREK", href: "/trekking" },
  { label: "THALLE LA TREK", href: "/trekking" },
  { label: "SNOW LAKE-HISPAR LA TREK", href: "/trekking" },
  { label: "PASTORE PEAK", href: "/trekking" },
  { label: "SHIMSHAL PASS TREK", href: "/trekking" },
];

const rockClimbingItems: NavItem[] = [
  { label: "TRANGO TOWER", href: "/expeditions" },
  { label: "GREAT TOWER", href: "/expeditions" },
  { label: "AMIN BRAQ", href: "/expeditions" },
  { label: "NANGMA VALLEY", href: "/expeditions" },
  { label: "LATOK OGRI", href: "/expeditions" },
  { label: "CHARAKUSA VALLEY", href: "/expeditions" },
];

const tourItems: NavCategory = {
  "SPRING SEASON": [
    { label: "HUNZA VALLEY SPRING ESCAPES", href: "/tours" },
    { label: "SKARDU VALLEY SPRING ESCAPES", href: "/tours" },
    { label: "KHAPLU VALLEY SPRING ESCAPES", href: "/tours" },
    { label: "ASTORE VALLEY SPRING ESCAPES", href: "/tours" },
  ],
  "SUMMER SEASON": [
    { label: "FAIRY MEADOWS TOUR", href: "/tours" },
    { label: "HUNZA VALLEY SUMMER TOUR", href: "/tours" },
    { label: "SKARDU VALLEY SUMMER TOUR", href: "/tours" },
    { label: "DEOSAI PLATEAU TOUR", href: "/tours" },
    { label: "SHANDUR POLO FESTIVAL", href: "/tours" },
    { label: "KHUNJERAB PASS TOUR", href: "/tours" },
  ],
  "AUTUMN SEASON": [
    { label: "PHANDAR AUTUMN TOUR", href: "/tours" },
    { label: "HUNZA VALLEY AUTUMN TOUR", href: "/tours" },
    { label: "SKARDU VALLEY AUTUMN TOUR", href: "/tours" },
    { label: "BALTISTAN AUTUMN TOUR", href: "/tours" },
    { label: "HUNZA PANORAMA TOUR", href: "/tours" },
  ],
};

const aboutItems: NavItem[] = [
  { label: "OUR TEAM", href: "/team" },
  { label: "MOUNTAINEERING RULE", href: "/mountaineering-rules" },
  { label: "MOUNTAINS LIST IN PAKISTAN", href: "/mountains" },
  { label: "PEAK ROYALTY IN PAKISTAN", href: "/peak-royalty" },
  { label: "TERM & CONDITIONS", href: "/about" },
  { label: "COMPANY INFO", href: "/about" },
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
      <div className={cn("flex items-center justify-between px-4 py-2.5 text-base text-white font-bold cursor-pointer rounded-md transition-all duration-200 mx-1 border-b border-white", isHovered ? "opacity-100" : "opacity-60")}>
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
              className="block px-4 py-2.5 text-base text-white font-bold rounded-md transition-all duration-200 mx-1 mb-1 last:mb-0 opacity-60 hover:opacity-100 border-b border-white"
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
          "flex items-center gap-1 px-3 py-2 text-base font-bold text-white rounded-md transition-all duration-200",
          (isActive || isOpen) ? "opacity-100" : "opacity-60 hover:opacity-100"
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
                className="block px-4 py-2.5 text-base text-white font-bold rounded-md transition-all duration-200 mx-1 mb-1 last:mb-0 opacity-60 hover:opacity-100 border-b border-white"
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
        className={cn("w-[calc(100%-1rem)] mx-2 my-1 flex items-center justify-between px-4 py-3 text-white text-base font-bold rounded-md transition-all duration-200", isOpen ? "opacity-100" : "opacity-60 hover:opacity-100")}
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
                  className="w-full flex items-center justify-between px-8 py-2 text-white text-base font-bold transition-all duration-200 border-b border-white opacity-60 hover:opacity-100"
                >
                  <span>{cat}</span>
                  <ChevronDown className={cn("w-4 h-4", openSub === cat && "rotate-180")} />
                </button>
                {openSub === cat && subItems.map((item, index) => (
                  <Link key={item.label} href={item.href} onClick={onClose} className="block px-12 py-2 text-white text-base font-bold transition-all duration-200 border-b border-white opacity-60 hover:opacity-100">
                    {item.label}
                  </Link>
                ))}
              </div>
            ))
          ) : (
            (items as NavItem[]).map((item, index) => (
              <Link key={item.label} href={item.href} onClick={onClose} className="block px-8 py-2 text-white text-base font-bold transition-all duration-200 border-b border-white opacity-60 hover:opacity-100">
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
                <Link href="/" className={cn("px-3 py-2 text-base font-bold text-white transition-all duration-200", location === "/" ? "opacity-100" : "opacity-60 hover:opacity-100")}>HOME</Link>

                <DropdownMenu trigger="EXPEDITION" items={expeditionItems} isCategory isActive={location.includes("expedition")} />
                <DropdownMenu trigger="TREKKING" items={trekkingItems} isActive={location === "/trekking"} />
                <DropdownMenu trigger="TOURS" items={tourItems} isCategory isActive={location === "/tours"} />
                <DropdownMenu trigger="ROCK CLIMBING" items={rockClimbingItems} />

                <Link href="/travel-info" className={cn("px-3 py-2 text-base font-bold text-white transition-all duration-200", location === "/travel-info" ? "opacity-100" : "opacity-60 hover:opacity-100")}>TRAVEL INFO</Link>
                <DropdownMenu trigger="ABOUT US" items={aboutItems} isActive={location === "/team"} />
                <Link href="/contact" className={cn("px-3 py-2 text-base font-bold text-white transition-all duration-200", location === "/contact" ? "opacity-100" : "opacity-60 hover:opacity-100")}>CONTACT</Link>
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
                    BOOK NOW
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
                        <MobileAccordionItem label="EXPEDITIONS" items={expeditionItems} isCategory onClose={() => setMobileMenuOpen(false)} location={location} />
                        <MobileAccordionItem label="TREKS" items={trekkingItems} onClose={() => setMobileMenuOpen(false)} location={location} />
                        <MobileAccordionItem label="TOURS" items={tourItems} isCategory onClose={() => setMobileMenuOpen(false)} location={location} />
                        <MobileAccordionItem label="ROCK CLIMBING" items={rockClimbingItems} onClose={() => setMobileMenuOpen(false)} location={location} />
                        <MobileAccordionItem label="ABOUT US" items={aboutItems} onClose={() => setMobileMenuOpen(false)} location={location} />
                      </nav>
                      <div className="p-4">
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="w-full bg-[#f58220] font-bold text-base py-6">BOOK NOW</Button>
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
