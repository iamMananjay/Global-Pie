import React, { useState, useEffect } from "react";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(""); // Add description state
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateCategory(editId, name, image, description); // Include description in update
        setEditId(null);
      } else {
        await createCategory(name, image, description); // Include description in create
      }
      setName("");
      setImage(null);
      setDescription(""); // Reset description after submit
      fetchCategories();
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleEdit = (category) => {
    setEditId(category.id);
    setName(category.name);
    setImage(null); // Image upload required for updates
    setDescription(category.description); // Set description for edit
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Category Management</h1>

        {/* Form */}
        <form onSubmit={handleCreateOrUpdate} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Category Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter category description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              required={!editId}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            {editId ? "Update Category" : "Create Category"}
          </button>
        </form>

        {/* Category List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Categories</h2>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li
                key={category.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={`data:image/jpeg;base64,${category.image}`}
                    alt={category.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-gray-800 font-medium">{category.name}</span>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(category)}
                    className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
