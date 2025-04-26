/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */

import {useGSAP} from "@gsap/react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Work from "./components/Work.tsx";
import Experience from "./components/Experience.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import ReactLenis from "lenis/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray<Element>('.reveal-up');
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            });
        });
    });
    return (
        <ReactLenis root>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Work/>
                <Experience/>
                <Contact/>
                <Footer/>
            </main>
        </ReactLenis>
    );
}
export default App;