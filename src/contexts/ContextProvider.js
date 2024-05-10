import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [profilePic, setProfilePic] = useState(null)
  const [userInfo, setUserInfo] = useState({});

  return (
    <StateContext.Provider value={{
         profilePic, 
         setProfilePic, 
         userInfo, 
         setUserInfo
          }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);