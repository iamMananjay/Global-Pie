import axios from 'axios';
import { Products } from '../api/api'; // Import the login API URL



// Create Product
export const createProduct = async (formData) => {
    try {
        const response = await axios.post(Products, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error creating product:', error);
    }
};

// Get All Products
export const getAllProducts = async () => {
    try {
        const response = await axios.get(Products);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products:', error);
    }
};

// Get Single Product
export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${Products}/${productId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching product:', error);
    }
};

// Update Product
export const updateProduct = async (productId, formData) => {
    try {
        const response = await axios.put(`${Products}/${productId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error updating product:', error);
    }
};

// Delete Product
export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${Products}/${productId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting product:', error);
    }
};
