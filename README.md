# Value Chain Blog

A markdown blog built with [Astro](https://astro.build). Posts live in
`data/blog/` as plain markdown files — see [.docs/writing-posts.md](.docs/writing-posts.md)
for the frontmatter schema and conventions.

## Local development

```
pnpm install
pnpm dev
```

Then open [http://localhost:4321](http://localhost:4321).

Other commands:

- `pnpm build` — build the static site to `dist/`
- `pnpm preview` — serve the built `dist/` output locally
- `pnpm check` — type-check `.astro` files and content frontmatter
- `pnpm exec astro dev stop` — stop a dev server left running in the background
  (Astro's dev server detaches and keeps running until stopped)

## Project structure

- `data/blog/` — blog posts (markdown + frontmatter)
- `src/content.config.ts` — content collection schema/loader for `data/blog/`
- `src/pages/` — routes (post list, post detail, RSS feed)
- `src/layouts/`, `src/components/` — shared layout and header/footer

## Notes

`astro.config.mjs` has a placeholder `site` URL — update it once hosting/domain
is decided (it feeds the RSS feed and sitemap).
