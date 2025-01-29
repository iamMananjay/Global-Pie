import axios from "axios";
import { CATEGORY } from '../api/api'; // Import the login API URL

export const getAllCategories = async () => {
  const response = await axios.get(CATEGORY);
  return response.data;
};

export const createCategory = async (name, image, description) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("image", image);
  formData.append("description", description); // Add description

  const response = await axios.post(CATEGORY, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateCategory = async (id, name, image, description) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("image", image);
  formData.append("description", description); // Add description

  const response = await axios.put(`${CATEGORY}/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await axios.delete(`${CATEGORY}/${id}`);
  return response.data;
};
