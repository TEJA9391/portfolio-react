import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import TejImg from '../assets/tej.jpg'
import EmotionStudyImg from '../assets/emotion-study.png'
import FixHubImg from '../assets/fixhub.png'
import SentimentImg from '../assets/sentiment.png'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaYoutube, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

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
            name: 'YouTube',
            url: 'https://youtube.com/',
            color: '#FF0000',
            icon: <FaYoutube size={24} />
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
            id: 2,
            title: 'FixHub',
            shortDesc: 'Community-driven platform connecting users with local service providers and repair professionals. Full-stack web application with real-time messaging.',
            fullDesc: 'A marketplace platform connecting homeowners with local service professionals for repairs and maintenance. Features include real-time messaging, service provider ratings, booking management, and payment processing. Built with a robust backend and responsive React frontend.',
            tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
            features: ['Real-time messaging system', 'Provider ratings & reviews', 'Secure payment integration', 'Service booking management', 'GPS-based provider matching'],
            github: 'https://github.com/TEJA9391/FixHub',
            demo: 'https://fix-eflsmdp7t-tejas-projects-8508e785.vercel.app',
            image: FixHubImg
        },
        {
            id: 3,
            title: 'Sentiment Analysis Web App',
            shortDesc: 'Web-based sentiment analysis tool using NLP to classify text emotions. Built with Flask backend and React frontend with real-time predictions.',
            fullDesc: 'A sophisticated NLP application that analyzes text sentiment in real-time. Uses pre-trained models to classify emotions and provide detailed sentiment scores. Features include batch processing, visualization of results, and API integration capabilities for external applications.',
            tags: ['Python', 'NLP', 'Flask', 'React'],
            features: ['Real-time sentiment analysis', 'Multi-language support', 'Sentiment visualization charts', 'Batch processing capability', 'REST API for integration'],
            github: '#',
            demo: '#',
            image: SentimentImg
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
                                I am
                                <div className="text-cube">
                                    <div className="text-cube-inner">
                                        <div className="text-face front" style={{ color: 'var(--text)' }}> T<span style={{ color: '#3b82f6' }}>ej</span>a</div>
                                        <div className="text-face second"> Developer</div>
                                        <div className="text-face third"> Student</div>
                                        <div className="text-face fourth"> Creator</div>
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
                            <a className="btn btn-ghost" href="/BOORA RAVITEJA.pdf" download title="Download Resume">📄 Resume</a>
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
                            <p style={{ margin: '0 0 12px 0', color: 'var(--muted)' }}>Skills & Technologies</p>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                <span className="tag">Python</span>
                                <span className="tag">JavaScript</span>
                                <span className="tag">React</span>
                                <span className="tag">Flask</span>
                                <span className="tag">TensorFlow</span>
                                <span className="tag">Git & GitHub</span>
                                <span className="tag">VS Code</span>
                                <span className="tag">Antigravity</span>
                                <span className="tag">MongoDB</span>
                                <span className="tag">SQL</span>
                                <span className="tag">OpenCV</span>
                                <span className="tag">Model Training</span>
                                <span className="tag">Classification Models</span>
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
                            <div
                                id={`project-${project.id}`}
                                key={project.id}
                                className={`proj ${expandedProject === project.id ? 'expanded' : ''}`}
                                style={{
                                    padding: 0,
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                {project.image && (
                                    <div style={{ width: '100%', height: expandedProject === project.id ? '300px' : '160px', overflow: 'hidden', transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative' }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                        />
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
                                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.05))',
                                        padding: '8px 12px',
                                        borderRadius: '6px',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                        marginBottom: '12px'
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
