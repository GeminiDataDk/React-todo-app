import React, { createContext, useState } from "react";

export const DeleteContext = createContext("");

const ContextProvider = ({ children }) => {
  const [deletetask, setDeletetask] = useState(false);

  return (
    <>
      <DeleteContext.Provider value={{ deletetask, setDeletetask }}>
        {children}
      </DeleteContext.Provider>
    </>
  );
};

export default ContextProvider;
