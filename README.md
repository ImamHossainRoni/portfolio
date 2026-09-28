# Imam Hossain Roni: Portfolio

Personal portfolio website of **Imam Hossain Roni**, a Software Engineer based in Frankfurt am Main, Germany, focused on scalable backend systems and AI-powered applications.

🌐 **Live site:** [imamhossainroni.me](https://imamhossainroni.me)

## Pages

- **Home:** intro, focus areas, selected work and core stack
- **Projects:** work across AI & knowledge systems, energy & battery storage, and SaaS & enterprise software
- **CV:** experience, education, skills, awards and languages

## Tech stack

- [Astro](https://astro.build) (static site generator)
- [Tailwind CSS](https://tailwindcss.com) + [daisyUI](https://daisyui.com)
- Deployed to **GitHub Pages** with GitHub Actions

## Run locally

Requires Node.js 18+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # start dev server at http://localhost:4321
pnpm build      # build the static site into ./dist
pnpm preview    # preview the production build
```

## Project structure

```
src/
├── components/   # Sidebar, header, footer, cards, CV timeline
├── layouts/      # Base page layout
├── pages/        # index (home), projects, cv
└── config.ts     # Site title and description
public/           # Profile photo, favicon, CNAME, robots.txt
```

Most content lives directly in `src/pages/index.astro`, `src/pages/projects.astro` and `src/pages/cv.astro`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The custom domain `imamhossainroni.me` is set in the repository's **Settings → Pages** and in `public/CNAME`.

## Contact

- Email: [imamhossainroni.de@gmail.com](mailto:imamhossainroni.de@gmail.com)
- LinkedIn: [linkedin.com/in/imamhossainroni](https://www.linkedin.com/in/imamhossainroni)
- GitHub: [github.com/ImamHossainRoni](https://github.com/ImamHossainRoni)
- Stack Overflow: [imam-hossain-roni](https://stackoverflow.com/users/6342245/imam-hossain-roni)

## Credits

Based on the [Astrofy](https://github.com/manuelernestog/astrofy) template by Manuel Ernesto Garcia, used under the MIT License (see [LICENSE](LICENSE)).
