import React, {  useEffect } from 'react'

const Timer = ({ isActive,seconds, setSeconds, setIsActive }) => {

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => {
                    // Stop the timer when 1 minute is over
                    if (prevSeconds >= 60) {
                        setIsActive(false);
                        clearInterval(interval);
                        return 0; 
                    }
                    return prevSeconds + 1;
                }); 
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive,setSeconds, setIsActive]);


    const formatTime = (time) => {
        const mins = Math.floor(time / 60)
        const secs = time % 60
        return `${mins < 10  ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
    return (
        <div className="mt-5">
            <h2 className="text-black text-lg font-semibold mb-2">Begin Workout</h2>
            <div className="progress-bar">
            <svg className="circular-progress" viewBox="0 0 100 100">
                <circle className="progress-background" cx="50" cy="50" r="40" />
                <circle className="progress-bar-inner" cx="50" cy="50" r="40" style={{ strokeDasharray: `${(seconds % 60) * 4}, 251` }} />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold">{formatTime(seconds)}</text>
            </svg>
        </div>
        </div>
    );
};

export default Timer
