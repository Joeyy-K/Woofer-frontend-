import React, { useState, useContext } from 'react'; // import useContext
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext'; // import the AuthContext
import { UserContext } from '../../contexts/UserContext';
import { CSRFToken } from '../../components/CSRFToken';
import Cookies from 'js-cookie'

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext); // consume the AuthContext
  const { setUser } = useContext(UserContext); // consume the UserContext

  const isFormValid = username && email && password;

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
    fetch('http://127.0.0.1:4000/user/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': console.log(Cookies.get('csrftoken'))
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    .then((response) => {
      if (response.ok) { 
        return response.json().then((data) => {
          const userToken = data.token; 
          localStorage.setItem('userToken', userToken);
          setStatus('Registration successful!');
          setUsername('');
          setEmail('');
          setPassword('');
          setError('');
          setIsAuthenticated(true); // set isAuthenticated to true after successful registration
          setUser(data.user);
          console.log(data.user);
          navigate('/')
        });
      } else if (response.status === 409) {
        return response.json().then((data) => {
          setError(data.message);
        });
      } else {
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
      <CSRFToken />
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
