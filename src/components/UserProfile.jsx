import React, {  useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {  base_url } from '../utils/api';
import { MdOutlineCloudUpload } from "react-icons/md";
import { useStateContext } from '../contexts/ContextProvider';
import Dashboard from '../pages/Dashboard';
import { FaUser } from 'react-icons/fa';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UserProfile = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo,fetchData,isModalOpen, setIsModalOpen, isUploading, setIsUploading } = useStateContext();

  useEffect(() => {
    if(userInfo?.userId) {
    fetchData();
    }
  }, [fetchData, userInfo?.userId]);

  


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

            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setIsModalOpen(true)}
            >
              <MdOutlineCloudUpload />
            </button>
          </div>
      </div>
      <Dashboard />
    </div>
  )
}

export default UserProfile
