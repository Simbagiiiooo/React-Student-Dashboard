import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TranslationNL from './locales/en/translationEN.json';
import TranslationEN from './locales/nl/translationNL.json';

// the translation
const resources = {
  en: {
    translation: TranslationEN,
  },
  nl: {
    translation: TranslationNL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;