import React, { useState } from 'react'
import './Blog.css'
import meetup1 from '../assets/meetup1.jpg'
import meetup2 from '../assets/meetup2.jpg'
import meetup3 from '../assets/meetup3.jpg'
import devdays1 from '../assets/devdays1.jpg'
import devdays2 from '../assets/devdays2.jpg'
import devdays3 from '../assets/devdays3.jpg'
import bits1 from '../assets/bits1.jpg'
import bits2 from '../assets/bits2.jpg'
import bits3 from '../assets/bits3.jpg'
import sdc1 from '../assets/sdc1.jpg'
import sdc2 from '../assets/sdc2.jpg'
import sdc3 from '../assets/sdc3.jpg'

export default function Blog() {
    const [expandedPost, setExpandedPost] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [visibleGalleries, setVisibleGalleries] = useState({})

    const posts = [
        {
            title: 'AI & LLMs Meetup at IIITH: Key Insights',
            date: 'March 15, 2025',
            excerpt: 'Had an amazing time at the AI & LLMs meetup at International Institute of Information Technology Hyderabad (IIITH), organized by Swecha!',
            images: [meetup1, meetup2, meetup3],
            fullContent: `Had an amazing time at the AI & LLMs meetup at International Institute of Information Technology Hyderabad (IIITH), organized by Swecha! The discussions around Large Language Models (LLMs) and Hugging Face tools were incredibly insightful, covering real-world applications, model fine-tuning, and ethical AI practices.

It was inspiring to connect with fellow AI enthusiasts, researchers, and developers, exchanging ideas on how these technologies are shaping the future. The event covered various aspects of machine learning and LLMs:

**Key Takeaways:**

• **Real-world Applications**: Explored how LLMs are being deployed in production environments, from chatbots to content generation and code assistance tools.

• **Model Fine-tuning**: Learned about techniques for adapting pre-trained models to specific tasks and domains, including parameter-efficient fine-tuning methods.

• **Hugging Face Ecosystem**: Discovered the power of Hugging Face's tools and libraries, including Transformers, Datasets, and the Hub for model sharing and collaboration.

• **Ethical AI Practices**: Engaged in meaningful discussions about bias mitigation, responsible AI development, and the importance of transparency in ML systems.

A big thanks to the organizers for fostering such an engaging learning environment! The networking opportunities and knowledge sharing made this event truly valuable.

Excited to explore more and apply these insights in real-world AI applications. Let's keep the conversation going and continue pushing the boundaries of what's possible with machine learning!
`
        },
        {
            title: 'BITS Pilani Workshop & Hackathon Experience',
            date: 'March 20, 2025',
            excerpt: 'Exciting Experience at the BITS Pilani, Campus Workshop & Hackathon! Had an amazing time participating in the Workshop & Hackathon at BITS Pilani College!',
            images: [bits1, bits2, bits3],
            fullContent: `Exciting Experience at the BITS Pilani, Campus Workshop & Hackathon!

Hyderabad

Had an amazing time participating in the Workshop & Hackathon at BITS Pilani College! It was a fantastic opportunity to learn, collaborate, and tackle real-world challenges with talented peers. The expert-led sessions provided valuable insights, and the competition pushed me to think creatively and innovate.

**Event Highlights:**

• **Expert-Led Workshops**: Gained valuable insights from industry professionals and experienced mentors who shared their knowledge and best practices.

• **Hands-On Hackathon**: Collaborated with talented peers to tackle real-world challenges, developing innovative solutions under time constraints.

• **Creative Problem-Solving**: The competition pushed me to think outside the box and approach problems from different angles.

• **Skill Showcase**: Had the opportunity to demonstrate my technical skills and learn from other participants' unique approaches.

• **Networking Opportunities**: Connected with fellow developers, innovators, and potential collaborators from diverse backgrounds.

Grateful for the experience, the networking opportunities, and the chance to showcase my skills. Events like these are invaluable for growth and learning in the tech community.

Looking forward to more such events in the future and continuing to build innovative solutions!
`
        },
        {
            title: 'SDC AI Summit at Microsoft',
            date: 'March 10, 2025',
            excerpt: 'Had an amazing experience at the SDC AI Summit at Microsoft. Great discussions, networking, and insights on the latest in AI.',
            images: [sdc1, sdc2, sdc3],
            fullContent: `Had an amazing experience at the SDC AI Summit at Microsoft!

Great discussions, networking, and insights on the latest in AI. The summit brought together industry leaders, researchers, and enthusiasts to explore cutting-edge developments in artificial intelligence and its transformative impact across industries.

**Summit Highlights:**

• **Latest AI Trends**: Engaged in deep discussions about emerging AI technologies, from generative AI to edge computing and neural network innovations.

• **Networking Opportunities**: Loved connecting with passionate minds from diverse backgrounds - researchers, developers, entrepreneurs, and AI enthusiasts sharing their unique perspectives.

• **Knowledge Sharing**: Participated in collaborative sessions where attendees exchanged ideas, best practices, and real-world implementation strategies.

• **Industry Insights**: Gained valuable insights from Microsoft experts and guest speakers on how AI is reshaping business, technology, and society.

• **Hands-On Demos**: Explored live demonstrations of cutting-edge AI tools and platforms, understanding their practical applications.

Huge thanks to the organizers and everyone who made it possible! Events like these are crucial for fostering innovation and building a vibrant AI community.

Excited for more such inspiring events in the future and continuing to explore the endless possibilities of artificial intelligence!
`
        },
        {
            title: 'DevDays Hyderabad - AI/ML Edition',
            date: 'March 2025',
            excerpt: 'Had an amazing time at DevDays Hyderabad - AI/ML Edition! Explored "Building Smarter Agents - The Power of Tool Calls in AI".',
            images: [devdays1, devdays2, devdays3],
            fullContent: `Had an amazing time at DevDays Hyderabad - AI/ML Edition (March 2025)!

Explored "Building Smarter Agents - The Power of Tool Calls in AI" with a great audience.

Engaging discussions, hands-on demos, and AI innovation.

Particularly in Large Language Models (LLMs) and their ability to integrate tool calls method enabling AI to interact with external systems.`
        },

    ]

    const toggleReadMore = (idx) => {
        setExpandedPost(expandedPost === idx ? null : idx)
    }

    const toggleGallery = (idx) => {
        setVisibleGalleries(prev => ({
            ...prev,
            [idx]: !prev[idx]
        }))
    }

    const renderContent = (content) => {
        return content.split('**').map((part, index) =>
            index % 2 === 1 ? (
                <strong key={index} style={{ color: 'var(--text)', fontWeight: 700 }}>
                    {part}
                </strong>
            ) : (
                part
            )
        )
    }

    return (
        <main className="blog-container">
            <section className="fade-in">
                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Blog</h1>
                <p style={{ color: 'var(--muted)', marginBottom: 30 }}>Thoughts on AI, web development, and building cool projects</p>

                <div style={{ display: 'grid', gap: 24 }}>
                    {posts.map((post, idx) => (
                        <div
                            key={idx}
                            className="blog-card"
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-date">{post.date}</p>

                            {/* Image Gallery Toggle & Display */}
                            {post.images && (
                                <>
                                    <button
                                        onClick={() => toggleGallery(idx)}
                                        className="view-photos-btn"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'var(--text)',
                                            padding: '8px 16px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            marginBottom: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                                    >
                                        <span>{visibleGalleries[idx] ? '📸 Hide Photos' : '📸 View Photos'}</span>
                                    </button>

                                    {visibleGalleries[idx] && (
                                        <div className="image-gallery" style={{ animation: 'fadeIn 0.5s ease' }}>
                                            {post.images.map((img, imgIdx) => (
                                                <div
                                                    key={imgIdx}
                                                    className="gallery-item"
                                                    onClick={() => setSelectedImage(img)}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`${post.title} - Image ${imgIdx + 1}`}
                                                        className="gallery-image"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}

                            <p className="blog-content">
                                {expandedPost === idx ? renderContent(post.fullContent) : post.excerpt}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    toggleReadMore(idx)
                                }}
                                className="read-more-btn"
                            >
                                {expandedPost === idx ? 'Read less ←' : 'Read more →'}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Full Screen Image Overlay */}
            {selectedImage && (
                <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="fullscreen-content" onClick={e => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt="Full Screen"
                            className="fullscreen-image"
                        />
                        <button
                            className="close-button"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close full screen view"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </main>
    )
}
