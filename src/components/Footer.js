import React from 'react';
import logo from '../images/logo.jpg'; // Ensure you have the logo image in your project directory


const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-12 shadow-md">
            <div className="container mx-auto px-6 md:px-12">
                {/* Logo and Company Information */}
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center mb-4">
                        <img
                           src={logo} 
                            alt="Global Pie Logo"
                            className="w-20 h-auto mr-3"
                        />
                        <h2 className="text-2xl font-bold">Global Pie Import & Export Ltd.</h2>
                    </div>
                    <p className="text-sm">
                        Suite 7, Ealing House, 33 Hanger Lane, London, W5 3HJ
                    </p>
                    <p className="text-sm">Telephone: 02034411068 | Mobile: 07879403572</p>
                    <p className="text-sm">
                        Email: <a href="mailto:globalpie2024@gmail.com" className="text-purple-600 hover:underline">globalpie2024@gmail.com</a>
                    </p>
                    <p className="text-sm">
                        Website: <a href="https://www.globalpieimportexport.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.globalpieimportexport.com</a>
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600 transition duration-300">
                        <i className="fab fa-facebook-f text-2xl"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600 transition duration-300">
                        <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600 transition duration-300">
                        <i className="fab fa-linkedin-in text-2xl"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600 transition duration-300">
                        <i className="fab fa-instagram text-2xl"></i>
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center gap-8 mb-8 text-sm">
                    <a href="/about" className="text-gray-800 hover:text-purple-600 transition duration-300">About Us</a>
                </div>

                {/* Copyright and Credits */}
                <div className="text-center">
                    <p className="text-sm font-medium mb-2">
                        &copy; {new Date().getFullYear()} Global Pie Import & Export Ltd. All rights reserved.
                    </p>
                    <p className="text-xs">
                        Designed and Developed by <a href="https://yourwebdeveloper.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Your Web Developer</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

