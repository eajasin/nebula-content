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
   // this.position = [x, y]
  }
}

// SET VALID MOVES -->

//1) need to see if the position is on the chessboard
// function positionOnChessboard(x, y) {
//     return x >= 0 && x < 8 && y >= 0 && y < 8
 // }

//2) need a function to see if a square is empty?

//if a square is empty, it returns "null"

// function emptySquare(x, y, chessboard) {

//   let indexOfSquare = y * 8 + x

//   if (chessboard[indexOfSquare] === null) {
//     console.log(`the square at (${newX}, ${newY}) is empty`)

//   } else {
//       console.log(`the square at (${newX}, ${newY}) is not empty`)

    
//   }

// }


// //4) need to set the valid moves for each piece


// ROOK - moves up and down, left and right; unlimited -->

function isValidRookMove(chessboard, startingRow, startingColumn, endingRow, endingColumn, currentPlayerSide) {
   

    if (chessboard[startingRow][startingColumn].side !== currentPlayerSide) {
        return false;
      } //ADD TO ALL PIECES

    if (endingRow < 0 || endingRow >= 8 || endingColumn < 0 || endingColumn >= 8) {
      return false;
    }
  
    
    if (startingRow !== endingRow && startingColumn !== endingColumn) {
      return false;
    }
  
      if (startingRow === endingRow) {
      const minCol = Math.min(startingColumn, endingColumn);
      const maxCol = Math.max(startingColumn, endingColumn);
      for (let col = minCol + 1; col < maxCol; col++) {
        if (chessboard[startingRow][col] !== null) {
          return false;
        }
      }
    } else if (startingColumn === endingColumn) {
      const minRow = Math.min(startingRow, endingRow);
      const maxRow = Math.max(startingRow, endingRow);
      for (let row = minRow + 1; row < maxRow; row++) {
        if (chessboard[row][startingColumn] !== null) {
          return false;
        }
      }
    }
  
    const endingPiece = chessboard[endingRow][endingColumn];
    if (endingPiece === null || endingPiece.side !== currentPlayerSide) {
      return true;
    }
  
    return false;
  }

// <-- ROOK

// BISHOP -->

function







// <-- BISHOP






// //3) need to see if a piece can be captured at a given position 

// function capturablePiece(x, y, chessboard, currentPlayerSide) {
    
    // if opposite side, then ...rest of stuff 
//   let index = y * 8 + x
//   let gamePiece = chessboard[index]

//   if (gamePiece !== null && Chesspiece.side !== currentPlayerSide) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(capturablePiece(7, 1, chessboard, playerSide.light))




// <-- SET VALID MOVES









let activePiece = null

//this.firstMove = true //indicats whether it's the first move of the piece
canvas.addEventListener('click', handleCanvasClick);

function handleCanvasClick(event) {
  
    // if (currentPlayer !== lightPlayer){
    //     return
    // }

  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Calculate the row and column of the clicked square
  const clickedRow = Math.floor(y / squareSize);
  const clickedColumn = Math.floor(x / squareSize);
  
  let clickedPiece = chessboard[clickedRow][clickedColumn]
  //console.log(clickedPiece, "clickedPiece")
  if (clickedPiece == null){
    movePiece(clickedRow, clickedColumn)
    // console.log(clickedRow, clickedColumn)
    // console.log(chessboard)
  } else {
    selectedPiece(clickedRow, clickedColumn)
  }

  //switchPlayer()
   
  // Call the selectedPiece function with the clicked coordinates
  
  //console.log(piece)
  //console.log(chessboard)
}

// TRACK CURRENT PLAYER AND DISABLE OTHER PLAYER -->

let selectedPieceCoordinates = null


// const playerSide = {
//     light: { name: 'Light Player', value: '1', moveCount: 0, side: "light" },
//     dark: { name: 'Dark Player', value: '-1' }
//   }
// REPLACE WITH 

const lightPlayer = {
    name: "Light Player",
    side: "light",
    //moveCount: 0,
   // totalTime: 300 //is this seconds or miliseconds
  
  }
  
  const darkPlayer = {
    name: "Dark Player",
    side: "dark",
    //moveCount: 0,
    //totalTime: 300
  
  }
  let currentPlayer = lightPlayer
  
  function switchPlayer(){
    currentPlayer === lightPlayer ? (currentPlayer = darkPlayer) : (currentPlayer = lightPlayer)

    //console.log(`current player is ${currentPlayer.name}`)
  }
  
 
