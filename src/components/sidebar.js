import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white h-screen">
      <div className="flex items-center justify-center py-6">
        <h1 className="text-2xl font-semibold">Global Pie</h1>
      </div>
      <nav className="flex flex-col flex-grow space-y-4 px-4">
        {/* Categories Section */}
        <div>
          <ul className="space-y-2">
            <li>
              <Link to="admin/categories" className="text-white hover:text-green-400">
                Categories
              </Link>
            </li>
          </ul>
        </div>

        {/* Subcategories Section */}
        <div>
          <ul className="space-y-2">
            <li>
              <Link
                to="admin/subcategories"
                className="text-white hover:text-green-400"
              >
                Subcategories
              </Link>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <ul className="space-y-2">
            <li>
              <Link to="admin/products" className="text-white hover:text-green-400">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Spacer to push Logout down */}
        <div className="flex-grow"></div>

        {/* Logout Section */}
        <div className="py-4">
          <Link to="/logout" className="text-white hover:text-red-400">
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
