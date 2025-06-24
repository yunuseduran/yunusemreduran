'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

import { Language, useTranslation } from '@/lib/i18n';

interface HeroSectionProps {
  lang: Language;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = useTranslation(lang);
  
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full container-padding">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex justify-center">
            <Image
              src="/images/yunusemrelogo.png"
              alt="Yunus Emre Duran Logo"
              width={400}
              height={200}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xl text-primary font-medium">
            {t.hero.title}
          </p>
        </motion.div>

        {/* Introduction Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg md:text-xl text-secondary-600 leading-relaxed text-balance">
            {t.hero.description}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            {t.hero.contact}
          </button>
          <button
            onClick={() => window.open('/N-YunusEmreDuran-Cv-TR (1).pdf', '_blank')}
            className="btn-secondary text-lg px-8 py-4"
          >
            {t.hero.downloadCV}
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center"
        >
          <p className="text-secondary-500 text-sm mb-4">
            {lang === 'tr' ? 'Aşağı kaydır' : 'Scroll down'}
          </p>
          <button
            onClick={scrollToNext}
            className="animate-bounce p-2 rounded-full hover:bg-secondary-100 transition-colors focus-ring"
            aria-label={lang === 'tr' ? 'Aşağı kaydır' : 'Scroll down'}
          >
            <ChevronDown className="w-6 h-6 text-secondary-600" />
          </button>
        </motion.div>
      </div>
    </div>
  );
} 