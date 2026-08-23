# Development environment

- The repository lives on a Windows drive mounted under WSL (`/mnt/c/...`). Vite's file watcher (inotify) often **doesn't detect** edits made while `bun run dev` is already running. If changes don't show up in the browser after editing code, restart the dev server (stop the process and re-run `bun run dev`) before assuming there's a bug.
- Bun may not be preinstalled in a fresh shell; it's expected at `~/.bun/bin` (add to `PATH`) or wherever the developer installed it.
