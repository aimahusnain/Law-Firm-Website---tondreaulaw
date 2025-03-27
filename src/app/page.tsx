import { NavBar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowRight,
  BookOpen,
  Facebook,
  HomeIcon,
  Linkedin,
  Menu,
  MoreHorizontal,
  PlayIcon,
  Scale,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Family Law",
      description:
        "Navigating complex family dynamics with compassion and legal expertise. We provide comprehensive support for challenging family matters.",
      icon: <Users className="h-8 w-8 text-blue-400" />,
      image: "/family-law.jpg",
      bgColor: "bg-blue-950/50",
    },
    {
      title: "Divorce",
      description:
        "Guiding you through divorce with strategic counsel. We protect your interests and help you transition to the next chapter of your life.",
      icon: <Scale className="h-8 w-8 text-red-400" />,
      image: "/divorce-law.jpg",
      bgColor: "bg-red-950/50",
    },
    {
      title: "Guardianship",
      description:
        "Ensuring the protection and care of vulnerable individuals. We provide expert legal representation to safeguard their best interests.",
      icon: <HomeIcon className="h-8 w-8 text-green-400" />,
      image: "/guardianship-law.jpg",
      bgColor: "bg-green-950/50",
    },
    {
      title: "Estates",
      description:
        "Strategic estate planning to preserve your legacy. We help minimize tax implications and ensure smooth, dignified asset transfer.",
      icon: <BookOpen className="h-8 w-8 text-purple-400" />,
      image: "/estate-law.jpg",
      bgColor: "bg-purple-950/50",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-950 to-zinc-900 dark flex flex-col">
      {/* Hero Section Container */}
      <div className="w-full flex items-center justify-center p-4 md:p-6 lg:p-8">
        {/* Main container with rounded corners */}
        <Card className="w-full max-w-7xl h-[60vh] md:h-[80vh] overflow-hidden relative border-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] rounded-3xl bg-zinc-900">
          {/* Background Image with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/businessmen-reflected-table.jpg"
              alt="Modern law office"
              fill
              priority
              className="object-cover brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/30" />
          </div>

          {/* Header/Navigation */}
          <NavBar />

          <div className="sm:py-4 py-8 w-full" />


          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-[calc(60vh-76px)] md:h-[calc(70vh-76px)]">
            {/* Mobile Layout - Only visible on small screens */}
            <div className="flex flex-col h-full justify-between md:hidden">
              <div className="pt-6">
                <h1 className="text-white text-3xl font-sans leading-tight mb-4 tracking-tight">
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]">
                  Here to fight to protect
                  </span>
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.4s_forwards]">
                  your legal rights.
                  </span>
                </h1>
                <p className="text-white/80 text-xs mb-6 max-w-xl leading-relaxed opacity-0 animate-[fadeInUp_0.6s_0.6s_forwards]">
                Trust us for affordable, competent, and compassionate help
                  with family law, divorce, guardianship, and estates. Contact
                  the law office of FritzGerald Tondreau Esq. today.
                </p>
                <div className="opacity-0 animate-[fadeInUp_0.6s_0.8s_forwards]">
                  <Button
                    variant="default"
                    size="default"
                    className="w-full sm:w-auto"
                  >
                    Get a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="pb-6 space-y-6">
                {/* Team Preview - Mobile */}
                <div className="flex items-center group cursor-pointer">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
                    ].map((src, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-zinc-800 overflow-hidden transition-transform duration-300 group-hover:translate-x-[3px]"
                        style={{
                          zIndex: 3 - index,
                          transitionDelay: `${index * 0.05}s`,
                        }}
                      >
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`Team member ${index + 1}`}
                          width={36}
                          height={36}
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-zinc-800 bg-zinc-800 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[3px] p-0"
                      style={{ zIndex: 0, transitionDelay: "0.15s" }}
                    >
                      <MoreHorizontal className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                  <span className="ml-4 text-white text-xs font-medium tracking-wide transition-all duration-300 group-hover:ml-5">
                    Meet Our Team
                  </span>
                </div>

                {/* Social Media Icons - Mobile */}
                <div className="flex space-x-3">
                  {[
                    { icon: <Facebook size={16} />, href: "#facebook" },
                    { icon: <Linkedin size={16} />, href: "#linkedin" },
                    { icon: <Twitter size={16} />, href: "#twitter" },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                      className="w-8 h-8 rounded-full border-zinc-700 bg-zinc-800/20 text-white hover:bg-white hover:text-zinc-900 backdrop-blur-xl"
                    >
                      <Link href={social.href}>{social.icon}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Layout - Preserved exactly as in the original */}
            <div className="relative h-full pt-6 md:pt-12 lg:pt-16 hidden md:block">
              {/* Left Column - Text Content with animations */}
              <div className="w-full flex flex-col justify-center">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-sans leading-tight mb-6 md:mb-8 tracking-tight">
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]">
                    Here to fight to protect
                  </span>
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.4s_forwards]">
                    your legal rights.
                  </span>
                </h1>
                <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed opacity-0 animate-[fadeInUp_0.6s_0.6s_forwards]">
                  Trust us for affordable, competent, and compassionate help
                  with family law, divorce, guardianship, and estates. Contact
                  the law office of FritzGerald Tondreau Esq. today.
                </p>
                <div className="opacity-0 animate-[fadeInUp_0.6s_0.8s_forwards]">
                  <Button variant="default" size="lg" className="w-[13rem]">
                    Get a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Bottom Row */}
            </div>

            <div className="relative hidden md:block w-full py-6 md:py-8 opacity-0 animate-[fadeIn_1s_1.2s_forwards] items-center justify-center flex-col bottom-8">
              {/* Social Media Icons */}
              <div className="absolute left-0 bottom-0 flex space-x-4">
                {[
                  { icon: <Facebook size={18} />, href: "#facebook" },
                  { icon: <Linkedin size={18} />, href: "#linkedin" },
                  { icon: <Twitter size={18} />, href: "#twitter" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="w-10 h-10 rounded-full border-zinc-700 bg-zinc-800/20 text-white hover:bg-white hover:text-zinc-900 backdrop-blur-xl"
                  >
                    <Link href={social.href}>{social.icon}</Link>
                  </Button>
                ))}
              </div>

              {/* Team Preview */}
              <div className="absolute right-0 bottom-0 flex items-center group cursor-pointer">
                {/* video */}
                <div
                  className="absolute right-0 bottom-0 -translate-y-1/3"
                  style={{ width: "180%", right: "0%" }}
                >
                  <Card className="relative rounded-3xl overflow-hidden aspect-video border-zinc-800 bg-black shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2532&auto=format&fit=crop"
                      alt="Office video"
                      fill
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="w-16 h-16 rounded-full bg-black/70 backdrop-blur-xl text-zinc-900"
                      >
                        <PlayIcon className="w-14 h-14 ml-1 text-white font-bold" />
                      </Button>
                    </div>
                  </Card>
                </div>

                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="w-9 h-9 rounded-full border-2 border-zinc-800 overflow-hidden transition-transform duration-300 group-hover:translate-x-[3px]"
                      style={{
                        zIndex: 3 - index,
                        transitionDelay: `${index * 0.05}s`,
                      }}
                    >
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Team member ${index + 1}`}
                        width={36}
                        height={36}
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-9 h-9 rounded-full border-zinc-800 bg-zinc-800 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[3px] p-0"
                    style={{ zIndex: 0, transitionDelay: "0.15s" }}
                  >
                    <MoreHorizontal className="w-4 h-4 text-white" />
                  </Button>
                </div>

                <span className="ml-4 text-white text-sm font-medium tracking-wide transition-all duration-300 group-hover:ml-5">
                  Meet Our Team
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Legal Services Section */}
      <section className="w-full bg-black py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 tracking-tight">
              Our Specialized Legal Services
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to your unique needs. Our
              experienced attorneys provide strategic guidance across critical
              legal domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="
                bg-zinc-800 
                border-zinc-700 
                p-4 md:p-6 
                relative 
                group 
                overflow-hidden 
                transition-all 
                duration-300 
                hover:shadow-xl 
                hover:border-zinc-600
              "
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>

                <div className="flex flex-col h-full">
                  <div className="mb-3 md:mb-4 flex items-center space-x-3 md:space-x-4">
                    <div className="bg-zinc-700 p-2 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-white text-lg md:text-xl font-semibold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base mb-4 md:mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-auto border-zinc-600 text-white hover:bg-white/10"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
