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

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds pull requests and deploys pushes to `main` through GitHub Pages. Replace placeholder values in `src/site.config.ts`, `astro.config.mjs`, and `public/robots.txt` before publishing.

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
