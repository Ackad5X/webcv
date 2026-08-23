# Images and assets

- Vendor logos and certification badges live in `src/assets/` as **real binary files**, imported directly (`import zscaler from "@/assets/zscaler.png"`) and used as the resulting URL string. Vite bundles and hashes them normally.
- **History**: this project came from Lovable, which stored images as `*.png.asset.json` pointer files referencing Lovable's own CDN (`/__l5e/assets-v1/...`). That only worked inside Lovable's hosting; it was replaced with real files when migrating to GitHub Pages. **Never reintroduce a pointer/CDN-based asset scheme** — any new image must be committed as a real file under `src/assets/` (or `public/` for things like the favicon or `robots.txt`).
- The Netskope certification badges intentionally use the `_no_bg` (background-removed) variants, referenced from `src/content/certBadges.ts`. The original `Netskope_*.png` files (with background) are still in `src/assets/` unused, kept only for reference — they are not the ones to link.
