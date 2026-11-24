# Marion Plagge Web Site

## Before every thing

You need to have nodejs installed on you computer. Then on the root of this project:

```bash
# to install dependencies
npm i
```

## Developing

To run the project on you local computer and do changes and check them on you computer:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Deploy on On Github pages

To check the site on [github pages](https://karianpour.github.io/marionplagge/zouttherapie)

```bash
npm run deploy-on-gh-pages
```

## Deploy on server

<!-- Modified by Remko with assistance from OpenAI Codex on 2026-11-24 to document staging and production deployment on waterlanders. -->

From the project root on `ellen`, build the production site.

```bash
npm run build
```

You can preview the production build with `npm run preview`.

### Upload the build

Preview the upload from `ellen` to the dedicated transfer directory on
`waterlanders`. The `--delete` option removes files from that directory that are
absent from the current build.

```bash
rsync -avn --delete --itemize-changes ./build/ \
  remko@waterlanders.cluebox.org:~/www/marionplagge-deploy/
```

Review the `*deleting` lines. If the changes look right, upload from `ellen`.

```bash
rsync -av --delete --progress ./build/ \
  remko@waterlanders.cluebox.org:~/www/marionplagge-deploy/
```

### Deploy to staging

Log into `waterlanders` as `remko` and preview the copy to the staging site's
document root. The staging document root is treated as a mirror of the build,
so files absent from the build are listed for deletion.

```bash
sudo rsync -a --no-owner --no-group --no-perms \
  --dry-run --delete --itemize-changes \
  "$HOME/www/marionplagge-deploy/" \
  /srv/www/staging.marionplagge.nl/public_html/
```

Review the `*deleting` lines. If they contain only files you expect to remove,
copy the build to staging on `waterlanders`.

```bash
sudo rsync -a --no-owner --no-group --no-perms \
  --delete --itemize-changes \
  "$HOME/www/marionplagge-deploy/" \
  /srv/www/staging.marionplagge.nl/public_html/
```

Open [the staging site](https://staging.marionplagge.nl/) and check the pages
you changed. If you make more edits, build and upload again, then retest staging.

### Deploy to the live site

After verifying staging, use the same uploaded build on `waterlanders` to
preview the copy to the live document root.

```bash
sudo rsync -a --no-owner --no-group --no-perms \
  --dry-run --itemize-changes \
  "$HOME/www/marionplagge-deploy/" \
  /srv/www/marionplagge.nl/public_html/
```

Review the listed changes. The source's trailing slash puts `index.html`
directly in `public_html/`. The command keeps existing destination ownership
and permissions and leaves files that are present only on the live server.

If the preview looks right, run the copy on `waterlanders`.

```bash
sudo rsync -a --no-owner --no-group --no-perms \
  --itemize-changes \
  "$HOME/www/marionplagge-deploy/" \
  /srv/www/marionplagge.nl/public_html/
```

Open the live site and check the pages you changed.
