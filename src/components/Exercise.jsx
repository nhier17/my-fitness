import React, {  useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData' 

const Exercise = ({ bodyPart, exercisesData, setExercises, exercises }) => {


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

    
  return (
    <div>
      
    </div>
  )
}

export default Exercise
