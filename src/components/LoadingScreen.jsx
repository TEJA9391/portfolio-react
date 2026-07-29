import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        // Start sliding up after the typing and progress bar finish
        const leaveTimer = setTimeout(() => {
            setIsLeaving(true);
        }, 1800);

        // Completely unmount after sliding up animation finishes
        const completeTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 2600);

        return () => {
            clearTimeout(leaveTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`loading-screen ${isLeaving ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <div className="loading-logo">
                    <span>B</span>
                    <span>R</span>
                </div>
                <div className="loading-text">
                    <span className="typewriter">Boora Raviteja</span>
                </div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    );
}
