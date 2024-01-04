import React, { createContext, useState } from 'react';

// Create a User context
export const UserContext = createContext();

// Create a provider which will hold our global state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
