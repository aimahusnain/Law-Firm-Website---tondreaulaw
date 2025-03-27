"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, Facebook, Linkedin, Twitter, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const NavLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-5 py-1 sm:left-14 sm:right-14 left-2 right-2 max-w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-black/70 rounded-full backdrop-blur-md shadow-lg" : "bg-transparent top-10"}
      `}
    >
      <div className="container mx-auto px-5 sm:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/"
            className="
              sm:text-2xl text-md font-bold 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-white to-white/70
              tracking-wider
              hover:scale-105 
              transition-transform 
              duration-300
            "
          >
            FritzGerald Tondreau Esq.
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NavLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >
              <Link
                href={link.href}
                className="
                  relative 
                  text-white/80 
                  text-sm 
                  uppercase
                  group 
                  hover:text-white
                  transition-colors 
                  duration-300
                  tracking-widest
                "
              >
                {link.name}
                <span
                  className="
                    absolute 
                    bottom-0 
                    left-0 
                    w-full 
                    h-0.5 
                    bg-white 
                    scale-x-0 
                    group-hover:scale-x-100 
                    origin-left 
                    transition-transform 
                    duration-300
                  "
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Button
            variant="default"
            size="default"
            className="
              px-6 py-2 
              border 
              border-white/30 
              text-white 
              rounded-full 
              text-sm 
              uppercase 
              tracking-wider
              hover:bg-white/10 
              transition-all 
              duration-300
              hover:border-white/50
            "
          >
            Get Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Mobile Menu with shadcn Sheet */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <motion.button whileTap={{ scale: 0.9 }} className="md:hidden text-white z-50">
              <Menu className="h-6 w-6" />
            </motion.button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 p-0 bg-gradient-to-b from-black/95 to-black/85 backdrop-blur-xl border-neutral-800"
          >
            <div className="p-6 pt-12 space-y-10 h-full overflow-y-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Fritzgerald Tondreaue</h3>
                {NavLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.3,
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      className="
                        block 
                        text-neutral-300 
                        hover:text-white 
                        hover:pl-2 
                        transition-all 
                        duration-300 
                        text-lg 
                        py-3 
                        border-b 
                        border-neutral-800/50 
                        relative 
                        group
                      "
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      <span
                        className="
                          absolute 
                          left-0 
                          bottom-0 
                          h-0.5 
                          bg-white 
                          transform 
                          scale-x-0 
                          group-hover:scale-x-100 
                          transition-transform 
                          duration-300
                        "
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.3,
                  },
                }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white">Contact</h3>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-400 flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-neutral-500" />
                    <span>716-222-9119</span>
                  </p>
                  <p className="text-sm text-neutral-400 flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-neutral-500" />
                    <span>inquiries@tondreaulaw.com</span>
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.6,
                    duration: 0.3,
                  },
                }}
                className="flex justify-center"
              >
                <Button
                  variant="default"
                  className="
                    px-8 py-3 
                    border 
                    border-white/30 
                    text-white 
                    rounded-full 
                    text-sm 
                    uppercase 
                    tracking-wider
                    hover:bg-white/10 
                    transition-all 
                    duration-300
                    hover:border-white/50
                  "
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.8,
                    duration: 0.3,
                  },
                }}
                className="flex justify-center space-x-6 pt-4"
              >
                {[
                  { Icon: Facebook, href: "#facebook" },
                  { Icon: Linkedin, href: "#linkedin" },
                  { Icon: Twitter, href: "#twitter" },
                ].map(({ Icon, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="
                      text-neutral-400 
                      hover:text-white 
                      transition-colors 
                      rounded-full 
                      p-3 
                      bg-neutral-900/50 
                      hover:bg-neutral-800/50
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                ))}
              </motion.div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default NavBar

