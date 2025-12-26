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
  Sparkles,
  ChevronDown,
} from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
  SiYoutube,
} from "react-icons/si";
import type { Trip } from "@shared/schema";
import baseCampImage from "@assets/stock_images/fairy_meadow_mountai_a8bee0ee.jpg";

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
    highlight: false,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+92 333 0228111", "+92 355 5718293"],
    action: "tel:+923330228111",
    highlight: false,
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@northkarakoram.com"],
    action: "mailto:info@northkarakoram.com",
    highlight: true,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    action: null,
    highlight: false,
  },
];

const socialLinks = [
  {
    icon: SiYoutube,
    href: "https://youtube.com/@northkarakoram?si=PJHwQm8bP2nMLBwe",
    label: "YouTube",
    color: "#FF0000",
  },
  {
    icon: SiTiktok,
    href: "https://www.tiktok.com/@northkarakoram?_r=1&_t=ZS-92TItqmrAx7",
    label: "TikTok",
    color: "#000000",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/northkarakoram?igsh=MWlseHgycWNybWx2MA%3D%3D&utm_source=qr",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    icon: SiFacebook,
    href: "https://www.facebook.com/profile.php?id=100093782443750&rdid=j90AVS0yTRTTZeBk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AhZLfuCzQ%2F#",
    label: "Facebook",
    color: "#1877F2",
  },
];

