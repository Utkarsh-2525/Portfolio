/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
import React from "react";
import SkillCard from "./SkillCard";

const skillIcons = [
    { name: "Java", icon: "java" },
    { name: "C#", icon: "cs" },
    { name: "Git", icon: "git" },
    { name: "Python", icon: "python" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Angular", icon: "angular" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Postman", icon: "postman" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Express.js", icon: "express" },
    { name: "Blender", icon: "blender" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Unity", icon: "unity" },
    { name: "Spring", icon: "spring" },
    { name: "RabbitMQ", icon: "rabbitmq" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Grafana", icon: "grafana" },
    { name: "Prometheus", icon: "prometheus" },
    { name: "Kafka", icon: "kafka" },
    { name: "Maven", icon: "maven" },
    { name: "MySQL", icon: "mysql" },
    { name: "Yarn", icon: "yarn" },
    { name: "Vite", icon: "vite" },
    { name: "npm", icon: "npm" },
    { name: "Figma", icon: "figma" },
    { name: ".NET", icon: "dotnet" },
    { name: "Material UI", icon: "materialui" },
    { name: "IntelliJ IDEA", icon: "idea" },
    { name: "PyCharm", icon: "pycharm" },
    { name: "WebStorm", icon: "webstorm" },
    { name: "VS Code", icon: "vscode" },
    { name: "LaTeX", icon: "latex" },
    { name: "Netlify", icon: "netlify" },
    { name: "Vercel", icon: "vercel" },
    { name: "Cloudflare", icon: "cloudflare" }
];

const Skills: React.FC = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to design and develop high-performance applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillIcons.map(({ icon, name }, index) => (
                        <SkillCard
                            key={index}
                            icon={`https://skillicons.dev/icons?i=${icon}`}
                            name={name}
                            classes='reveal-up'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
