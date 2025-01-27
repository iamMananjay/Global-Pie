

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productImage1 from '../images/buildingmaetrials.png';
import productImage2 from '../images/food materials.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Products list
  const products = [
    { image: productImage1, name: 'Building Material', description: 'Reliable and durable materials for construction projects of all sizes.' },
    { image: productImage2, name: 'Commodities Food Material', description: 'Premium quality food products sourced globally for every kitchen need.' },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 text-center">
      <h2
        className="text-4xl font-extrabold text-gray-800 mb-12 tracking-wide"
        data-aos="fade-down"
      >
        Our Import and Export Products
      </h2>

      {/* Product Images Grid (First 2 Products) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 px-6 lg:px-24">
        {products.slice(0, 3).map((product, index) => (
          <div
            key={index}
            className="service-card bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay={`${index * 200}`}
          >
                        <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-600 text-base">
              {product.description}
            </p>
            <Link to={`/categories/${product.name.toLowerCase().replace(' ', '-')}`}>
              <button
                className="mt-4 px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                Explore {product.name}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Decorative Divider */}
      {/* <div
        className="w-24 h-1 bg-purple-500 mx-auto my-10"
        data-aos="fade-up"
      ></div> */}

      {/* Link to All Services Page */}
      {/* <Link to="/products">
        <button
          className="mt-6 px-8 py-3 bg-purple-600 text-white text-lg font-medium rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
          data-aos="fade-up"
          onClick={() => window.scrollTo(0, 0)}
        >
          See All Services
        </button>
      </Link> */}
    </section>
  );
};

export default Services;

           

