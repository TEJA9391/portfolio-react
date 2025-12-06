import React, { useState } from 'react'

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false)

    const socialLinks = [
        {
            name: 'WhatsApp',
            url: 'https://wa.me/919391055878',
            color: '#25D366',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.02.5C6.06.5 1.02 5.54 1.02 11.5c0 2.02.53 3.9 1.46 5.57L.5 23.5l6.71-1.76c1.55.86 3.3 1.33 5.08 1.33 5.96 0 10.99-5.04 10.99-11 0-3-1.22-5.77-3.76-7.59z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/tejr_tej/',
            color: '#E1306C',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'Twitter/X',
            url: 'https://twitter.com/tejr_tej/',
            color: '#1DA1F2',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.33.48-2.05.57.74-.44 1.31-1.14 1.58-1.98-.7.42-1.48.72-2.31.88A3.6 3.6 0 0 0 12.6 8.5c0 .28.03.56.1.82C8.2 9.2 5 7.1 2.9 4.1c-.3.52-.48 1.12-.48 1.76 0 1.22.62 2.3 1.58 2.93-.57-.02-1.11-.18-1.58-.44v.05c0 1.7 1.22 3.12 2.84 3.44-.3.08-.6.12-.92.12-.23 0-.45-.02-.67-.06.45 1.4 1.74 2.42 3.27 2.45A7.24 7.24 0 0 1 2 18.58 10.2 10.2 0 0 0 7.27 20c7.55 0 11.68-6.26 11.68-11.68v-.53c.8-.6 1.5-1.35 2.06-2.2-.73.33-1.52.55-2.34.65z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/BOORA RAVITEJA',
            color: '#0A66C2',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM.3 24h4.4V7.99H.3V24zM8.23 24h4.22v-8.03c0-1.9.36-3.56 2.74-3.56 2.36 0 2.37 2.15 2.37 3.66V24h4.22V14.56c0-4.89-1.04-8.63-6.4-8.63-2.78 0-4.53 1.55-5.29 2.64h.07V7.99H8.23c.06 1.85 0 16.01 0 16.01z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'GitHub',
            url: 'https://github.com/TEJA9391',
            color: '#333333',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.6 2.99 8.51 7.14 9.9.52.09.71-.23.71-.5 0-.25-.01-.92-.01-1.8-2.9.63-3.51-1.4-3.51-1.4-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.62.07-.62 1.04.07 1.58 1.08 1.58 1.08.92 1.56 2.42 1.11 3.01.85.09-.66.36-1.11.66-1.36-2.32-.26-4.76-1.16-4.76-5.16 0-1.14.4-2.07 1.06-2.8-.11-.26-.46-1.32.1-2.75 0 0 .87-.28 2.85 1.06a9.77 9.77 0 0 1 2.6-.35c.88 0 1.77.12 2.6.35 1.98-1.34 2.85-1.06 2.85-1.06.56 1.43.21 2.49.1 2.75.66.73 1.06 1.66 1.06 2.8 0 4.01-2.45 4.9-4.78 5.16.37.32.7.95.7 1.92 0 1.39-.01 2.51-.01 2.85 0 .28.19.6.72.5 4.15-1.39 7.14-5.3 7.14-9.9C23.1 5.33 18.27.5 12 .5z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'Discord',
            url: 'https://discord.com/',
            color: '#5865F2',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.88 4.58A19.9 19.9 0 0 0 16.7 3c-.28.5-.6 1.16-.82 1.68-2.5-.38-5-.38-7.5 0-.22-.52-.54-1.18-.82-1.68A19.9 19.9 0 0 0 3.12 4.58C2.05 8.06 2.05 11.5 2.5 14.88c2.28 1.7 4.62 2.78 7.08 3.33.54-.78.98-1.6 1.28-2.44-2.05-.6-3.53-1.6-4-2.8 1.6.94 3.28 1.22 4.9 1.13.5-.38.98-.8 1.44-1.24 1.34.28 2.68.28 4 0 .46.44.94.86 1.44 1.24 1.62.09 3.3-.19 4.9-1.13-.47 1.2-1.95 2.2-4 2.8.3.84.74 1.66 1.28 2.44 2.46-.55 4.8-1.63 7.08-3.33.46-3.38.46-6.82-1.62-10.3z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/',
            color: '#FF0000',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2s-.2-1.7-.8-2.5c-.7-.9-1.6-1-2-1.1C16.9 2.2 12 2.2 12 2.2s-4.9 0-8.7.4c-.5.1-1.4.2-2 1.1-.6.8-.8 2.5-.8 2.5S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.5c.7.9 1.6 1 2 1.1 2.7.5 8.6.5 8.6.5s4.9 0 8.7-.4c.5-.1 1.4-.2 2-1.1.6-.8.8-2.5.8-2.5s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8z" fill="currentColor" /></svg>
            )
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/',
            color: '#1877F2',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.1C22 6.5 17.5 2 11.9 2S2 6.5 2 12.1c0 5 3.7 9.1 8.5 9.9v-7h-2.6v-2.9h2.6V9.2c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7c4.8-.8 8.5-4.9 8.5-9.9z" fill="currentColor" /></svg>
            )
        }
    ]

    return (
        <>
            <div className="page">
                <section className="contact-section">
                    <div className="contact-container">
                        <div className="contact-content fade-in">
                            <h2 className="contact-title">
                                Let's Connect
                            </h2>
                            <p className="contact-description">
                                B.Tech AI/ML student passionate about building intelligent solutions and full-stack web applications. Experienced in React, Python, and machine learning.
                            </p>

                            <div className="contact-actions">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="btn-resume"
                                >
                                    📄 Resume
                                </a>

                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="btn-contact"
                                >
                                    📋 Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Circular Modal Popup */}
            {isOpen && (
                <>
                    <div className="contact-overlay" onClick={() => setIsOpen(false)}></div>
                    <div id="contact-circle" className={`circular-modal ${isOpen ? 'open' : ''}`}>


                        <div className="circular-container">
                            {/* Center Share Button */}
                            <div className="center-btn" title="Share">
                                📤
                            </div>

                            {/* Social Icons in Circle */}
                            {socialLinks.map((social, idx) => {
                                const angle = (idx / socialLinks.length) * 360
                                const radius = 65
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
                                            animationDelay: `${idx * 0.08}s`
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
            )}
        </>
    )
}
