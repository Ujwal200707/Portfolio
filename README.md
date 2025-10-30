# Deevi Ujwal - Full Stack Developer Portfolio

A polished, responsive student portfolio website built with React and Material-UI (MUI), showcasing skills, projects, and achievements with clean UX, accessible components, and thoughtful content.

## 🚀 Live Demo

[View Portfolio](https://deeviujwal.dev) (Deployed on Netlify/Vercel)

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **UI Library:** Material-UI (MUI) v7
- **Routing:** React Router DOM
- **Icons:** MUI Icons
- **Styling:** MUI Theme System (Light/Dark modes)
- **Deployment:** Netlify/Vercel/GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppBar.jsx       # Navigation bar with theme toggle
│   ├── ContactForm.jsx  # Contact form with validation
│   ├── ProjectCard.jsx  # Project showcase card
│   ├── SectionHeader.jsx # Section titles
│   └── SkillChipGroup.jsx # Skills display
├── data/                # Config-driven content
│   ├── achievements.js  # Certifications and awards
│   ├── experience.js    # Work and education history
│   ├── projects.js      # Project portfolio
│   ├── skills.js        # Technical skills
│   └── testimonials.js  # Client/peer testimonials
├── hooks/               # Custom React hooks
│   └── useThemeMode.js  # Theme persistence
├── pages/               # Route components
│   └── Home.jsx         # Main portfolio page
├── sections/            # Portfolio sections
│   ├── About.jsx        # Personal introduction
│   ├── Achievements.jsx # Certifications
│   ├── Blog.jsx         # Writing samples
│   ├── Contact.jsx      # Contact information
│   ├── Experience.jsx   # Timeline of experience
│   ├── Footer.jsx       # Site footer
│   ├── Hero.jsx         # Landing section
│   ├── Projects.jsx     # Project showcase
│   ├── Skills.jsx       # Technical skills
│   └── Testimonials.jsx # Testimonials
├── theme/               # MUI theme configuration
│   └── index.js         # Light/dark theme setup
├── App.jsx              # Main app component
└── main.jsx             # App entry point
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deeviujwal/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ✨ Features

- **Responsive Design:** Mobile-first approach, tested at 360px, 768px, 1280px
- **Dark/Light Theme:** Persistent theme toggle with localStorage
- **Accessibility:** WCAG compliant with semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized:** Meta tags, Open Graph, structured data
- **Performance:** Optimized bundle size, lazy loading, efficient rendering
- **Interactive Elements:** Filterable projects, validated contact form, smooth scrolling
- **Config-Driven:** Easy content updates via JSON-like data files

## 🎯 Key Sections

1. **Hero:** Name, role, value proposition, CTA buttons
2. **About:** Bio, interests, avatar, quick facts
3. **Skills:** Categorized technical skills with progress indicators
4. **Projects:** Filterable project cards with demos and repos
5. **Experience:** Timeline of work and education
6. **Achievements:** Certifications and awards
7. **Testimonials:** Client and peer feedback
8. **Blog:** Writing samples and articles
9. **Contact:** Validated form with social links

## 📊 Performance Metrics

- **Lighthouse Score:** Performance ≥80, Accessibility ≥90
- **Bundle Size:** Optimized with code splitting
- **Load Time:** Fast initial page load
- **SEO:** Proper meta tags and structured content

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure domain and SSL

### Vercel

1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Deevi Ujwal - [deeviujwal@example.com](mailto:deeviujwal@example.com)

Project Link: [https://github.com/deeviujwal/portfolio](https://github.com/deeviujwal/portfolio)
