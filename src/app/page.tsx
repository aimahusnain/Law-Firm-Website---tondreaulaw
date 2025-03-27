import { LegalDisclaimer } from "@/components/legal-disclaimer"
import { LegalServicesSection } from "@/components/legal-services"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Facebook, Linkedin, MoreHorizontal, PlayIcon, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black dark flex flex-col">
      {/* Hero Section Container */}
      <div className="w-full flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
        {/* Main container with rounded corners */}
        <Card className="w-full max-w-7xl h-[580px] sm:h-[700px] md:h-[750px] overflow-hidden relative border-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] sm:rounded-3xl rounded-none bg-zinc-900">
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
          {/* <NavBar /> */}

          <div className="sm:py-4 py-8 w-full" />

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-[calc(600px-76px)] sm:h-[calc(650px-76px)] md:h-[calc(700px-76px)] flex flex-col justify-between">
            {/* Mobile & Tablet Layout */}
            <div className="flex flex-col h-full justify-between md:hidden">
              <div className="pt-6">
                <h1 className="text-white text-3xl sm:text-4xl font-sans leading-tight mb-4 tracking-tight">
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]">
                    Here to fight to protect
                  </span>
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.4s_forwards]">your legal rights.</span>
                </h1>
                <p className="text-white/80 text-sm sm:text-base mb-6 max-w-xl leading-relaxed opacity-0 animate-[fadeInUp_0.6s_0.6s_forwards]">
                  Trust us for affordable, competent, and compassionate help with family law, divorce, guardianship, and
                  estates. Contact the law office of FritzGerald Tondreau Esq. today.
                </p>
                <div className="opacity-0 animate-[fadeInUp_0.6s_0.8s_forwards] mb-10">
                  <Button variant="default" size="default" className="w-fit px-6 py-2.5 sm:w-auto text-sm sm:text-base">
                    Get a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="pb-6 space-y-6">
                {/* Team Preview - Mobile & Tablet */}
                <div className="flex items-center group cursor-pointer">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
                    ].map((src, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-zinc-800 overflow-hidden transition-transform duration-300 group-hover:translate-x-[3px]"
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
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-zinc-800 bg-zinc-800 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[3px] p-0"
                      style={{ zIndex: 0, transitionDelay: "0.15s" }}
                    >
                      <MoreHorizontal className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                  <span className="ml-4 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 group-hover:ml-5">
                    Meet Our Team
                  </span>
                </div>

                {/* Video Preview - Tablet Only */}
                <div className="hidden sm:block md:hidden relative w-full h-32">
                  <Card className="relative rounded-xl overflow-hidden aspect-video border-zinc-800 bg-black shadow-xl">
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
                        className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-xl text-zinc-900"
                      >
                        <PlayIcon className="w-10 h-10 ml-1 text-white font-bold" />
                      </Button>
                    </div>
                  </Card>
                </div>

                {/* Social Media Icons - Mobile & Tablet */}
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
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-zinc-700 bg-zinc-800/20 text-white hover:bg-white hover:text-zinc-900 backdrop-blur-xl"
                    >
                      <Link href={social.href}>{social.icon}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="relative h-full pt-6 md:pt-12 lg:pt-16 hidden md:block">
              {/* Left Column - Text Content with animations */}
              <div className="w-full flex flex-col justify-center">
                <h1 className="text-white text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-sans leading-tight mb-6 md:mb-8 tracking-tight">
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]">
                    Here to fight to protect
                  </span>
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.4s_forwards]">your legal rights.</span>
                </h1>
                <p className="text-white/80 text-base lg:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed opacity-0 animate-[fadeInUp_0.6s_0.6s_forwards]">
                  Trust us for affordable, competent, and compassionate help with family law, divorce, guardianship, and
                  estates. Contact the law office of FritzGerald Tondreau Esq. today.
                </p>
                <div className="opacity-0 animate-[fadeInUp_0.6s_0.8s_forwards]">
                  <Button variant="default" size="lg" className="w-[13rem]">
                    Get a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Row - Desktop */}
            <div className="relative hidden md:block w-full py-6 md:py-8 opacity-0 animate-[fadeIn_1s_1.2s_forwards] items-center justify-center flex-col bottom-5">
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
                {/* Video */}
                <div className="absolute right-0 bottom-0 -translate-y-1/3" style={{ width: "180%", right: "0%" }}>
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
                        className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-black/70 backdrop-blur-xl text-zinc-900"
                      >
                        <PlayIcon className="w-12 h-12 lg:w-14 lg:h-14 ml-1 text-white font-bold" />
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
      <LegalServicesSection />

      <LegalDisclaimer />
    </div>
  )
}

