import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";

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
            </main>
        </>
    );
}
export default App;