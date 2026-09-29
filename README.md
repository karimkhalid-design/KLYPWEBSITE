# KLYP website

The official marketing website for KLYP, built with Next.js, TypeScript, and CSS. The project exports as a static site and is ready for Vercel.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
```

The static production export is written to `out/`.

## Release configuration

Update `src/config/klyp.ts` when publishing a new installer. The same values power the navbar, homepage, final call to action, and download page.

Required launch values:

- `installerUrl`
- `installerFilename`
- `installerSize`
- `discordUrl`
- `siteUrl` (or set `NEXT_PUBLIC_SITE_URL` in Vercel)

Update `src/data/changelog.ts` when adding a release.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel.
3. Keep the detected framework as **Next.js**.
4. Set `NEXT_PUBLIC_SITE_URL` to the final public URL.
5. Deploy. Vercel will run `pnpm build` and publish the static export.

No server, database, or private environment variables are required.
