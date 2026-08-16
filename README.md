# Tech Blog

A static personal technical blog built with Astro, TypeScript, Tailwind CSS, and MDX.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Writing Posts

Create MDX articles in `src/content/blog/`. Required frontmatter:

```yaml
title: "Understanding async/await in .NET"
description: "A practical description for SEO and listings."
publishedAt: 2026-08-15
draft: false
tags:
  - dotnet
```

Optional fields are `updatedAt`, `category`, `coverImage`, `github`, and `series`.

Draft posts are visible in development and excluded from production builds.

## Deployment

This project deploys to GitHub Pages from the `master` branch using GitHub Actions.

### Repository Setup

1. Open the repository in GitHub.
2. Go to `Settings > Pages`.
3. Set the build source to `GitHub Actions`.
4. Use `master` as the protected release branch for public deployments.

The first deployment workflow will fail with `Get Pages site failed` until Pages is enabled in
repository settings. This is expected if `Settings > Pages` has not been configured yet.

### Validation and Release Flow

- Pull requests targeting `master` run `npm run check` and `npm run build`.
- Pushes to `master` run the same validation and then publish the generated `dist/` artifact.
- Failed validation blocks a change from being treated as release-ready.
- Failed deployment attempts leave the last successful GitHub Pages site available.
- GitHub-hosted runners now default JavaScript actions to Node 24. The actions used in this
  workflow are current and compatible with that runner change.

### Production URL

The site is configured as a GitHub Pages project site:

`https://dungpt.github.io/tech-blog/`

If the repository owner or repository name changes, update:

- `astro.config.mjs`
- `src/site.config.ts`
- `public/robots.txt`

## Project Structure

```text
/
|-- .github/
|   `-- workflows/
|       `-- deploy.yml
|-- public/
|-- src/
|   |-- components/
|   |-- content/
|   |-- layouts/
|   |-- pages/
|   |-- styles/
|   |-- utils/
|   `-- site.config.ts
|-- astro.config.mjs
`-- package.json
```

## Notes

- The site is configured for a GitHub Pages project path under `/tech-blog/`.
- Public article content is version controlled and generated statically.
- Internal site links are base-path aware for GitHub Pages deployment.
