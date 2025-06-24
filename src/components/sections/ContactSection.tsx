'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  Download,
  MessageCircle,
  BarChart3,
  CheckSquare,
  Square,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

import { Language, useTranslation } from '@/lib/i18n'

interface ContactSectionProps {
  lang: Language
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = useTranslation(lang);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: t.contact.info.email,
      href: `mailto:${t.contact.info.email}`,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Phone,
      label: lang === 'tr' ? 'Telefon' : 'Phone',
      value: t.contact.info.phone,
      href: 'tel:+905389820657',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      label: lang === 'tr' ? 'Konum' : 'Location',
      value: t.contact.info.location,
      href: '#',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/suskun354', icon: Github, color: 'hover:bg-gray-100' },
    { name: 'Kaggle', href: 'https://www.kaggle.com/yunusemreduran', icon: BarChart3, color: 'hover:bg-cyan-50' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/iamyunusemreduran', icon: Linkedin, color: 'hover:bg-blue-50' },
    { name: 'Twitter', href: 'https://twitter.com/yunuseduran', icon: Twitter, color: 'hover:bg-blue-50' },
    { name: 'Instagram', href: 'https://instagram.com/yunuseduran', icon: Instagram, color: 'hover:bg-pink-50' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
    
    // Clear submit status when user makes changes
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) {
      errors.push(lang === 'tr' ? 'Ad soyad alanı gereklidir' : 'Name field is required');
    }
    
    if (!formData.email.trim()) {
      errors.push(lang === 'tr' ? 'E-posta alanı gereklidir' : 'Email field is required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push(lang === 'tr' ? 'Geçerli bir e-posta adresi giriniz' : 'Please enter a valid email address');
    }
    
    if (!formData.subject.trim()) {
      errors.push(lang === 'tr' ? 'Konu alanı gereklidir' : 'Subject field is required');
    }
    
    if (!formData.message.trim()) {
      errors.push(lang === 'tr' ? 'Mesaj alanı gereklidir' : 'Message field is required');
    }
    
    if (!formData.consent) {
      errors.push(lang === 'tr' ? 'Kişisel verilerin işlenmesine onay vermelisiniz' : 'You must consent to data processing');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setValidationErrors([]);
    
    try {
      const response = await fetch('https://formspree.io/f/manjlwgr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          subject: '', 
          message: '', 
          consent: false 
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <span className="text-gradient">{t.contact.title}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-secondary-600 mt-6 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-6">
                {lang === 'tr' ? 'Bana Ulaşın' : 'Get In Touch'}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all card-hover group"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-secondary-500 font-medium">{info.label}</p>
                        <p className="text-secondary-800 font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-secondary-800 mb-4">
                {lang === 'tr' ? 'Sosyal Medya' : 'Social Media'}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center transition-all duration-200 hover:shadow-md hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-secondary-700" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border border-primary-100"
            >
              <h4 className="text-lg font-semibold text-secondary-800 mb-3">
                {lang === 'tr' ? 'CV İndir' : 'Download CV'}
              </h4>
              <p className="text-secondary-600 text-sm mb-4">
                {lang === 'tr' 
                  ? 'Detaylı özgeçmişimi indirerek daha fazla bilgi alabilirsiniz.'
                  : 'Download my detailed resume to get more information.'
                }
              </p>
              <button
                onClick={() => window.open('/N-YunusEmreDuran-Cv-TR (1).pdf', '_blank')}
                className="flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                {lang === 'tr' ? 'CV İndir' : 'Download CV'}
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
              <h3 className="text-2xl font-bold text-secondary-800 mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                {lang === 'tr' ? 'Mesaj Gönder' : 'Send Message'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Validation Errors */}
                {validationErrors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-red-800 font-medium mb-1">
                          {lang === 'tr' ? 'Lütfen aşağıdaki alanları doldurun:' : 'Please fill in the following fields:'}
                        </h4>
                        <ul className="text-red-700 text-sm space-y-1">
                          {validationErrors.map((error, index) => (
                            <li key={index}>• {error}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <p className="text-green-800 font-medium">
                        {lang === 'tr' 
                          ? '✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.'
                          : '✅ Your message has been sent successfully! I will get back to you soon.'
                        }
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <p className="text-red-800 font-medium">
                        {lang === 'tr' 
                          ? 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
                          : 'An error occurred while sending the message. Please try again.'
                        }
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    {t.contact.form.subject} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={t.contact.form.subjectPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, consent: !prev.consent }))}
                    className="mt-1 flex-shrink-0 transition-colors"
                  >
                    {formData.consent ? (
                      <CheckSquare className="w-5 h-5 text-primary" />
                    ) : (
                      <Square className="w-5 h-5 text-secondary-400 hover:text-primary" />
                    )}
                  </button>
                  <label className="text-sm text-secondary-600 leading-relaxed">
                    {lang === 'tr' ? (
                      <>
                        <span className="text-red-500">*</span> Kişisel verilerimin işlenmesine ve sizinle iletişim kurulması amacıyla kullanılmasına onay veriyorum. 
                        <span className="text-secondary-500"> (KVKK kapsamında)</span>
                      </>
                    ) : (
                      <>
                        <span className="text-red-500">*</span> I consent to the processing of my personal data and its use for communication purposes. 
                        <span className="text-secondary-500"> (GDPR compliance)</span>
                      </>
                    )}
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary-600 disabled:bg-secondary-300 text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t.contact.form.send}
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 via-white to-accent-50 rounded-2xl p-8 border border-primary-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              {lang === 'tr' ? 'Teşekkürler! 🙏' : 'Thank You! 🙏'}
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              {lang === 'tr' 
                ? 'Web sitemi ziyaret ettiğiniz için teşekkür ederim. Projelerinizde birlikte çalışma imkanı bulabilmek için mesajınızı sabırsızlıkla bekliyorum.'
                : 'Thank you for visiting my website. I look forward to your message to have the opportunity to work together on your projects.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 