function movePiece(clickedRow, clickedColumn) {
        // Check if the selected piece is a rook
       if (activePiece) {
    const piece = activePiece.piece;
    const startingRow = activePiece.row;
    const startingColumn = activePiece.column;
    
    // Check if the move is valid for the specific piece type (e.g., rook, knight)
    
    if (isValidRookMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
      // Move the piece to the new position
        

      chessboard[clickedRow][clickedColumn] = piece;
      chessboard[startingRow][startingColumn] = null;
      piece.row = clickedRow;
      piece.column = clickedColumn;
      
      // Reset the activePiece
      activePiece = null;

      // Update the chessboard UI
      drawChessBoard();
      console.log(currentPlayer.name)
      // Switch to the next player's turn
      switchPlayer();
      console.log(currentPlayer.name)
    } else {
     console.log('invalid move') // Handle invalid move (e.g., show an error message to the player)
    }
  }
      

// -------------------------->
      //     console.log(selectedPieceCoordinates)  
//  // let startCoordinates = chessboard[startingRow][startingColumn]
//     let destination = [endingRow, endingColumn]
//     //console.log(chessboard)
    
//     chessboard[endingRow][endingColumn] = piece.piece
  
    
//     chessboard[piece.row][piece.column] = null
    
//     activePiece = null

// //    console.log(piece.row, piece.column)
   
// console.log(destination, "destination")
   
   
//    drawChessBoard()


  

      
 
  }

// <-- TRACK CURRENT PLAYER AND DISABLE OTHER PLAYER -->


function selectedPiece(row, column){
    const piece = chessboard[row][column]
    
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
        
    } else if (piece) {
        // console.log(row, column)
       
        activePiece = {
            row,
            column,
            piece,
        }
        selectedPieceCoordinates = [activePiece.row, activePiece.column];

      
    } else {
        return null
    }
    drawChessBoard()
    return activePiece
}

// ADD-ON *add code that will disable box highlights for player whos turn it isnt*


// // SET VALID MOVES -->

// function positionOnChessboard(x, y) {
//     return x >= 0 && x < 8 && y >= 0 && y < 8
//   }




// // <-- SET VALID MOVES




let selectedSquareColor = 'red'



// INITIALIZE CHESSBOARD AND PLACE PIECES IN THEIR STARTING POSITIONS -->

function drawChessBoard() {

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      const x = column * squareSize
      const y = row * squareSize

      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2; // You can adjust the line width as needed
      ctx.strokeRect(x, y, squareSize, squareSize);

      if ((row + column) % 2 === 0) {
        ctx.fillStyle = 'rgb(184,139,74)';

      } else {
        ctx.fillStyle = 'rgb(227,193,111)';
   
      }
      //draw the square
    
      ctx.fillRect(x, y, squareSize, squareSize)
    
    

     if (selectedPieceCoordinates && row === selectedPieceCoordinates[0] && column === selectedPieceCoordinates[1] ) {
        ctx.strokeStyle = selectedSquareColor; // Set the border color
        ctx.lineWidth = 4; // Set the border width
        ctx.strokeRect(x, y, squareSize, squareSize);
      } //coloring is a bit off, fix!
     
      const piece = chessboard[row][column];
      if (piece) {
        //console.log(piece, "draw")

        ctx.drawImage(piece.image, x, y, squareSize, squareSize);
      }

      }
    }
   
  }

//   let lightPawn = new Chesspiece('light', 'pawn', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg')
//   chessboard[1][0] = lightPawn
//   chessboard[1][1] = lightPawn
//   chessboard[1][2] = lightPawn
//   chessboard[1][3] = lightPawn
//   chessboard[1][4] = lightPawn
//   chessboard[1][5] = lightPawn
//   chessboard[1][6] = lightPawn
//   chessboard[1][7] = lightPawn

let leftLightRook = new Chesspiece('light', 'rook', "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg")
chessboard[0][0] = leftLightRook

let rightLightRook = new Chesspiece('light', 'rook', "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg")
chessboard[0][7] = rightLightRook

