import React from 'react'
import { FaGoogle, FaWindows, FaYahoo } from 'react-icons/fa'

export default function EmailChooser({ isOpen, onClose, emailAddress }) {
    const emailServices = [
        {
            name: 'Gmail',
            description: 'Open in Google Mail',
            icon: <FaGoogle size={26} />,
            color: '#EA4335',
            url: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`
        },
        {
            name: 'Outlook',
            description: 'Open in Microsoft Outlook',
            icon: <FaWindows size={26} />,
            color: '#0078D4',
            url: `https://outlook.office.com/mail/deeplink/compose?to=${emailAddress}`
        },
        {
            name: 'Yahoo Mail',
            description: 'Open in Yahoo',
            icon: <FaYahoo size={26} />,
            color: '#6001D2',
            url: `https://compose.mail.yahoo.com/?to=${emailAddress}`
        }
    ]

    if (!isOpen) return null

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    zIndex: 9998,
                    animation: 'fadeIn 0.2s ease'
                }}
            />

            {/* Modal */}
            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'var(--card-bg)',
                    borderRadius: '20px',
                    padding: '32px',
                    zIndex: 9999,
                    boxShadow: '0 25px 70px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.1)',
                    minWidth: '400px',
                    maxWidth: '90%',
                    animation: 'slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
            >
                {/* Header */}
                <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                    <h3 style={{
                        margin: '0 0 8px 0',
                        fontSize: '24px',
                        fontWeight: 700,
                        letterSpacing: '-0.5px',
                        color: '#ffffff'
                    }}>
                        Send Email
                    </h3>
                    <p style={{
                        margin: 0,
                        color: '#e0e0e0',
                        fontSize: '15px',
                        lineHeight: '1.5'
                    }}>
                        Choose your preferred email service
                    </p>
                </div>

                {/* Email Service Options */}
                <div style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
                    {emailServices.map((service, idx) => (
                        <a
                            key={idx}
                            href={service.url}
                            target="_blank"
                            rel="noreferrer"
                            onClick={onClose}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '16px 18px',
                                borderRadius: '14px',
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                textDecoration: 'none',
                                color: 'var(--text)',
                                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                                e.currentTarget.style.transform = 'translateX(6px)'
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                                e.currentTarget.style.transform = 'translateX(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            <div
                                style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '13px',
                                    background: service.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    flexShrink: 0,
                                    boxShadow: `0 4px 12px ${service.color}40`
                                }}
                            >
                                {service.icon}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{
                                    fontWeight: 600,
                                    fontSize: '15px',
                                    marginBottom: '3px',
                                    letterSpacing: '-0.2px',
                                    color: '#ffffff'
                                }}>
                                    {service.name}
                                </div>
                                <div style={{
                                    fontSize: '13px',
                                    color: '#d1d1d1',
                                    letterSpacing: '-0.1px'
                                }}>
                                    {service.description}
                                </div>
                            </div>
                            <div style={{
                                color: '#b0b0b0',
                                fontSize: '20px',
                                opacity: 0.7,
                                transition: 'opacity 0.2s ease'
                            }}>
                                →
                            </div>
                        </a>
                    ))}
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        letterSpacing: '-0.2px'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    }}
                >
                    Cancel
                </button>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -48%) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
            `}</style>
        </>
    )
}
