import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from '../assets/i18n/en.json';
import ES from '../assets/i18n/es.json';

export const DEFAULT_LANG = "es";

export const resources = {
  en: {
    translation: EN
  },
  es: {
    translation: ES
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: DEFAULT_LANG,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;