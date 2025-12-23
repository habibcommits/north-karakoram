import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const mountainsData = [
  {
    category: "8,000ers (The Death Zone)",
    description: "The 5 highest peaks in Pakistan, attracting elite mountaineers from around the world.",
    peaks: [
      { name: "K2 (Chogori)", height: "8,611m (28,251 ft)", range: "Karakoram", location: "Shigar / Baltoro", difficulty: "Extreme (Technical)" },
      { name: "Nanga Parbat", height: "8,126m (26,660 ft)", range: "Himalayas", location: "Diamer / Astore", difficulty: "Extreme (Killer Mtn)" },
      { name: "Gasherbrum I", height: "8,080m (26,509 ft)", range: "Karakoram", location: "Shigar / Baltoro", difficulty: "Very Hard" },
      { name: "Broad Peak", height: "8,051m (26,414 ft)", range: "Karakoram", location: "Shigar / Baltoro", difficulty: "Hard" },
      { name: "Gasherbrum II", height: "8,035m (26,362 ft)", range: "Karakoram", location: "Shigar / Baltoro", difficulty: "Hard (Classic 8000er)" },
    ]
  },
  {
    category: "7,000m Peaks (Expedition Giants)",
    description: "Serious mountaineering objectives that require technical climbing skills and high-altitude experience.",
    peaks: [
      { name: "Gasherbrum III", height: "7,952m (26,093 ft)", range: "Karakoram", location: "Shigar", difficulty: "Very Hard" },
      { name: "Gasherbrum IV", height: "7,925m (26,001 ft)", range: "Karakoram", location: "Shigar", difficulty: "Hard/Very Hard" },
      { name: "Masherbrum", height: "7,806m (25,659 ft)", range: "Karakoram", location: "Khaplu Valley", difficulty: "Hard" },
      { name: "Spantik", height: "7,027m (23,041 ft)", range: "Karakoram", location: "Gilgit", difficulty: "Hard" },
      { name: "Chogolisa", height: "7,668m (25,148 ft)", range: "Karakoram", location: "Shigar", difficulty: "Hard" },
      { name: "K6", height: "7,495m (24,590 ft)", range: "Karakoram", location: "Baltistan", difficulty: "Technical" },
      { name: "Rakaposhi", height: "7,788m (25,551 ft)", range: "Karakoram", location: "Nager Valley", difficulty: "Hard" },
    ]
  },
  {
    category: "6,000m Peaks (Climbing & Technical Trekking)",
    description: "Perfect for experienced trekkers and climbers looking to build high-altitude mountaineering experience.",
    peaks: [
      { name: "Laila Peak", height: "6,096m (20,000 ft)", range: "Karakoram", location: "Hushe Valley", difficulty: "Moderate/Hard" },
      { name: "Pastore Peak", height: "6,260m (20,538 ft)", range: "Karakoram", location: "Shigar", difficulty: "Moderate" },
      { name: "Khusrogang", height: "6,400m (20,997 ft)", range: "Karakoram", location: "Shigar", difficulty: "Hard" },
      { name: "Gondogoro Peak", height: "5,790m (19,003 ft)", range: "Karakoram", location: "Hushe Valley", difficulty: "Moderate" },
    ]
  }
];

export default function Mountains() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Mountains of Pakistan</h1>
            <p className="text-white/90 text-lg">Explore the world's highest and most challenging peaks</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-12">
            {mountainsData.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-bold text-foreground mb-2">{section.category}</h2>
                <p className="text-muted-foreground mb-6">{section.description}</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-bold text-foreground">Mountain Name</th>
                        <th className="text-left py-3 px-4 font-bold text-foreground">Height</th>
                        <th className="text-left py-3 px-4 font-bold text-foreground">Range</th>
                        <th className="text-left py-3 px-4 font-bold text-foreground">Location</th>
                        <th className="text-left py-3 px-4 font-bold text-foreground">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.peaks.map((peak, peakIdx) => (
                        <tr key={peakIdx} className="border-b border-border hover:bg-muted/50">
                          <td className="py-3 px-4 text-foreground font-medium">{peak.name}</td>
                          <td className="py-3 px-4 text-muted-foreground">{peak.height}</td>
                          <td className="py-3 px-4 text-muted-foreground">{peak.range}</td>
                          <td className="py-3 px-4 text-muted-foreground">{peak.location}</td>
                          <td className="py-3 px-4 text-muted-foreground">{peak.difficulty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <Card className="mt-12 p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Climbing Pakistan's Peaks</h3>
            <p className="text-foreground/80 mb-3">
              Pakistan's mountains offer some of the world's most dramatic and challenging mountaineering experiences. From the technical ice and rock climbing of K2 to the high-altitude mountaineering of the 7000m peaks and the accessible trekking peaks above 6000m, there is something for everyone.
            </p>
            <p className="text-foreground/80">
              Whether you're an experienced mountaineer seeking to conquer the world's highest peaks or a trekker looking for stunning alpine scenery, Pakistan's mountains offer unforgettable adventures and breathtaking experiences.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
