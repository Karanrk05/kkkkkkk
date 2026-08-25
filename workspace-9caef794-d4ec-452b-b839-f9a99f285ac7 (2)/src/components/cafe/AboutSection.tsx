'client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Coffee, UtensilsCrossed, Truck, Star, Users, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CAFE_IMG = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwqYP3ogafwFdDSZBhR-n0Dj4OnYfio1T_RYAlaingUdzZIQ8SJ-j7f-JKJ5OuQyxKV7aw0jcYjRn-Xiggfw-tnd8NTpMvKaVZonlZx3twOc3xmKKewC_4MpCa8IBgelti2T_H39gpUtj3=w800-h600-k-no';

const features = [
  { icon: Coffee, label: 'Artisan Coffee', desc: 'Handcrafted brews from the finest beans' },
  { icon: UtensilsCrossed, label: 'Dine-In', desc: 'Elegant ambiance for every occasion' },
  { icon: Truck, label: 'Delivery', desc: 'Swift delivery to your doorstep' },
  { icon: Star, label: '4.5 Rating', desc: 'Loved by 62+ happy customers' },
];

const stats = [
  { icon: Users, value: '62+', label: 'Happy Reviews' },
  { icon: Clock, value: '11:30 PM', label: 'Open Till' },
  { icon: Coffee, value: '₹200-400', label: 'Per Person' },
  { icon: Star, value: '4.5', label: 'Star Rating' },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8A97E]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A97E]/3 rounded-full blur-[120px]" />

      {/* Marquee Banner */}
      <div className="absolute top-0 left-0 right-0 py-5 bg-[#C8A97E]/5 border-y border-[#C8A97E]/10 overflow-hidden">
        <motion.div className="flex whitespace-nowrap" style={{ x: marqueeX }}>
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-8 mr-8">
              {['COFFEE', 'CAFÉ', 'ARTISAN', 'PREMIUM', 'SHIMMER', 'DELIGHT', 'EXPERIENCE', 'GLITTERS'].map((word, i) => (
                <span
                  key={`${setIdx}-${i}`}
                  className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl text-[#C8A97E]/20 tracking-[0.2em] uppercase"
                >
                  {word}
                  <span className="ml-8 text-[#C8A97E]/10">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 mt-8">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-cormorant)] text-[#C8A97E] text-sm tracking-[0.35em] uppercase mb-4">
              Our Story
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8]">
              A Shimmering
              <span className="shimmer-text"> Oasis</span> of Flavor
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent mx-auto mt-6" />
          </ScrollReveal>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C8A97E]/20 to-[#A08050]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-2xl img-zoom">
                <img
                  src={CAFE_IMG}
                  alt="The Glitters Cafe Interior"
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-[#0a0a0a] border border-[#C8A97E]/30 rounded-2xl p-4 sm:p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A97E] to-[#A08050] flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#0a0a0a] fill-[#0a0a0a]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#F5F0E8]">4.5</p>
                    <p className="text-xs text-[#C8A97E]/70">62 Reviews</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div>
            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-[#C8A97E]/70 text-sm tracking-[0.2em] uppercase mb-4">Welcome to</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#F5F0E8] mb-6 leading-snug">
                Where Coffee Meets Elegance in the Heart of Pune
              </h3>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-[#F5F0E8]/60 leading-relaxed mb-6">
                Nestled near Raheja Vistas Phase-3 in the vibrant neighbourhood of Mohammed Wadi,
                The Glitters Cafe is more than just a coffee shop — it&apos;s an experience. With a
                curated menu featuring artisan beverages, gourmet bites, and indulgent desserts,
                every visit is a celebration of flavour and finesse.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.25}>
              <p className="text-[#F5F0E8]/60 leading-relaxed mb-8">
                Our warm, inviting space is designed for both quiet contemplation and lively
                gatherings. Whether you&apos;re catching up with friends over a cappuccino or
                savouring a solo date with our signature cold brew, The Glitters Cafe promises
                a shimmering escape from the everyday.
              </p>
            </ScrollReveal>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((feat, i) => (
                <ScrollReveal key={feat.label} direction="right" delay={0.3 + i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4, borderColor: 'rgba(200,169,126,0.3)' }}
                    className="p-4 rounded-xl border border-[#C8A97E]/10 bg-[#C8A97E]/[0.03] transition-colors group"
                  >
                    <feat.icon className="w-5 h-5 text-[#C8A97E] mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-semibold text-[#F5F0E8] mb-1">{feat.label}</p>
                    <p className="text-xs text-[#F5F0E8]/40">{feat.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl border border-[#C8A97E]/10 bg-[#C8A97E]/[0.02]"
              >
                <stat.icon className="w-5 h-5 text-[#C8A97E] mx-auto mb-3" />
                <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#F5F0E8]">
                  {stat.value}
                </p>
                <p className="text-xs text-[#C8A97E]/60 mt-1 tracking-wider uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
