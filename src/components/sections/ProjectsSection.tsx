'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Code2, 
  BarChart3, 
  Brain, 
  Globe, 
  ShoppingCart,
  Building2,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';
import { Language, useTranslation } from '@/lib/i18n';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  projects: Project[];
}

interface ProjectsSectionProps {
  lang: Language;
}

export default function ProjectsSection({ lang }: ProjectsSectionProps) {
  const t = useTranslation(lang);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectCategories: ProjectCategory[] = [
    {
      id: 'corporate',
      title: lang === 'tr' ? 'Kurumsal Web Geliştirme' : 'Corporate Web Development',
      description: lang === 'tr' 
        ? 'Profesyonel kurumlara özel web sitesi çözümleri'
        : 'Custom website solutions for professional institutions',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-200',
      projects: [
        {
          name: lang === 'tr' ? 'Hulusi Kızılkaya Avukatlık Bürosu' : 'Hulusi Kızılkaya Law Office',
          description: lang === 'tr' 
            ? 'Antalya\'da hizmet veren prestijli avukatlık bürosunun kurumsal web sitesi. Kapsamlı hukuki hizmet portföyü, uzman ekip tanıtımı ve profesyonel tasarım ile müvekkillere güven veren dijital platform.'
            : 'Corporate website for a prestigious law office serving in Antalya. A digital platform that inspires confidence in clients with comprehensive legal service portfolio, expert team introduction and professional design.',
          technologies: ['WordPress', 'PHP', 'MySQL', 'Responsive Design'],
          url: 'http://hulusikizilkaya.av.tr/'
        },
        {
          name: lang === 'tr' ? 'Portakal İşitme Merkezi' : 'Portakal Hearing Center',
          description: lang === 'tr' 
            ? 'Antalya\'da işitme cihazları satışı yapan özel merkez için geliştirilmiş modern web sitesi. Ürün katalogu, hizmet tanıtımı ve müşteri bilgilendirme odaklı kullanıcı deneyimi.'
            : 'Modern website developed for a specialized center selling hearing aids in Antalya. User experience focused on product catalog, service introduction and customer information.',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
          url: 'https://portakalisitme.com'
        },
        {
          name: lang === 'tr' ? 'Antalya Vitrini' : 'Antalya Showcase',
          description: lang === 'tr' 
            ? 'Antalya şehrinin işletme ve hizmet sektörü için tasarlanmış vitrin platformu. Yerel işletmelerin dijital varlığını güçlendiren kapsamlı web portalı.'
            : 'Showcase platform designed for Antalya\'s business and service sector. Comprehensive web portal strengthening the digital presence of local businesses.',
          technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Themes'],
          url: 'https://antalyavitrini.com'
        }
      ]
    },
    {
      id: 'ai',
      title: lang === 'tr' ? 'Yapay Zeka Çalışmaları' : 'Artificial Intelligence Studies',
      description: lang === 'tr' 
        ? 'Makine öğrenmesi ve yapay zeka uygulamaları'
        : 'Machine learning and artificial intelligence applications',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200',
      projects: [
        {
          name: lang === 'tr' ? 'Ses Kaydından Haber Yazısı Agent\'ı' : 'Audio to News Article Agent',
          description: lang === 'tr' 
            ? 'Ses kayıtlarını analiz ederek otomatik haber yazısı oluşturan yapay zeka aracı. Doğal dil işleme ve ses tanıma teknolojilerini birleştiren gelişmiş AI sistemi.'
            : 'AI tool that analyzes audio recordings and automatically generates news articles. Advanced AI system combining natural language processing and speech recognition technologies.',
          technologies: ['Python', 'NLP', 'Speech Recognition', 'Hugging Face', 'AI Models'],
          url: 'https://huggingface.co/spaces/yunuseduran/MWAgent'
        },
        {
          name: lang === 'tr' ? 'PDF Soru-Cevap Agent\'ı' : 'PDF Q&A Agent',
          description: lang === 'tr' 
            ? 'PDF belgelerini analiz ederek kullanıcı sorularını yanıtlayan akıllı chatbot. Belge içeriğini anlayan ve bağlamsal cevaplar veren AI asistanı.'
            : 'Intelligent chatbot that analyzes PDF documents and answers user questions. AI assistant that understands document content and provides contextual answers.',
          technologies: ['Python', 'RAG', 'Document Analysis', 'Hugging Face', 'LLM'],
          url: 'https://huggingface.co/spaces/yunuseduran/chatpdf'
        },
        {
          name: lang === 'tr' ? 'Pirinç Sınıflandırma Modeli' : 'Rice Classification Model',
          description: lang === 'tr' 
            ? 'Görüntü işleme teknikleri ile pirinç türlerini otomatik sınıflandıran makine öğrenmesi modeli. Yüksek doğruluk oranıyla tarım sektörüne yönelik AI çözümü.'
            : 'Machine learning model that automatically classifies rice types using image processing techniques. AI solution for the agricultural sector with high accuracy rate.',
          technologies: ['TensorFlow', 'Computer Vision', 'Python', 'Hugging Face', 'Deep Learning'],
          url: 'https://huggingface.co/spaces/yunuseduran/rice_class'
        },
        {
          name: lang === 'tr' ? 'Canlı Nesne Tespit Sistemi' : 'Real-time Object Detection System',
          description: lang === 'tr' 
            ? 'OpenCV ve YOLO algoritması kullanarak gerçek zamanlı nesne tespiti yapan gelişmiş bilgisayarlı görü sistemi. Webcam üzerinden anlık nesne tanıma ve takip.'
            : 'Advanced computer vision system that performs real-time object detection using OpenCV and YOLO algorithm. Instant object recognition and tracking via webcam.',
          technologies: ['Python', 'OpenCV', 'YOLO', 'Computer Vision', 'Real-time Processing'],
          url: 'https://github.com/suskun354/opencvnesnetan-ma'
        }
      ]
    },
    {
      id: 'dataAnalysis',
      title: lang === 'tr' ? 'Veri Analizi ve Görselleştirme' : 'Data Analysis and Visualization',
      description: lang === 'tr' 
        ? 'Büyük veri setlerinin analizi ve görselleştirilmesi'
        : 'Analysis and visualization of large datasets',
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-50 border-green-200',
      projects: [
        {
          name: lang === 'tr' ? 'Rakip Mağaza Analizi Platformu' : 'Competitor Store Analysis Platform',
          description: lang === 'tr' 
            ? 'E-ticaret işletmeleri için geliştirilmiş kapsamlı rakip analizi platformu. Fiyat karşılaştırması, pazar analizi ve trend takibi özellikleri ile stratejik karar destek sistemi.'
            : 'Comprehensive competitor analysis platform developed for e-commerce businesses. Strategic decision support system with price comparison, market analysis and trend tracking features.',
          technologies: ['Python', 'Streamlit', 'Pandas', 'Data Visualization', 'Market Analysis'],
          url: 'https://data-store.streamlit.app/'
        },
        {
          name: lang === 'tr' ? 'KC House Dataset Keşifsel Analizi' : 'KC House Dataset Exploratory Analysis',
          description: lang === 'tr' 
            ? 'King County ev fiyatları veri setinin detaylı keşifsel analizi. Gayrimenkul piyasası trendleri, fiyat faktörleri ve istatistiksel modellemeler ile piyasa içgörüleri.'
            : 'Detailed exploratory analysis of King County house prices dataset. Market insights with real estate market trends, price factors and statistical modeling.',
          technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Statistical Modeling'],
          url: 'https://github.com/suskun354/Kc-house'
        }
      ]
    },
    {
      id: 'ecommerce',
      title: lang === 'tr' ? 'E-ticaret Site Yapımı' : 'E-commerce Website Development',
      description: lang === 'tr' 
        ? 'Online satış platformları ve e-ticaret çözümleri'
        : 'Online sales platforms and e-commerce solutions',
      icon: ShoppingCart,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 border-orange-200',
      projects: [
        {
          name: 'Asylove E-ticaret Platformu',
          description: lang === 'tr' 
            ? 'Uluslararası pazarlara yönelik gelişmiş e-ticaret platformu. Çok dilli destek, güvenli ödeme sistemleri ve kullanıcı dostu arayüz ile global müşteri deneyimi.'
            : 'Advanced e-commerce platform for international markets. Global customer experience with multi-language support, secure payment systems and user-friendly interface.',
          technologies: ['Wix', 'E-commerce', 'Payment Integration', 'Multi-language', 'SEO'],
          url: 'https://asylove.com/'
        },
        {
          name: lang === 'tr' ? 'Özarslan Dizayn' : 'Özarslan Design',
          description: lang === 'tr' 
            ? 'İç mimarlık ve tasarım hizmetleri sunan firmanın kurumsal e-ticaret sitesi. Portfolyo galerisi, hizmet tanıtımı ve müşteri iletişim sistemleri ile profesyonel platform.'
            : 'Corporate e-commerce site of a company providing interior design services. Professional platform with portfolio gallery, service introduction and customer communication systems.',
          technologies: ['Wix', 'Portfolio Gallery', 'Contact Forms', 'Responsive Design'],
          url: 'https://www.ozarslandizayn.com/'
        },
        {
          name: 'Grmoonde',
          description: lang === 'tr' 
            ? 'Modern yaşam tarzı ürünleri satan e-ticaret platformu. Trend takibi, ürün önerileri ve sosyal medya entegrasyonu ile genç kullanıcı odaklı alışveriş deneyimi.'
            : 'E-commerce platform selling modern lifestyle products. Youth-oriented shopping experience with trend tracking, product recommendations and social media integration.',
          technologies: ['Wix', 'Product Catalog', 'Social Integration', 'Modern UI/UX'],
          url: 'https://www.grmoonde.com/'
        },
        {
          name: 'Melodimiz',
          description: lang === 'tr' 
            ? 'Müzik aletleri ve aksesuarları satışına özel e-ticaret sitesi. Ürün kategorilendirme, ses örnekleri ve müzisyen topluluk özellikleri ile özel platform.'
            : 'E-commerce site specialized in selling musical instruments and accessories. Special platform with product categorization, audio samples and musician community features.',
          technologies: ['Wix', 'Audio Integration', 'Product Categories', 'Community Features'],
          url: 'https://www.melodimiz.com/'
        },
        {
          name: lang === 'tr' ? 'Bahar Botanik Marmaris' : 'Bahar Botanik Marmaris',
          description: lang === 'tr' 
            ? 'Marmaris bölgesinde bitki ve bahçe ürünleri satışı yapan işletmenin e-ticaret platformu. Yerel teslimat, bitki bakım rehberleri ve mevsimsel ürün takibi ile özel hizmet.'
            : 'E-commerce platform of a business selling plants and garden products in Marmaris region. Special service with local delivery, plant care guides and seasonal product tracking.',
          technologies: ['Wix', 'Local Delivery', 'Plant Guides', 'Seasonal Catalog'],
          url: 'https://www.baharbotanikmarmaris.store/'
        }
      ]
    },
    {
      id: 'powerbi',
      title: 'Power BI',
      description: lang === 'tr' 
        ? 'İş zekası ve veri görselleştirme dashboard\'ları'
        : 'Business intelligence and data visualization dashboards',
      icon: BarChart3,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 border-yellow-200',
      projects: [
        {
          name: lang === 'tr' ? 'Satış Performans Dashboard\'u' : 'Sales Performance Dashboard',
          description: lang === 'tr' 
            ? 'E-ticaret satış verilerinin analizi için interaktif Power BI dashboard\'u. KPI takibi ve trend analizi.'
            : 'Interactive Power BI dashboard for e-commerce sales data analysis. KPI tracking and trend analysis.',
          technologies: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'SQL'],
          url: '#'
        },
        {
          name: lang === 'tr' ? 'Müşteri Analiz Raporu' : 'Customer Analysis Report',
          description: lang === 'tr' 
            ? 'Müşteri davranışları ve segmentasyon analizi. Demografik veriler ve satın alma kalıpları analizi.'
            : 'Customer behavior and segmentation analysis. Analysis of demographic data and purchasing patterns.',
          technologies: ['Power BI', 'Excel', 'Data Analysis', 'Customer Segmentation'],
          url: '#'
        }
      ]
    },
    {
      id: 'solutily',
      title: 'Solutily',
      description: lang === 'tr' 
        ? 'KOSGEB destekli startup projesi ve kurucu ortaklık'
        : 'KOSGEB-supported startup project and co-founding partnership',
      icon: Code2,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border-indigo-200',
      projects: [
        {
          name: lang === 'tr' ? 'Solutily Platform - Kurucu Ortak & Proje Yürütücüsü' : 'Solutily Platform - Co-Founder & Project Manager',
          description: lang === 'tr' 
            ? 'KOSGEB Teknoloji Transferi Destekleme Programı kapsamında desteklenen ve başarıyla tamamlanan teknoloji startup projesi. Kurucu ortak ve proje yürütücüsü olarak platform geliştirme, ekip yönetimi ve iş stratejisi süreçlerini yönettim.'
            : 'Technology startup project supported and successfully completed under KOSGEB Technology Transfer Support Program. As co-founder and project manager, I managed platform development, team management and business strategy processes.',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'AWS', 'KOSGEB'],
          url: 'https://solutily.com'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
              {t.projects.title}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              {lang === 'tr' 
                ? 'Farklı alanlarda geliştirdiğim projeler ve çözümler'
                : 'Projects and solutions I developed in different fields'
              }
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCategories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === category.id;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-2xl border-2 transition-all duration-300 ${category.bgColor} ${
                    isExpanded ? 'shadow-xl scale-105' : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                    <div className="mt-3 text-xs text-gray-500">
                      {category.projects.length} {lang === 'tr' ? 'proje' : 'projects'}
                    </div>
                  </button>

                  {/* Expanded Projects */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 overflow-hidden"
                      >
                        <div className="p-4 space-y-3">
                          {category.projects.map((project, projectIndex) => (
                            <motion.div
                              key={projectIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: projectIndex * 0.1 }}
                              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold text-gray-800 text-sm">
                                  {project.name}
                                </h4>
                                <button
                                  onClick={() => openProjectModal(project)}
                                  className="text-gray-400 hover:text-primary transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > 3 && (
                                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                                    +{project.technologies.length - 3}
                                  </span>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                {lang === 'tr' ? 'Daha Fazla Çalışma İçin' : 'For More Work'}
              </h3>
              <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
                {lang === 'tr' 
                  ? 'Tüm projelerimi ve güncel çalışmalarımı sosyal medya hesaplarımdan takip edebilirsiniz.'
                  : 'You can follow all my projects and current work on my social media accounts.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  <span>{lang === 'tr' ? 'İletişime Geç' : 'Get In Touch'}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <div className="flex gap-3 flex-wrap justify-center">
                  <a
                    href="https://github.com/suskun354"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.kaggle.com/yunuseduran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>Kaggle</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/iamyunusemreduran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedProject.name}
                </h2>
                <button
                  onClick={closeProjectModal}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {lang === 'tr' ? 'Proje Detayları' : 'Project Details'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {lang === 'tr' ? 'Kullanılan Teknolojiler' : 'Technologies Used'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.url && selectedProject.url !== '#' && (
                  <div className="pt-4 border-t border-gray-200">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      {lang === 'tr' ? 'Siteyi Ziyaret Et' : 'Visit Website'}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 