// let lightKnight = new Chesspiece('light', 'knight', "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg")
// chessboard[0][1] = lightKnight
// chessboard[0][6] = lightKnight

let leftLightBishop = new Chesspiece('light', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg")
chessboard[0][2] = leftLightBishop
let rightLightBishop = new Chesspiece('light', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg")
chessboard[0][5] = rightLightBishop

// let lightQueen = new Chesspiece('light', 'king', "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg")
// chessboard[0][3] = lightQueen

// let lightKing = new Chesspiece('light', 'king', "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg")
// chessboard[0][4] = lightKing

// let darkPawn = new Chesspiece('dark', 'pawn',"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg")
// chessboard[6][0] = darkPawn
// chessboard[6][1] = darkPawn
// chessboard[6][2] = darkPawn
// chessboard[6][3] = darkPawn
// chessboard[6][4] = darkPawn
// chessboard[6][5] = darkPawn
// chessboard[6][6] = darkPawn
// chessboard[6][7] = darkPawn

let leftDarkRook = new Chesspiece('dark', 'rook',"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg")
chessboard[7][0] = leftDarkRook

let rightDarkRook = new Chesspiece('dark', 'rook',"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg")
chessboard[7][7] = rightDarkRook

// let darkKnight = new Chesspiece('dark', 'knight',"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg")
// chessboard[7][1] = darkKnight
// chessboard[7][6] = darkKnight

let leftDarkBishop = new Chesspiece('dark', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg")
chessboard[7][2] = leftDarkBishop
let rightDarkBishop = new Chesspiece('dark', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg")
chessboard[7][5] = rightDarkBishop

// let darkQueen = new Chesspiece('dark', 'king', "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg")
// chessboard[7][3] = darkQueen

// let darkKing = new Chesspiece('dark', 'king', "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg")
// chessboard[7][4] = darkKing


drawChessBoard()

// <-- INITIALIZE CHESSBOARD AND PLACE PIECES IN THEIR STARTING POSITIONS



// TRACK CURRENT PLAYER AND DISABLE OTHER PLAYER FROM MOVING -->






// TRACK CURRENT PLAYER AND DISABLE OTHER PLAYER FROM MOVING







// NEED A SELECT PIECE FUNCTION -->




// <-- SELECT PIECE FUNCTION



// SET VALID MOVES -->





// console.log(positionOnChessboard(7, 7))


// console.log(emptySquare(7, 1, chessboard))



//WHEN CLICK PIECE, NEED TO CHECK ALL THESE THINGS 
//CHECK ROOK MOVE (ACTIVE PICE, DESTINATION); COLOR POSITION TYPE
//REFACTOR



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





// //have different levels of games (more time, less moves)
// // <-- TRACK PLAYER TURN, MOVES, AND TIMER 






// // IMPLEMENT CHECK AND CHECKMATE -->

// // if king in check, only the king piece can move


// // <-- IMPLEMENT CHECK AND CHECKMATE 




// // IMPLEMENT SPECIAL GAME MOVES? -->


// // <-- IMPLEMENT SPECIAL GAME MOVES?


// // IMPLEMENT PLAY WITH COMPUTER OPTION -->

// // <-- IMPLEMENT PLAY WITH COMPUTER OPTION 


// // IMPLEMENT "EASY" MODE -->

// // <-- IMPLEMENT "EASY" MODE


// // //ROOK - moves up and down, left and right; unlimited 

// function rookValidMoves(x, y, chessboard, currentPlayerSide) {  //have renamed "currentPlayer"
//     const validMoves = []
//     const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  
//     for (let [dx, dy] of directions) {
//        let newX = x
//       let newY = y
  
//       while (positionOnChessboard(newX, newY)) {
//         if (emptySquare(newX, newY, chessboard)) {
//           validMoves.push([newX, newY])
//         } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)) {
//           validMoves.push([newX, newY])
//           break//break so wont be able to go after the square of the captured piece?
  
//         } else {
//           break //need a way to stop the piece from moving more in that direction (break?)
  
//         }
//         //this should be able to move the piece to the nextr valid square in the same direction
//         newX += dx
//         newY += dy
  
  
//       }
  
//     }
  
//     return validMoves
  
//   }
  
//   // //ROOK