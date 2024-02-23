import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // import the js-cookie library

// Create a User context
export const UserContext = createContext();

// Create a provider which will hold our global state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check the user cookie when the component mounts
  useEffect(() => {
    const userCookie = Cookies.get('user'); // use the name of your cookie
    const user = userCookie ? JSON.parse(userCookie) : null; // parse the user data if it exists

    setUser(user); // set the user state
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
