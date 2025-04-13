/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/images/photo.jpg" alt="M.Utkarsh" width={40} height={40} className='img-cover'/>
                        </figure>
                        <div className="">
                            <span className="">
                                <span className=""></span>
                            </span>
                            Available for work.
                        </div>
                    </div>
                    <h2 className="">
                        Developing Full Stack projects for personal and professional use.
                    </h2>
                    <div className="">
                        ButtonPrimary
                        ButtonOutline
                    </div>
                </div>
                <div className="">
                    <figure className="w-full">
                        <img src="/images/Photo%20IIT%202.png"
                        width={500} height={800} alt="M.Utkarsh"/>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;