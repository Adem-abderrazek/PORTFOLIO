import React from 'react'
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();
    
    return (
    <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="relative group">
        <div className="w-64 h-64 md:w-70 md:h-70 rounded-full mx-auto overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-2xl">
          <img
            src="../public/profile.jpg"
            alt="Profile"
            className="object-cover"
          />
        </div>
      </div>
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
          {t('personalInfo.name')}
        </h1>
        <h2 className="text-2xl md:text-3xl font-light">
          {t('personalInfo.title')}
        </h2>
        <p className="text-lg opacity-90">
          {t('personalInfo.bio')}
        </p>
        <div className="flex gap-4">
          <a href="#contact">
            <button className="px-8 py-3 rounded-lg border-2 border-accent-primary hover:bg-accent-primary hover:text-white transition-colors duration-300">
              {t('aboutMe.contactButton')}
            </button>
          </a>
          <button className="px-8 py-3 rounded-lg border-2 border-accent-primary hover:bg-accent-primary hover:text-white transition-colors duration-300">
            <Download className="inline-block mr-2 w-5 h-5" />
            {t('aboutMe.downloadCVButton')}
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutMe