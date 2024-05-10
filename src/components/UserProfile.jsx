import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { fetchUserData, base_url } from '../utils/api';
import { MdOutlineCloudUpload } from "react-icons/md";
import { CiLogout } from "react-icons/ci";


const UserProfile = () => {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null)
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
       const userData = await fetchUserData();
       setUserInfo(userData.user);
        localStorage.setItem('profilePicture', userData.user.profilePicture);
      } catch (error) {
        console.error(error);
        toast.error('Error fetching user data');
      }
    }
    fetchData();
  }, []);

  const inputHandler = (e) => {
    setProfilePic(e.target.files[0]);
  }
  //upload image 
  const uploadImage = async () => {
    const userId = localStorage.getItem('token')
    try {
      const formData = new FormData();
      formData.append("profilePicture", profilePic);
      formData.append("userId", userId);
      await axios.post(`${base_url}/api/auth/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      })
      toast.success("Profile picture updated successfully");
    } catch (error) {
      console.error(error);
      toast.error('Error updating profile picture');
    }
  };

  //logout the user
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profilePicture');
    localStorage.removeItem('userName');
    toast.success('Logged out successfully');
    navigate('/login');
    window.location.reload();
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
            {userInfo && (
         <img
              className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
              src={`${base_url}/${userInfo?.profilePicture}`}
              alt={userInfo?.name}
            />    
          )}
          <h2 className="font-bold text-3xl text-center mt-3">
            {userInfo.name}
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
      <div className="mt-5">
          <button
           onClick={logout}
           className="flex items-center justify-center gap-2">
          <CiLogout />
          <span>Log out</span>
          </button>
      </div>
    </div>
  )
}

export default UserProfile
