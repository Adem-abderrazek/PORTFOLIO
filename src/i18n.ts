import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translations from JSON files
  .use(LanguageDetector) // Detect user language automatically
  .use(initReactI18next) // Pass i18n instance to React
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode (remove in production)
    interpolation: {
      escapeValue: false, // React handles escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Translation file path
    },
  });

export default i18n;
