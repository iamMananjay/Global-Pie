import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService'; // Import the login service
import { useAuth } from '../context/AuthContext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const credentials = { email, password };
      const responseMessage = await loginUser(credentials); // Call the login service

      console.log(responseMessage); // Log success message for debugging

      if (responseMessage.token) {
        localStorage.setItem('token', responseMessage.token);
        localStorage.setItem('role', responseMessage.userRole);
        navigate('/dashboard');
      } else {
        setError(responseMessage.message);
      }
    } catch (err) {
      setError('Invalid email or password'); // Set error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white via-blue-100 to-white">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-blue-300">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-2">
          Global Pie
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
          Login to Your Account
        </h2>
        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">
            {error}
          </p>
        )}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          © {new Date().getFullYear()} Global Pie. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
