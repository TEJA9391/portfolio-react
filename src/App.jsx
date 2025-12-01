import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/About'
import Blog from './pages/Blog'
import Speaking from './pages/Speaking'
import Contact from './pages/Contact'
import StudentAware from "./pages/StudentAware";
import './App.css'
import './index.css'

function AppContent({ isDarkMode, setIsDarkMode }) {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    useEffect(() => {
        document.querySelectorAll('.fade-in').forEach((el, i) => {
            el.style.animationDelay = (i * 0.08) + 's'
            el.classList.add('visible')
        })
    }, [])

    return (
        <>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/speaking" element={<Speaking />} />
                <Route path="/contact" element={<Contact />} />

                {/* ✅ ADD THIS ROUTE */}
                <Route path="/student-aware" element={<StudentAware />} />
            </Routes>

            <Footer />
        </>
    )
}

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved) {
            return saved === 'dark'
        }
        return false // Default to light mode
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    }, [isDarkMode])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Router>
            <AppContent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Router>
    )
}
