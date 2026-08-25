'use client';

import { motion } from 'framer-motion';
import { Coffee, Heart, ArrowUp, MapPin, Phone, Clock } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#C8A97E]/10">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-[#C8A97E]/10 via-[#C8A97E]/5 to-[#C8A97E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl md:text-3xl text-[#F5F0E8]/80 italic mb-6"
          >
            Ready for a shimmering coffee experience?
          </motion.p>
          <motion.a
            href="tel:09579540603"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(200,169,126,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#C8A97E] to-[#A08050] text-[#0a0a0a] font-semibold text-sm tracking-wider uppercase rounded-full"
          >
            <Phone className="w-4 h-4" /> Reserve a Table
          </motion.a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-5 h-5 text-[#C8A97E]" />
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#F5F0E8]">The Glitters</p>
                <p className="font-[family-name:var(--font-cormorant)] text-[10px] text-[#C8A97E] tracking-[0.25em] uppercase -mt-0.5">Cafe</p>
              </div>
            </div>
            <p className="text-sm text-[#F5F0E8]/40 leading-relaxed max-w-xs">
              A premium coffee destination in Pune where every sip shimmers and every moment glitters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#C8A97E] tracking-wider uppercase mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[#F5F0E8]/40 hover:text-[#C8A97E] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-[#C8A97E] tracking-wider uppercase mb-4">Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[#F5F0E8]/40">
                <MapPin className="w-4 h-4 text-[#C8A97E]/50 mt-0.5 flex-shrink-0" />
                <span>Mohammed Wadi, Pune 411060</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#F5F0E8]/40">
                <Phone className="w-4 h-4 text-[#C8A97E]/50 flex-shrink-0" />
                <a href="tel:09579540603" className="hover:text-[#C8A97E] transition-colors">095795 40603</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#F5F0E8]/40">
                <Clock className="w-4 h-4 text-[#C8A97E]/50 flex-shrink-0" />
                <span>Open · Closes 11:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Price Info */}
          <div>
            <h4 className="text-sm font-semibold text-[#C8A97E] tracking-wider uppercase mb-4">Services</h4>
            <div className="space-y-2.5">
              {['Dine-in', 'Takeaway', 'Delivery'].map((s) => (
                <p key={s} className="text-sm text-[#F5F0E8]/40 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]/40" />
                  {s}
                </p>
              ))}
              <div className="mt-4 p-3 rounded-xl bg-[#C8A97E]/[0.05] border border-[#C8A97E]/10">
                <p className="text-xs text-[#C8A97E]/50 mb-1">Average Cost</p>
                <p className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#C8A97E]">₹200–400</p>
                <p className="text-xs text-[#F5F0E8]/30">for two people (approx.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C8A97E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F5F0E8]/25 flex items-center gap-1">
            © 2025 The Glitters Cafe. Crafted with <Heart className="w-3 h-3 text-[#C8A97E]/50" /> in Pune
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, borderColor: 'rgba(200,169,126,0.4)' }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-full border border-[#C8A97E]/20 text-[#C8A97E]/50 hover:text-[#C8A97E] transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
