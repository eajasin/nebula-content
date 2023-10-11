import { useState, useEffect } from "react"



export default function StartCountdown() {

    const [countdown, setCountdown] = useState(5) //useState will be whatever the set time is (to be input by user)

    function startTimer() {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown <= 1) {
                    clearInterval(interval);  // Clear the interval when it reaches 0
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);
    }

    // useEffect(() => {
    //     const interval = 
    //     countdown > 0 &&
        
    //     setInterval(() => {

    //         setInterval(setCountdown(countdown - 1))


    //         return () => clearInterval(interval)
    //     }, 1000)
    // }, [countdown])




    return (
        <div>
            <div>{countdown}</div>
            <button onClick={startTimer}>Start Timer</button>
            {/* other button (settings?) for triggering time change, will need an editing/isediting thing */}
        </div>
    )
}