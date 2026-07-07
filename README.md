# Catalyx Website

This is the official website for **Catalyx** — a platform building the digital foundation for product-based businesses.

The project is a **Next.js 15** application using **TypeScript**, **Tailwind CSS v4**, and the **App Router**.

---

## What Has Been Built

### Pages Completed
| Page | Route | Status |
|------|-------|--------|
| About | `/about` | ✅ Complete |

### Shared Layout Components (used on every page)
| Component | Location | Description |
|-----------|----------|-------------|
| `Header` | `src/components/layout/Header.tsx` | Sticky top nav with logo, nav links (active underline), and "Get started" CTA button |
| `Footer` | `src/components/layout/Footer.tsx` | Footer with Catalyx logo, 3 nav columns (Product / Company / Support), divider, and social icons |

### About Page Sections (in order)
| Component | Location | Description |
|-----------|----------|-------------|
| `AboutHero` | `src/components/about/AboutHero.tsx` | Hero split layout — heading + body text left, blue illustration right |
| `BeforeCommerce` | `src/components/about/BeforeCommerce.tsx` | Centered heading with 3 body paragraphs + 4-step horizontal flow card (Product → Digital Identity → Digital Assets → Commerce) |
| `OurMission` | `src/components/about/OurMission.tsx` | Two-column layout — icon left, mission statement with blue left border right |
| `VisionBanner` | `src/components/about/VisionBanner.tsx` | Full-width blue gradient banner with dot grid, "OUR VISION" badge, and vision statement |
| `HowDifferent` | `src/components/about/HowDifferent.tsx` | Centered heading + 2×2 card grid (All-in-One / Built Around / Less Manual / Ready to Grow) |
| `MeetTeamBanner` | `src/components/about/MeetTeamBanner.tsx` | Dark navy banner with dot grid, heading, description, and "View Team →" button |

### Reusable UI Components
| Component | Location | Description |
|-----------|----------|-------------|
| `Button` | `src/components/ui/Button.tsx` | Variant-based button (primary / outline / outline-white), sizes sm/md/lg |
| `Card` | `src/components/ui/Card.tsx` | White card with border, optional hover shadow, padding variants |
| `SectionHeading` | `src/components/ui/SectionHeading.tsx` | Reusable section heading with optional tag pill, subtitle, and left/center alignment |

---

## Folder Structure

```
catalyx_website/
├── Frontend/                        # Next.js application root
│   ├── public/                      # Static assets (images, SVGs)
│   │   ├── logo.svg                 # Full Catalyx wordmark (header)
│   │   ├── Footer-Logo.svg          # Catalyx icon + wordmark (footer)
│   │   ├── about-hero.png.png       # About page hero illustration
│   │   ├── mission-icon.svg         # Mission section target icon
│   │   ├── vision-mesh.png          # Vision banner background texture
│   │   └── images/
│   │       ├── commerce/            # 4 step illustrations for BeforeCommerce
│   │       │   ├── product.png
│   │       │   ├── identity.png
│   │       │   ├── digital-assets.png
│   │       │   └── storefronts.png
│   │       ├── icons/               # Feature icons for HowDifferent cards
│   │       │   ├── diff-all-in-one.svg
│   │       │   ├── diff-built-around.svg
│   │       │   ├── diff-less-manual.svg
│   │       │   └── diff-ready-grow.svg
│   │       └── team/                # Team member photos (empty — for team page)
│   ├── src/
│   │   ├── app/                     # Next.js App Router pages
│   │   │   ├── layout.tsx           # Root layout (wraps all pages with Header + Footer)
│   │   │   ├── page.tsx             # Home page (to be built)
│   │   │   ├── globals.css          # Global styles, CSS tokens, .container, .section
│   │   │   ├── about/
│   │   │   │   └── page.tsx         # About page (complete)
│   │   │   ├── team/
│   │   │   │   └── page.tsx         # Team page (to be built)
│   │   │   └── contact/
│   │   │       └── page.tsx         # Contact page (to be built)
│   │   ├── components/
│   │   │   ├── layout/              # Shared layout (Header, Footer)
│   │   │   ├── about/               # About page section components
│   │   │   ├── home/                # Home page components (empty — to be built)
│   │   │   ├── team/                # Team page components (empty — to be built)
│   │   │   ├── contact/             # Contact page components (empty — to be built)
│   │   │   └── ui/                  # Reusable UI primitives (Button, Card, SectionHeading)
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── utils/
│   │       └── cn.ts                # Tailwind class merging utility
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   ├── postcss.config.mjs
│   ├── package.json
│   └── .gitignore
└── README.md                        # This file
```

---

## Design Tokens (globals.css)

All shared values live in `src/app/globals.css` as CSS variables:

```css
--color-primary: #2563eb        /* Brand blue */
--color-navy: #0f172a           /* Dark sections */
--color-text: #111827           /* Primary text */
--color-text-muted: #6b7280     /* Secondary text */
--color-border: #e5e7eb         /* Borders */
--color-bg-section: #f8fafc     /* Light section backgrounds */
--section-padding-y: 96px       /* Vertical section spacing */
--container-max-w: 1200px       /* Max content width */
--container-px: 24px            /* Container horizontal padding */
```

Use `.section` and `.container` utility classes for consistent page layout.

---

## How to Use Header & Footer on New Pages

The `Header` and `Footer` are already wired into `src/app/layout.tsx` — they render automatically on every page. You do not need to import them manually.

When building a new page (e.g. Team or Contact):
1. Create `src/app/team/page.tsx`
2. Create components in `src/components/team/`
3. Import and compose them in the page file
4. Use `.section` + `.container` classes for consistent spacing

---

## Getting Started Locally

```bash
# 1. Navigate to the Frontend folder
cd Frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 | React framework (App Router) |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | v4 | Utility-first styling |
| ESLint | 9 | Linting |

---

## Pages Left to Build

- **Home** (`/`) — Landing page
- **Team** (`/team`) — Team members grid
- **Contact** (`/contact`) — Contact form

All pages should use the existing `Header` and `Footer` (automatic via layout), the design tokens from `globals.css`, and the reusable UI components from `src/components/ui/`.
