let background = document.querySelector('body') 
let square = document.querySelector('.square');
let clicked = true //placeholder; will operate depending on whats below (i.e. if true, background will become yellow)

document.addEventListener("click", (e) => {
 if(e.target === square && clicked){
    background.style.backgroundColor = "yellow";
    clicked = !clicked; //can also write as clicked = !clicked (to indicate "false")
} else {
    background.style.backgroundColor = "yellowgreen";
    clicked = !clicked;
}
    console.log(e);
})
  

