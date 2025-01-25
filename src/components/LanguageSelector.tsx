import React, { useState } from 'react';
import i18n from 'i18next';
import { Globe } from 'lucide-react';

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
        <Globe size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button key={lang.code} onClick={() => changeLanguage(lang.code)} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};