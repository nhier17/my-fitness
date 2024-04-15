import React from 'react'
import logo from "../assets/logo (2).jpeg"

const Footer = () => {
  return (
    <div className="mt-20 bg-gray-900">
        <div className="flex flex-col items-center px-10 pt-6">
            <img src={logo} alt="logo" className="w-52 h-auto" />
        </div>
        <p className="text-lg lg:text-4xl xs:text-lg text-center mt-10 pb-10 text-white">
            Begin your fitness journey today
        </p>
    </div>
  )
}

export default Footer