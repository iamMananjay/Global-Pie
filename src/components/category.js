import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllSubcategoriesSection } from '../services/subcategoryService'; // Assuming you have a service to fetch category data

const CategoryPage = () => {
    const { id } = useParams(); // Get the category ID from the URL params
    const navigate = useNavigate();
    const [category, setCategory] = useState(null); // State to hold category data
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling
      const [image, setImage] = useState(null);
    

    // Fetch category and subcategories based on the category ID
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                console.log(id);
                const data = await getAllSubcategoriesSection(id); // Fetch the category by its ID
                console.log(data);
                setCategory(data); // Set the fetched category data
                setLoading(false); // Set loading to false once data is fetched
            } catch (err) {
                setError('Error fetching category data'); // Handle errors
                setLoading(false);
            }
        };

        fetchCategory(); // Call the fetch function when the component mounts
    }, [id]); // Re-run when the category ID changes

    // Show loading state
    if (loading) {
        return (
            <div className="text-center py-12 mt-20">
                <h2 className="text-3xl font-bold">Loading...</h2>
            </div>
        );
    }

    // Show error state if there is an error
    if (error) {
        return (
            <div className="text-center py-12 mt-20">
                <h2 className="text-3xl font-bold">{error}</h2>
                <button
                    className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
                    onClick={() => navigate('/products')}
                >
                    Back to Products
                </button>
            </div>
        );
    }

    // If category data is not found
    if (!category) {
        return (
            <div className="text-center py-12 mt-20">
                <h2 className="text-3xl font-bold">Category Not Found</h2>
                <button
                    className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
                    onClick={() => navigate('/products')}
                >
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <section className="py-12 px-6 bg-gray-100 text-black mt-20">
            <h2 className="text-4xl font-semibold text-center mb-8">{category.name}</h2>
            <p className="text-lg text-center mb-12">
                Browse through our selection of {category.name} subcategories. Below, you'll find the available subcategories and their respective products.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
                {category && category.length > 0 ? (
                    category.map((subcategory, index) => (
                        <div
                            key={index}
                            className="subcategory-card bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Subcategory Header */}
                            <div className="relative">
                                <img
                    src={`data:image/png;base64,${subcategory.image}`}
                    alt={subcategory.name}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                                    <h3 className="text-2xl font-bold">{subcategory.name}</h3>
                                </div>
                            </div>

                            {/* Products List */}
                            <div className="p-6">
                                {subcategory.products && subcategory.products.length > 0 ? (
                                    <p className="text-sm mb-4">
                                        This subcategory includes the following products:
                                    </p>
                                ) : (
                                    <p className="text-sm mb-4">No products available in this subcategory.</p>
                                )}
                                <ul className="space-y-2">
                                    {subcategory.products.map((product, idx) => (
                                        <li
                                            key={idx}
                                            className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                                            onClick={() =>
                                                navigate(`/product/${product.id}`, { state: { product } })
                                            }
                                        >
                                            {product.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No subcategories available for this category.</p>
                )}
            </div>
        </section>
    );
};

export default CategoryPage;

