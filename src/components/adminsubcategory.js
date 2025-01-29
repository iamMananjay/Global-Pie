import React, { useState, useEffect } from "react";
import { getAllSubcategories, createSubcategory, updateSubcategory, deleteSubcategory } from "../services/subcategoryService"; // Import service
import { getAllCategories } from "../services/categoryService";

const AdminSubcategory = () => {
  const [subcategories, setSubcategories] = useState([]); // Initialize as empty array
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState(""); // For category selection
  const [categories, setCategories] = useState([]); // For categories dropdown
  const [editId, setEditId] = useState(null); // For editing subcategory
  const [image, setImage] = useState(null);

  // Fetch subcategories and categories when the component mounts
  useEffect(() => {
    fetchSubcategories();
    fetchCategories();
  }, []);

  const fetchSubcategories = async () => {
    try {
      
      const data = await getAllSubcategories();
      console.log("Subcategories Data:", data); // Log the fetched data
      if (Array.isArray(data)) {
        setSubcategories(data); // Only set it if it's an array
      } else {
        console.error("Expected an array but got:", data);
        setSubcategories([]); // Set to an empty array if data is not in expected format
      }
      
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories(); // Fetch categories from the API
       console.log(data);
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Handle create or update subcategory
  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      
      if (editId) {
        await updateSubcategory(editId, name, categoryId);
        setEditId(null);
      } else {
        await createSubcategory(name, categoryId,image);
      }
      setName("");
      setCategoryId("");
      await fetchSubcategories(); // Refresh the subcategories list
      
    } catch (error) {
      console.error("Error saving subcategory:", error);
      
    }
  };

  // Handle delete subcategory
  const handleDelete = async (id) => {
    try {
      
      await deleteSubcategory(id);
      await fetchSubcategories(); // Refresh the subcategories list
      
    } catch (error) {
      console.error("Error deleting subcategory:", error);
      
    }
  };

  // Handle edit subcategory
  const handleEdit = (subcategory) => {
    setEditId(subcategory.id);
    setName(subcategory.name);
    setCategoryId(subcategory.categoryId);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Manage Subcategories</h1>

      {/* Create or Update Subcategory Form */}
      <form onSubmit={handleCreateOrUpdate} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{editId ? "Edit Subcategory" : "Create Subcategory"}</h2>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Subcategory Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="categoryId" className="block text-sm font-medium text-gray-600">Category</label>
          <select
            id="categoryId"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
          {/* Image Upload Section */}
  <div className="mt-4">
    <label htmlFor="image" className="block text-sm font-medium text-gray-600">
      Subcategory Image
    </label>
    <input
      type="file"
      id="image"
      onChange={(e) => setImage(e.target.files[0])}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-200"
    />
  </div>

        <button
          type="submit"
          className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          {editId ? "Update Subcategory" : "Create Subcategory"}
        </button>
      </form>

      {/* Display Subcategories */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Subcategories List</h2>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategories.length > 0 ? (
            subcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">{subcategory.name}</h3>
                {subcategory.image && (
                  <img
                    src={`data:image/png;base64,${subcategory.image}`}
                    alt={subcategory.name}
                    className="w-full h-48 object-cover mt-4"
                  />
                )}



                <div className="mt-4 space-x-2">
                  <button
                    onClick={() => handleEdit(subcategory)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(subcategory.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No subcategories available.</p>
          )}
        </div>
    
    </div>
  );
};

export default AdminSubcategory;
