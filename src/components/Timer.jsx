import React, { useEffect } from 'react';

const Timer = ({ isActive, seconds, setSeconds, setIsActive, exerciseId }) => {

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => {
                    const currentSeconds = prevSeconds[exerciseId] || 0;
                    if (currentSeconds >= 60) {
                        setIsActive(false);
                        clearInterval(interval);
                        return { ...prevSeconds, [exerciseId]: 0 };
                    }
                    return { ...prevSeconds, [exerciseId]: currentSeconds + 1 };
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, setSeconds, setIsActive, exerciseId]);

    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
    };

    return (
        <div className="px-8 mt-5">
            <div className="progress-bar">
                <svg className="circular-progress" viewBox="0 0 100 100">
                    <circle className="progress-background" cx="50" cy="50" r="40" />
                    <circle 
                        className="progress-bar-inner" 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        style={{ strokeDasharray: `${(seconds % 60) * 4}, 251` }} 
                    />
                    <text 
                        x="50%" 
                        y="50%" 
                        dominantBaseline="middle" 
                        textAnchor="middle" 
                        className="font-bold"
                    >
                        {formatTime(seconds)}
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default Timer;
