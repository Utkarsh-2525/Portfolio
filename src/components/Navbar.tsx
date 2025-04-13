import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

interface NavbarProps {
    navOpen: boolean;
}

const Navbar = ({ navOpen }: NavbarProps) => {
    const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
    const activeBox = useRef<HTMLDivElement | null>(null);

    // Define the function to update the position/size of active box
    const initActiveBox = () => {
        const link = lastActiveLink.current;
        const box = activeBox.current;

        if (link && box) {
            box.style.top = `${link.offsetTop}px`;
            box.style.left = `${link.offsetLeft}px`;
            box.style.width = `${link.offsetWidth}px`;
            box.style.height = `${link.offsetHeight}px`;
        }
    };

    useEffect(() => {
        initActiveBox(); // Call once on mount
        window.addEventListener('resize', initActiveBox);

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', initActiveBox);
        };
    }, []);

    const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const target = event.currentTarget;

        lastActiveLink.current?.classList.remove('active');
        target.classList.add('active');
        lastActiveLink.current = target;

        initActiveBox(); // Reposition the active box
    };

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            setRef: (el: HTMLAnchorElement | null) => {
                if (el) lastActiveLink.current = el;
            }
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {
                navItems.map(({ label, link, className, setRef }, key) => (
                    <a
                        href={link}
                        className={className}
                        key={key}
                        ref={setRef ?? null}
                        onClick={activeCurrentLink}
                    >
                        {label}
                    </a>
                ))
            }
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
