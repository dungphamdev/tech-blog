import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LANGUAGE, type Language, localizedPath } from './i18n';

export type BlogPost = CollectionEntry<'blog'>;

export function isProduction() {
  return import.meta.env.PROD;
}

export function postSlug(post: BlogPost) {
  return post.id
    .replace(/\/(en|vi)(\.(md|mdx))?$/i, '')
    .replace(/(^|\/)index(\.(md|mdx))?$/i, '')
    .replace(/\.(md|mdx)$/i, '')
    .replace(/\/$/, '');
}

export function postUrl(post: BlogPost) {
  return localizedPath(post.data.lang, `/blog/${postSlug(post)}`);
}

export async function getAllPosts(language?: Language) {
  const posts = await getCollection('blog', ({ data }) => !isProduction() || !data.draft);
  return posts
    .filter((post) => !language || post.data.lang === language)
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export async function getDefaultLanguagePosts() {
  return getAllPosts(DEFAULT_LANGUAGE);
}

export async function getTranslations(post: BlogPost) {
  const posts = await getAllPosts();
  return posts.filter((candidate) => candidate.data.translationKey === post.data.translationKey);
}

export async function getTranslation(post: BlogPost, language: Language) {
  const translations = await getTranslations(post);
  return translations.find((candidate) => candidate.data.lang === language);
}

export async function getAlternateUrls(post: BlogPost) {
  const translations = await getTranslations(post);
  return Object.fromEntries(translations.map((translation) => [translation.data.lang, postUrl(translation)])) as Partial<
    Record<Language, string>
  >;
}

export function localizedBlogPath(language: Language) {
  return localizedPath(language, '/blog');
}

export function formatDate(date: Date, language: Language = DEFAULT_LANGUAGE) {
  return new Intl.DateTimeFormat(language, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function getAllTags(posts: BlogPost[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));
}

export function getAllCategories(posts: BlogPost[]) {
  return [...new Set(posts.map((post) => post.data.category).filter(Boolean) as string[])].sort((a, b) =>
    a.localeCompare(b),
  );
}
