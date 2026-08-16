import type { BlogPost } from './posts';

export function getRelatedPosts(currentPost: BlogPost, posts: BlogPost[], limit = 3) {
  return posts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => ({
      post,
      score: post.data.tags.filter((tag) => currentPost.data.tags.includes(tag)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.publishedAt.getTime() - a.post.data.publishedAt.getTime())
    .slice(0, limit)
    .map(({ post }) => post);
}
