'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/cafe/Navbar';
import HeroSection from '@/components/cafe/HeroSection';
import AboutSection from '@/components/cafe/AboutSection';
import MenuSection from '@/components/cafe/MenuSection';
import ReviewsSection from '@/components/cafe/ReviewsSection';
import ContactSection from '@/components/cafe/ContactSection';
import Footer from '@/components/cafe/Footer';
import ShimmerDivider from '@/components/cafe/ShimmerDivider';

const GlitterParticles = dynamic(
  () => import('@/components/cafe/GlitterParticles'),
  { ssr: false }
);

const SplashScreen = dynamic(
  () => import('@/components/cafe/SplashScreen'),
  { ssr: false }
);

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <div className="grain-overlay relative min-h-screen flex flex-col bg-[#0a0a0a]">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <GlitterParticles />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <ShimmerDivider />
        <AboutSection />
        <ShimmerDivider />
        <MenuSection />
        <ShimmerDivider />
        <ReviewsSection />
        <ShimmerDivider />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
