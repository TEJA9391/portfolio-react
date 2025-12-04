import React, { useEffect, useState } from "react";
import "./ContactPopup.css";

export default function ContactPopup({ open, onClose, isDarkMode }) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            setIsAnimating(true);
        } else {
            document.body.style.overflow = "auto";
            setIsAnimating(false);
        }
    }, [open]);

    if (!open) return null;

    const contacts = [
        {
            name: "WhatsApp",
            icon: "📱",
            url: "https://wa.me/1234567890",
            color: "#25D366"
        },
        {
            name: "Instagram",
            icon: "📷",
            url: "https://instagram.com/",
            color: "#E1306C"
        },
        {
            name: "Discord",
            icon: "💬",
            url: "https://discord.com/",
            color: "#5865F2"
        },
        {
            name: "Facebook",
            icon: "👥",
            url: "https://facebook.com/",
            color: "#1877F2"
        }
    ];

    return (
        <div className="contact-overlay" onClick={onClose}>
            <div className={`contact-circular-menu ${isAnimating ? 'active' : ''} ${isDarkMode ? 'dark' : 'light'}`} onClick={(e) => e.stopPropagation()}>
                {/* Top-right close button */}
                <button className="contact-close-btn-top" onClick={onClose} title="Close">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Center button */}
                <button className="contact-center-btn" onClick={onClose} title="Close">
                    ✕
                </button>

                {/* Circular items */}
                {contacts.map((contact, idx) => (
                    <a
                        key={idx}
                        href={contact.url}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-circular-item"
                        style={{
                            '--index': idx,
                            '--total': contacts.length,
                            '--color': contact.color
                        }}
                        title={contact.name}
                    >
                        <span className="icon">{contact.icon}</span>
                        <span className="label">{contact.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
