import React from 'react'
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo (2).jpeg"
import { motion } from "framer-motion"
import { FcMenu } from "react-icons/fc";
import { FaUser } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import { base_url } from "../utils/api"
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';


const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen, userInfo } = useStateContext();
  console.log(userInfo);
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  

    return (
  <div className="w-full inset-x-0 top-0 z-50 sticky">
    <nav className="w-full bg-gray-900 flex items-center justify-between p-6" aria-label="Global">
      <div className=" flex flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <img className="w-[48px] h-[48px] rounded-full object-cover" src={logo} alt="" />
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
      <Link to="/user-profile">
      <div className="hidden lg:flex gap-2 lg:flex-1 lg:justify-end">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
          {userInfo ? (
          <img className="w-8 h-8 rounded-full object-cover"  src={`${base_url}/${userInfo?.profilePicture}`} alt={userInfo.name} />
          ) : (
            <FaUser className="w-8 h-8" />
          )}
        </div>
        <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                {userInfo?.name}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>
      </Link>
    </nav>
    {isMenuOpen && (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
        <Link to="/user-profile">
      <div className="flex lg:flex-1 lg:justify-end">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
          {userInfo ? (
          <img className="w-16 h-16 rounded-full object-cover" src={`${base_url}/${userInfo?.profilePicture}`} alt={userInfo.name} />
          ) : (
            <FaUser className="w-16 h-16" />
          )}
        </div>
      </div>
      </Link>
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