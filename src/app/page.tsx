'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import ContactSection from '@/components/sections/ContactSection';
import { Language, defaultLanguage } from '@/lib/i18n'

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>(defaultLanguage)
  
  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar with Hamburger Menu */}
      <Sidebar 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang} 
      />
      
      {/* Main Content */}
      <main className="flex-1 md:ml-80 lg:ml-72 xl:ml-80">
        {/* Hero Section - Full viewport height with mobile padding */}
        <section className="min-h-screen flex items-center justify-center pt-16 md:pt-0">
          <HeroSection lang={currentLang} />
        </section>

        {/* Content Sections */}
        <div className="w-full">
          <section id="about" className="py-20 bg-gray-50">
            <AboutSection lang={currentLang} />
          </section>

          <section id="experience" className="py-20 bg-white">
            <ExperienceSection lang={currentLang} />
          </section>

          <section id="education" className="py-20 bg-gray-50">
            <EducationSection lang={currentLang} />
          </section>

          <section id="services" className="py-20 bg-white">
            <ServicesSection lang={currentLang} />
          </section>

          <section id="projects" className="py-20 bg-gray-50">
            <ProjectsSection lang={currentLang} />
          </section>

          <section id="skills" className="py-20 bg-white">
            <SkillsSection lang={currentLang} />
          </section>

          <section id="certificates" className="py-20 bg-white">
            <CertificatesSection lang={currentLang} />
          </section>

          <section id="contact" className="py-20 bg-gray-50">
            <ContactSection lang={currentLang} />
          </section>
        </div>
      </main>
    </div>
  );
}
