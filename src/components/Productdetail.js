// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar'; // Navbar component
// import Footer from './Footer'; // Footer component
// import productImage1 from '../images/marble.png';
// import productImage2 from '../images/cement.jpg';
// import productImage3 from '../images/wheelchair.png';
// import productImage4 from '../images/a.png';
// import productImage5 from '../images/b.jpg';

// // Mock data for products in each category
// const categories = [
//   {
//     id: 1,
//     name: 'Rice',
//     products: [
//       { id: 1, image: productImage1, name: 'Basmati Rice', description: 'High-quality basmati rice.', price: '$20' },
//       { id: 2, image: productImage2, name: 'Brown Rice', description: 'Healthy brown rice.', price: '$15' },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Oil',
//     products: [
//       { id: 3, image: productImage3, name: 'Olive Oil', description: 'Pure olive oil.', price: '$30' },
//       { id: 4, image: productImage4, name: 'Coconut Oil', description: 'Organic coconut oil.', price: '$25' },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Cement',
//     products: [
//       { id: 5, image: productImage5, name: 'Portland Cement', description: 'Premium quality cement.', price: '$50' },
//       { id: 6, image: productImage1, name: 'Quick Setting Cement', description: 'Fast-setting cement.', price: '$60' },
//     ],
//   },
// ];

// const Productdetail = () => {
//   const { id } = useParams();
//   const category = categories.find((c) => c.id === parseInt(id));

//   if (!category) {
//     return <div>Category not found.</div>;
//   }

//   return (
//     <>
//       <Navbar />
//       <section className="py-12 bg-gray-100 text-center mt-12">
//         <h2 className="text-4xl font-bold mb-8">{category.name}</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {category.products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-64 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-2xl font-semibold">{product.name}</h3>
//               <p className="text-gray-700">{product.description}</p>
//               <p className="text-green-500 font-bold">{product.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Productdetail;


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ProductDetail = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Access the product data from the state
//     const product = location.state?.product;

//     if (!product) {
//         return (
//             <div className="text-center py-12 mt-20">
//                 <h2 className="text-3xl font-bold">Product Not Found</h2>
//                 <button
//                     className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
//                     onClick={() => navigate('/products')}
//                 >
//                     Back to Products
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <section className="py-12 px-6 bg-gray-100 text-black mt-20">
//             <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
//                 {product.image && (
//                     <div className="mb-6">
//                         <img 
//                             src={product.image} 
//                             alt={product.name} 
//                             className="w-full h-64 object-cover rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <h2 className="text-4xl font-semibold mb-6">{product.name}</h2>
//                 <p className="text-lg mb-4">Specifications:</p>
//                 <ul className="list-disc pl-5 space-y-2">
//                     {product.specifications && product.specifications.length > 0 ? (
//                         product.specifications.map((spec, index) => (
//                             <li key={index} className="text-gray-700">
//                                 {spec}
//                             </li>
//                         ))
//                     ) : (
//                         <li className="text-gray-500">No specifications available.</li>
//                     )}
//                 </ul>
//                 <button
//                     className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
//                     onClick={() => navigate(-1)}
//                 >
//                     Go Back
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default ProductDetail;
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/productService'; // Import service function

const ProductDetail = () => {
    const { productId } = useParams(); // Get product ID from the URL
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const productDetails = await getProductById(productId); // Fetch product details
                setProduct({
                    ...productDetails,
                    specifications: parseSpecifications(productDetails.specification),
                });
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [productId]);

    // Function to parse specifications
    const parseSpecifications = (specifications) => {
        if (!specifications) return [];
        if (Array.isArray(specifications)) return specifications;
        return typeof specifications === 'string'
            ? specifications.split(',').map((spec) => spec.trim())
            : [];
    };

    if (!product) {
        return (
            <div className="text-center py-12 mt-20">
                <h2 className="text-3xl font-bold">Product Not Found</h2>
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
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                {product.image && (
                    <div className="mb-6">
                        <img 
                            src={`data:image/png;base64,${product.image}`} 
                            alt={product.name} 
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                )}
                <h2 className="text-4xl font-semibold mb-6">{product.name}</h2>
                <p className="text-lg mb-4">Specifications:</p>
                <ul className="space-y-2">
                    {product.specifications.length > 0 ? (
                        product.specifications.map((spec, index) => (
                            <li key={index} className="text-gray-700">{spec}</li>
                        ))
                    ) : (
                        <li className="text-gray-500">No specifications available.</li>
                    )}
                </ul>
                <button
                    className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        </section>
    );
};

export default ProductDetail;







