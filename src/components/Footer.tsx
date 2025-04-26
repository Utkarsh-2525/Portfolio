/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
import { ButtonPrimary } from "./Button.tsx";
import {
    FaBriefcase,
    FaCloud,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaRegEnvelope,
    FaTwitter,
    FaUser
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const sitemap = [
    {
        label: "Home",
        icon: <FaHome size={12} />,
        href: "#home"
    },
    {
        label: "About",
        icon: <FaCloud size={12} />,
        href: "#about"
    },
    {
        label: "Work",
        icon: <FaBriefcase size={12} />,
        href: "#work"
    },
    {
        label: "Experience",
        icon: <FaUser size={12} />,
        href: "#experience"
    },
    {
        label: "Contact me",
        icon: <FaRegEnvelope size={12} />,
        href: "#contact"
    }
];

const socials = [
    {
        label: "GitHub",
        icon: <FaGithub size={12} />,
        href: "https://www.github.com/Utkarsh-2525"
    },
    {
        label: "LinkedIn",
        icon: <FaLinkedin size={12} />,
        href: "https://www.linkedin.com/in/m-utkarsh2573"
    },
    {
        label: "Twitter X",
        icon: <FaTwitter size={12} />,
        href: "https://www.x.com/M_Utkarsh2573"
    },
    {
        label: "Instagram",
        icon: <FaInstagram size={12} />,
        href: "https://www.instagram.com/utkarsh_2573_"
    }
];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s connect & work together!
                        </h2>
                        <ButtonPrimary
                            href="mailto:utkarsh2573@gmail.com"
                            label="Start Project"
                            icon="chevron_right"
                            classes="reveal-up"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">SiteMap</p>
                            <ul>
                                {sitemap.map(({ label, href, icon }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className="flex items-center gap-2 text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {icon}
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2 reveal-up">Socials</p>
                            <ul>
                                {socials.map(({ label, href, icon }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {icon}
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="/" className="logo reveal-up">
                        <img
                            src="/images/Melogo.png"
                            width={120}
                            height={120}
                            alt="Logo"
                        />
                    </a>
                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2025 <span className="text-zinc-200">M.Utkarsh</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
