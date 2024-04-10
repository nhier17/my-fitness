import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLock, FaUser } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'sonner';

const Signup = () => {
  return (
    <div className="m-auto mt-[5rem] bg-[#fff] rounded-[30px] relative overflow-hidden w-[768px] max-w-full min-h-[480px]">
       <form className="mt-8 flex items-center justify-center flex-col ">
     <h1>Sign up</h1>
     <div className="relative w-1/2">
        <FaUser className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2" />
        <input
        className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
         type="text" placeholder="name" name="name" />
     </div>
     <div className="relative w-1/2">
        <MdEmail className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2" />
        <input
        className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
         type="email" placeholder="email" name="email" />
     </div>
     <div className="relative w-1/2">
        <FaLock className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2" />
        <input
        className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
         type="password" placeholder="password" name="password" />
     </div>
     <button>Register</button>
     <p>Aleady have an account?
        <Link to="/login">
            Login
        </Link>
     </p>
        </form> 
        <p className="text-center mt-7">Or continue with</p>
        <div>
            <button className="bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none">
                Google
            </button>
            <button className="bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none">
                <FaLock className="mr-2" />
                Facebook
            </button>
        </div>
    </div>
  )
}

export default Signup