import React from 'react'

const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    <div
    className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isChecked ? 'bg-green-500' : ''}`}
      onClick={() => onChange(!isChecked)}
    >
       <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isChecked ? 'translate-x-6' : ''}`}
      ></div>  
    </div>
  )
}

export default ToggleSwitch