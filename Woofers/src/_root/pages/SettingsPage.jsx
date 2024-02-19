import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { AuthContext } from '../../contexts/AuthContext';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../components/api/api';

const SettingsPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    const success = await logoutUser();
    if (success) {
      setIsAuthenticated(false);
      Cookies.remove('isAuthenticated');
      Cookies.remove("user");
      Cookies.remove("userToken"); 
      Cookies.remove("token"); 
      Cookies.remove('csrftoken', { path: '/', domain: '127.0.0.1', secure: true, sameSite: 'lax' });
      setUser(null);
    }
  };

  return (
    <div className="bg-gray-100 container mx-auto mb-24">
      <div>
        <div className="mt-3 items-center w-full py-4 rounded bg-indigo-600">
          <p className="text-white font-bold px-3">General Settings</p>
        </div>
        <div className="w-full px-4 py-4 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200">
          <Link to='/appointment' className="flex">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5ZM19 7H5V17H19V7Z" fill="#000000"/>
            <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7C21 8.10457 20.1046 9 19 9H5C3.89543 9 3 8.10457 3 7Z" fill="#000000"/>
            <path d="M7 7C6.44772 7 6 6.55228 6 6V4C6 3.44772 6.44772 3 7 3C7.55228 3 8 3.44772 8 4V6C8 6.55228 7.55228 7 7 7Z" fill="#000000"/>
            <path d="M17 7C16.4477 7 16 6.55228 16 6V4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V6C18 6.55228 17.5523 7 17 7Z" fill="#000000"/>
            <path d="M14.99 11.29L14.285 10.58L10.99 13.875L9.69999 12.59L8.98999 13.295L10.99 15.29L14.99 11.29Z" fill="#000000"/>
          </svg>
          <span className="px-3">Appointments</span>   
          </Link>
        </div>
        <div className="w-full px-4 py-4 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200">
          <Link to='/profile' className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32" id="account">
            <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM10,26.39a6,6,0,0,1,11.94,0,11.87,11.87,0,0,1-11.94,0Zm13.74-1.26a8,8,0,0,0-15.54,0,12,12,0,1,1,15.54,0ZM16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,16,16Z" data-name="13  User, Account, Circle, Person"></path>
          </svg>
              <span className="px-3">Account</span>   
          </Link>
        </div>
        <div className="w-full px-4 py-4 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200">
          <Link to='/about' className="flex">
          <svg className="w=5 h-5" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="about-white" fill="#000000" transform="translate(42.666667, 42.666667)">
            <path d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z" id="Shape"></path>
            </g>
            </g>
          </svg>
            <span className="px-3">About Us</span>   
          </Link>
        </div>
        <div className="w-full px-4 py-4 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200">
          <Link to='/contact' className="flex">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="px-3">Contact Us</span>   
          </Link>
        </div>
        <button onClick={handleLogout} className="w-full px-4 py-4 text-sm mt-10 text-gray-900 bg-gray-200 border border-gray-300 rounded dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200">         
          <p className="text-red-500/100 underline font-semibold text-center px-3">Logout</p>   
        </button>
      </div> 
    </div>
  )
}

export default SettingsPage