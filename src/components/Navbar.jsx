import React from 'react'
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo (2).jpeg"
import { motion } from "framer-motion"
import { FcMenu } from "react-icons/fc";

const Navbar = () => {
    return (
  <nav className="bg-gray-900 p-4">
  <div className="mx-auto flex justify-between items-center">
    <Link to="/">
        <img
        className="w-[48px] h-[48px] rounded-full object-cover"
         src={logo} alt="gymlogo" />
    </Link>
    <ul class="hidden md:flex list-none">
        <NavLink to="/" text="Home"/>
        <NavLink to="/workouts" text="Workouts"/>
        <NavLink to="/nutrition" text="Nutrition"/>
        <NavLink to="/community" text="Community" />
        <NavLink to="/about" text="About" />
    </ul>
    <div className="flex items-center space-x-4">
     <FcMenu />
    </div>
  </div>
</nav>
      );
    };

    const NavLink = ({ to, text }) => {
        const { pathname } = useLocation();
      
        return (
          <li className="relative px-10">
            <Link to={to} className="text-white hover:text-gray-300">
              {text}
              <motion.div
                className="h-1 bg-[#0ef] w-0 absolute bottom-[-80%] left-1/2 transform -translate-x-1/2 transition-all duration-750"
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === to ? "50%" : "0%" }}
              ></motion.div>
            </Link>
          </li>
        );
      };


export default Navbar