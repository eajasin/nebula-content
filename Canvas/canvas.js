//canvas helps to avod manipulating the DOM

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d') 


ctx.fillStyle = "orange"
ctx.fillRect (10, 10, 100, 100)

ctx.fillStyle = "yellow"
ctx.fillRect (110, 10, 100, 100)

ctx.fillStyle = "orange"
ctx.fillRect (210, 10, 100, 100)




//wirreframing is like pseudocode, brief summary of what game will do 