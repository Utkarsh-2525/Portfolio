/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
import ProjectCard from "./ProjectCard.tsx";

const works = [
    {
        imgSrc: '/images/projects/iitk-vlabs.jpg',
        title: 'Employee Resource Planning(ERP) web application',
        tags: ['ERP', 'Virtual Labs', 'IITK', 'API'],
        projectLink: 'https://erp.ebootathon.com/'
    },
    {
        imgSrc: '/images/projects/budgetkart.png',
        title: 'Full stack E-Commerce Website',
        tags: ['API', 'Spring Boot', 'Angular'],
        projectLink: 'https://github.com/Utkarsh-2525/E-Commerce-Website.git'
    },
    {
        imgSrc: '/images/projects/readers-paradise.png',
        title: 'Readers Paradise Library app',
        tags: ['API', 'SPA'],
        projectLink: 'https://github.com/Utkarsh-2525/Readers-Paradise-The-Library-App-.git'
    },
    {
        imgSrc: '/images/projects/atm.jpg',
        title: 'ATM Simulation Application',
        tags: ['Desktop-App', 'Development'],
        projectLink: 'https://github.com/Utkarsh-2525/ATM-Simulation-App.git'
    },
    // {
    //     imgSrc: '/images/project-5.jpg',
    //     title: 'eCommerce website',
    //     tags: ['eCommerce', 'Development'],
    //     projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    // },
    // {
    //     imgSrc: '/images/project-6.jpg',
    //     title: 'vCard Personal portfolio',
    //     tags: ['Web-design', 'Development'],
    //     projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    // },
];

const Work = () => {
    return (
        <section className="section" id='work'>
            <div className="container">
                <h2 className="headline-2 mb-8">
                    My Portfolio Highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        works.map(({imgSrc, title, tags, projectLink}, key) => (
                            <ProjectCard key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

export default Work;