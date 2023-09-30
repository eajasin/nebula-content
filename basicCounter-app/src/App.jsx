import './App.css'
import IncreaseCount from './components/counter'


function App() {
 

  return (
    <div className='mainContainer'>
    
     <IncreaseCount />
    </div>
  )
}

export default App

//passing throuhg count and setCount, then export the functino, then add the coonst[count, setCount]
