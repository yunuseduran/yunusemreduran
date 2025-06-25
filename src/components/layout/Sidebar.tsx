'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award, 
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  FolderOpen,
  Settings,
  BarChart3,
  Menu,
  X
} from 'lucide-react';
import { Language, useTranslation, toTurkishUpperCase } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/suskun354', icon: Github },
  { name: 'Kaggle', href: 'https://www.kaggle.com/yunusemreduran', icon: BarChart3 },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/iamyunusemreduran', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/yunuseduran', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/yunuseduran', icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com/yunuseduran05', icon: Facebook },
];

interface SidebarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Sidebar({ currentLang, onLanguageChange }: SidebarProps) {
  const t = useTranslation(currentLang);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  
  const navigationItems: NavItem[] = [
    { label: currentLang === 'tr' ? toTurkishUpperCase(t.nav.about) : t.nav.about.toUpperCase(), href: '#about', icon: User },
    { label: currentLang === 'tr' ? toTurkishUpperCase(t.nav.experience) : t.nav.experience.toUpperCase(), href: '#experience', icon: Briefcase },
    { label: currentLang === 'tr' ? toTurkishUpperCase(t.nav.education) : t.nav.education.toUpperCase(), href: '#education', icon: GraduationCap },
    { label: currentLang === 'tr' ? toTurkishUpperCase(t.nav.services) : t.nav.services.toUpperCase(), href: '#services', icon: Settings },
    { label: currentLang === 'tr' ? toTurkishUpperCase(t.nav.projects) : t.nav.projects.toUpperCase(), href: '#projects', icon: FolderOpen },
    { label: currentLang === 'tr' ? toTurkishUpperCase(t.nav.skills) : t.nav.skills.toUpperCase(), href: '#skills', icon: Code },
    { label: currentLang === 'tr' ? toTurkishUpperCase(t.nav.certificates) : t.nav.certificates.toUpperCase(), href: '#certificates', icon: Award },
    { label: currentLang === 'tr' ? toTurkishUpperCase(t.nav.contact) : t.nav.contact.toUpperCase(), href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setActiveSection(href.replace('#', ''));
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-xl shadow-lg flex items-center justify-center text-white transition-all duration-200"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 z-50 sidebar-gradient shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full text-white">
              {/* Mobile Profile Section */}
              <div className="p-6 text-center border-b border-white/20 mt-16">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative w-20 h-20 mx-auto mb-4"
                >
                  <div className="w-full h-full rounded-full border-3 border-white/30 overflow-hidden shadow-xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Yunus Emre Duran"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml;base64,${Buffer.from(`
                          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                            <rect width="80" height="80" fill="#1e40af"/>
                            <circle cx="40" cy="32" r="13" fill="white"/>
                            <path d="M40 51 C28 51 18 61 18 73 L62 73 C62 61 52 51 40 51 Z" fill="white"/>
                          </svg>
                        `).toString('base64')}`;
                      }}
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-lg font-bold font-heading mb-2">
                    YUNUS EMRE DURAN
                  </h1>
                  <p className="text-white/80 text-sm font-medium mb-3">
                    Web Developer | Data Analyst
                  </p>
                  
                  {/* Mobile CV Download Button */}
                  <motion.a
                    href="/N-YunusEmreDuran-Cv-TR (1).pdf"
                    download="Yunus_Emre_Duran_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {currentLang === 'tr' ? toTurkishUpperCase(t.sidebar.downloadCV) : t.sidebar.downloadCV.toUpperCase()}
                  </motion.a>
                </motion.div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 py-4 overflow-y-auto">
                <ul className="space-y-1 px-4">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.replace('#', '');
                    
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className={`
                            w-full flex items-center gap-3 px-4 py-3 rounded-lg
                            text-left font-medium transition-all duration-200
                            hover:bg-white/10 focus-ring group
                            ${isActive ? 'bg-white/20 shadow-lg border-l-4 border-white' : ''}
                          `}
                        >
                          <Icon 
                            className={`
                              w-5 h-5 transition-all duration-200 flex-shrink-0
                              ${isActive ? 'text-white scale-110' : 'text-white/70 group-hover:text-white'}
                            `}
                          />
                          <span className={`
                            text-sm tracking-wide
                            ${isActive ? 'text-white font-semibold' : 'text-white/80 group-hover:text-white'}
                          `}>
                            {item.label}
                          </span>
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile Language Switcher */}
              <div className="px-6 py-4 border-t border-white/20">
                <LanguageSwitcher 
                  currentLang={currentLang} 
                  onLanguageChange={onLanguageChange} 
                />
              </div>

                            {/* Mobile Social Links */}
              <div className="p-6 border-t border-white/20">
                <div className="flex justify-center gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + 0.1 * index }}
                        className="
                          w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
                          flex items-center justify-center
                          hover:bg-white/20 hover:scale-110
                          transition-all duration-200 focus-ring
                          group
                        "
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar - Hidden on mobile/tablet */}
      <aside className="fixed top-0 left-0 h-full w-80 lg:w-72 xl:w-80 z-30 sidebar-gradient shadow-2xl hidden md:block">
        <div className="flex flex-col h-full text-white">
          {/* Desktop Profile Section */}
          <div className="p-4 lg:p-6 text-center border-b border-white/20">
            {/* Profile Photo */}
            <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-3 lg:mb-4"
          >
            <div className="w-full h-full rounded-full border-3 border-white/30 overflow-hidden shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Yunus Emre Duran"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image not found
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${Buffer.from(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112">
                      <rect width="112" height="112" fill="#1e40af"/>
                      <circle cx="56" cy="45" r="18" fill="white"/>
                      <path d="M56 72 C39 72 26 85 26 102 L86 102 C86 85 73 72 56 72 Z" fill="white"/>
                    </svg>
                  `).toString('base64')}`;
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-lg lg:text-xl font-bold font-heading mb-2">
              YUNUS EMRE DURAN
            </h1>
            <p className="text-white/80 text-xs font-medium mb-2 lg:mb-3">
              Web Developer | Data Analyst
            </p>
            
            {/* CV Download Button */}
            <motion.a
              href="/N-YunusEmreDuran-Cv-TR (1).pdf"
              download="Yunus_Emre_Duran_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {currentLang === 'tr' ? toTurkishUpperCase(t.sidebar.downloadCV) : t.sidebar.downloadCV.toUpperCase()}
            </motion.a>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 lg:py-6 overflow-y-auto">
          <ul className="space-y-1 px-3 lg:px-4">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace('#', '');
              
              return (
                <motion.li
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`
                      w-full flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg
                      text-left font-medium transition-all duration-200
                      hover:bg-white/10 focus-ring group text-sm
                      ${isActive ? 'bg-white/20 shadow-lg border-l-4 border-white' : ''}
                    `}
                  >
                    <Icon 
                      className={`
                        w-4 h-4 transition-all duration-200 flex-shrink-0
                        ${isActive ? 'text-white scale-110' : 'text-white/70 group-hover:text-white'}
                      `}
                    />
                    <span className={`
                      text-xs tracking-wide leading-tight
                      ${isActive ? 'text-white font-semibold' : 'text-white/80 group-hover:text-white'}
                    `}>
                      {item.label}
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Language Switcher */}
        <div className="px-4 lg:px-6 py-3 lg:py-4 border-t border-white/20">
          <LanguageSwitcher 
            currentLang={currentLang} 
            onLanguageChange={onLanguageChange} 
          />
        </div>

        {/* Social Links */}
        <div className="p-4 lg:p-6 border-t border-white/20">
          <div className="flex justify-center gap-2 lg:gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + 0.1 * index }}
                  className="
                    w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/10 backdrop-blur-sm
                    flex items-center justify-center
                    hover:bg-white/20 hover:scale-110
                    transition-all duration-200 focus-ring
                    group
                  "
                  aria-label={social.name}
                >
                  <Icon className="w-3 h-3 lg:w-4 lg:h-4 text-white/70 group-hover:text-white transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
    </>
  );
} 