'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

import { Language, useTranslation } from '@/lib/i18n'

interface EducationSectionProps {
  lang: Language
}

export default function EducationSection({ lang }: EducationSectionProps) {
  const t = useTranslation(lang);
  const education = [
    {
      degree: lang === 'tr' ? 'Yüksek Lisans' : 'Master\'s Degree',
      program: lang === 'tr' ? 'Veri Analitiği ve Yönetimi' : 'Data Analytics and Management',
      school: lang === 'tr' ? 'Akdeniz Üniversitesi' : 'Akdeniz University',
      location: lang === 'tr' ? 'Antalya, Türkiye' : 'Antalya, Turkey',
      period: lang === 'tr' ? '2024 - Devam ediyor' : '2024 - Present',
      status: 'GPA: 4.00/4.00',
      icon: GraduationCap
    },
    {
      degree: lang === 'tr' ? 'Lisans' : 'Bachelor\'s Degree',
      program: lang === 'tr' ? 'Elektrik ve Elektronik Mühendisliği' : 'Electrical and Electronics Engineering',
      school: lang === 'tr' ? 'Akdeniz Üniversitesi' : 'Akdeniz University',
      location: lang === 'tr' ? 'Antalya, Türkiye' : 'Antalya, Turkey',
      period: '2017 - 2022',
      status: lang === 'tr' ? 'Mezun - GPA: 2.64/4.00' : 'Graduated - GPA: 2.64/4.00',
      icon: GraduationCap
    },
    {
      degree: lang === 'tr' ? 'İngilizce Hazırlık' : 'English Preparatory',
      program: lang === 'tr' ? 'İngilizce Hazırlık Programı' : 'English Preparatory Program',
      school: lang === 'tr' ? 'Akdeniz Üniversitesi' : 'Akdeniz University',
      location: lang === 'tr' ? 'Antalya, Türkiye' : 'Antalya, Turkey',
      period: '2017 - 2018',
      status: lang === 'tr' ? 'Tamamlandı (65 puan)' : 'Completed (65 points)',
      icon: Award
    }
  ];

  const certifications = lang === 'tr' ? [
    'Power BI Developer Sertifikası',
    'Kaggle ile Veri Analizi',
    'İleri Excel Sertifikası',
    'SQL Veritabanı Yönetimi',
    'İleri Python ile Makine Öğrenmesi',
    'Web Geliştirme (HTML, CSS, JavaScript)',
    'Python Programlama Sertifikası'
  ] : [
    'Power BI Developer Certificate',
    'Data Analysis with Kaggle',
    'Advanced Excel Certificate',
    'SQL Database Management',
    'Machine Learning with Advanced Python',
    'Web Development (HTML, CSS, JavaScript)',
    'Python Programming Certificate'
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
            <span className="text-gradient">{t.education.title}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-secondary-800 mb-8">
              {lang === 'tr' ? 'Eğitim Geçmişi' : 'Educational Background'}
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      {index !== education.length - 1 && (
                        <div className="w-px h-16 bg-secondary-200 ml-6 mt-4"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 pb-8">
                      <div className="bg-white rounded-xl p-6 shadow-sm card-hover border border-secondary-100">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-bold text-secondary-800">
                            {edu.degree}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status.includes('Present') || edu.status.includes('Devam ediyor')
                              ? 'bg-primary-100 text-primary-700' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <p className="text-primary font-semibold mb-2">{edu.program}</p>
                        <p className="text-secondary-600 mb-2">{edu.school}</p>
                        
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-secondary-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-secondary-800 mb-8">
              {lang === 'tr' ? 'Sertifikalar ve Eğitimler' : 'Certificates and Training'}
            </h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm card-hover border border-secondary-100"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-secondary-700 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border border-primary-100"
            >
              <h4 className="text-lg font-semibold text-secondary-800 mb-3">
                {lang === 'tr' ? 'Sürekli Öğrenme' : 'Continuous Learning'}
              </h4>
              <p className="text-secondary-600">
                {lang === 'tr' 
                  ? 'Teknoloji hızla gelişen bir alan olduğu için kendimi sürekli güncel tutmaya ve yeni teknolojileri öğrenmeye odaklanıyorum. Online kurslar, bootcamp\'ler ve projelerle bilgimi sürekli artırıyorum.'
                  : 'Since technology is a rapidly developing field, I focus on keeping myself constantly updated and learning new technologies. I continuously increase my knowledge through online courses, bootcamps and projects.'
                }
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 