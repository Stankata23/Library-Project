import React from 'react'
import Navbar from '../assets/Components/Navbar/Navbar';
import './CSS/GanreTemplate.css';

function GanreTemplate({ title, children, background }) {
    return (
        <div
            className="ganre-template"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}>
            <Navbar />
            <header className="ganre-header container">
                <h1>{title}</h1>
            </header>
            <main className="ganre-content container">
                {children}
            </main>
        </div>
    );
}

export default GanreTemplate
