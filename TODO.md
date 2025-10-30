# TODO: Build Student Portfolio (React + MUI)

## 1. Install Dependencies
- [x] Install react-router-dom for routing
- [x] Install @mui/icons-material for icons

## 2. Create Folder Structure
- [x] Create src/components/ directory
- [x] Create src/sections/ directory
- [x] Create src/data/ directory
- [x] Create src/theme/ directory
- [x] Create src/pages/ directory
- [x] Create src/hooks/ directory

## 3. Theme Configuration
- [x] Create src/theme/index.js with MUI createTheme (light/dark modes, palette, typography, spacing)

## 4. Data Files
- [x] Create src/data/skills.js (grouped by category)
- [x] Create src/data/projects.js (at least 3 entries with title, summary, tags, role, links)
- [x] Create src/data/testimonials.js (optional, cards with source, role, quote)
- [x] Create src/data/experience.js (timeline with role, org, dates, impact bullets)
- [x] Create src/data/achievements.js (badges/list with issuing org, date)

## 5. Custom Hook
- [x] Create src/hooks/useThemeMode.js (theme toggle with localStorage persistence)

## 6. Reusable Components
- [x] Create src/components/SectionHeader.jsx
- [x] Create src/components/ProjectCard.jsx
- [x] Create src/components/SkillChipGroup.jsx
- [x] Create src/components/ContactForm.jsx

## 7. Section Components
- [x] Create src/sections/Hero.jsx (name, role, value statement, CTA buttons)
- [x] Create src/sections/About.jsx (bio, interests, photo/avatar, quick facts)
- [x] Create src/sections/Skills.jsx (grouped categories with Chips/Progress)
- [x] Create src/sections/Projects.jsx (cards with filter chips)
- [x] Create src/sections/Experience.jsx (timeline/accordion)
- [x] Create src/sections/Achievements.jsx (badges/list)
- [x] Create src/sections/Testimonials.jsx (optional, cards/carousel)
- [x] Create src/sections/Blog.jsx (optional, teaser list)
- [x] Create src/sections/Contact.jsx (form with validation, social links)
- [x] Create src/sections/Footer.jsx (copyright, quick links, last updated)

## 8. Pages
- [x] Create src/pages/Home.jsx (wraps all sections)
- [ ] Create separate pages if needed for routing (e.g., ProjectsPage.jsx, ContactPage.jsx)

## 9. Update App.jsx
- [x] Replace App.jsx with portfolio app (ThemeProvider, Router, AppBar navigation)

## 10. Update index.html
- [x] Add SEO meta tags (title, description, Open Graph, favicon)

## 11. Implement Features
- [x] Theme toggle in AppBar with persistence
- [x] Project filter chips (All/React/ML) without reload
- [x] Contact form validation (required fields, email) with Snackbar feedback
- [x] Download CV button (link to PDF in public/)

## 12. Content and Quality
- [x] Populate data files with skimmable, measurable content
- [x] Ensure responsiveness (mobile-first, test at 360px, 768px, 1280px)
- [x] Ensure accessibility (semantic landmarks, alt text, keyboard focus, contrast)
- [ ] Test Lighthouse (Performance ≥80, Accessibility ≥90)

## 13. Deploy and Deliverables
- [ ] Deploy to Netlify/Vercel/GitHub Pages
- [x] Update README.md (how to run, tech used, folder structure, screenshots)
- [x] Write 1-page reflection (design choices, component reuse, accessibility, improvements)
