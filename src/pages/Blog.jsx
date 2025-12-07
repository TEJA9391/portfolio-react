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
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [sortOrder, setSortOrder] = useState('newest')


    const posts = [
        {
            title: 'AI & LLMs Meetup at IIITH: Key Insights',
            date: 'March 30, 2025',
            category: 'Meetup',
            dateValue: new Date('2025-03-30'),
            keywords: ['AI', 'LLM', 'Machine Learning', 'IIITH', 'Swecha', 'Hugging Face', 'NLP', 'Transformers', 'Deep Learning', 'Neural Networks'],
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
            date: 'March 22, 2025',
            category: 'Workshop',
            dateValue: new Date('2025-03-22'),
            keywords: ['BITS Pilani', 'Hackathon', 'Workshop', 'Coding', 'Competition', 'Innovation', 'Problem Solving', 'Collaboration', 'Tech'],
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
            date: 'March 15, 2025',
            category: 'Conference',
            dateValue: new Date('2025-03-15'),
            keywords: ['Microsoft', 'AI Summit', 'SDC', 'Cloud', 'Azure', 'Artificial Intelligence', 'Tech Conference', 'Networking', 'Innovation'],
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
            date: 'March 01, 2025',
            category: 'Conference',
            dateValue: new Date('2025-03-01'),
            keywords: ['DevDays', 'Hyderabad', 'AI', 'ML', 'Tool Calls', 'LLM', 'Agents', 'Developer Conference', 'Tech Talk'],
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

    // Filter and search logic
    const filteredPosts = posts
        .filter(post => {
            // Enhanced search: title, excerpt, full content, and keywords
            const query = searchQuery.toLowerCase()
            const matchesSearch = post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.fullContent.toLowerCase().includes(query) ||
                post.keywords.some(keyword => keyword.toLowerCase().includes(query))
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
            return matchesSearch && matchesCategory
        })
        .sort((a, b) => {
            if (sortOrder === 'newest') {
                return b.dateValue - a.dateValue
            }
            return a.dateValue - b.dateValue
        })

    const categories = ['All', ...new Set(posts.map(post => post.category))]

    return (
        <main className="blog-container">
            <section className="fade-in">
                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Events</h1>
                <p style={{ color: 'var(--muted)', marginBottom: 20 }}>My journey through tech events, meetups, and conferences</p>

                {/* Search and Filter Controls */}
                <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="🔍 Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            background: 'var(--card-bg)',
                            color: 'var(--text)',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(0, 0, 0, 0.1)'}
                    />

                    {/* Category Filters and Sort */}
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        border: 'none',
                                        background: selectedCategory === category ? '#3b82f6' : 'rgba(59, 130, 246, 0.1)',
                                        color: selectedCategory === category ? 'white' : 'var(--text)',
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (selectedCategory !== category) {
                                            e.target.style.background = 'rgba(59, 130, 246, 0.2)'
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (selectedCategory !== category) {
                                            e.target.style.background = 'rgba(59, 130, 246, 0.1)'
                                        }
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Sort Dropdown */}
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                background: 'var(--card-bg)',
                                color: 'var(--text)',
                                fontSize: '13px',
                                cursor: 'pointer',
                                outline: 'none'
                            }}
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>

                    {/* Results count */}
                    <p style={{ color: 'var(--muted)', fontSize: '13px', margin: 0 }}>
                        Showing {filteredPosts.length} of {posts.length} events
                    </p>
                </div>

                <div style={{ display: 'grid', gap: 24 }}>
                    {filteredPosts.map((post, idx) => (
                        <div
                            key={idx}
                            className="blog-card"
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                                <h3 className="blog-title" style={{ margin: 0 }}>{post.title}</h3>
                                <span style={{
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    background: 'rgba(59, 130, 246, 0.15)',
                                    color: '#3b82f6',
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {post.category}
                                </span>
                            </div>
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
