'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Star, MapPin } from 'lucide-react';

const CAFE_IMG = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwqYP3ogafwFdDSZBhR-n0Dj4OnYfio1T_RYAlaingUdzZIQ8SJ-j7f-JKJ5OuQyxKV7aw0jcYjRn-Xiggfw-tnd8NTpMvKaVZonlZx3twOc3xmKKewC_4MpCa8IBgelti2T_H39gpUtj3=w1920-h1280-k-no';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.4, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 1.2 + i * 0.04,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const title = 'The Glitters Cafe';

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imgY, scale: imgScale }}
      >
        <img
          src={CAFE_IMG}
          alt="The Glitters Cafe Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-[#0a0a0a]"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/50" />

      {/* Decorative Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/40 to-transparent"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: 'easeInOut' }}
        className="absolute top-[67%] left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/40 to-transparent"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
      >
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.35em' }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-[family-name:var(--font-cormorant)] text-[#727063] text-xs sm:text-sm tracking-[0.35em] uppercase mb-4 sm:mb-6 drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]"
        >
          Premium Coffee Experience
        </motion.p>

        {/* Main Title - Letter by Letter */}
        <div className="flex flex-wrap justify-center perspective-[1000px]">
          {title.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="font-[family-name:var(--font-playfair)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#8B7225] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
              style={letter === ' ' ? { width: '0.3em' } : {}}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl md:text-2xl text-[#4c4b43] mt-4 sm:mt-6 italic drop-shadow-[0_1px_6px_rgba(255,255,255,0.25)]"
        >
          Where Every Sip Shimmers
        </motion.p>

        {/* Rating & Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.6, type: 'spring' }}
          className="flex items-center gap-4 sm:gap-6 mt-8 sm:mt-10"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                    i < 4 ? 'text-[#4c4b43] fill-[#4c4b43]' : 'text-[#4c4b43]/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-[#2b2b28] text-sm font-medium drop-shadow-[0_1px_4px_rgba(255,255,255,0.25)]">4.5</span>
          </div>
          <div className="w-[1px] h-4 bg-[#C8A97E]/30" />
          <div className="flex items-center gap-1.5 text-[#2b2b28]/80 text-sm drop-shadow-[0_1px_4px_rgba(255,255,255,0.2)]">
            <MapPin className="w-3.5 h-3.5 text-[#4c4b43]" />
            <span>Pune, Maharashtra</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12"
        >
          <motion.a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-gradient-to-r from-[#C8A97E] to-[#A08050] text-[#0a0a0a] font-semibold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_30px_rgba(200,169,126,0.4)] transition-all duration-300 text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Menu
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 border border-[#C8A97E]/40 text-[#C8A97E] font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-[#C8A97E]/10 transition-all duration-300 text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Us
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#C8A97E]/50 text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#C8A97E]/50" />
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-28 left-6 sm:left-12 w-16 sm:w-24 h-16 sm:h-24 border-l border-t border-[#C8A97E]/20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-28 right-6 sm:right-12 w-16 sm:w-24 h-16 sm:h-24 border-r border-t border-[#C8A97E]/20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-16 left-6 sm:left-12 w-16 sm:w-24 h-16 sm:h-24 border-l border-b border-[#C8A97E]/20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-16 right-6 sm:right-12 w-16 sm:w-24 h-16 sm:h-24 border-r border-b border-[#C8A97E]/20"
      />
    </section>
  );
}
