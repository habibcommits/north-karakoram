import { MapPin } from "lucide-react";

export function LocationsSection() {
  return (
    <section className="py-16 section-fade" data-testid="section-locations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">VISIT US</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Our Office Locations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Skardu Office */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-xl">Skardu Office</h3>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md flex-1">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3257.5303149828032!2d75.63823007576941!3d35.267938972723485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDE2JzA0LjYiTiA3NcKwMzgnMjYuOSJF!5e0!3m2!1sen!2s!4v1766220460032!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="map-skardu"
              ></iframe>
            </div>
          </div>

          {/* Islamabad Office */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-xl">Islamabad Office</h3>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md flex-1">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.9022247294856!2d73.17277620000002!3d33.63377709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfebba0520ced5%3A0x4b3044fbf11dc4b1!2sNORTH%20KARAKORAM!5e0!3m2!1sen!2s!4v1766220535188!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="map-islamabad"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
