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

const chessboard = new Array(8).fill(null).map(() => new Array(8).fill(null));


// create identifiers for player sides

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
    this.imageURL = imageURL;
    this.image = new Image(40, 40);
    this.image.src = imageURL
  }
}

//this.firstMove = true //indicats whether it's the first move of the piece
canvas.addEventListener('click', handleCanvasClick);

function handleCanvasClick(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Calculate the row and column of the clicked square
  const clickedRow = Math.floor(y / squareSize);
  const clickedColumn = Math.floor(x / squareSize);

  // Call the selectedPiece function with the clicked coordinates
  selectedPiece(clickedRow, clickedColumn);

  //console.log(activePiece)
}


let currentPlayer = playerSide.light
let selectedPieceCoordinates = null
let activePiece = null


function selectedPiece(row, column){
    const piece = chessboard[row][column]
    
    //console.log(currentPlayer)
    
    //console.log(piece.type)

    if (!activePiece && piece) {
        activePiece = {
            row,
            column,
            piece,
        };
        selectedPieceCoordinates = [activePiece.row, activePiece.column]
        console.log(selectedPieceCoordinates)
        
           } else if (activePiece && row === activePiece.row && column === activePiece.column) {
       
        activePiece = null;
        selectedPieceCoordinates = null;
        
    } else {
        // console.log(row, column)
       
        activePiece = null;
        selectedPieceCoordinates = null;
    }
    drawChessBoard()
    return activePiece
}





// INITIALIZE CHESSBOARD AND PLACE PIECES IN THEIR STARTING POSITIONS -->

