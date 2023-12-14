import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isFormValid = firstName && lastName && username && email && password;

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    // Perform field validation
    if (!isFormValid) {
      setError('Please fill in all fields');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must have at least 8 characters and at least one digit');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Perform registration logic
    fetch('http://127.0.0.1:4000/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        password
      })
    })
      .then((response) => {
        if (response.ok) {
          // Registration successful
          setStatus('Registration successful!');
          // Reset form and clear error
          setFirstName('');
          setLastName('');
          setUsername('');
          setEmail('');
          setPassword('');
          setError('');
          navigate('/')
        } else if (response.status === 409) {
          // Username already taken
          return response.json().then((data) => {
            setError(data.message);
          });
        } else {
          // Registration error
          setError('An error occurred during registration');
        }
      })
      .catch((error) => {
        console.error('Registration error:', error);
        setError('An error occurred during registration');
      });
  };

  return (
    <div className="max-w-md sm:w-420 flex-center flex-col mb-20 mx-auto">
      <h1 className="text-2xl font-bold mb-7 sm:pt-12">Create a new account</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border border-gray-300 p-2 w-full block"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border border-gray-300 p-2 mt-5 w-full block"
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 p-2 mt-4 w-full block"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 mt-4 w-full block"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 mt-4 w-full block"
      />
      <button
        onClick={handleRegister}
        disabled={!isFormValid}
        className={`bg-blue-500 text-white mt-4 w-full py-2 rounded-md ${
          isFormValid ? '' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        Register
      </button>
      <p>Already have an account? <Link to="/signin">Sign in here</Link></p>
    </div>
  );
};

export default RegisterPage;
