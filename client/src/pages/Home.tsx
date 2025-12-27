import { AboutSection } from "@/components/AboutSection";
import { ClientReviews } from "@/components/ClientReviews";
import { ExpeditionsSection } from "@/components/ExpeditionsSection";
import { Hero } from "@/components/Hero";
import { HolidayCategories } from "@/components/HolidayCategories";
import { RockClimbingSection } from "@/components/RockClimbingSection";
import { SeasonWiseSection } from "@/components/SeasonWiseSection";
import { SocialIcons } from "@/components/SocialIcons";
import { TrekkingSection } from "@/components/TrekkingSection";
import { SITE_CONFIG } from "@/seo/config";
import { usePageSEO } from "@/seo/hooks/useSeo";
import { SEOHead } from "@/seo/SEOHead";
import { CollectionSchema } from "@/seo/StructuredData";

export default function Home() {
  const seo = usePageSEO('home');

  // Featured expeditions for schema
  const featuredExpeditions = [
    { name: 'K2 Expedition', url: `${SITE_CONFIG.url}/expedition/k2-expedition` },
    { name: 'Broad Peak Expedition', url: `${SITE_CONFIG.url}/expedition/broad-peak` },
    { name: 'K2 Base Camp Trek', url: `${SITE_CONFIG.url}/trekking/k2-base-camp` },
  ];

  return (
    <>
      {seo && <SEOHead seo={seo} path="/" />}
      <CollectionSchema
        name="Featured Adventures"
        description="Explore our top expeditions and treks in Pakistan"
        url={SITE_CONFIG.url}
        items={featuredExpeditions}
      />

      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <HolidayCategories />
          <SeasonWiseSection />
          <TrekkingSection />
          <ExpeditionsSection />
          <RockClimbingSection />
          <ClientReviews />
          <SocialIcons />
        </main>
      </div>
    </>
  );
}
