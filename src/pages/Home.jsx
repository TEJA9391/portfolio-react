import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import TejImg from '../assets/tej.jpg'

export default function Home() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [flyStyle, setFlyStyle] = useState(null)
    const [expandedProject, setExpandedProject] = useState(null)
    const contactBtnRef = useRef(null)

    const socialLinks = [
        {
            name: 'WhatsApp',
            url: 'https://wa.me/919391055878',
            color: '#25D366',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.02.5C6.06.5 1.02 5.54 1.02 11.5c0 2.02.53 3.9 1.46 5.57L.5 23.5l6.71-1.76c1.55.86 3.3 1.33 5.08 1.33 5.96 0 10.99-5.04 10.99-11 0-3-1.22-5.77-3.76-7.59z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/tejr_tej',
            color: '#E1306C',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'Twitter/X',
            url: ' https://x.com/Tejr_tej?s=08',
            color: '#1DA1F2',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.33.48-2.05.57.74-.44 1.31-1.14 1.58-1.98-.7.42-1.48.72-2.31.88A3.6 3.6 0 0 0 12.6 8.5c0 .28.03.56.1.82C8.2 9.2 5 7.1 2.9 4.1c-.3.52-.48 1.12-.48 1.76 0 1.22.62 2.3 1.58 2.93-.57-.02-1.11-.18-1.58-.44v.05c0 1.7 1.22 3.12 2.84 3.44-.3.08-.6.12-.92.12-.23 0-.45-.02-.67-.06.45 1.4 1.74 2.42 3.27 2.45A7.24 7.24 0 0 1 2 18.58 10.2 10.2 0 0 0 7.27 20c7.55 0 11.68-6.26 11.68-11.68v-.53c.8-.6 1.5-1.35 2.06-2.2-.73.33-1.52.55-2.34.65z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/boora-raviteja-a856a9352?',
            color: '#0A66C2',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM.3 24h4.4V7.99H.3V24zM8.23 24h4.22v-8.03c0-1.9.36-3.56 2.74-3.56 2.36 0 2.37 2.15 2.37 3.66V24h4.22V14.56c0-4.89-1.04-8.63-6.4-8.63-2.78 0-4.53 1.55-5.29 2.64h.07V7.99H8.23c.06 1.85 0 16.01 0 16.01z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'GitHub',
            url: 'https://github.com/TEJA9391',
            color: '#333333',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.6 2.99 8.51 7.14 9.9.52.09.71-.23.71-.5 0-.25-.01-.92-.01-1.8-2.9.63-3.51-1.4-3.51-1.4-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.62.07-.62 1.04.07 1.58 1.08 1.58 1.08.92 1.56 2.42 1.11 3.01.85.09-.66.36-1.11.66-1.36-2.32-.26-4.76-1.16-4.76-5.16 0-1.14.4-2.07 1.06-2.8-.11-.26-.46-1.32.1-2.75 0 0 .87-.28 2.85 1.06a9.77 9.77 0 0 1 2.6-.35c.88 0 1.77.12 2.6.35 1.98-1.34 2.85-1.06 2.85-1.06.56 1.43.21 2.49.1 2.75.66.73 1.06 1.66 1.06 2.8 0 4.01-2.45 4.9-4.78 5.16.37.32.7.95.7 1.92 0 1.39-.01 2.51-.01 2.85 0 .28.19.6.72.5 4.15-1.39 7.14-5.3 7.14-9.9C23.1 5.33 18.27.5 12 .5z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'Discord',
            url: 'https://discord.com/users/1439874443341070368',
            color: '#5865F2',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.88 4.58A19.9 19.9 0 0 0 16.7 3c-.28.5-.6 1.16-.82 1.68-2.5-.38-5-.38-7.5 0-.22-.52-.54-1.18-.82-1.68A19.9 19.9 0 0 0 3.12 4.58C2.05 8.06 2.05 11.5 2.5 14.88c2.28 1.7 4.62 2.78 7.08 3.33.54-.78.98-1.6 1.28-2.44-2.05-.6-3.53-1.6-4-2.8 1.6.94 3.28 1.22 4.9 1.13.5-.38.98-.8 1.44-1.24 1.34.28 2.68.28 4 0 .46.44.94.86 1.44 1.24 1.62.09 3.3-.19 4.9-1.13-.47 1.2-1.95 2.2-4 2.8.3.84.74 1.66 1.28 2.44 2.46-.55 4.8-1.63 7.08-3.33.46-3.38.46-6.82-1.62-10.3z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/',
            color: '#FF0000',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2s-.2-1.7-.8-2.5c-.7-.9-1.6-1-2-1.1C16.9 2.2 12 2.2 12 2.2s-4.9 0-8.7.4c-.5.1-1.4.2-2 1.1-.6.8-.8 2.5-.8 2.5S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.5c.7.9 1.6 1 2 1.1 2.7.5 8.6.5 8.6.5s4.9 0 8.7-.4c.5-.1 1.4-.2 2-1.1.6-.8.8-2.5.8-2.5s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/',
            color: '#1877F2',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.1C22 6.5 17.5 2 11.9 2S2 6.5 2 12.1c0 5 3.7 9.1 8.5 9.9v-7h-2.6v-2.9h2.6V9.2c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7c4.8-.8 8.5-4.9 8.5-9.9z" fill="currentColor" /></svg>
            )
        }
    ]

    const projects = [
        {
            id: 1,
            title: 'Emotion-Aware Study Assistant',
            shortDesc: 'AI-powered study platform that tracks student engagement and provides personalized learning recommendations using computer vision and ML algorithms.',
            fullDesc: 'A Flask-based web application that analyzes emotional state through facial recognition and voice analysis to provide personalized study recommendations. It uses computer vision and machine learning (DeepFace, TensorFlow) to monitor engagement in real-time.',
            tags: ['Python', 'Flask', 'OpenCV', 'TensorFlow'],
            features: ['Real-time Emotion Detection', 'Voice Tone Analysis', 'Personalized Study Recommendations', 'Session History Dashboard'],
            github: 'https://github.com/TEJA9391/emotion-aware-study-assistant',
            demo: 'https://teja9391.github.io/Emotion-Aware-Study-Assistant/'
        },
        {
            id: 2,
            title: 'FixHub',
            shortDesc: 'Community-driven platform connecting users with local service providers and repair professionals. Full-stack web application with real-time messaging.',
            fullDesc: 'A marketplace platform connecting homeowners with local service professionals for repairs and maintenance. Features include real-time messaging, service provider ratings, booking management, and payment processing. Built with a robust backend and responsive React frontend.',
            tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
            features: ['Real-time messaging system', 'Provider ratings & reviews', 'Secure payment integration', 'Service booking management', 'GPS-based provider matching'],
            github: 'https://github.com/TEJA9391/FixHub',
            demo: 'https://fix-eflsmdp7t-tejas-projects-8508e785.vercel.app'
        },
        {
            id: 3,
            title: 'Sentiment Analysis Web App',
            shortDesc: 'Web-based sentiment analysis tool using NLP to classify text emotions. Built with Flask backend and React frontend with real-time predictions.',
            fullDesc: 'A sophisticated NLP application that analyzes text sentiment in real-time. Uses pre-trained models to classify emotions and provide detailed sentiment scores. Features include batch processing, visualization of results, and API integration capabilities for external applications.',
            tags: ['Python', 'NLP', 'Flask', 'React'],
            features: ['Real-time sentiment analysis', 'Multi-language support', 'Sentiment visualization charts', 'Batch processing capability', 'REST API for integration'],
            github: '#',
            demo: '#'
        }
    ]

    const toggleProject = (id) => {
        setExpandedProject(expandedProject === id ? null : id)
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
                                I am
                                <div className="text-cube">
                                    <div className="text-cube-inner">
                                        <div className="text-face front" style={{ color: 'var(--text)' }}>a T<span style={{ color: '#3b82f6' }}>ej</span>a</div>
                                        <div className="text-face second">a Developer</div>
                                        <div className="text-face third">a Student</div>
                                        <div className="text-face fourth">a Creator</div>
                                    </div>
                                </div>
                            </h1>
                        </div>

                        <p style={{ margin: '12px 0 0', color: 'var(--muted)', fontWeight: 400 }}>AI/ML Alchemist & Full-Stack Architect</p>
                    </div>

                    <div className="photo-column fade-in delay">
                        <div className="photo-wrapper" aria-hidden="false">
                            <img className="photo" src={TejImg} alt="Teja" />
                        </div>
                    </div>

                    <div className="hero-right fade-in">
                        <p className="desc">Domain Expansion: Infinite Full-Stack Development. <br /> Manifesting intelligent solutions through React, Python, and the infinite potential of ML.</p>

                        <div style={{ marginTop: 12, display: 'flex', gap: 10, justifyContent: 'flex-start' }}>
                            <a className="btn btn-ghost" href="/resume.pdf" download title="Download Resume">📄 Resume</a>
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

                                    // Updated for new modal size (280px)
                                    const modalWidth = 280
                                    const rightOffset = 42
                                    const targetCenterX = window.innerWidth - rightOffset - modalWidth / 2
                                    const targetCenterY = window.innerHeight / 2  // Center vertically

                                    // Close button size (50px)
                                    const finalWidth = 50
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
                                        background: '#ef4444',  // Red background for close button
                                        color: 'white',
                                        fontSize: flyStyle.width < 45 ? '16px' : '32px',  // Grow font size as it flies
                                        fontWeight: 300,
                                        transition: 'all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',  // Bouncy animation
                                        boxShadow: '0 14px 35px rgba(239, 68, 68, 0.3)'
                                    }}
                                    onTransitionEnd={() => {
                                        setIsAnimating(false)
                                        setFlyStyle(null)
                                        setIsContactOpen(true)
                                    }}
                                >
                                    ×
                                </div>
                            )}
                        </div>
                    </div>
                </div >
            </section >

            <main>
                <section id="about" className="fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                        <h3 style={{ margin: 0, fontWeight: 600 }}>About Me</h3>
                        <div style={{ color: 'var(--muted)', fontSize: 13 }}>Simple, minimal bio</div>
                    </div>

                    <div style={{ height: 14 }}></div>

                    <div className="about-grid">
                        <div className="about-left card">
                            <p style={{ margin: '0 0 8px 0', color: 'var(--muted)' }}>Role</p>
                            <h4 style={{ margin: '0 0 10px 0' }}>Neural Architect & Code Craftsman</h4>
                            <p style={{ margin: 0, color: 'var(--muted)' }}>Forging the convergence of artificial intelligence and full-stack mastery to architect next-generation intelligent systems. Transforming complex challenges into elegant, ML-powered solutions.</p>
                        </div>

                        <div className="about-right card">
                            <p style={{ margin: '0 0 8px 0', color: 'var(--muted)' }}>Skills & Interests</p>
                            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
                                <span className="tag">Python</span>
                                <span className="tag">React</span>
                                <span className="tag">JavaScript</span>
                                <span className="tag">Machine Learning</span>

                                <span className="tag">SQL</span>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="fade-in delay">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                        <h3 style={{ margin: 0, fontWeight: 600 }}>Projects</h3>
                        <div style={{ color: 'var(--muted)', fontSize: 13 }}>Selected work</div>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className={`proj ${expandedProject === project.id ? 'expanded' : ''}`}>
                                <h4>{project.title}</h4>
                                <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>{project.shortDesc}</p>

                                {expandedProject === project.id && (
                                    <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                                        <p style={{ margin: '0 0 8px 0', color: 'var(--text)', fontSize: 14 }}>{project.fullDesc}</p>
                                        <p style={{ margin: '8px 0 6px 0', color: 'var(--muted)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Key Features</p>
                                        <ul style={{ margin: '0 0 12px 0', paddingLeft: 16, color: 'var(--muted)', fontSize: 13 }}>
                                            {project.features.map((feature, idx) => (
                                                <li key={idx} style={{ marginBottom: 4 }}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="tags" style={{ marginTop: expandedProject === project.id ? 12 : 8 }}>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="buttons" style={{ marginTop: 12, display: 'flex', gap: 10 }}>
                                    <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                                    {project.demo && project.demo !== '#' && (
                                        <a className="btn btn-ghost" href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                                    )}
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => toggleProject(project.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {expandedProject === project.id ? 'Show less' : 'Learn more'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="fade-in">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                        <h3 style={{ margin: 0, fontWeight: 600 }}>Contact</h3>
                        <div style={{ color: 'var(--muted)', fontSize: 13 }}>Get in touch</div>
                    </div>

                    <div style={{ height: 14 }}></div>

                    <div className="card">
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

                                    return (
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
        </>
    )
}
