import { useState } from "react"



export default function ChangeColor({overlayColor, setOverlayColor}){

const handleColorChange = (e) => {
 setOverlayColor(e.target.value)
}


   

return (
    <>
    <div className="colorPalette">
        <input type="color" value ={overlayColor} onChange = {handleColorChange}></input>
        
    </div>
    {/* <label htmlFor="color1">Red</label>
    <input type="radio" id="color2" name="color" checked={color === "blue"} onChange = {() => setColor('blue')}></input> 
    <label htmlFor="color2">Blue</label>
    <input type="radio" id="color3" name="color" checked={color === "green"} onChange = {() => setColor('green')}></input> 
    <label htmlFor="color3">Green</label> */}
    
    </>

)

}