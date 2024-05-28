import React, { createContext, useContext, useState, useMemo } from 'react';
import { fetchUserData } from '../utils/api';
import { toast } from 'sonner';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    //userprofile
  const [profilePic, setProfilePic] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  //exercises 
  const [exercises, setExercises] = useState([])
  const [selectedExercises, setSelectedExercises] = useState([]);

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

      //add to workout 
      const addToWorkout = (exercise) => {
        setSelectedExercises((prevSelectedExercises) => [...prevSelectedExercises, exercise])
        toast.success(`${exercise.name} added to workout`)
    };

    //remove from workout
    const removeFromWorkout = (exercise) => {
        setSelectedExercises((prevSelectedExercises) => prevSelectedExercises.filter((e) => e._id!== exercise._id))
        toast.success(`${exercise.name} removed from workout`)
    };

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
         exercises,
         setExercises,
         selectedExercises,
         setSelectedExercises,
         addToWorkout,
         removeFromWorkout,
          }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);