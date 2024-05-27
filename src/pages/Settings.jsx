import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { toast } from 'sonner';
import { useStateContext } from '../contexts/ContextProvider';
import { Spinner, ToggleSwitch } from '../components';
import { base_url, updatePassword, handle2FA } from '../utils/api';
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


const Settings = () => {
    const { userInfo, profilePic, setProfilePic, fetchData } = useStateContext();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [is2FAenabled, setIs2FAenabled] = useState(userInfo?.is2FAenabled || false);

    useEffect(() => {
        if(userInfo?.userId) {
        fetchData();
        }
      }, [fetchData, userInfo?.userId]);

      //update user password
      const handlePasswordChange = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            const data = await updatePassword();
            if(data.success) {
                toast.success('Password updated successfully');
                setPassword('');
                setConfirmPassword('');
            } else {
                toast.error('Error updating password');
            }
        } catch (error) {
            console.error('Error updating password',error);
        }
      }

    const inputHandler = (e) => {
        setProfilePic(e.target.files[0]);
      }

      //upload image 
      const uploadImage = async () => {
        const userId = userInfo._id;
        console.log('uploading image', userId);
        try {
          setIsUploading(true);
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
          setIsModalOpen(false);
           fetchData();
        } catch (error) {
          console.error(error);
          toast.error('Error updating profile picture');
        } finally {
          setIsUploading(false);
        }
      };

      //handle 2fa auth
      const enable2FA = async (newState) => {
        try {
            const data = await handle2FA();
            if(data.success) {
                setIs2FAenabled(newState);
                toast.success('2FA enabled successfully');
            } else {
                toast.error('Error enabling two factor authentication');
            }
        } catch (error) {
            console.error('Error updating two-factor authentication',error);
        }
      }

  return (
    <div className="container m-auto px-4 py-8 bg-white shadow-md rounded-lg w-full max-w-screen-md min-h-[480px] mt-10">
       <h3 className="text-3xl font-bold text-black">Your Settings</h3>
       <p className="text-base font-semibold text-gray-500 mb-4">Update your acount settings</p>
        <form onSubmit={handlePasswordChange}>
        <div>   
         <label className="text-black p-2 text-lg">Name</label>    
        <input
         type="text"
         placeholder={userInfo?.name}
         className="mt-2 w-full p-2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-md text-black"
          />
          <p className="text-gray-400 text-base">This is your public display name.</p>
          </div>
          <div className="mt-4">
          <label className="text-black p-2 text-lg">Avatar</label>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={inputHandler}
            />
            </div>
          <div className="flex items-center gap-10 mb-4">
          {userInfo?.profilePicture ? (
         <img
              className="rounded-full w-8 h-8 -mt-10 shadow-xl object-cover"
              src={`${base_url}${userInfo?.profilePicture}`}
              alt={userInfo?.name}
            />    
          ) : (
            <FaUser className="w-8 h-8 text-gray-400" />
          )}
            <button
            type="submit"
            onClick={inputHandler} 
            className="bg-purple-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md">
               Update Avatar 
            </button>
          </div>
          <div className="">
            <label className="text-black p-2 text-lg">Password</label>
            <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="Old password"
             className="mt-2 w-full p-2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-md text-black mb-2"
             />
          </div>
          <div>
            <label className="text-black p-2 text-lg">New Password</label>
            <input
             type="password"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
             placeholder="New password"
             className="mt-2 w-full p-2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-md text-black"
             />
          </div>
          </form>
   
          <div className="mt-4">
        <h3 className="text-lg font-semibold text-black">Two-Factor Authentication</h3>
          <p className="text-gray-500 mr-4 mb-4 text-sm">Enable two-factor authentication for your account.</p>
          <ToggleSwitch isChecked={is2FAenabled} onChange={enable2FA} />
      </div>
      <button
      className="bg-purple-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md mt-4"
      >
        Update your settings
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
        overlayClassName="overlay"
        style={customStyles}
      >
        <div className="flex flex-col items-center">
          <label>Avatar</label>
          <input 
            type="file"
            accept="image/*"
            className="mb-4"
            onChange={inputHandler}
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={uploadImage}
            disabled={isUploading}
          >
            {isUploading ? <Spinner /> : 'Upload'}
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Settings