import axios from 'axios'

export const base_url = 'https://my-fitness-api.onrender.com';

export const getExerciseData = async (category) => {
const response = await axios.get(`${base_url}/api/exercise`, {
    params: {
        category: category
    }
})
    return response.data;
}