function drawChessBoard() {

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      const x = column * squareSize
      const y = row * squareSize

      if ((row + column) % 2 === 0) {
        ctx.fillStyle = 'rgb(184,139,74)';

      } else {
        ctx.fillStyle = 'rgb(227,193,111)';
   
      }
      //draw the square
    
      ctx.fillRect(x, y, squareSize, squareSize)
    
     //how to define selectedpiececoordinates
     //drawlines between squares!!!


     

      if (selectedPieceCoordinates){// && selectedPieceCoordinates.row === row && selectedPieceCoordinates.column === column) {
        
        ctx.strokeStyle = 'red'; 
        ctx.lineWidth = 4; 
        ctx.strokeRect(selectedPieceCoordinates[0], selectedPieceCoordinates[1], squareSize, squareSize);
            //need way to draw square at the right location
        
      }

      const piece = chessboard[row][column];
      if (piece) {
        ctx.drawImage(piece.image, x, y, squareSize, squareSize);
      }

      }
    }
   
  }

  let lightPawn = new Chesspiece('light', 'pawn', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg')
  chessboard[1][0] = lightPawn
  chessboard[1][1] = lightPawn
  chessboard[1][2] = lightPawn
  chessboard[1][3] = lightPawn
  chessboard[1][4] = lightPawn
  chessboard[1][5] = lightPawn
  chessboard[1][6] = lightPawn
  chessboard[1][7] = lightPawn

let lightRook = new Chesspiece('light', 'rook', "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg")
chessboard[0][0] = lightRook
chessboard[0][7] = lightRook

let lightKnight = new Chesspiece('light', 'knight', "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg")
chessboard[0][1] = lightKnight
chessboard[0][6] = lightKnight

let lightBishop = new Chesspiece('light', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg")
chessboard[0][2] = lightBishop
chessboard[0][5] = lightBishop

let lightQueen = new Chesspiece('light', 'king', "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg")
chessboard[0][3] = lightQueen

let lightKing = new Chesspiece('light', 'king', "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg")
chessboard[0][4] = lightKing

let darkPawn = new Chesspiece('dark', 'pawn',"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg")
chessboard[6][0] = darkPawn
chessboard[6][1] = darkPawn
chessboard[6][2] = darkPawn
chessboard[6][3] = darkPawn
chessboard[6][4] = darkPawn
chessboard[6][5] = darkPawn
chessboard[6][6] = darkPawn
chessboard[6][7] = darkPawn

let darkRook = new Chesspiece('dark', 'rook',"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg")
chessboard[7][0] = darkRook
chessboard[7][7] = darkRook

let darkKnight = new Chesspiece('dark', 'knight',"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg")
chessboard[7][1] = darkKnight
chessboard[7][6] = darkKnight

let darkBishop = new Chesspiece('dark', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg")
chessboard[7][2] = darkBishop
chessboard[7][5] = darkBishop

let darkQueen = new Chesspiece('dark', 'king', "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg")
chessboard[7][3] = darkQueen

let darkKing = new Chesspiece('dark', 'king', "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg")
chessboard[7][4] = darkKing


drawChessBoard()

//console.log(handleCanvasClick(selectedPiece(0, 1)))



// <-- INITIALIZE CHESSBOARD AND PLACE PIECES IN THEIR STARTING POSITIONS






// <-- INITIALIZE CHESSBOARD AND PLACE PIECES IN THEIR STARTING POSITIONS


// NEED A SELECT PIECE FUNCTION -->




// <-- SELECT PIECE FUNCTION



// SET VALID MOVES -->

//1) need to see if the position is on the chessboard

// function positionOnChessboard(x, y) {
//   return x >= 0 && x < 8 && y >= 0 && y < 8
// }

// console.log(positionOnChessboard(7, 7))

// //2) need a function to see if a square is empty?

// function emptySquare(x, y, chessboard) {

//   let indexOfSquare = y * 8 + x

//   if (chessboard[indexOfSquare] === null) {
//     return true

//   } else {

//     return false
//   }

// }
// console.log(emptySquare(7, 1, chessboard))

// //3) need to see if a piece can be captured at a given position 

// function capturablePiece(x, y, chessboard, currentPlayerSide) {

//   let index = y * 8 + x
//   let gamePiece = chessboard[index]

//   if (gamePiece !== null && Chesspiece.side !== currentPlayerSide) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(capturablePiece(7, 1, chessboard, playerSide.light))

// //4) need to set the valid moves for each piece


// //PAWN - moves up and down; one square at a time, but two squares for their very first move; captures diagonally

// function pawnValidMoves(x, y, chessboard, currentPlayerSide) {
//   const validMoves = []
//   const direction = currentPlayerSide === "light" ? 1 : -1 //y is always 0

//   //need to determine when first move
//   if ((currentPlayerSide === "light" && x === 1) || (currentPlayer === "dark" && x === 6)) {
//     let newXFirst = x + 2 * direction
//     let newYFirst = y
//     if (emptySquare(newXFirst, newYFirst, chessboard)) {
//       validMoves.push([newXFirst, newYFirst])

//       //non first move
//       let newX = x + direction
//       let newY = y
//       if (emptySquare(newX, newY, chessboard)) {
//         validMoves.push([newX, newY])
//       }

//     }
//   }
// }
// //PAWN

// //ROOK - moves up and down, left and right; unlimited 

// function rookValidMoves(x, y, chessboard, currentPlayerSide) {
//   const validMoves = []
//   const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

//   for (let [dx, dy] of directions) {

//     let newY = y + dy

//     while (positionOnChessboard(newX, newY)) {
//       if (emptySquare(newX, newY, chessboard)) {
//         validMoves.push([newX, newY])
//       } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
//         validMoves.push([newX, newY])
//         break//break so wont be able to go after the square of the captured piece?

//       } else {
//         break //need a way to stop the piece from moving more in that direction (break?)

//       }
//       //this should be able to move the piece to the nextr valid square in the same direction
//       newX += dx
//       newY += dy


//     }

//   }

//   return validMoves

// }

// //ROOK

// //KNIGHT - moves in an L shape; only piece that can move over other pieces

// function knightValidMoves(x, y, chessboard, currentPlayerSide) {
//   const validMoves = []
//   const directions = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]

//   for (let [dx, dy] of directions) {
//     let newX = x + dx
//     let newY = y + dy

//     if (positionOnChessboard(newX, newY) && capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
//       validMoves.push([newX, newY])
//     }
//   }



//   /*this will be different because the knight can jump over other pieces;
//   I should check if the square is a valid space, and if an empty square or capturable square
//   validMoves.push([newX, newY])  
//   */

//   return validMoves
// }

// //KNIGHT

// //BISHOP - moves diagonally; unlimited

// function bishopValidMoves(x, y, chessboard, currentPlayerSide) {
//   const validMoves = []
//   const directions = [[-1, -1], [-1, 1], [1, -1], [1, 1]]

//   for (let [dx, dy] of directions) {
//     let newX = x + dx
//     let newY = y + dy

//     while (positionOnChessboard(newX, newY)) {
//       if (emptySquare(newX, newY, chessboard)) {
//         validMoves.push([newX, newY])
//       } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
//         validMoves.push([newX, newY])
//         //break so wont be able to go after the square of the captured piece?

//       } else {
//         //need a way to stop the piece from moving more in that direction (break?)

//       }
//       //this should be able to move the piece to the nextr valid square in the same direction
//       newX += dx
//       newY += dy


//     }
//   }

//   return validMoves

// }

// //BISHOP

// //QUEEN - moves in all directions; unlimited

// function queenValidMoves(x, y, chessboard, currentPlayerSide) {
//   const validMoves = []
//   const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]

//   for (let [dx, dy] of directions) {
//     let newX = x + dx
//     let newY = y + dy

//     while (positionOnChessboard(newX, newY)) {
//       if (emptySquare(newX, newY, chessboard)) {
//         validMoves.push([newX, newY])
//       } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
//         validMoves.push([newX, newY])
//         //break so wont be able to go after the square of the captured piece?

//       } else {
//         //need a way to stop the piece from moving more in that direction (break?)

//       }
//       //this should be able to move the piece to the nextr valid square in the same direction
//       newX += dx
//       newY += dy


//     }
//   }

//   return validMoves
// }

// //QUEEN

// //KING - moves in all directions; one square at a time

// function kingValidMoves(x, y, chessboard, currentPlayerSide) {
//   const validMoves = []
//   const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

//   for (let [dx, dy] of directions) {
//     let newX = x + dx
//     let newY = y + dy

//     while (positionOnChessboard(newX, newY)) {
//       if (emptySquare(newX, newY, chessboard)) {
//         validMoves.push([newX, newY])
//       } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
//         validMoves.push([newX, newY])
//         //break so wont be able to go after the square of the captured piece?

//       } else {
//         //need a way to stop the piece from moving more in that direction (break?)

//       }
//       //this should be able to move the piece to the nextr valid square in the same direction
//       newX += dx
//       newY += dy


//     }
//   }

//   return validMoves

// }

// //KING


// // <-- SET VALID MOVES


// // TRACK PLAYER TURN, MOVES, AND TIMER -->

// const lightPlayer= {
//   name: "Light Player",
//   side: playerSide.light,
//   moveCount: 0,
//   totalTime: 300 //is this seconds or miliseconds

// }

// const darkPlayer = {
//   name: "Dark Player",
//   side: playerSide.dark,
//   moveCount: 0,
//   totalTime: 300

// }

// function drawTimer(){
//   ctx.clearRect(0, 0, canvas.width, canvas.height)


// ctx.fillStyle = "white"
// ctx.font = "20px Arial"
// ctx.fillText(`${lightPlayer.name}: ${lightPlayer.totalTime} seconds`, 20, 30)
// ctx.fillText(`${darkPlayer.name}: ${darkPlayer.totalTime} seconds`, 20, 30)
// }
// drawTimer()
// // will need to draw a time display (call it "timerDisplay")
// let currentPlayer = playerSide.light
// // will need an event listener to trigger a starttimer functions

// function startTimer() {
//   let currentPlayerTimer = currentPlayer === playerSide.light ? playerSide.light : playerSide.dark
  
//   let timerInterval = setInterval(() => {
//     currentPlayerTimer.totalTime--
//     drawTimer()

//   if(currentPlayerTimer.totalTime <= 0) {
//     clearInterval(timerInterval)
//     console.log(`${currentPlayerTimer.name} ran out of time and has lost the game!`) 
//     }
//   }, 1000)
// }

// startTimer()

// function switchPlayer() {

//   //code for seeing which is current player and setting it equal to the other
//   currentPlayer = currentPlayer === playerSide.Side.light ? playerSide.dark : playerSide.light

//   startTimer() // with switched to player
// }

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


