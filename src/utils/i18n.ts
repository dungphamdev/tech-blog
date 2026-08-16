import { withBase } from './paths';

export const LANGUAGES = ['en', 'vi'] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'en';

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  vi: 'Tieng Viet',
};

export function isLanguage(value: string | undefined): value is Language {
  return LANGUAGES.includes(value as Language);
}

export function alternateLanguage(language: Language): Language {
  return language === 'en' ? 'vi' : 'en';
}

export function localizedPath(language: Language, path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return withBase(`/${language}${normalizedPath === '/' ? '' : normalizedPath}`);
}

export function defaultLanguagePath(path = '/') {
  return localizedPath(DEFAULT_LANGUAGE, path);
}
