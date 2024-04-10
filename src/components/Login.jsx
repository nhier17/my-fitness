import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'sonner';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: "",
      })
      //login user 
      const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/auth/login', formData)  
          if(response.data) {
            const userName = response.data.user.name;
            localStorage.setItem('token', userName);
            navigate('/');
            toast.success(`Eat,Train Sleep! ${userName}`);
            setFormData({ email: '', password: '' });
          }
        } catch (error) {
            toast.error(error.response.data.msg)
            console.error(error)
        }
      }

      const InputHandler = (e) => {
        setFormData({...formData,
          [e.target.name]: e.target.value
        })
      }

  return (
<div className="m-auto mt-[5rem] bg-[#fff] rounded-[30px] relative overflow-hidden w-[768px] max-w-full min-h-[480px]">
    <form className="mt-8 flex items-center justify-center flex-col" onSubmit={submitHandler}>
     <div className="relative w-1/2">
        <MdEmail className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2" />
        <input
        onChange={InputHandler}
        className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
         type="email" placeholder="email" name="email" />
     </div>
     <div className="relative w-1/2">
        <FaLock className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2" />
        <input
        onChange={InputHandler}
        className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
         type="password" placeholder="password" name="password" />
     </div>
     <button
     className="bg-[#4692F5] border-none my-2 px-12 py-4 text-white text-xs sm:text-sm rounded-lg w-1/2 focus:outline-none font-semibold tracking-wide uppercase cursor-pointer mt-6"
     type="submit">
        Login
        </button>
     <p className="m-6">Don't have an account?
        <Link
         className="text-blue-500 mx-2"
         to="/signup">
            Sign up
        </Link>
     </p>
        </form> 
        <div className="flex items-center mt-3 w-1/2 m-auto">
       <div className="flex-grow border-t border-gray-300 "></div>
      <div className="px-2 text-gray-500 text-sm">Or</div>
       <div className="flex-grow border-t border-gray-300"></div>
      </div>
        <div className="w-1/2 m-auto mt-3  px-12 py-4">
        <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
 </div>
</div>
  )
}

export default Login