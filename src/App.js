import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Choose from './components/choose';
import Contact from './components/Contact';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import AdminCategory from './components/admincategory';
import Adminsubcategory from './components/adminsubcategory';
import AdminProducts from './components/adminProducts';
import CategoryPage from './components/category';
import ProductDetail from './components/Productdetail';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound'; // Import a custom 404 component
import './App.css';

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

    // Routes where Navbar and Footer should not appear
    const excludedRoutes = [
        '/login',
        '/dashboard',
        '/dashboard/admin/categories',
        '/dashboard/admin/subcategories',
        '/dashboard/admin/products',
    ];

    // Check if the current route is valid
    const isValidRoute = [
        '/',
        '/login',
        '/categories/:id',
        '/product/:productId',
        '/dashboard',
        '/dashboard/admin/categories',
        '/dashboard/admin/subcategories',
        '/dashboard/admin/products',
    ].some((route) => {
        const routePattern = new RegExp(`^${route.replace(/:\w+/g, '\\w+')}$`);
        return routePattern.test(location.pathname);
    });

    // Conditionally render Navbar and Footer
    const shouldShowHeaderFooter = !excludedRoutes.includes(location.pathname) && isValidRoute;

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
                            <Choose />
                            <Contact />
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/categories/:id" element={<CategoryPage />} />
                <Route path="/product/:productId" element={<ProductDetail />} />

                {/* Protected Routes with Dashboard Layout */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >
                    <Route path="admin/categories" element={<AdminCategory />} />
                    <Route path="admin/subcategories" element={<Adminsubcategory />} />
                    <Route path="admin/products" element={<AdminProducts />} />
                </Route>

                {/* Catch-all route for invalid paths */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            {shouldShowHeaderFooter && <Footer />}
        </div>
    );
}

export default App;