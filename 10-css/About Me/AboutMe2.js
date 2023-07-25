// <--- Color Changer Button Start --->

//use DOM to reference the button element
const colorchangerbtn = document.getElementById('colorchangerbtn')
let clickCount = 0

//create function that will assign a random color to the background

function randomColor(){
 
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

//access the background color
document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
//console.log(red, green, blue)

clickCount++;
if (clickCount === 2)
{
    document.body.style.background = "linear-gradient(144deg, rgba(240,128,128,1) 0%, rgba(255,192,203,1) 32%, rgba(255,255,240,1) 88%)"
    clickCount = 0
}
}

//HOW CAN I GENERATE RANDOM COLOR WITHIN A CERTAIN COLOR?
//create click event to invoke the function
colorchangerbtn.addEventListener('click', randomColor)

// <--- Color Change Button End --->


