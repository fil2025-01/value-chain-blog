---
title: "How to Add a New Post"
description: "Frontmatter fields and conventions for writing new blog entries."
pubDate: 2026-07-21
tags: ["meta", "guide"]
---

Every post lives in `data/blog/<slug>.md`. The filename becomes the URL slug,
e.g. this file renders at `/blog/how-to-add-a-post`.

## Frontmatter fields

- `title` (required) — post title
- `description` (required) — short summary, used for previews and RSS
- `pubDate` (required) — publish date, e.g. `2026-07-21`
- `updatedDate` (optional) — last-updated date
- `tags` (optional) — array of strings
- `draft` (optional) — set `true` to hide the post from the list, feed, and
  sitemap while it's a work in progress

## Body

Standard markdown: headings, lists, code blocks, links, and images all work
as expected.

```js
console.log("code blocks are syntax highlighted");
```
