import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email && password

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a data object with the email and password values
    const data = {};

    // Check if email and password fields are not empty before adding them to the data object
    if (email.trim() !== '') {
      data.email = email;
    }

    if (password.trim() !== '') {
      data.password = password;
    }

    // Send a POST request to the server using fetch
    fetch('http://127.0.0.1:4000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log('Response from server:', data);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error);
      });
  };

  return (
  <div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!isFormValid}
        className={`bg-blue-500 text-white mt-4 w-full py-2 rounded-md ${
          isFormValid ? '' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        Sign In
      </button>
    </form>
    <p>Don't have an account? <Link to="/register">Register here</Link></p>
  </div>
  );
}; 
  
export default SignInForm;
