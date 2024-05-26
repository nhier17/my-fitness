import axios from 'axios'


export const base_url = 'https://my-fitness-api.onrender.com';
//get exercise data
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
                    const { data } = await axios.get(`${base_url}/api/exercise/${exercise._id}`, {withCredentials: true});
                    return { ...exercise, exercise: data._id };
                })
            );

            const response = await axios.post(`${base_url}/api/workout`, { exercises: exercisesWithIds }, {withCredentials: true});

            if (response.status === 201) {
                return true;
            } else {
                console.log('Failed to start workout');
                return false;
            }
        }
    } catch (error) {
        console.error('Error starting workout:', error);
    }
};
// start the workout
export const startWorkoutData = async (selectedExercises) => {
    try {
        const response = await axios.post(`${base_url}/api/workout/start-workout`, selectedExercises, {withCredentials: true});
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);
        return response.data
    } catch (error) {
        console.error('Error starting workout:', error);
    }
};

//fetch user data
export const fetchUserData = async () => {
    const userId = localStorage.getItem('userId');
    try {
        const response = await axios.get(`${base_url}/api/user/${userId}`, {withCredentials: true});
        return response.data.user;
        
    } catch (error) {
        console.error('Error fetching user data', error);
    }
};

export const getDashboardData = async () => {
try {
    const response = await axios.get(`${base_url}/api/workout/dashboard`, {withCredentials: true});
    return response.data;
} catch (error) {
    console.error('Error fetching workout summmary',error);
}
};

//log out the user
export const logoutUser = async () => {
    try {
     await axios.get(`${base_url}/api/auth/logout`, {withCredentials: true});
   
    } catch (error) {
        console.error('Error logging out user', error);
    }
}
