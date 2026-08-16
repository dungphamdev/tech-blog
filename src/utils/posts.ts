import { getCollection, type CollectionEntry } from 'astro:content';
import { withBase } from './paths';

export type BlogPost = CollectionEntry<'blog'>;

export function isProduction() {
  return import.meta.env.PROD;
}

export function postSlug(post: BlogPost) {
  return post.id.replace(/(^|\/)index\.(md|mdx)$/i, '').replace(/\.(md|mdx)$/i, '').replace(/\/$/, '');
}

export function postUrl(post: BlogPost) {
  return withBase(`/blog/${postSlug(post)}`);
}

export async function getAllPosts() {
  const posts = await getCollection('blog', ({ data }) => !isProduction() || !data.draft);
  return posts.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
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
