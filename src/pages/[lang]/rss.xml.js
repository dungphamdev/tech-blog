import rss from '@astrojs/rss';
import { SITE } from '../../site.config';
import { LANGUAGES, isLanguage } from '../../utils/i18n';
import { getAllPosts, postUrl } from '../../utils/posts';

export function getStaticPaths() {
  return LANGUAGES.map((lang) => ({ params: { lang } }));
}

export async function GET(context) {
  const lang = isLanguage(context.params.lang) ? context.params.lang : 'en';
  const posts = await getAllPosts(lang);

  return rss({
    title: `${SITE.title} (${lang})`,
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
