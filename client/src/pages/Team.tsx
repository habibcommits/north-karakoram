import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import fieldManagerImage from "@assets/Field_Manager_&_tour_guide_1765743996702.png";
import tourConsultantImage from "@assets/Ibrahim_khalil_Operation_Manager_&_Tour_Consultant_1765743996703.png";
import operationManagerImage from "@assets/Mohsin_Ali_Operation_Manager_1765743996704.png";
import ceoImage from "@assets/Muhammad_AliFounder_&_CEO_1765743996704.png";
import tourGuideImage from "@assets/Murtaza_Ali_Field_Manager_&_tour_guide_1765743996705.png";
import logisticsImage from "@assets/ghulam_abbas_logistic_specilist_1765743996703.png";
import trekkingImage from "@assets/stock_images/beautiful_mountain_p_1088467d.jpg";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
  SiYoutube,
} from "react-icons/si";
import {
  Users,
  Mountain,
  Award,
  Globe,
  Sparkles,
  MapPin,
  ArrowRight,
  Heart,
  Shield,
  Star,
  Quote,
  Mail,
  Phone,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/seo/config";
import { usePageSEO } from "@/seo/hooks/useSeo";
import { SEOHead } from "@/seo/SEOHead";
import { BreadcrumbSchema } from "@/seo/StructuredData";

const teamMembers = [
  {
    id: 1,
    name: "Mohsin Ali",
    role: "CEO and Founder",
    image: operationManagerImage,
    expertise: [
      "Strategic Planning",
      "Expedition Leadership",
      "Business Development",
      "Mountain Tourism",
      "Team Building",
    ],
    description:
      "Mohsin Ali founded North Karakoram with a vision to share the majestic beauty of Pakistan's peaks with adventurers worldwide. His profound understanding of the Karakoram range and commitment to sustainable tourism drives our company's mission to create transformative mountain adventures.",
    featured: true,
  },
  {
    id: 2,
    name: "Muhammad Ali",
    role: "Operation Manager",
    image: ceoImage,
    expertise: [
      "Logistics Management",
      "Team Coordination",
      "Safety Protocols",
      "Route Planning",
      "Crisis Management",
    ],
    description:
      "Muhammad Ali ensures seamless operations across all expeditions and treks. His meticulous attention to detail and expertise in coordinating complex logistics guarantees that every adventure runs smoothly from start to finish.",
    featured: false,
  },
  {
    id: 3,
    name: "Ibrahim Khalil",
    role: "Operation Manager and Tour Consultant",
    image: tourConsultantImage,
    expertise: [
      "Tour Planning",
      "Client Relations",
      "Custom Itineraries",
      "Customer Service",
      "Travel Consulting",
    ],
    description:
      "Ibrahim Khalil combines operational excellence with personalized tour consulting. He works closely with clients to design bespoke adventures that match their skill levels, preferences, and dreams of conquering Pakistan's legendary peaks.",
    featured: false,
  },
  {
    id: 4,
    name: "Ghulam Abbas",
    role: "Logistic Specialist",
    image: logisticsImage,
    expertise: [
      "Equipment Management",
      "Supply Chain",
      "Base Camp Operations",
      "Inventory Control",
      "Vendor Relations",
    ],
    description:
      "Ghulam Abbas is the backbone of our expedition logistics. His expertise in managing equipment, supplies, and base camp operations ensures that every expedition is properly equipped and supported throughout the journey.",
    featured: false,
  },
  {
    id: 5,
    name: "Muhammad Ibrahim",
    role: "Head Cook",
    image: fieldManagerImage,
    expertise: [
      "High Altitude Cooking",
      "Nutrition Planning",
      "Team Catering",
      "Camp Kitchen Management",
    ],
    description:
      "Muhammad Ibrahim is our expert Head Cook who ensures all expedition members are well-nourished with delicious, nutritious meals even at the highest altitudes. His expertise in high-altitude cooking and meal planning keeps teams energized throughout their adventures.",
    featured: false,
  },
  {
    id: 6,
    name: "Murtaza Ali",
    role: "Field Manager and Tour Guide",
    image: tourGuideImage,
    expertise: [
      "High Altitude Trekking",
      "Cultural Interpretation",
      "Client Safety",
      "Mountain Navigation",
      "First Aid",
    ],
    description:
      "Murtaza Ali brings energy and expertise to every expedition. His passion for the mountains and ability to connect with diverse groups makes him an invaluable guide for both challenging climbs and cultural explorations.",
    featured: false,
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
  // {
  //   icon: SiWhatsapp,
  //   href: "https://wa.me/923555718293",
  //   label: "WhatsApp",
  //   color: "#25D366",
  // },
];

const stats = [
  { value: "15+", label: "Years Combined Experience", icon: Award },
  { value: "150+", label: "Successful Expeditions", icon: Mountain },
  { value: "100%", label: "Safety Record", icon: Shield },
  { value: "50+", label: "Destinations Covered", icon: Globe },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our top priority on every expedition.",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "We love what we do and it shows in every adventure.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Committed to delivering exceptional experiences.",
  },
  {
    icon: Users,
    title: "Team Spirit",
    description: "Working together to create unforgettable journeys.",
  },
];

function TeamMemberCard({
  member,
  index,
  isVisible,
}: {
  member: (typeof teamMembers)[0];
  index: number;
  isVisible: boolean;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`group perspective-1000 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{
        transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms",
      }}
      data-testid={`card-team-member-${member.id}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-[520px] transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""
          }`}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-500">
          {/* Image max-w-7xl */}
          <div className="relative h-[320px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Featured Badge */}
            {member.featured && (
              <div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-white text-xs font-semibold flex items-center gap-1.5"
                style={{ backgroundColor: "#006F61" }}
              >
                <Star className="w-3.5 h-3.5 fill-current" />
                Founder
              </div>
            )}

            {/* Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3
                className="font-heading font-bold text-2xl text-white mb-1"
                data-testid={`text-member-name-${member.id}`}
              >
                {member.name}
              </h3>
              <p
                className="text-white/90 font-medium"
                data-testid={`text-member-role-${member.id}`}
              >
                {member.role}
              </p>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {member.expertise.slice(0, 3).map((skill, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(0, 111, 97, 0.1)",
                    color: "#006F61",
                  }}
                >
                  {skill}
                </Badge>
              ))}
              {member.expertise.length > 3 && (
                <Badge
                  variant="secondary"
                  className="text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(0, 111, 97, 0.1)",
                    color: "#006F61",
                  }}
                >
                  +{member.expertise.length - 3} more
                </Badge>
              )}
            </div>

            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span
                className="w-8 h-0.5 rounded-full"
                style={{ backgroundColor: "#006F61" }}
              />
              Hover to learn more
            </p>
          </div>

          {/* Bottom Accent */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
            style={{ backgroundColor: "#006F61" }}
          />
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden p-8 flex flex-col justify-center text-white"
          style={{
            background: "linear-gradient(135deg, #006F61 0%, #004d44 100%)",
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Quote Icon */}
            <Quote className="w-5 h-5 text-white/30 mb-4" />

            <h3 className="font-heading font-bold text-xl mb-2">
              {member.name}
            </h3>
            <p className="text-white/80 font-medium font-lg mb-4">{member.role}</p>

            <p className="text-white/90 text-xs leading-relaxed mb-6">
              {member.description}
            </p>

            <div>
              <p className="text-xs uppercase tracking-wider mb-3 text-white/60 font-semibold">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-1">
                {member.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/15 text-white/90 font-medium backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {

  type TeamMember = {
    name: string;
    role: string;
    image?: string;
    description?: string;
    expertise?: string[];
  };

  function TeamSchema({ members }: { members: TeamMember[] }) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      employee: members.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        ...(member.image && {
          image: member.image.startsWith("http")
            ? member.image
            : `${SITE_CONFIG.url}${member.image}`,
        }),
        ...(member.description && { description: member.description }),
        ...(member.expertise && { knowsAbout: member.expertise }),
      })),
    };

    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
    );
  }


  const seo = usePageSEO('team');

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Our Team', path: '/team' },
  ];


  const [heroVisible, setHeroVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLElement>(null);

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
      { ref: introRef, observer: createObserver(setIntroVisible) },
      { ref: teamRef, observer: createObserver(setTeamVisible) },
      { ref: valuesRef, observer: createObserver(setValuesVisible) },
      { ref: socialRef, observer: createObserver(setSocialVisible) },
    ];

    observers.forEach(({ ref, observer }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observers.forEach(({ observer }) => observer.disconnect());
  }, []);

  return (
    <>
      {seo && <SEOHead seo={seo} path="/team" />}
      <BreadcrumbSchema items={breadcrumbs} />
      <TeamSchema
        members={teamMembers.map(({ name, role, image, description, expertise }) => ({
          name,
          role,
          image,
          description,
          expertise,
        }))}
      />

      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section ref={heroRef} className="relative h-[50vh] min-h-[400px]">
            <img
              src={trekkingImage}
              alt="Our Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
            <div
              className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-1000 ${heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.6)" }}
                >
                  <span className="text-white/90 text-sm font-semibold tracking-wide">
                    MEET THE EXPERTS
                  </span>
                </div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Our Team
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                  Passionate professionals dedicated to making your mountain
                  dreams a reality
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          {/* <section className="py-12 md:py-16 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #006F61 0%, #005249 100%)",
            }}
          />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

          {/* Introduction Section */}
          <section
            ref={introRef}
            className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(0, 111, 97, 0.03)" }}
              />
              <div className="absolute top-20 left-10 hidden xl:block">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`max-w-4xl mx-auto text-center transition-all duration-700 ${introVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <span
                    className="text-xs md:text-sm font-semibold tracking-wide"
                    style={{ color: "#006F61" }}
                  >
                    PASSIONATE PROFESSIONALS
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                  The People Behind Your{" "}
                  <span className="relative inline-block" style={{ color: "#006F61" }}>
                    Adventures
                    {/* <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8.5C50 2.5 150 2.5 198 8.5"
                      stroke="#006F61"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeOpacity="0.3"
                    />
                  </svg> */}
                  </span>
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                  Our team of experienced guides, adventure specialists, and
                  operations professionals is dedicated to delivering safe,
                  expertly organized mountaineering, trekking, cultural tours,
                  jeep safaris, and other adventure experiences across the
                  Karakoram and Himalayan regions.
                </p>
              </div>
            </div>
          </section>

          {/* Team Members Section */}
          <section
            ref={teamRef}
            className="py-16 bg-gray-50/50 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member, index) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    index={index}
                    isVisible={teamVisible}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section
            ref={valuesRef}
            className="py-20 md:py-28 bg-white relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${valuesVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                >
                  <Heart className="w-4 h-4" style={{ color: "#006F61" }} />
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "#006F61" }}
                  >
                    OUR VALUES
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                  What <span style={{ color: "#006F61" }}>Drives</span> Us
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  The principles that guide our team in every expedition and
                  interaction
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center ${valuesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                      }`}
                    style={{
                      transitionDelay: valuesVisible
                        ? `${200 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "rgba(0, 111, 97, 0.1)" }}
                    >
                      <value.icon
                        className="w-8 h-8"
                        style={{ color: "#006F61" }}
                      />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Social Section */}
          <section
            ref={socialRef}
            className="py-20 md:py-28 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #006F61 0%, #004d44 100%)",
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`text-center transition-all duration-700 ${socialVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                  <Globe className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm font-semibold tracking-wide">
                    STAY CONNECTED
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                  Connect With Us
                </h2>

                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                  Follow our adventures and get in touch with our team on social
                  media. We love sharing stories from the mountains!
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 md:gap-6 flex-wrap mb-12">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 ${socialVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                      style={{
                        transitionDelay: socialVisible
                          ? `${300 + index * 100}ms`
                          : "0ms",
                      }}
                      data-testid={`link-social-${social.label.toLowerCase()}`}
                    >
                      <social.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-gray-900 transition-colors duration-300" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-700 ${socialVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  <a
                    href="https://wa.me/923555718293?text=I'm%20interested%20in%20your%20services.%20Can%20I%20get%20more%20information?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    data-testid="link-whatsapp-contact"
                  >
                    <SiWhatsapp className="hidden md:block w-6 h-6" style={{ color: "#25D366" }} />
                    Contact on WhatsApp
                  </a>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto text-lg px-8 py-4 h-auto border-2 border-white/50 text-white bg-transparent hover:bg-white/10 font-semibold transition-all duration-300 hover:-translate-y-1"
                    >
                      <Mail className="hidden md:block w-5 h-5 mr-2" />
                      Send Us a Message
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Join Us CTA Section */}
          <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                  Ready to Start Your Adventure?
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Let our experienced team guide you through the majestic
                  mountains of Pakistan
                </p>
                <Link href="/expedition">
                  <Button
                    size="lg"
                    className="w-full md:w-fit group text-lg px-8 py-6 h-auto text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: "#006F61" }}
                  >
                    Explore Expeditions
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
