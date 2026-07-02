import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './i18n/en';
import pt from './i18n/pt';

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('portfolio_lang') : null;

i18n.use(initReactI18next).init({
  lng: savedLang || 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'pt-BR'],
  resources: {
    en: { translation: en },
    'pt-BR': { translation: pt }
  },
  interpolation: { escapeValue: false }
});

export default i18n;
