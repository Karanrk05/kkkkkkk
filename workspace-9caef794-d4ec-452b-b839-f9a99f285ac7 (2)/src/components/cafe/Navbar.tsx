'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee, Phone, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'about', 'menu', 'reviews', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-[#0d0906]/90 backdrop-blur-md border-b border-[#C8A97E]/10 text-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-[#C8A97E]/80">
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" /> Open · Closes 11:30 pm
            </span>
            <span className="w-1 h-1 rounded-full bg-[#C8A97E]/40" />
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> Mohammed Wadi, Pune
            </span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
            <Phone className="w-3 h-3" />
            <a href="tel:09579540603" className="hover:text-[#E8D5B5] transition-colors">
              095795 40603
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-[33px] left-0 right-0 z-[55] transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/85 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-[#C8A97E]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Coffee className="w-6 h-6 text-[#C8A97E] group-hover:rotate-12 transition-transform duration-300" />
              <div className="flex flex-col leading-tight">
                <span className="font-[family-name:var(--font-playfair)] text-base sm:text-lg font-bold text-[#F5F0E8] tracking-wide">
                  The Glitters
                </span>
                <span className="font-[family-name:var(--font-cormorant)] text-[10px] sm:text-xs text-[#C8A97E] tracking-[0.25em] uppercase">
                  Cafe
                </span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#C8A97E]'
                      : 'text-[#F5F0E8]/60 hover:text-[#F5F0E8]'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
              <motion.a
                href="tel:09579540603"
                className="ml-4 px-5 py-2.5 text-sm font-medium tracking-wider uppercase border border-[#C8A97E]/40 text-[#C8A97E] rounded-full hover:bg-[#C8A97E] hover:text-[#0a0a0a] transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(200,169,126,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve
              </motion.a>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              className="md:hidden p-2 text-[#C8A97E]"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-12 right-6 text-[#C8A97E]"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-7 h-7" />
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(link.href)}
                className={`font-[family-name:var(--font-playfair)] text-2xl tracking-wider transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#C8A97E]'
                    : 'text-[#F5F0E8]/70 hover:text-[#C8A97E]'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="tel:09579540603"
              className="mt-4 px-8 py-3 border border-[#C8A97E] text-[#C8A97E] rounded-full font-medium tracking-wider uppercase hover:bg-[#C8A97E] hover:text-[#0a0a0a] transition-all duration-300"
            >
              Reserve a Table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
