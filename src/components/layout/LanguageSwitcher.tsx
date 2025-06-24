'use client'

import { useState } from 'react'
import { languages, Language, useTranslation } from '@/lib/i18n'

interface LanguageSwitcherProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

export default function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslation(currentLang)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-200 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">
            {currentLang === 'tr' ? '🇹🇷' : '🇺🇸'}
          </span>
          <div className="text-left">
            <div className="text-sm font-medium">
              {t.sidebar.languageSwitch[currentLang]}
            </div>
            <div className="text-xs text-white/70">
              {currentLang === 'tr' ? 'Dil seçin' : 'Select language'}
            </div>
          </div>
        </div>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50 backdrop-blur-sm">
          {Object.entries(languages).map(([code]) => (
            <button
              key={code}
              onClick={() => {
                onLanguageChange(code as Language)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary-50 transition-colors duration-200 ${
                currentLang === code ? 'bg-primary-100 text-primary-700 border-l-4 border-primary-500' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              <span className="text-xl">
                {code === 'tr' ? '🇹🇷' : '🇺🇸'}
              </span>
              <div>
                <div className="text-sm font-medium">{t.sidebar.languageSwitch[code as Language]}</div>
                <div className="text-xs text-gray-500">
                  {code === 'tr' ? 'Türkiye' : 'United States'}
                </div>
              </div>
              {currentLang === code && (
                <svg className="w-4 h-4 ml-auto text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 