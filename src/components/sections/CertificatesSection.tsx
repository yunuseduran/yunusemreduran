'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { Language, useTranslation } from '@/lib/i18n'

interface CertificatesSectionProps {
  lang: Language
}

export default function CertificatesSection({ lang }: CertificatesSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const certificatesPerPage = 6;
  const t = useTranslation(lang);
  
  const baseCertificates = [
    {
      title: 'Advanced PowerBI',
      issuer: 'Udemy',
      date: '2023',
      description: 'İleri seviye Power BI ile dashboard oluşturma ve veri görselleştirme',
      skills: ['Power BI', 'Data Visualization', 'DAX', 'Power Query'],
      color: 'bg-blue-100 text-blue-600',
      verified: true,
      url: 'https://www.udemy.com/certificate/UC-c9cef10c-8616-41f2-b312-bd8ba89ed1f6/'
    },
    {
      title: 'Python for Data Science Bootcamp',
      issuer: 'Miuul',
      date: '2024',
      description: 'Python ile veri bilimi ve analizi eğitimi',
      skills: ['Python', 'Data Analysis', 'Machine Learning', 'Pandas'],
      color: 'bg-green-100 text-green-600',
      verified: true,
      url: 'https://learning.miuul.com/certificates/zpzdnt4puy'
    },
    {
      title: 'Applied Kaggle Training',
      issuer: 'BTK',
      date: '2024',
      description: 'Kaggle platformunda veri analizi ve yarışmalara katılım',
      skills: ['Kaggle', 'Data Science', 'Competition', 'Python'],
      color: 'bg-emerald-100 text-emerald-600',
      verified: true,
      url: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=JoNfrvXv6A'
    },
    {
      title: 'Advanced Python for Machine Learning (AI) Workshop',
      issuer: 'BTK',
      date: '2024',
      description: 'Python ile makine öğrenmesi ve yapay zeka uygulamaları',
      skills: ['Python', 'Machine Learning', 'AI', 'Deep Learning'],
      color: 'bg-purple-100 text-purple-600',
      verified: true,
      url: 'https://drive.google.com/file/d/1kSSS5SpYE2nYUr83hGuKOidW3MW1OTXS/view?usp=sharing'
    },
    {
      title: 'Web Programming with React',
      issuer: 'BTK',
      date: '2022',
      description: 'React.js ile modern web uygulaması geliştirme',
      skills: ['React', 'JavaScript', 'Frontend', 'Component'],
      color: 'bg-orange-100 text-orange-600',
      verified: true,
      url: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=lK1h77qZjM'
    },

    {
      title: 'Excel ile Veri Analizi',
      issuer: 'Kodlasam',
      date: '2024',
      description: 'Excel ile veri görselleştirme, analizler, veri analizi, data analysis',
      skills: ['Veri Görselleştirme', 'Analizler', 'Veri Analizi', 'Data Analysis', 'İstatistiksel Veri Analizi', 'Microsoft Excel'],
      color: 'bg-green-100 text-green-600',
      verified: true,
      url: 'https://drive.google.com/file/d/1NRBg2t5dZmkyVzlCCR2dcK0WglKzRGSk/view?usp=sharing'
    },
    {
      title: 'Web Development with HTML',
      issuer: 'BTK',
      date: '2022',
      description: 'HTML ile web sayfası oluşturma ve yapılandırma',
      skills: ['HTML', 'CSS', 'Web Development', 'Frontend'],
      color: 'bg-red-100 text-red-600',
      verified: true,
      url: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=mKEhvlYX08'
    },
    {
      title: 'WordPress',
      issuer: 'Udemy',
      date: '2022',
      description: 'WordPress ile profesyonel web sitesi geliştirme',
      skills: ['WordPress', 'CMS', 'Web Design', 'PHP'],
      color: 'bg-indigo-100 text-indigo-600',
      verified: true,
      url: 'https://www.udemy.com/certificate/UC-d58a9c9d-3b88-4272-9c2d-9b0bb3cda0f3/'
    },
    {
      title: 'Introduction to Information Technology',
      issuer: 'BTK',
      date: '2021',
      description: 'Bilgi teknolojileri temellerini öğrenme',
      skills: ['IT Fundamentals', 'Computer Science', 'Technology'],
      color: 'bg-gray-100 text-gray-600',
      verified: true,
      url: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=rKjhGZ42nW'
    },
    {
      title: 'Ekip Kurma ve Yönetme',
      issuer: 'BTK Akademi',
      date: '2024',
      description: 'Girişimcilik, proje yönetimi ve ekip liderliği',
      skills: ['Girişimcilik', 'Proje Yönetimi', 'Ekip Liderliği', 'Yönetim'],
      color: 'bg-emerald-100 text-emerald-600',
      verified: true,
      url: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=pKmhKdeJW6'
    },
    {
      title: 'Kişiselleştirilmiş GPT\'ler',
      issuer: 'BTK Akademi',
      date: '2024',
      description: 'Özel GPT modelleri, Python ve OpenAI API kullanımı',
      skills: ['Özel GPT', 'Python', 'OpenAI API', 'AI Development'],
      color: 'bg-purple-100 text-purple-600',
      verified: true,
      url: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=7rptZpnwN6'
    },
    {
      title: 'LangChain for LLM Application Development',
      issuer: 'DeepLearning.AI',
      date: '2024',
      description: 'LangChain ile büyük dil modeli uygulama geliştirme',
      skills: ['LangChain', 'LLM', 'AI Applications', 'Python'],
      color: 'bg-red-100 text-red-600',
      verified: true,
      url: 'https://learn.deeplearning.ai/accomplishments/aa019d36-1a18-4489-ac1e-0c1f5e6505b7?usp=sharing'
    },
    {
      title: 'Python for Beginners: Basics of AI Python Coding',
      issuer: 'DeepLearning.AI',
      date: '2024',
      description: 'Python ile yapay zeka programlama temelleri',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'AI Coding'],
      color: 'bg-orange-100 text-orange-600',
      verified: true,
      url: 'https://learn.deeplearning.ai/accomplishments/515105c8-aa97-4a32-b602-62117baa1f1d?usp=sharing'
    },
    {
      title: 'Python for Machine Learning',
      issuer: 'AI Business School',
      date: '2024',
      description: 'Python ile makine öğrenmesi, numpy, pandas ve veri analizi',
      skills: ['Python', 'Numpy', 'Pandas', 'Data Analysis', 'Veri Analizi'],
      color: 'bg-blue-100 text-blue-600',
      verified: true,
      url: 'https://courses.10million.ai/saas-certificate/1275EDA27-1274F97E7-35F1C74/'
    },
    {
      title: 'Python\'u Öğrenme',
      issuer: 'LinkedIn',
      date: '2024',
      description: 'Makine öğrenimi, Python ve data analysis temelleri',
      skills: ['Makine Öğrenimi', 'Python', 'Data Analysis'],
      color: 'bg-linkedin-100 text-linkedin-600',
      verified: true,
      url: 'https://www.linkedin.com/learning/certificates/ddce65569d2ab37e44abb36604bfe5d37065e763b40d493d36c2f7ec191b845a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSuUETBVLSSKVZPdWr9545w%3D%3D'
    },
    {
      title: 'Uygulamalı Giriş: Python',
      issuer: 'LinkedIn',
      date: '2024',
      description: 'Python programlama dilinde temel ve uygulamalı eğitim',
      skills: ['Makine Öğrenimi', 'Python'],
      color: 'bg-linkedin-100 text-linkedin-600',
      verified: true,
      url: 'https://www.linkedin.com/learning/certificates/4aff2b94b7a65ef4631e6de2e7a761750d1067455b6423e0d172bb35a36ac1f0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSuUETBVLSSKVZPdWr9545w%3D%3D'
    },
    {
      title: 'Veri Bilimini Öğrenmek: Verilerle Hikayeler Anlatın',
      issuer: 'LinkedIn',
      date: '2024',
      description: 'Veri hikâyeleştirme, analizler ve data analysis teknikleri',
      skills: ['Veri Hikâyeleştirme', 'Analizler', 'Data Analysis'],
      color: 'bg-linkedin-100 text-linkedin-600',
      verified: true,
      url: 'https://www.linkedin.com/learning/certificates/253a33c1bcbe4f3e4ae72cf2baf787526d56358442cd48fdd6f46a7d5e57fd1c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSuUETBVLSSKVZPdWr9545w%3D%3D'
    },
        {
      title: 'Veri Görselleştirme İpuçları ve Püf Noktaları',
      issuer: 'LinkedIn',
      date: '2024',
      description: 'Veri görselleştirme teknikleri ve analiz yöntemleri',
      skills: ['Veri Görselleştirme', 'Analizler', 'Data Analysis'],
      color: 'bg-linkedin-100 text-linkedin-600',
      verified: true,
      url: 'https://www.linkedin.com/learning/certificates/79fce924627f18116050f0c216734c441cbde052c7489f72bcd5c7203fb830b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSuUETBVLSSKVZPdWr9545w%3D%3D'
    },
    {
      title: 'Google Ads Arama Ağı Sertifikası',
      issuer: 'Skillshop',
      date: '2023',
      description: 'Google Ads ile arama ağı kampanyaları yönetimi',
      skills: ['Google Ads', 'Digital Marketing', 'SEM', 'Campaign Management'],
      color: 'bg-blue-100 text-blue-600',
      verified: true,
      url: 'https://skillshop.credential.net/47a6886c-d516-49b4-ba01-5b8b4b432a6e'
    }
  ];

  // Combine base certificates with i18n translations
  const certificates = baseCertificates.map((cert, index) => ({
    ...cert,
    title: t.certificates.data[index]?.title || cert.title,
    description: t.certificates.data[index]?.description || cert.description,
    skills: t.certificates.data[index]?.skills || cert.skills
  }));

  // Pagination logic
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);
  const indexOfLastCertificate = currentPage * certificatesPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
  const currentCertificates = certificates.slice(indexOfFirstCertificate, indexOfLastCertificate);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const goToPrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const uniquePlatforms = [...new Set(certificates.map(cert => cert.issuer))];
  
  const stats = [
    { number: certificates.length.toString(), label: t.certificates.stats.certificates, icon: Award },
    { number: uniquePlatforms.length.toString(), label: t.certificates.stats.platforms, icon: Building },
    { number: '2024', label: t.certificates.stats.latest, icon: Calendar }
  ];

  return (
    <div className="w-full container-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient">{t.certificates.title}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-secondary-600 mt-6 max-w-2xl mx-auto">
            {t.certificates.description}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-secondary-800 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-secondary-600">{stat.label}</p>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentCertificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-secondary-100 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cert.color}`}>
                  <Award className="w-6 h-6" />
                </div>
                {cert.verified && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-700 font-medium">{t.certificates.verified}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-secondary-800 mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <Building className="w-4 h-4 text-secondary-500" />
                <span className="text-secondary-600 font-medium">{cert.issuer}</span>
                <Calendar className="w-4 h-4 text-secondary-500 ml-2" />
                <span className="text-secondary-600">{cert.date}</span>
              </div>

              <p className="text-secondary-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              {cert.url ? (
                <a 
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-600 transition-colors text-sm font-medium"
                >
                  <span>{t.certificates.actions.view}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button className="flex items-center gap-2 text-secondary-400 text-sm font-medium cursor-not-allowed">
                  <span>{t.certificates.actions.coming}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 mb-16"
          >
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === 1
                  ? 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
                  : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary border border-secondary-200 hover:border-primary-200'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:block">{t.certificates.pagination.previous}</span>
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                    pageNumber === currentPage
                      ? 'bg-primary text-white shadow-lg scale-110'
                      : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary border border-secondary-200 hover:border-primary-200'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPage === totalPages
                  ? 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
                  : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary border border-secondary-200 hover:border-primary-200'
              }`}
            >
              <span className="hidden sm:block">{t.certificates.pagination.next}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Pagination Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary-500 text-sm">
            {indexOfFirstCertificate + 1} - {Math.min(indexOfLastCertificate, certificates.length)} {t.certificates.pagination.showing} {certificates.length} {t.certificates.pagination.total}
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 via-white to-accent-50 rounded-2xl p-8 border border-primary-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              {t.certificates.cta.title}
            </h3>
            <p className="text-secondary-600 leading-relaxed mb-6">
              {t.certificates.cta.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              {t.certificates.cta.button}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 