import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Work from "./components/Work.tsx";
import Experience from "./components/Experience.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
const App = () => {
    return (
        <>
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
        </>
    );
}
export default App;