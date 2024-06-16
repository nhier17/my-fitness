import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { useStateContext } from '../contexts/ContextProvider';
import { Spinner, ToggleSwitch } from '../components';
import { base_url, updatePassword, handle2FA } from '../utils/api';
import { FaUser } from 'react-icons/fa';

const Settings = () => {
    const { userInfo, setProfilePic, fetchData, isUploading, setIsUploading } = useStateContext();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [is2FAenabled, setIs2FAenabled] = useState(userInfo?.is2FAenabled || false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (userInfo?.userId) {
            fetchData();
        }
    }, [fetchData, userInfo?.userId]);

    // Update user password
    const handlePasswordChange = async (e) => {
        e.preventDefault();

        try {
            const data = await updatePassword(oldPassword, newPassword);
            if (data) {
                toast.success('Password updated successfully');
                setOldPassword('');
                setNewPassword('');
            } 
        } catch (error) {
            console.error('Error updating password', error);
        }
    };

    //upload image 
    const uploadImage = async (file) => {
      const userId = userInfo._id;
      try {
          setIsUploading(true);
          const formData = new FormData();
          formData.append("profilePicture", file);
          formData.append("userId", userId);
          await axios.post(`${base_url}/api/auth/profile`, formData, {
              headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${userId}`
              },
              withCredentials: true,
          });
          toast.success("Profile picture updated successfully");
          fetchData();
      } catch (error) {
          console.error(error);
          toast.error('Error updating profile picture');
      } finally {
          setIsUploading(false);
      }
  };
  
  const inputHandler = (e) => {
      const file = e.target.files[0];
      if (file) {
          setProfilePic(file);
          uploadImage(file);
      }
  };
  

    // Handle 2FA auth
    const toggle2FA = async () => {
        try {
            const data = await handle2FA(is2FAenabled);
            if (data) {
                setIs2FAenabled(!is2FAenabled);
                toast.success(`2FA ${is2FAenabled ? 'disabled' : 'enabled'} successfully`);
            } else {
                toast.error(`Error ${is2FAenabled ? 'disabling' : 'enabling'} two-factor authentication`);
            }
        } catch (error) {
            console.error(`Error ${is2FAenabled ? 'disabling' : 'enabling'} two-factor authentication`, error);
        }
    };

    return (
      <div className="container mx-auto px-4 py-8 bg-white shadow-md rounded-lg w-full max-w-screen-md min-h-[480px] mt-10">
      <h3 className="text-3xl font-bold text-black">Your Settings</h3>
      <p className="text-base font-semibold text-gray-500 mb-4">Update your account settings</p>
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
                  ref={fileInputRef}
                  onChange={inputHandler}
              />
          </div>
          <div className="flex items-center gap-10 mb-4">
              {userInfo?.isGoogleUser ? (
                  <img
                      className="rounded-full w-10 h-10 object-cover"
                      src={userInfo?.profilePicture}
                      alt={userInfo?.name}
                  />
              ) : userInfo?.profilePicture ? (
                  <img
                      className="rounded-full w-10 h-10 object-cover"
                      src={`${base_url}${userInfo?.profilePicture}`}
                      alt={userInfo?.name}
                  />
              ) : (
                  <FaUser className="w-8 h-8 text-gray-400" />
              )}

              <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="bg-purple-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md"
              >
                  {isUploading ? <Spinner /> : 'Update Avatar'}
              </button>
          </div>
          <div className="">
              <label className="text-black p-2 text-lg">Old Password</label>
              <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Old password"
                  className="mt-2 w-full p-2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-md text-black mb-2"
              />
          </div>
          <div>
              <label className="text-black p-2 text-lg">New Password</label>
              <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                  className="mt-2 w-full p-2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-md text-black mb-2"
              />
          </div>
          <button
              type="submit"
              className="bg-purple-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
              Update Password
          </button>
      </form>

      <div className="mt-4">
          <h3 className="text-lg font-semibold text-black">Two-Factor Authentication</h3>
          <p className="text-gray-500 mr-4 mb-4 text-sm">Enable two-factor authentication for your account.</p>
          <ToggleSwitch isChecked={is2FAenabled} onChange={toggle2FA} />
      </div>
  </div>
    );
};

export default Settings;
