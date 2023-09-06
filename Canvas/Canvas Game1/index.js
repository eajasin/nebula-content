const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

/*maybe create a cuteborder
-have the coordinates
-have a last move thing
-have a current move indicator
-have a story behind it 
-display interesting chess facts
-have timer for each move
-option to see valid moves should be an option
*/
// DRAW CHESSBOARD, ESTABLISH SIDES, DEFINE GAME PIECES, HAVE THEIR IMAGES --> using an array because easy to organize as a grid, stores info about each square

const canvasSize = 700
const squareSize = canvas.width / 8

canvas.width = canvasSize
canvas.height = canvasSize






// let chessboard = new Array(64),
//   gameSpace = (canvas.width / 8),
//   piecesImages,
//   validMoves,
//   activePiece,
//   activePlayer;

// console.log(chessboard)

// create identifies for player sides

const playerSide = {
  light: { name: 'light', value: '1' },
  dark: { name: 'dark', value: '-1' }
}

// create identifiers for game pieces

const gamePiece = {
  pawn: "pawn",
  knight: 'knight',
  bishop: 'bishop',
  rook: 'rook',
  queen: 'queen',
  king: 'king'
}

// store mapping of data between player sides, game pieces, and their images;


class Chesspiece {
  constructor(side, type, imageURL) {
    this.side = side;
    this.type = type;
    this.image = new Image(40, 40)
    this.image.src = imageURL
  }
}





//this.firstMove = true //indicats whether it's the first move of the piece

let lightPawn = new Image()
lightPawn.src = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"

let lightRook = new Image()
lightRook.src = "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"

let lightKnight = new Image()
lightKnight.src = "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"

let lightBishop = new Image()
lightBishop.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"

let lightQueen = new Image()
lightQueen.src = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"

let lightKing = new Image()
lightKing.src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"


let darkPawn = new Image()
darkPawn.src = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"

let darkRook = new Image()
darkRook.src = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"

let darkKnight = new Image()
darkKnight.src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"

let darkBishop = new Image()
darkBishop.src = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"

let darkQueen = new Image()
darkQueen.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"

let darkKing = new Image()
darkKing.src = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"





function drawChessBoard() {

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      const x = column * squareSize
      const y = row * squareSize

      if ((row + column) % 2 === 0) {
        ctx.fillStyle = 'rgb(184,139,74)';


      } else {
        ctx.fillStyle = 'rgb(227,193,111)';
        //draw knight, queen, bishop, rook
        //pawns


      }

      // Draw the square
      ctx.fillRect(x, y, squareSize, squareSize);

      /*[0, 0, rook] [0, 1, knight] [0, 2, bishop]
        [1, 0] [1, 1] [1, 2]



        */

      //highlight active peice




      //switch statement here? switch row, colum
      switch (row) {
        case 0:
          switch (column) {
            case 0: ctx.drawImage(lightRook, x, y, squareSize, squareSize);
              break;
            case 1: ctx.drawImage(lightKnight, x, y, squareSize, squareSize);
              break;
            case 2: ctx.drawImage(lightBishop, x, y, squareSize, squareSize);
              break;
            case 3: ctx.drawImage(lightQueen, x, y, squareSize, squareSize);
              break;
            case 4: ctx.drawImage(lightKing, x, y, squareSize, squareSize);
              break;
            case 5: ctx.drawImage(lightBishop, x, y, squareSize, squareSize);
              break;
            case 6: ctx.drawImage(lightKnight, x, y, squareSize, squareSize);
              break;
            case 7: ctx.drawImage(lightRook, x, y, squareSize, squareSize)
          }
          break;
        case 1:
          ctx.drawImage(lightPawn, x, y, squareSize, squareSize);
          break;
        case 6:
          ctx.drawImage(darkPawn, x, y, squareSize, squareSize);
          break;
        case 7:
          switch (column) {
            case 0: ctx.drawImage(darkRook, x, y, squareSize, squareSize);
              break;
            case 1: ctx.drawImage(darkKnight, x, y, squareSize, squareSize);
              break;
            case 2: ctx.drawImage(darkBishop, x, y, squareSize, squareSize);
              break;
            case 3: ctx.drawImage(darkQueen, x, y, squareSize, squareSize);
              break;
            case 4: ctx.drawImage(darkKing, x, y, squareSize, squareSize);
              break;
            case 5: ctx.drawImage(darkBishop, x, y, squareSize, squareSize);
              break;
            case 6: ctx.drawImage(darkKnight, x, y, squareSize, squareSize);
              break;
            case 7: ctx.drawImage(darkRook, x, y, squareSize, squareSize)

          }
          break
      }
    }
  }
}
drawChessBoard()




