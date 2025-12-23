import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import mountainImage from "@assets/stock_images/mountain_trekking_ex_3477c925.jpg";
import { AlertCircle, CheckCircle2, DollarSign, Users } from "lucide-react";

const feeCategories = [
  {
    title: "The 8,000m Giants",
    description: "K2, Nanga Parbat, Broad Peak, and the Gasherbrums",
    items: [
      "Standard Season (Summer): Full royalty rates apply",
      "Discounted Season (Winter/Autumn): Substantial reductions are often available",
      "Team Size: Fees cover a standard team size (up to 7 members). Additional per-person charges for larger teams"
    ]
  },
  {
    title: "7,000m to 7,500m Peaks",
    description: "Gasherbrum IV, Masherbrum, Rakaposhi, and Spantik",
    items: [
      "Fees for these peaks are tiered based on exact altitude",
      "Significant discounts are applied for climbs attempted outside the peak summer window",
      "Attractive mid-range objectives for technical alpine teams"
    ]
  },
  {
    title: "6,500m to 7,000m Peaks",
    description: "Summits in the Trango Towers group",
    items: [
      "Lower royalty fee structure compared to 8,000m giants",
      "Making them attractive objectives for technical alpine teams",
      "Still require royalty payment and liaison officer"
    ]
  },
  {
    title: "Peaks Below 6,500m (Royalty Free)",
    description: "Waived fees to promote tourism and alpine climbing",
    items: [
      "Pastore Peak (6,209m)",
      "Mingling Sar (6,050m)",
      "Laila Peak (6,096m)",
      "Incredibly cost-effective options for high-altitude experience"
    ]
  }
];

const essentialRegs = [
  {
    icon: Users,
    title: "Liaison Officer (LO)",
    description: "Required for all peaks above 6,500m or any peak within a restricted zone. Team is responsible for LO's equipment, food, transport, and daily allowance."
  },
  {
    icon: AlertCircle,
    title: "Environmental Fee",
    description: "Non-refundable mandatory fee for all expeditions contributing toward waste management and conservation efforts in the region."
  },
  {
    icon: DollarSign,
    title: "Briefing & De-Briefing",
    description: "Every expedition must attend mandatory briefing at the Alpine Club of Pakistan in Islamabad before the trip and de-briefing upon return."
  },
  {
    icon: CheckCircle2,
    title: "Search & Rescue",
    description: "A deposit or guarantee for helicopter rescue is mandatory before the permit is issued."
  }
];

const whatsCovered = [
  "All Government Royalty Fees",
  "Central Karakoram National Park (CKNP) Entry Fees",
  "Liaison Officer Salary, Kit & Allowances",
  "Waste Management Fees",
  "Permit Process Handling (Briefing/De-Briefing)"
];

export default function PeakRoyalty() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative h-[40vh] min-h-[300px]">
          <img
            src={mountainImage}
            alt="Peak Royalty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-lg mb-2">Government Fees & Conservation</p>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Peak Royalty Fees in Pakistan
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-muted-foreground text-lg mb-4">
                In Pakistan, the Government of Gilgit-Baltistan and the Ministry of Tourism require all climbing expeditions attempting peaks above 6,500 meters to pay a royalty fee. These fees are vital for the conservation of our mountain ranges, the maintenance of trekking routes, and the economic support of local communities.
              </p>
              <p className="text-muted-foreground text-lg">
                At North Karakoram, we believe in complete transparency. While these government fees are typically included in our full-service expedition packages, understanding the regulatory structure helps you better plan your adventure.
              </p>
            </div>

            {/* Royalty Rates Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl mb-2">Royalty Rates (2024-2025)</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Royalty fees are strictly determined by the altitude of the peak and the season of the climb. To encourage off-season climbing, the government frequently offers significant discounts for winter and autumn expeditions compared to the standard summer season.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {feeCategories.map((category, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-normal">{category.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-8 italic">
                Note: Official rates change periodically. Please contact us for the latest official fee structure for your team size and target peak.
              </p>
            </div>

            {/* Essential Regulations */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-center mb-12">Essential Regulations</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {essentialRegs.map((reg, idx) => {
                  const Icon = reg.icon;
                  return (
                    <Card key={idx}>
                      <CardContent className="p-6">
                        <div className="flex gap-4 mb-3">
                          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg leading-tight pt-1">{reg.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{reg.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* What North Karakoram Covers */}
            <div className="mb-16">
              <Card className="max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle>What Does North Karakoram Cover?</CardTitle>
                  <p className="text-sm text-muted-foreground font-normal">
                    Unless you have booked "Base Camp Services Only," our full-service expedition packages generally include:
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whatsCovered.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Disclaimer and CTA */}
            <div className="max-w-3xl mx-auto">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Disclaimer:</strong> Royalty rates are subject to change by the Government of Pakistan without prior notice.
                  </p>
                  <p className="font-semibold text-foreground mb-4">
                    Planning your ascent? Royalty fees vary by season and team size. We handle the paperwork so you can focus on the climb.
                  </p>
                  <p className="text-foreground font-bold">
                    Contact Us for a Custom Quote
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
