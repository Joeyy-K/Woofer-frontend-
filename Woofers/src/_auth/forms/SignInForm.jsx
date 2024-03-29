import React, { useState, useContext } from 'react'; // import useContext
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext'; // import the 
import { UserContext } from '../../contexts/UserContext';
import Cookies from 'js-cookie';
import { API_URL } from '../../components/url/url';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  let csrftoken = Cookies.get('csrftoken');

  const isFormValid = email && password;

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleTogglePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  
  const handleLogin = () => {
    
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
    setIsLoading(true);

    new Promise((resolve, reject) => {
      fetch(`${API_URL}/user/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
      credentials: 'include',
      })
      .then((response) => {
        setTimeout(() => resolve(response), 2000); 
      })
      .catch((error) => {
        setTimeout(() => reject(error), 2000);
      });
    })
    .then((response) => {
      if (response.ok) { 
        return response.json().then((data) => {
          setStatus('Log In successful!');
          setEmail('');
          setPassword('');
          setError('');
          setUser(data.user);
          setIsAuthenticated(true);
          Cookies.set('isAuthenticated', 'true');
          Cookies.set('user', JSON.stringify(data.user));
          Cookies.set('userToken', data.token);
          navigate('/')
        });
      } else if (response.status === 400) {
        setIsLoading(false);
        setError('Invalid Credentials');
      } else if (response.status === 403) {
        setIsLoading(false);
        setError('You do not have permission to perform this action');
      } else if (response.status === 404) {
        setIsLoading(false);
        setError('The requested resource could not be found');
      } else if (response.status === 409) {
        setIsLoading(false);
        return response.json().then((data) => {
          setIsLoading(false);
          setError(data.message);
        });
      } else if (response.status === 500) {
        setIsLoading(false);
        setError('An error occurred on the server');
      } else {
        setIsLoading(false);
        setError('An error occurred during login');
      }
    })
    .catch((error) => {
      setIsLoading(false);
      console.error('Login error:', error);
      setError('An error occurred during login');
    });
  };

  return (
    <div className="max-w-md sm:w-420 flex-center flex-col mx-auto">   
      <h1 className="text-2xl font-extrabold mb-5 sm:pt-12">Login</h1>
      {error && 
      <div className="bg-red-200 px-4 py-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
        <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
            <path fill="currentColor"
              d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
            </path>
        </svg>
        <span className="text-red-800">{error}</span>
      </div>}
      <form>
      <label className="block mb-2 font-extrabold">Email</label>
      <input
        autoComplete="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 mb-3 px-4 py-2 mt-3 w-full block"
      />
      <label className="block mb-2 font-extrabold">Password</label>
      <div className="relative">
        <input
         autoComplete="current-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 mb-3 px-4 py-2 mt-3 w-full block"
        />
        <button 
          onClick={handleTogglePassword} 
          className="absolute inset-y-0 right-0 pl-3 pr-3 flex items-center"
        >
        {showPassword ? (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
            </path>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          )}
        </button>
      </div>
      </form>
      <button
        onClick={handleLogin}
        className="bg-indigo-600 text-white mt-4 w-full py-2 rounded-md flex items-center justify-center"
      >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        ) : null}
      {isLoading ? 'Loading...' : 'Login'}
      </button>
      <p className="p-4 text-center font-extrabold">Dont't have an account? <Link to="/register" className="text-red-500 hover:underline">Sign Up here</Link></p>
    </div>
  );
};

export default SignInForm;

