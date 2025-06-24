'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, TrendingUp, Palette, Globe, BarChart3, X } from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';
import { useState } from 'react';

interface ServicesInterface {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  detailedDescription: string;
  process: string[];
  deliverables: string[];
}

interface ServicesSectionProps {
  lang: Language;
}

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const t = useTranslation(lang);
  const [selectedService, setSelectedService] = useState<ServicesInterface | null>(null);

  const services: ServicesInterface[] = [
    {
      icon: Code,
      title: lang === 'tr' ? 'Web Geliştirme' : 'Web Development',
      description: lang === 'tr' ? 'Modern ve responsive web siteleri geliştiriyorum' : 'I develop modern and responsive websites',
      features: lang === 'tr' 
        ? ['React & Next.js', 'TypeScript', 'Responsive Tasarım', 'SEO Optimizasyonu']
        : ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimization'],
      detailedDescription: lang === 'tr' 
        ? 'Modern web teknolojilerini kullanarak kullanıcı dostu, hızlı ve SEO uyumlu web siteleri geliştiriyorum. React, Next.js ve TypeScript gibi güncel teknolojilerle performans odaklı çözümler sunuyorum.'
        : 'I develop user-friendly, fast and SEO-compliant websites using modern web technologies. I offer performance-focused solutions with current technologies such as React, Next.js and TypeScript.',
      process: lang === 'tr' 
        ? ['Proje Analizi ve Planlama', 'UI/UX Tasarım Onayı', 'Frontend Geliştirme', 'Backend Entegrasyonu', 'Test ve Optimizasyon', 'Canlıya Alma']
        : ['Project Analysis and Planning', 'UI/UX Design Approval', 'Frontend Development', 'Backend Integration', 'Testing and Optimization', 'Go Live'],
      deliverables: lang === 'tr'
        ? ['Responsive Web Sitesi', 'Admin Paneli', 'SEO Optimizasyonu', 'Performans Raporu', 'Kaynak Kodları', '3 Ay Teknik Destek']
        : ['Responsive Website', 'Admin Panel', 'SEO Optimization', 'Performance Report', 'Source Code', '3 Months Technical Support']
    },
    {
      icon: Database,
      title: lang === 'tr' ? 'Veri Analizi' : 'Data Analysis',
      description: lang === 'tr' ? 'Verilerinizi anlamlı içgörülere dönüştürüyorum' : 'I transform your data into meaningful insights',
      features: lang === 'tr'
        ? ['Python & SQL', 'Makine Öğrenmesi', 'İstatistiksel Analiz', 'Veri Görselleştirme']
        : ['Python & SQL', 'Machine Learning', 'Statistical Analysis', 'Data Visualization'],
      detailedDescription: lang === 'tr'
        ? 'Ham verilerinizi temizleyip analiz ederek iş kararlarınıza yön verecek içgörüler çıkarıyorum. Python, SQL ve makine öğrenmesi teknikleriyle verilerinizden maksimum değer elde etmenizi sağlıyorum.'
        : 'I clean and analyze your raw data to extract insights that will guide your business decisions. I help you get maximum value from your data with Python, SQL and machine learning techniques.',
      process: lang === 'tr'
        ? ['Veri Toplama ve Temizleme', 'Keşifsel Veri Analizi', 'Model Geliştirme', 'Sonuçların Doğrulanması', 'Görselleştirme', 'Rapor Hazırlama']
        : ['Data Collection and Cleaning', 'Exploratory Data Analysis', 'Model Development', 'Results Validation', 'Visualization', 'Report Preparation'],
      deliverables: lang === 'tr'
        ? ['Veri Analizi Raporu', 'İnteraktif Dashboard', 'Makine Öğrenmesi Modeli', 'Python Kodları', 'Veri Temizleme Scripts', 'Öneriler Dokümanı']
        : ['Data Analysis Report', 'Interactive Dashboard', 'Machine Learning Model', 'Python Code', 'Data Cleaning Scripts', 'Recommendations Document']
    },
    {
      icon: TrendingUp,
      title: lang === 'tr' ? 'İş Zekası' : 'Business Intelligence',
      description: lang === 'tr' ? 'Power BI ile interaktif dashboard\'lar oluşturuyorum' : 'I create interactive dashboards with Power BI',
      features: lang === 'tr'
        ? ['Power BI', 'Excel Otomasyonu', 'KPI Takibi', 'İş Zekası']
        : ['Power BI', 'Excel Automation', 'KPI Tracking', 'Business Intelligence'],
      detailedDescription: lang === 'tr'
        ? 'İşletmenizin performansını izlemek ve analiz etmek için Power BI ile interaktif dashboard\'lar ve KPI takip sistemleri geliştiriyorum. Veriye dayalı karar verme süreçlerinizi destekliyorum.'
        : 'I develop interactive dashboards and KPI tracking systems with Power BI to monitor and analyze your business performance. I support your data-driven decision-making processes.',
      process: lang === 'tr'
        ? ['İş Gereksinimlerini Belirleme', 'Veri Kaynağı Entegrasyonu', 'Dashboard Tasarımı', 'KPI Tanımlama', 'Otomatizasyon Kurulumu', 'Kullanıcı Eğitimi']
        : ['Define Business Requirements', 'Data Source Integration', 'Dashboard Design', 'KPI Definition', 'Automation Setup', 'User Training'],
      deliverables: lang === 'tr'
        ? ['Power BI Dashboard', 'KPI Takip Sistemi', 'Otomatik Raporlar', 'Veri Modeli', 'Kullanıcı Rehberi', 'Eğitim Materyalleri']
        : ['Power BI Dashboard', 'KPI Tracking System', 'Automated Reports', 'Data Model', 'User Guide', 'Training Materials']
    },
    {
      icon: Palette,
      title: lang === 'tr' ? 'UI/UX Tasarım' : 'UI/UX Design',
      description: lang === 'tr' ? 'Kullanıcı dostu arayüzler tasarlıyorum' : 'I design user-friendly interfaces',
      features: lang === 'tr'
        ? ['Kullanıcı Deneyimi', 'Arayüz Tasarımı', 'Prototipleme', 'Kullanıcı Araştırması']
        : ['User Experience', 'Interface Design', 'Prototyping', 'User Research'],
      detailedDescription: lang === 'tr'
        ? 'Kullanıcı ihtiyaçlarını anlayarak, etkili ve kullanıcı dostu arayüzler tasarlıyorum. Wireframe\'den prototipleştirmeye, kullanıcı testlerinden final tasarıma kadar tüm süreçleri yönetiyorum.'
        : 'By understanding user needs, I design effective and user-friendly interfaces. I manage the entire process from wireframe to prototyping, user testing to final design.',
      process: lang === 'tr'
        ? ['Kullanıcı Araştırması', 'Wireframe Oluşturma', 'UI Tasarım', 'Prototip Geliştirme', 'Kullanıcı Testleri', 'Final Tasarım']
        : ['User Research', 'Wireframe Creation', 'UI Design', 'Prototype Development', 'User Testing', 'Final Design'],
      deliverables: lang === 'tr'
        ? ['Wireframe Dosyaları', 'UI Tasarım Dosyaları', 'İnteraktif Prototip', 'Tasarım Sistemi', 'İkon Seti', 'Stil Rehberi']
        : ['Wireframe Files', 'UI Design Files', 'Interactive Prototype', 'Design System', 'Icon Set', 'Style Guide']
    },
    {
      icon: Globe,
      title: lang === 'tr' ? 'E-Ticaret' : 'E-Commerce',
      description: lang === 'tr' ? 'Online satış platformları geliştiriyorum' : 'I develop online sales platforms',
      features: lang === 'tr'
        ? ['WordPress', 'WooCommerce', 'Ödeme Entegrasyonu', 'Ürün Yönetimi']
        : ['WordPress', 'WooCommerce', 'Payment Integration', 'Product Management'],
      detailedDescription: lang === 'tr'
        ? 'WordPress ve WooCommerce kullanarak güvenli, ölçeklenebilir e-ticaret siteleri geliştiriyorum. Ödeme sistemleri entegrasyonu, ürün yönetimi ve SEO optimizasyonu ile satışlarınızı artırmanıza yardımcı oluyorum.'
        : 'I develop secure, scalable e-commerce sites using WordPress and WooCommerce. I help you increase your sales with payment system integration, product management and SEO optimization.',
      process: lang === 'tr'
        ? ['İhtiyaç Analizi', 'Platform Kurulumu', 'Tema Özelleştirme', 'Ödeme Entegrasyonu', 'Ürün Yükleme', 'Test ve Optimizasyon']
        : ['Needs Analysis', 'Platform Setup', 'Theme Customization', 'Payment Integration', 'Product Upload', 'Testing and Optimization'],
      deliverables: lang === 'tr'
        ? ['E-Ticaret Sitesi', 'Admin Paneli', 'Ödeme Sistemi', 'Ürün Kataloğu', 'Sipariş Yönetimi', 'SEO Ayarları']
        : ['E-Commerce Site', 'Admin Panel', 'Payment System', 'Product Catalog', 'Order Management', 'SEO Settings']
    },
    {
      icon: BarChart3,
      title: lang === 'tr' ? 'Danışmanlık' : 'Consulting',
      description: lang === 'tr' ? 'Teknik konularda danışmanlık hizmeti veriyorum' : 'I provide technical consulting services',
      features: lang === 'tr'
        ? ['Teknoloji Danışmanlığı', 'Veri Stratejisi', 'KOSGEB Proje Yazımı', 'Süreç Optimizasyonu']
        : ['Technology Consulting', 'Data Strategy', 'KOSGEB Project Writing', 'Process Optimization'],
      detailedDescription: lang === 'tr'
        ? 'İşletmenizin teknoloji altyapısını güçlendirmek, veri stratejinizi geliştirmek ve KOSGEB projelerinizi hayata geçirmek için kapsamlı danışmanlık hizmeti veriyorum. Solutily startup\'ı için KOSGEB Teknoloji Transferi Destekleme Programı\'ndan başarıyla destek aldım ve bu deneyimimi sizinle paylaşıyorum.'
        : 'I provide comprehensive consulting services to strengthen your business technology infrastructure, develop your data strategy and implement your KOSGEB projects. I successfully secured KOSGEB Technology Transfer Support Program funding for Solutily startup and share this experience with you.',
      process: lang === 'tr'
        ? ['Mevcut Durum Analizi', 'Strateji Geliştirme', 'Proje Planlama', 'Uygulama Desteği', 'İzleme ve Değerlendirme', 'Sürekli İyileştirme']
        : ['Current Situation Analysis', 'Strategy Development', 'Project Planning', 'Implementation Support', 'Monitoring and Evaluation', 'Continuous Improvement'],
      deliverables: lang === 'tr'
        ? ['Teknoloji Stratejisi', 'KOSGEB Proje Dosyası', 'Süreç Optimizasyon Raporu', 'Uygulama Planı', 'İzleme Dashboard\'u', 'Mentorluk Desteği']
        : ['Technology Strategy', 'KOSGEB Project File', 'Process Optimization Report', 'Implementation Plan', 'Monitoring Dashboard', 'Mentoring Support']
    }
  ];

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <div className="px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-heading">
              {t.services.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {lang === 'tr' 
                ? 'Web geliştirme ve veri analizi alanlarında sunduğum profesyonel hizmetler'
                : 'Professional services I offer in web development and data analysis'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary/20"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.div
                    className="mt-6 pt-4 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="text-primary font-medium text-sm hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-heading">
                {lang === 'tr' ? 'Projenizi Hayata Geçirelim' : 'Let\'s Bring Your Project to Life'}
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                {lang === 'tr'
                  ? 'Web sitenizi veya veri analitiği projenizi profesyonel olarak gerçekleştirmek için benimle iletişime geçin.'
                  : 'Contact me to professionally implement your website or data analytics project.'
                }
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 hover:scale-105 transform"
              >
                {lang === 'tr' ? 'İletişime Geç' : 'Get In Touch'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 font-heading">
                    {selectedService.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-8">
                {/* Detailed Description */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {lang === 'tr' ? 'Hizmet Detayları' : 'Service Details'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedService.detailedDescription}
                  </p>
                </div>

                {/* Process */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {lang === 'tr' ? 'Çalışma Süreci' : 'Work Process'}
                  </h3>
                  <div className="grid gap-4">
                    {selectedService.process.map((step, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {lang === 'tr' ? 'Teslim Edilecekler' : 'Deliverables'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedService.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6 border-t border-gray-200 text-center">
                  <button
                    onClick={() => {
                      closeModal();
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    {lang === 'tr' ? 'Bu Hizmet İçin İletişime Geç' : 'Contact for This Service'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 