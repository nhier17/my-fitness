import React, { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData' 

const Exercise = ({ bodyPart, exercisesData, setExercises, exercises }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [exercisesPerPage] = useState(6)

    useEffect(() => {
        const fetchExerciseData = async () => {
            let fetchedData;
            if (bodyPart === 'all') {
                fetchedData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                fetchedData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(fetchedData);
        };

        fetchExerciseData();
    }, [bodyPart, setExercises]);

    const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
    
  return (
    <div>
      
    </div>
  )
}

export default Exercise
