# Tech Blog

A personal coding blog.

Live site: [https://dungphamdev.github.io/tech-blog/](https://dungphamdev.github.io/tech-blog/)

## Purpose

This project is my personal place to write about coding, software design, .NET, cloud, DevOps, databases, and things I learn while building software.

It is also a small experiment with two spec-driven development tools:

- Spec Kit
- OpenSpec

The goal is to compare how each tool helps plan, build, verify, and archive changes.

## Deployment

The blog is deployed to GitHub Pages with GitHub Actions.

Production URL:

[https://dungphamdev.github.io/tech-blog/](https://dungphamdev.github.io/tech-blog/)


## Project Structure

```text
/
|-- .github/
|-- openspec/
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

## Local Commands

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Check the project:

```bash
npm run check
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
