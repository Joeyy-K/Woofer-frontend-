import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { logoutUser } from '../../components/api/api';
import { AuthContext } from '../../contexts/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../components/url/url';

const ProfilePage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const success = await logoutUser();
      if (success) {
        setIsAuthenticated(false);
        Cookies.remove('isAuthenticated');
        Cookies.remove("user");
        Cookies.remove("userToken"); 
        Cookies.remove("token"); 
        setUser(null);
      }
    } catch (error) {
      console.error('Error during logout:', error);
      toast.error("Failed to LogOut!");
    }
  };

  if (user) {
    return (
      <div className="bg-gray-100 container mx-auto my-1 mb-24">
        <div className="items-center justify-center"><ToastContainer /></div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 border-r">
            <div className="flex flex-col items-center text-center p-3 py-5">
              <img className="rounded-full mt-5 w-36" src={`${API_URL}${user.profile_picture}`} alt="User Profile"/>
              <span className="font-semibold">{user.username}</span>
              <span className="text-gray-500">{user.email}</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 border-r">
            <div className="p-4 py-0 mt-5">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-right font-bold">User Profile</h4>
              </div>
              <hr className="my-4 bg-gray-300 h-1"/>
              <div className="flex flex-wrap mt-4">
              <div className="w-full">
                <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Email: </label>
                  <div className="relative">
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                      </span>
                      <p className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">{user.email}</p>                    
                    </div>
                  </div>
              </div>
              </div>
              <div className="flex flex-wrap mt-5">
              <div className="w-full">
                <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Username: </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                      </svg>
                    </span>
                    <p className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">{user.username}</p>                   
                  </div>
              </div>
              </div>
              <div className="flex flex-wrap mt-5">
              <div className="w-full">
                <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Joined: </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3,22H21a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H3A1,1,0,0,0,2,6V21A1,1,0,0,0,3,22ZM4,7H20v3H4Zm0,5H20v8H4Z"/>
                      </svg>
                    </span>
                    <p className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">{new Date(user.date_joined).toLocaleDateString()}</p>                   
                  </div>
              </div>
              </div>
              <div className="mt-8 mb-10 text-center">
                <Link to='/editing'>
                  <button className="text-white py-2 px-24 uppercase rounded bg-indigo-600 hover:bg-indigo-400 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" type="button">Edit</button>
                </Link>  
              </div>
              <hr className="my-4 bg-gray-300 h-1"/>
            </div>
          </div>        
          <div className="w-full md:w-1/4">
            <div className="p-3">
              <div className="flex relative justify-between items-center mb-3 px-1">
                <Link to="/about">
                  <button className="inline-flex items-center px-4 py-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="about-white" fill="#000000" transform="translate(42.666667, 42.666667)">
                      <path d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z" id="Shape">
                      </path>
                      </g>
                      </g>
                    </svg>
                    <span className="px-3">About Us</span>
                  </button>
                </Link>
              </div>
              <div className="flex justify-between items-center py-3 px-1">
                <Link to='/settings'>
                  <button className="inline-flex items-center px-4 py-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.4277 2C11.3139 2 10.2995 2.6007 8.27081 3.80211L7.58466 4.20846C5.55594 5.40987 4.54158 6.01057 3.98466 7C3.42773 7.98943 3.42773 9.19084 3.42773 11.5937V12.4063C3.42773 14.8092 3.42773 16.0106 3.98466 17C4.54158 17.9894 5.55594 18.5901 7.58466 19.7915L8.27081 20.1979C10.2995 21.3993 11.3139 22 12.4277 22C13.5416 22 14.5559 21.3993 16.5847 20.1979L17.2708 19.7915C19.2995 18.5901 20.3139 17.9894 20.8708 17C21.4277 16.0106 21.4277 14.8092 21.4277 12.4063V11.5937C21.4277 9.19084 21.4277 7.98943 20.8708 7C20.3139 6.01057 19.2995 5.40987 17.2708 4.20846L16.5847 3.80211C14.5559 2.6007 13.5416 2 12.4277 2ZM8.67773 12C8.67773 9.92893 10.3567 8.25 12.4277 8.25C14.4988 8.25 16.1777 9.92893 16.1777 12C16.1777 14.0711 14.4988 15.75 12.4277 15.75C10.3567 15.75 8.67773 14.0711 8.67773 12Z" fill="#1C274C"/>
                    </svg>
                    <span className="px-3">Settings</span>
                  </button>
                </Link>
              </div>
              <div className="flex justify-between items-center py-3 px-1">
                <button onClick={handleLogout} className="inline-flex items-center px-4 py-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="px-3">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center flex-col gap-3">
      <div
          className="flex bg-white dark:bg-gray-900 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-red-500">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-500 stroke-current" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M12 8V12V8ZM12 16H12.01H12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <div className="ml-3">
              <div className="font-bold text-left text-black dark:text-gray-50">User Not Found</div>
              <div className="w-full text-gray-900 dark:text-gray-300 mt-1">You aren't logged in. Please <Link className="text-red-600 underline" to="/">Log In</Link>.</div>
          </div>
      </div>
      </div>
    )
  }
};

export default ProfilePage;
