/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
import {FaEnvelope, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa6";
const socialLinks = [
    {
        href: 'https://www.github.com/Utkarsh-2525',
        icon: <FaGithub size={24} />,
        alt: 'GitHub'
    },
    {
        href: 'https://www.linkedin.com/in/m-utkarsh2573',
        icon: <FaLinkedin size={24} />,
        alt: 'LinkedIn'
    },
    {
        href: 'https://www.x.com/M_Utkarsh2573',
        icon: <FaTwitter size={24} />,
        alt: 'Twitter X'
    },
    {
        href: 'mailto:utkarsh2573@gmail.com',
        icon: <FaEnvelope size={24} />,
        alt: 'Instagram'
    },
];

const Contact = () => {
    return (
        <section className="section" id='contact'>
            <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="mb-12 lg:mb-0 lg:flex-col">
                    <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
                        Contact me for collaboration.
                    </h2>
                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
                        Feel free to reach out to me for any collaboration or amazing project ideas!
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        {socialLinks.map(({href, icon}, key) => (
                            <a href={href} target='_blank' className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up" key={key}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
                <form action="https://getform.io/f/aroyznrb" className="xl:pl-10 2xl:pl-20" method='POST'>
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4">
                            <label htmlFor="name" className="label reveal-up">
                                Name
                            </label>
                            <input type="text" name="name" id="name" autoComplete='name' required placeholder='John Doe' className="text-field reveal-up"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="label reveal-up">
                                Email Address
                            </label>
                            <input type="email" name="email" id="email" autoComplete='email' required placeholder='johndoe@example.com' className="text-field reveal-up"/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="label reveal-up">
                            Message
                        </label>
                        <textarea name="message" id="message" className="text-field resize-y min-h-32 max-h-80 reveal-up" required placeholder='Hi!'></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;