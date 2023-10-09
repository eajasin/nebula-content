import { useState } from "react"


export default function StartCountdown(){

const [countdown, setCountdown] = useState(0) //useState will be whatever the set time is

function startTimer(){

    

    setCountdown(5) //starting time

}

const timer = setInterval(() => {
    if (countdown > 0){
        setCountdown(countdown - 1)
    } else {
        clearInterval(timer)
        setCountdown('DONE')
    }
    
}, 1000)



    return (
        <div>
        {/* <div>{countdown}</div> */}
        <button onClick={startTimer}>Start Timer</button>
        {/* other button (settings?) for triggering time change, will need an editing/isediting thing */}
        </div>
    )
}