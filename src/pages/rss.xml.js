import rss from '@astrojs/rss';
import { SITE } from '../site.config';
import { getAllPosts, postUrl } from '../utils/posts';
import { DEFAULT_LANGUAGE } from '../utils/i18n';

export async function GET(context) {
  const posts = await getAllPosts(DEFAULT_LANGUAGE);

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: postUrl(post),
    })),
  });
}
