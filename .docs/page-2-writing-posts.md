# Writing Posts

Posts are markdown files in `data/blog/`. Add a new file there to publish a
new post — no code changes needed.

## Frontmatter

```yaml
---
title: "Post Title"
description: "One-sentence summary, used in the post list and RSS feed."
pubDate: 2026-07-22
updatedDate: 2026-07-23   # optional
tags: ["example"]         # optional
draft: false              # optional, set true to hide the post
---
```

`title`, `description`, and `pubDate` are required (enforced by the schema in
`src/content.config.ts`).

## Slugs

The filename (minus `.md`) becomes the URL: `data/blog/my-post.md` renders at
`/blog/my-post/`.

## Local development

```
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output locally
```