// INITIALIZE CHESSBOARD AND PLACE PIECES IN THEIR STARTING POSITIONS -->






function initializeChessboard() {
  for (let i = 0; i < 64; i++) {
    chessboard[i] = null
  }
  //Place white
  chessboard[0] = lightRook
  chessboard[1] = lightKnight
  chessboard[2] = lightBishop
  chessboard[3] = lightQueen
  chessboard[4] = lightKing
  chessboard[5] = lightBishop
  chessboard[6] = lightKnight
  chessboard[7] = lightRook

  chessboard[8] = lightPawn
  chessboard[9] = lightPawn
  chessboard[10] = lightPawn
  chessboard[11] = lightPawn
  chessboard[12] = lightPawn
  chessboard[13] = lightPawn
  chessboard[14] = lightPawn
  chessboard[15] = lightPawn

  //Place black
  chessboard[48] = darkPawn
  chessboard[49] = darkPawn
  chessboard[50] = darkPawn
  chessboard[51] = darkPawn
  chessboard[52] = darkPawn
  chessboard[53] = darkPawn
  chessboard[54] = darkPawn
  chessboard[55] = darkPawn

  chessboard[56] = darkRook
  chessboard[57] = darkKnight
  chessboard[58] = darkBishop
  chessboard[59] = darkQueen
  chessboard[60] = darkKing
  chessboard[61] = darkBishop
  chessboard[62] = darkKnight
  chessboard[63] = darkRook




}
initializeChessboard()




// <-- INITIALIZE CHESSBOARD AND PLACE PIECES IN THEIR STARTING POSITIONS



// SET VALID MOVES -->

//1) need to see if the position is on the chessboard

function positionOnChessboard(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8
}

console.log(positionOnChessboard(7, 7))

//2) need a function to see if a square is empty?

function emptySquare(x, y, chessboard) {

  let indexOfSquare = y * 8 + x

  if (chessboard[indexOfSquare] === null) {
    return true

  } else {

    return false
  }

}
console.log(emptySquare(7, 1, chessboard))

//3) need to see if a piece can be captured at a given position 

function capturablePiece(x, y, chessboard, currentPlayerSide) {

  let index = y * 8 + x
  let gamePiece = chessboard[index]

  if (gamePiece !== null && Chesspiece.side !== currentPlayerSide) {
    return true
  } else {
    return false
  }
}

console.log(capturablePiece(7, 1, chessboard, playerSide.light))

//4) need to set the valid moves for each piece


//PAWN - moves up and down; one square at a time, but two squares for their very first move; captures diagonally

function pawnValidMoves(x, y, chessboard, currentPlayerSide) {
  const validMoves = []
  const direction = currentPlayerSide === "light" ? 1 : -1 //y is always 0

  //need to determine when first move
  if ((currentPlayerSide === "light" && x === 1) || (currentPlayer === "dark" && x === 6)) {
    let newXFirst = x + 2 * direction
    let newYFirst = y
    if (emptySquare(newXFirst, newYFirst, chessboard)) {
      validMoves.push([newXFirst, newYFirst])

      //non first move
      let newX = x + direction
      let newY = y
      if (emptySquare(newX, newY, chessboard)) {
        validMoves.push([newX, newY])
      }

    }
  }
}
//PAWN

//ROOK - moves up and down, left and right; unlimited 

function rookValidMoves(x, y, chessboard, currentPlayerSide) {
  const validMoves = []
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  for (let [dx, dy] of directions) {

    let newY = y + dy

    while (positionOnChessboard(newX, newY)) {
      if (emptySquare(newX, newY, chessboard)) {
        validMoves.push([newX, newY])
      } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
        validMoves.push([newX, newY])
        break//break so wont be able to go after the square of the captured piece?

      } else {
        break //need a way to stop the piece from moving more in that direction (break?)

      }
      //this should be able to move the piece to the nextr valid square in the same direction
      newX += dx
      newY += dy


    }

  }

  return validMoves

}

//ROOK

//KNIGHT - moves in an L shape; only piece that can move over other pieces

