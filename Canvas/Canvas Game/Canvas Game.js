const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

ctx.fillStyle = "white"
ctx.fillRect(0, 0, 1024, 576)

const image = new Image()
image.src = 'Main Map.png'
console.log(image)

image.onload = () => {
    ctx.drawImage(image, -380, -300)


}