const reasons = [
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "We're here to help you anytime, anywhere",
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
      "You can book through our website, send us an email at info@northkarakoram.com, or contact us via WhatsApp. Our team will guide you through the entire process.",
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
        title: "Message Sent Successfully! ✨",
        description: "We'll get back to you within 24 hours.",
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
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[480px] h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh]"
        >
          <img
            src={baseCampImage}
            alt="Mountain base camp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 lg:w-48 lg:h-48 border border-white/10 rounded-full hidden md:block" />
            <div className="absolute top-32 left-20 w-20 h-20 lg:w-32 lg:h-32 border border-white/5 rounded-full hidden md:block" />
            <div className="absolute bottom-20 right-10 w-40 h-40 lg:w-56 lg:h-56 border border-white/10 rounded-full hidden md:block" />
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-1000 ${heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 delay-100
                  bg-white/10 backdrop-blur-sm border border-white/20 ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium tracking-wide">
                  We'd Love to Hear From You
                </span>
              </div>

              <h1
                className={`font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 transition-all duration-700 delay-200 ${heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
              >
                Get in{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Touch</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#006F61]/50 rounded-full transform -rotate-1" />
                </span>
              </h1>

              <p
                className={`text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 transition-all duration-700 delay-300 ${heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
              >
                Have questions about your next mountain adventure? Our team is
                ready to help you plan the perfect expedition.
              </p>

              {/* Quick Contact Options */}
              <div
                className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-400 ${heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
              >
                <a
                  href="https://wa.me/923330228111?text=I'm%20interested%20in%20booking%20an%20adventure%20with%20North%20Karakoram."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl
                    bg-white text-gray-900 font-semibold text-base
                    shadow-2xl shadow-black/20 hover:shadow-xl hover:-translate-y-1
                    transition-all duration-300"
                >
                  <SiWhatsapp
                    className="w-5 h-5 transition-transform group-hover:scale-110"
                    style={{ color: "#25D366" }}
                  />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="mailto:info@northkarakoram.com?subject=Booking%20Inquiry&body=Hello%20North%20Karakoram%20Team,%0A%0AI'm%20interested%20in%20booking%20an%20adventure.%20Please%20provide%20more%20information.%0A%0AThank%20you!"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl
                    border-2 border-white/40 text-white font-semibold text-base
                    backdrop-blur-sm hover:bg-white hover:text-[#006F61] hover:border-white
                    transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Book via Email</span>
                </a>
              </div>

              {/* Scroll Indicator */}
              <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${heroVisible ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="flex flex-col items-center gap-2 text-white/60">
                  <span className="text-xs uppercase tracking-widest">
                    Scroll Down
                  </span>
                  <ChevronDown className="w-5 h-5 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#006F61]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#006F61]/3 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white
                    border border-gray-100 hover:border-[#006F61]/20 hover:shadow-xl hover:shadow-[#006F61]/5
                    transition-all duration-500 hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl
                    bg-[#006F61]/10 flex items-center justify-center
                    group-hover:bg-[#006F61] group-hover:scale-110 transition-all duration-300"
                  >
                    <reason.icon className="w-7 h-7 md:w-8 md:h-8 text-[#006F61] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed hidden sm:block">
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
          className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden"
          data-testid="section-contact"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/50" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006F61' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#006F61]/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#006F61]/3 blur-3xl" />
            <div className="absolute top-32 left-10 w-64 h-64 rounded-full border border-[#006F61]/10 hidden lg:block" />
            <div className="absolute bottom-32 right-10 w-48 h-48 rounded-full border border-[#006F61]/5 hidden lg:block" />

            {/* Decorative dots */}
            <div className="absolute top-40 right-20 hidden xl:block">
              <div className="grid grid-cols-5 gap-2">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#006F61]/10"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div
              className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${formVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#006F61]/10 border border-[#006F61]/20">
                <Mail className="w-4 h-4 text-[#006F61]" />
                <span className="text-sm font-semibold tracking-wide text-[#006F61]">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
                Send Us a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#006F61]">Message</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#006F61]/15 rounded-full transform -rotate-1" />
                </span>
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Have questions about our trekking tours, mountaineering
                expeditions, or customized adventures? Fill out the form below
                and we'll respond within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div
                className={`lg:col-span-3 order-2 lg:order-1 transition-all duration-700 delay-200 ${formVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <Card className="shadow-2xl shadow-gray-200/50 border-0 overflow-hidden rounded-3xl">
                  {/* Card Header Accent */}
                  <div className="h-2 bg-gradient-to-r from-[#006F61] via-[#008577] to-[#006F61]" />

                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold text-sm">
                                  Full Name <span className="text-[#006F61]">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
                                    className="h-12 sm:h-14 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20
                                      rounded-xl text-base bg-gray-50/50 hover:bg-white transition-colors"
                                    {...field}
                                    data-testid="input-contact-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold text-sm">
                                  Email Address <span className="text-[#006F61]">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="h-12 sm:h-14 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20
                                      rounded-xl text-base bg-gray-50/50 hover:bg-white transition-colors"
                                    {...field}
                                    data-testid="input-contact-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold text-sm">
                                  Phone Number{" "}
                                  <span className="text-gray-400 font-normal">
                                    (Optional)
                                  </span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+1 234 567 8900"
                                    className="h-12 sm:h-14 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20
                                      rounded-xl text-base bg-gray-50/50 hover:bg-white transition-colors"
                                    {...field}
                                    data-testid="input-contact-phone"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="tripInterest"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 font-semibold text-sm">
                                  Trip Interest{" "}
                                  <span className="text-gray-400 font-normal">
                                    (Optional)
                                  </span>
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger
                                      className="h-12 sm:h-14 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20
                                        rounded-xl text-base bg-gray-50/50 hover:bg-white transition-colors"
                                      data-testid="select-trip-interest"
                                    >
                                      <SelectValue placeholder="Select a trip" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="rounded-xl">
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
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-semibold text-sm">
                                Subject <span className="text-[#006F61]">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="How can we help you?"
                                  className="h-12 sm:h-14 border-gray-200 focus:border-[#006F61] focus:ring-[#006F61]/20
                                    rounded-xl text-base bg-gray-50/50 hover:bg-white transition-colors"
                                  {...field}
                                  data-testid="input-contact-subject"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-semibold text-sm">
                                Message <span className="text-[#006F61]">*</span>
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your adventure plans, questions, or any specific requirements..."
                                  className="min-h-[140px] sm:min-h-[160px] resize-none border-gray-200
                                    focus:border-[#006F61] focus:ring-[#006F61]/20 rounded-xl text-base
                                    bg-gray-50/50 hover:bg-white transition-colors"
                                  {...field}
                                  data-testid="textarea-contact-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="pt-2">
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full sm:w-auto px-10 py-6 h-auto font-semibold text-base
                              bg-[#006F61] hover:bg-[#005a4d] text-white rounded-xl
                              shadow-lg shadow-[#006F61]/20 hover:shadow-xl hover:shadow-[#006F61]/30
                              transition-all duration-300 hover:-translate-y-0.5"
                            disabled={submitMutation.isPending}
                            data-testid="button-submit-contact"
                          >
                            {submitMutation.isPending ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5 mr-3" />
                                Send Message
                                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div
                className={`lg:col-span-2 order-1 lg:order-2 space-y-6 transition-all duration-700 delay-300 ${formVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className={`group overflow-hidden rounded-2xl border-2 transition-all duration-300
                        hover:shadow-xl hover:shadow-[#006F61]/10 hover:-translate-y-1
                        ${info.highlight
                          ? "border-[#006F61]/30 bg-[#006F61]/5"
                          : "border-gray-100 hover:border-[#006F61]/20"
                        } ${formVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                        }`}
                      style={{
                        transitionDelay: formVisible
                          ? `${400 + index * 100}ms`
                          : "0ms",
                      }}
                    >
                      <CardContent className="p-5 sm:p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                              transition-all duration-300 group-hover:scale-110
                              ${info.highlight
                                ? "bg-[#006F61] text-white"
                                : "bg-[#006F61]/10 text-[#006F61] group-hover:bg-[#006F61] group-hover:text-white"
                              }`}
                          >
                            <info.icon className="w-6 h-6" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900 mb-1">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) =>
                              info.action ? (
                                <a
                                  key={idx}
                                  href={info.action}
                                  className="block text-sm sm:text-base text-gray-600 hover:text-[#006F61]
                                    transition-colors font-medium"
                                >
                                  {detail}
                                </a>
                              ) : (
                                <p
                                  key={idx}
                                  className="text-sm sm:text-base text-gray-600"
                                >
                                  {detail}
                                </p>
                              )
                            )}
                          </div>
                        </div>
                      </CardContent>
                      {info.highlight && (
                        <div className="h-1 bg-[#006F61]" />
                      )}
                    </Card>
                  ))}
                </div>

                {/* Social Links Card */}
                <Card className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">
                      Follow Us
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-12 h-12 rounded-xl flex items-center justify-center
                            border-2 border-gray-200 hover:border-[#006F61]
                            bg-white hover:bg-[#006F61] text-gray-600 hover:text-white
                            transition-all duration-300 hover:scale-110 hover:shadow-lg"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Action Card */}
                <Card className="border-2 border-[#006F61]/20 rounded-2xl overflow-hidden bg-gradient-to-br from-[#006F61]/5 to-white">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#006F61] flex items-center justify-center">
                        <Mountain className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-gray-900">
                        Ready to Book?
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Email us directly at{" "}
                      <span className="font-semibold text-[#006F61]">
                        info@northkarakoram.com
                      </span>{" "}
                      for quick booking assistance.
                    </p>
                    <a
                      href="mailto:info@northkarakoram.com?subject=Booking%20Inquiry"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                        bg-[#006F61] text-white font-semibold text-sm
                        hover:bg-[#005a4d] transition-all duration-300 hover:shadow-lg"
                    >
                      <Mail className="w-4 h-4" />
                      Book Now
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section
          ref={infoRef}
          className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-10 md:mb-12 transition-all duration-700 ${infoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[#006F61]/10 border border-[#006F61]/20">
                <MapPin className="w-4 h-4 text-[#006F61]" />
                <span className="text-sm font-semibold text-[#006F61]">
                  OUR LOCATION
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3">
                Find Us in{" "}
                <span className="text-[#006F61]">Skardu</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">
                Located in the heart of Skardu, gateway to the majestic Karakoram range
              </p>
            </div>

            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50
                h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px]
                border-2 border-gray-100 transition-all duration-700 delay-200 ${infoVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
            >
              {/* Map Placeholder with elegant design */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#006F61]/5 via-gray-50 to-white">
                <div className="text-center px-6">
                  {/* Decorative rings */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#006F61]/20 animate-spin" style={{ animationDuration: '20s' }} />
                    <div className="absolute inset-4 rounded-full border-2 border-[#006F61]/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-[#006F61]/10 flex items-center justify-center">
                        <MapPin className="w-10 h-10 text-[#006F61]" />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-2">
                    Skardu, Gilgit Baltistan
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                    Gateway to K2, Concordia, and the legendary peaks of the Karakoram
                  </p>
                  <a
                    href="https://maps.google.com/?q=Skardu,+Gilgit+Baltistan,+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                      bg-[#006F61] text-white font-semibold
                      shadow-lg shadow-[#006F61]/20 hover:shadow-xl
                      transition-all duration-300 hover:-translate-y-1"
                  >
                    <Globe className="w-5 h-5" />
                    Open in Google Maps
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden"
        >
          {/* Background Decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-[#006F61]/10 hidden lg:block" />
            <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-[#006F61]/5 hidden lg:block" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${faqVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#006F61]/10 border border-[#006F61]/20">
                <MessageCircle className="w-4 h-4 text-[#006F61]" />
                <span className="text-sm font-semibold text-[#006F61]">
                  COMMON QUESTIONS
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
                Frequently Asked{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#006F61]">Questions</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#006F61]/15 rounded-full transform -rotate-1" />
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Find answers to common questions about our expeditions and services
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-2xl overflow-hidden transition-all duration-500
                    ${expandedFaq === index
                      ? 'border-[#006F61]/30 shadow-lg shadow-[#006F61]/5'
                      : 'border-gray-100 hover:border-[#006F61]/20'
                    } ${faqVisible
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
                    className={`w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors
                      ${expandedFaq === index ? 'bg-[#006F61]/5' : 'hover:bg-gray-50'}`}
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                        transition-all duration-300
                        ${expandedFaq === index
                          ? 'bg-[#006F61] rotate-45'
                          : 'bg-[#006F61]/10'
                        }`}
                    >
                      <span
                        className={`text-2xl font-light leading-none transition-colors
                          ${expandedFaq === index ? 'text-white' : 'text-[#006F61]'}`}
                      >
                        +
                      </span>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? "max-h-48" : "max-h-0"
                      }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <div className="h-px bg-gray-100 mb-4" />
                      <p className="text-gray-600 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="py-16 sm:py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`max-w-4xl mx-auto transition-all duration-700 ${ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              {/* CTA Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#006F61] via-[#005a4d] to-[#004a40] p-8 sm:p-12 md:p-16 text-center">
                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
                  <div className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full hidden md:block" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full hidden md:block" />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white/90 text-sm font-medium">
                      Start Your Journey
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
                    Ready for Your Next Adventure?
                  </h2>

                  <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                    Explore our collection of carefully crafted expeditions and find
                    the perfect mountain adventure that awaits you.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="/expedition"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl
                        bg-white text-[#006F61] font-bold text-lg
                        shadow-2xl hover:shadow-xl hover:-translate-y-1
                        transition-all duration-300"
                    >
                      <Mountain className="w-5 h-5" />
                      <span>Explore Expeditions</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                      href="mailto:info@northkarakoram.com?subject=Booking%20Inquiry"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl
                        border-2 border-white/40 text-white font-bold text-lg
                        hover:bg-white hover:text-[#006F61] hover:border-white
                        transition-all duration-300 hover:-translate-y-1"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Book via Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
