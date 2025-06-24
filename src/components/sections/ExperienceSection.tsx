'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

import { Language, useTranslation } from '@/lib/i18n';

interface ExperienceSectionProps {
  lang: Language;
}

export default function ExperienceSection({ lang }: ExperienceSectionProps) {
  const t = useTranslation(lang);

  const experiences = [
    {
      title: lang === 'tr' ? 'Ortak Kurucu' : 'Co-Founder',
      company: 'Solutily',
      location: lang === 'tr' ? 'Antalya (Uzaktan)' : 'Antalya (Remote)',
      period: lang === 'tr' ? 'Nisan 2024 - Halen' : 'April 2024 - Present',
      description: lang === 'tr' ? [
        'Teknoloji startupı Solutily\'nin ortak kurucusu olarak ürün geliştirme süreçlerini yönetiyor',
        'KOSGEB Teknoloji Transferi Destekleme Programı için başarılı proje yazımı gerçekleştirdi ve destek kazandı',
        'Veri analizi ve web geliştirme projelerinde teknik liderlik yapıyor',
        'İş geliştirme stratejileri ve teknoloji kararlarında aktif rol alıyor',
        'Startup ekosisteminde networking, müşteri ilişkileri ve iş ortaklığı geliştiriyor'
      ] : [
        'Managing product development processes as co-founder of technology startup Solutily',
        'Successfully wrote and secured KOSGEB Technology Transfer Support Program funding',
        'Providing technical leadership in data analysis and web development projects',
        'Taking active role in business development strategies and technology decisions',
        'Developing networking, customer relations and business partnerships in startup ecosystem'
      ]
    },
    {
      title: lang === 'tr' ? 'Veri Analisti' : 'Data Analyst',
      company: 'Etra Sağlık Hizmetleri Ltd. Şti.',
      location: lang === 'tr' ? 'İstanbul (Uzaktan)' : 'Istanbul (Remote)',
      period: lang === 'tr' ? 'Kasım 2024 - Halen' : 'November 2024 - Present',
      description: lang === 'tr' ? [
        'Sağlık sektöründe veri analizi ve Power BI dashboard geliştirme',
        'Hasta verileri ve sağlık hizmetleri performans metriklerini analiz ediyor',
        'Power BI ile interaktif raporlar ve görselleştirmeler oluşturuyor',
        'Sağlık hizmetleri kalitesini artırmak için veri odaklı öneriler sunuyor',
        'Departmanlar arası veri paylaşımı ve raporlama süreçlerini optimize ediyor'
      ] : [
        'Data analysis and Power BI dashboard development in healthcare sector',
        'Analyzing patient data and healthcare services performance metrics',
        'Creating interactive reports and visualizations with Power BI',
        'Providing data-driven recommendations to improve healthcare service quality',
        'Optimizing interdepartmental data sharing and reporting processes'
      ]
    },
    {
      title: lang === 'tr' ? 'Veri Analisti' : 'Data Analyst',
      company: 'Asylove Rek. San. Tic. Ith. Ihr. Ltd. Co.',
      location: lang === 'tr' ? 'Antalya' : 'Antalya',
      period: lang === 'tr' ? 'Şubat 2022 - Nisan 2024' : 'February 2022 - April 2024',
      description: lang === 'tr' ? [
        'Amazon, Etsy ve eBay gibi pazar yerlerinden satış verilerini topladı ve analiz etti',
        'Satış trendlerini, müşteri davranışlarını ve performans metriklerini değerlendirmek için Power BI kullanarak görselleştirilmiş raporlar ve gösterge panoları oluşturdu',
        'Rakiplerin fiyatlandırma, ürün çeşitliliği ve satış stratejilerinin kapsamlı analizlerini gerçekleştirdi',
        'Power BI ile entegre bir rakip analiz programı geliştirdi',
        'Veri toplama ve analiz süreçlerini optimize ederek verimliliği artırdı'
      ] : [
        'Collected and analyzed sales data from marketplaces like Amazon, Etsy and eBay',
        'Created visualized reports and dashboards using Power BI to evaluate sales trends, customer behaviors and performance metrics',
        'Performed comprehensive analyses of competitors\' pricing, product variety and sales strategies',
        'Developed an integrated competitor analysis program with Power BI',
        'Optimized data collection and analysis processes to increase efficiency'
      ]
    },
    {
      title: lang === 'tr' ? 'Web Geliştirici' : 'Web Developer',
      company: 'Asylove Rek. San. Tic. İth. İhr. Ltd. Şti',
      location: lang === 'tr' ? 'Antalya' : 'Antalya',
      period: lang === 'tr' ? 'Eylül 2021 - Ocak 2022' : 'September 2021 - January 2022',
      description: lang === 'tr' ? [
        'Amazon, Etsy ve eBay üzerinden satış yapan e-ticaret şirketi Asylove.com\'da web geliştirici olarak çalıştı',
        'Şirketin e-ticaret tabanlı web sitesi asylove.com\'un geliştirilmesi ve optimizasyonundan sorumlu',
        'Wix platformunu kullanarak siteyi oluşturdu ve optimize etti',
        'Sitenin tasarımını ve işlevselliğini geliştirerek kullanıcı deneyimini iyileştirdi',
        'Daha verimli ve kullanıcı dostu çevrimiçi alışveriş deneyimine katkıda bulundu'
      ] : [
        'Worked as web developer at e-commerce company Asylove.com selling through Amazon, Etsy and eBay',
        'Responsible for development and optimization of company\'s e-commerce website asylove.com',
        'Created and optimized the site using Wix platform',
        'Improved user experience by enhancing site design and functionality',
        'Contributed to more efficient and user-friendly online shopping experience'
      ]
    }
  ];

  return (
    <div className="w-full container-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient">{t.experience.title}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-secondary-100"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-secondary-800 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-secondary-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-secondary-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 