import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'sonner';
import { GoogleLogin } from '@react-oauth/google';
import { login } from '../assets'
import { base_url } from '../utils/api'

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: "",
        showPassword: false,
      })
      //login user 
      const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${base_url}/api/auth/login`, formData)  
          if(response.data) {
            const userName = response.data.user.name;
            localStorage.setItem('token', userName);
            navigate('/');
            toast.success(`Eat,Train Sleep! ${userName}`);
            setFormData({ email: '', password: '', showPassword: false });
          }
        } catch (error) {
            toast.error(error.response.data.msg)
            console.error(error)
        }
      }
      //toggle password
      const togglePasswordVisibility = () => {
        setFormData((prevState) => ({
          ...prevState,
           showPassword:!prevState.showPassword
        }))
      }

      const InputHandler = (e) => {
        setFormData({...formData,
          [e.target.name]: e.target.value
        })
      }

      //google login success
const handleSuccess = (credentialResponse) => {
  navigate('/')
  }
  
  const handleError = () => {
  console.log('Failed to login')
  }

  return (
<div
 className="m-auto mt-10 rounded-lg relative overflow-hidden w-full max-w-screen-md min-h-[480px] p-8"
 style={{ backgroundImage: `url(${login})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
 >
    <form className="mt-8 flex items-center justify-center flex-col" onSubmit={submitHandler}>
     <div className="relative w-full">
     <MdEmail className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2 text-black" />
       <input
        onChange={InputHandler}
        className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
         type="email" placeholder="email" name="email" />
     </div>
     <div className="relative w-full">
     <FaLock className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2 text-black" />
        <input
        onChange={InputHandler}
        className="text-black  bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
         type={formData.showPassword ? 'text' : 'password'} 
         placeholder="password"
         name="password"
           />
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
             onClick={togglePasswordVisibility}
              >
                  {formData.showPassword ? <FaEyeSlash className="text-black text-lg" /> : <FaEye className="text-black text-lg" />}
              </div>
     </div>
     <button
     className="bg-purple-700 hover:bg-purple-400 border-none my-2 px-12 py-4 text-white text-xs sm:text-sm rounded-lg w-1/2 focus:outline-none font-semibold tracking-wide uppercase cursor-pointer mt-6"
     type="submit">
        Login
        </button>
     <p className="m-6 text-white">Don't have an account?
        <Link
         className="text-blue-500 mx-2"
         to="/signup">
            Sign up
        </Link>
     </p>
        </form> 
        <div className="flex items-center mt-3 w-1/2 m-auto">
       <div className="flex-grow border-t border-gray-300 "></div>
      <div className="px-2 text-gray-200 text-sm">Or</div>
       <div className="flex-grow border-t border-gray-300"></div>
      </div>
        <div className="w-1/2 m-auto mt-3  px-12 py-4">
        <GoogleLogin
  onSuccess={handleSuccess}
  onError={handleError}
/>
 </div>
</div>
  )
}

export default Login