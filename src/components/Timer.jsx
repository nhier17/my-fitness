import React, { useState, useEffect } from 'react'

const Timer = () => {
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
    }

    const formatTime = (time) => {
        const mins = Math.floor(time / 60)
        const secs = time % 60
        return `${mins < 10  ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
    return (
        <div>
            <h2>Workout Timer</h2>
            <div className="">{formatTime(seconds)}</div>
            <button onClick={toggleTimer}>{isActive? 'Pause' : 'Start'}</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer
