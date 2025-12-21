/**
 * Navigation.tsx - Main Site Navigation Component
 *
 * Responsive navigation header with:
 * - Desktop: Full mega-menu dropdowns with nested flyouts
 * - Mobile: Slide-out sheet menu with accordion-style dropdowns
 * - Search functionality and Book Now CTA button
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

const expeditionItems: NavCategory = {
  "8000m": [
    { label: "K2 Expedition", href: "/expedition/k2-expedition" },
    { label: "Nanga Parbat Expedition", href: "/expedition/nanga-parbat-expedition" },
    { label: "Gasherbrum I & II", href: "/expedition/gasherbrum-expedition" },
    { label: "Broad Peak Expedition", href: "/expedition/broad-peak-expedition" },
  ],
  "7000m": [
    { label: "Spantik Expedition", href: "/expedition/spantik-expedition" },
    { label: "Gasherbrum V Expedition", href: "/expeditions" },
    { label: "Masherbrum Expedition", href: "/expeditions" },
    { label: "Diran Peak Expedition", href: "/expeditions" },
    { label: "Rakaposhi Expedition", href: "/expeditions" },
  ],
  "6000m": [
    { label: "Diran Peak Expedition", href: "/expeditions" },
    { label: "Bondit Peak Expedition", href: "/expeditions" },
    { label: "Paju Peak Expedition", href: "/expeditions" },
    { label: "Kolpin Peak Expedition", href: "/expeditions" },
  ],
};

const trekkingItems: NavCategory = {
  "Karakoram Range": [
    { label: "K2 Base Camp Trek", href: "/trekking" },
    { label: "K2 and Gondogoro La Trek", href: "/trekking" },
    { label: "Five 8000m Base Camp Trek", href: "/trekking" },
    { label: "Snow Lake-Hispar La Trek", href: "/trekking" },
    { label: "Shimshal Pass Trek", href: "/trekking" },
  ],
  "Nanga Parbat Region": [
    { label: "Nanga Parbat Base Camp Trek", href: "/trekking" },
    { label: "Around Nanga Parbat Trek", href: "/trekking" },
    { label: "Fairy Meadow Trek", href: "/trekking" },
    { label: "Nangma Valley Trek", href: "/trekking" },
    { label: "Thalle La Trek", href: "/trekking" },
  ],
  "Peak Expeditions": [
    { label: "Pasture Peak", href: "/trekking" },
  ],
};

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

const rockClimbingItems: NavItem[] = [
  { label: "Trango Tower Expedition", href: "/expeditions" },
  { label: "Latok Ogri Expedition", href: "/expeditions" },
  { label: "Charakusa Valley Expedition", href: "/expeditions" },
  { label: "Nangma Valley Expedition", href: "/expeditions" },
];

const aboutItems: NavItem[] = [
  { label: "Our Team", href: "/team" },
  { label: "Mountaineering Rule", href: "/about" },
  { label: "Mountains List In Pakistan", href: "/about" },
  { label: "Peak Royalty In Pakistan", href: "/about" },
  { label: "Term & Conditions", href: "/about" },
  { label: "Company Info", href: "/about" },
];

// Flyout Menu Item Component with nested submenu (Desktop)
interface FlyoutMenuItemProps {
  label: string;
  items: NavItem[];
  onClose: () => void;
}

function FlyoutMenuItem({ label, items, onClose }: FlyoutMenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0 });
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const parentRect = itemRef.current.closest('.dropdown-content')?.getBoundingClientRect();
      if (parentRect) {
        setSubmenuPosition({ top: rect.top - parentRect.top });
      }
    }
  };

  return (
    <div
      ref={itemRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between px-4 py-2.5 text-sm text-white font-medium cursor-pointer hover:bg-white/10 rounded-md transition-colors">
        <span>{label}</span>
        <ChevronRight className="w-4 h-4 text-white/70" />
      </div>

      {/* Submenu */}
      {isHovered && items.length > 0 && (
        <div
          className="absolute left-full top-0 ml-1 min-w-[250px] bg-[#005a50] rounded-lg shadow-xl border border-white/10 py-2 z-50"
          style={{ marginTop: submenuPosition.top > 100 ? -50 : 0 }}
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-2.5 text-sm text-white font-medium hover:bg-white/10 transition-colors"
              data-testid={`link-submenu-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// Simple Dropdown Item (no nested menu) - Desktop
interface SimpleDropdownItemProps {
  item: NavItem;
  onClose: () => void;
}

function SimpleDropdownItem({ item, onClose }: SimpleDropdownItemProps) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="block px-4 py-2.5 text-sm text-white font-medium hover:bg-white/10 rounded-md transition-colors"
      data-testid={`link-dropdown-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {item.label}
    </Link>
  );
}

// Main Dropdown Menu Component (Desktop)
interface DropdownMenuProps {
  trigger: string;
  items: NavCategory | NavItem[];
  isCategory?: boolean;
  isActive?: boolean;
}

function DropdownMenu({ trigger, items, isCategory = false, isActive = false }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-base font-bold text-white rounded-md transition-all duration-200",
          "border-2 border-transparent hover:border-[#f58220]",
          "hover:bg-primary/80",
          isActive && "bg-primary/80",
          isOpen && "bg-primary/80 border-[#f58220]"
        )}
        data-testid={`button-nav-${trigger.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {trigger}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          className="dropdown-content absolute top-full left-0 mt-1 min-w-[220px] bg-[#00685d] rounded-lg shadow-2xl border border-white/10 py-2 z-50"
        >
          {isCategory ? (
            Object.entries(items as NavCategory).map(([category, categoryItems]) => (
              <FlyoutMenuItem
                key={category}
                label={category}
                items={categoryItems}
                onClose={handleClose}
              />
            ))
          ) : (
            (items as NavItem[]).map((item) => (
              <SimpleDropdownItem key={item.label} item={item} onClose={handleClose} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

// Simple Nav Link (no dropdown) - Desktop
interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}

function NavLink({ href, label, isActive = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-base font-bold text-white rounded-md transition-all duration-200",
        "border-2 border-transparent hover:border-[#f58220]",
        "hover:bg-primary/80",
        isActive && "bg-primary/80"
      )}
      data-testid={`link-nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {label}
    </Link>
  );
}

