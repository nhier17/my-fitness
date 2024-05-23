import React, { createContext, useContext, useState, useMemo } from 'react';
import { fetchUserData } from '../utils/api';
import { toast } from 'sonner';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    //userprofile
  const [profilePic, setProfilePic] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //signup and login
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  //navbar 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //fetch user information
  const fetchData = useMemo(() => async () => {
    try {
     const userData = await fetchUserData();
     setUserInfo(userData);
    } catch (error) {
      console.error(error);
      toast.error('Error fetching user data');
    }
  },[]);

  return (
    <StateContext.Provider value={{
         profilePic, 
         setProfilePic, 
         userInfo, 
         setUserInfo,
         formData, 
         setFormData,
         isMenuOpen, 
         setIsMenuOpen,
         fetchData,
         isUploading,
         setIsUploading,
         isModalOpen,
         setIsModalOpen,
          }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);