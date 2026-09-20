import es from './locales/es.json';
import en from './locales/en.json';

const translations = { es, en };

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof es;

export function useTranslations(locale: Locale) {
  const t = translations[locale];

  return {
    t,
    translate: (path: string) => {
      return path.split('.').reduce((obj: any, key) => obj?.[key], t) || path;
    },
  };
}
