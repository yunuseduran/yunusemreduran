export const languages = {
  tr: 'Türkçe',
  en: 'English'
} as const

export type Language = keyof typeof languages
export const defaultLanguage: Language = 'tr'

export const translations = {
  tr: {
    // Navigation
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      experience: 'Deneyimlerim',
      education: 'Eğitim Hayatım',
      services: 'Hizmetlerim',
      projects: 'Çalışmalarım',
      skills: 'Yeteneklerim',

      certificates: 'Sertifikalarım',
      contact: 'İletişim'
    },
    // Sidebar Section
    sidebar: {
      downloadCV: 'CV İndir',
      languageSwitch: {
        tr: 'Türkçe',
        en: 'İngilizce'
      }
    },
    // Hero Section
    hero: {
      greeting: 'Merhaba, Ben',
      name: 'Yunus Emre Duran',
      title: 'Web Developer | Data Analyst',
      description: 'Kullanıcı odaklı web uygulamaları geliştiriyorum ve veriyi eyleme geçirilebilir içgörülere dönüştürüyorum. Kullanıcı deneyimlerini kişiselleştirmek ve iş büyümesini sağlamak için veri ile teknoloji birleştiriyorum.',
      downloadCV: 'CV İndir',
      contact: 'İletişime Geç'
    },
    // About Section
    about: {
      title: 'Hakkımda',
      description: 'Gerçek değer yaratan kullanıcı odaklı çözümler geliştirme konusunda tutkuluyum. Web geliştirme ve veri analizi aracılığıyla, kullanıcı deneyimlerini kişiselleştiren ve iş büyümesini sağlayan uygulamalar geliştiriyorum.',
      yearsExperience: 'Yıl Deneyim',
      projectsCompleted: 'Tamamlanan Proje',
      happyClients: 'Mutlu Müşteri',
      certifications: 'Sertifika',
      items: [
        {
          label: 'İsim',
          value: 'Yunus Emre Duran'
        },
        {
          label: 'Yaş',
          value: '27'
        },
        {
          label: 'Konum',
          value: 'Antalya, Türkiye'
        },
        {
          label: 'E-posta',
          value: 'yunusemreduran.05@gmail.com'
        },
        {
          label: 'Telefon',
          value: '+90-538-982-0657'
        },
        {
          label: 'Diller',
          value: 'Türkçe, İngilizce'
        }
      ]
    },
    // Experience Section
    experience: {
      title: 'Deneyimlerim'
    },
    // Education Section
    education: {
      title: 'Eğitim Hayatım',
      description: 'Akademik geçmişim ve sürekli öğrenme yolculuğum',
      data: [
        {
          title: 'Veri Analitigi Yüksek Lisans',
          school: 'Akdeniz Üniversitesi',
          period: '2023 - 2025',
          description: 'İleri veri analitigi, makine öğrenmesi algoritmaları ve istatistiksel analiz yöntemlerine odaklanan lisansüstü çalışmalarıma devam ediyorum.',
          gpa: 'GPA: 3.2/4.0'
        },
        {
          title: 'Elektrik ve Elektronik Mühendisliği Lisans',
          school: 'Akdeniz Üniversitesi',
          period: '2019 - 2023',
          description: 'Elektrik mühendisliği prensipleri, elektronik ve programlama temellerine odaklanarak lisans çalışmalarımı tamamladım.',
          gpa: 'GPA: 2.8/4.0'
        }
      ]
    },
    // Services Section
    services: {
      title: 'Hizmetlerim',
      description: 'Fikirlerinizi hayata geçirmek için sunduğum profesyonel hizmetler',
      items: [
        {
          title: 'Web Geliştirme',
          description: 'En son teknolojileri kullanarak modern, duyarlı web uygulamaları',
          icon: '💻'
        },
        {
          title: 'Veri Analizi',
          description: 'Verilerinizi eyleme geçirilebilir içgörülere ve görselleştirmelere dönüştürme',
          icon: '📊'
        },
        {
          title: 'İş Zekası',
          description: 'Kapsamlı dashboard\'lar ve raporlama sistemleri oluşturma',
          icon: '📈'
        },
        {
          title: 'UI/UX Tasarım',
          description: 'Daha iyi kullanıcı deneyimleri için kullanıcı merkezli tasarım',
          icon: '🎨'
        },
        {
          title: 'E-ticaret Çözümleri',
          description: 'Eksiksiz e-ticaret platformları ve online mağazalar',
          icon: '🛒'
        },
        {
          title: 'Danışmanlık',
          description: 'İşiniz için stratejik teknoloji danışmanlığı',
          icon: '💡'
        }
      ]
    },
    // Projects Section
    projects: {
      title: 'Çalışmalarım',
      description: 'Son çalışmalarım ve başarılarımın vitrine',
      filters: {
        all: 'Tümü',
        web: 'Web Geliştirme',
        data: 'Veri Analizi',
        ml: 'Makine Öğrenmesi'
      },
      viewProject: 'Projeyi Görüntüle',
      liveDemo: 'Canlı Demo',
      sourceCode: 'Kaynak Kod',
      data: [
        {
          name: 'Rakip Mağaza Analizi',
          description: 'E-ticaret mağazalarının karşılaştırması için analiz sistemi. Python ve veri görselleştirme araçlarını kullanarak kapsamlı rakip analizi geliştirildi.',
          technologies: ['Python', 'Pandas', 'Veri Analizi', 'Görselleştirme', 'E-ticaret'],
          type: 'Veri Analizi',
          url: '#'
        },
        {
          name: 'Dünya Bulutu Oluşturucu',
          description: 'Metin verilerinden kelime bulutları oluşturmak için web uygulaması. Özelleştirilebilir görselleştirme seçenekleriyle etkileşimli arayüz geliştirildi.',
          technologies: ['Python', 'Streamlit', 'NLP', 'Metin İşleme', 'Görselleştirme'],
          type: 'Web Geliştirme',
          url: '#'
        },
        {
          name: 'Pirinç Sınıflandırma Modeli',
          description: 'TensorFlow ve Keras kütüphaneleri kullanılarak Kaggle\'dan pirinç veri seti ile eğitilen makine öğrenmesi modeli. Pirinç türü sınıflandırmasında %98 doğruluk elde edildi.',
          technologies: ['TensorFlow', 'Keras', 'Python', 'Makine Öğrenmesi', 'Bilgisayarlı Görü'],
          type: 'Makine Öğrenmesi',
          url: '#'
        },
        {
          name: 'Ses Transkript Uygulaması',
          description: 'Yüklenen ses dosyalarından transkript oluşturan uygulama. Kullanıcılar sonucu Word belgesi olarak indirebilir. Streamlit SDK ile geliştirildi.',
          technologies: ['Python', 'Streamlit', 'Konuşma Tanıma', 'NLP'],
          type: 'Veri Bilimi',
          url: '#'
        },
        {
          name: 'YouTube Transkript Uygulaması',
          description: 'YouTube video bağlantılarından transkript oluşturan uygulama. Kullanıcılar sonucu Word belgesi olarak indirebilir. Streamlit SDK ile geliştirildi.',
          technologies: ['Python', 'Streamlit', 'YouTube API', 'Konuşma Tanıma'],
          type: 'Veri Bilimi',
          url: '#'
        },
        {
          name: 'Canlı Nesne Tespit Uygulaması',
          description: 'OpenCV ve önceden eğitilmiş YOLOv3 modeli kullanarak gerçek zamanlı nesne tespiti sistemi. Web kameraları aracılığıyla çevredeki nesneleri tespit eder.',
          technologies: ['Python', 'OpenCV', 'YOLO', 'Bilgisayarlı Görü', 'Gerçek Zamanlı Tespit'],
          type: 'Makine Öğrenmesi',
          url: '#'
        }
      ]
    },
    // Skills Section
    skills: {
      title: 'Yeteneklerim',
      description: 'Geliştirdiğim teknik beceriler ve uzmanlık alanlarım',
      categories: {
        programming: 'Programlama Dilleri',
        tools: 'Araçlar ve Teknolojiler',
        databases: 'Veritabanları',
        dataAnalysis: 'Veri Analizi',
        management: 'Yönetim ve Liderlik',
        softSkills: 'Kişisel Beceriler'
      },
      data: {
        programming: [
          { name: 'HTML/CSS', level: 95 },
          { name: 'JavaScript', level: 90 },
          { name: 'React', level: 85 },
          { name: 'Python', level: 90 }
        ],
        tools: [
          { name: 'Power BI', level: 95 },
          { name: 'Excel', level: 90 },
          { name: 'Kaggle', level: 85 },
          { name: 'WordPress', level: 80 }
        ],
        databases: [
          { name: 'PostgreSQL', level: 85 },
          { name: 'MySQL', level: 80 },
          { name: 'MS SQL', level: 75 },
          { name: 'Access', level: 70 }
        ],
        dataAnalysis: [
          { name: 'Machine Learning', level: 80 },
          { name: 'Veri Görselleştirme', level: 90 },
          { name: 'İş Zekası', level: 85 },
          { name: 'Veri Modelleme', level: 80 }
        ],
        management: [
          { name: 'Proje Yönetimi', level: 85 },
          { name: 'Ekip Kurma', level: 80 },
          { name: 'Ekip Liderliği', level: 82 },
          { name: 'Süreç Yönetimi', level: 78 }
        ],
        softSkills: [
          { name: 'Danışmanlık', level: 85 },
          { name: 'Problem Çözme', level: 90 },
          { name: 'İletişim', level: 88 },
          { name: 'Analitik Düşünme', level: 92 }
        ]
      }
    },

    // Certificates Section
    certificates: {
      title: 'Sertifikalarım',
      description: 'Profesyonel gelişimime katkı sağlayan sertifikalar ve eğitimler',
      verified: 'Doğrulandı',
      stats: {
        certificates: 'Sertifika',
        platforms: 'Platform',
        latest: 'Son Sertifika'
      },
      pagination: {
        previous: 'Önceki',
        next: 'Sonraki',
        showing: 'arası, toplam',
        total: 'sertifika gösteriliyor'
      },
      actions: {
        view: 'Sertifikayı Görüntüle',
        coming: 'Sertifika Linki Yakında'
      },
      cta: {
        title: 'Sürekli Öğrenme Yolculuğu',
        description: 'Teknoloji alanında kendimi sürekli geliştirmek için yeni sertifikalar almaya ve becerilerimi güncel tutmaya devam ediyorum. Her sertifika, profesyonel yolculuğumda önemli bir adım.',
        button: 'Benimle İletişime Geç'
      },
      data: [
        {
          title: 'İleri Seviye PowerBI',
          description: 'İleri seviye Power BI ile dashboard oluşturma ve veri görselleştirme',
          skills: ['Power BI', 'Veri Görselleştirme', 'DAX', 'Power Query']
        },
        {
          title: 'Veri Bilimi için Python Bootcamp',
          description: 'Python ile veri bilimi ve analizi eğitimi',
          skills: ['Python', 'Veri Analizi', 'Makine Öğrenmesi', 'Pandas']
        },
        {
          title: 'Uygulamalı Kaggle Eğitimi',
          description: 'Kaggle platformunda veri analizi ve yarışmalara katılım',
          skills: ['Kaggle', 'Veri Bilimi', 'Yarışma', 'Python']
        },
        {
          title: 'Makine Öğrenmesi için İleri Python (AI) Atölyesi',
          description: 'Python ile makine öğrenmesi ve yapay zeka uygulamaları',
          skills: ['Python', 'Makine Öğrenmesi', 'Yapay Zeka', 'Derin Öğrenme']
        },
        {
          title: 'React ile Web Programlama',
          description: 'React.js ile modern web uygulaması geliştirme',
          skills: ['React', 'JavaScript', 'Frontend', 'Bileşen']
        },
        {
          title: 'Excel ile Veri Analizi',
          description: 'Excel ile veri görselleştirme, analizler ve veri analizi',
          skills: ['Veri Görselleştirme', 'Analizler', 'Veri Analizi', 'İstatistiksel Veri Analizi', 'Microsoft Excel']
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'İletişim',
      description: 'Projeleriniz hakkında konuşmak veya iş birliği yapmak için benimle iletişime geçin.',
      form: {
        name: 'Ad Soyad',
        namePlaceholder: 'Adınızı girin',
        email: 'E-posta',
        emailPlaceholder: 'E-posta adresinizi girin',
        subject: 'Konu',
        subjectPlaceholder: 'Mesaj konusu',
        message: 'Mesaj',
        messagePlaceholder: 'Mesajınızı yazın...',
        send: 'Mesaj Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesajınız başarıyla gönderildi!',
        error: 'Mesaj gönderilirken hata oluştu.'
      },
      info: {
        email: 'yunusemreduran.05@gmail.com',
        phone: '+90-538-982-0657',
        location: 'Antalya, Türkiye'
      }
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      services: 'Services',
      projects: 'My Work',
      skills: 'Skills',

      certificates: 'Certificates',
      contact: 'Contact'
    },
    // Sidebar Section
    sidebar: {
      downloadCV: 'Download CV',
      languageSwitch: {
        tr: 'Turkish',
        en: 'English'
      }
    },
    // Hero Section
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Yunus Emre Duran',
      title: 'Web Developer | Data Analyst',
      description: 'I create user-focused web applications and turn data into actionable insights to personalize user experiences and drive business growth.',
      downloadCV: 'Download CV',
      contact: 'Contact Me'
    },
    // About Section
    about: {
      title: 'About Me',
      description: 'I am passionate about creating user-focused solutions that deliver real value. Through web development and data analysis, I build applications that personalize user experiences and drive business growth.',
      yearsExperience: 'Years Experience',
      projectsCompleted: 'Completed Projects',
      happyClients: 'Happy Clients',
      certifications: 'Certifications',
      items: [
        {
          label: 'Name',
          value: 'Yunus Emre Duran'
        },
        {
          label: 'Age',
          value: '27'
        },
        {
          label: 'Location',
          value: 'Antalya, Turkey'
        },
        {
          label: 'Email',
          value: 'yunusemreduran.05@gmail.com'
        },
        {
          label: 'Phone',
          value: '+90-538-982-0657'
        },
        {
          label: 'Languages',
          value: 'Turkish, English'
        }
      ]
    },
    // Experience Section
    experience: {
      title: 'Experience'
    },
    // Education Section
    education: {
      title: 'Education',
      description: 'My academic background and continuous learning journey',
      data: [
        {
          title: 'Master\'s in Data Analytics',
          school: 'Akdeniz University',
          period: '2023 - 2025',
          description: 'Continuing my graduate studies focusing on advanced data analytics, machine learning algorithms, and statistical analysis methods.',
          gpa: 'GPA: 3.2/4.0'
        },
        {
          title: 'Bachelor\'s in Electrical and Electronics Engineering',
          school: 'Akdeniz University',
          period: '2019 - 2023',
          description: 'Completed my undergraduate studies with a focus on electrical engineering principles, electronics, and programming fundamentals.',
          gpa: 'GPA: 2.8/4.0'
        }
      ]
    },
    // Services Section
    services: {
      title: 'Services',
      description: 'Professional services I offer to bring your ideas to life',
      items: [
        {
          title: 'Web Development',
          description: 'Modern, responsive web applications using latest technologies',
          icon: '💻'
        },
        {
          title: 'Data Analysis',
          description: 'Turn your data into actionable insights and visualizations',
          icon: '📊'
        },
        {
          title: 'Business Intelligence',
          description: 'Create comprehensive dashboards and reporting systems',
          icon: '📈'
        },
        {
          title: 'UI/UX Design',
          description: 'User-centered design for better user experiences',
          icon: '🎨'
        },
        {
          title: 'E-commerce Solutions',
          description: 'Complete e-commerce platforms and online stores',
          icon: '🛒'
        },
        {
          title: 'Consulting',
          description: 'Strategic technology consulting for your business',
          icon: '💡'
        }
      ]
    },
    // Projects Section
    projects: {
      title: 'My Work',
      description: 'Showcase of my recent work and achievements',
      filters: {
        all: 'All',
        web: 'Web Development',
        data: 'Data Analysis',
        ml: 'Machine Learning'
      },
      viewProject: 'View Project',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      data: [
        {
          name: 'Competitor Store Analysis',
          description: 'Analysis system for e-commerce stores comparison. Developed comprehensive competitor analysis using Python and data visualization tools.',
          technologies: ['Python', 'Pandas', 'Data Analysis', 'Visualization', 'E-commerce'],
          type: 'Data Analysis',
          url: '#'
        },
        {
          name: 'World Cloud Creator',
          description: 'Web application for creating word clouds from text data. Developed interactive interface with customizable visualization options.',
          technologies: ['Python', 'Streamlit', 'NLP', 'Text Processing', 'Visualization'],
          type: 'Web Development',
          url: '#'
        },
        {
          name: 'Rice Classification Model',
          description: 'Machine learning model trained on rice dataset from Kaggle using TensorFlow and Keras libraries. Achieved 98% accuracy in rice type classification.',
          technologies: ['TensorFlow', 'Keras', 'Python', 'Machine Learning', 'Computer Vision'],
          type: 'Machine Learning',
          url: '#'
        },
        {
          name: 'Voice Transcript App',
          description: 'Application that creates transcripts from uploaded audio files. Users can download the result as a Word document. Developed using Streamlit SDK.',
          technologies: ['Python', 'Streamlit', 'Speech Recognition', 'NLP'],
          type: 'Data Science',
          url: '#'
        },
        {
          name: 'YouTube Transcript App',
          description: 'Application that creates transcripts from YouTube video links. Users can download the result as a Word document. Developed using Streamlit SDK.',
          technologies: ['Python', 'Streamlit', 'YouTube API', 'Speech Recognition'],
          type: 'Data Science',
          url: '#'
        },
        {
          name: 'Live Object Detection App',
          description: 'Real-time object detection system using OpenCV and pre-trained YOLOv3 model. Detects objects in the environment through web cameras.',
          technologies: ['Python', 'OpenCV', 'YOLO', 'Computer Vision', 'Real-time Detection'],
          type: 'Machine Learning',
          url: '#'
        }
      ]
    },
    // Skills Section
    skills: {
      title: 'Skills',
      description: 'Technical skills and expertise I\'ve developed',
      categories: {
        programming: 'Programming Languages',
        tools: 'Tools & Technologies',
        databases: 'Databases',
        dataAnalysis: 'Data Analysis',
        management: 'Management & Leadership',
        softSkills: 'Soft Skills'
      },
      data: {
        programming: [
          { name: 'HTML', level: 95 },
          { name: 'CSS', level: 90 },
          { name: 'JavaScript', level: 85 },
          { name: 'Python', level: 90 }
        ],
        tools: [
          { name: 'Power BI', level: 95 },
          { name: 'Excel', level: 90 },
          { name: 'Kaggle', level: 85 },
          { name: 'WordPress', level: 80 }
        ],
        databases: [
          { name: 'PostgreSQL', level: 85 },
          { name: 'MySQL', level: 80 },
          { name: 'MS SQL', level: 75 },
          { name: 'Access', level: 70 }
        ],
        dataAnalysis: [
          { name: 'Machine Learning', level: 80 },
          { name: 'Data Visualization', level: 90 },
          { name: 'Business Intelligence', level: 85 },
          { name: 'Data Modeling', level: 80 }
        ],
        management: [
          { name: 'Project Management', level: 85 },
          { name: 'Team Building', level: 80 },
          { name: 'Team Leadership', level: 82 },
          { name: 'Process Management', level: 78 }
        ],
        softSkills: [
          { name: 'Consulting', level: 85 },
          { name: 'Problem Solving', level: 90 },
          { name: 'Communication', level: 88 },
          { name: 'Analytical Thinking', level: 92 }
        ]
      }
    },

    // Certificates Section
    certificates: {
      title: 'Certificates',
      description: 'Certificates and trainings that contribute to my professional development',
      verified: 'Verified',
      stats: {
        certificates: 'Certificates',
        platforms: 'Platforms',
        latest: 'Latest Certificate'
      },
      pagination: {
        previous: 'Previous',
        next: 'Next',
        showing: 'to',
        total: 'certificates showing'
      },
      actions: {
        view: 'View Certificate',
        coming: 'Certificate Link Coming Soon'
      },
      cta: {
        title: 'Continuous Learning Journey',
        description: 'I continue to obtain new certificates and keep my skills up to date to continuously improve myself in the field of technology. Each certificate is an important step in my professional journey.',
        button: 'Contact Me'
      },
      data: [
        {
          title: 'Advanced PowerBI',
          description: 'Advanced Power BI dashboard creation and data visualization',
          skills: ['Power BI', 'Data Visualization', 'DAX', 'Power Query']
        },
        {
          title: 'Python Bootcamp for Data Science',
          description: 'Python training for data science and analysis',
          skills: ['Python', 'Data Analysis', 'Machine Learning', 'Pandas']
        },
        {
          title: 'Applied Kaggle Training',
          description: 'Data analysis and competition participation on Kaggle platform',
          skills: ['Kaggle', 'Data Science', 'Competition', 'Python']
        },
        {
          title: 'Advanced Python for Machine Learning (AI) Workshop',
          description: 'Machine learning and artificial intelligence applications with Python',
          skills: ['Python', 'Machine Learning', 'Artificial Intelligence', 'Deep Learning']
        },
        {
          title: 'Web Programming with React',
          description: 'Modern web application development with React.js',
          skills: ['React', 'JavaScript', 'Frontend', 'Components']
        },
        {
          title: 'Data Analysis with Excel',
          description: 'Data visualization, analysis and data analysis with Excel',
          skills: ['Data Visualization', 'Analysis', 'Data Analysis', 'Statistical Data Analysis', 'Microsoft Excel']
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Contact',
      description: 'Get in touch with me to discuss your projects or collaborate.',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your name',
        email: 'Email',
        emailPlaceholder: 'Enter your email address',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Write your message...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'An error occurred while sending the message.'
      },
      info: {
        email: 'yunusemreduran.05@gmail.com',
        phone: '+90-538-982-0657',
        location: 'Antalya, Turkey'
      }
    }
  }
} as const

export type TranslationKeys = typeof translations.tr

export function useTranslation(lang: Language = defaultLanguage) {
  return translations[lang]
}