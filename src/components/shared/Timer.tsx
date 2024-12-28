import React, { useEffect } from "react";

interface ITimerProps {
    onTimeUp: () => void;
    time: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<ITimerProps> = ({ onTimeUp, time, setTime }) => {
    useEffect(() => {
        if (time <= 0) return;

        const timer = setInterval(() => {
            setTime((prevTime) => {
                const newTime = prevTime - 1;
                localStorage.setItem("timer", newTime.toString()); 
                if (newTime <= 0) {
                    clearInterval(timer);
                    onTimeUp(); 
                    return 0; 
                }
                return newTime; 
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [time, setTime, onTimeUp]); 

    return (
        <div className="w-full flex justify-center items-center bg-transparent my-4 md:my-6">
            <div className="flex flex-col text-center p-4 bg-white text-blue-400 border border-blue-300 rounded-lg shadow-xl w-[calc(100%-48px)]">
                <h2 className="test-lg md:text-xl font-bold mb-2">Timer</h2>
                <p className="text-3xl md:text-4xl font-semibold">{time}</p>
            </div>
        </div>
    );
};

export default Timer;
