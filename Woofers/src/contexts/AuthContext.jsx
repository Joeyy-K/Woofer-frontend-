import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // import the js-cookie library

// Create a context
export const AuthContext = createContext();

// Create a provider which will hold our global state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // add a loading state

  // Check the authentication cookie when the component mounts
  useEffect(() => {
    const authCookie = Cookies.get('isAuthenticated'); // use the name of your cookie
    setIsAuthenticated(!!authCookie);
    setIsLoading(false); // set loading to false after checking the cookie
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};


