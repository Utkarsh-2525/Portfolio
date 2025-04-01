// src/components/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
    return (
        <div>
            <h1>Projects</h1>
            <p>Here are some of the projects I've worked on:</p>
            <ul>
                <li>
                    <h3>Project 1: Portfolio Website</h3>
                    <p>A personal website to showcase my skills and projects.</p>
                </li>
                <li>
                    <h3>Project 2: E-Commerce Site</h3>
                    <p>An e-commerce site built with React and Node.js to sell products online.</p>
                </li>
                <li>
                    <h3>Project 3: Chat Application</h3>
                    <p>A real-time chat application using WebSockets and Express.</p>
                </li>
            </ul>
        </div>
    );
}

export default Projects;
