// src/app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroScene from '@/components/3d/HeroScene';
import Navbar from '@/components/ui/Navbar';
import About from '@/components/sections/About';
import PremiumButton from '@/components/ui/Button';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Schaltet das Intro nach exakt 3 Sekunden ab
    const timer = setTimeout(() => setIntroFinished(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-[#f7f5f2]">
      {/* 3D WebGL Layer: Bleibt im Hintergrund fixiert */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
        <HeroScene />
      </div>

      <AnimatePresence mode="wait">
        {!introFinished ? (
          /* 1. CINEASTISCHES INTRO (3 SEKUNDEN) */
          <motion.div 
            key="intro"
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b]"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="font-serif text-3xl md:text-5xl tracking-[0.2em] text-[#F7E7CE] uppercase"
            >
              Harmonie
            </motion.h1>
          </motion.div>
        ) : (
          /* 2. DIE EIGENTLICHE WEBSEITE */
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full"
          >
            <Navbar />
            
            {/* HERO SECTION */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 pt-20">
              <span className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6 font-sans">
                Wilsdruff
              </span>
              <h1 className="font-serif text-5xl md:text-8xl max-w-5xl leading-[1.1] mb-8 text-gold-gradient tracking-tight">
                Schönheit beginnt mit dem perfekten Schnitt.
              </h1>
              <p className="font-sans text-base md:text-lg text-gray-600 max-w-xl mb-12 font-light tracking-wide">
                Seit über 20 Jahren Ihr Premium-Salon für exklusive Haarkunst und familiäres Ambiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <PremiumButton variant="primary">Termin vereinbaren</PremiumButton>
                <PremiumButton variant="secondary">Leistungen</PremiumButton>
              </div>
            </section>

            {/* ÜBER UNS SECTION */}
            <About />

            {/* Hier kannst du später weitere Sektionen wie <Services />, <Gallery /> etc. dranhängen */}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}