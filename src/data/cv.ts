import type { Locale } from '../i18n/utils';

import cvEs from '../assets/CV/Nelson_CV_Spanish.pdf?url';
import cvEn from '../assets/CV/Nelson_CV_English.pdf?url';

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
