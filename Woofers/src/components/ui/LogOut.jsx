import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { AuthContext } from '../../contexts/AuthContext';
import Cookies from 'js-cookie'
import { logoutUser } from '../api/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogOut = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
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
    } catch (error) {
      console.error('Error during logout:', error);
      toast.error("Failed To Logout!");
    }
  };

  return (
    <div className="mx-auto flex w-full items-center justify-end">
      <div className="items-center justify-center"><ToastContainer /></div>
        <div className="group relative cursor-pointer py-2" onClick={handleLogout}>
            <div className="flex items-center justify-between space-x-5 border-2 py-2 bg-white px-4">
                <span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12L13 12" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
            </div>
        </div>
    </div>
  )
}

export default LogOut