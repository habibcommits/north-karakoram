import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trekkings as expeditions, getTrekkingBySlug } from "@/lib/trekkingData";
import { SITE_CONFIG } from "@/seo/config";
import { useSEOContext } from "@/seo/SEOContext";
import { SEOHead } from "@/seo/SEOHead";
import { TouristTripSchema } from "@/seo/StructuredData";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Compass,
  Download,
  Footprints,
  Heart,
  Image as ImageIcon,
  MapPin,
  Mountain,
  Phone,
  Share2,
  Shield,
  Sparkles,
  Star,
  Sun,
  Thermometer,
  Users,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { Link, useParams } from "wouter";

export default function TrekkingDetail() {
  const { slug } = useParams<{ slug: string }>();
  const expedition = getTrekkingBySlug(slug || "");
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { generateDynamicSEO } = useSEOContext();

  // Generate SEO when data is available
  const seo = expedition
    ? generateDynamicSEO('trekking', slug!, {
      title: expedition.name,
      description: expedition.description,
      image: expedition.image,
      currency: 'PKR',
      duration: expedition.duration,
      difficulty: expedition.difficulty,
      maxAltitude: expedition.altitude,
      rating: 5,
      reviewCount: 1,
      availability: 'InStock',
    })
    : null;

  // Custom breadcrumbs for detail page
  const breadcrumbItems = expedition
    ? [
      { name: 'Trekking', path: '/trekking' },
      { name: expedition.name, path: `/trekking/${slug}` },
    ]
    : [];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!expedition) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-1 flex items-center justify-center">
          <div
            className={`text-center px-4 py-20 transition-all duration-700
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div
              className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
            >
              <Footprints className="w-12 h-12" style={{ color: "#006F61" }} />
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Trekking Not Found
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              The trekking you're looking for doesn't exist or may have been moved.
            </p>
            <Link href="/trekking">
              <Button
                size="lg"
                className="rounded-xl px-8 py-6 h-auto font-semibold"
                style={{ backgroundColor: "#006F61" }}
                data-testid="button-back-expeditions"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                View All Trekking
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const otherExpeditions = expeditions
    .filter((e) => e.id !== expedition.id)

  function shuffleArray(array: any) {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: { value: any }) => value);
  }

  const shuffledExpeditions = shuffleArray(otherExpeditions);

  const galleryImages = expedition.gallery?.length
    ? expedition.gallery
    : [expedition.image, expedition.image, expedition.image];

  return (
    <>
      {seo && <SEOHead seo={seo} path={`/trekking/${slug}`} />}

      <TouristTripSchema
        name={expedition.name}
        description={expedition.description}
        image={expedition.image || SITE_CONFIG.defaultImage}
        url={`${SITE_CONFIG.url}/trekking/${slug}`}
        audience="Adventure tourists and mountaineers"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[60vh] min-h-[500px] lg:h-[70vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={expedition.image}
                alt={expedition.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
            </div>

            {/* Floating Action Buttons */}
            <div
              className={`absolute top-6 right-6 flex items-center gap-3 z-20 transition-all duration-700 delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-sm
                transition-all duration-300 hover:scale-105
                ${isLiked ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"}`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </button>
              <button
                className="w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-sm
                bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Back Link */}
            <div
              className={`absolute top-6 left-6 z-20 transition-all duration-700 delay-200
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              <Link
                href="/trekking"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                bg-white/10 backdrop-blur-sm text-white text-sm font-medium
                hover:bg-white/20 transition-all duration-300"
                data-testid="link-back-expeditions"
              >
                <ArrowLeft className="w-4 h-4" />
                All Trekking
              </Link>
            </div>

            {/* Hero Content */}
            <div className="absolute bottom-10 left-0 right-0 p-6 md:p-10 lg:p-12">
              <div className="max-w-7xl mx-auto max-w-7xl">
                <div
                  className={`transition-all duration-700 delay-100
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge
                      className="px-3 py-1.5 text-sm font-semibold border-0"
                      style={{ backgroundColor: "#006F61", color: "white" }}
                    >
                      <Mountain className="w-3.5 h-3.5 mr-1.5" />
                      {expedition.altitude}
                    </Badge>
                    <Badge
                      className="px-3 py-1.5 text-sm font-semibold"
                      style={{ backgroundColor: "#f58220", color: "white" }}
                    >
                      {expedition.difficulty}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="px-3 py-1.5 text-sm font-medium border-white/40 text-white bg-white/10 backdrop-blur-sm"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {expedition.bestSeason !== null ? expedition.bestSeason : "N/A"}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h1
                    className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 max-w-4xl"
                    data-testid="text-expedition-name"
                  >
                    {expedition.name}
                  </h1>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-sm md:text-base">{expedition.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-sm md:text-base">{expedition.duration}</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base">{expedition.groupSize}</span>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats Bar */}
          <section
            className="relative -mt-6 z-10 px-4 md:px-6 lg:px-8"
            style={{ marginTop: "-3rem" }}
          >
            <div className="max-w-7xl mx-auto max-w-7xl">
              <div
                className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6
                transition-all duration-700 delay-300
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    {
                      icon: Mountain,
                      label: "Altitude",
                      value: expedition.altitude,
                      color: "#006F61",
                    },
                    {
                      icon: Clock,
                      label: "Duration",
                      value: expedition.duration,
                      color: "#f58220",
                    },
                    {
                      icon: Sun,
                      label: "Best Season",
                      value: expedition.bestSeason !== null ? expedition.bestSeason : "N/A",
                      color: "#0ea5e9",
                    },
                    // {
                    //   icon: Users,
                    //   label: "Group Size",
                    //   value: expedition.groupSize,
                    //   color: "#8b5cf6",
                    // },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 md:gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${stat.color}15` }}
                      >
                        <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {stat.label}
                        </p>
                        <p className="font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-10 md:space-y-12">
                  {/* Overview */}
                  <div
                    className={`transition-all duration-700 delay-400
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-1.5 h-8 rounded-full"
                        style={{ backgroundColor: "#006F61" }}
                      />
                      <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900">
                        Overview
                      </h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {expedition.overview}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div
                    className={`transition-all duration-700 delay-500
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-1.5 h-8 rounded-full"
                        style={{ backgroundColor: "#f58220" }}
                      />
                      <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900">
                        Highlights
                      </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {expedition.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="group flex items-start gap-4 p-4 rounded-xl bg-gray-50
                          hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100
                          transition-all duration-300"
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                            group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                          >
                            <Check className="w-5 h-5" style={{ color: "#006F61" }} />
                          </div>
                          <span className="text-gray-700 font-medium pt-2">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tabs Section */}
                  <div
                    className={`transition-all duration-700 delay-600
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  >
                    <Tabs defaultValue="itinerary" className="w-full">
                      <TabsList
                        className="w-full h-auto p-1.5 bg-gray-100 rounded-xl grid grid-cols-2 sm:grid-cols-5 gap-1"
                      >
                        {[
                          { value: "itinerary", label: "Itinerary", icon: MapPin },
                          { value: "services", label: "Services", icon: Compass },
                          { value: "prices", label: "Prices", icon: Calendar },
                          { value: "info", label: "Info", icon: Shield },
                          { value: "photos", label: "Photos", icon: ImageIcon },
                        ].map((tab) => (
                          <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg
                            text-sm font-semibold transition-all duration-300
                            data-[state=active]:bg-white data-[state=active]:shadow-sm
                            data-[state=active]:text-gray-900 text-gray-600"
                            data-testid={`tab-${tab.value}`}
                          >
                            <tab.icon className="w-4 h-4 hidden sm:block" />
                            <span>{tab.label}</span>
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {/* Itinerary Tab */}
                      <TabsContent value="itinerary" className="mt-8">
                        <div className="relative">
                          {/* Timeline Line */}
                          <div
                            className="absolute left-5 top-0 bottom-0 w-0.5 hidden md:block"
                            style={{ backgroundColor: "rgba(0, 111, 97, 0.2)" }}
                          />

                          <div className="space-y-4">
                            {expedition.timeline.map((item, index) => (
                              <div
                                key={index}
                                className="relative flex gap-4 md:gap-6 group"
                              >
                                {/* Timeline Dot */}
                                <div
                                  className="relative z-10 w-10 h-10 rounded-xl flex-shrink-0
                                  flex items-center justify-center text-white font-bold text-sm
                                  shadow-lg group-hover:scale-110 transition-transform hidden md:flex"
                                  style={{ backgroundColor: "#006F61" }}
                                >
                                  {index + 1}
                                </div>

                                {/* Content Card */}
                                <Card
                                  className="flex-1 border-0 shadow-md rounded-xl overflow-hidden
                                  hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1"
                                >
                                  <CardContent className="p-5">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                      <Badge
                                        className="px-3 py-1 font-semibold text-white md:hidden"
                                        style={{ backgroundColor: "#006F61" }}
                                      >
                                        Day {index + 1}
                                      </Badge>
                                      <span className="text-sm text-gray-500 hidden md:inline">
                                        {item.day}
                                      </span>
                                    </div>
                                    <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">
                                      {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                      {item.description}
                                    </p>
                                  </CardContent>
                                </Card>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      {/* Services Tab */}
                      <TabsContent value="services" className="mt-8">
                        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                          <div
                            className="p-8 md:p-12 text-center"
                            style={{
                              background: "linear-gradient(135deg, rgba(0, 111, 97, 0.05) 0%, rgba(245, 130, 32, 0.05) 100%)",
                            }}
                          >
                            <div
                              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                              style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                            >
                              <Compass className="w-10 h-10" style={{ color: "#006F61" }} />
                            </div>
                            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                              Service Details
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                              For detailed information about what's included, excluded, and required equipment for this expedition, please contact us via WhatsApp or email.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link href="/contact">
                                <Button
                                  size="lg"
                                  className="rounded-xl px-8 py-6 h-auto font-semibold"
                                  style={{ backgroundColor: "#006F61" }}
                                >
                                  Book Now
                                  <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </Card>
                      </TabsContent>

                      {/* Prices Tab */}
                      <TabsContent value="prices" className="mt-8">
                        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                          <div
                            className="p-8 md:p-12 text-center"
                            style={{
                              background: "linear-gradient(135deg, rgba(0, 111, 97, 0.05) 0%, rgba(245, 130, 32, 0.05) 100%)",
                            }}
                          >
                            <div
                              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                              style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                            >
                              <Calendar className="w-10 h-10" style={{ color: "#006F61" }} />
                            </div>
                            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                              Get Custom Pricing
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                              Every trekking is unique. Contact us for personalized pricing
                              based on your group size, dates, and requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link href="/contact">
                                <Button
                                  size="lg"
                                  className="rounded-xl px-8 py-6 h-auto font-semibold"
                                  style={{ backgroundColor: "#006F61" }}
                                  data-testid="button-contact-pricing"
                                >
                                  Request Quote
                                  <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                              </Link>
                              <a href={`https://wa.me/923330228111?text=${encodeURIComponent(
                                `I'm interested in booking an adventure with North Karakoram: ${expedition.name}`
                              )}`} target="_blank" rel="noopener noreferrer">
                                <Button
                                  size="lg"
                                  variant="outline"
                                  className="rounded-xl px-8 py-6 h-auto font-semibold border-2"
                                  style={{ borderColor: "#25D366", color: "#25D366" }}
                                >
                                  <SiWhatsapp className="w-5 h-5 mr-2" />
                                  WhatsApp Us
                                </Button>
                              </a>
                            </div>
                          </div>
                        </Card>
                      </TabsContent>

                      {/* Info Tab */}
                      <TabsContent value="info" className="mt-8">
                        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                          <CardContent className="p-6 md:p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                              {[
                                {
                                  icon: MapPin,
                                  label: "Location",
                                  value: expedition.location,
                                  color: "#006F61",
                                },
                                {
                                  icon: Thermometer,
                                  label: "Difficulty",
                                  value: expedition.difficulty,
                                  color: "#f58220",
                                },
                                {
                                  icon: Sun,
                                  label: "Best Time",
                                  value: expedition.bestSeason !== null ? expedition.bestSeason : "N/A",
                                  color: "#0ea5e9",
                                },
                                {
                                  icon: Mountain,
                                  label: "Altitude",
                                  value: expedition.altitude,
                                  color: "#8b5cf6",
                                },
                              ].map((info, index) => (
                                <div key={index} className="flex items-start gap-4">
                                  <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: `${info.color}15` }}
                                  >
                                    <info.icon className="w-6 h-6" style={{ color: info.color }} />
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                                    <p className="font-bold text-gray-900">{info.value}</p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                              <h4 className="font-bold text-lg text-gray-900 mb-4">
                                About This Trekking
                              </h4>
                              <p className="text-gray-600 leading-relaxed">
                                {expedition.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      {/* Photos Tab */}
                      <TabsContent value="photos" className="mt-8">
                        <div className="space-y-6">
                          {/* Main Image */}
                          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                            <img
                              src={galleryImages[activeImage]}
                              alt={`${expedition.name} - Photo ${activeImage + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 right-4 flex gap-2">
                              <button
                                onClick={() =>
                                  setActiveImage(
                                    (activeImage - 1 + galleryImages.length) % galleryImages.length
                                  )
                                }
                                className="w-10 h-10 rounded-lg bg-black/50 text-white
                                flex items-center justify-center hover:bg-black/70 transition-colors"
                              >
                                <ArrowLeft className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() =>
                                  setActiveImage((activeImage + 1) % galleryImages.length)
                                }
                                className="w-10 h-10 rounded-lg bg-black/50 text-white
                                flex items-center justify-center hover:bg-black/70 transition-colors"
                              >
                                <ArrowRight className="w-5 h-5" />
                              </button>
                            </div>
                          </div>

                          {/* Thumbnails */}
                          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                            {galleryImages.map((photo, idx) => (
                              <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`aspect-video rounded-xl overflow-hidden transition-all duration-300
                                ${activeImage === idx
                                    ? "ring-2 ring-offset-2 scale-95"
                                    : "opacity-70 hover:opacity-100"
                                  }`}
                                style={{
                                  ringColor: activeImage === idx ? "#006F61" : "transparent",
                                }}
                              >
                                <img
                                  src={photo}
                                  alt={`Thumbnail ${idx + 1}`}
                                  className="w-full h-full object-cover"
                                  data-testid={`img-gallery-${idx}`}
                                />
                              </button>
                            ))}
                          </div>

                          {(!expedition.gallery || expedition.gallery.length === 0) && (
                            <p className="text-center text-gray-500 text-sm">
                              More photos coming soon. Contact us for detailed expedition visuals.
                            </p>
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

                {/* Right Column - Booking Card */}
                <div className="lg:col-span-1">
                  <div
                    className={`sticky top-24 transition-all duration-700 delay-500
                                 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  >
                    <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                      {/* Card Header */}
                      <div
                        className="p-4 text-white"
                        style={{ backgroundColor: "#006F61" }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-5 h-5" />
                          <span className="text-sm font-medium opacity-90">Premium Expedition</span>
                        </div>
                        <h3 className="font-heading font-bold text-xl">Book Your Adventure</h3>
                      </div>

                      <CardContent className="p-4">
                        {/* Details List */}
                        <div className="space-y-2 mb-2">
                          {[
                            { label: "Duration", value: expedition.duration },
                            { label: "Difficulty", value: expedition.difficulty },
                            { label: "Location", value: expedition.location },
                            { label: "Season", value: expedition.bestSeason !== null ? expedition.bestSeason : "N/A" },
                            // { label: "Group Size", value: expedition.groupSize },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                            >
                              <span className="text-gray-500 text-sm">{item.label}</span>
                              <span className="font-semibold text-gray-900 text-sm">{item.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3">
                          <Link href="/contact" className="block">
                            <Button
                              className="w-full h-12 font-semibold rounded-xl shadow-lg
                                           hover:shadow-xl transition-all hover:-translate-y-0.5"
                              style={{ backgroundColor: "#006F61" }}
                              data-testid="button-book-expedition"
                            >
                              Book This Expedition
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>

                          <a
                            href={`https://wa.me/923330228111?text=${encodeURIComponent(
                              `I'm interested in booking an adventure with North Karakoram: ${expedition.name}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <Button
                              variant="outline"
                              className="w-full h-12 font-semibold rounded-xl border-2
                                           hover:-translate-y-0.5 transition-all"
                              style={{ borderColor: "#25D366", color: "#25D366" }}
                            >
                              <SiWhatsapp className="w-5 h-5 mr-2" />
                              WhatsApp Inquiry
                            </Button>
                          </a>

                          <a href="tel:+923330228111" className="block">
                            <Button
                              variant="ghost"
                              className="w-full h-12 font-semibold rounded-xl text-gray-600
                                           hover:bg-gray-100"
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              +92 333 0228111
                            </Button>
                          </a>
                        </div>

                        {/* Trust Badges */}
                        {/* <div className="mt-6 pt-6 border-t border-gray-100">
                                     <div className="flex items-center justify-center gap-4 text-gray-400">
                                       <div className="flex items-center gap-1.5">
                                         <Shield className="w-4 h-4" />
                                         <span className="text-xs">Secure</span>
                                       </div>
                                       <div className="flex items-center gap-1.5">
                                         <Star className="w-4 h-4 fill-current text-amber-400" />
                                         <span className="text-xs">Top Rated</span>
                                       </div>
                                       <div className="flex items-center gap-1.5">
                                         <Users className="w-4 h-4" />
                                         <span className="text-xs">Expert Guides</span>
                                       </div>
                                     </div>
                                   </div> */}

                        <p className="text-center text-gray-500 text-xs mt-4">
                          Custom dates available.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Download Brochure */}
                    <Button
                      variant="ghost"
                      className="w-full mt-4 h-12 rounded-xl text-gray-600 hover:bg-gray-100"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Brochure (PDF)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Expeditions */}
          {shuffledExpeditions.length > 0 && (
            <section className="py-16 md:py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                    style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                  >
                    <Compass className="w-4 h-4" style={{ color: "#006F61" }} />
                    <span className="text-sm font-semibold" style={{ color: "#006F61" }}>
                      Explore More
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                    Other Trekking
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover more incredible adventures in the Karakoram and beyond
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {shuffledExpeditions.slice(0, 3).map((exp: any, index: any) => (
                    <Link
                      key={exp.id}
                      href={`/trekking/${exp.slug}`}
                      data-testid={`card-expedition-${exp.id}`}
                    >
                      <Card
                        className="group h-full border-0 shadow-lg rounded-2xl overflow-hidden
                        hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                      >
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={exp.image}
                            alt={exp.name}
                            className="w-full h-full object-cover transition-transform duration-700
                            group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                          {/* Badges */}
                          <div className="absolute top-4 left-4 flex gap-2">
                            <Badge
                              className="px-2.5 py-1 font-semibold text-white text-xs"
                              style={{ backgroundColor: "#006F61" }}
                            >
                              {exp.altitude}
                            </Badge>
                          </div>

                          {/* Bottom Info */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="font-heading font-bold text-xl text-white mb-1 line-clamp-1">
                              {exp.name}
                            </h3>
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {exp.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {exp.groupSize}
                              </span>
                            </div>
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center
                              group-hover:translate-x-1 transition-transform"
                              style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                            >
                              <ArrowRight className="w-5 h-5" style={{ color: "#006F61" }} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Link href="/trekking">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-xl px-8 py-6 h-auto font-semibold border-2
                      hover:-translate-y-0.5 transition-all"
                      style={{ borderColor: "#006F61", color: "#006F61" }}
                    >
                      View All Trekkings
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
              <div
                className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16"
                style={{ backgroundColor: "#006F61" }}
              >
                {/* Background Decorations */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
                    <Mountain className="w-4 h-4 text-white" />
                    <span className="text-white/90 text-sm font-medium">
                      Start Your Journey
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                    Ready to Conquer {expedition.name.split(" ")[0]}?
                  </h2>
                  <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                    Join our expert team for an unforgettable trekking experience.
                    Limited spots available for the upcoming season.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-white hover:bg-gray-100 font-semibold
                        px-8 py-6 h-auto rounded-xl shadow-xl transition-all duration-300
                        hover:-translate-y-0.5"
                        style={{ color: "#006F61" }}
                      >
                        Book Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a href={`https://wa.me/923330228111?text=${encodeURIComponent(
                      `I'm interested in booking an adventure with North Karakoram: ${expedition.name}`
                    )}`} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        variant="outline"
                        className="font-semibold px-8 py-6 h-auto rounded-xl
                        border-2 border-white/30 text-white bg-white/10
                        hover:bg-white hover:text-gray-900 transition-all duration-300
                        hover:-translate-y-0.5"
                      >
                        <SiWhatsapp className="w-5 h-5 mr-2" />
                        Quick Inquiry
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
