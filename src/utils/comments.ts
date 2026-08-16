import { SITE } from '../site.config';

export type GiscusConfig = typeof SITE.comments;

export function hasCompleteGiscusConfig(config: GiscusConfig = SITE.comments) {
  return Boolean(
    config.enabled &&
      config.provider === 'giscus' &&
      config.repo &&
      config.repoId &&
      config.category &&
      config.categoryId,
  );
}
