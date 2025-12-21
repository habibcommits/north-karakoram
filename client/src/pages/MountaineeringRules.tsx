import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, TreePine, Users, Backpack, Mountain, Droplet } from "lucide-react";
import mountainImage from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";

const sections = [
  {
    icon: Shield,
    title: "Safety First, Summits Second",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground font-semibold italic">
          The mountain will always be there, but the opportunity to climb it depends on your safety today.
        </p>
        <div>
          <h4 className="font-semibold mb-1">The Turn-Around Rule</h4>
          <p className="text-muted-foreground">
            Respect the "turn-around time" set by your lead guide. If you haven't reached the summit by the designated time, you must descend immediately to ensure a safe return before dark or deteriorating weather.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Weather Authority</h4>
          <p className="text-muted-foreground">
            Weather in the Karakoram and Himalayas can change in minutes. The Lead Guide has the final authority to cancel or alter a climb based on weather conditions.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Health Transparency</h4>
          <p className="text-muted-foreground">
            Never hide an injury or symptom of illness (especially altitude sickness) from your guide. Early detection saves lives.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: TreePine,
    title: "Respect the Environment (Leave No Trace)",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">We act as stewards of these pristine landscapes. We strictly follow the "Leave No Trace" principles.</p>
        <div>
          <h4 className="font-semibold mb-1">Pack It In, Pack It Out</h4>
          <p className="text-muted-foreground">
            Every piece of trash—from food wrappers to used batteries—must be carried back down. Do not bury trash in the snow or hide it under rocks.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Water Sources</h4>
          <p className="text-muted-foreground">
            Do not wash dishes or use soap directly in streams or lakes. Keep water sources clean for local communities and wildlife.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Wildlife</h4>
          <p className="text-muted-foreground">
            Observe wildlife from a distance. Do not feed animals or disrupt their natural behaviors.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "The Team Dynamic",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">Expeditions are built on trust and teamwork.</p>
        <div>
          <h4 className="font-semibold mb-1">Follow the Leader</h4>
          <p className="text-muted-foreground">
            The Expedition Leader or High-Altitude Guide is the captain of the ship. Their instructions regarding route, pace, and safety techniques are non-negotiable.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Stay Together</h4>
          <p className="text-muted-foreground">
            Never wander off from the group without notifying a guide. On technical terrain, maintain the specified rope distance and pace.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Respect Culture</h4>
          <p className="text-muted-foreground">
            Treat our porters, cooks, and local staff with the same respect you treat your fellow climbers. They are the backbone of your expedition.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Backpack,
    title: "Preparation & Gear",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">Success relies on preparation before you even step onto the mountain.</p>
        <div>
          <h4 className="font-semibold mb-1">Mandatory Gear</h4>
          <p className="text-muted-foreground">
            Do not compromise on equipment. You must carry the mandatory gear list provided for your specific expedition (e.g., crampons, harness, down suit).
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Self-Sufficiency</h4>
          <p className="text-muted-foreground">
            While our team supports you, you must be capable of managing your personal gear, layering systems, and basic needs in extreme conditions.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Physical Fitness</h4>
          <p className="text-muted-foreground">
            Arrive in the physical condition required for your objective. Underestimating the physical toll of high altitude endangers the entire team.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Mountain,
    title: "Acclimatization Protocols",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">Altitude is the great equalizer. We follow strict protocols to manage the thin air.</p>
        <div>
          <h4 className="font-semibold mb-1">Climb High, Sleep Low</h4>
          <p className="text-muted-foreground">
            Follow the acclimatization schedule designed by our experts. Do not rush ascents.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Hydration</h4>
          <p className="text-muted-foreground">
            Drink 3-4 liters of water daily. Dehydration accelerates altitude sickness.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">No Alcohol</h4>
          <p className="text-muted-foreground">
            Consumption of alcohol is strictly prohibited during the ascent phase of any high-altitude expedition, as it depresses breathing and masks AMS symptoms.
          </p>
        </div>
      </div>
    ),
  },
];

export default function MountaineeringRules() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={mountainImage}
            alt="Mountaineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Safety & Excellence</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Mountaineering Rules & Guidelines
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2">Our Standards</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Safety, Respect & Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At North Karakoram, we believe that the summit is only half the journey; returning home safely is the other half. Mountaineering in the high ranges requires discipline, respect, and strict adherence to safety protocols. Below are the general rules that every climber and trekker must follow to ensure a safe and successful expedition.
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