// Mobile Accordion Item with nested categories
interface MobileAccordionItemProps {
  label: string;
  items: NavCategory | NavItem[];
  isCategory?: boolean;
  onClose: () => void;
  location: string;
}

function MobileAccordionItem({ label, items, isCategory = false, onClose, location }: MobileAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      {/* Main Accordion Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-left font-medium transition-colors",
          "text-white hover:bg-white/10",
          isOpen && "bg-white/10"
        )}
        data-testid={`button-mobile-accordion-${label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-white/70 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="bg-white/5">
          {isCategory ? (
            // Nested categories (e.g., 8000m, 7000m for Expeditions)
            Object.entries(items as NavCategory).map(([category, categoryItems]) => (
              <div key={category} className="border-t border-white/5">
                {/* Sub-category trigger */}
                <button
                  onClick={() => setOpenSubCategory(openSubCategory === category ? null : category)}
                  className={cn(
                    "w-full flex items-center justify-between px-6 py-2.5 text-left text-sm font-medium transition-colors",
                    "text-white/90 hover:bg-white/10",
                    openSubCategory === category && "bg-white/10"
                  )}
                  data-testid={`button-mobile-subcategory-${category.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span>{category}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-white/50 transition-transform duration-200",
                      openSubCategory === category && "rotate-180"
                    )}
                  />
                </button>

                {/* Sub-category items */}
                {openSubCategory === category && (
                  <div className="bg-white/5 py-1">
                    {categoryItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "block px-8 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors",
                          location === item.href && "bg-white/15 text-white"
                        )}
                        data-testid={`link-mobile-subitem-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            // Simple list items
            (items as NavItem[]).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "block px-6 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors border-t border-white/5",
                  location === item.href && "bg-white/15 text-white"
                )}
                data-testid={`link-mobile-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
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

// Mobile Simple Link (no dropdown)
interface MobileSimpleLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClose: () => void;
}

function MobileSimpleLink({ href, label, isActive = false, onClose }: MobileSimpleLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className={cn(
        "block px-4 py-3 font-medium transition-colors border-b border-white/10",
        "text-white hover:bg-white/10",
        isActive && "bg-white/20"
      )}
      data-testid={`link-mobile-nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {label}
    </Link>
  );
}

