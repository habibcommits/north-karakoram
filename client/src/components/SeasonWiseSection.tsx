import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import hunzaImage from "@assets/stock_images/hunza_valley_spring__a35ac63e.jpg";
import fairyMeadowImage from "@assets/stock_images/fairy_meadow_mountai_a8bee0ee.jpg";
import skarduImage from "@assets/stock_images/skardu_valley_lake_m_4b59ff74.jpg";
import deosaImage from "@assets/stock_images/deosai_plateau_wildf_f1a3427f.jpg";
import backgroundImage from "@assets/stock_images/3a9219b7-c34b-4eae-a155-3b1f857b05ba.jfif";

export function SeasonWiseSection() {
  const tours = [
    {
      title: "Hunza Valley Blossom Tour",
      location: "Hunza Valley",
      description: "Experience the spectacular spring blossoms across Hunza Valley. A scenic journey through blooming orchards and pristine landscapes.",
      season: "Spring",
      image: hunzaImage,
    },
    {
      title: "Fairy Meadow Tour",
      location: "Nanga Parbat",
      description: "Trek to the stunning Fairy Meadow with breathtaking views of Nanga Parbat. Experience alpine meadows and mountain serenity.",
      season: "Summer",
      image: fairyMeadowImage,
    },
    {
      title: "Skardu Valley Summer Tour",
      location: "Skardu",
      description: "Explore the beautiful Skardu Valley during summer. Visit pristine lakes, ancient monasteries, and mountain passes.",
      season: "Summer",
      image: skarduImage,
    },
    {
      title: "Deosai Plateau Tour",
      location: "Baltistan",
      description: "Discover the alpine beauty of Deosai Plateau. Trek through wildflower meadows and enjoy panoramic mountain views.",
      season: "Summer",
      image: deosaImage,
    },
  ];

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
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-[hsl(177_84%_35%)] font-medium mb-2">OUR TOURS</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl">
            Get a Tour with North Karakoram
          </h2>
          <h3 className="text-[hsl(0_0%_70%)] mt-4 max-w-2xl mx-auto">
            Discover northern Pakistan with North Karakoram's guided tours. From scenic mountain valleys to culturally rich villages, our experienced team delivers safe, well-organized, and immersive travel experiences for every visitor.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, idx) => (
            <Card
              key={idx}
              className="overflow-hidden flex flex-col h-full"
              data-testid={`card-tour-${idx}`}
            >
              <div
                className="h-48 flex items-end p-4 relative bg-cover bg-center"
                style={{
                  backgroundImage: `url(${tour.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div
                  className="px-3 py-2 rounded font-bold text-white text-sm relative z-10"
                  style={{ backgroundColor: "#ff9800" }}
                >
                  {tour.season.toUpperCase()}
                </div>
              </div>

              <div className="flex-1 p-4 flex flex-col">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {tour.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">
                  {tour.location}
                </p>

                <p className="text-sm text-muted-foreground flex-1 mb-4">
                  {tour.description}
                </p>

                <Link href="/tours">
                  <Button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 text-primary-foreground border border-primary-border min-h-9 px-4 py-2 w-full rounded-full font-semibold bg-[#f58220]"
                    data-testid={`button-tour-${idx}`}
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/tours">
            <Button
              size="lg"
              className="rounded-full font-semibold px-8 bg-[#0d7678] hover:bg-[#0d7678]/90 text-white"
              data-testid="button-explore-all-tours"
            >
              Explore All Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
