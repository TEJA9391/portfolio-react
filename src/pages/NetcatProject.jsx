import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NetcatVideo from '../assets/Private Chat using Netcat - Made with Clipchamp.mp4'

const tools = [
    { icon: '🐧', name: 'Ubuntu Linux', desc: 'Host OS running inside VirtualBox as the server-side listener' },
    { icon: '📦', name: 'VirtualBox', desc: 'Virtualization platform to run the Ubuntu VM on a Windows host' },
    { icon: '🔌', name: 'Netcat (nc)', desc: 'Swiss-army knife utility for TCP/UDP connections — used for both listening and connecting' },
    { icon: '📱', name: 'Android Termux', desc: 'Linux terminal emulator on Android acting as the TCP client' },
]

const skills = [
    { icon: '🌐', label: 'Networking Fundamentals', desc: 'Understanding of how devices communicate over a LAN/network' },
    { icon: '🔒', label: 'TCP/IP Communication', desc: 'Practical use of the TCP protocol for establishing a reliable data channel' },
    { icon: '🖥️', label: 'Linux Commands', desc: 'Working with terminal commands in Ubuntu Linux environment' },
    { icon: '🛡️', label: 'Cybersecurity Basics', desc: 'How raw TCP sockets can be leveraged — and why encryption matters' },
    { icon: '⚙️', label: 'Client-Server Architecture', desc: 'Setting up a listener (server) on Ubuntu and connecting a client (Termux)' },
]

const learnings = [
    'Netcat operates at the raw TCP/UDP socket level — no encryption by default, demonstrating why tools like SSH/TLS exist',
    'Port binding requires the listening side to expose a port that clients can reach over the network',
    'Cross-platform networking is achievable using just built-in tools when devices share the same network',
    'VirtualBox NAT vs Bridged networking — Bridged mode was required so the Android device could reach the VM\'s IP',
    'Real-world skill: quickly setting up a private channel for testing network reachability between two endpoints',
    'Reinforced understanding of how firewalls can block or allow specific TCP ports',
]

