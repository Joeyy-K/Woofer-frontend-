import React, { createContext, useState } from 'react';

// Create a context
export const AuthContext = createContext();

// Create a provider which will hold our global state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
