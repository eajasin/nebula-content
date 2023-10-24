import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogCard from "./DogCard.jsx"
import './DogCard.css'
import Search from './Search'

function App() {

  const [dogs, setDogs] = useState([])
  const [options, setOptions] = useState([])
  const [dropValue, setDropValue] = useState("")

  useEffect(() => {

    fetch(`https://dog.ceo/api/breed/sheepdog/images`)

      .then(res => res.json())
      .then(res => setDogs(res.message))


    fetch(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => res.json())
      .then((res) => {
        let arr = []
        for(let key in res.message){
          arr.push(key)
        }
        setOptions(arr)
      })
  }, [])


 const handleChange = (e) => {
  e.preventDefault()
  setDropValue(e.target.value)
  fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
    .then((res) => res.json())
    .then((res) => setDogs(res.message)) 
 }

  
  return (
    <div className='App'>
    <Search 
      handleChange={handleChange}
      options={options}
      dropValue = {dropValue}
      />
   {dogs.map((dog) => (
    <DogCard key={dog} dog ={dog} />
   ))}
    </div>
  )
}

export default App
