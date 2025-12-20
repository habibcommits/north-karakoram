/**
 * Navigation.tsx - Main Site Navigation Component
 * 
 * Responsive navigation header with:
 * - Desktop: Full mega-menu dropdowns for Expeditions, Trekking, and About sections
 * - Mobile: Slide-out sheet menu with simplified navigation
 * - Search functionality and Book Now CTA button
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoImage from "@assets/white_logo_(3)_1766041182585.png";

interface NavigationProps {
  onSearch?: (query: string) => void;
}

const expeditionItems = {
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
  "Rock Climbing": [
    { label: "Trango Tower Expedition", href: "/expeditions" },
    { label: "Latok Ogri Expedition", href: "/expeditions" },
    { label: "Charakusa Valley Expedition", href: "/expeditions" },
    { label: "Nangma Valley Expedition", href: "/expeditions" },
  ],
};

const trekkingItems = {
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

const tourItems = {
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

const aboutItems = [
  { label: "Our Team", href: "/team" },
  { label: "Mountaineering Rule", href: "/about" },
  { label: "Mountains List In Pakistan", href: "/about" },
  { label: "Peak Royalty In Pakistan", href: "/about" },
  { label: "Term & Conditions", href: "/about" },
  { label: "Company Info", href: "/about" },
];

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "Expeditions", href: "/expeditions" },
  { label: "Trekking", href: "/trekking" },
  { label: "Tours", href: "/tours" },
  { label: "Rock Climbing", href: "/expeditions" },
  { label: "Our Team", href: "/team" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation({ onSearch }: NavigationProps = {}) {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTourSeason, setActiveTourSeason] = useState("Spring Season");

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border">
      <div className="flex">
        <div className="flex items-center px-4 h-[65px] bg-[#00685d]">
          <Link href="/" className="flex items-center" data-testid="link-home-logo">
            <img src={logoImage} alt="North Karakoram" className="h-14 w-auto" />
          </Link>
        </div>
        <div className="flex-1 bg-[#00685d]">
          <div className="container mx-auto px-4">
            <div className="flex h-[65px] items-center justify-between gap-4">
              <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" className={cn(navigationMenuTriggerStyle(), "bg-primary text-white hover:text-white hover:bg-primary/80 text-base font-bold border-2 border-transparent hover:border-[#f58220]", location === "/" && "bg-primary/80")} data-testid="link-nav-home">
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("bg-primary text-white hover:bg-primary hover:text-white data-[state=open]:bg-primary/80 text-base font-bold border-2 border-transparent hover:border-[#f58220]", location === "/expeditions" && "bg-primary/80")} data-testid="link-nav-expeditions">
                      Expedition
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-primary">
                      <ul className="w-[200px] p-2">
                        {Object.keys(expeditionItems).map((category) => (
                          <li key={category}>
                            <Link 
                              href="/expeditions"
                              className="block text-sm text-white font-bold rounded-md transition-colors py-2 px-3"
                              data-testid={`link-expedition-${category.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("bg-primary text-white hover:text-white hover:bg-primary/80 data-[state=open]:bg-primary/80 text-base font-bold border-2 border-transparent hover:border-[#f58220]", location === "/trekking" && "bg-primary/80")} data-testid="link-nav-trekking">
                      Trekking
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-primary">
                      <ul className="w-[400px] p-2">
                        {Object.entries(trekkingItems).flatMap(([category, items]) =>
                          items.map((item) => (
                            <li key={item.label}>
                              <Link 
                                href={item.href}
                                className="block text-sm text-white font-bold py-2 px-3 border-2 border-transparent hover:border-white rounded-md transition-colors"
                                data-testid={`link-trekking-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("bg-primary text-white hover:text-white hover:bg-primary/80 data-[state=open]:bg-primary/80 text-base font-bold border-2 border-transparent hover:border-[#f58220]", location === "/tours" && "bg-primary/80")} data-testid="link-nav-tours">
                      Tour
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-primary">
                      <div className="flex">
                        <div className="flex flex-col w-auto border-r border-primary-foreground/20">
                          {Object.keys(tourItems).map((season) => (
                            <button
                              key={season}
                              onMouseEnter={() => setActiveTourSeason(season)}
                              className={cn(
                                "text-left px-4 py-3 text-sm font-bold transition-colors border-l-2 border-l-transparent hover:border-l-white whitespace-nowrap",
                                activeTourSeason === season
                                  ? "bg-primary/80 text-white border-l-white"
                                  : "text-white hover:bg-primary/50"
                              )}
                              data-testid={`button-tour-season-${season.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {season}
                            </button>
                          ))}
                        </div>
                        <div className="flex-1 min-w-[350px] p-3">
                          <div className="flex flex-col gap-1">
                            {tourItems[activeTourSeason as keyof typeof tourItems]?.map((item) => (
                              <Link 
                                key={item.label}
                                href={item.href}
                                className="text-sm text-white font-bold py-2 px-3 border-l-2 border-l-transparent hover:border-l-white transition-colors rounded-md hover:bg-primary/50 whitespace-nowrap"
                                data-testid={`link-tour-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("bg-primary text-white hover:text-white hover:bg-primary/80 data-[state=open]:bg-primary/80 text-base font-bold border-2 border-transparent hover:border-[#f58220]", location === "/expeditions" && "bg-primary/80")} data-testid="link-nav-rock-climbing">
                      Rock Climbing
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-primary">
                      <ul className="w-[250px] p-2">
                        {expeditionItems["Rock Climbing"]?.map((item) => (
                          <li key={item.label}>
                            <Link 
                              href={item.href}
                              className="block text-sm text-white font-bold rounded-md transition-colors py-2 px-3 border-2 border-transparent hover:border-white"
                              data-testid={`link-rock-climbing-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" className={cn(navigationMenuTriggerStyle(), "bg-primary text-white hover:text-white hover:bg-primary/80 text-base font-bold border-2 border-transparent hover:border-[#f58220]", location === "/about" && "bg-primary/80")} data-testid="link-nav-travel-info">
                      Travel Info
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn("bg-primary text-white hover:text-white hover:bg-primary/80 data-[state=open]:bg-primary/80 text-base font-bold border-2 border-transparent hover:border-[#f58220]", location === "/about" && "bg-primary/80")} data-testid="link-nav-about-us">
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-primary">
                      <ul className="w-[200px] p-2">
                        {aboutItems.map((item) => (
                          <li key={item.label}>
                            <Link 
                              href={item.href}
                              className="block text-sm text-white font-bold rounded-md transition-colors py-2 px-3 border-2 border-transparent hover:border-white"
                              data-testid={`link-about-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" className={cn(navigationMenuTriggerStyle(), "bg-primary text-white hover:text-white hover:bg-primary/80 text-base font-bold border-2 border-transparent hover:border-[#f58220]", location === "/contact" && "bg-primary/80")} data-testid="link-nav-contact">
                      Contact
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-1 sm:gap-2 ml-auto">
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="relative hidden sm:flex items-center">
                    <Input
                      type="search"
                      placeholder="Search trips..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48 pr-8 bg-white/20 text-primary-foreground placeholder:text-primary-foreground/70 border-primary-foreground/30"
                      data-testid="input-search"
                      autoFocus
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      type="button"
                      className="absolute right-0 text-primary-foreground hover:bg-primary/80"
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
                    className="text-primary-foreground hover:bg-primary/80"
                    onClick={() => setSearchOpen(true)}
                    data-testid="button-open-search"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                )}

                <ThemeToggle />

                <Link href="/contact" className="hidden sm:block">
                  <Button className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border border-primary-border min-h-9 px-4 py-2 text-secondary-foreground bg-[#f58220]" data-testid="button-book-now-header">
                    Book Now
                  </Button>
                </Link>

                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="lg:hidden text-primary-foreground hover:bg-primary/80"
                      data-testid="button-mobile-menu"
                    >
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] flex flex-col p-0">
                    <div className="flex flex-col flex-1 overflow-hidden">
                      <div className="flex items-center mb-4 mt-8 px-6">
                        <img src={logoImage} alt="North Karakoram" className="h-20 w-auto" />
                      </div>

                      <div className="relative px-6 mb-4">
                        <Search className="absolute left-9 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search trips..."
                          className="pl-10"
                          data-testid="input-mobile-search"
                        />
                      </div>

                      <nav className="flex flex-col gap-1 flex-1 overflow-y-auto px-6">
                        {mobileNavItems.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                            <Button
                              variant="ghost"
                              className={`w-full justify-start font-medium ${location === item.href ? "bg-accent text-accent-foreground" : ""}`}
                              data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {item.label}
                            </Button>
                          </Link>
                        ))}
                      </nav>

                      <div className="px-6 py-4 border-t mt-4">
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="w-full" data-testid="button-mobile-book-now">
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
