# AI Portfolio — Architecture & Technical Document

## Overview

This portfolio is a premium, production-quality static website built for an AI Full-Stack Engineer. It follows the **Obsidian Luxe** design philosophy — a luxurious black-and-gold editorial aesthetic inspired by high-end watchmaking and premium software products like Linear and Stripe.

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | React 19 + Wouter | Client-side routing, component architecture |
| Styling | Tailwind CSS 4 + custom tokens | Utility-first styling with OKLCH color system |
| Animation | Framer Motion | Scroll reveals, hover effects, page transitions |
| UI Components | shadcn/ui + Radix UI | Accessible primitives (tooltips, dialogs, etc.) |
| Icons | Lucide React | Consistent, lightweight iconography |
| Build | Vite 7 | Fast HMR, optimized production builds |
| Language | TypeScript | Type-safe component props and data models |
| Font | Space Grotesk + Inter + JetBrains Mono | Display, body, and monospace typefaces |

## Design System

### Color Philosophy

The entire interface uses a strict **gold-on-black** palette with no deviations:

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `oklch(0.07 0.005 285)` | Page background (matte black) |
| `--foreground` | `oklch(0.95 0.005 285)` | Primary text (white) |
| `--gold` | `oklch(0.77 0.15 85)` | Metallic gold accent (#D4AF37) |
| `--gold-soft` | `oklch(0.72 0.14 82)` | Secondary gold (#C9A227) |
| `--surface` | `oklch(0.12 0.005 285)` | Secondary surface (#141414) |
| `--muted-foreground` | `oklch(0.7 0.01 285)` | Body text (light gray) |

### Typography Hierarchy

| Element | Font | Weight | Size Range |
|---------|------|--------|------------|
| Hero headings | Space Grotesk | 700 | 4rem–5.5rem |
| Section headings | Space Grotesk | 700 | 2.5rem–3rem |
| Body text | Inter | 400 | 1rem–1.125rem |
| Labels/badges | JetBrains Mono | 400 | 0.75rem–0.875rem |
| Section labels | Space Grotesk | 500 | 0.875rem (uppercase, tracked) |

### Layout Paradigm

Sections use an **asymmetric editorial grid** with a 5-column system. Content blocks rarely span the full width, creating a sense of curated negative space. The homepage hero and final CTA use centered alignment as deliberate exceptions.

## File Structure

```
client/
├── index.html                    # HTML shell with Google Fonts
├── public/                       # Static config files only (favicon, robots.txt)
│   └── __manus__/                # Analytics/debug utilities
├── src/
│   ├── App.tsx                   # Root app: routes, theme provider, error boundary
│   ├── main.tsx                  # React entry point
│   ├── index.css                 # Global styles, Tailwind tokens, custom utilities
│   │
│   ├── pages/                    # Page-level components (routes)
│   │   ├── Home.tsx              # Hero, About, Skills, Projects, Experience, CTA
│   │   ├── Projects.tsx          # Project listing with asymmetric grid
│   │   ├── ProjectDetail.tsx     # Dynamic project detail (screenshots, features, etc.)
│   │   ├── About.tsx             # Professional summary, experience, education
│   │   ├── Resume.tsx            # Download/preview resume with stats
│   │   ├── Contact.tsx           # Contact channels and availability
│   │   └── NotFound.tsx          # 404 page
│   │
│   ├── components/               # Shared UI components
│   │   ├── Layout.tsx            # Navbar, Footer, ScrollToTop wrapper
│   │   ├── ScrollReveal.tsx      # Scroll-triggered fade-in animations
│   │   ├── SectionTitle.tsx      # Reusable section header with gold divider
│   │   ├── ProjectCard.tsx       # Project card with hover lift and glow
│   │   ├── TechBadge.tsx         # Technology badge component
│   │   ├── AnimatedCard.tsx      # Generic animated card + SkillCard
│   │   ├── Timeline.tsx          # Experience timeline component
│   │   └── ui/                   # shadcn/ui primitives (button, tooltip, sonner, etc.)
│   │
│   ├── data/                     # All content data (single source of truth)
│   │   ├── projects.ts           # Project objects (add new projects here only)
│   │   └── site.ts               # Skills, experiences, education, nav links
│   │
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces (Project, Experience, etc.)
│   │
│   ├── contexts/
│   │   └── ThemeContext.tsx       # Dark mode theme provider
│   │
│   ├── hooks/                    # Custom React hooks
│   ├── lib/
│   │   └── utils.ts              # Utility functions (cn helper)
│   │
│   └── const.ts                  # Shared constants
│
server/                           # Express placeholder (not used in static mode)
shared/                           # Shared constants placeholder
ideas.md                          # Design brainstorm document
```

## Data-Driven Architecture

### Core Principle

All project content is stored in `client/src/data/projects.ts`. The UI automatically renders projects from this file. Adding a new project requires:

1. Adding the project object to `data/projects.ts`
2. Uploading any new images via `manus-upload-file --webdev`
3. No component modifications needed

### Project Data Model

```typescript
interface Project {
  id: string;                    // Unique identifier
  slug: string;                  // URL-friendly route param
  featured: boolean;             // Whether to show on homepage
  title: string;                 // Display title
  shortDescription: string;      // Card/description text
  longDescription: string;       // Full project description
  technologies: string[];        // Tech stack badges
  coverImage: string;            // Hero cover image URL
  screenshots: string[];         // Gallery images
  github: string;                // Repository URL
  liveDemo?: string;             // Optional live demo URL
  demoVideo?: string;            // Optional MP4 video URL
  architectureImage?: string;    // System architecture diagram
  features: string[];            // Key features list
  challenges: {                  // Engineering challenges
    challenge: string;
    solution: string;
  }[];
  lessonsLearned: string[];      // Professional reflections
  aiWorkflow?: string[];         // AI pipeline steps
}
```

### Site Data Model

```typescript
interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

interface Skill {
  name: string;
  level: number;    // 0-100 percentage
  category: string; // Languages, Frontend, Backend, etc.
  icon: string;     // Icon identifier
}
```

## Routing Architecture

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Full landing page with all sections |
| `/projects` | Projects | Grid listing of all projects |
| `/projects/:slug` | ProjectDetail | Dynamic detail page per project |
| `/about` | About | Professional profile and history |
| `/resume` | Resume | Download/preview with stats |
| `/contact` | Contact | Contact channels and availability |

## Animation System

All animations use Framer Motion with consistent timing:

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| Fade-in-up (scroll) | 600ms | `[0.23, 1, 0.32, 1]` | Element enters viewport |
| Stagger children | 80ms/item | — | Parent triggers |
| Hover lift | 300ms | ease-out | Mouse hover |
| Card glow | 300ms | ease-out | Mouse hover |
| Page entrance | 700ms | `[0.23, 1, 0.32, 1]` | Route change |
| Progress bar fill | 1000ms | `[0.23, 1, 0.32, 1]` | Element enters viewport |
| Nav indicator | spring (300/30) | — | Active page change |

## Key Design Patterns

### Glassmorphism Navigation

The navbar uses a transparent background at the top, transitioning to a glassmorphic blurred surface on scroll:

```
transparent → glass (backdrop-blur + semi-transparent bg + subtle border)
```

### Gold Glow Effect

Interactive elements (cards, buttons) feature a CSS box-shadow glow on hover using the gold color at low opacity:

```
glow-gold: 0 0 20px gold(0.15), 0 0 40px gold(0.05)
glow-gold-strong: 0 0 30px gold(0.25), 0 0 60px gold(0.1)
```

### Gradient Text

The word "Intelligent" in the hero uses a multi-stop gold gradient:

```
linear-gradient(135deg, gold, light-gold, soft-gold)
```

### Shimmer Animation

CTA buttons feature a continuous shimmer effect using background-position animation:

```
@keyframes shimmer: 0% → 200% background-position, 3s loop
```

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | < 640px | Single column, stacked layout |
| Tablet | 640px–1024px | 2-column grids where applicable |
| Desktop | 1024px–1280px | Full asymmetric layouts |
| Ultra-wide | > 1280px | Max-width 1280px container |

## Accessibility Features

- ARIA labels on all interactive elements
- Keyboard navigation support (focus states visible)
- Semantic HTML structure (header, main, footer, section, nav)
- Proper heading hierarchy (h1 → h2 → h3)
- Color contrast meets WCAG AA standards
- Focus rings visible on interactive elements

## Performance Considerations

- Lazy loading on project images (`loading="lazy"`)
- Eager loading only on hero background (above-fold)
- Font preconnect to Google Fonts CDN
- Custom scrollbar styling (minimal visual weight)
- CSS transitions over keyframes where possible (interruptible)
- Minimal JavaScript bundle (no heavy libraries beyond Framer Motion)

## Adding New Content

### New Project

1. Edit `client/src/data/projects.ts` — add a new object to the `projects` array
2. Upload images: `manus-upload-file --webdev path/to/image.png`
3. Use the returned URL in the `coverImage`, `screenshots`, and `architectureImage` fields
4. The project automatically appears on `/projects` and `/` (if `featured: true`)

### New Skill

1. Edit `client/src/data/site.ts` — add to the `skills` array
2. Specify `name`, `level` (0-100), and `category`
3. New categories auto-appear as section headers

### New Experience Entry

1. Edit `client/src/data/site.ts` — add to the `experiences` array
2. The timeline on the homepage and about page auto-update

## Future Scalability

The architecture supports:

- **Unlimited projects** — just add to `projects.ts`
- **Dynamic routing** — `/:slug` pattern handles any new project
- **Component reuse** — all sections use shared components
- **Type safety** — TypeScript interfaces enforce data structure
- **Theme consistency** — CSS custom properties ensure global color/font consistency
- **Animation consistency** — ScrollReveal and AnimatedCard handle all motion patterns
