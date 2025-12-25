import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  ArrowRight,
  Mountain,
  Users,
  Calendar,
  HeadphonesIcon,
  CheckCircle,
} from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
  SiYoutube,
} from "react-icons/si";
import type { Trip } from "@shared/schema";
import baseCampImage from "@assets/stock_images/mountain_base_camp_t_3e7d1acc.jpg";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  tripInterest: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["Skardu, Gilgit Baltistan", "Pakistan"],
    action: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+92 333 0228111", "+92 355 5718293"],
    action: "tel:+923330228111",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@northkarakoram.com"],
    action: "mailto:info@northkarakoram.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    action: null,
  },
];

const socialLinks = [
  {
    icon: SiYoutube,
    href: "https://youtube.com/@northkarakoram?si=PJHwQm8bP2nMLBwe",
    label: "YouTube",
  },
  {
    icon: SiTiktok,
    href: "https://www.tiktok.com/@northkarakoram?_r=1&_t=ZS-92TItqmrAx7",
    label: "TikTok",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/northkarakoram?igsh=MWlseHgycWNybWx2MA%3D%3D&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: SiFacebook,
    href: "https://www.facebook.com/profile.php?id=100093782443750&rdid=j90AVS0yTRTTZeBk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AhZLfuCzQ%2F#",
    label: "Facebook",
  },
  // {
  //   icon: SiWhatsapp,
  //   href: "https://wa.me/923555718293",
  //   label: "WhatsApp",
  // },
];

const reasons = [
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "We're here to help you anytime",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Professional guides at your service",
  },
  {
    icon: Calendar,
    title: "Flexible Booking",
    description: "Customize your adventure dates",
  },
  {
    icon: CheckCircle,
    title: "Quick Response",
    description: "Get answers within 24 hours",
  },
];

