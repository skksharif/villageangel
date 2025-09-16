import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  id: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }, []);

  // Navigation links data
  const navLinks: NavLink[] = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Collections", id: "collections" },
    { name: "Why Us", id: "why-us" },
    { name: "Contact", id: "contact" },
  ];

  // Reusable classes for button styles
  const linkBaseClasses = `text-sm font-medium transition-colors duration-200 hover:text-gold-500`;
  const mobileLinkClasses = `block w-full text-left px-3 py-2 text-gray-700 hover:text-gold-600 hover:bg-gold-50 rounded-md transition-colors duration-200`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-red-800/95 backdrop-blur-md shadow-lg border-b border-gold-200"
          : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-around py-3">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
          aria-label="Go to Home"
        >
          <img
            src="/logo.png"
            alt="Village Angel Logo"
            className={`object-contain transition-all duration-300 border-4 border-[#f2c380] p-1 border-double pl-2 ${
              isScrolled ? "w-12 md:w-14" : "w-16 md:w-16"
            }`}
          />

          <span
            className={`font-['Dancing_Script'] text-xl font-semibold invisible md:visible transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            Village Angel
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`${linkBaseClasses} text-white`}
              aria-label={`Go to ${link.name}`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("download")}
            className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
            aria-label="Download the App"
          >
            <Download className="w-4 h-4" />
            Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`p-2 rounded-md ${
              isScrolled ? "text-white" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gold-200 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={mobileLinkClasses}
                  aria-label={`Go to ${link.name}`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("download")}
                className="w-full mt-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white px-3 py-2 rounded-md font-medium flex items-center justify-center gap-2"
                aria-label="Download the App"
              >
                <Download className="w-4 h-4" />
                Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
