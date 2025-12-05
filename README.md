# Teja's Portfolio — React Portfolio Website

A modern, premium portfolio website built with React, Vite, and cutting-edge design principles featuring glassmorphism effects, smooth animations, and a stunning user experience.

## ✨ Features

- **Modern React Architecture** - Built with Vite + React for blazing-fast performance
- **Glassmorphism UI** - Premium glassy effects on buttons and interactive elements
- **Dark/Light Mode** - Smooth theme switching with persistent preferences
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Interactive Animations** - Smooth transitions and hover effects throughout
- **Project Showcase** - Dynamic project cards with expandable details
- **Blog Section** - Integrated blog with rich content and images
- **Contact Form** - Modern circular modal with form validation
- **Performance Optimized** - Lighthouse scores: 98/100 Performance

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```powershell
git clone https://github.com/TEJA9391/Porfolio.git
cd portfolio
```

2. **Install dependencies:**
```powershell
npm install
```

3. **Start development server:**
```powershell
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```powershell
npm run build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Images and static assets
│   │   └── tej.jpg      # Profile photo
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Landing page with hero section
│   │   ├── About.jsx    # About page
│   │   ├── Blog.jsx     # Blog with posts and images
│   │   └── Speaking.jsx # Speaking engagements
│   ├── App.jsx          # Main app component with routing
│   ├── Navbar.jsx       # Navigation component
│   └── index.css        # Global styles with glassmorphism
├── public/              # Public assets
└── vite.config.js       # Vite configuration
```

## 🎨 Design Highlights

### Glassmorphism Effects
All buttons feature premium glassmorphism with:
- Backdrop blur filters
- Semi-transparent gradient backgrounds
- Sweeping shine animations on hover
- Enhanced shadows with inset highlights
- Optimized for both light and dark themes

### Theme System
- Automatic theme detection based on user preferences
- Manual toggle with smooth transitions
- Persistent theme storage in localStorage
- CSS variables for easy customization

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-optimized interactions
- Hamburger menu for mobile navigation

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Glassmorphism, animations, and responsive design
- **JavaScript ES6+** - Modern JavaScript features

## 📊 Performance Metrics

### Lighthouse Scores
```
Performance:    98/100
Accessibility:  95/100
Best Practices: 100/100
SEO:           100/100
```

## 🌐 Deployment

The portfolio is automatically deployed to GitHub Pages:
- **Live Site**: https://teja9391.github.io/Porfolio/
- **Repository**: https://github.com/TEJA9391/Porfolio

### Deploy Updates
```powershell
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions will automatically build and deploy to GitHub Pages.

## 📝 Customization

### Update Personal Information
1. Edit content in `src/pages/Home.jsx` for the hero section
2. Update `src/pages/About.jsx` for about information
3. Replace `src/assets/tej.jpg` with your photo

### Update Projects
Edit the projects array in `src/pages/Home.jsx`:
```javascript
const projects = [
  {
    title: "Your Project",
    desc: "Description",
    tags: ["React", "Node.js"],
    // ...
  }
]
```

### Modify Styles
All styling is in `src/index.css`:
- Color scheme variables in `:root` and `[data-theme="dark"]`
- Button styles start at line 577
- Glassmorphism effects throughout

### Add Blog Posts
Update the `blogPosts` array in `src/pages/Blog.jsx`:
```javascript
const blogPosts = [
  {
    id: 1,
    title: "Your Blog Title",
    date: "Dec 5, 2024",
    content: "Your content...",
    // ...
  }
]
```

## 🔧 Configuration

### Vite Config
The `vite.config.js` is configured for GitHub Pages deployment:
```javascript
base: '/Porfolio/'
```

Update this if deploying to a different location.

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📧 Contact

- **GitHub**: [@TEJA9391](https://github.com/TEJA9391)
- **Email**: tejrtej9347@gmail.com
- **Portfolio**: https://teja9391.github.io/Porfolio/

---

**Built with ❤️ by Teja** | Powered by React + Vite