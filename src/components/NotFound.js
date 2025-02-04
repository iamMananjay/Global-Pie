import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgimg from '../images/404.svg.webp';


function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <motion.h1 
                className="text-6xl font-bold text-purple-600" 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                404
            </motion.h1>
            <motion.p 
                className="text-lg text-gray-600 mt-2" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.7 }}
            >
                Oops! The page you are looking for does not exist.
            </motion.p>
            <motion.img 
                src={bgimg}
                alt="Not Found" 
                className="w-64 h-auto mt-4 mb-10" 
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 0.5 }}
                
            />
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                <Link to="/" className="mt-20 px-6 py-3 bg-purple-600 text-white text-lg rounded-lg shadow-md hover:bg-purple-700 transition-all">
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
}

export default NotFound;