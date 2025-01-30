import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../images/logo.jpg';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const location = useLocation();

    useEffect(() => {
        // Update isMobile state on window resize
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Toggle the menu when hamburger is clicked
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    // Close menu when a section is clicked
    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <nav
            className="fixed top-0 left-0 w-full p-4 z-10 flex justify-between items-center shadow-md"
            style={{ backgroundColor: "white", color: "rgb(10 81 150)", fontWeight: "bold" }}
        >
            {/* Logo and Company Name */}
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-10 mr-2" style={{ width: "80px" }} />
                <RouterLink
                    to="/"
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() => {
                        window.scrollTo(0, 0);
                        closeMenu();
                    }}
                >
                    Global Pie Import & Export Limited
                </RouterLink>
            </div>

            {/* Menu items */}
            <ul
                className={`${
                    menuActive
                        ? 'flex flex-col absolute top-20 left-0 w-full bg-gradient-to-r from-blue-200 via-white to-blue-100 p-4 z-20'
                        : 'hidden'
                } md:flex md:flex-row md:relative md:top-0 md:left-0 md:w-auto md:bg-transparent`}
            >
                <li className="md:ml-6">
                    {location.pathname === '/' ? (
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={isMobile ? -window.innerHeight * 0.08 : 0} // Apply offset only for mobile
                            className="text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    ) : (
                        <RouterLink
                            to="/"
                            className="text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                            onClick={() => {
                                window.scrollTo(0, 0);
                                closeMenu();
                            }}
                        >
                            Home
                        </RouterLink>
                    )}
                </li>
                <li className="md:ml-6">
                    {location.pathname === '/' ? (
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            offset={isMobile ? -window.innerHeight * 0.08 : 0} // Offset only for mobile
                            className="text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                            onClick={closeMenu}
                        >
                            Products
                        </Link>
                    ) : (
                        <RouterLink
                            to="/"
                            className="text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                            onClick={() => {
                                setTimeout(() => {
                                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                                closeMenu();
                            }}
                        >
                            Products
                        </RouterLink>
                    )}
                </li>
                <li className="md:ml-6">
                    {location.pathname === '/' ? (
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={isMobile ? -window.innerHeight * 0.08 : 0} // Offset only for mobile
                            className="text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    ) : (
                        <RouterLink
                            to="/"
                            className="text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                            onClick={() => {
                                setTimeout(() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                                closeMenu();
                            }}
                        >
                            Contact
                        </RouterLink>
                    )}
                </li>
            </ul>

            {/* Hamburger Menu */}
            <div
                className="md:hidden flex flex-col gap-2 cursor-pointer"
                onClick={toggleMenu}
            >
                <div className="w-8 h-1 bg-black"></div>
                <div className="w-8 h-1 bg-black"></div>
                <div className="w-8 h-1 bg-black"></div>
            </div>
        </nav>
    );
};

export default Navbar;
