import React, { useState, useEffect } from 'react';
import { createProduct, getAllProducts, updateProduct, deleteProduct } from '../services/productService';
import { getAllSubcategories } from '../services/subcategoryService';

const AdminProduct = () => {
    const [name, setName] = useState('');
    const [specification, setSpecification] = useState('');
    const [subCategoryId, setSubCategoryId] = useState('');
    const [image, setImage] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [editId, setEditId] = useState(null);

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
        fetchProducts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('specification', specification);
        formData.append('subCategoryId', subCategoryId);
        if (image) formData.append('image', image);

        try {
            if (editId) {
                await updateProduct(editId, formData);
                setProducts(products.map(p => p.id === editId ? { ...p, name, specification, subCategoryId, image } : p));
                setEditId(null);
            } else {
                const response = await createProduct(formData);
                setProducts([...products, response]);
            }
            setName('');
            setSpecification('');
            setSubCategoryId('');
            setImage(null);
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const handleEdit = (product) => {
        setEditId(product.id);
        setName(product.name);
        setSpecification(product.specification);
        setSubCategoryId(product.subCategoryId);
        setImage(product.image);
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">{editId ? 'Edit Product' : 'Create Product'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required className="w-full p-4 border rounded-lg" />
                <textarea value={specification} onChange={(e) => setSpecification(e.target.value)} placeholder="Specification" required className="w-full p-4 border rounded-lg" />
                <select value={subCategoryId} onChange={(e) => setSubCategoryId(e.target.value)} required className="w-full p-4 border rounded-lg">
                    <option value="">Select SubCategory</option>
                    {subCategories.map(sub => <option key={sub.id} value={sub.id}>{sub.name}</option>)}
                </select>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full p-4 border rounded-lg" />
                <button type="submit" className="px-8 py-3 bg-purple-600 text-white rounded-lg">{editId ? 'Update' : 'Create'}</button>
            </form>

            <h2 className="text-3xl font-semibold text-center text-gray-800 mt-12 mb-8">Product List</h2>
            <div className="space-y-4">
                {products.length === 0 ? <p className="text-center">No products available.</p> : products.map(product => (
                    <div key={product.id} className="p-4 border rounded-lg">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p>{product.specification}</p>
                        <p>SubCategory: {product.subCategory}</p>
                        {product.image && <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} className="w-32 h-32 mt-4" />}
                        <div className="flex space-x-4 mt-4">
                            <button onClick={() => handleEdit(product)} className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
                            <button onClick={() => handleDelete(product.id)} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminProduct;