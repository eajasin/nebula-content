

import App from "../App"

export default function Shape({color, image}){

    const overlayColor ={
        backgroundColor: color,
        width: "200px",
        height: "200px",
    }

    return (
        // <div className="shape" style={{backgroundColor: color}} onChange={ChangeColor}></div>
        <img className="image" src={image} style={{overlayColor}} />
    )
}