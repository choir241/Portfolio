# Portfolio Website Documentation

## Overview
This documents all changes made to Richard Choi's developer portfolio website.

---

## Phase 1: Quick Wins (Initial Improvements)

### Accessibility
- Added **skip-to-content link** as first focusable element
- Added semantic landmarks: `role="banner"`, `role="contentinfo"`
- Added meta description for SEO in index.html
- Added `aria-label` attributes to all buttons for screen readers

### Content & Copy
- **Hero**: Added bio paragraph and improved tagline
- **Experience**: Created timeline section with work history
- **Projects**: Added descriptions, tech stack badges, Live Demo + Source Code links
- **Skills**: Created categorized tech section (Frontend, Backend, Tools)
- Changed all copy from "React Developer" → "Full-stack Developer"

### Design
- Added **Outfit font** from Google Fonts
- Added smooth scroll behavior to HTML
- Improved mobile spacing and layout consistency

---

## Phase 2: Redesign (Major Changes)

### New Section Order
1. Hero
2. Experience
3. Projects
4. About Me
5. (Skills - removed)
6. Blog
7. Streams
8. Testimonials
9. Contact
10. Footer

### New/Redesigned Sections

#### Hero
- Gradient background with blur effects
- Profile image with glow effect
- "View My Work" button (scrolls to projects)
- Resume download button
- Social links
- Dark mode toggle (top-right)

#### Experience Timeline
- Left-aligned vertical timeline (better for mobile)
- Shows: Supreme Nomads → Postman → Dallas Software Developers → Appwrite

#### Projects Grid
- 2-column grid layout (instead of carousel)
- Each project shows: logo, name, description, tech badges, Live Demo + Source Code links
- Postman added as project (removed Real Estate Beast)

#### About Me
- Bio paragraph mentioning Postman work
- TCNJ education (class of 2018)
- Ewing Township, NJ location
- Community impact stats grid

#### Blog/Technical Writing
- Static 3-column grid showing articles
- Links to Appwrite docs + personal blog

#### Streams & Testimonials
- Converted from carousels to static grids
- 3 featured streams instead of infinite scroll
- 2-column testimonial layout

---

## Data Updates

### Experience
```
1. Supreme Nomads - Full-Stack Engineer (Nov 2024 - Present)
2. Postman - Full-Stack Engineer (Contract) (Jan 2026 - Apr 2026)
3. Dallas Software Developers - Full Stack Developer (2025)
4. Appwrite - Technical Writer (Nov 2024 - Present)
```

### Projects
```
1. Postman - API Development and Automation
2. Gridiron Survivor - NFL pool management
3. Appwrite - Documentation
4. Yes Chef - Restaurant kitchen management
```

### Education
- TCNJ (The College of New Jersey)
- Bachelor of Arts
- Class of 2018

### Location
- Ewing Township, NJ

### Stats
- Contributions: 3,778+
- Calls: 80+
- Tech Meetups: 50+
- Conferences: 7+

---

## Files Modified

### Core Files
- `index.html` - Meta tags, Google Fonts
- `src/pages/Index.tsx` - Section order
- `src/index.css` - Fonts, dark mode variables, smooth scroll
- `src/App.tsx` - ThemeProvider wrapper
- `tailwind.config.ts` - Dark mode config

### Components
- `src/components/Hero.tsx` - Redesigned hero
- `src/components/Experience.tsx` - Timeline layout
- `src/components/ProjectGrid.tsx` - Grid layout with tech badges
- `src/components/About.tsx` - Bio + education + stats
- `src/components/Blog.tsx` - Static article cards
- `src/components/Streams.tsx` - Static video grid
- `src/components/Testimonials.tsx` - Static testimonial grid
- `src/components/ContactCards.tsx` - Dark mode support
- `src/components/Footer.tsx` - Semantic role
- `src/components/ThemeToggle.tsx` - **NEW**

### Data
- `src/static/Labels.ts` - All copy, projects, experience, education

### Assets
- `public/Richard_Choi_Resume.pdf` - Resume for download

---

## Running the Project

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build
```

---

## Notes
- Resume PDF needs to be in `public/` folder for download to work
- Dark mode uses next-themes with system preference detection
- All sections are mobile-responsive with Tailwind breakpoints
