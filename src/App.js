import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Choose from './components/choose';

import Products from './components/Products';
import Contact from './components/Contact';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import AdminCategory from './components/admincategory'; // Import AdminCategory
import SubcategoryPage from './components/subcategory'; // Import SubcategoryPage
import ProductPage from './components/Products'; // Import ProductPage
import CategoryPage from './components/category'; // Import ProductPage
import ProductDetail from './components/Productdetail'; // Import ProductDetail



import './App.css';

function App() {
    return (
        <Router>
            <MainApp />
        </Router>
    );
}

function MainApp() {
    const location = useLocation();

    // Routes where Navbar and Footer should not appear
    // const excludedRoutes = ['/login','/dashboard'];
    const excludedRoutes = ['/login','/dashboard','/dashboard/admin/categories','/dashboard/admin/subcategories', '/dashboard/admin/products'];

    const shouldShowHeaderFooter = !excludedRoutes.includes(location.pathname);

    return (
        <div className="App">
            {/* Conditionally render Navbar and Footer */}
            {shouldShowHeaderFooter && <Navbar />}
            <Routes>
                {/* Public Routes */}
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <Services />
                            <Choose/>
                            <Contact />
                        </>
                    }
                />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />                   
                 <Route path="/categories/:id" element={<CategoryPage />} />
                 <Route path="/product/:id" element={<ProductDetail />} /> {/* Add this route */}




                {/* Protected Routes with Dashboard Layout */}
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="admin/categories" element={<AdminCategory />} />
                    <Route path="admin/subcategories" element={<SubcategoryPage />} />
                    <Route path="admin/products" element={<ProductPage />} />
                </Route>
            </Routes>
            {shouldShowHeaderFooter && <Footer />}
        </div>
    );
}

export default App;
