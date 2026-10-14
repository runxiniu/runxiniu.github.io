# Runxi Niu — independent academic website

This is a standalone static website. It needs no Jekyll, Ruby, npm, theme, or build step. All fonts are system fonts; all styles, scripts, and images are local. The only JavaScript controls the mobile navigation. Page content and navigation remain available when JavaScript is disabled.

## Preview

From this directory:

```sh
./serve.sh
```

Open <http://127.0.0.1:4001/>. Python 3 is used only as a local HTTP server, not to build or host the published website. To use another port, run `./serve.sh 8080`. Stop the server with Ctrl+C.

## Edit

- `index.html`: About, biography, research fields, and contact email.
- `research/index.html`: paper titles, abstracts, coauthors, and SSRN link.
- `teaching/index.html`: six separate teaching appointments.
- `assets/styles.css`: all typography, spacing, colors, and responsive layout.
- `assets/site.js`: mobile menu behavior.
- `assets/portrait-placeholder.svg`: current profile placeholder. To use a real portrait, put the image in `assets/` and update the image source and alt text in `index.html`.

Edit the HTML text directly and refresh the browser. Shared navigation and footer markup appear in all three HTML files; update all three when changing those items. The year in the footer is plain editable text.

## GitHub Pages

Copy the **contents of this directory**, including `.github/` and `.nojekyll`, into the root of your own GitHub repository. Do not upload the parent al-folio project, `backups/`, or the local dependency folders.

Choose either:

1. In Settings → Pages, select **Deploy from a branch**, then `main` and `/ (root)`. No build is needed.
2. Select **GitHub Actions**, then run **Deploy static website** manually under Actions. The included workflow only uploads static files.

Links use relative paths, so both a root domain and a repository subpath work without editing a base URL. A custom domain can be configured later in GitHub Pages. No deployment has been performed.

## Original version and backup

The original al-folio project remains in the parent directory and can be started there with `./bin/serve-local` on port 4000. Its only configuration adjustment excludes `standalone/` and `backups/` from the old Jekyll build.

A snapshot made before that adjustment is saved at:

`../backups/runxi-al-folio-backup-2026-10-14.tar.gz`

The archive contains the original source, lockfiles, and rendered `_site/`, without reinstallable `vendor/` and `node_modules/` dependencies. A SHA-256 checksum is stored alongside it. To restore, extract into a new directory; the archive contains an `al-folio-original/` folder. The original source retains its upstream license and acknowledgements.
