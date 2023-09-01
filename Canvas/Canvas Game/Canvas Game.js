const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
ctx.fillRect(0, 0, 1024, 576)

const collisionsMap = []
for (let i = 0; i < collisionBlocks.length; i += 70) {//need rows of the data, go by number of horizontal tiles (width of map - 70 tiles)
    collisionsMap.push(collisionBlocks.slice(i, 70 + i))
}

const randomizedAreasMap = []
for (let i = 0; i < randomizedAreasData.length; i += 70) {//need rows of the data, go by number of horizontal tiles (width of map - 70 tiles)
    randomizedAreasMap.push(randomizedAreasData.slice(i, 70 + i))
}
console.log(randomizedAreasMap)



class Boundary {
    static width = 48
    static height = 48
    constructor({ position, height, width }) {
        this.position = position,
            this.width = 48, //with zoom to 400%, titles actually increased from 12 to 48
            this.height = 48
    }

    draw() {
        ctx.fillStyle = "rgba(255, 0, 0, 0.0)"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const boundaries = []

const offset = {
    x: -425,
    y: -430
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 5668)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })

})


// CREATE CANVAS AND PLACE CHARACTER START -->
const randomizedAreas = []

randomizedAreasMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 42184)
            randomizedAreas.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })

})

console.log(randomizedAreas)

const backgroundImage = new Image() //reference images
backgroundImage.src = 'Main Map.png'

const playerImage = new Image()
playerImage.src = 'playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = 'playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = 'playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = 'playerRight.png'

const foregroundImage = new Image()
foregroundImage.src = 'foregoundlayer.png'




// <-- CREATE CANVAS AND PLACE CHARACTER END



// MOVE CHARACTER AROUND START -->

class Sprite {
    constructor({ position, velocity, image, frames = { max: 1 }, sprite }) {
        this.position = position
        this.image = image
        this.frames = { ...frames, val: 0, elapsed: 0 }

        this.image.onload = () => {

            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }

        this.moving = false
        this.sprite = sprite

    }

    draw() {

        ctx.drawImage( //convert draw images into classes so that as it's drawing so many images over each other, can more easily be managed
            this.image,
            this.frames.val * this.width, //to crop image
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,

            this.image.width / this.frames.max,
            this.image.height, //actual width and height with a centered player
        )
        if (!this.moving) return
        if (this.frames.max > 1) {
            this.frames.elapsed++
        }
        if (this.frames.elapsed % 10 === 0)
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
    }

}
const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerImage,
    frames: {
        max: 4
    },
    sprite: {
        down: playerImage,
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage

    }
})

//canvas.width / 2 - this.image.width / 4 / 2,
//canvas.height / 2 - this.image.height / 2,

const background = new Sprite({
    position: {
        x: offset.x,
        _y: offset.y,
        get y() {
            return this._y
        },
        set y(value) {
            this._y = value
        },
    },
    image: backgroundImage

})

const foreground = new Sprite({
    position: {
        x: offset.x,
        _y: offset.y,
        get y() {
            return this._y
        },
        set y(value) {
            this._y = value
        },
    },
    image: foregroundImage

})


const keys = {
    ArrowDown: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }
}



const movables = [background, ...boundaries, foreground, ...randomizedAreas] //array of everyhting on the map that I want to be able to move

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

function animateMovement() { //needs be drawn out continuously
    window.requestAnimationFrame(animateMovement)
    background.draw()//needs to change as character "moves"
    boundaries.forEach(boundary => {
        boundary.draw()

    })
    randomizedAreas.forEach(randomizedArea => {
        randomizedArea.draw()
    })
    player.draw()
    //foreground.draw()
    if (keys.ArrowDown.pressed || keys.ArrowUp.pressed || keys.ArrowLeft.pressed || keys.ArrowRight.pressed) {
        for (let i = 0; i < randomizedAreas.length; i++) {
            const randomizedArea = randomizedAreas[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: randomizedArea
                }) &&
                Math.random() < 0.0001

            ) {
                console.log('You just found x coins!')

                break
            }
        }
    }


    let moving = true
    player.moving = false
    if (keys.ArrowDown.pressed && lastKeyPressed === "ArrowDown") {
        player.moving = true
        player.image = player.sprite.down
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })

            ) {
                console.log('colliding')
                moving = false
                break
            }
        }


        if (moving)
            movables.forEach(movable => {
                movable.position.y -= 3
            })
        //background.position.y -= 3
        //background.position.y -= 3= background.position.y -= 3}
        //testBoundary.position.y -=3
    } else if (keys.ArrowUp.pressed && lastKeyPressed === "ArrowUp") {
        player.moving = true
        player.image = player.sprite.up
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })

            ) {
                console.log('colliding')
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => {
                movable.position.y += 3
            })
        //background.position.y = background.position.y += 3
    } else if (keys.ArrowLeft.pressed && lastKeyPressed === "ArrowLeft") {
        player.moving = true
        player.image = player.sprite.left
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })

            ) {
                console.log('colliding')
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => {
                movable.position.x += 3
            })

        //background.position.x = background.position.x += 3
    } else if (keys.ArrowRight.pressed && lastKeyPressed === "ArrowRight") {
        player.moving = true
        player.image = player.sprite.right
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })

            ) {
                console.log('colliding')
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => {
                movable.position.x -= 3
            })


        //background.position.x = background.position.x -= 3
    }
}

animateMovement()

let lastKeyPressed = ""

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowDown':
            keys.ArrowDown.pressed = true
            lastKeyPressed = 'ArrowDown'
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = true
            lastKeyPressed = 'ArrowUp'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            lastKeyPressed = 'ArrowLeft'
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            lastKeyPressed = 'ArrowRight'
            break
    }

})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowDown':
            keys.ArrowDown.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
    }

})

// <-- MOVE CHARACTER AROUND END 


//Activate money spawn areas




//TRANSITIONING TO A NEW SCREEN
//Whenever player goes to state screen, enters a home/store, or sails, a transition scene will be triggered
//when activitae 

// const newScene = {
//     initiated: false//by default

// }

// if (sceneChange.initiated){
//     sceneChange = true

// }


//TRANSITION TO A NEW SCREEN


/*To Do:
-create pet character
-create home
-create petStore
-fix some collisions
-make sure game works entirely
-add foreground
-create text boxes (not working)
-create event listeners
-align player at center upon start
-fix a few map things (grass in wrong place, eg)
*/

const textbox = {
  x: 50,
  y: canvas.height - 150,
  width: canvas.width - 100,
  height: 100,
  text: "",
  visible: false,
};

function drawTextBox() {
  if (textbox.visible) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(textbox.x, textbox.y, textbox.width, textbox.height);

    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    const lineHeight = 20;
    const lines = textbox.text.split('\n');
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], textbox.x + 10, textbox.y + 30 + i * lineHeight);
    }
  }
}

function showTextbox(text) {
  textbox.text = text;
  textbox.visible = true;  // Corrected the property name from 'textbox.value' to 'textbox.visible'
  drawTextBox();
}

function hideTextbox() {
  textbox.visible = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

showTextbox("Hello There");
document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    hideTextbox();
  }
});