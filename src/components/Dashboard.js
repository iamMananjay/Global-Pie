import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import AdminCategory from "./admincategory";
import Subcategories from "./admincategory";
import AdminProducts from "./adminProducts";
import AdminSubcategory from "./adminsubcategory";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1>Dashboard</h1>
        <Routes>
          <Route path="/admin/categories" element={<AdminCategory />} />
          <Route path="/admin/subcategories" element={<AdminSubcategory />} />
          <Route path="/admin/products" element={<AdminProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
