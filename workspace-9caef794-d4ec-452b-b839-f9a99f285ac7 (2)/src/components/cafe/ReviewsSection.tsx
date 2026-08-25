'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const reviews = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Absolutely loved the ambiance! The golden theme with warm lighting creates such a cozy vibe. Their cappuccino is the best I have had in Pune. Highly recommended for a relaxed evening.',
    date: '2 months ago',
    avatar: 'PS',
  },
  {
    name: 'Rahul Deshmukh',
    rating: 5,
    text: 'This place is a hidden gem in Mohammed Wadi. The Glitter Cold Brew is unique and refreshing. Staff is courteous and the presentation of dishes is Instagram-worthy!',
    date: '1 month ago',
    avatar: 'RD',
  },
  {
    name: 'Ananya Joshi',
    rating: 4,
    text: 'Great place for a coffee date! The truffle sandwich and tiramisu were divine. Only wish they had more outdoor seating. Otherwise a perfect cafe experience.',
    date: '3 weeks ago',
    avatar: 'AJ',
  },
  {
    name: 'Vikram Patil',
    rating: 5,
    text: 'The glittering decor truly lives up to its name. Every corner is picture-perfect. Loved the Hazelnut Latte and the mushroom risotto. Will definitely be coming back!',
    date: '1 week ago',
    avatar: 'VP',
  },
  {
    name: 'Sneha Kulkarni',
    rating: 4,
    text: 'A wonderful cafe with excellent coffee and warm hospitality. The Chocolate Lava Cake is to die for. Prices are very reasonable for the quality you get.',
    date: '5 days ago',
    avatar: 'SK',
  },
  {
    name: 'Amit Mehta',
    rating: 5,
    text: 'One of the best cafes in Handewadi area. The Golden Frappe is their signature and it shows. Beautiful interiors, great music, and the food is consistently amazing.',
    date: '2 days ago',
    avatar: 'AM',
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, current]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="reviews" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8A97E]/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C8A97E]/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-cormorant)] text-[#C8A97E] text-sm tracking-[0.35em] uppercase mb-4">
              Testimonials
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8]">
              What Our <span className="shimmer-text">Guests</span> Say
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent mx-auto mt-6" />
          </ScrollReveal>
        </div>

        {/* Featured Review Carousel */}
        <div className="relative max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="relative min-h-[280px] sm:min-h-[240px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute w-full"
              >
                <div className="text-center px-4 sm:px-8">
                  <Quote className="w-10 h-10 text-[#C8A97E]/20 mx-auto mb-6" />
                  <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl md:text-3xl text-[#F5F0E8]/80 leading-relaxed italic mb-8">
                    &ldquo;{reviews[current].text}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A97E] to-[#A08050] flex items-center justify-center text-[#0a0a0a] font-bold text-sm">
                      {reviews[current].avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-[#F5F0E8]">{reviews[current].name}</p>
                      <div className="flex items-center gap-1.5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < reviews[current].rating
                                  ? 'text-[#C8A97E] fill-[#C8A97E]'
                                  : 'text-[#C8A97E]/20'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-[#F5F0E8]/30">{reviews[current].date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => { prev(); setIsAutoPlaying(false); }}
              className="p-2.5 rounded-full border border-[#C8A97E]/20 text-[#C8A97E]/60 hover:text-[#C8A97E] hover:border-[#C8A97E]/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setDirection(i > current ? 1 : -1); setIsAutoPlaying(false); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-[#C8A97E]' : 'w-2 bg-[#C8A97E]/20 hover:bg-[#C8A97E]/40'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => { next(); setIsAutoPlaying(false); }}
              className="p-2.5 rounded-full border border-[#C8A97E]/20 text-[#C8A97E]/60 hover:text-[#C8A97E] hover:border-[#C8A97E]/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(200,169,126,0.25)' }}
                className="p-5 sm:p-6 rounded-2xl border border-[#C8A97E]/10 bg-[#C8A97E]/[0.02] hover:bg-[#C8A97E]/[0.05] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8A97E] to-[#A08050] flex items-center justify-center text-[#0a0a0a] font-bold text-xs">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#F5F0E8]">{review.name}</p>
                    <p className="text-xs text-[#F5F0E8]/30">{review.date}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3 h-3 ${
                          j < review.rating ? 'text-[#C8A97E] fill-[#C8A97E]' : 'text-[#C8A97E]/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#F5F0E8]/50 leading-relaxed">{review.text}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
