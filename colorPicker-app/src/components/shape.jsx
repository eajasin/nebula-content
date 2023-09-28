

import App from "../App"

export default function Picture({overlayColor, image}){

    const overlayStyle ={
    backgroundColor: overlayColor,
    width: '200px',
    height: '200px',
    position: 'absolute',
    
    top: 0,
    left: 0,
    opacity: 0.7, 
    }

    return (
        // <div className="shape" style={{backgroundColor: color}} onChange={ChangeColor}></div>
        <div className="pictureContainer" style={{position: 'relative',  width: '200px', height: '200px'}}>
        <div className="imageOverlay" style={overlayStyle} ></div>   
        <img className="image" src={image} alt="image"  />
        </div>
    )
}