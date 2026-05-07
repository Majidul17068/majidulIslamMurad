# Md. Majidul Islam — Portfolio

Personal portfolio for **Md. Majidul Islam**, AI/ML Engineer & Architect.

🌐 Live: [majidulislam.com.bd](https://majidulislam.com.bd)

## What's inside

- **Hero** — intro, highlight chips, profile, code panel
- **About** — engineering philosophy
- **Featured Work** — 6 production AI projects (personakit OSS, Empathika, HR Policy Chatbot, Bank Reconciliation AI, Sales Forecasting, NHS Medicine Parser)
- **Production Experience** — full role-by-role breakdown
- **Research & Credentials** — IEEE publication, training, courses, mentorship
- **Core Architecture** — 4 expertise areas + education timeline
- **Tech Stack** — auto-scrolling marquee across AI Tools / Frameworks / Edge AI / MLOps
- **Leadership** — mentor + PMI member with linked certificate
- **Contact** — direct email CTA

## Stack

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS 4** (with `@theme` block)
- **Framer Motion** (`motion/react`) for entrance + scroll animations
- **lucide-react** for icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:3001
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # tsc --noEmit
```

## Deploy

Auto-deploys to Vercel on push to `main`. Build command: `npm run build`. Output directory: `dist/`.

## Project structure

```
src/
├── App.tsx                  # Bento grid composition
├── main.tsx                 # React entry
├── index.css                # Tailwind + theme tokens
├── data/
│   └── portfolioData.ts     # Single source of truth for content
├── components/
│   ├── Header.tsx           # Floating pill navbar
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx         # Featured Work
│   ├── Experience.tsx       # Production + other experience
│   ├── Research.tsx         # Publications, training, courses
│   ├── Expertise.tsx        # Core Architecture + Education
│   ├── TechStack.tsx        # Marquee
│   ├── Leadership.tsx       # Mentor + Certs
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts
public/
├── profile.png
├── cv.pdf
├── mentor-1.jpg, mentor-2.jpg
├── pmi-certificate.pdf
└── logo.png
```

To update content: edit `src/data/portfolioData.ts` — components consume from there.

---

© Md. Majidul Islam
