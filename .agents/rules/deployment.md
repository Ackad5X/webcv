# GitHub Pages deployment (critical)

This site is published on **GitHub Pages** as a static site, via `.github/workflows/deploy.yml`, at `https://<user>.github.io/webcv/`. Every change must preserve this compatibility. GitHub Pages **only serves static files** — it does not run any server.

Rules that must not be broken:

- Static prerendering must stay enabled in `vite.config.ts` (`tanstackStart({ prerender: { enabled: true, crawlLinks: true } })`). This is what generates the static HTML in `dist/client/`. Don't remove or disable it.
- Don't add functionality that depends on a server at request time: no `createServerFn`/`.server()` invoked from routes, no API endpoints, no database calls, no server-side auth, etc. None of that works on GitHub Pages.
- `base: "/webcv/"` in `vite.config.ts` must stay consistent with the repo name. Any internal link or asset reference must respect that base path: use the router's `<Link>`/`to` (it resolves this automatically) or `import.meta.env.BASE_URL` for manual paths — never hardcode a path starting with `/` for anything internal (links, favicon, etc.).
- If new routes are added, they must be prerenderable (content known at build time, not dependent on per-request data). Don't add routes that only make sense with a server running.
- `dist/server/` is built but **not deployed** — only `dist/client/` ships to Pages. Don't build anything that assumes `dist/server/` will be available in production.
- The workflow copies `dist/client/index.html` to `dist/client/404.html` (the standard GitHub Pages SPA fallback trick). If the workflow is touched, keep that step.
- Don't reintroduce an external CDN-style asset scheme (see `.agents/rules/assets.md`) — GitHub Pages has no backing app server that could proxy to a private CDN.
- Don't re-add the `@lovable.dev/vite-tanstack-config` wrapper or any equivalent dependency that hides/rewrites the Vite config — the config must stay explicit and auditable in `vite.config.ts` (see `.agents/rules/architecture.md`).

Before considering a task that touches routing, build, or assets done: verify with `bun run build` that it still produces static HTML in `dist/client/` without depending on `dist/server/`.
