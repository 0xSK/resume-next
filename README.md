# resume-next

A multi-layout resume site built with Next.js 12, TypeScript, Tailwind CSS, and SCSS.

## Stack

- Next.js 12.2
- React 18
- TypeScript
- Tailwind CSS
- SCSS modules and global styles

## Local Development

This project is pinned to the legacy toolchain it was originally built with.

```bash
nvm use
yarn install --frozen-lockfile
yarn dev
```

Open `http://localhost:3000` to view the site.

## Available Scripts

```bash
yarn dev
yarn build
yarn start
yarn lint
```

## Project Structure

- `pages/`: resume layouts and the index page that lists them
- `components/`: reusable resume building blocks
- `data/`: structured resume content
- `styles/`: font definitions and shared styling
- `public/`: static assets and local font files

## Notes

- Node version is pinned in [`.nvmrc`](./.nvmrc)
- Yarn Classic is the intended package manager for this repo
