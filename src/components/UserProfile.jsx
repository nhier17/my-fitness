import React, {  useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {  base_url } from '../utils/api';
import { MdOutlineCloudUpload } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useStateContext } from '../contexts/ContextProvider';
import Dashboard from '../pages/Dashboard';
import { FaUser } from 'react-icons/fa'


const UserProfile = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo, profilePic, setProfilePic,fetchData } = useStateContext();


  useEffect(() => {
    if(userInfo?.userId) {
    fetchData();
    }
  }, [fetchData, userInfo?.userId]);

  const inputHandler = (e) => {
    setProfilePic(e.target.files[0]);
  }
  //upload image 
  const uploadImage = async () => {
    const userId = userInfo.userId;
    try {
      const formData = new FormData();
      formData.append("profilePicture", profilePic);
      formData.append("userId", userId);
      await axios.post(`${base_url}/api/auth/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userId}`
            },
            withCredentials: true,
      });
      toast.success("Profile picture updated successfully");
      // fetch updated profile
       fetchData();
    } catch (error) {
      console.error(error);
      toast.error('Error updating profile picture');
    }
  };

  //logout the user
  const logout = async () => {
    try {
      await axios.get(`${base_url}/api/auth/logout`, {withCredentials: true}); 
      setUserInfo(null);
      localStorage.removeItem('userId')
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Logout Error',error);
      toast.error('Error logging out');
    }
  
    }

  const randomImg = 'https://source.unsplash.com/1600x900/?fitness';
  
  return (
    <div className="container relative pb-2 w-full justify-center items-center">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <div className="flex flex-col justify-center items-center">
        <img 
            className="w-full h-370 2xl:h-510 shadow-lg object-cover"
            src={randomImg} 
            alt="user_pic" />
            {userInfo?.profilePicture ? (
         <img
              className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
              src={`${base_url}${userInfo?.profilePicture}`}
              alt={userInfo?.name}
            />    
          ) : (
            <FaUser className="w-20 h-20 text-gray-400" />
          )}
          
          <h2 className="font-bold text-3xl text-center mt-3">
            {userInfo?.name}
          </h2>
          </div>
        </div>
          <div className="text-center mb-7">
            <input
              type="file"
              accept="image/*"
              className=""
              onChange={inputHandler}
            />
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={uploadImage}
            >
              <MdOutlineCloudUpload />
            </button>
          </div>
      </div>
      <Dashboard />
      <div className="flex items-center justify-center">

      <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 flex justify-center items-center gap-2 rounded-md"
            onClick={logout}
          >
            <CiLogout /> <span>Logout</span>
          </button>
      </div>
    </div>
  )
}

export default UserProfile
