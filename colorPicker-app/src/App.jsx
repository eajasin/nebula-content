import { useState } from 'react'
import ChangeColor from './components/changeColor'
import Shape from './components/shape'
import './App.css'
import image from './flowers-color.jpeg'

function App() {
  const [color, setColor] = useState("#000000")
  const [image, setImage] = useState("flowers-color.jpeg")

  

  return (
    <>
    <div className='container'>
      <h1>Color Picker App</h1>
    <Shape image={image} setImage={setImage}/>
    <ChangeColor color={color} setColor={setColor}/>
    </div>
    </>
  )
}

export default App
