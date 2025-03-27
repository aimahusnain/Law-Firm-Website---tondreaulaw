"use client";

import {
    Facebook,
    Linkedin,
    Twitter
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    "Expertise",
    "About",
    "Our Work",
    "Team",
    "Blog",
    "Contacts",
  ];

  const policyLinks = [
    "Cookies Policy",
    "Privacy Policy",
    "Terms and Conditions",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook" },
    { icon: Linkedin, href: "#linkedin" },
    { icon: Twitter, href: "#twitter" },
  ];

  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Section - Logo and Social Links */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <span className="text-lg font-semibold text-white">
              Law firm of FritzGerald Tondreau Esq.
            </span>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-3">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="
                    text-neutral-400 
                    hover:text-white 
                    transition-colors 
                    rounded-full 
                    p-2 
                    border 
                    border-neutral-800 
                    hover:border-neutral-600
                  "
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="hidden md:flex justify-center space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="
                  text-neutral-400 
                  hover:text-white 
                  transition-colors 
                  text-sm
                "
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right Section - Contact Information */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-neutral-400">Phone: 716-222-9119</p>
            <p className="text-sm text-neutral-400">
              Address: 1133 Kensington Avenue Buffalo NY,14215
            </p>
            <p className="text-sm text-neutral-400">
              Email: inquiries@tondreaulaw.com
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright and Policies */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-sm text-neutral-500 mb-4 sm:mb-0">
            FritzGerald Tondreau Esq. © {currentYear}. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            {policyLinks.map((policy, index) => (
              <Link
                key={index}
                href={`#${policy.toLowerCase().replace(" ", "-")}`}
                className="
                  text-sm 
                  text-neutral-500 
                  hover:text-white 
                  transition-colors
                  block
                "
              >
                {policy}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
