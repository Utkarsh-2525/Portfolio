/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */

const aboutItems = [
    {
        label: 'Projects Done',
        number: 25
    },
    {
        label: 'Months of Experience',
        number: 4
    }
];

const About = () => {
    return (
        <section id="about" className='section'>
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Utkarsh, an undergraduate student currently working as an Associate Analyst at AML RightSource, Noida. I am a keen learner and Full-Stack enthusiast with proficiency in Java (Spring Boot) for Backend development and TypeScript (React and Angular) for excelling in both appearance and performance.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">
                                            {number}
                                        </span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">
                                            +
                                        </span>
                                    </div>
                                    <p className="text-sm text-zinc-400">
                                        {label}
                                    </p>
                                </div>
                            ))
                        }
                        <img src="/images/Melogo.png" alt="logo" width={100} height={100} className='ml-auto md:w-[150px] md:h-[70px]' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;