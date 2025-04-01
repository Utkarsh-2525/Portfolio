import React from "react";

const techStack = [
    { name: "Java", icon: "java" },
    { name: "C#", icon: "cs" },
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "js" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Git", icon: "git" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "CSS", icon: "css" },
    { name: "Figma", icon: "figma" },
    { name: "GitHub", icon: "github" },
];

const TechStack: React.FC = () => {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Tech Stack</h1>
            <div style={containerStyle}>
                {techStack.map((tech, index) => (
                    <div key={index} style={iconStyle}>
                        <img src={`https://skillicons.dev/icons?i=${tech.icon}`} alt={tech.name} style={{ width: "50px", height: "50px" }}/>
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Inline styles
const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
};

const iconStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    textAlign: "center",
};

export default TechStack;
