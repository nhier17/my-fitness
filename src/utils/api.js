import axios from 'axios'

export const base_url = 'https://my-fitness-api.onrender.com';
//get data
export const getExerciseData = async (category) => {
    try {
      const response = await axios.get(`${base_url}/api/exercise`, {
          params: {
              category: category
          }
        });
            return response.data; 
    } catch (error) {
        console.error('Error fetching data',error);
    }

}

//proceed to workout
export const proceedToWorkoutData = async (selectedExercises) => {
    try {
        if (selectedExercises.length > 0) {
            const exercisesWithIds = await Promise.all(
                selectedExercises.map(async (exercise) => {
                    const { data } = await axios.get(`${base_url}/api/exercise/exercise/${exercise._id}`);
                    return { ...exercise, exercise: data._id };
                })
            );

            const response = await axios.post(`${base_url}/api/workout`, { exercises: exercisesWithIds });

            if (response.status === 201) {
                return true;
            } else {
                console.log('Failed to start workout');
                return false;
            }
        }
    } catch (error) {
        console.error('Error starting workout:', error);
        throw error; // Rethrow the error to handle it in the component
    }
};

