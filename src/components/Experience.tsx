/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
import {Briefcase} from "lucide-react";

interface ExperienceItem {
    role: string;
    company: string;
    duration: string;
    description: string;
    link?: string;
}

const experiences: ExperienceItem[] = [
    {
        role: "Associate Analyst I",
        company: "AML RightSource",
        duration: "Upcoming(June 2025)",
        description:
            "Work with clients (banks and non-bank institutions) to provide advice and counsel so that they ensure their financial compliance and to fight financial crimes. Detect and investigate unusual financial activity by performing detailed monitoring of moderate to complex account activity and ensure compliance with regulatory and operational policies.",
        link: "https://amlrightsource.com/",
    },
    {
        role: "Student Research Associate",
        company: "Indian Institute of Technology, Kanpur",
        duration: "July 2023 – Present",
        description:
            "• Designed, developed and deployed Virtual Labs for Virtual Reality(VR) headsets.\n" +
            "• Designed the FrontEnd of Employee Resource Planning(ERP) web application for all the interns and employees working under the Virtual Labs project at IIT Kanpur.",
        link: "https://erp.ebootathon.com/",
    },
    {
        role: "Member",
        company: "IEEE PSIT Student Branch",
        duration: "December 2021 – April 2024",
        description:
            "• Plan and organise events for the societies and prepare reports and upload them on vTools.\n" +
            "• Collaborate with various members of the branch to organise events and workshops."
    },
    {
        role: "Graduation in Computer Science and Engineering (AIML)",
        company: "Pranveer Singh Institute of Technology, Kanpur",
        duration: "November 2021 – July 2025",
        description:
            "Bachelor of Technology (B.Tech) in Computer Science and Engineering (AIML) with specialization in Artificial Intelligence and Machine Learning."
    },
    {
        role: "Intermediate (XII)",
        company: "Mercy Memorial School, Kanpur",
        duration: "March 2020 – April 2021",
        description:
            "Science stream (Physics, Chemistry, Mathematics & Computer) with 84.25% marks.",
        // link: "https://utkarsh-singh.com/",
    },
    {
        role: "High School (X)",
        company: "Mercy Memorial School, Kanpur",
        duration: "March 2018 – April 2019",
        description:
            "Science stream with 85.6% marks.",
        // link: "https://utkarsh-singh.com/",
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Experience & Education
                </h2>
                <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6 reveal-up">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="relative mb-10 p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors reveal-up"
                        >
                            <div className="absolute -left-3.5 top-4">
                                <div
                                    className="w-7 h-7 bg-sky-400 rounded-full flex items-center justify-center text-zinc-950 shadow-lg">
                                    <Briefcase size={16}/>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {exp.role} – {" "}
                                <span className="text-sky-400">{exp.company}</span>
                            </h3>
                            <span className="text-sm text-zinc-400">{exp.duration}</span>
                            <p className="mt-2 text-zinc-300 whitespace-pre-line">{exp.description}</p>
                            {exp.link && (
                                <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 inline-block text-sm text-sky-400 hover:underline"
                                >
                                    View Work →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
