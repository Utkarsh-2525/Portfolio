/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */

import {ButtonOutline, ButtonPrimary} from "./Button.tsx";

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/images/photo.jpg" alt="M.Utkarsh" width={40} height={40} className='img-cover'/>
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work.
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Developing Full Stack projects for personal and professional use.
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label='Download CV'
                            icon='download'
                        />
                        <ButtonOutline
                        href='#about'
                        label='Scroll down'
                        icon='arrow_downward'
                        />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-30% via-sky-400/55 to-65% rounded-[60px]">
                        <img src="/images/Photo%20IIT%202.png" className='w-full'
                        width={500} height={800} alt="M.Utkarsh"/>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;