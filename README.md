# 🎨 Tej's Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://teja9391.github.io/Porfolio/)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)

**A modern, responsive, and interactive portfolio showcasing projects, skills, and contact information**

[🌐 Live Demo](https://teja9391.github.io/Porfolio/) | [📁 Repository](https://github.com/TEJA9391/Porfolio) | [👨‍💻 GitHub Profile](https://github.com/TEJA9391)

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🎬 Interactive Components](#-interactive-components)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Design Philosophy](#-design-philosophy)
- [💼 Featured Projects](#-featured-projects)
- [🌐 Deployment](#-deployment)
- [🎯 Future Enhancements](#-future-enhancements)
- [📝 Changelog](#-changelog)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 About Me](#-about-me)

---

## ✨ Features

### 🎯 Core Functionality

#### 1. **Interactive Circular Contact Modal**
The crown jewel of this portfolio - a unique contact system that stands out:

- **🔴 Prominent Close Button**: Large × symbol in red (#ef4444) for intuitive closing
- **📱 Smart Positioning**: Automatically centers on screen regardless of device size
- **🎨 Circular Icon Layout**: 8 social media platforms arranged in perfect circle (90px radius)
- **✨ Staggered Animations**: Each icon pops in with 60ms delay (0.06s)
- **🎭 Transform Effect**: Icons start from center and spring outward
- **💨 Backdrop Blur**: 4px blur with dark overlay for focus
- **📲 Mobile Optimized**: Responsive sizing from 280px to 220px

#### 2. **Flying Button Animation**
Watch as the Contact button transforms:

- **🚀 Smooth Flight Path**: Bezier curve animation to modal center
- **🔴 Color Morph**: Transitions from theme color to red (#ef4444)
- **📏 Size Growth**: Scales from button size to 50px circle
- **🔗→× Icon Switch**: Link emoji morphs into close symbol
- **⏱️ 500ms Duration**: Perfectly timed with bouncy easing
- **📍 Precise Positioning**: Calculates exact screen center

#### 3. **3D Text Cube Animation**
Dynamic rotating text showcasing multiple facets:

- **🔄 Continuous Rotation**: 4-sided cube rotating on X-axis
- **💬 Multiple Roles**: "Teja", "Developer", "Student", "Creator"
- **🎨 Color Accent**: Blue highlighting for "ej" in "Teja"
- **⏰ 8s Cycle**: Smooth 2-second pauses on each face
- **📐 3D Perspective**: 1000px perspective for realistic depth

#### 4. **Theme System**
Seamless dark/light mode switching:

- **🌙 Dark Mode**: Deep blues (#0f1419) with accent lighting
- **☀️ Light Mode**: Warm cream (#FFF3EC) with dark accents
- **💾 Persistent**: Saves preference to localStorage
- **🎭 Smooth Transitions**: 0.4s color transitions
- **🔄 360° Icon Rotation**: Sun/Moon icon spins on toggle

### 📱 Responsive Design Excellence

#### Breakpoint Strategy
```css
Desktop  : > 980px  - Full layout, large components
Tablet   : ≤ 768px  - Adapted spacing, stacked layout
Mobile   : ≤ 560px  - Compact, thumb-friendly interface
```

#### Mobile Optimizations
- **Hamburger Menu**: Animated 3-line menu with smooth slide-in navigation
- **Touch Targets**: Minimum 44px × 44px for accessibility
- **Scaled Typography**: Responsive font sizes (44px → 28px headlines)
- **Adaptive Images**: Profile photo 220px → 150px on mobile
- **Flexible Grids**: 3-column → 1-column project grid

### 🌟 Visual Design

#### Modern Aesthetics
- **🎨 Glassmorphism**: Semi-transparent cards with backdrop blur
- **✨ Micro-interactions**: Hover effects, scale transforms
- **🌈 Gradient Accents**: Smooth linear gradients for buttons
- **💫 Shadow Depth**: Layered shadows for elevation
- **🔤 Professional Typography**: Inter font family throughout

#### Animation Library
- **fadeInUp**: 700ms entrance animations
- **socialEnter**: 420ms icon pop-ins
- **itemPop**: 420ms circular item animations
- **modalFadeIn**: 300ms modal appearance
- **overlayFadeIn**: 300ms backdrop blur
- **themeRotate**: 600ms theme toggle spin
- **slideInUp**: 400ms scroll-to-top button

---

## 🎬 Interactive Components

### Navigation Bar
```javascript
Features:
- Sticky positioning with blur backdrop
- Shrinking logo on scroll (36px → 30px)
- Active route highlighting
- Mobile hamburger menu
- Theme toggle with animation
```

### Hero Section
```javascript
Components:
- 3D rotating text cube (4 faces)
- Glassmorphic profile photo
- Pulsing background rings
- Download Resume button
- Animated Contact button
```

### Projects Grid
```javascript
Features:
- 3-column responsive grid
- Expandable cards (Learn More)
- Technology tags
- GitHub + Live Demo links
- Smooth hover animations
```

### Contact Form
```javascript
Validation:
- Real-time field validation
- Visual error/success states
- Character counter (1000 max)
- Email format validation
- FormSubmit.co integration
```

### Circular Modal
```javascript
Elements:
- 8 social platform icons
- Red close button (× symbol)
- Backdrop blur overlay
- Staggered entrance animations
- Perfect circular positioning
```

---

## 🛠️ Tech Stack

### Frontend Framework
```json
{
  "framework": "React 18.2.0",
  "build-tool": "Vite 5.0.8",
  "router": "React Router DOM 6.21.1",
  "language": "JavaScript (ES6+)"
}
```

### Styling
```css
/* Modern CSS Features Used */
- CSS Variables (Custom Properties)
- Flexbox & Grid Layouts
- CSS Animations & Transitions
- Backdrop Filter Effects
- Transform & Perspective 3D
- Media Queries (Responsive)
- Keyframe Animations
```

### Development Tools
```bash
- Node.js v18+
- npm/yarn package manager
- Git version control
- VS Code (recommended)
- GitHub Pages deployment
- GitHub Actions CI/CD
```

### Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

---

## 🚀 Quick Start

### Prerequisites Checklist
- ✅ Node.js v16.0.0 or higher
- ✅ npm v8.0.0 or higher (or yarn v1.22+)
- ✅ Git installed and configured
- ✅ Code editor (VS Code recommended)

### Installation Steps

#### 1️⃣ Clone Repository
```bash
# HTTPS
git clone https://github.com/TEJA9391/Porfolio.git

# SSH (if configured)
git clone git@github.com:TEJA9391/Porfolio.git

# Navigate to directory
cd Porfolio
```

#### 2️⃣ Install Dependencies
```bash
# Using npm
npm install

# Using yarn (alternative)
yarn install

# Using pnpm (alternative)
pnpm install
```

#### 3️⃣ Start Development Server
```bash
# Start local dev server
npm run dev

# Server will start at:
# http://localhost:5173
```

#### 4️⃣ Build for Production
```bash
# Create optimized build
npm run build

# Output directory: ./dist
```

#### 5️⃣ Preview Production Build
```bash
# Test production build locally
npm run preview

# Preview server:
# http://localhost:4173
```

### Development Commands

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter (if configured)
npm run lint

# Fix linting issues
npm run lint:fix
```

---

## 📁 Project Structure

```
Porfolio/
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── deploy.yml           # GitHub Pages deployment workflow
│
├── 📂 public/                   # Static assets (favicon, etc.)
│   └── resume.pdf               # Downloadable resume
│
├── 📂 src/
│   ├── 📂 assets/
│   │   └── tej.jpg              # Profile photo
│   │
│   ├── 📂 components/
│   │   ├── Navbar.jsx           # Navigation with theme toggle
│   │   ├── Footer.jsx           # Footer with social links
│   │   └── ScrollToTop.jsx      # Scroll to top button
│   │
│   ├── 📂 pages/
│   │   ├── Home.jsx             # Main landing page (projects, contact)
│   │   ├── About.jsx            # About page
│   │   ├── Blog.jsx             # Blog posts
│   │   ├── Speaking.jsx         # Speaking engagements
│   │   ├── Contact.jsx          # Contact page
│   │   └── StudentAware.jsx     # Project showcase page
│   │
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # App-specific styles
│   ├── index.css                # Global styles (1600+ lines)
│   └── main.jsx                 # React entry point
│
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Dependency lock file
├── vite.config.js               # Vite configuration
└── README.md                    # This file!
```

### Key Files Explained

#### `vite.config.js`
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Porfolio/',  // ⚠️ Must match repo name!
})
```

#### `.github/workflows/deploy.yml`
Automated deployment to GitHub Pages:
- Triggers on push to main
- Builds with Node.js 18
- Deploys to GitHub Pages
- Automatic URL generation

#### `src/index.css` (1600+ lines)
Complete styling system:
- CSS custom properties (theme variables)
- Responsive breakpoints
- All animations & keyframes
- Component-specific styles
- Utility classes

---

## 🎨 Design Philosophy

### Color Palette

#### Light Theme
```css
--bg: #FFF3EC          /* Warm cream background */
--text: #111           /* Near-black text */
--muted: #6b6570       /* Subdued purple-gray */
--accent: #232323      /* Dark accent */
```

#### Dark Theme
```css
--bg: #0f1419          /* Deep blue-black */
--text: #e8eaed        /* Off-white text */
--muted: #9ca3af       /* Cool gray */
--accent: #3b82f6      /* Vibrant blue */
```

#### Accent Colors
```css
/* Social Platform Colors */
WhatsApp: #25D366
Instagram: #E1306C
Twitter: #1DA1F2
LinkedIn: #0A66C2
GitHub: #333333
Discord: #5865F2
YouTube: #FF0000
Facebook: #1877F2

/* UI States */
Success: #22c55e
Error: #ef4444
Warning: #f59e0b
Info: #3b82f6
```

### Typography Scale
```css
Hero Headline: 44px (Desktop) → 28px (Mobile)
Section Titles: 24px
Body Text: 15px
Small Text: 13px
Button Text: 14px - 16px
Font Family: 'Inter', system-ui, sans-serif
```

### Spacing System
```css
Base Unit: 4px
Sizes: 8px, 12px, 16px, 20px, 24px, 32px, 36px, 48px
Container: max-width 1200px
Padding: 20px (mobile) → 36px (desktop)
```

### Animation Timing
```css
Fast: 200ms - 300ms   (Hover effects, toggles)
Medium: 400ms - 500ms  (Modal opens, transitions)
Slow: 700ms - 800ms    (Page entrance animations)
Duration: 2s - 8s      (Looping animations)
```

---

## 💼 Featured Projects

### 1. Emotion-Aware Study Assistant
**AI-powered learning companion with emotion detection**

```yaml
Description: Flask web app analyzing student engagement through 
             facial recognition and voice analysis
Technologies: Python, Flask, OpenCV, TensorFlow, DeepFace
Features:
  - Real-time emotion detection via webcam
  - Voice tone analysis
  - Personalized study recommendations
  - Session history dashboard
Links:
  GitHub: https://github.com/TEJA9391/emotion-aware-study-assistant
  Demo: https://teja9391.github.io/Emotion-Aware-Study-Assistant/
```

### 2. FixHub
**Service marketplace connecting users with local professionals**

```yaml
Description: Full-stack platform for finding and booking local 
             service providers (repairs, maintenance, etc.)
Technologies: React, Node.js, MongoDB, Firebase
Features:
  - Real-time messaging system
  - Provider ratings & reviews
  - Secure payment integration
  - Service booking management
  - GPS-based provider matching
Links:
  GitHub: https://github.com/TEJA9391/FixHub
  Demo: https://fix-eflsmdp7t-tejas-projects-8508e785.vercel.app
```

### 3. Sentiment Analysis Web App
**NLP-based text emotion classifier**

```yaml
Description: Web application for analyzing sentiment in text
             using natural language processing
Technologies: Python, NLP, Flask, React
Features:
  - Real-time sentiment analysis
  - Multi-language support
  - Sentiment visualization charts
  - Batch processing capability
  - REST API for integration
```

---

## 🌐 Deployment

### GitHub Pages Setup

#### 1. Enable GitHub Pages
```
Repository → Settings → Pages
Source: GitHub Actions
```

#### 2. Automatic Deployment
The workflow automatically:
1. Detects push to `main` branch
2. Installs Node.js 18
3. Runs `npm install`
4. Builds with `npm run build`
5. Deploys `/dist` to GitHub Pages

#### 3. Access Your Site
```
https://TEJA9391.github.io/Porfolio/
```

### Manual Deployment

```bash
# Build production bundle
npm run build

# Test locally
npm run preview

# Push to trigger deployment
git push origin main

# Monitor deployment
# GitHub → Actions tab
```

### Deployment Checklist
- ✅ `vite.config.js` base matches repo name
- ✅ GitHub Pages enabled in settings
- ✅ Workflow file in `.github/workflows/`
- ✅ No build errors
- ✅ Production build tested locally

---

## 🎯 Future Enhancements

### Planned Features
- [ ] **Blog CMS Integration**: Markdown-based blog with tags/categories
- [ ] **Dark Mode Auto-detect**: System preference detection
- [ ] **Project Filtering**: Filter by technology/category
- [ ] **Search Functionality**: Global site search
- [ ] **Analytics Dashboard**: Visitor stats with Google Analytics
- [ ] **Progressive Web App**: Offline support, installable
- [ ] **Internationalization**: Multi-language support (i18n)
- [ ] **Performance Metrics**: Lighthouse score optimization
- [ ] **Accessibility Audit**: WCAG 2.1 AA compliance
- [ ] **Testimonials Section**: Client/colleague recommendations

### Technical Improvements
- [ ] **TypeScript Migration**: Type-safe codebase
- [ ] **Unit Testing**: Jest + React Testing Library
- [ ] **E2E Testing**: Playwright/Cypress tests
- [ ] **Code Splitting**: Route-based lazy loading
- [ ] **Image Optimization**: WebP format, lazy loading
- [ ] **SEO Enhancement**: Meta tags, sitemap, robots.txt
- [ ] **Performance**: Virtual scrolling for project lists

---

## 📝 Changelog

### Version 2.0.0 - December 2024 🎉

#### ✨ New Features
- **Circular Contact Modal**: Complete redesign with circular icon layout
- **Flying Button Animation**: Contact button morphs and flies to modal
- **Backdrop Blur Overlay**: Improved focus with 4px blur
- **Close Button**: Large × symbol in red for intuitive closing
- **Mobile Responsiveness**: Adaptive sizing for all screen sizes

#### 🔧 Improvements
- **Modal Size**: Increased from 160px to 280px
- **Icon Radius**: Expanded from 75px to 90px for better spacing
- **Icon Size**: Increased to 44px for better visibility
- **Animation Speed**: Faster stagger (60ms vs 80ms)
- **Transform Effects**: Smoother entrance with scale animations

#### 🐛 Bug Fixes
- Fixed Emotion-Aware Study Assistant demo URL capitalization
- Updated FixHub project links (GitHub + Vercel)
- Corrected `vite.config.js` base path to match repository

#### 🎨 Design Updates
- Removed background ring for cleaner transparent design
- Enhanced hover effects with larger scale (1.15)
- Added rotation effect to close button (90° on hover)
- Improved shadow depths and transitions

### Version 1.0.0 - Initial Release
- Basic portfolio structure
- React + Vite setup
- GitHub Pages deployment
- Project showcase
- Contact form
- Theme toggle

---

## 🤝 Contributing

While this is a personal portfolio, I welcome:
- 🐛 Bug reports
- 💡 Feature suggestions
- 🎨 Design improvements
- 📝 Documentation updates

### How to Contribute

1. **Fork the repository**
```bash
# Click "Fork" button on GitHub
```

2. **Create feature branch**
```bash
git checkout -b feature/AmazingFeature
```

3. **Make your changes**
```bash
# Edit files, test locally
npm run dev
```

4. **Commit changes**
```bash
git commit -m 'Add some AmazingFeature'
```

5. **Push to branch**
```bash
git push origin feature/AmazingFeature
```

6. **Open Pull Request**
```
Go to GitHub and click "New Pull Request"
```

### Code Style Guidelines
- Use 2-space indentation
- Follow React best practices
- Write semantic CSS
- Comment complex logic
- Keep functions small and focused

---

## 📄 License

This project is open source and available under the **MIT License**.

```
MIT License

Copyright (c) 2024 Boora Raviteja (Tej)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[Full MIT License text...]
```

---

## 👨‍💻 About Me

### Boora Raviteja (Tej)
**B.Tech AIML Student | Full-Stack Developer | AI/ML Enthusiast**

I'm a passionate developer who loves building intelligent solutions that solve real-world problems. My expertise spans across:
- 🤖 Artificial Intelligence & Machine Learning
- 🌐 Full-Stack Web Development
- 🎨 UI/UX Design
- 💻 Python, JavaScript, React
- 🗄️ MongoDB, Firebase, SQL

### 🌐 Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-TEJA9391-black?style=flat-square&logo=github)](https://github.com/TEJA9391)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Boora%20Raviteja-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/boora-raviteja-a856a9352)
[![Twitter](https://img.shields.io/badge/Twitter-@Tejr__tej-1DA1F2?style=flat-square&logo=twitter)](https://x.com/Tejr_tej)
[![Instagram](https://img.shields.io/badge/Instagram-@tejr__tej-E1306C?style=flat-square&logo=instagram)](https://instagram.com/tejr_tej)
[![Discord](https://img.shields.io/badge/Discord-TEJA9391-5865F2?style=flat-square&logo=discord)](https://discord.com/users/1439874443341070368)

### 📧 Get In Touch
- **Email**: tejrtej9347@gmail.com
- **WhatsApp**: [+91 93910 55878](https://wa.me/919391055878)
- **Portfolio**: [teja9391.github.io/Porfolio](https://teja9391.github.io/Porfolio/)

---

<div align="center">

### ⭐ Star This Repository

If you found this portfolio helpful or inspiring, please give it a star!

**Made with ❤️ and ☕ by [Tej](https://github.com/TEJA9391)**

![Thank You](https://img.shields.io/badge/Thank%20You!-🙏-red?style=for-the-badge)

</div>
 
 