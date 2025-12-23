import { AboutSection } from "@/components/AboutSection";
import { ClientReviews } from "@/components/ClientReviews";
import { ExpeditionsSection } from "@/components/ExpeditionsSection";
import { Hero } from "@/components/Hero";
import { HolidayCategories } from "@/components/HolidayCategories";
import { SeasonWiseSection } from "@/components/SeasonWiseSection";
import { SocialIcons } from "@/components/SocialIcons";
import { TrekkingSection } from "@/components/TrekkingSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <HolidayCategories />
        <SeasonWiseSection />
        <TrekkingSection />
        <ExpeditionsSection />
        <ClientReviews />
        <SocialIcons />
      </main>
    </div>
  );
}