const faqs = [
  {
    question: "How do I book an expedition?",
    answer:
      "You can book through our website, send us an email, or contact us via WhatsApp. Our team will guide you through the entire process.",
  },
  {
    question: "What's included in the tour packages?",
    answer:
      "Our packages typically include accommodation, meals, transportation, guide services, and permits. Specific inclusions vary by trip.",
  },
  {
    question: "Do you offer custom itineraries?",
    answer:
      "Absolutely! We specialize in creating personalized adventures tailored to your preferences, fitness level, and schedule.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We offer flexible cancellation policies. Full details are provided during booking. Generally, early cancellations receive full refunds.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [heroVisible, setHeroVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const { data: trips = [] } = useQuery<Trip[]>({
    queryKey: ["/api/trips"],
    queryFn: async () => {
      const response = await fetch("/api/trips");
      if (!response.ok) throw new Error("Failed to fetch trips");
      return response.json();
    },
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      tripInterest: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitMutation.mutate(data);
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const createObserver = (
      setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setter(true);
      }, observerOptions);
    };

    const observers = [
      { ref: heroRef, observer: createObserver(setHeroVisible) },
      { ref: formRef, observer: createObserver(setFormVisible) },
      { ref: infoRef, observer: createObserver(setInfoVisible) },
      { ref: faqRef, observer: createObserver(setFaqVisible) },
      { ref: ctaRef, observer: createObserver(setCtaVisible) },
    ];

    observers.forEach(({ ref, observer }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observers.forEach(({ observer }) => observer.disconnect());
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[500px] h-[60vh] sm:h-[65vh] md:h-[70vh]"
        >
          <img
            src={baseCampImage}
            alt="Mountain base camp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

          {/* Decorative Elements - Hidden on mobile */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
            <div className="absolute top-20 left-10 w-24 h-24 lg:w-32 lg:h-32 border border-white/10 rounded-full" />
            <div className="absolute bottom-20 right-10 w-32 h-32 lg:w-48 lg:h-48 border border-white/10 rounded-full" />
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-1000 ${heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <div className="container mx-auto px-4 sm:px-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.6)" }}
              >
                <span className="text-xs sm:text-sm text-white/90 font-semibold tracking-wide">
                  WE'D LOVE TO HEAR FROM YOU
                </span>
              </div>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 sm:mb-4">
                Contact Us
              </h1>
              <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                Have questions about your next mountain adventure? Our team is
                ready to help you plan the perfect expedition.
              </p>

              {/* Quick Contact Options */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-0">
                <a
                  href="https://wa.me/923555718293?text=I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full md:w-fit inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white text-gray-900 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: heroVisible ? "200ms" : "0ms" }}
                >
                  <SiWhatsapp className="hidden md:block w-5 h-5" style={{ color: "#25D366" }} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+923330228111"
                  className={`w-full md:w-fit inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border-2 border-white/50 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all duration-300 ${heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: heroVisible ? "300ms" : "0ms" }}
                >
                  <Phone className="hidden md:block w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #006F61 0%, #005249 100%)",
            }}
          />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 rounded-full bg-white/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="text-center group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-medium hidden sm:block">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          ref={formRef}
          className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden"
          data-testid="section-contact"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
            />
            <div
              className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(0, 111, 97, 0.02)" }}
            />
            <div className="absolute top-20 left-10 hidden xl:block">
              <div className="grid grid-cols-5 gap-2">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div
              className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${formVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <span
                  className="text-xs sm:text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4">
                Send Us a{" "}
                <span style={{ color: "#006F61" }}>Message</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2">
                Have questions about our trekking tours, mountaineering
                expeditions, or customized adventures? Fill out the form below
                and we'll respond within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div
                className={`lg:col-span-2 order-2 lg:order-1 transition-all duration-700 delay-200 ${formVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <Card className="shadow-lg sm:shadow-xl border-gray-100 overflow-hidden">
                  <div
                    className="h-1.5 sm:h-2"
                    style={{ backgroundColor: "#006F61" }}
                  />
                  <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 sm:space-y-5 md:space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold text-sm sm:text-base">
                                  Full Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
                                    className="h-11 sm:h-12 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20 rounded-lg sm:rounded-xl text-sm sm:text-base"
                                    {...field}
                                    data-testid="input-contact-name"
                                  />
                                </FormControl>
                                <FormMessage className="text-xs sm:text-sm" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold text-sm sm:text-base">
                                  Email Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="h-11 sm:h-12 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20 rounded-lg sm:rounded-xl text-sm sm:text-base"
                                    {...field}
                                    data-testid="input-contact-email"
                                  />
                                </FormControl>
                                <FormMessage className="text-xs sm:text-sm" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold text-sm sm:text-base">
                                  Phone Number{" "}
                                  <span className="text-gray-400 font-normal text-xs sm:text-sm">
                                    (Optional)
                                  </span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+1 234 567 8900"
                                    className="h-11 sm:h-12 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20 rounded-lg sm:rounded-xl text-sm sm:text-base"
                                    {...field}
                                    data-testid="input-contact-phone"
                                  />
                                </FormControl>
                                <FormMessage className="text-xs sm:text-sm" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="tripInterest"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold text-sm sm:text-base">
                                  Trip Interest{" "}
                                  <span className="text-gray-400 font-normal text-xs sm:text-sm">
                                    (Optional)
                                  </span>
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger
                                      className="h-11 sm:h-12 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20 rounded-lg sm:rounded-xl text-sm sm:text-base"
                                      data-testid="select-trip-interest"
                                    >
                                      <SelectValue placeholder="Select a trip" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="general">
                                      General Inquiry
                                    </SelectItem>
                                    {trips.map((trip) => (
                                      <SelectItem key={trip.id} value={trip.id}>
                                        {trip.title}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage className="text-xs sm:text-sm" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-semibold text-sm sm:text-base">
                                Subject
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="How can we help you?"
                                  className="h-11 sm:h-12 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20 rounded-lg sm:rounded-xl text-sm sm:text-base"
                                  {...field}
                                  data-testid="input-contact-subject"
                                />
                              </FormControl>
                              <FormMessage className="text-xs sm:text-sm" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-semibold text-sm sm:text-base">
                                Message
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your adventure plans, questions, or any specific requirements..."
                                  className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] resize-none border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20 rounded-lg sm:rounded-xl text-sm sm:text-base"
                                  {...field}
                                  data-testid="textarea-contact-message"
                                />
                              </FormControl>
                              <FormMessage className="text-xs sm:text-sm" />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 h-auto font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 rounded-lg sm:rounded-xl"
                          style={{ backgroundColor: "#006F61" }}
                          disabled={submitMutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {submitMutation.isPending ? (
                            <>
                              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                              Send Message
                              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div
                className={`order-1 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-700 delay-300 ${formVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                {/* Mobile: Horizontal scroll / Desktop: Vertical stack */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className={`group hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-gray-100 overflow-hidden ${formVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                        }`}
                      style={{
                        transitionDelay: formVisible
                          ? `${400 + index * 100}ms`
                          : "0ms",
                      }}
                    >
                      <CardContent className="p-4 sm:p-5 md:p-6">
                        <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                          <div
                            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                            style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                          >
                            <info.icon
                              className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
                              style={{ color: "#006F61" }}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1 sm:mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) =>
                              info.action ? (
                                <a
                                  key={idx}
                                  href={info.action}
                                  className="block text-xs sm:text-sm md:text-base text-gray-600 hover:text-[#006F61] transition-colors truncate"
                                >
                                  {detail}
                                </a>
                              ) : (
                                <p
                                  key={idx}
                                  className="text-xs sm:text-sm md:text-base text-gray-600 truncate"
                                >
                                  {detail}
                                </p>
                              )
                            )}
                          </div>
                        </div>
                      </CardContent>
                      <div
                        className="h-0.5 sm:h-1 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                        style={{ backgroundColor: "#006F61" }}
                      />
                    </Card>
                  ))}
                </div>

                {/* Social Links */}
                <Card className="border-gray-100">
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
                      Follow Us
                    </h3>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl flex items-center justify-center border border-gray-200 hover:border-[#006F61] hover:bg-[#006F61] hover:text-white text-gray-600 transition-all duration-300 hover:scale-110"
                          aria-label={social.label}
                        >
                          <social.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section
          ref={infoRef}
          className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-8 sm:mb-10 transition-all duration-700 ${infoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-2">
                Find Us
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Located in the heart of Skardu, gateway to the Karakoram
              </p>
            </div>

            <div
              className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] bg-gray-200 transition-all duration-700 delay-200 ${infoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center px-4">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                  >
                    <MapPin
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
                      style={{ color: "#006F61" }}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg md:text-xl text-gray-900 mb-1 sm:mb-2">
                    Skardu, Gilgit Baltistan
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                    Gateway to K2 and the Karakoram Range
                  </p>
                  <a
                    href="https://maps.google.com/?q=Skardu,+Gilgit+Baltistan,+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-white font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5"
                    style={{ backgroundColor: "#006F61" }}
                  >
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${faqVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
              >
                <MessageCircle
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  style={{ color: "#006F61" }}
                />
                <span
                  className="text-xs sm:text-sm font-semibold tracking-wide"
                  style={{ color: "#006F61" }}
                >
                  COMMON QUESTIONS
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3 sm:mb-4">
                Frequently Asked{" "}
                <span style={{ color: "#006F61" }}>Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-700 ${faqVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: faqVisible
                      ? `${200 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base md:text-lg text-gray-900 pr-3 sm:pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${expandedFaq === index ? "rotate-45" : ""
                        }`}
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <span
                        className="text-xl sm:text-2xl leading-none"
                        style={{ color: "#006F61" }}
                      >
                        +
                      </span>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? "max-h-48" : "max-h-0"
                      }`}
                  >
                    <p className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #006F61 0%, #004d44 100%)",
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 border border-white/10 rounded-full hidden sm:block" />
            <div className="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 border border-white/10 rounded-full hidden sm:block" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`max-w-3xl mx-auto text-center transition-all duration-700 ${ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4 sm:mb-6">
                <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide">
                  START YOUR JOURNEY
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 px-2">
                Ready for Your Next Adventure?
              </h2>

              <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 px-2">
                Explore our collection of carefully crafted expeditions and find
                the perfect mountain adventure that awaits you.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href="/expedition"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-gray-900 font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Explore Expeditions</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href="https://wa.me/923555718293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white/50 text-white font-semibold text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <SiWhatsapp className="hidden md:block w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Quick Chat</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
