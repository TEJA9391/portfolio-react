import React, { useState, useRef } from 'react'
import { LuMail, LuMapPin } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom'
import TejImg from '../assets/tej.jpg'
import BlockchainImg from '../assets/blockchain.png'
import EmotionStudyImg from '../assets/emotion-study.png'
import FixHubImg from '../assets/fixhub.png'
import IntelliAttendImg from '../assets/intelliattend.png'
import ThreatMatrixImg from '../assets/threatmatrix.png'
import SentimentImg from '../assets/sentiment.png'
import NetcatThumb from '../assets/netcat-thumb.png'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaFacebook, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import EmailChooser from '../components/EmailChooser'

export default function Home() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [titleIndex, setTitleIndex] = useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex(prev => (prev + 1) % 4)
        }, 6000)
        return () => clearInterval(interval)
    }, [])
    const [flyStyle, setFlyStyle] = useState(null)
    const [expandedProject, setExpandedProject] = useState(null)
    const [showEmailChooser, setShowEmailChooser] = useState(false)
    const contactBtnRef = useRef(null)
    const projectsScrollRef = useRef(null)
    const [hoveredProject, setHoveredProject] = useState(null)

    const scrollProjects = (direction) => {
        if (projectsScrollRef.current) {
            const scrollAmount = 400
            const newScrollPosition = direction === 'left'
                ? projectsScrollRef.current.scrollLeft - scrollAmount
                : projectsScrollRef.current.scrollLeft + scrollAmount

            projectsScrollRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            })
        }
    }

    const socialLinks = [
        {
            name: 'WhatsApp',
            url: 'https://wa.me/919391055878',
            color: '#25D366',
            icon: <FaWhatsapp size={24} />
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/tejr_tej',
            color: '#E1306C',
            icon: <FaInstagram size={24} />
        },
        {
            name: 'Twitter/X',
            url: ' https://x.com/Tejr_tej?s=08',
            color: '#1DA1F2',
            icon: <FaXTwitter size={24} />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/boora-raviteja-a856a9352?',
            color: '#0A66C2',
            icon: <FaLinkedin size={24} />
        },
        {
            name: 'Email',
            url: '#',
            isEmail: true,
            color: '#EA4335',
            icon: <FaEnvelope size={24} />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/TEJA9391',
            color: '#333333',
            icon: <FaGithub size={24} />
        },
        {
            name: 'Discord',
            url: 'https://discord.com/users/1439874443341070368',
            color: '#5865F2',
            icon: <FaDiscord size={24} />
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/',
            color: '#1877F2',
            icon: <FaFacebook size={24} />
        }
    ]

    const projects = [
        {
            id: 1,
            title: 'Blockchain Device Fingerprint Identity System',
            shortDesc: 'Secure device identity verification system using blockchain technology and fingerprint authentication. Decentralized identity management with cryptographic security.',
            fullDesc: 'A cutting-edge blockchain-based identity verification system that uses device fingerprinting and biometric authentication to create a secure, decentralized identity management solution. Features include immutable blockchain records, secure device registration, fingerprint verification simulation, and tamper-proof identity storage using distributed ledger technology.',
            tags: ['Blockchain', 'React', 'Web3', 'Cryptography'],
            features: ['Blockchain-based identity storage', 'Device fingerprint verification', 'Decentralized authentication', 'Cryptographic security', 'Immutable audit trail'],
            github: 'https://github.com/TEJA9391/Blockchain-SecureChain',
            demo: 'https://teja9391.github.io/Blockchain-SecureChain/',
            image: BlockchainImg
        },
        {
            id: 2,
            title: 'Emotion-Aware Study Assistant',
            shortDesc: 'AI-powered study platform that tracks student engagement and provides personalized learning recommendations using computer vision and ML algorithms.',
            fullDesc: 'A Flask-based web application that analyzes emotional state through facial recognition and voice analysis to provide personalized study recommendations. It uses computer vision and machine learning (DeepFace, TensorFlow) to monitor engagement in real-time.',
            tags: ['Python', 'Flask', 'OpenCV', 'TensorFlow'],
            features: ['Real-time Emotion Detection', 'Voice Tone Analysis', 'Personalized Study Recommendations', 'Session History Dashboard'],
            github: 'https://github.com/TEJA9391/emotion-aware-study-assistant',
            demo: 'https://teja9391.github.io/Emotion-Aware-Study-Assistant/',
            image: EmotionStudyImg
        },
        {
            id: 3,
            title: 'FixHub',
            shortDesc: 'Community-driven platform connecting users with local service providers and repair professionals. Full-stack web application with real-time messaging.',
            fullDesc: 'A marketplace platform connecting homeowners with local service professionals for repairs and maintenance. Features include real-time messaging, service provider ratings, booking management, and payment processing. Built with a robust backend and responsive React frontend.',
            tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
            features: ['Real-time messaging system', 'Provider ratings & reviews', 'Secure payment integration', 'Service booking management', 'GPS-based provider matching'],
            github: 'https://github.com/TEJA9391/FixHub',
            demo: 'https://teja9391.github.io/FixHub/',
            image: FixHubImg
        },
        {
            id: 5,
            title: 'IntelliAttend: Faculty Mobile Hub',
            shortDesc: 'The Command Center for Modern Classroom Attendance. A professional Flutter application for faculty members to launch sessions and manage students.',
            fullDesc: 'The professional Flutter application for faculty members of the IntelliAttend ecosystem. It provides the tools to launch sessions, manage students, and monitor attendance integrity in real-time. Features Session Orchestration with high-security handshake via 6-digit OTP, Real-Time Live Monitor showing verified students, and Sophisticated Analytics.',
            tags: ['Flutter', 'Mobile', 'Dart', 'Security'],
            features: ['Session Orchestration with SmartBoards via 6-digit OTP', 'Real-Time Live Monitor for student verification', 'Sophisticated Analytics for student eligibility and trends', 'Modern UX with fluid animations and haptic interface', 'Encrypted JSON persistence for local storage'],
            github: 'https://github.com/TEJA9391/IntelliAttend-Faculty-Mobile-App',
            demo: '#',
            image: IntelliAttendImg
        },
        {
            id: 6,
            title: 'ThreatMatrix AI: Advanced SOC Mainnet',
            shortDesc: 'A production-grade Security Operations Center (SOC) platform designed for real-time threat intelligence, neural visualization, and autonomous mitigation.',
            fullDesc: 'ThreatMatrix AI is a production-grade Security Operations Center (SOC) platform designed for real-time threat intelligence, neural visualization, and autonomous mitigation. It features a Neural Intelligence Mesh for high-fidelity visualization of global threat ingress, Autonomous Mitigation with real-time auto-blocking of malicious IPs, and Multi-Vector Detection for Fraud, Phishing, and Fake News identification.',
            tags: ['React', 'Tailwind', 'Python', 'Security'],
            features: [
                'Neural Intelligence Mesh for global threat visualization',
                'Autonomous Mitigation for real-time IP auto-blocking',
                'Multi-Vector Detection (Fraud, Phishing, Fake News)',
                'Immersive Cyberpunk aesthetic with glassmorphism',
                'Fluid Framer Motion transitions'
            ],
            github: 'https://github.com/TEJA9391/ThreatMatrix-AI',
            demo: 'https://teja9391.github.io/ThreatMatrix-AI/',
            image: ThreatMatrixImg,
            image: SentimentImg
        },
        {
            id: 5,
            title: 'Cross-Device Private Chat using Netcat',
            shortDesc: 'Real-time private chat system using Netcat between Ubuntu VM and Android Termux over TCP. Demonstrates client-server architecture, port listening, and cross-platform networking.',
            fullDesc: 'A hands-on cybersecurity project implementing a bidirectional TCP chat between an Ubuntu Linux Virtual Machine (inside VirtualBox) and Android Termux using Netcat — the classic networking utility. The Ubuntu VM listens on a specific port; the Android device connects as a client over the local network, enabling real-time message exchange.',
            tags: ['Netcat', 'TCP/IP', 'Ubuntu Linux', 'Termux', 'Cybersecurity'],
            features: ['Netcat listener configured on Ubuntu inside VirtualBox', 'TCP client from Android Termux', 'Real-time bidirectional communication', 'Cross-platform networking (Linux ↔ Android)', 'Understanding of raw socket security implications'],
            github: '#',
            demo: '#',
            image: NetcatThumb,
            detailRoute: '/projects/netcat',
            isCyberSec: true
        }
    ]

    const toggleProject = (id) => {
        const isExpanding = expandedProject !== id
        setExpandedProject(expandedProject === id ? null : id)

        // Scroll to the card when expanding
        if (isExpanding) {
            setTimeout(() => {
                const element = document.getElementById(`project-${id}`)
                if (element) {
                    const yOffset = -100 // Offset from top (adjust for navbar)
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                }
            }, 100) // Small delay to let the expansion start
        }
    }

    const validateField = (name, value) => {
        let error = ''

        if (name === 'name') {
            if (!value.trim()) {
                error = 'Name is required'
            } else if (value.trim().length < 2) {
                error = 'Name must be at least 2 characters'
            } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                error = 'Name can only contain letters and spaces'
            }
        }

        if (name === 'email') {
            if (!value.trim()) {
                error = 'Email is required'
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = 'Please enter a valid email address'
            }
        }

        if (name === 'message') {
            if (!value.trim()) {
                error = 'Message is required'
            } else if (value.trim().length < 10) {
                error = 'Message must be at least 10 characters'
            } else if (value.trim().length > 1000) {
                error = 'Message cannot exceed 1000 characters'
            }
        }

        return error
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        if (touched[name]) {
            const error = validateField(name, value)
            setErrors(prev => ({ ...prev, [name]: error }))
        }
    }

    const handleBlur = (e) => {
        const { name, value } = e.target
        setTouched(prev => ({ ...prev, [name]: true }))
        const error = validateField(name, value)
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleSubmit = (e) => {
        // Validate all fields
        const newErrors = {}
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key])
            if (error) newErrors[key] = error
        })

        if (Object.keys(newErrors).length === 0) {
            // No errors, let the form submit naturally to FormSubmit.co
            // We don't need to do anything here, the browser will handle the POST request
        } else {
            e.preventDefault() // Stop submission if there are errors
            setErrors(newErrors)
            setTouched({ name: true, email: true, message: true })
        }
    }

    const isFieldValid = (name) => {
        return touched[name] && !errors[name]
    }

    const isFieldError = (name) => {
        return touched[name] && errors[name]
    }
    return (
        <>
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-left fade-in">
                        <div className="headline-wrap">
                            <h1 className="headline">
                                <div style={{ width: '100%', height: '60px', position: 'relative' }}>
                                    {[
                                        <div key={0}>Hi, I'm <span style={{ color: '#3b82f6' }}>Boora Raviteja</span></div>,
                                        <div key={1}><span style={{ color: '#3b82f6' }}>AI</span> & ML <span style={{ color: '#3b82f6' }}>Student</span></div>,
                                        <div key={2}>Intelligent Software with <span style={{ color: '#3b82f6' }}>AI</span></div>,
                                        <div key={3}><span style={{ color: '#3b82f6' }}>AI Developer</span></div>
                                    ].map((title, idx) => (
                                        <div 
                                            key={idx}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                color: 'var(--text)',
                                                whiteSpace: 'nowrap',
                                                opacity: titleIndex === idx ? 1 : 0,
                                                transform: titleIndex === idx ? 'translateY(0)' : (titleIndex < idx ? 'translateY(10px)' : 'translateY(-10px)'),
                                                transition: 'opacity 2.0s ease-in-out, transform 2.0s ease-in-out',
                                                pointerEvents: titleIndex === idx ? 'auto' : 'none'
                                            }}
                                        >
                                            {title}
                                        </div>
                                    ))}
                                </div>
                            </h1>
                        </div>

                        <p style={{ margin: '12px 0 0', color: 'var(--muted)', fontWeight: 400 }}>AI & Machine Learning Student | Full-Stack Developer | Building Intelligent Digital Solutions</p>
                    </div>

                    <div className="photo-column fade-in delay">
                        <div className="photo-wrapper" aria-hidden="false">
                            <img className="photo" src={TejImg} alt="Teja" />
                        </div>
                    </div>

                    <div className="hero-right fade-in">
                        <p className="desc">Passionate AI & ML student and Full-Stack Developer dedicated to building intelligent, scalable, and user-centric applications. Experienced in React, Python, Java, Flutter, SQL, and Machine Learning with a strong passion for solving real-world problems through technology.</p>

                        <div style={{ marginTop: 12, display: 'flex', gap: 10, justifyContent: 'flex-start' }}>
                            <a className="btn btn-ghost" href="/resume.pdf?v=2" target="_blank" rel="noopener noreferrer" title="View Resume">Resume ↗</a>
                            <button
                                ref={contactBtnRef}
                                className="btn btn-primary"
                                onClick={(e) => {
                                    if (!contactBtnRef.current) {
                                        setIsContactOpen(true)
                                        return
                                    }

                                    const rect = contactBtnRef.current.getBoundingClientRect()
                                    const initial = {
                                        left: rect.left + window.scrollX,
                                        top: rect.top + window.scrollY,
                                        width: rect.width,
                                        height: rect.height
                                    }

                                    // Fly to true center of screen where ring opens
                                    const targetCenterX = window.innerWidth / 2
                                    const targetCenterY = window.innerHeight / 2

                                    // Close button size (60px to match ring center)
                                    const finalWidth = 60
                                    const final = {
                                        left: targetCenterX - (finalWidth / 2),
                                        top: targetCenterY - (finalWidth / 2),
                                        width: finalWidth,
                                        height: finalWidth
                                    }

                                    setFlyStyle({
                                        left: initial.left,
                                        top: initial.top,
                                        width: initial.width,
                                        height: initial.height
                                    })
                                    // temporarily hide/disable the original button while animating
                                    setIsAnimating(true)

                                    requestAnimationFrame(() => {
                                        setTimeout(() => {
                                            setFlyStyle(prev => ({
                                                ...prev,
                                                left: final.left,
                                                top: final.top,
                                                width: final.width,
                                                height: final.height
                                            }))
                                        }, 15)
                                    })
                                }}
                                title="Contact Me"
                                style={{
                                    opacity: isAnimating ? 0 : 1,
                                    pointerEvents: isAnimating ? 'none' : 'auto',
                                    transition: 'opacity 200ms ease'
                                }}
                            >
                                🔗 Contact
                            </button>
                            {isAnimating && flyStyle && (
                                <div
                                    className="fly-btn"
                                    style={{
                                        position: 'fixed',
                                        left: flyStyle.left,
                                        top: flyStyle.top,
                                        width: flyStyle.width,
                                        height: flyStyle.height,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 1900,
                                        borderRadius: 9900,
                                        background: '#1a1a1a',  // Match center button
                                        color: 'white',
                                        fontSize: flyStyle.width < 50 ? '20px' : '28px',
                                        fontWeight: 300,
                                        transition: 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)',  // Smooth bouncy animation
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 3px rgba(255, 255, 255, 0.1)'
                                    }}
                                    onTransitionEnd={() => {
                                        setIsAnimating(false)
                                        setFlyStyle(null)
                                        setIsContactOpen(true)
                                    }}
                                >
                                    x
                                </div>
                            )}
                        </div>
                    </div>
                </div >
            </section >

            <main>
                <section id="about" className="fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                        <h3
                            style={{ margin: 0, fontWeight: 600, cursor: 'pointer', transition: 'color 0.2s ease' }}
                            onClick={() => navigate('/about')}
                            onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            About Me
                        </h3>
                        <div style={{ color: 'var(--muted)', fontSize: 13 }}></div>
                    </div>

                    <div style={{ height: 14 }}></div>

                    <div className="about-grid">
                        <div className="about-left card">
                            <p style={{ margin: '0 0 8px 0', color: 'var(--muted)' }}>Role</p>
                            <h4 style={{ margin: '0 0 10px 0' }}>AI & ML Student | Full-Stack Developer</h4>
                            <p style={{ margin: 0, color: 'var(--muted)' }}>I am a passionate B.Tech Computer Science student specializing in AI & ML. I enjoy designing intelligent, scalable, and user-friendly software solutions that solve real-world problems.</p>
                        </div>

                        <div className="about-right card">
                            <p style={{ margin: '0 0 12px 0', color: 'var(--muted)' }}>Skills & Technologies</p>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                <span className="tag">Python</span>
                                <span className="tag">Java</span>
                                <span className="tag">JavaScript</span>
                                <span className="tag">React.js</span>
                                <span className="tag">Flutter</span>
                                <span className="tag">HTML5</span>
                                <span className="tag">CSS3</span>
                                <span className="tag">SQL</span>
                                <span className="tag">Machine Learning</span>
                                <span className="tag">Artificial Intelligence</span>
                                <span className="tag">Git & GitHub</span>
                                <span className="tag">REST APIs</span>
                                <span className="tag">Firebase</span>
                                <span className="tag">Node.js</span>
                                <span className="tag">Material UI</span>
                                <span className="tag">VS Code</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="fade-in delay">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                        <h3
                            style={{ margin: 0, fontWeight: 600, cursor: 'pointer', transition: 'color 0.2s ease' }}
                            onClick={() => navigate('/projects')}
                            onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            Projects
                        </h3>
                        <div style={{ color: 'var(--muted)', fontSize: 13 }}></div>
                    </div>

                    <div
                        className="projects-carousel-wrapper"
                        style={{ position: 'relative', marginTop: '14px' }}
                        onMouseEnter={(e) => {
                            const leftBtn = e.currentTarget.querySelector('.scroll-btn-left')
                            const rightBtn = e.currentTarget.querySelector('.scroll-btn-right')
                            if (leftBtn) leftBtn.style.opacity = '1'
                            if (rightBtn) rightBtn.style.opacity = '1'
                        }}
                        onMouseLeave={(e) => {
                            const leftBtn = e.currentTarget.querySelector('.scroll-btn-left')
                            const rightBtn = e.currentTarget.querySelector('.scroll-btn-right')
                            if (leftBtn) leftBtn.style.opacity = '0'
                            if (rightBtn) rightBtn.style.opacity = '0'
                        }}
                    >
                        {/* Left Scroll Button */}
                        <button
                            className="scroll-btn-left"
                            onClick={() => scrollProjects('left')}
                            style={{
                                position: 'absolute',
                                left: '-20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: 'var(--card-bg)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                border: '1px solid var(--border)',
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'var(--text)',
                                fontSize: '28px',
                                opacity: 0,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.25)'
                                e.currentTarget.style.color = 'var(--accent)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)'
                                e.currentTarget.style.color = 'var(--text)'
                            }}
                            title="Scroll left"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        {/* Right Scroll Button */}
                        <button
                            className="scroll-btn-right"
                            onClick={() => scrollProjects('right')}
                            style={{
                                position: 'absolute',
                                right: '-20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: 'var(--card-bg)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                border: '1px solid var(--border)',
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'var(--text)',
                                fontSize: '28px',
                                opacity: 0,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.25)'
                                e.currentTarget.style.color = 'var(--accent)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)'
                                e.currentTarget.style.color = 'var(--text)'
                            }}
                            title="Scroll right"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>

                        <div
                            ref={projectsScrollRef}
                            className="projects-grid"
                            style={{
                                display: 'flex',
                                gap: 24,
                                overflowX: 'auto',
                                overflowY: 'hidden',
                                scrollSnapType: 'x mandatory',
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                paddingBottom: '10px'
                            }}
                        >
                            {projects.map((project) => (
                                <div
                                    id={`project-${project.id}`}
                                    key={project.id}
                                    className="proj"
                                    style={{
                                        padding: 0,
                                        overflow: 'hidden',
                                        minWidth: '350px',
                                        maxWidth: '350px',
                                        flexShrink: 0,
                                        scrollSnapAlign: 'start',
                                        background: 'var(--card-bg)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                        filter: project.id === 4
                                            ? 'blur(2px)'
                                            : (hoveredProject && hoveredProject !== project.id ? 'blur(2px) brightness(0.9)' : 'none'),
                                        opacity: project.id === 4 ? 0.6 : 1,
                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (project.id !== 4) {
                                            setHoveredProject(project.id)
                                            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                                            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)'
                                            e.currentTarget.style.borderColor = 'var(--accent)'
                                            e.currentTarget.style.zIndex = '5'
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (project.id !== 4) {
                                            setHoveredProject(null)
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)'
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)'
                                            e.currentTarget.style.borderColor = 'var(--border)'
                                            e.currentTarget.style.zIndex = '1'
                                        }
                                    }}
                                >
                                    {/* Coming Soon Overlay for 4th project */}
                                    {project.id === 4 && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: 20,
                                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(147, 51, 234, 0.95))',
                                            padding: '16px 32px',
                                            borderRadius: '12px',
                                            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🚀</div>
                                            <div style={{
                                                color: 'white',
                                                fontSize: '18px',
                                                fontWeight: 700,
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase'
                                            }}>Coming Soon</div>
                                            <div style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '12px',
                                                marginTop: '4px',
                                                fontWeight: 400
                                            }}>In Development</div>
                                        </div>
                                    )}
                                    {project.image && (
                                        <div style={{ width: '100%', height: '160px', overflow: 'hidden', position: 'relative' }} className="project-image-wrapper">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                            />
                                            {/* Not Available overlay for projects without code */}
                                            {project.github === '#' && project.demo === '#' && (
                                                <div className="not-available-overlay" style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'rgba(0, 0, 0, 0.75)',
                                                    backdropFilter: 'blur(8px)',
                                                    WebkitBackdropFilter: 'blur(8px)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease',
                                                    pointerEvents: 'none',
                                                    zIndex: 10
                                                }}>
                                                    <div style={{
                                                        color: '#fff',
                                                        fontSize: '18px',
                                                        fontWeight: 600,
                                                        textAlign: 'center',
                                                        padding: '20px',
                                                        background: 'rgba(239, 68, 68, 0.2)',
                                                        border: '2px solid rgba(239, 68, 68, 0.5)',
                                                        borderRadius: '12px',
                                                        backdropFilter: 'blur(10px)',
                                                        WebkitBackdropFilter: 'blur(10px)',
                                                        boxShadow: '0 8px 32px rgba(239, 68, 68, 0.3)'
                                                    }}>
                                                        🚫 Not Available
                                                    </div>
                                                </div>
                                            )}
                                            {/* Fade-out gradient overlay */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '60%',
                                                background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.7) 70%, var(--card-bg) 100%)',
                                                pointerEvents: 'none'
                                            }}></div>
                                        </div>
                                    )}
                                    <div style={{ padding: '16px' }}>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            margin: '0 0 8px 0',
                                            color: 'var(--text)',
                                            letterSpacing: '-0.3px'
                                        }}>{project.title}</h4>
                                        <p style={{ margin: '0 0 12px 0', color: 'var(--muted)' }}>{project.shortDesc}</p>

                                        <div style={{
                                            maxHeight: expandedProject === project.id ? '800px' : '0',
                                            opacity: expandedProject === project.id ? 1 : 0,
                                            overflow: 'hidden',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            marginTop: expandedProject === project.id ? 16 : 0,
                                            paddingTop: expandedProject === project.id ? 16 : 0,
                                            paddingBottom: expandedProject === project.id ? 8 : 0,
                                            paddingLeft: expandedProject === project.id ? 12 : 0,
                                            paddingRight: expandedProject === project.id ? 12 : 0,
                                            borderLeft: expandedProject === project.id ? '3px solid #3b82f6' : '3px solid transparent',
                                            background: expandedProject === project.id ? 'rgba(59, 130, 246, 0.03)' : 'transparent',
                                            borderRadius: '8px'
                                        }}>
                                            <div>
                                                {/* Description */}
                                                <p style={{
                                                    margin: '0 0 16px 0',
                                                    color: 'var(--text)',
                                                    fontSize: 14,
                                                    lineHeight: 1.6,
                                                    opacity: expandedProject === project.id ? 1 : 0,
                                                    transform: expandedProject === project.id ? 'translateY(0)' : 'translateY(10px)',
                                                    transition: 'all 0.3s ease 0.1s'
                                                }}>{project.fullDesc}</p>

                                                {/* Key Features Header */}
                                                <p style={{
                                                    margin: '0 0 8px 0',
                                                    color: 'var(--text)',
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    opacity: expandedProject === project.id ? 1 : 0,
                                                    transform: expandedProject === project.id ? 'translateY(0)' : 'translateY(10px)',
                                                    transition: 'all 0.3s ease 0.15s'
                                                }}>✨ Key Features</p>

                                                <ul style={{ margin: '0', paddingLeft: 20, color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>
                                                    {project.features.map((feature, idx) => (
                                                        <li key={idx} style={{
                                                            marginBottom: 6,
                                                            opacity: expandedProject === project.id ? 1 : 0,
                                                            transform: expandedProject === project.id ? 'translateX(0)' : 'translateX(-5px)',
                                                            transition: `all 0.25s ease ${0.2 + (idx * 0.05)}s`
                                                        }}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="tags" style={{ marginTop: expandedProject === project.id ? 12 : 8 }}>
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="tag">{tag}</span>
                                            ))}
                                        </div>

                                        <div className="buttons" style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                            <a
                                                className="btn btn-ghost"
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{
                                                    opacity: project.github === '#' ? 0.5 : 1,
                                                    pointerEvents: project.github === '#' ? 'none' : 'auto',
                                                    cursor: project.github === '#' ? 'not-allowed' : 'pointer'
                                                }}
                                            >
                                                {project.github === '#' ? 'Private' : 'GitHub'}
                                            </a>
                                            {project.demo && project.demo !== '#' && (
                                                <a className="btn btn-ghost" href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                                            )}
                                            {project.demo === '#' && (
                                                <span className="btn btn-ghost" style={{ opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' }}>
                                                    Demo
                                                </span>
                                            )}
                                            <Link
                                                className="btn btn-primary"
                                                to={project.detailRoute || `/projects?project=${project.id}`}
                                                style={{ cursor: 'pointer', textDecoration: 'none' }}
                                            >
                                                Learn more →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                        <h3 style={{ margin: 0, fontWeight: 600 }}>Contact</h3>
                        <div style={{ color: 'var(--muted)', fontSize: 13 }}>Get in touch</div>
                    </div>

                    <div style={{ height: 14 }}></div>

                    <div className="card contact-wrapper">


                        {/* LEFT COLUMN: Contact Info */}
                        <div className="contact-info-column">
                            <h4 className="contact-title-text">Let's work together</h4>
                            <p style={{ color: 'var(--muted)', marginBottom: '24px', lineHeight: '1.6' }}>
                                Have a project in mind or just want to chat? Feel free to reach out directly.
                            </p>

                            <div className="contact-details-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#3b82f6'
                                    }}>
                                        <LuMail size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Email</div>
                                        <a href="mailto:tejrtej9347@gmail.com" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>tejrtej9347@gmail.com</a>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#3b82f6'
                                    }}>
                                        <LuMapPin size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Location</div>
                                        <div style={{ color: 'var(--text)', fontWeight: 500 }}>Hyderabad, Telangana, India</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Form */}
                        <div className="contact-form-column">
                            {submitted && (
                                <div style={{
                                    padding: '12px 16px',
                                    marginBottom: '16px',
                                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    borderRadius: '8px',
                                    color: '#22c55e',
                                    fontSize: '14px',
                                    fontWeight: 500
                                }}>
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            <form
                                className="contact-grid"
                                action="https://formsubmit.co/tejrtej9347@gmail.com"
                                method="POST"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_subject" value="New Contact from Portfolio - tejrtej9347@gmail.com" />
                                <input type="hidden" name="_next" value="https://teja9391.github.io/portfolio-react/" />
                                <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I'll get back to you soon." />

                                <div className="form-control">
                                    <label htmlFor="name">
                                        Name
                                        {isFieldValid('name') && <span style={{ color: '#22c55e', marginLeft: '4px' }}>✓</span>}
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`form-input ${isFieldError('name') ? 'error' : ''} ${isFieldValid('name') ? 'valid' : ''}`}
                                    />
                                    {isFieldError('name') && (
                                        <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            ✗ {errors.name}
                                        </span>
                                    )}
                                    {isFieldValid('name') && (
                                        <span style={{ color: '#22c55e', fontSize: '12px', marginTop: '4px' }}>Looks good!</span>
                                    )}
                                </div>

                                <div className="form-control">
                                    <label htmlFor="email">
                                        Email
                                        {isFieldValid('email') && <span style={{ color: '#22c55e', marginLeft: '4px' }}>✓</span>}
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`form-input ${isFieldError('email') ? 'error' : ''} ${isFieldValid('email') ? 'valid' : ''}`}
                                    />
                                    {isFieldError('email') && (
                                        <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            ✗ {errors.email}
                                        </span>
                                    )}
                                    {isFieldValid('email') && (
                                        <span style={{ color: '#22c55e', fontSize: '12px', marginTop: '4px' }}>Valid email!</span>
                                    )}
                                </div>

                                <div className="form-control" style={{ gridColumn: '1 / -1' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <label htmlFor="message">
                                            Message
                                            {isFieldValid('message') && <span style={{ color: '#22c55e', marginLeft: '4px' }}>✓</span>}
                                        </label>
                                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                                            {formData.message.length}/1000
                                        </span>
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Hello — how can I help?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`form-input ${isFieldError('message') ? 'error' : ''} ${isFieldValid('message') ? 'valid' : ''}`}
                                    ></textarea>
                                    {isFieldError('message') && (
                                        <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            ✗ {errors.message}
                                        </span>
                                    )}
                                    {isFieldValid('message') && (
                                        <span style={{ color: '#22c55e', fontSize: '12px', marginTop: '4px' }}>Great message!</span>
                                    )}
                                </div>

                                <div className="submit-wrap" style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-start' }}>
                                    <button
                                        className="btn-submit"
                                        type="submit"
                                        disabled={Object.keys(formData).some(key => !formData[key].trim())}
                                        style={{
                                            opacity: Object.keys(formData).some(key => !formData[key].trim()) ? 0.6 : 1,
                                            cursor: Object.keys(formData).some(key => !formData[key].trim()) ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            {/* Circular Contact Modal */}
            {
                isContactOpen && (
                    <>
                        <div className="contact-overlay" onClick={() => setIsContactOpen(false)}></div>
                        <div className={`circular-modal ${isContactOpen ? 'open' : ''}`}>


                            <div className="circular-container">
                                {/* Center Close Button */}
                                <div
                                    className="center-btn"
                                    onClick={() => setIsContactOpen(false)}
                                    title="Close"
                                >
                                    ×
                                </div>

                                {/* Social Icons in Circle */}
                                {socialLinks.map((social, idx) => {
                                    const angle = (idx / socialLinks.length) * 360
                                    const radius = 90  // Increased radius for better spacing
                                    const x = Math.cos((angle - 90) * Math.PI / 180) * radius
                                    const y = Math.sin((angle - 90) * Math.PI / 180) * radius

                                    return social.isEmail ? (
                                        <button
                                            key={idx}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setShowEmailChooser(true)
                                                setIsContactOpen(false)
                                            }}
                                            className="circular-item"
                                            title={social.name}
                                            style={{
                                                '--x': `${x}px`,
                                                '--y': `${y}px`,
                                                animationDelay: `${idx * 0.06}s`,  // Faster stagger
                                                background: 'none',
                                                border: 'none',
                                                padding: 0,
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div
                                                className="item-icon"
                                                style={{ background: social.color }}
                                            >
                                                {social.icon}
                                            </div>
                                        </button>
                                    ) : (
                                        <a
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="circular-item"
                                            title={social.name}
                                            style={{
                                                '--x': `${x}px`,
                                                '--y': `${y}px`,
                                                animationDelay: `${idx * 0.06}s`  // Faster stagger
                                            }}
                                        >
                                            <div
                                                className="item-icon"
                                                style={{ background: social.color }}
                                            >
                                                {social.icon}
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )
            }

            <EmailChooser
                isOpen={showEmailChooser}
                onClose={() => setShowEmailChooser(false)}
                emailAddress="tejrtej9347@gmail.com"
            />
        </>
    )
}
