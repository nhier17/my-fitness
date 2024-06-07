import React, { useState } from 'react';
import axios from 'axios';
import { ExerciseCard } from '.';
import { FaSearch } from "react-icons/fa";
import { base_url } from '../utils/api';
import { useStateContext } from '../contexts/ContextProvider';

const SearchExercises = () => {
    const [search, setSearch] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const { exercises, setExercises } = useStateContext();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${base_url}/api/exercise?search=${search}`);
            setExercises(response.data.exercises);
            setSearch('');
            setHasSearched(true);
        } catch (error) {
            console.error('Error fetching exercises', error);
            alert('Error fetching exercises. Please try again later.');
        }
    };

    return (
        <div className="container mx-auto">
            <form
                className="flex items-center w-full max-w-md bg-gradient-to-r from-gray-200 to-gray-100 px-4 py-2 rounded-md"
                onSubmit={submitHandler}
            >
                <FaSearch className="text-2xl text-gray-600 mr-4" />
                <input
                    className="w-full text-base bg-transparent focus:outline-none text-black"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    placeholder="Search for exercises"
                    aria-label="Search for exercises"
                />
            </form>
            {hasSearched && (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {exercises.map((exercise) => (
                        <ExerciseCard key={exercise._id} exercise={exercise} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchExercises;
