import React from 'react'

export default function AboutPage() {
    return (
        <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '36px 20px' }}>
            <section className="fade-in">
                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>About Me</h1>

                <div className="card" style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Neural Architect & Code Craftsman</h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--muted)' }}>
                        Hey there! I'm <strong style={{ color: 'var(--text)' }}>Teja</strong>, an AI/ML Alchemist and Full-Stack Architect passionate about transforming complex problems into elegant, intelligent solutions. As a B.Tech student specializing in <strong style={{ color: 'var(--text)' }}>Artificial Intelligence & Machine Learning</strong>, I'm on a mission to forge the convergence of cutting-edge AI and full-stack development to build next-generation intelligent systems.
                    </p>
                    <p style={{ lineHeight: 1.8, color: 'var(--muted)', marginTop: 12 }}>
                        My journey in tech is driven by an insatiable curiosity to explore how machine learning, computer vision, natural language processing, and web technologies can work together to create meaningful impact. I believe in <strong style={{ color: 'var(--text)' }}>learning by building</strong> – every project is an opportunity to push boundaries and discover new possibilities.
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Education & Learning Journey</h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--muted)' }}>
                        <strong style={{ color: 'var(--text)' }}>B.Tech in Artificial Intelligence & Machine Learning</strong><br />
                        Currently pursuing my undergraduate degree with a strong focus on:
                    </p>
                    <ul style={{ lineHeight: 1.8, color: 'var(--muted)', paddingLeft: 20, marginTop: 8 }}>
                        <li>Deep Learning & Neural Network Architectures</li>
                        <li>Computer Vision & Image Processing</li>
                        <li>Natural Language Processing & LLMs</li>
                        <li>Data Science & Statistical Analysis</li>
                        <li>Full-Stack Web Development</li>
                    </ul>
                </div>

                <div className="card" style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Technical Arsenal</h2>
                    <div style={{ marginTop: 12 }}>
                        <p style={{ marginBottom: 8, color: 'var(--text)', fontWeight: 500 }}>AI/ML & Data Science:</p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                            <span className="tag">Python</span>
                            <span className="tag">TensorFlow</span>
                            <span className="tag">PyTorch</span>
                            <span className="tag">OpenCV</span>
                            <span className="tag">DeepFace</span>
                            <span className="tag">NLP</span>
                            <span className="tag">Scikit-learn</span>
                        </div>

                        <p style={{ marginBottom: 8, color: 'var(--text)', fontWeight: 500 }}>Frontend Development:</p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                            <span className="tag">React</span>
                            <span className="tag">JavaScript</span>
                            <span className="tag">HTML/CSS</span>
                            <span className="tag">Responsive Design</span>
                        </div>

                        <p style={{ marginBottom: 8, color: 'var(--text)', fontWeight: 500 }}>Backend & Database:</p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                            <span className="tag">Flask</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">MongoDB</span>
                            <span className="tag">SQL</span>
                            <span className="tag">REST APIs</span>
                        </div>

                        <p style={{ marginBottom: 8, color: 'var(--text)', fontWeight: 500 }}>Tools & Platforms:</p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            <span className="tag">Git & GitHub</span>
                            <span className="tag">Vercel</span>
                            <span className="tag">Hugging Face</span>
                            <span className="tag">Google Colab</span>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Featured Projects</h2>
                    <div style={{ marginTop: 12 }}>
                        <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: 'var(--text)' }}>Emotion-Aware Study Assistant</h3>
                            <p style={{ lineHeight: 1.7, color: 'var(--muted)', fontSize: 14 }}>
                                An intelligent Flask-based platform that revolutionizes personalized learning by analyzing student engagement through <strong>facial recognition</strong> and <strong>voice analysis</strong>. Using computer vision (DeepFace, OpenCV) and machine learning (TensorFlow), it monitors emotional states in real-time and provides tailored study recommendations. Features include real-time emotion detection, voice tone analysis, personalized study paths, and comprehensive session history dashboards.
                            </p>
                        </div>

                        <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: 'var(--text)' }}>FixHub</h3>
                            <p style={{ lineHeight: 1.7, color: 'var(--muted)', fontSize: 14 }}>
                                A comprehensive community-driven marketplace connecting homeowners with local service professionals. This full-stack application features <strong>real-time messaging</strong>, service provider ratings and reviews, GPS-based provider matching, secure payment integration, and robust booking management. Built with React frontend and Node.js backend with MongoDB, showcasing end-to-end development capabilities.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: 'var(--text)' }}>Sentiment Analysis Web App</h3>
                            <p style={{ lineHeight: 1.7, color: 'var(--muted)', fontSize: 14 }}>
                                A sophisticated NLP application that performs <strong>real-time sentiment analysis</strong> on text input. Features pre-trained models for emotion classification, batch processing capabilities, interactive sentiment visualization charts, multi-language support, and a REST API for external integrations. Demonstrates deep understanding of natural language processing and deployment of ML models in production.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Community & Events</h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--muted)', marginBottom: 12 }}>
                        I'm an active participant in the tech community, constantly learning and networking at industry events:
                    </p>
                    <ul style={{ lineHeight: 1.8, color: 'var(--muted)', paddingLeft: 20 }}>
                        <li><strong>AI & LLMs Meetup @ IIITH:</strong> Explored cutting-edge discussions on Large Language Models, Hugging Face tools, model fine-tuning, and ethical AI practices</li>
                        <li><strong>BITS Pilani Workshop & Hackathon:</strong> Collaborated with talented peers to tackle real-world challenges, showcasing creative problem-solving and technical skills</li>
                        <li><strong>SDC AI Summit @ Microsoft:</strong> Engaged with industry leaders on emerging AI trends, from generative AI to edge computing and neural network innovations</li>
                        <li><strong>DevDays Hyderabad - AI/ML Edition:</strong> Explored "Building Smarter Agents - The Power of Tool Calls in AI" with hands-on demos and engaging discussions</li>
                    </ul>
                </div>

                <div className="card" style={{ marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>What Drives Me</h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--muted)' }}>
                        I'm fascinated by the intersection of AI and practical applications. Whether it's building emotion-aware systems that understand human behavior, creating platforms that connect communities, or developing intelligent tools that make life easier – I'm driven by the impact technology can have on people's lives.
                    </p>
                    <p style={{ lineHeight: 1.8, color: 'var(--muted)', marginTop: 12 }}>
                        My approach combines <strong>rigorous technical depth</strong> with <strong>creative problem-solving</strong>. I believe the best solutions emerge when we blend machine learning sophistication with intuitive user experiences, and when we stay curious about emerging technologies while building practical, deployable systems.
                    </p>
                </div>

                <div className="card">
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Let's Connect & Collaborate</h2>
                    <p style={{ lineHeight: 1.8, color: 'var(--muted)' }}>
                        I'm always excited to collaborate on innovative AI/ML projects, discuss emerging technologies, or simply connect with fellow developers and tech enthusiasts. Whether you have an interesting project idea, want to discuss the latest in machine learning, or are looking for collaboration opportunities – I'd love to hear from you!
                    </p>
                    <p style={{ lineHeight: 1.8, color: 'var(--muted)', marginTop: 12 }}>
                        Let's build something amazing together and push the boundaries of what's possible with artificial intelligence! 🚀
                    </p>
                </div>
            </section>
        </main>
    )
}
