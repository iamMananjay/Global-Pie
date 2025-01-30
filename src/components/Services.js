import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getAllCategories } from '../services/categoryService'; // Import your API call

const Services = () => {
  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories dynamically from API
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories(); // Fetch data from API
        setCategories(data); // Set the categories in the state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-50 text-center">
      <h2
        className="text-4xl font-extrabold text-gray-800 mb-12 tracking-wide"
        data-aos="fade-down"
      >
        Our Import and Export Products
      </h2>

      {/* Product Images Grid (Dynamic Categories) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 px-6 lg:px-24">
        {categories.map((category, index) => (
          <div
            key={category.id} // Assuming 'id' is unique for each category
            className="service-card bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay={`${index * 200}`}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={`data:image/jpeg;base64,${category.image}`} // Assuming image is in base64 format
                alt={category.name}
                className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {category.name}
            </h3>
            <p className="text-gray-600 text-base">
              {category.description} {/* Display the description */}
            </p>
            <Link to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`}>
  <button
    className="mt-4 px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
    onClick={() => window.scrollTo(0, 0)}
  >
    Explore {category.name}
  </button>
</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
