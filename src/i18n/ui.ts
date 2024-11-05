import english from '@/i18n/en.json';
import spanish from '@/i18n/es.json';

export const languages = {
  en: "English",
  es: "Spanish",
};

export const defaultLang = "es";

export const ui = {
  en: english,
  es: spanish,
} as const;

export const LANGUAGES: Record<
  string,
  { code: string; name: string; }
> = {
  en: {
    code: 'en',
    name: 'English',
  },
  es: {
    code: 'es',
    name: 'Español',
  },
};

export const showDefaultLang = false;

export const routes = {
  es: {
    'aviso-legal': 'aviso-legal',
    privacidad: 'privacidad',
    cookies: 'cookies',
  },
  en: {
    'aviso-legal': 'legal-notice',
    privacidad: 'privacy',
    cookies: 'cookies',
  },
};