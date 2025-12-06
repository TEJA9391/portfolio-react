import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import ContactPopup from "./ContactPopup";


export default function Navbar({ isDarkMode, setIsDarkMode }) {
    const [isAnimating, setIsAnimating] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 24) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        const scrollListener = () => {
            requestAnimationFrame(handleScroll)
        }

        window.addEventListener('scroll', scrollListener)
        return () => window.removeEventListener('scroll', scrollListener)
    }, [])

    useEffect(() => {
        const header = document.querySelector('header')
        if (header) {
            if (isScrolled) {
                header.classList.add('scrolled')
            } else {
                header.classList.remove('scrolled')
            }
        }
    }, [isScrolled])

    const toggleTheme = () => {
        setIsAnimating(true)
        setIsDarkMode(!isDarkMode)
        setTimeout(() => setIsAnimating(false), 600)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen)
    }

    return (
        <header>
            <div className="nav-wrap">
                <div className="brand">
                    <span className="logo" aria-hidden="true"></span>
                    <div>
                        <div className="name">
                            <span style={{ color: 'var(--text)' }}>BOORA </span>
                            <span style={{ color: '#3b82f6' }}>RAVI</span>
                            <span style={{ color: 'var(--text)' }}>TEJA</span>
                        </div>
                    </div>
                </div>

                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    title="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button >

                <nav className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>Events</NavLink>
                        </li>
                        <li>
                            <NavLink to="/speaking" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>Speaking</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>About</NavLink>
                        </li>
                        <li>
                            <button
                                className={`theme-toggle ${isAnimating ? 'animate' : ''}`}
                                onClick={toggleTheme}
                                title={isDarkMode ? 'Light mode' : 'Dark mode'}
                                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {isDarkMode ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                )}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div >
            <ContactPopup open={isContactOpen} onClose={() => setIsContactOpen(false)} isDarkMode={isDarkMode} />
        </header >
    )
}
