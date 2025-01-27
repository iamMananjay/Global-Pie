import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; // Navbar component
import Footer from './Footer'; // Footer component
import productImage1 from '../images/marble.png';
import productImage2 from '../images/cement.jpg';
import productImage3 from '../images/wheelchair.png';
import productImage4 from '../images/a.png';
import productImage5 from '../images/b.jpg';

// Mock data for products in each category
const categories = [
  {
    id: 1,
    name: 'Rice',
    products: [
      { id: 1, image: productImage1, name: 'Basmati Rice', description: 'High-quality basmati rice.', price: '$20', specifications: '1kg, packed in a resealable bag' },
      { id: 2, image: productImage2, name: 'Brown Rice', description: 'Healthy brown rice.', price: '$15', specifications: '500g, organic, gluten-free' },
    ],
  },
  {
    id: 2,
    name: 'Oil',
    products: [
      { id: 3, image: productImage3, name: 'Olive Oil', description: 'Pure olive oil.', price: '$30', specifications: '500ml, cold-pressed' },
      { id: 4, image: productImage4, name: 'Coconut Oil', description: 'Organic coconut oil.', price: '$25', specifications: '1L, virgin, unrefined' },
    ],
  },
  {
    id: 3,
    name: 'Cement',
    products: [
      { id: 5, image: productImage5, name: 'Portland Cement', description: 'Premium quality cement.', price: '$50', specifications: '50kg bag, for general construction' },
      { id: 6, image: productImage1, name: 'Quick Setting Cement', description: 'Fast-setting cement.', price: '$60', specifications: '20kg bag, sets in 30 minutes' },
    ],
  },
];

const ProductList = () => {
  const { id } = useParams();
  const category = categories.find((c) => c.id === parseInt(id));

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100 mt-12">
        <h2 className="text-4xl font-bold text-center mb-8">{category.name}</h2>
        <div className="space-y-8">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 mx-auto max-w-3xl"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12">
                {/* Product Image on the Left */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full lg:w-1/4 h-auto object-cover rounded-lg mb-6 lg:mb-0"
                />
                {/* Product Details on the Right */}
                <div className="flex flex-col justify-between lg:w-3/4 lg:ml-6">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="text-gray-700">{product.description}</p>
                  <p className="text-green-500 font-bold">{product.price}</p>
                  <p className="text-gray-500 mt-2">{product.specifications}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductList;
