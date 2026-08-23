# Architecture

- **Framework**: TanStack Start (file-based routing via `@tanstack/react-router`) on top of Vite. One real route: `src/routes/index.tsx`, plus the shell `src/routes/__root.tsx` (head/meta, error boundary, not-found). `src/routes/routeTree.gen.ts` is generated — don't hand-edit it.
- **`vite.config.ts`**: the plugin configuration is intentionally explicit (`tsConfigPaths`, `@tailwindcss/vite`, `tanstackStart` with prerender enabled, `@vitejs/plugin-react`). Don't wrap this again in an external package that hides the plugins (see `.agents/rules/deployment.md`).
- **`@` alias** → `src/` (defined in `tsconfig.json`, resolved by `vite-tsconfig-paths`).
- **UI**: Tailwind CSS v4 + shadcn/ui ("new-york" style, see `components.json`) + Radix primitives under `src/components/ui/`. Those `ui/` components are shadcn-generated — treat them as vendored; to add a new one, follow the existing pattern instead of hand-rewriting variants.
- **Content**: copy and data live in `src/content/*.ts` (`site.ts`, `certifications.ts`, `certBadges.ts`) as typed data; components render from there instead of hardcoding copy.
- **Bilingual (en/es)**: the `L = Record<"en"|"es", string>` type in `src/content/site.ts` plus `useLanguage()`/`LanguageProvider` (`src/lib/language.tsx`) resolve the active language (persisted in `localStorage`, no per-language routes).
- **Page composition**: `src/routes/index.tsx` mounts `SiteNav`, `Hero`, `FeaturedProjects`, `AllProjects`, `Certifications`, `Interests`, `SiteFooter` inside `LanguageProvider`.
- **`src/start.ts` / `src/server.ts`**: Nitro server entry plus CSRF/error-page middleware. They get built but aren't used in production since the site is served statically from GitHub Pages (see `.agents/rules/deployment.md`) — don't build logic the deployed site depends on there.
