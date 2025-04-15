/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
import ProjectCard from "./ProjectCard.tsx";

const works = [
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
        projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
        imgSrc: '/images/projects/iitk-vlabs.png',
        title: 'Recipe app',
        tags: ['Development', 'API'],
        projectLink: ''
    },
    {
        imgSrc: '/images/project-4.jpg',
        title: 'Real state website',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
        imgSrc: '/images/project-5.jpg',
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
        imgSrc: '/images/project-6.jpg',
        title: 'vCard Personal portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
];

const Work = () => {
    return (
        <section className="section" id='work'>
            <div className="container">
                <h2 className="headline-2 mb-8">
                    My Portfolio Highlights
                </h2>
                <div className="">
                    {
                        works.map(({imgSrc, title, tags, projectLink}, key) => (
                            <ProjectCard key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

export default Work;