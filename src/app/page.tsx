import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Twitter, Play, MoreHorizontal, Menu, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-950 to-zinc-900 dark flex flex-col">
      {/* Hero Section Container */}
      <div className="w-full flex items-center justify-center p-4 md:p-6 lg:p-8">
        {/* Main container with rounded corners */}
        <Card className="w-full max-w-7xl h-[80vh] overflow-hidden relative border-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] rounded-3xl bg-zinc-900">
          {/* Background Image with gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/heroImage.jpg"
              alt="Modern law office"
              fill
              priority
              className="object-cover brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
          </div>

          {/* Header/Navigation */}
          <header className="relative z-10 w-full bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-8 py-5 flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center group">
                <div className="w-10 h-10 mr-3 transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold text-sm md:text-base leading-tight tracking-wide">Strategic</div>
                  <div className="font-semibold text-sm md:text-base leading-tight tracking-wide">Law Group</div>
                </div>
              </div>

              {/* Navigation Links - Desktop */}
              <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {["Expertise", "About", "Our Work", "Team", "Blog", "Contacts"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/90 text-sm relative group transition-colors hover:text-white"
                  >
                    <span>{item}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-zinc-950/95 backdrop-blur-md border-zinc-800">
                  <div className="flex flex-col space-y-6 mt-10">
                    {["Expertise", "About", "Our Work", "Team", "Blog", "Contacts"].map((item) => (
                      <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-white/90 text-lg font-medium transition-colors hover:text-white"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-[calc(80vh-76px)] flex flex-col">
            <div className="flex flex-col lg:flex-row h-full pt-6 md:pt-12 lg:pt-16">
              {/* Left Column - Text Content with animations */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 md:mb-8 tracking-tight">
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]">The power of</span>
                  <span className="block opacity-0 animate-[fadeInUp_0.6s_0.4s_forwards]">legal protection</span>
                </h1>
                <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed opacity-0 animate-[fadeInUp_0.6s_0.6s_forwards]">
                  Trust your legal matters to professionals. Our law firm provides reliable support and effective
                  solutions. Contact us today for expert assistance.
                </p>
                <div className="opacity-0 animate-[fadeInUp_0.6s_0.8s_forwards]">
                  <Button variant="default" size="lg" className="w-[13rem]">
                    Get a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right Column - Video */}
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-8 lg:mt-0 opacity-0 animate-[fadeIn_1s_1s_forwards]">
                <div className="w-full max-w-md">
                  <Card className="relative rounded-2xl overflow-hidden aspect-video border-zinc-800 bg-black shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2532&auto=format&fit=crop"
                      alt="Office video"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="w-14 h-14 rounded-full bg-white text-zinc-900 hover:bg-white/90"
                      >
                        <Play className="w-6 h-6 ml-1" />
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row justify-between items-center py-6 md:py-8 mt-auto opacity-0 animate-[fadeIn_1s_1.2s_forwards] gap-6 sm:gap-0">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
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
                    className="w-10 h-10 rounded-full border-zinc-700 bg-zinc-800/50 text-white hover:bg-white hover:text-zinc-900"
                  >
                    <Link href={social.href}>{social.icon}</Link>
                  </Button>
                ))}
              </div>

              {/* Team Preview */}
              <div className="flex items-center group cursor-pointer">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="w-9 h-9 rounded-full border-2 border-zinc-800 overflow-hidden transition-transform duration-300 group-hover:translate-x-[3px]"
                      style={{ zIndex: 3 - index, transitionDelay: `${index * 0.05}s` }}
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

      {/* Introduction Section */}
      <section className="w-full bg-black py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8 md:mb-12">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Exceptional Legal Services for Complex Matters
              </h2>
              <p className="text-zinc-400 text-lg max-w-3xl">
                Strategic Law Group specializes in providing comprehensive legal solutions for businesses and
                individuals facing complex legal challenges. Our team of experienced attorneys is dedicated to
                delivering results.
              </p>
            </div>

            {[
              {
                title: "Corporate Law",
                description:
                  "Expert guidance for businesses on formation, compliance, contracts, and corporate governance.",
              },
              {
                title: "Litigation",
                description:
                  "Strategic representation in complex disputes, with a focus on efficient and favorable resolutions.",
              },
              {
                title: "Intellectual Property",
                description: "Protection for your innovations, creative works, and brand identity in the digital age.",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 p-6 shadow-md">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 mb-6 flex-grow">{service.description}</p>
                  <Button
                    variant="outline"
                    className="mt-auto border-zinc-600 text-white hover:bg-white hover:text-zinc-900"
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
  )
}

