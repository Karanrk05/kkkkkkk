'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'expand' | 'done'>('logo');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('expand'), 2200);
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
        >
          {/* Radial glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(200,169,126,0.15) 0%, transparent 70%)',
            }}
          />

          {/* Decorative rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: phase === 'expand' ? 8 : 1, opacity: phase === 'expand' ? 0 : 0.3 }}
            transition={{ duration: phase === 'expand' ? 1 : 1.5, ease: 'easeInOut' }}
            className="absolute w-40 h-40 rounded-full border border-[#C8A97E]/20"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: phase === 'expand' ? 10 : 1, opacity: phase === 'expand' ? 0 : 0.15 }}
            transition={{
              duration: phase === 'expand' ? 1 : 1.5,
              ease: 'easeInOut',
              delay: 0.15,
            }}
            className="absolute w-56 h-56 rounded-full border border-[#C8A97E]/15"
          />

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: phase === 'expand' ? 0 : 1,
              y: phase === 'expand' ? -20 : 0,
              scale: phase === 'expand' ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Coffee icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: 'spring', stiffness: 150 }}
              className="mb-5"
            >
              <Coffee className="w-10 h-10 text-[#C8A97E]" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.8em' }}
              animate={{ opacity: 1, letterSpacing: '0.25em' }}
              transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
              className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F0E8] tracking-[0.25em] uppercase"
            >
              The Glitters
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="font-[family-name:var(--font-cormorant)] text-[#C8A97E] text-lg sm:text-xl tracking-[0.4em] uppercase mt-1"
            >
              Cafe
            </motion.p>

            {/* Gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.3, duration: 0.8, ease: 'easeInOut' }}
              className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent mt-5"
            />

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="w-32 h-[1px] bg-[#C8A97E]/10 mt-8 overflow-hidden rounded-full"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: 'easeInOut',
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent"
              />
            </motion.div>
          </motion.div>

          {/* Corner accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'expand' ? 0 : 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-8 left-8 w-12 h-12 border-l border-t border-[#C8A97E]/20"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'expand' ? 0 : 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-8 right-8 w-12 h-12 border-r border-t border-[#C8A97E]/20"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'expand' ? 0 : 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-[#C8A97E]/20"
          />\n          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'expand' ? 0 : 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[#C8A97E]/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
