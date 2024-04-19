import React, { useState }  from 'react'
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo (2).jpeg"
import { motion } from "framer-motion"
import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
    return (
  <div className="inset-x-0 top-0 z-50 sticky">
    <nav className="bg-gray-900 flex items-center justify-between p-6" aria-label="Global">
      <div className="flex lg:flex-1">
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
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
      </div>
    </nav>
    {isMenuOpen && (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="w-[48px] h-[48px] rounded-full object-cover" src={logo} alt="" />
          </Link>
            <MdClose className="h-6 w-6 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
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