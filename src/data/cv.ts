import type { Locale } from '../i18n/utils';

import cvEs from '../assets/CV/CV_Nelson_English.pdf?url';
import cvEn from '../assets/CV/CV_Nelson_Spanish.pdf?url';

export const cvFiles: Record<Locale, string> = {
  es: cvEs,
  en: cvEn,
};

export function getCvUrl(locale: Locale): string {
  return cvFiles[locale];
}

export function getCvFilename(locale: Locale): string {
  return locale === 'es' ? 'CV-Nelson-ES.pdf' : 'CV-Nelson-EN.pdf';
}
