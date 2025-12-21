import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Plane, Calendar, Heart, Backpack, DollarSign, Users } from "lucide-react";
import expeditionImage from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";

const sections = [
  {
    icon: AlertCircle,
    title: "Visa Requirements",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">
          For international travelers, obtaining a visa for Pakistan is now easier than ever with the Online E-Visa System.
        </p>
        <div>
          <h4 className="font-semibold mb-1">Tourist Visa</h4>
          <p className="text-muted-foreground">Most nationalities are eligible for an E-Visa.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Trekking Visa</h4>
          <p className="text-muted-foreground">
            For restricted zones (like the Baltoro Glacier/K2 Base Camp), a specific Trekking Visa is required.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Our Support</h4>
          <p className="text-muted-foreground">
            As your licensed tour operator, North Karakoram will provide the official Letter of Invitation (LOI) and all necessary supporting documents required for your visa application.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Plane,
    title: "Getting Here",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">Your journey usually begins in Islamabad, the capital of Pakistan.</p>
        <div>
          <h4 className="font-semibold mb-1">International Arrival</h4>
          <p className="text-muted-foreground">
            Fly into Islamabad International Airport (ISB). We recommend arriving 1-2 days before your tour starts to rest and handle any logistical delays.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Travel to Skardu/Gilgit</h4>
          <p className="text-muted-foreground font-semibold">By Air:</p>
          <p className="text-muted-foreground ml-3">
            The most convenient route is a 1-hour scenic flight from Islamabad to Skardu or Gilgit. This flight offers breathtaking views of Nanga Parbat and the Karakoram range. Note: Flights are weather-dependent.
          </p>
          <p className="text-muted-foreground font-semibold mt-2">By Road:</p>
          <p className="text-muted-foreground ml-3">
            If flights are cancelled, we travel via the legendary Karakoram Highway (KKH). This is an adventure in itself, following the Indus River through Kohistan and Chilas.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Calendar,
    title: "Best Time to Visit",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">The ideal time depends on the adventure you seek:</p>
        <div>
          <h4 className="font-semibold mb-1">Summer (June – August)</h4>
          <p className="text-muted-foreground">
            The prime season for high-altitude trekking (K2 Base Camp, Gondogoro La) and mountaineering. The passes are open, and the weather is generally stable.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Spring (April – May) & Autumn (September – October)</h4>
          <p className="text-muted-foreground">
            Perfect for cultural tours, sightseeing in Hunza/Skardu valleys, and lower-altitude hikes. The cherry blossoms in spring and golden foliage in autumn are spectacular.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Winter (December – March)</h4>
          <p className="text-muted-foreground">For specialized expeditions, such as Snow Leopard tracking or winter survival treks.</p>
        </div>
      </div>
    ),
  },
  {
    icon: Heart,
    title: "Health & Altitude",
    content: (
      <div className="space-y-3 text-sm">
        <div>
          <h4 className="font-semibold mb-1">Acclimatization</h4>
          <p className="text-muted-foreground">
            Skardu is located at approx. 2,228m (7,310ft). Our itineraries are designed with gradual ascent to prevent Altitude Sickness (AMS).
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Fitness</h4>
          <p className="text-muted-foreground">
            Please ensure you are physically fit for your chosen activity. For technical treks, cardiovascular endurance is key.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Insurance</h4>
          <p className="text-muted-foreground">
            Mandatory for trekkers. You must have travel insurance that covers medical evacuation (helicopter rescue) up to 6,000m (or the max altitude of your trek).
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Backpack,
    title: "Packing Essentials",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">
          While we provide camping equipment (tents, mats) for treks, you should bring personal gear including:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2"><span className="font-semibold min-w-fit">Layering System:</span> <span>Base layers, insulating fleece, and a waterproof/windproof outer shell.</span></li>
          <li className="flex gap-2"><span className="font-semibold min-w-fit">Footwear:</span> <span>Broken-in trekking boots with good ankle support.</span></li>
          <li className="flex gap-2"><span className="font-semibold min-w-fit">Sun Protection:</span> <span>High SPF sunscreen, lip balm, sunglasses, and a sun hat (UV radiation is high at altitude).</span></li>
          <li className="flex gap-2"><span className="font-semibold min-w-fit">Hydration:</span> <span>Reusable water bottles or hydration bladders.</span></li>
          <li className="flex gap-2"><span className="font-semibold min-w-fit">Personal Meds:</span> <span>A basic first aid kit and any personal prescription medications.</span></li>
        </ul>
      </div>
    ),
  },
  {
    icon: DollarSign,
    title: "Money & Connectivity",
    content: (
      <div className="space-y-3 text-sm">
        <div>
          <h4 className="font-semibold mb-1">Currency</h4>
          <p className="text-muted-foreground">The currency is the Pakistani Rupee (PKR).</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Cash is King</h4>
          <p className="text-muted-foreground">
            While major cities like Islamabad have ATMs, they can be unreliable in remote mountainous regions. We recommend carrying sufficient cash for personal expenses, souvenirs, and tips.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Connectivity</h4>
          <p className="text-muted-foreground">
            International roaming often does not work in Gilgit-Baltistan. The local network provider is SCOM. We can assist you in purchasing a local SIM card upon arrival in Skardu for 4G connectivity in major towns.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Cultural Etiquette",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">The people of Gilgit-Baltistan are renowned for their hospitality.</p>
        <div>
          <h4 className="font-semibold mb-1">Dress Code</h4>
          <p className="text-muted-foreground">
            We recommend modest clothing. For men and women, covering shoulders and knees is respectful to local customs.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Photography</h4>
          <p className="text-muted-foreground">Always ask for permission before taking photos of locals, especially women.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Respect</h4>
          <p className="text-muted-foreground">
            The mountains are sacred to many; please follow "Leave No Trace" principles to keep our environment pristine.
          </p>
        </div>
      </div>
    ),
  },
];

export default function TravelInfo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={expeditionImage}
            alt="Travel preparation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Plan Your Journey</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Travel Info
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2">Essential Information</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Preparing for Your Karakoram Adventure
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Preparing for an expedition to the Karakoram and Himalayas is part of the adventure. To ensure your journey with North Karakoram is seamless and stress-free, we have compiled the essential information you need before you pack your bags.
              </p>
            </div>

            {/* Sections Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {sections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <Card key={idx}>
                    <CardContent className="p-6">
                      <div className="flex gap-4 mb-4">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-heading font-semibold text-lg leading-tight pt-1">
                          {section.title}
                        </h3>
                      </div>
                      {section.content}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
