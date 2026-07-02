// src/components/sections/About.tsx
'use client';
import { motion } from 'framer-motion';

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center py-24 px-6 relative z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Linke Seite: Große Typografie */}
        <div className="lg:col-span-7 space-y-8">
          <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="text-xs uppercase tracking-[0.3em] text-accent-rosegold font-sans font-semibold block"
          >
            Unsere Philosophie
          </motion.span>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="font-serif text-4xl md:text-6xl text-gold-gradient leading-tight"
          >
            Wo Tradition auf <br />moderne Ästhetik trifft.
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="font-sans text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl"
          >
            Seit über 20 Jahren zelebrieren wir im Herzen von Wilsdruff die Kunst des perfekten Haarschnitts. Bei Friseur Harmonie verbinden wir eine familiäre, herzliche Atmosphäre mit der Präzision und dem Gespür internationaler High-End-Stylings. Jeder Besuch ist eine maßgeschneiderte Auszeit, exklusiv auf Ihre Persönlichkeit abgestimmt.
          </motion.p>
        </div>

        {/* Rechte Seite: Organisches Glassmorphism-Bildelement */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 h-[450px] md:w-96 md:h-[550px] glass-card rounded-[40px] p-4 flex flex-col justify-between overflow-hidden shadow-2xl relative group"
          >
            {/* Platzhalter für das Premium-Portraitfoto */}
            <div className="w-full h-[85%] bg-accent-sand/20 rounded-[28px] overflow-hidden relative transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* <Image src="/team-portrait.jpg" fill className="object-cover" alt="Friseur Harmonie Team" /> */}
              <div className="absolute inset-0 flex items-center justify-center text-accent-sand font-serif italic text-sm">
                [ High-End Portrait ]
              </div>
            </div>
            
            <div className="pt-2 pb-1 px-2 flex justify-between items-center">
              <div>
                <p className="font-serif text-lg">20+ Jahre</p>
                <p className="text-xs text-gray-500 font-sans">Meisterhafte Erfahrung</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-accent-rosegold animate-pulse" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}