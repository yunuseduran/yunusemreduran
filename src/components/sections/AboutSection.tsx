'use client';

import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Calendar } from 'lucide-react';

import { Language, useTranslation } from '@/lib/i18n'

interface AboutSectionProps {
  lang: Language
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = useTranslation(lang);

  const personalInfo = [
    { icon: User, label: t.about.items[0].label, value: t.about.items[0].value },
    { icon: Calendar, label: t.about.items[1].label, value: t.about.items[1].value },
    { icon: MapPin, label: t.about.items[2].label, value: t.about.items[2].value },
    { icon: GraduationCap, label: lang === 'tr' ? 'Üniversite' : 'University', value: lang === 'tr' ? 'Akdeniz Üniversitesi' : 'Akdeniz University' },
  ];

  return (
    <div className="w-full container-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient">{t.about.title}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-secondary-800 mb-8">
              {lang === 'tr' ? 'Kişisel Bilgiler' : 'Personal Information'}
            </h3>
            <div className="grid gap-4">
              {personalInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow card-hover"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500 font-medium">{item.label}</p>
                      <p className="text-lg text-secondary-800 font-semibold">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-secondary-800 mb-8">
              {lang === 'tr' ? 'Benim Hikayem' : 'My Story'}
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-600 leading-relaxed mb-6">
                {t.about.description}
              </p>
              
              <p className="text-secondary-600 leading-relaxed mb-6">
                {lang === 'tr' 
                  ? 'PowerBI, SQL ve Python\'daki üç yılı aşkın uzmanlığımla, veri görselleştirme, raporlama ve satış raporlarını sürdürme konularında mükemmelim. Girişimci ruhum beni yeni fırsatlar aramaya ve herhangi bir ekibe etkili bir şekilde katkıda bulunmaya itiyor.'
                  : 'With over three years of expertise in PowerBI, SQL, and Python, I excel in data visualization, reporting, and maintaining sales reports. My entrepreneurial spirit drives me to seek new opportunities and contribute effectively to any team.'
                }
              </p>
              
              <p className="text-secondary-600 leading-relaxed">
                {lang === 'tr'
                  ? 'Kendimi değer üretmeye ve veri analizi alanındaki bilgilerimi sürekli genişletmeye adadım. Hedefim, teknoloji ve veri bilimi alanlarında edindiğim bilgileri gerçek dünya problemlerine uygulamak ve anlamlı dijital deneyimler yaratmaktır.'
                  : 'I am dedicated to creating value and continuously expanding my knowledge in data analysis. My goal is to apply the knowledge I have gained in technology and data science to real-world problems and create meaningful digital experiences.'
                }
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button
                onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                {lang === 'tr' ? 'Yeteneklerimi Keşfet' : 'Explore My Skills'}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 