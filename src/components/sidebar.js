import React from "react";
import { Link,useNavigate  } from "react-router-dom";
import { useAuth } from '../context/AuthContext';


const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();



  const handleLogout = () => {
    // Clear authentication data (adjust based on your auth mechanism)
    localStorage.removeItem("token"); // Remove token or session data
    localStorage.removeItem("role"); // Remove token or session data
    localStorage.removeItem("captchaVerified");



    // Redirect to login page
    navigate("/login");
  };
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

         {/* Logout Button */}
         <div className="py-4">
          <button
            onClick={handleLogout}
            className="w-full text-left text-white hover:text-red-400"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
