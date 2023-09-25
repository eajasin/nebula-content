import { useState } from "react"

export default function IncreaseCount(){
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount((count) => count + 1)
  }

  const handleDecrease = () => {
    if (count > 0) {
        setCount(count - 1)
    }
   
}

  const handleReset = () => {
    setCount((count) => count = 0)
   
  }

    return (
        <div className="container">
        <button className="decreasebtn" onClick={handleDecrease}>-1</button>
        <button className="resetbtn" onClick={handleReset}>Reset</button>
        <div className="count">{count}</div>
        <button className="increasebtn" onClick={handleIncrease}>Count</button>
        <div className="direction">Tap to Begin Counting!</div>
        </div>
    )
}

