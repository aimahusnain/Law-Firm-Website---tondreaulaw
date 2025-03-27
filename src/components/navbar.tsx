"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" }
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-5 py-1 sm:left-14 sm:right-14 left-2 right-2 max-w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-black/70 rounded-full backdrop-blur-md shadow-lg' 
          : 'bg-transparent top-10'}
      `}
    >
      <div className="container mx-auto px-5 sm:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
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
                delay: index * 0.1 
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
          <Link 
            href="#contact"
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
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                fixed 
                inset-0 
                bg-black/95 
                backdrop-blur-xl 
                z-40 
                flex 
                flex-col 
                justify-center 
                items-center 
                space-y-8
              "
            >
              {NavLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5, 
                      delay: index * 0.1 
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 20,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Link
                    href={link.href}
                    className="
                      text-3xl 
                      font-light 
                      text-white/70 
                      hover:text-white 
                      transition-colors 
                      duration-300
                      tracking-wider
                    "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.5 }
                }}
              >
                <Link 
                  href="#contact"
                  className="
                    mt-8
                    px-8 py-3 
                    border 
                    border-white/30 
                    text-white 
                    rounded-full 
                    text-lg 
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
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}