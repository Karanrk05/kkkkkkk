'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const menuImages = [
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkv_vJJ4o4KwA_SLNP1k-4lptcO63Uff429YHOK0pXurD1qBUvxK8yf31TRVrga3fZ_pzkjFltp8Mi-O6HJhTRk4iE-l7SqfoJKcyXQ0dLC5P0z8GIyzE42RNbfdtcFCHKRUvQwtnIA5kc=w600-h840-k-no',
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlYKltspV80T4RkOMrbJuVgt3j4Ge_cpIksx0BWezaTfcuydr3LMZwpk-MRxfFPIoHJhq1EGGNqKV1Cp38QjSbmFt3DChyOh_kQgSZiyk_HdBm1r-gS5sBthC6F2kzY5dXIRwFzkD4LvFBO=w600-h840-k-no',
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn2m6FkvKFjT0vRK8bOuUZFOx5u8oO1VMG1ETcHex1gQgrIeh1PylvSUOFQNGOcRtgDBbscGs_8np1fCzhwtL89PSvMirEF3ebjLknCLi7roqZe9n9VzjE0zA7Mc8WDbgw6lcYJRrRIvK2o=w600-h840-k-no',
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWngO11p3toWAJ48TlOi_Iw590xCc5k01Oi6txXcrH9xIJ7giviWPuKPE3dLQaWm0HUY5UUD7W974zdU2z3D5Wof5qD2MJEgvuoujw52bugbLY7ycdvP7mn9bu1Sy9nZNSyZHcG285m2SNzU=w600-h840-k-no',
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkWikh4jveezfDy32ccoNNVh-LVwi6E54sefM4ROvqWpAeRMdkW3pfFrOZjFphAIC7FggqBa_GGeO_7Srbu5obutitSUFf9H32LaOHNZ2a8A2osyDus5ty6rss95ckVBy6ASfllNmAKKZ3c=w600-h840-k-no',
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk8lzOEGmg_bq2JAwHTn2isWLvn50CdWLolw909OS-HgMjrxdLGT8fkjRpxmt0Vda7e_LwRbtJMQZpwEvqFiim5X22YU2zjmTS5VTpQLdscVPSGC7kwgsPKojK1AbFpM3I6cvkN6oTKvx0M=w600-h840-k-no',
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWntjBFEqp2EjNPcozKCArO8IiEtwibemu8gtPQSffG4UkPp4U8PnlajDJHaYQErFRc2PDCRMoYZLqbinbjpJnKJCKVKjspKFrrS0y2LZdlcEhvQ5PnjkB4K_WgUnDPMVILizHmewhlb9uWU=w600-h840-k-no',
  'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkGGW350iLHFUnaSp1PCPsqn2bBhRwpx474uUvPSuY2T0ExmCQ_1n6b1DAaUPhLdrpTMcxfg5DhaUjOVWfW2aZlvREVulOxpyPqgapEhD3xA0ySsvpk8F0aelq_q3BFtHae9a-9WT40aTo=w600-h840-k-no',
];

const menuCategories = [
  { id: 'all', label: 'All' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'food', label: 'Food' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'specials', label: 'Specials' },
];

const menuItems = [
  { name: 'Signature Cappuccino', price: '₹220', category: 'coffee', desc: 'Rich espresso with velvety steamed milk' },
  { name: 'Glitter Cold Brew', price: '₹280', category: 'specials', desc: 'Our star cold brew with golden caramel notes' },
  { name: 'Hazelnut Latte', price: '₹250', category: 'coffee', desc: 'Smooth latte infused with roasted hazelnut' },
  { name: 'Classic Espresso', price: '₹180', category: 'coffee', desc: 'Bold double shot of pure coffee essence' },
  { name: 'Truffle Sandwich', price: '₹320', category: 'food', desc: 'Grilled sandwich with truffle aioli and fresh greens' },
  { name: 'Avocado Toast', price: '₹300', category: 'food', desc: 'Sourdough topped with smashed avocado and seeds' },
  { name: 'Mushroom Risotto', price: '₹350', category: 'food', desc: 'Creamy arborio rice with wild mushrooms' },
  { name: 'Tiramisu', price: '₹280', category: 'desserts', desc: 'Classic Italian dessert with espresso-soaked ladyfingers' },
  { name: 'Chocolate Lava Cake', price: '₹320', category: 'desserts', desc: 'Warm cake with molten chocolate center' },
  { name: 'Golden Frappe', price: '₹260', category: 'specials', desc: 'Our signature iced frappe with gold dust' },
  { name: 'Paneer Tikka Wrap', price: '₹240', category: 'food', desc: 'Spicy paneer tikka in a warm tortilla wrap' },
  { name: 'Blueberry Cheesecake', price: '₹300', category: 'desserts', desc: 'New York style cheesecake with blueberry compote' },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" ref={sectionRef} className="relative py-24 sm:py-32 bg-[#0d0906]/50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A97E]/[0.03] rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-cormorant)] text-[#C8A97E] text-sm tracking-[0.35em] uppercase mb-4">
              Taste the Magic
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8]">
              Our <span className="shimmer-text">Menu</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent mx-auto mt-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="mt-6 text-[#F5F0E8]/50 max-w-xl mx-auto">
              From handcrafted coffees to gourmet delights, every item on our menu is prepared with passion and the finest ingredients.
            </p>
          </ScrollReveal>
        </div>

        {/* Menu Photo Gallery - Horizontal Scroll */}
        <ScrollReveal delay={0.15}>
          <div className="mb-16 overflow-hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {menuImages.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setLightboxImg(img)}
                  className="relative flex-shrink-0 w-48 sm:w-56 md:w-64 h-64 sm:h-80 rounded-2xl overflow-hidden cursor-pointer group snap-center img-zoom"
                >
                  <img src={img} alt={`Menu page ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-[#C8A97E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {menuCategories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm tracking-wider uppercase font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#C8A97E] to-[#A08050] text-[#0a0a0a] shadow-[0_0_20px_rgba(200,169,126,0.2)]'
                    : 'border border-[#C8A97E]/20 text-[#F5F0E8]/60 hover:border-[#C8A97E]/50 hover:text-[#C8A97E]'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Items Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, borderColor: 'rgba(200,169,126,0.3)' }}
                className="group relative p-5 sm:p-6 rounded-2xl border border-[#C8A97E]/10 bg-[#C8A97E]/[0.02] hover:bg-[#C8A97E]/[0.06] transition-colors duration-300 cursor-default"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#F5F0E8] group-hover:text-[#C8A97E] transition-colors">
                    {item.name}
                  </h4>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[#C8A97E] whitespace-nowrap ml-3"
                  >
                    {item.price}
                  </motion.span>
                </div>
                <p className="text-sm text-[#F5F0E8]/40 leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/0 to-transparent group-hover:via-[#C8A97E]/30 transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Price Note */}
        <ScrollReveal delay={0.3}>
          <p className="text-center mt-10 text-[#F5F0E8]/30 text-sm">
            Prices are indicative and may vary · Reported by 32 people · ₹200–400 per person
          </p>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#C8A97E]/10 text-[#C8A97E] hover:bg-[#C8A97E]/20 transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={lightboxImg}
              alt="Menu"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
