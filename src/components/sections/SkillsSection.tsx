'use client';

import { motion } from 'framer-motion';
import { Code, Database, BarChart3, Users, Brain, Target } from 'lucide-react';

import { Language, useTranslation } from '@/lib/i18n'

interface SkillsSectionProps {
  lang: Language
}

export default function SkillsSection({ lang }: SkillsSectionProps) {
  const t = useTranslation(lang);
  
  const skillCategories = [
    {
      title: t.skills.categories.programming,
      icon: Code,
      color: 'bg-blue-100 text-blue-600',
      skills: t.skills.data.programming
    },
    {
      title: t.skills.categories.tools,
      icon: BarChart3,
      color: 'bg-purple-100 text-purple-600',
      skills: t.skills.data.tools
    },
    {
      title: t.skills.categories.databases,
      icon: Database,
      color: 'bg-green-100 text-green-600',
      skills: t.skills.data.databases
    },
    {
      title: t.skills.categories.dataAnalysis,
      icon: Target,
      color: 'bg-orange-100 text-orange-600',
      skills: t.skills.data.dataAnalysis
    },
    {
      title: t.skills.categories.management,
      icon: Users,
      color: 'bg-red-100 text-red-600',
      skills: t.skills.data.management
    },
    {
      title: t.skills.categories.softSkills,
      icon: Brain,
      color: 'bg-indigo-100 text-indigo-600',
      skills: t.skills.data.softSkills
    }
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
            <span className="text-gradient">{t.skills.title}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-secondary-600 mt-6 max-w-2xl mx-auto">
            {t.skills.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-secondary-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-secondary-700">
                          {skill.name}
                        </span>
                        <span className="text-xs text-secondary-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.5 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 via-white to-accent-50 rounded-2xl p-8 border border-primary-100"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              {lang === 'tr' ? 'Sürekli Gelişim' : 'Continuous Development'}
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              {lang === 'tr' 
                ? 'Teknoloji dünyasının hızla değişen doğasına ayak uydurmak için sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Her proje, yeni bir öğrenme fırsatı ve büyüme alanı olarak görüyorum.'
                : 'I focus on continuous learning and self-improvement to keep up with the rapidly changing nature of the technology world. I see every project as a new learning opportunity and growth area.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 