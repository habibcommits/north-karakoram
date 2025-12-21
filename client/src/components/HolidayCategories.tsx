import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import tourIcon from "@assets/tour_(1)_1766216911792.png";
import climbingIcon from "@assets/family_tours_1766216911791.png";
import expeditionIcon from "@assets/expitions_1766216911790.png";
import trekkingIcon from "@assets/treking_1766216911793.png";
import backgroundImage from "@assets/stock_images/bg-for-holiday.jfif";

// Available holiday category options with metadata
// Each object contains title, description, icon, and navigation link
const categories = [
  {
    title: "Expeditions",
    description: "Summit the world's highest peaks",
    icon: expeditionIcon,
    href: "/expeditions",
  },
  {
    title: "Trekking",
    description: "Trek through pristine mountain trails",
    icon: trekkingIcon,
    href: "/trekking",
  },
  {
    title: "Tours",
    description: "Explore scenic routes and cultural experiences",
    icon: tourIcon,
    href: "/tours",
  },
  {
    title: "Family Tours",
    description: "Family-friendly adventure experiences",
    icon: climbingIcon,
    href: "/expeditions",
  },
];

// Holiday categories section with interactive cards and parallax background
export function HolidayCategories() {
  return (
    <section
      className="py-16 section-fade relative overflow-hidden"
      data-testid="section-holiday-categories"
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Mountain background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-white/80 font-medium mb-2">Find a Holiday by</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Holiday Type
          </h2>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.title} href={category.href}>
              <Card
                className="p-6 text-center cursor-pointer group h-full transition-all hover-elevate border-2 flex flex-col items-center justify-center"
                style={{
                  borderColor: "#ffffff",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <div className="relative h-48 w-full flex items-center justify-center">
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="w-full h-full object-contain"
                      style={{ filter: "invert(1) brightness(1.1)" }}
                    />
                  </div>

                  {/* Hover title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="font-heading font-bold text-xl text-primary">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <h4 className="font-heading font-bold text-xl text-white mt-4 transition-opacity duration-300 group-hover:opacity-0">
                  {category.title}
                </h4>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

