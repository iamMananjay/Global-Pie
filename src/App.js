import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, matchPath } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Choose from "./components/choose";
import Contact from "./components/Contact";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import AdminCategory from "./components/admincategory";
import Adminsubcategory from "./components/adminsubcategory";
import AdminProducts from "./components/adminProducts";
import CategoryPage from "./components/category";
import ProductDetail from "./components/Productdetail";
import { AuthProvider } from "./context/AuthContext";
import NotFound from "./components/NotFound";
import CaptchaPage from "./components/CaptchaPage"; // Import the CAPTCHA page
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainApp />
      </Router>
    </AuthProvider>
  );
}


function MainApp() {
    const location = useLocation();
  
    // Check if CAPTCHA is verified
    const isCaptchaVerified = sessionStorage.getItem("captchaVerified");
  
    // If CAPTCHA is not verified and the current route is not "/verify", redirect to "/verify"
    if (!isCaptchaVerified && location.pathname !== "/verify") {
      return <Navigate to="/verify" />;
    }
  
    // Define routes where Navbar and Footer should not be shown
    const excludedRoutes = [
      "/login",
      "/dashboard",
      "/dashboard/admin/categories",
      "/dashboard/admin/subcategories",
      "/dashboard/admin/products",
    ];
  
    // Check if the current route is valid
    const isValidRoute = [
      "/",
      "/login",
      "/categories/:id",
      "/product/:productId",
      "/dashboard",
      "/dashboard/admin/categories",
      "/dashboard/admin/subcategories",
      "/dashboard/admin/products",
    ].some((route) => matchPath(route, location.pathname));
  
    // Determine if Navbar and Footer should be shown
    const shouldShowHeaderFooter =
      !excludedRoutes.includes(location.pathname) && isValidRoute;
  
    return (
      <div className="App">
        {shouldShowHeaderFooter && <Navbar />}
        <Routes>
          <Route path="/verify" element={<CaptchaPage />} /> {/* CAPTCHA Route */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <Choose />
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/categories/:id" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="admin/categories" element={<AdminCategory />} />
            <Route path="admin/subcategories" element={<Adminsubcategory />} />
            <Route path="admin/products" element={<AdminProducts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {shouldShowHeaderFooter && <Footer />}
      </div>
    );
  }

export default App;
