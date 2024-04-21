import { useState, useEffect } from "react";

export default function StartCountdown() {
    const [seconds, setSeconds] = useState(60);
    let intervalId; // Declare intervalId outside of useEffect

    const startTimer = () => {
        intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
    };

    useEffect(() => {
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run effect only once on mount

    const handleStartTimer = () => {
        startTimer(); // Start the timer when the button is clicked
    };

    return (
        <div>
            <div>{seconds}</div>
            <button onClick={handleStartTimer}>Start Timer</button>
        </div>
    );
}
