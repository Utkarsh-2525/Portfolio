import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }: { navOpen: boolean }) => {
    const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
    const activeBox = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (lastActiveLink.current && activeBox.current) {
            const link = lastActiveLink.current;
            const box = activeBox.current;

            box.style.top = link.offsetTop + 'px';
            box.style.left = link.offsetLeft + 'px';
            box.style.width = link.offsetWidth + 'px';
            box.style.height = link.offsetHeight + 'px';
        }
    }, []);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;
    }

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
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
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <a href={link} className={className} key={key} ref={ref} onClick={activeCurrentLink}>
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
}

export default Navbar;