export function Navigation({ onSearch }: NavigationProps = {}) {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery.trim());
      }
      setLocation(`/expeditions?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery.trim());
      }
      setLocation(`/expeditions?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
      setSearchQuery("");
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#00685d]">
      <div className="flex">
        {/* Logo Section */}
        <div className="flex items-center px-4 h-[65px]">
          <Link href="/" className="flex items-center" data-testid="link-home-logo">
            <img src={logoImage} alt="North Karakoram" className="h-14 w-auto" />
          </Link>
        </div>

        {/* Navigation Section */}
        <div className="flex-1">
          <div className="container mx-auto px-4">
            <div className="flex h-[65px] items-center justify-between gap-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                <NavLink href="/" label="Home" isActive={location === "/"} />

                <DropdownMenu
                  trigger="Expedition"
                  items={expeditionItems}
                  isCategory={true}
                  isActive={location === "/expeditions" || location.startsWith("/expedition/")}
                />

                <DropdownMenu
                  trigger="Trekking"
                  items={trekkingItems}
                  isCategory={true}
                  isActive={location === "/trekking"}
                />

                <DropdownMenu
                  trigger="Tour"
                  items={tourItems}
                  isCategory={true}
                  isActive={location === "/tours"}
                />

                <DropdownMenu
                  trigger="Rock Climbing"
                  items={rockClimbingItems}
                  isCategory={false}
                  isActive={false}
                />

                <NavLink href="/about" label="Travel Info" isActive={location === "/about"} />

                <DropdownMenu
                  trigger="About Us"
                  items={aboutItems}
                  isCategory={false}
                  isActive={location === "/about" || location === "/team"}
                />

                <NavLink href="/contact" label="Contact" isActive={location === "/contact"} />
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-2 ml-auto">
                {/* Search */}
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="relative hidden sm:flex items-center">
                    <Input
                      type="search"
                      placeholder="Search trips..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48 pr-8 bg-white/20 text-white placeholder:text-white/70 border-white/30 focus:border-white"
                      data-testid="input-search"
                      autoFocus
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      type="button"
                      className="absolute right-0 text-white hover:bg-white/10"
                      onClick={() => setSearchOpen(false)}
                      data-testid="button-close-search"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </form>
                ) : (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    onClick={() => setSearchOpen(true)}
                    data-testid="button-open-search"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                )}

                <ThemeToggle />

                {/* Book Now Button */}
                <Link href="/contact" className="hidden sm:block">
                  <Button
                    className="bg-[#f58220] hover:bg-[#e07210] text-white font-medium px-4 py-2 rounded-md transition-colors"
                    data-testid="button-book-now-header"
                  >
                    Book Now
                  </Button>
                </Link>

                {/* Mobile Menu Trigger */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="lg:hidden text-white hover:bg-white/10"
                      data-testid="button-mobile-menu"
                    >
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[320px] flex flex-col p-0 bg-[#00685d] border-l border-white/10"
                  >
                    <div className="flex flex-col flex-1 overflow-hidden">
                      {/* Mobile Header */}
                      <div className="flex items-center justify-between p-4 border-b border-white/10">
                        <img src={logoImage} alt="North Karakoram" className="h-12 w-auto" />
                      </div>

                      {/* Mobile Search */}
                      <form onSubmit={handleMobileSearch} className="relative px-4 py-3 border-b border-white/10">
                        <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                        <Input
                          type="search"
                          placeholder="Search trips..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                          data-testid="input-mobile-search"
                        />
                      </form>

                      {/* Mobile Nav Items with Dropdowns */}
                      <nav className="flex-1 overflow-y-auto">
                        {/* Home - Simple Link */}
                        <MobileSimpleLink
                          href="/"
                          label="Home"
                          isActive={location === "/"}
                          onClose={closeMobileMenu}
                        />

                        {/* Expeditions - Accordion with nested categories */}
                        <MobileAccordionItem
                          label="Expeditions"
                          items={expeditionItems}
                          isCategory={true}
                          onClose={closeMobileMenu}
                          location={location}
                        />

                        {/* Trekking - Accordion with nested categories */}
                        <MobileAccordionItem
                          label="Trekking"
                          items={trekkingItems}
                          isCategory={true}
                          onClose={closeMobileMenu}
                          location={location}
                        />

                        {/* Tours - Accordion with nested categories */}
                        <MobileAccordionItem
                          label="Tours"
                          items={tourItems}
                          isCategory={true}
                          onClose={closeMobileMenu}
                          location={location}
                        />

                        {/* Rock Climbing - Accordion with simple list */}
                        <MobileAccordionItem
                          label="Rock Climbing"
                          items={rockClimbingItems}
                          isCategory={false}
                          onClose={closeMobileMenu}
                          location={location}
                        />

                        {/* Travel Info - Simple Link */}
                        <MobileSimpleLink
                          href="/about"
                          label="Travel Info"
                          isActive={location === "/about"}
                          onClose={closeMobileMenu}
                        />

                        {/* About Us - Accordion with simple list */}
                        <MobileAccordionItem
                          label="About Us"
                          items={aboutItems}
                          isCategory={false}
                          onClose={closeMobileMenu}
                          location={location}
                        />

                        {/* Contact - Simple Link */}
                        <MobileSimpleLink
                          href="/contact"
                          label="Contact"
                          isActive={location === "/contact"}
                          onClose={closeMobileMenu}
                        />
                      </nav>

                      {/* Mobile Book Now */}
                      <div className="p-4 border-t border-white/10">
                        <Link href="/contact" onClick={closeMobileMenu}>
                          <Button
                            className="w-full bg-[#f58220] hover:bg-[#e07210] text-white font-medium py-3"
                            data-testid="button-mobile-book-now"
                          >
                            Book Now
                          </Button>
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
