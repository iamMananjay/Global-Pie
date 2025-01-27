import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import riceImage from '../images/rice.png';
import sugarImage from '../images/SUGAR.png';
import cementImage from '../images/cement.png';

// const categories = {
//     'food-material': {
//         name: 'Food Material',
//         subcategories: [
//             {
//                 name: 'Rice',
//                 image: riceImage,
//                 products: [
//                     { name: 'Golden Rice', id: 'golden-rice', image: riceImage },
//                     { name: 'Brown Rice', id: 'brown-rice', image: riceImage },
//                 ],
//             },
//             {
//                 name: 'Sugar',
//                 image: sugarImage,
//                 products: [
                 
//                 ],
//             },
//         ],
//     },
//     'building-material': {
//         name: 'Building Material',
//         subcategories: [
//             {
//                 name: 'Cement',
//                 image: cementImage,
//                 products: [
//                     { name: 'Portland Cement', id: 'portland-cement' },
//                     { name: 'White Cement', id: 'white-cement' },
//                 ],
//             },
//         ],
//     },
// };

const categories = {
    'Food Material': {
        name: 'Food Material',
        subcategories: [
            {
                name: 'Rice',
                image: riceImage,
                products: [
                    { 
                        name: 'Golden Rice', 
                        id: 'golden-rice', 
                        image: riceImage, 
                        specifications: [
                            "High-quality golden grains",
                            "Rich in nutrients",
                            "Perfect for daily meals"
                        ]
                    },
                    { 
                        name: 'Brown Rice', 
                        id: 'brown-rice', 
                        image: riceImage, 
                        specifications: [
                            "Unpolished whole grain rice",
                            "High in fiber and antioxidants",
                            "Ideal for health-conscious diets"
                        ]
                    },
                ],
            },
            {
                name: 'Sugar',
                image: sugarImage,
                products: [
                    {
                        name: 'Organic Sugar',
                        id: 'organic-sugar',
                        image: sugarImage,
                        specifications: [
                            "100% organic cane sugar",
                            "No artificial additives",
                            "Perfect for baking and beverages"
                        ]
                    },
                ],
            },
        ],
    },
    'building-material': {
        name: 'Building Material',
        subcategories: [
            {
                name: 'Cement',
                image: cementImage,
                products: [
                    { 
                        name: 'Portland Cement', 
                        id: 'portland-cement', 
                        image: cementImage, 
                        specifications: [
                            "High-strength cement",
                            "Ideal for construction projects",
                            "Conforms to ASTM standards"
                        ]
                    },
                    { 
                        name: 'White Cement', 
                        id: 'white-cement', 
                        image: cementImage, 
                        specifications: [
                            "Premium white finish",
                            "Suitable for decorative applications",
                            "Long-lasting and durable"
                        ]
                    },
                ],
            },
        ],
    },
};

const CategoryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const category = categories[id];

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
                Browse through our selection of {category.name} products. Below, you'll find the available categories and their respective products.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
                {category.subcategories.map((subcategory, index) => (
                    <div
                        key={index}
                        className="subcategory-card bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg transform transition-transform duration-300 hover:scale-105"
                    >
                        {/* Subcategory Header */}
                        <div className="relative">
                            <img
                                src={subcategory.image}
                                alt={subcategory.name}
                                className="w-full h-56 object-cover"
                            />
                            <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                                <h3 className="text-2xl font-bold">{subcategory.name}</h3>
                            </div>
                        </div>

                        {/* Products List */}
                        <div className="p-6">
                            {category.subcategories.product!= null?
                            <p className="text-sm mb-4">
                                This category includes the following products:
                            </p>:"There is no product available"}
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
                ))}
            </div>
            {/* <div className="text-center mt-12">
                <button
                    className="px-6 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
                    onClick={() => navigate('/products')}
                >
                    Back to Products
                </button>
            </div> */}
        </section>
    );
};

export default CategoryPage;
