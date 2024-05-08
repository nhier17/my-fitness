import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { base_url } from '../utils/api';

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  console.log(profilePicUrl)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
        const userInfo = response.data;
        console.log(userInfo)
        setProfilePicUrl(userInfo.user.profilePicture);
      } catch (error) {
        console.error(error);
        toast.error('Error fetching user data');
      }
    }
    fetchUserData();
  }, [])

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
      await axios.post('http://localhost:5000/api/auth/profile', formData, {
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
  return (
    <div>
      <h2>Profile</h2>
      {profilePicUrl && (
        <img className="rounded-full w-12 h-12" src={`http://localhost:5000/${profilePicUrl}`} alt="username"/>
      )}
      <input type="file" accept="image/*" onChange={inputHandler} />
      <button onClick={uploadImage}>Upload Profile Picture</button>
    </div>
  )
}

export default UserProfile
