import React, { useState } from 'react';

// Create the context
export const VetContext = React.createContext();

// Create the provider component
export const VetProvider = ({ children }) => {
  const [vetId, setVetId] = useState(null);

  return (
    <VetContext.Provider value={{ vetId, setVetId }}>
      {children}
    </VetContext.Provider>
  );
};
