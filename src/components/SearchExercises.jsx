import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { fetchData,exerciseOptions } from "../utils/fetchData";

const SearchExercises = () => {
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])

    const submitHandler = async(e) => {
        e.preventDefault()
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            console.log('Search query:', search);
            console.log('Exercise data:', exercisesData);
            const searchedExercises = exercisesData.filter(
              (exercise) =>
                  exercise.name.toLowerCase().includes(search) ||
                  exercise.target.toLowerCase().includes(search) ||
                  exercise.equipment.toLowerCase().includes(search) ||
                  exercise.bodyPart.toLowerCase().includes(search)
          );
            console.log(searchedExercises)
              window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
              setSearch('')
              setExercises(searchedExercises);
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
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            value={search}
            type="text" 
            placeholder="search for exercises" />                
        </form>
      <div className="">
      {exercises.map((exercise) => (
        <div key={exercise.id} >
          <img src={exercise.gifUrl} alt="exercise" />
          <button>{exercise.bodyPart}</button>
          <button>{exercise.target}</button>
          <p className="text-white">{exercise.name}</p>
          </div>
      ))}
     </div>
    </div>
  )
}

export default SearchExercises