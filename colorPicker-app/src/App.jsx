import { useState } from 'react'
import ChangeColor from './components/changeColor'
import Picture from './components/shape'
import './App.css'
import image from './flowers.jpeg'


function App() {
  const [overlayColor, setOverlayColor] = useState('flowers.jpeg')
  //const [image, setImage] = useState("flowers.jpeg")

  

  return (
    <>
    <div className='container'>
      <h1>Color Overlay App</h1>
    <Picture image={image} overlayColor={overlayColor}/>
    <ChangeColor overlayColor={overlayColor} setOverlayColor={setOverlayColor}/>
    </div>
    </>
  )
}

export default App
