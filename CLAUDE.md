# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio landing page for Guilherme Santos — Senior Data Analyst specializing in integrations and process automation. The full PRD is at [.llm/prd.md](.llm/prd.md).

**Status:** Early development. No build tooling exists yet — tech stack is to be decided (see PRD §7.1).

## Tech Stack Decision

Two options defined in the PRD:

| | Option A (Fast) | Option B (More control) |
|---|---|---|
| Stack | HTML + CSS + Vanilla JS | React + Tailwind CSS |
| Deploy | GitHub Pages | Vercel or Netlify |
| Domain | guilherme-ssanto.github.io | guilhermesantos.dev |

Icons from `devicons.dev` CDN + Lucide. Google Analytics 4 is Phase 2.

## Commands

Commands depend on the chosen stack. Once set up, typical commands will be:

**Option A (Vanilla):**
```bash
# No build step — open index.html directly or use a local server
npx serve .          # or: python -m http.server 8080
```

**Option B (React + Tailwind):**
```bash
npm install
npm run dev          # local dev server
npm run build        # production build
npm run preview      # preview production build
```

## Page Architecture

Single-page app with 8 anchor sections — no routing needed:

```
#hero         Name, title, tagline, CTAs (Ver Projetos → GitHub/LinkedIn)
#sobre        Bio with automation/integrations focus + profile photo
#experiencia  Vertical timeline — TM1 block (3 promotions) + Oli + HUBi + Fibra + SPDM
#formacao     UFF Statistics degree (completed 2025) + FMU Admin (on hold)
#skills       Categorized tech stack grid with devicons
#projetos     2-column card grid of 4–6 GitHub projects
#cursos       Certifications list
#contato      Social links + CTA
```

Fixed navbar with smooth scroll and active section indicator. Dynamic footer year.

## Design System

**Colors (dark theme — primary):**
```
#0D1117  background primary
#161B22  background secondary
#00D9A6  accent (green — tech/automation)
#0A66C2  accent secondary (LinkedIn blue)
#E6EDF3  text primary
#8B949E  text secondary
#30363D  borders
```

**Typography:**
- Headings: Space Grotesk or Inter, weight 700
- Body: Inter, weight 400/500
- Tags/code: JetBrains Mono, weight 400

**Key UI components:**
- TM1 career block with "3 promoções em 5 anos" badge — this is the primary competitive differentiator to highlight visually
- Skill badges with devicons hover showing proficiency level
- Project cards with hover elevation effect
- `aria-label` required on icon-only elements (WCAG AA)

## Content Constraints

Several content items in the PRD are marked as pending from Guilherme (professional photo, Oli experience description, GitHub project selection, certifications list). When implementing sections with placeholder content, use clearly marked TODO comments so items are easy to locate.

## Deployment

Target: GitHub Pages at `guilherme-ssanto.github.io/lp_profile` (or custom domain in Phase 2). The repo remote is `git@github.com:guilherme-ssanto/lp_profile.git`.
