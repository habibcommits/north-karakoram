import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const expeditionCategories = [
  {
    title: "TOP 8000 PEAKS",
    peaks: [
      { name: "K2", elevation: "8611m" },
      { name: "Nanga Parbat", elevation: "8126m" },
      { name: "Gasherbrum II", elevation: "8034m" },
    ],
  },
  {
    title: "TOP 7000 PEAKS",
    peaks: [
      { name: "Gasherbrum III", elevation: "7952m" },
      { name: "Mashabrum", elevation: "7806m" },
      { name: "Spantik", elevation: "7027m" },
    ],
  },
  {
    title: "TOP 6000 PEAKS",
    peaks: [
      { name: "Laila Peak", elevation: "6096m" },
      { name: "Pastore Peak", elevation: "6210m" },
      { name: "Khusrogang", elevation: "6400m" },
    ],
  },
];

export function ExpeditionsSection() {
  return (
    <section className="py-16 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">
            EXPEDITIONS
          </span>
          <h2 className="text-black text-3xl md:text-4xl font-bold mt-2 mb-4">
            Guided Expeditions to Legendary Peaks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            North Karakoram offers professional mountaineering expeditions across the Karakoram and Himalayan ranges. From challenging 6000-meter summits to world-renowned peaks like K2, our experienced guides ensure safe, expertly planned adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expeditionCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg p-6 shadow-lg border flex flex-col"
            >
              <div
                className="rounded px-3 py-2 mb-6 text-white font-bold text-sm inline-block"
                style={{ backgroundColor: "#f58220" }}
              >
                {category.title}
              </div>
              <ul className="space-y-3 mb-6 flex-1">
                {category.peaks.map((peak) => (
                  <li key={peak.name} className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#0d7678" }}
                    ></span>
                    <span className="text-black">{peak.name}</span>
                    <span className="text-muted-foreground">({peak.elevation})</span>
                  </li>
                ))}
              </ul>
              <Link href="/expeditions" className="w-full">
                <Button
                  className="w-full rounded-full font-semibold text-white"
                  style={{ backgroundColor: "#f58220" }}
                >
                  Explore All
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
