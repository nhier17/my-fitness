import React, { useState, useEffect } from 'react'

const Timer = ({ exerciseId, onLogExercise }) => {
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsactive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const toggleTimer = () => {
        setIsactive((prevIsActive) => !prevIsActive);
    };

    const resetTimer = () => {
        setSeconds(0);
        setIsactive(false);
    };

    const logExercise = () => {
        onLogExercise({ exerciseId, time: seconds})
    }

    const formatTime = (time) => {
        const mins = Math.floor(time / 60)
        const secs = time % 60
        return `${mins < 10  ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
    return (
        <div className="bg-gray-200 rounded p-4 text-center mt-5">
            <h2 className="text-black text-lg font-semibold mb-2">Begin Workout</h2>
            <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: `${(seconds / 60) * 100}%` }}></div>
            </div>
            <div className="text-4xl font-bold">{formatTime(seconds)}</div>
            <div className="mt-4">
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
             onClick={toggleTimer}>
                {isActive? 'Pause' : 'Start'}
                </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={resetTimer}>
                Reset
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded ml-2" onClick={logExercise}>
                    Log Exercise
                </button>
            </div>
        </div>
    );
};

export default Timer