function knightValidMoves(x, y, chessboard, currentPlayerSide) {
  const validMoves = []
  const directions = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]

  for (let [dx, dy] of directions) {
    let newX = x + dx
    let newY = y + dy

    if (positionOnChessboard(newX, newY) && capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
      validMoves.push([newX, newY])
    }
  }



  /*this will be different because the knight can jump over other pieces;
  I should check if the square is a valid space, and if an empty square or capturable square
  validMoves.push([newX, newY])  
  */

  return validMoves
}

//KNIGHT

//BISHOP - moves diagonally; unlimited

function bishopValidMoves(x, y, chessboard, currentPlayerSide) {
  const validMoves = []
  const directions = [[-1, -1], [-1, 1], [1, -1], [1, 1]]

  for (let [dx, dy] of directions) {
    let newX = x + dx
    let newY = y + dy

    while (positionOnChessboard(newX, newY)) {
      if (emptySquare(newX, newY, chessboard)) {
        validMoves.push([newX, newY])
      } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
        validMoves.push([newX, newY])
        //break so wont be able to go after the square of the captured piece?

      } else {
        //need a way to stop the piece from moving more in that direction (break?)

      }
      //this should be able to move the piece to the nextr valid square in the same direction
      newX += dx
      newY += dy


    }
  }

  return validMoves

}

//BISHOP

//QUEEN - moves in all directions; unlimited

function queenValidMoves(x, y, chessboard, currentPlayerSide) {
  const validMoves = []
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]

  for (let [dx, dy] of directions) {
    let newX = x + dx
    let newY = y + dy

    while (positionOnChessboard(newX, newY)) {
      if (emptySquare(newX, newY, chessboard)) {
        validMoves.push([newX, newY])
      } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
        validMoves.push([newX, newY])
        //break so wont be able to go after the square of the captured piece?

      } else {
        //need a way to stop the piece from moving more in that direction (break?)

      }
      //this should be able to move the piece to the nextr valid square in the same direction
      newX += dx
      newY += dy


    }
  }

  return validMoves
}

//QUEEN

//KING - moves in all directions; one square at a time

function kingValidMoves(x, y, chessboard, currentPlayerSide) {
  const validMoves = []
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

  for (let [dx, dy] of directions) {
    let newX = x + dx
    let newY = y + dy

    while (positionOnChessboard(newX, newY)) {
      if (emptySquare(newX, newY, chessboard)) {
        validMoves.push([newX, newY])
      } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
        validMoves.push([newX, newY])
        //break so wont be able to go after the square of the captured piece?

      } else {
        //need a way to stop the piece from moving more in that direction (break?)

      }
      //this should be able to move the piece to the nextr valid square in the same direction
      newX += dx
      newY += dy


    }
  }

  return validMoves

}

//KING


// <-- SET VALID MOVES


// TRACK PLAYER TURN, MOVES, AND TIMER -->

const playerLight = {
  name: "name",
  side: playerSide.light,
  moveCount: 0,
  totalTime: 300 //is this seconds or miliseconds

}

const playerDark = {
  name: "name",
  side: playerSide.dark,
  moveCount: 0,
  totalTime: 300

}

// will need to draw a time display (call it "timerDisplay")

let currentPlayer = playerSide.light
// will need an event listener to trigger a starttimer functions

function startTime() {
  currentPlayer.totalTime--
  //update timer display in real time
}

if (currentPlayer.remainingTime === 0) {
  //if chess players runs out of time, they lose the game
  //console.log(you lose)
}
function switchPlayer() {

  //code for seeing which is current player and setting it equal to the other
  currentPlayer.moveCount++

  startTime() // with switched to player
}

//have different levels of games (more time, less moves)
// <-- TRACK PLAYER TURN, MOVES, AND TIMER 






// IMPLEMENT CHECK AND CHECKMATE -->

// if king in check, only the king piece can move


// <-- IMPLEMENT CHECK AND CHECKMATE 




// IMPLEMENT SPECIAL GAME MOVES? -->


// <-- IMPLEMENT SPECIAL GAME MOVES?


// IMPLEMENT PLAY WITH COMPUTER OPTION -->

// <-- IMPLEMENT PLAY WITH COMPUTER OPTION 


// IMPLEMENT "EASY" MODE -->

// <-- IMPLEMENT "EASY" MODE


