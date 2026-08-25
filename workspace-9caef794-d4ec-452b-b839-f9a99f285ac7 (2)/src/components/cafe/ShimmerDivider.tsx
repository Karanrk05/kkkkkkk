'use client';

import { motion } from 'framer-motion';

export default function ShimmerDivider() {
  return (
    <div className="relative py-1 flex items-center justify-center">
      <div className="w-full gold-line" />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute w-2 h-2 rounded-full bg-[#C8A97E]"
      />
    </div>
  );
}
