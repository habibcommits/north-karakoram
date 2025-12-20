import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import mountainImage1 from "@assets/stock_images/mountain_landscape_s_61ab8953.jpg";
import mountainImage2 from "@assets/stock_images/mountain_landscape_s_c524040f.jpg";
import mountainImage3 from "@assets/stock_images/mountain_landscape_s_e00bb14a.jpg";
import mountainImage4 from "@assets/stock_images/mountain_landscape_s_39d9031b.jpg";

// Key selling points displayed in the benefits list
const whyChooseUs = [
  "Tailored adventures for every pace",
  "Authentic culture and heritage",
  "Expert guidance and full support",
  "Small groups, deeper connections",
  "Not just adventure. Life-changing experience",
  "Adventure. Culture. Mountains",
];

// About section component displaying company introduction, benefits, and image gallery
export function AboutSection() {
  return (
    <section className="py-12 section-fade" data-testid="section-about">
      <div className="container mx-auto px-4">
        {/* Two-column layout: text content on left, image gallery on right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN: Text Content */}
          <div>
            {/* Header with company name */}
            <h3 className="font-heading font-bold text-lg mb-2 text-[#00685d]">
              Welcome to
            </h3>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              North Karakoram
            </h2>

            {/* Company description paragraphs */}
            <p className="text-muted-foreground mb-6 leading-relaxed">Step into the extraordinary with North Karakoram, your licensed guide to the majestic Karakoram and Himalaya ranges. We offer trekking, hiking, and mountaineering expeditions designed to give you more than just a journey an immersive experience of the mountains, the people, and the culture.</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              What makes us different? Every adventure is personalized, small-group, and authentic. Walk through hidden valleys, connect with local communities, and discover the rich heritage that thrives alongside the peaks. Whether you seek breathtaking landscapes, challenging trails, or cultural encounters, we craft each experience to be safe, seamless, and unforgettable.
            </p>

            {/* Benefits/Reasons why section heading */}
            <h3 className="font-heading font-bold text-2xl mb-6 text-foreground">Why choose North Karakoram?</h3>

            {/* Benefits list with checkmarks - displays in 1 column on mobile, 2 columns on desktop */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {whyChooseUs.map((item, index) => (
                <li 
                  key={index} 
                  className="bg-white border-2 border-[#00685d] p-4 flex items-center justify-start gap-3 rounded-xl hover-elevate transition-all min-h-[56px]" 
                  data-testid={`item-benefit-${index}`}
                >
                  {/* Checkmark icon circle */}
                  <div className="w-6 h-6 rounded-full bg-[#00685d] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-4 h-4 text-white font-bold" />
                  </div>
                  {/* Benefit text */}
                  <span className="text-sm md:text-base text-[#1a1a1a] font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Learn More button - links to team page */}
              <Link href="/team">
                <Button 
                  size="lg" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 text-white border border-[#00685d] min-h-10 rounded-md px-8 bg-[#00685d]" 
                  data-testid="button-about-learn-more"
                >
                  Learn More
                </Button>
              </Link>

              {/* Contact Us button - links to contact page */}
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hover-elevate active-elevate-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border-2 border-[#00685d] shadow-xs active:shadow-none min-h-10 rounded-md px-8 bg-[#00685d] text-[#ffffff]" 
                  data-testid="button-about-contact"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Image Gallery Grid - 2x2 layout on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 h-full min-h-64 md:min-h-96">
            {/* Mountain image 1 */}
            <div className="rounded-md overflow-hidden h-48 md:h-auto">
              <img
                src={mountainImage1}
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mountain image 2 */}
            <div className="rounded-md overflow-hidden h-48 md:h-auto">
              <img
                src={mountainImage2}
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mountain image 3 */}
            <div className="rounded-md overflow-hidden h-48 md:h-auto">
              <img
                src={mountainImage3}
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mountain image 4 */}
            <div className="rounded-md overflow-hidden h-48 md:h-auto">
              <img
                src={mountainImage4}
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
