import { useState } from "react"


export default function StartCountdown(){

const [countdown, setCountdown] = useState(0)

const startTimer = () => {

    setCountdown(5) //starting time

}

const timer = setInterval(() => {
    if (countdown > 0){
        setCountdown(countdown - 1)
    } else {
        clearInterval(timer)///clear interval here?
        setCountdown('DONE')
    }
    
}, 1000)



    return (
        <>
        <div>{countdown}</div>
        <button onClick={startTimer}>Start Timer</button>
        </>
    )
}