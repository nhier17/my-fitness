import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo (2).jpeg"
import { motion } from "framer-motion"
import { FcMenu } from "react-icons/fc";
import { FaUser } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { CiLogout, CiSettings, CiLight, CiLogin } from "react-icons/ci";
import { toast } from 'sonner';
import { base_url, logoutUser } from "../utils/api"
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';


const Navbar = () => {
  const navigate = useNavigate();
  const { isMenuOpen, setIsMenuOpen, userInfo, setUserInfo } = useStateContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
    //logout the user
    const logout = async () => {
      try {
        await logoutUser();
        setUserInfo(null);
        localStorage.removeItem('user')
        toast.success('Logged out successfully');
        navigate('/login');
      } catch (error) {
        console.error('Logout Error',error);
        toast.error('Error logging out');
      }
    
      }
    
    return (
  <div className="w-full inset-x-0 top-0 z-50 sticky">
    <nav className="w-full bg-gray-900 flex items-center justify-between p-6" aria-label="Global">
      <div className="hidden md:flex flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <img className="w-[48px] h-[48px] rounded-full object-cover" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex lg:hidden">
         <FcMenu className="h-6 w-6 cursor-pointer" onClick={() => setIsMenuOpen(true)} />
      </div>
      <ul className="hidden lg:flex lg:gap-x-4">
        <NavLink to="/" text="Home"/>
        <NavLink to="/workouts" text="Workouts"/>
        <NavLink to="/nutrition" text="Nutrition"/>
        <NavLink to="/community" text="Community" />
        <NavLink to="/about" text="About" />
      </ul>
      <div className="flex items-center">
      {userInfo ? (
  <div className="relative">
    <div className="flex gap-2 lg:flex-1 lg:justify-end cursor-pointer" onClick={toggleDropdown}>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
        {userInfo?.isGoogleUser ? (
          <img className="w-12 h-12 rounded-full object-cover" src={userInfo?.profilePicture} alt={userInfo?.name} />
        ) : (
          userInfo.profilePicture ? (
            <img className="w-12 h-12 rounded-full object-cover" src={`${base_url}${userInfo?.profilePicture}`} alt={userInfo?.name} />
          ) : (
            <FaUser className="w-8 h-8 text-gray-400" />
          )
        )}
      </div>
      <p>
        <span className="text-gray-400 text-14">Hi,</span>{' '}
        <span className="text-gray-400 font-bold ml-1 text-14">{userInfo.name}</span>
      </p>
      <MdKeyboardArrowDown className="text-gray-400 text-14" />
    </div>
    {isDropdownOpen && (
      <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" onClick={closeDropdown}>
        <Link to="/login" className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <CiLogin />
          <span>Login</span>
        </Link>
        <Link to="/profile" className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <CgProfile />
          <span>Profile</span>
        </Link>
        <Link to="/settings" className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <CiSettings />
          <span>Settings</span>
        </Link>
        <button className="flex items-center gap-1 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <CiLight />
          Light Mode
        </button>
        <button onClick={logout} className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <CiLogout />
          <span>Logout</span>
        </button>
      </div>
    )}
  </div>
) : (
  <Link to="/login" className="px-4 py-2 text-base bg-purple-700 hover:bg-orange-500 rounded-md">
    Login
  </Link>
)}
      </div>
    </nav>
    {isMenuOpen && (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between" onClick={closeMenu}>
        <img className="w-[48px] h-[48px] rounded-full object-cover" src={logo} alt="logo" />
            <MdClose className="h-6 w-6 cursor-pointer text-black" onClick={() => setIsMenuOpen(false)} />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6" onClick={closeMenu}>
              <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
              <Link to="/workouts" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Workouts</Link>
              <Link to="/community" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Community</Link>
              <Link to="/nutrition" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Nutrition</Link>
              <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</Link>
            </div>
            <div className="py-6"  onClick={closeMenu}>
              <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>
              <Link to="/dashboard" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
  </div>

      );
    };

    const NavLink = ({ to, text }) => {
        const { pathname } = useLocation();
        
        return (
          <li className="relative px-10">
            <Link to={to} className="text-white hover:text-gray-300">
              {text}
              <motion.div
                className="h-1 bg-purple-700 w-0 absolute bottom-[-80%] left-1/2 transform -translate-x-1/2 transition-all duration-750"
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === to ? "50%" : "0%" }}
              ></motion.div>
            </Link>
          </li>
        );
      };


export default Navbar