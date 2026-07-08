import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

// CRITICAL DEBUGGING: Global Error Handler to catch white screen issues
window.onerror = function (msg, url, lineNo, columnNo, error) {
    const div = document.createElement('div');
    div.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:white; color:red; padding:20px; z-index:999999; white-space:pre-wrap; font-family:monospace; overflow:auto;';
    div.innerHTML = `<h1>💥 CRITICAL ERROR 💥</h1>
    <h3>${msg}</h3>
    <p><strong>Source:</strong> ${url}:${lineNo}:${columnNo}</p>
    <pre>${error?.stack || 'No stack trace'}</pre>`;
    document.body.appendChild(div);
    return false;
};

// Debug log to confirm script execution
console.log('🚀 App Starting...');

const rootElement = document.getElementById('root');
if (!rootElement) {
    console.error('💥 Failed to find root element!');
} else {
    console.log('✅ Root element found, rendering...');
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </React.StrictMode>
    );
}
