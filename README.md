# webcv

Alejandro Castaño's security architecture portfolio — a single-page site built with TanStack Start.

## Development

Requires [Bun](https://bun.com).

```sh
git clone <this-repository-url>
cd webcv
bun install
bun run dev
```

## Build

```sh
bun run build
```

Static output is generated in `dist/client/`, ready to be served by any static host (the site is statically prerendered — no server runtime is required).

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/client/` to GitHub Pages.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
