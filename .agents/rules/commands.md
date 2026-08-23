# Commands

Package manager: **Bun** (`bun.lock` is the lockfile — don't add `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`).

```sh
bun install       # install dependencies
bun run dev       # dev server -> http://localhost:5173/webcv/ (note the base path)
bun run build     # production build; static output in dist/client/ (dist/server/ is not deployed)
bun run preview   # serve the production build locally
bun run lint      # eslint .
bun run format    # prettier --write .
```

There is no test suite configured in this project (no `test` script, no Vitest/Jest dependency). Don't assume one exists.
