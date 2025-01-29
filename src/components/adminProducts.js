import React, { useState, useEffect } from 'react';
import { createProduct } from '../services/productService'; // Import createProduct service
import { getAllSubcategories } from "../services/subcategoryService"; // Import subcategoryService
import { getAllProducts } from '../services/productService'; // Import getAllProducts service

const AdminProduct = () => {
    const [name, setName] = useState('');
    const [specification, setSpecification] = useState('');
    const [subCategoryId, setSubCategoryId] = useState('');
    const [image, setImage] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]); // State to hold the list of products

    useEffect(() => {
        const fetchSubCategories = async () => {
            try {
                const response = await getAllSubcategories();
                setSubCategories(response);
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchSubCategories();
        fetchProducts(); // Fetch the list of products when the component mounts
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('specification', specification);
        formData.append('subCategoryId', subCategoryId);
        formData.append('image', image);

        try {
            const response = await createProduct(formData); // Use the service function
            console.log('Product created:', response);
            setProducts((prevProducts) => [...prevProducts, response]); // Update the product list after adding a new product
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Create Product</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-lg font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter product name"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Specification</label>
                    <textarea
                        value={specification}
                        onChange={(e) => setSpecification(e.target.value)}
                        className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter product specification"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">SubCategory</label>
                    <select
                        value={subCategoryId}
                        onChange={(e) => setSubCategoryId(e.target.value)}
                        className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Select SubCategory</option>
                        {subCategories.map((subCategory) => (
                            <option key={subCategory.id} value={subCategory.id}>
                                {subCategory.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Product Image</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    >
                        Create Product
                    </button>
                </div>
            </form>

            <h2 className="text-3xl font-semibold text-center text-gray-800 mt-12 mb-8">Product List</h2>
            <div className="space-y-4">
                {products.length === 0 ? (
                    <p className="text-center text-gray-500">No products available.</p>
                ) : (
                    products.map((product) => (
                        <div key={product.id} className="p-4 border border-gray-300 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-gray-600">{product.specification}</p>
                            <p className="text-gray-600">SubCategory: {product.subCategory}</p>
                            <div>
                                <img
                                    src={`data:image/jpeg;base64,${product.image}`} // Assuming image is stored in base64 format
                                    alt={product.name}
                                    className="w-32 h-32 object-cover mt-4"
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminProduct;
