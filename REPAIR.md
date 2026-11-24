# Recover the live site changes

<!-- Added by Remko with assistance from OpenAI Codex on 2026-11-24 to document the site recovery objective. -->

The live site on `waterlanders.cluebox.org` is the reference for this repair.
Remko made edits directly on the server. Recover those edits into the Svelte
repository at `~/www/marionplagge/` so future deployments preserve them.

## Recovery steps

1. Identify the directory serving the live site, the deployment workflow, and
   the deployed Git revision if it can be established. Inspect the server
   read-only and capture the current differences before deploying again.
2. Compare the server with the corresponding repository revision. If the server
   serves generated files, compare them with a local build of that revision and
   trace the relevant differences back to the Svelte source or static assets.
3. Apply the recovered edits to the local repository and verify that the local
   build reproduces the affected pages and behavior. Record the changes and
   checks here, then use the established GitHub and deployment workflow.

## Status

Remko identified the live document root as
`waterlanders:/srv/www/marionplagge.nl/public_html`.
Server inspection, comparison, and identification of the deployed revision
are pending.

- 2026-11-24 — Remko, with assistance from OpenAI Codex, recovered the live
  contact email into the Svelte contact page. A local `npm run build` and
  comparison with the downloaded live HTML verified the visible email and
  both page descriptions. The rebuilt email link uses the bare address.

- 2026-11-24 — Remko, with assistance from OpenAI Codex, recovered the
  Over Marion biography and the 2020 training credit from the downloaded
  live HTML. A temporary production build matched all seven live HTML
  pages after normalizing whitespace, generated Svelte references, comments,
  and the email link's display name. The old build's `noindex` tag came
  from staging mode.
