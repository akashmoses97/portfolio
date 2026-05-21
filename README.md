# akashmoses.com — Portfolio

Personal portfolio website for Akash Moses Guttedar.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion · Syne + Space Grotesk fonts

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel (pointed to akashmoses.com)

1. Push this repo to GitHub (`akashmoses97/portfolio`)
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo
3. Framework auto-detected as **Next.js** — keep all defaults
4. Click **Deploy**

**Custom domain:**
- In Vercel project → Settings → Domains → Add `akashmoses.com`
- At your DNS registrar, add these records:
  ```
  A     @   76.76.21.21
  CNAME www  cname.vercel-dns.com
  ```

## Resume

Place your resume PDF at `public/resume.pdf` — the navbar "Resume ↗" button links to it.

## Sections

| Section | Component | Notes |
|---------|-----------|-------|
| Hero | `components/Hero.tsx` | Floating orbs, gradient name, stats row |
| About | `components/About.tsx` | Bio + animated metric cards |
| Skills | `components/Skills.tsx` | 7 color-coded categories with pills |
| Experience | `components/Experience.tsx` | Accordion timeline (SDE II → SDE I → Intern) + Education |
| Projects | `components/Projects.tsx` | HireSight, News Rec, Cache Policy, CUDA Cholesky |
| Contact | `components/Contact.tsx` | Clickable links with copy-to-clipboard |
| Footer | `components/Footer.tsx` | Minimal with social icons |