export default function NetcatProject() {
    const navigate = useNavigate()
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = () => {
        if (!videoRef.current) return
        if (videoRef.current.paused) {
            videoRef.current.play()
            setIsPlaying(true)
        } else {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }

    return (
        <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '36px 20px 60px' }}>

            {/* Back Button */}
            <button
                onClick={() => navigate('/projects')}
                className="btn btn-ghost"
                style={{ marginBottom: 28, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14 }}
            >
                ← Back to Projects
            </button>

            {/* ── HERO ── */}
            <section className="fade-in" style={{ marginBottom: 32 }}>
                <div style={{
                    background: 'linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #0d1117 100%)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: 16,
                    padding: '40px 36px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Grid overlay decoration */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: 'linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                        pointerEvents: 'none'
                    }} />

                    {/* Glow */}
                    <div style={{
                        position: 'absolute', top: -80, right: -80,
                        width: 300, height: 300,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {/* Breadcrumb badge */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            background: 'rgba(34,197,94,0.12)',
                            border: '1px solid rgba(34,197,94,0.3)',
                            borderRadius: 6, padding: '4px 12px',
                            fontSize: 12, color: '#22c55e', fontWeight: 600,
                            letterSpacing: '0.08em', marginBottom: 20
                        }}>
                            🛡️ CYBERSECURITY PROJECT
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(24px, 5vw, 40px)',
                            fontWeight: 800, margin: '0 0 16px 0',
                            color: '#f0fdf4',
                            lineHeight: 1.2
                        }}>
                            Cross-Device Private Chat<br />
                            <span style={{ color: '#22c55e' }}>using Netcat</span>
                        </h1>

                        <p style={{
                            color: 'rgba(240,253,244,0.7)', fontSize: 16,
                            lineHeight: 1.7, maxWidth: 680, margin: '0 0 28px 0'
                        }}>
                            A real-time private chat system built using Netcat between an Ubuntu Virtual Machine and
                            Android Termux over a TCP network — demonstrating practical networking and cybersecurity
                            concepts including TCP communication, port listening, and client-server architecture.
                        </p>

                        {/* Tags */}
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {['Netcat', 'TCP/IP', 'Ubuntu Linux', 'VirtualBox', 'Android Termux', 'Cybersecurity', 'Networking'].map(tag => (
                                <span key={tag} style={{
                                    background: 'rgba(34,197,94,0.12)',
                                    border: '1px solid rgba(34,197,94,0.25)',
                                    color: '#86efac',
                                    borderRadius: 6, padding: '4px 10px',
                                    fontSize: 12, fontWeight: 500
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIDEO DEMO ── */}
            <section className="card fade-in" style={{ marginBottom: 28, padding: 0, overflow: 'hidden', border: '1px solid rgba(34,197,94,0.2)' }}>
                <div style={{
                    background: 'linear-gradient(90deg, #0d1117, #0f2027)',
                    padding: '14px 20px',
                    borderBottom: '1px solid rgba(34,197,94,0.15)',
                    display: 'flex', alignItems: 'center', gap: 10
                }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#eab308' }} />
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e' }} />
                    </div>
                    <span style={{ color: '#86efac', fontSize: 13, fontFamily: 'monospace', marginLeft: 6 }}>
                        demo.mp4 — Private Chat via Netcat
                    </span>
                </div>
                <div style={{ position: 'relative', background: '#000', cursor: 'pointer' }} onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        src={NetcatVideo}
                        style={{ width: '100%', maxHeight: '500px', display: 'block', objectFit: 'contain' }}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        controls
                        preload="metadata"
                        playsInline
                    />
                </div>
                <div style={{
                    padding: '10px 20px',
                    background: 'linear-gradient(90deg, #0d1117, #0f2027)',
                    borderTop: '1px solid rgba(34,197,94,0.1)',
                    display: 'flex', alignItems: 'center', gap: 8
                }}>
                    <span style={{ fontSize: 11, color: 'rgba(134,239,172,0.6)', fontFamily: 'monospace' }}>
                        📽️ Live demonstration of Ubuntu VM ↔ Android Termux communication via Netcat TCP
                    </span>
                </div>
            </section>

            {/* ── PROJECT OVERVIEW ── */}
            <section className="card fade-in" style={{ marginBottom: 24, borderLeft: '3px solid #22c55e' }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#22c55e' }}>📋</span> Project Overview
                </h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 14px 0' }}>
                    This project implements a <strong>real-time, bidirectional private chat system</strong> using Netcat
                    — one of the most fundamental networking utilities in cybersecurity and Linux administration.
                    The setup involves two distinct platforms: an <strong>Ubuntu Linux VM</strong> (running inside
                    VirtualBox on a Windows host) acting as the server, and an <strong>Android device running Termux</strong>
                    acting as the client — both connected over the same TCP/IP network.
                </p>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
                    The Ubuntu VM listens on a specific TCP port using the <code style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', padding: '2px 6px', borderRadius: 4, fontFamily: 'monospace' }}>nc -lvp &lt;port&gt;</code> command.
                    The Android Termux connects to the VM's local IP and port using <code style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', padding: '2px 6px', borderRadius: 4, fontFamily: 'monospace' }}>nc &lt;ip&gt; &lt;port&gt;</code>.
                    Once connected, any text typed on either side is transmitted to the other — creating a raw, private chat channel.
                </p>

                {/* Key Features */}
                <div style={{ marginTop: 20 }}>
                    <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 10, color: 'var(--text)' }}>✨ Key Features</p>
                    <ul style={{ paddingLeft: 20, color: 'var(--muted)', lineHeight: 1.9, margin: 0, fontSize: 14 }}>
                        <li>Configured Netcat listener on Ubuntu Linux inside VirtualBox (Bridged networking mode)</li>
                        <li>Established client connection from Android Termux over the local TCP network</li>
                        <li>Enabled real-time <strong>bidirectional communication</strong> — messages flow both ways</li>
                        <li>Demonstrated cross-platform network connectivity (Linux VM ↔ Android)</li>
                        <li>Understanding of raw socket communication and its security implications</li>
                    </ul>
                </div>
            </section>

            {/* ── TOOLS USED ── */}
            <section className="card fade-in" style={{ marginBottom: 24, borderLeft: '3px solid #22c55e' }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#22c55e' }}>🛠️</span> Tools Used
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {tools.map(t => (
                        <div key={t.name} style={{
                            background: 'rgba(34,197,94,0.05)',
                            border: '1px solid rgba(34,197,94,0.15)',
                            borderRadius: 10, padding: '16px 18px'
                        }}>
                            <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>{t.name}</div>
                            <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{t.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SKILLS DEMONSTRATED ── */}
            <section className="card fade-in" style={{ marginBottom: 24, borderLeft: '3px solid #22c55e' }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#22c55e' }}>🎯</span> Skills Demonstrated
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
                    {skills.map(s => (
                        <div key={s.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                            <div style={{
                                width: 40, height: 40, borderRadius: 10,
                                background: 'rgba(34,197,94,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 18, flexShrink: 0, border: '1px solid rgba(34,197,94,0.2)'
                            }}>{s.icon}</div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{s.label}</div>
                                <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.5 }}>{s.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── KEY LEARNINGS ── */}
            <section className="card fade-in" style={{ marginBottom: 24, borderLeft: '3px solid #22c55e' }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#22c55e' }}>💡</span> Key Learnings
                </h2>
                <ul style={{ paddingLeft: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {learnings.map((l, i) => (
                        <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                            <span style={{
                                background: 'rgba(34,197,94,0.15)',
                                border: '1px solid rgba(34,197,94,0.25)',
                                color: '#22c55e',
                                borderRadius: 4, padding: '2px 8px',
                                fontSize: 12, fontWeight: 700, flexShrink: 0,
                                fontFamily: 'monospace', marginTop: 2
                            }}>{String(i + 1).padStart(2, '0')}</span>
                            <span style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>{l}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ── PROJECT OUTCOME ── */}
            <section className="card fade-in" style={{
                marginBottom: 24,
                background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(34,197,94,0.02) 100%)',
                borderLeft: '3px solid #22c55e'
            }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#22c55e' }}>🏆</span> Project Outcome
                </h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 14px 0', fontSize: 15 }}>
                    Successfully created a working <strong>private chat system</strong> between an Ubuntu VM and an Android
                    device over a TCP connection using Netcat. The project served as a practical, hands-on introduction to
                    network communication and cybersecurity fundamentals.
                </p>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 16 }}>
                    {[
                        { emoji: '✅', label: 'Working TCP Chat', sub: 'Ubuntu ↔ Android' },
                        { emoji: '🌐', label: 'Cross-Platform', sub: 'Linux VM + Termux' },
                        { emoji: '🔌', label: 'Real-time Comms', sub: 'Bidirectional messages' },
                        { emoji: '📚', label: 'Hands-on Learning', sub: 'Networking & Security' },
                    ].map(item => (
                        <div key={item.label} style={{
                            flex: '1 1 140px',
                            background: 'rgba(34,197,94,0.08)',
                            border: '1px solid rgba(34,197,94,0.18)',
                            borderRadius: 10, padding: '14px 16px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: 26, marginBottom: 6 }}>{item.emoji}</div>
                            <div style={{ fontWeight: 600, fontSize: 13 }}>{item.label}</div>
                            <div style={{ color: 'var(--muted)', fontSize: 12, marginTop: 2 }}>{item.sub}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── BACK BUTTON ── */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                    onClick={() => navigate('/projects')}
                    className="btn btn-ghost"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                    ← View All Projects
                </button>
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                    🏠 Back to Home
                </button>
            </div>
        </main>
    )
}
