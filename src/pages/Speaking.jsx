import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import BlockchainImg from '../assets/blockchain.png'
import EmotionStudyImg from '../assets/emotion-study.png'
import FixHubImg from '../assets/fixhub.png'
import IntelliAttendImg from '../assets/intelliattend.png'
import ThreatMatrixImg from '../assets/threatmatrix.png'
import SentimentImg from '../assets/sentiment.png'
import NetcatThumb from '../assets/netcat-thumb.png'

export default function Speaking() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
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
            demo: 'https://teja9391.github.io/FixHub/',
            image: FixHubImg,
            techStack: 'React 18, Node.js, Express.js, MongoDB, Firebase, Socket.io, Stripe API, Vercel, REST API',
            achievements: 'Successfully deployed platform handling 500+ service requests with 4.8/5 average satisfaction rating'
        },
        {
            id: 5,
            title: 'IntelliAttend: Faculty Mobile Hub',
            shortDesc: 'The Command Center for Modern Classroom Attendance. A professional Flutter application for faculty members of the IntelliAttend ecosystem.',
            fullDesc: 'The professional Flutter application for faculty members of the IntelliAttend ecosystem. It provides the tools to launch sessions, manage students, and monitor attendance integrity in real-time. The application features Session Orchestration with high-security handshake with classroom SmartBoards via 6-digit OTP, a Real-Time Live Monitor (Pulse-based dashboard showing students as they turn "Green" upon successful verification), and Sophisticated Analytics (Modular reports for student eligibility, attendance trends, and defaulter tracking). The UI is built with fluid animations, glassmorphism UI components, and a premium "Slide-to-Scan" haptic interface.',
            tags: ['Flutter', 'Mobile', 'Dart', 'Security', 'State Management'],
            features: [
                'Session Orchestration with SmartBoards via 6-digit OTP',
                'Real-Time Live Monitor showing verified students in pulse-based dashboard',
                'Sophisticated Analytics for student eligibility and trends',
                'Defaulter tracking and modular reports',
                'Modern UX with fluid animations and glassmorphism',
                'Premium "Slide-to-Scan" haptic interface',
                'Real-time Light/Dark mode syncing theme engine',
                'Encrypted JSON persistence for session data',
                'Modular Controller Pattern (Reports, Dashboard) for state management',
                'Segmented tab components for Analytics, Eligibility, and Defaulters'
            ],
            github: 'https://github.com/TEJA9391/IntelliAttend-Faculty-Mobile-App',
            demo: '#',
            image: IntelliAttendImg,
            techStack: 'Flutter (Stable), Dart, Encrypted Local Storage',
            achievements: 'Built high-security handshake protocol via 6-digit OTP and live pulse-based monitor dashboard'
        },
        {
            id: 6,
            title: 'ThreatMatrix AI: Advanced SOC Mainnet',
            shortDesc: 'A production-grade Security Operations Center (SOC) platform designed for real-time threat intelligence, neural visualization, and autonomous mitigation.',
            fullDesc: 'ThreatMatrix AI is a production-grade Security Operations Center (SOC) platform designed for real-time threat intelligence, neural visualization, and autonomous mitigation. It features a Neural Intelligence Mesh for high-fidelity visualization of global threat ingress, Autonomous Mitigation with real-time auto-blocking of malicious IPs, and Multi-Vector Detection for Fraud, Phishing, and Fake News identification.',
            tags: ['React 18', 'Tailwind CSS', 'Python', 'Flask', 'Security'],
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
            techStack: 'React 18, Tailwind CSS, Lucide Icons, Recharts, Framer Motion, Python Flask',
            achievements: 'Developed an advanced SOC dashboard with real-time neural visualization.',
            image: SentimentImg,
            techStack: 'Python 3.x, Flask, React 18, NLTK, spaCy, Transformers, BERT, scikit-learn, pandas, D3.js',
            achievements: 'Processed 10,000+ text samples with 89% accuracy using fine-tuned BERT models'
        },
        {
            id: 5,
            title: 'Cross-Device Private Chat using Netcat',
            shortDesc: 'A real-time private chat system using Netcat between an Ubuntu Virtual Machine and Android Termux over a TCP network — demonstrating TCP communication, port listening, and client-server architecture across two different platforms.',
            fullDesc: 'This hands-on cybersecurity project implements a fully functional, bidirectional private chat system using Netcat — the foundational networking utility often called the "Swiss army knife" of networking. The setup involves an Ubuntu Linux VM running inside VirtualBox (Bridged networking mode) as the server side, and an Android device using the Termux terminal emulator as the client. The Ubuntu VM is configured to listen on a specified TCP port using the nc -lvp command. The Android Termux app then connects to the VM\'s local IP address on that port using nc <ip> <port>. Once the TCP connection is established, any text typed on either terminal is immediately transmitted to the other device, creating a real-time, raw bidirectional chat channel. This project provides practical, first-principles insight into how TCP connections work, what raw socket communication looks like, and why encryption (like SSH/TLS) is essential in real-world applications.',
            tags: ['Netcat', 'TCP/IP', 'Ubuntu Linux', 'VirtualBox', 'Android Termux', 'Cybersecurity', 'Networking'],
            features: [
                'Configured Netcat listener (nc -lvp) on Ubuntu Linux inside VirtualBox (Bridged network mode)',
                'Established client connection from Android Termux using nc <ip> <port>',
                'Real-time bidirectional TCP communication — messages flow in both directions',
                'Cross-platform networking: Linux VM to Android device on same LAN',
                'Understanding of VirtualBox NAT vs Bridged networking and when each is needed',
                'Practical demonstration of raw TCP socket communication',
                'Insight into why encryption matters — Netcat sends data in plaintext',
                'Hands-on experience with Linux terminal commands and port management',
                'Understanding of firewall rules and how they affect port accessibility'
            ],
            github: '#',
            demo: '#',
            image: NetcatThumb,
            techStack: 'Ubuntu Linux, VirtualBox (Bridged Networking), Netcat (nc), Android Termux, TCP/IP Protocol',
            achievements: 'Successfully established live cross-device TCP chat; gained hands-on experience in networking fundamentals and cybersecurity concepts',
            detailRoute: '/projects/netcat',
            isCyberSec: true
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
                                    <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer"
                                        style={{ opacity: project.github === '#' ? 0.5 : 1, pointerEvents: project.github === '#' ? 'none' : 'auto', cursor: project.github === '#' ? 'not-allowed' : 'pointer' }}
                                    >
                                        {project.github === '#' ? 'Private' : 'GitHub'}
                                    </a>
                                    {project.demo && project.demo !== '#' && (
                                        <a className="btn btn-ghost" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                                    )}
                                    {project.detailRoute && (
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => navigate(project.detailRoute)}
                                            style={{ cursor: 'pointer', background: 'linear-gradient(135deg, #16a34a, #22c55e)', border: 'none' }}
                                        >
                                            🛡️ View Full Details →
                                        </button>
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

