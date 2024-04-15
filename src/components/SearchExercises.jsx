import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { fetchData,exerciseOptions } from "../utils/fetchData";

const SearchExercises = () => {
    const [search, setSearch] = useState('')

    const submitHandler = async(e) => {
        e.preventDefault()
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            console.log(exercisesData)
            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search),
              );
              window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
              setSearch('')
        }
        
    }
  return (
    <div className="flex flex-col items-center mt-[37px] justify-center p-5">
       <p className="font-bold text-lg md:text-xl mb-8 text-center">
        Explore exercises tailored <br />
        to your fitness goals
        </p> 
        <form className="flex items-center w-full max-w-md bg-gradient-to-r from-gray-800 to-gray-600 text-white text-lg px-4 py-2 rounded-md" onSubmit={submitHandler}>
            <FaSearch className="text-2xl text-white mr-4" />
            <input 
            className="w-full bg-transparent focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text" 
            placeholder="search for exercises" />                
        </form>
  
    </div>
  )
}

export default SearchExercises