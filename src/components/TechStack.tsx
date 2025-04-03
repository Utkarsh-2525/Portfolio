import React from "react";

const techStack = [
        { "name": "Java", "icon": "java" },
        { "name": "C#", "icon": "cs" },
        { "name": "Git", "icon": "git" },
        { "name": "Python", "icon": "python" },
        { "name": "Node.js", "icon": "nodejs" },
        { "name": "Angular", "icon": "angular" },
        { "name": "HTML", "icon": "html" },
        { "name": "CSS", "icon": "css" },
        { "name": "JavaScript", "icon": "javascript" },
        { "name": "MongoDB", "icon": "mongodb" },
        { "name": "Postman", "icon": "postman" },
        { "name": "React", "icon": "react" },
        { "name": "Next.js", "icon": "nextjs" },
        { "name": "Tailwind CSS", "icon": "tailwind" },
        { "name": "TypeScript", "icon": "typescript" },
        { "name": "Express.js", "icon": "express" },
        { "name": "Blender", "icon": "blender" },
        { "name": "Bootstrap", "icon": "bootstrap" },
        { "name": "Unity", "icon": "unity" },
        { "name": "Spring", "icon": "spring" },
        { "name": "RabbitMQ", "icon": "rabbitmq" },
        { "name": "Docker", "icon": "docker" },
        { "name": "Kubernetes", "icon": "kubernetes" },
        { "name": "Grafana", "icon": "grafana" },
        { "name": "Prometheus", "icon": "prometheus" },
        { "name": "Kafka", "icon": "kafka" },
        { "name": "Maven", "icon": "maven" },
        { "name": "MySQL", "icon": "mysql" },
        { "name": "Yarn", "icon": "yarn" },
        { "name": "Vite", "icon": "vite" },
        { "name": "npm", "icon": "npm" },
        { "name": "Figma", "icon": "figma" },
        { "name": ".NET", "icon": "dotnet" },
        { "name": "Material UI", "icon": "materialui" },
        { "name": "IntelliJ IDEA", "icon": "idea" },
        { "name": "PyCharm", "icon": "pycharm" },
        { "name": "WebStorm", "icon": "webstorm" },
        { "name": "VS Code", "icon": "vscode" },
        { "name": "LaTeX", "icon": "latex" },
        { "name": "Netlify", "icon": "netlify" },
        { "name": "Vercel", "icon": "vercel" },
        { "name": "Cloudflare", "icon": "cloudflare" }
];

const TechStack: React.FC = () => {
    return (
        <div style={backgroundStyle}>
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

const backgroundStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "20px",
    backgroundImage: require("../assets/tech_stack_enhanced.gif"),
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
};

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
