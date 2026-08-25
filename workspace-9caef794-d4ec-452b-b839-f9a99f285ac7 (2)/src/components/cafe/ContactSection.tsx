'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Send, Instagram, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Near RAHEJA VISTAS PHASE-3, Autadwadi Handewadi, Mohammed Wadi, Pune, Maharashtra 411060', link: 'https://maps.google.com/?q=The+Glitters+Cafe+Pune' },
  { icon: Phone, label: 'Phone', value: '095795 40603', link: 'tel:09579540603' },
  { icon: Clock, label: 'Hours', value: 'Open Daily · Closes 11:30 PM' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0d0906]/50">
      {/* Background */
      }
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C8A97E]/[0.03] rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */
      }
        <div className="text-center mb-16 sm:mb-20">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-cormorant)] text-[#C8A97E] text-sm tracking-[0.35em] uppercase mb-4">
              Find Us
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8]">
              Visit <span className="shimmer-text">Us</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent mx-auto mt-6" />
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */
      }
          <div>
            <ScrollReveal direction="left">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#F5F0E8] mb-8">
                Get in Touch
              </h3>
            </ScrollReveal>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <ScrollReveal key={item.label} direction="left" delay={0.1 + i * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex gap-4 p-4 rounded-xl border border-[#C8A97E]/10 bg-[#C8A97E]/[0.02] hover:border-[#C8A97E]/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#C8A97E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A97E]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#C8A97E]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#C8A97E]/60 tracking-wider uppercase mb-1">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm sm:text-base text-[#F5F0E8]/80 hover:text-[#C8A97E] transition-colors leading-relaxed"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-[#F5F0E8]/80 leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Services */
      }
            <ScrollReveal direction="left" delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Dine-in', 'Takeaway', 'Delivery'].map((service) => (
                  <motion.span
                    key={service}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(200,169,126,0.4)' }}
                    className="px-4 py-2 rounded-full border border-[#C8A97E]/20 text-[#C8A97E] text-sm tracking-wider"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Buttons */
      }
            <ScrollReveal direction="left" delay={0.5}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="tel:09579540603"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(200,169,126,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C8A97E] to-[#A08050] text-[#0a0a0a] font-semibold text-sm tracking-wider uppercase rounded-full"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </motion.a>
                <motion.a
                  href="https://maps.google.com/?q=The+Glitters+Cafe+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-[#C8A97E]/40 text-[#C8A97E] font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-[#C8A97E]/10 transition-colors"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </motion.a>
              </div>
            </ScrollReveal>

            {/* Social Links */
      }
            <ScrollReveal direction="left" delay={0.6}>
              <div className="mt-10 flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-11 h-11 rounded-full border border-[#C8A97E]/20 flex items-center justify-center text-[#C8A97E]/60 hover:text-[#C8A97E] hover:border-[#C8A97E]/40 transition-all"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-11 h-11 rounded-full border border-[#C8A97E]/20 flex items-center justify-center text-[#C8A97E]/60 hover:text-[#C8A97E] hover:border-[#C8A97E]/40 transition-all"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-11 h-11 rounded-full border border-[#C8A97E]/20 flex items-center justify-center text-[#C8A97E]/60 hover:text-[#C8A97E] hover:border-[#C8A97E]/40 transition-all"
                >
                  <Send className="w-4.5 h-4.5" />
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* Map / Visual Side */
      }
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C8A97E]/10 to-[#A08050]/10 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-[#C8A97E]/10 h-full min-h-[400px] sm:min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8!2d73.9120781!3d18.4718007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb823bf9b485%3A0x296880efcdaa7acc!2sThe%20Glitters%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Glitters Cafe Location"
                  className="absolute inset-0"
                />
                {/* Overlay gradient */
      }
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0906] via-transparent to-transparent pointer-events-none" />
                {/* Map pin overlay */
      }
                <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8A97E] to-[#A08050] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#0a0a0a]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#F5F0E8]">The Glitters Cafe</p>
                      <p className="text-xs text-[#F5F0E8]/50">Mohammed Wadi, Pune 411060</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
