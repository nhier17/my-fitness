import axios from 'axios'


export const base_url = 'https://my-fitness-api.onrender.com';

const axiosInstance = axios.create({
    baseURL: base_url,
    withCredentials: true,
})
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
            const exercisesWithIds = selectedExercises.map((exercise) => ({
                exercise: exercise._id,
                sets: exercise.sets,
                reps: exercise.reps,
                weight: exercise.weight,
                caloriesBurnt: exercise.caloriesBurnt,
            }));

            const response = await axiosInstance.post(`/api/workout`, { exercises: exercisesWithIds });

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
export const startWorkoutData = async (exercise) => {
    try {
      const response = await axiosInstance.post(`/api/workout/start-workout`, { exercises: [exercise] });
  
      if (response.status === 201) {
        return response.data.workoutId;
      } else {
        console.log('Failed to start workout');
        return false;
      }
    } catch (error) {
      console.error('Error starting workout:', error);
    }
  };
//complete workout
export const completeWorkoutData = async (workoutId, exerciseDetails) => {
    try {
        const response = await axiosInstance.post(`/api/workout/${workoutId}/complete-workout`, {workoutId, exerciseDetails});
        return response.data
    } catch (error) {
        console.error('Error completing workout:', error);
    }
};

//workout summary
export const getDashboardData = async () => {
try {
    const response = await axiosInstance.get(`/api/workout/dashboard`);
    return response.data;
} catch (error) {
    console.error('Error fetching workout summmary',error);
}
};

//get workout data
export const getWorkoutData = async () => {
    try {
        const response = await axiosInstance.get(`/api/workout`);
        return response.data;
    } catch (error) {
        console.error('Error fetching workout data', error);
    }
}

//fetch user data
export const fetchUserData = async () => {
  const storedUser = localStorage.getItem('user');
   
  let userId;
  try {
    const parsedUser = JSON.parse(storedUser);
    userId = parsedUser.userId;
  } catch (error) {
    console.error(error);
    return null;
  }
    try {
        const response = await axiosInstance.get(`/api/user/${userId}`);
        return response.data.user;
        
    } catch (error) {
        console.error('Error fetching user data', error);
    }
};

//log out the user
export const logoutUser = async () => {
    try {
     await axiosInstance.get(`/api/auth/logout`);
   
    } catch (error) {
        console.error('Error logging out user', error);
    }
}
// update user passsword
export const updatePassword = async () => {
    const storedUser = localStorage.getItem('user');
   
    let userId;
    try {
      const parsedUser = JSON.parse(storedUser);
      userId = parsedUser.userId;
    } catch (error) {
      console.error(error);
      return null;
    }
    try {
       const response = await axiosInstance.patch(`/api/user/update-password`, {
        headers: {
            'Authorization': `Bearer ${userId}`
        },
       });
       return response.data;
    } catch (error) {
        console.error('Error updating user', error);
    }
}

//handle 2fa auth
export const handle2FA = async () => {
    try {
        const response = await axiosInstance.post(`/api/auth/2fa/enable`)
        return response.data;
    } catch (error) {
        console.error('Error enabling 2fa',error);
    }
}

