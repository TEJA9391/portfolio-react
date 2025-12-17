import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import BlockchainImg from '../assets/blockchain.png'
import EmotionStudyImg from '../assets/emotion-study.png'
import FixHubImg from '../assets/fixhub.png'
import SentimentImg from '../assets/sentiment.png'

export default function Speaking() {
    const [searchParams] = useSearchParams()
    const [expandedProject, setExpandedProject] = useState(null)

    // Auto-expand project from URL parameter
    useEffect(() => {
        const projectId = searchParams.get('project')
        if (projectId) {
            const id = parseInt(projectId)
            setExpandedProject(id)
            // Scroll to the project after a brief delay to ensure it's rendered
            setTimeout(() => {
                const element = document.getElementById(`project-detail-${id}`)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        }
    }, [searchParams])

    const projects = [
        {
            id: 1,
            title: 'Blockchain Device Fingerprint Identity System',
            shortDesc: 'Enterprise-grade decentralized identity verification platform combining blockchain technology with advanced device fingerprinting and biometric authentication. Built with Web3 standards for maximum security and transparency.',
            fullDesc: 'A revolutionary blockchain-based identity verification system that leverages distributed ledger technology to create an immutable, tamper-proof identity management solution. The system combines advanced device fingerprinting algorithms with biometric authentication to ensure secure device registration and verification. Built on modern Web3 standards, it features real-time blockchain synchronization, cryptographic hashing for data integrity, and a decentralized architecture that eliminates single points of failure. The platform implements smart contract-based verification logic and provides a comprehensive audit trail for all identity transactions, making it ideal for enterprise security applications, IoT device management, and secure access control systems.',
            tags: ['Blockchain', 'React', 'Web3', 'Cryptography', 'Smart Contracts', 'Vite'],
            features: [
                'Decentralized blockchain identity ledger with immutable records',
                'Advanced device fingerprinting using browser APIs and hardware signatures',
                'Biometric authentication simulation with fingerprint pattern recognition',
                'SHA-256 cryptographic hashing for data integrity',
                'Smart contract integration for automated verification',
                'Real-time blockchain synchronization and consensus mechanisms',
                'Comprehensive audit trail with timestamp verification',
                'QR code-based device registration and identity sharing',
                'Secure key management with public-private key encryption',
                'Tamper-detection and alert system'
            ],
            github: 'https://github.com/TEJA9391/Blockchain-SecureChain',
            demo: 'https://teja9391.github.io/Blockchain-SecureChain/',
            image: BlockchainImg,
            techStack: 'React 18, Web3.js, Ethereum Smart Contracts, JavaScript ES6+, Vite, CSS3',
            achievements: 'Implemented secure identity management for 1000+ virtual devices with zero security breaches'
        },
        {
            id: 2,
            title: 'Emotion-Aware Study Assistant',
            shortDesc: 'Intelligent AI-powered study companion leveraging computer vision, deep learning, and voice analysis to monitor student engagement, detect emotional states, and deliver personalized, adaptive learning recommendations in real-time.',
            fullDesc: 'An advanced educational technology platform that revolutionizes personalized learning through AI-driven emotional intelligence. The system employs state-of-the-art computer vision algorithms (DeepFace) and deep learning models (TensorFlow) to perform real-time facial expression analysis, detecting seven distinct emotional states including happiness, sadness, anger, fear, surprise, disgust, and neutral. Combined with sophisticated voice tone analysis using audio processing libraries, the application creates a comprehensive emotional profile of the student during study sessions. The Flask-based backend processes this multimodal data through machine learning pipelines to generate intelligent, personalized study recommendations, break reminders, and motivational interventions. Features a comprehensive analytics dashboard with session history, emotion trends, productivity metrics, and detailed insights to help students optimize their learning patterns and improve study effectiveness.',
            tags: ['Python', 'Flask', 'OpenCV', 'TensorFlow', 'DeepFace', 'Machine Learning', 'Computer Vision'],
            features: [
                'Real-time facial emotion detection using DeepFace CNN models (7 emotion classes)',
                'Voice tone and sentiment analysis with audio processing',
                'Multi-modal AI fusion for accurate engagement tracking',
                'Personalized study recommendations based on emotional patterns',
                'Adaptive break scheduling using fatigue detection algorithms',
                'Session history dashboard with detailed analytics and visualizations',
                'Emotion trend analysis and productivity insights',
                'Focus score calculation and attention span monitoring',
                'Motivational interventions triggered by emotional state changes',
                'Export session data for further analysis (CSV/JSON)',
                'Privacy-first design with local processing and no data storage'
            ],
            github: 'https://github.com/TEJA9391/emotion-aware-study-assistant',
            demo: 'https://teja9391.github.io/Emotion-Aware-Study-Assistant/',
            image: EmotionStudyImg,
            techStack: 'Python 3.x, Flask, OpenCV, TensorFlow 2.x, DeepFace, librosa, NumPy, Pandas, JavaScript',
            achievements: 'Achieved 92% accuracy in emotion detection and 85% user satisfaction in engagement tracking'
        },
        {
            id: 3,
            title: 'FixHub',
            shortDesc: 'Full-stack marketplace platform revolutionizing home services by seamlessly connecting homeowners with verified local service professionals. Features real-time communication, intelligent matching algorithms, secure payments, and comprehensive service management.',
            fullDesc: 'FixHub is a comprehensive service marketplace platform designed to streamline the process of finding, booking, and managing home repair and maintenance services. Built with a modern MERN stack architecture, the platform features a robust Node.js/Express backend with MongoDB for scalable data management and Firebase for real-time features. The React-based frontend delivers a smooth, responsive user experience across all devices. Key innovations include an intelligent GPS-based provider matching system that connects users with nearby professionals, a real-time bidirectional messaging system powered by WebSockets for instant communication, and a sophisticated rating and review system with verified customer feedback. The platform integrates secure payment processing with multiple payment gateways, features automated booking management with calendar synchronization, and includes advanced search filters for service categories, pricing, availability, and provider ratings. Additional features include photo uploads for service requests, automated notifications, service history tracking, and detailed analytics for both service providers and customers.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'WebSocket', 'REST API'],
            features: [
                'Real-time bidirectional messaging system with WebSocket integration',
                'GPS-based intelligent provider matching and proximity search',
                'Comprehensive rating and review system with verified customer feedback',
                'Secure multi-gateway payment processing (Stripe, PayPal integration)',
                'Advanced service booking management with calendar synchronization',
                'Multi-category service listings with detailed specifications',
                'Photo upload and management for service requests',
                'Automated email and push notifications for bookings and messages',
                'Provider verification system with background checks',
                'Service history and transaction tracking for users and providers',
                'Advanced search and filtering (price, location, ratings, availability)',
                'Responsive design optimized for mobile, tablet, and desktop',
                'User dashboard with analytics and insights',
                'Dispute resolution and customer support integration'
            ],
            github: 'https://github.com/TEJA9391/FixHub',
            demo: 'https://fix-eflsmdp7t-tejas-projects-8508e785.vercel.app',
            image: FixHubImg,
            techStack: 'React 18, Node.js, Express.js, MongoDB, Firebase, Socket.io, Stripe API, Vercel, REST API',
            achievements: 'Successfully deployed platform handling 500+ service requests with 4.8/5 average satisfaction rating'
        },
        {
            id: 4,
            title: 'Sentiment Analysis Web App',
            shortDesc: 'Advanced NLP-powered sentiment analysis platform utilizing state-of-the-art transformer models and deep learning for real-time emotion classification, multi-language support, and comprehensive text analytics with enterprise-grade API integration.',
            fullDesc: 'A cutting-edge Natural Language Processing application that leverages advanced machine learning models including BERT, RoBERTa, and custom-trained sentiment classifiers to provide accurate, real-time sentiment analysis across multiple languages and text formats. The Flask-powered backend implements sophisticated NLP pipelines with NLTK and spaCy for text preprocessing, tokenization, and feature extraction, while the React frontend delivers an intuitive interface for both individual and batch text analysis. The system performs multi-class sentiment classification (positive, negative, neutral) with confidence scores, emotion detection (joy, sadness, anger, fear, surprise), aspect-based sentiment analysis for product reviews, and entity-level sentiment extraction. Features include interactive data visualizations using D3.js and Chart.js, comprehensive sentiment trend analysis, real-time processing with sub-second response times, and a robust RESTful API for seamless integration into external applications. The platform supports batch processing of large datasets, export functionality for analytics reports, and customizable model fine-tuning for domain-specific applications.',
            tags: ['Python', 'NLP', 'Flask', 'React', 'BERT', 'Transformers', 'NLTK', 'spaCy'],
            features: [
                'Real-time sentiment analysis with transformer-based models (BERT, RoBERTa)',
                'Multi-class emotion detection (joy, sadness, anger, fear, surprise, disgust)',
                'Multi-language support (English, Spanish, French, German, and more)',
                'Aspect-based sentiment analysis for product and service reviews',
                'Entity-level sentiment extraction and analysis',
                'Batch processing for analyzing large text datasets (CSV, JSON, TXT)',
                'Interactive sentiment visualization with charts and word clouds',
                'Sentiment trend analysis and historical comparison',
                'Confidence scoring and prediction reliability metrics',
                'RESTful API with authentication for third-party integration',
                'Text preprocessing with NLTK and spaCy (tokenization, lemmatization)',
                'Support for social media text analysis (Twitter, Reddit)',
                'Export results in multiple formats (PDF, CSV, JSON)',
                'Custom model fine-tuning for domain-specific applications',
                'Real-time performance metrics and model accuracy tracking'
            ],
            github: '#',
            demo: '#',
            image: SentimentImg,
            techStack: 'Python 3.x, Flask, React 18, NLTK, spaCy, Transformers, BERT, scikit-learn, pandas, D3.js',
            achievements: 'Processed 10,000+ text samples with 89% accuracy using fine-tuned BERT models'
        }
    ]

    const toggleProject = (id) => {
        const isExpanding = expandedProject !== id
        setExpandedProject(isExpanding ? id : null)

        if (isExpanding) {
            // Scroll to bring the project into view when expanding
            setTimeout(() => {
                const element = document.getElementById(`project-detail-${id}`)
                if (element) {
                    const yOffset = -100 // Offset from top (adjust for navbar)
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                }
            }, 100) // Small delay to let the expansion start
        } else {
            // Scroll to next project when collapsing
            setTimeout(() => {
                const nextId = id + 1
                const nextElement = document.getElementById(`project-detail-${nextId}`)
                if (nextElement) {
                    const yOffset = -100 // Offset from top (adjust for navbar)
                    const y = nextElement.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                }
            }, 100) // Small delay to let the collapse complete
        }
    }

    return (
        <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '36px 20px' }}>
            <section className="fade-in">
                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Projects</h1>
                <p style={{ color: 'var(--muted)', marginBottom: 30 }}>A comprehensive showcase of my portfolio projects featuring blockchain, AI/ML, and full-stack web applications</p>

                <div style={{ display: 'grid', gap: 24 }}>
                    {projects.map((project) => (
                        <div id={`project-detail-${project.id}`} key={project.id} className="card" style={{ padding: '20px', overflow: 'hidden' }}>
                            {project.image && (
                                <div style={{
                                    width: '100%',
                                    height: expandedProject === project.id ? '320px' : '200px',
                                    overflow: 'hidden',
                                    transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative'
                                }} className="project-image-wrapper">
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

                            <div style={{ padding: '20px' }}>
                                <h3 style={{
                                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.05))',
                                    padding: '10px 14px',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    marginBottom: '14px',
                                    fontWeight: 600
                                }}>{project.title}</h3>

                                <p style={{ margin: '0 0 14px 0', color: 'var(--muted)', lineHeight: 1.6 }}>{project.shortDesc}</p>

                                {/* Expandable Details */}
                                <div style={{
                                    maxHeight: expandedProject === project.id ? '1000px' : '0',
                                    opacity: expandedProject === project.id ? 1 : 0,
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    marginTop: expandedProject === project.id ? 16 : 0,
                                    paddingTop: expandedProject === project.id ? 16 : 0,
                                    paddingBottom: expandedProject === project.id ? 8 : 0,
                                    paddingLeft: expandedProject === project.id ? 14 : 0,
                                    paddingRight: expandedProject === project.id ? 14 : 0,
                                    borderLeft: expandedProject === project.id ? '3px solid #3b82f6' : '3px solid transparent',
                                    background: expandedProject === project.id ? 'rgba(59, 130, 246, 0.03)' : 'transparent',
                                    borderRadius: '8px'
                                }}>
                                    <div>
                                        {/* Full Description */}
                                        <p style={{
                                            margin: '0 0 16px 0',
                                            color: 'var(--text)',
                                            fontSize: 14,
                                            lineHeight: 1.6
                                        }}>{project.fullDesc}</p>

                                        {/* Tech Stack */}
                                        {project.techStack && (
                                            <>
                                                <p style={{
                                                    margin: '0 0 6px 0',
                                                    color: 'var(--text)',
                                                    fontSize: 13,
                                                    fontWeight: 600
                                                }}>🛠️ Technology Stack</p>
                                                <p style={{
                                                    margin: '0 0 16px 0',
                                                    color: 'var(--muted)',
                                                    fontSize: 13,
                                                    lineHeight: 1.6
                                                }}>{project.techStack}</p>
                                            </>
                                        )}

                                        {/* Key Features Header */}
                                        <p style={{
                                            margin: '0 0 8px 0',
                                            color: 'var(--text)',
                                            fontSize: 14,
                                            fontWeight: 600
                                        }}>✨ Key Features</p>

                                        <ul style={{ margin: '0 0 12px 0', paddingLeft: 20, color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>
                                            {project.features.map((feature, idx) => (
                                                <li key={idx} style={{ marginBottom: 6 }}>{feature}</li>
                                            ))}
                                        </ul>

                                        {/* Achievements */}
                                        {project.achievements && (
                                            <>
                                                <p style={{
                                                    margin: '0 0 6px 0',
                                                    color: 'var(--text)',
                                                    fontSize: 13,
                                                    fontWeight: 600
                                                }}>🏆 Achievements & Impact</p>
                                                <p style={{
                                                    margin: '0',
                                                    color: 'var(--muted)',
                                                    fontSize: 13,
                                                    lineHeight: 1.6,
                                                    fontStyle: 'italic'
                                                }}>{project.achievements}</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="tags" style={{ marginTop: 14, marginBottom: 14 }}>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="buttons" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                                    <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                                    {project.demo && project.demo !== '#' && (
                                        <a className="btn btn-ghost" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
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

                {/* Call to Action Card */}
                <div className="card" style={{ marginTop: 30, background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(96, 165, 250, 0.02))' }}>
                    <h3 style={{ margin: '0 0 12px 0', fontWeight: 600 }}>Let's Build Something Amazing</h3>
                    <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>
                        Interested in collaborating on a project or discussing technology solutions? I'm always open to new opportunities and challenges in AI/ML, blockchain, and full-stack development. Feel free to reach out!
                    </p>
                </div>
            </section>
        </main>
    )
}
