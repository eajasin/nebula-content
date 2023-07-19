// <--- Color Changer Button Start --->

//use DOM to reference the button element
const colorchangerbtn = document.getElementById('colorchangerbtn')

//create function that will assign a random color to the background

function randomColor(){
 //let redchannel = Math.floor(Math.random() * 255);
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

//access the background color
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//console.log(red, green, blue)
}
//HOW CAN I GENERATE RANDOM COLOR WITHIN A CERTAIN COLOR?
//create click event to invoke the function
colorchangerbtn.addEventListener('click', randomColor)

// <--- Color Change Button End --->


// <--- Parallax Scrolling Effect Start --->


// <--- Parallax Scrolling Effect End --->