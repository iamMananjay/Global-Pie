import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../images/logo.jpg'; // Ensure you have the logo image in your project directory

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const location = useLocation();

    // Toggle the menu when hamburger is clicked
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    // Scroll to top when navigating to '/'
    useEffect(() => {
        if (location.pathname === '/') {
            window.scrollTo(0, 0);
        }
    }, [location]);



    return (
<nav
  className="fixed top-0 left-0 w-full p-4 z-10 flex justify-between items-center shadow-md"
  style={{ backgroundColor: "white", color:"rgb(10 81 150)", fontWeight: "bold" }}
>

            {/* Logo and Company Name */}
            <div className="flex items-center"                 
            >
                <img src={logo} alt="Logo" className="h-10 w-10 mr-2" style={{width:"80px"}}/>
                <RouterLink
                    to="/"
                    className=" text-2xl font-bold cursor-pointer"
                    onClick={() => window.scrollTo(0, 0)} // Ensure scrolls to top
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
                <li className="md:ml-6"                  

>
                    {location.pathname === '/' ? (
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className=" text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                        >
                            Home
                        </Link>
                    ) : (
                        <RouterLink
                            to="/"
                            className=" text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                            onClick={() => window.scrollTo(0, 0)} // Ensure scrolling to top
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
                            className=" text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                        >
                            Products
                        </Link>
                    ) : (
                        <RouterLink
                            to="/"
                            className=" text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                            onClick={() =>
                                setTimeout(() => {
                                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100)
                            }
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
                            className=" text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                        >
                            Contact
                        </Link>
                    ) : (
                        <RouterLink
                            to="/"
                            className=" text-lg hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                            onClick={() =>
                                setTimeout(() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100)
                            }
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

