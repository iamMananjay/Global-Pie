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







