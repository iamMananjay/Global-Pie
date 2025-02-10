import axios from "axios";
import { SUBCATEGORY } from "../api/api"; // Adjust the import path as needed

// Fetch all subcategories
export const getAllSubcategories = async () => {
  try {
    const response = await axios.get(SUBCATEGORY);
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error;
  }
};

export const getAllSubcategoriesSection = async (categoryId) => {
    try {
      const response = await axios.get(`${SUBCATEGORY}/${categoryId}/subcategories`);
      return response.data; // This should return only the subcategories for the given category
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      throw error;
    }
  };
  

// Fetch a single subcategory by ID
export const getSubcategoryById = async (id) => {
  try {
    const response = await axios.get(`${SUBCATEGORY}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategory:", error);
    throw error;
  }
};

// Create a new subcategory
export const createSubcategory = async (name, categoryId, image) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("categoryId", categoryId);
    
    if (image) {
        formData.append("image", image); // Add image to form data
    } else {
        console.error("No image selected");
    }
  

    try {
      const response = await axios.post(SUBCATEGORY, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating subcategory:", error);
      throw error;
    }
};


// Update an existing subcategory
export const updateSubcategory = async (id, name, categoryId, image) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("categoryId", categoryId);
    if (image) {
      formData.append("image", image); // Add image to form data if it's provided
    }
  
    try {
      const response = await axios.put(`${SUBCATEGORY}/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating subcategory:", error);
      throw error;
    }
  };

// Delete a subcategory
export const deleteSubcategory = async (id) => {
  try {
    const response = await axios.delete(`${SUBCATEGORY}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting subcategory:", error);
    throw error;
  }
};
