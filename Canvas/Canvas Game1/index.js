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

function drawChessBoard(){
  for(let row = 0; row < 8; row++){
    for(let column = 0; column < 8; column++){
      const x = column * squareSize
      const y = row * squareSize

      if ((row + column) % 2 === 0) {
        ctx.fillStyle = 'rgb(184,139,74)';
      } else {
        ctx.fillStyle = 'rgb(227,193,111)';
      }

      // Draw the square
      ctx.fillRect(x, y, squareSize, squareSize);
    }
  }
}





let chessboard = new Array(64),
  gameSpace = (canvas.width / 8),
  piecesImages,
  validMoves,
  activePiece,
  activePlayer;

console.log(chessboard)

  // create identifies for player sides

  const playerSide = {
    light: {name: 'light', value: '1'},
    dark: {name: 'dark', value: '-1'}
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
  constructor(side, type){
  this.side = side;
  this.type = type;
  this.image = new Image(40, 40)
  //this.image.src = imageURL
  }
}

  //this.firstMove = true //indicats whether it's the first move of the piece


const images = {
  [playerSide.light.value]: {
    [gamePiece.pawn]: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
    [gamePiece.knight]: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
    [gamePiece.bishop]: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
    [gamePiece.rook]: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
    [gamePiece.queen]: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
    [gamePiece.king]: "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
  },
  [playerSide.dark.value]: {
    [gamePiece.pawn]: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
    [gamePiece.knight]: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    [gamePiece.bishop]: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
    [gamePiece.rook]: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
    [gamePiece.queen]: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",
    [gamePiece.king]: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
  },
}

drawChessBoard()


// INITIALIZE CHESSBOARD AND PLACE PIECE IN THEIR STARTING POSITIONS -->

function initializeChessboard(){
for(let i = 0; i < 64; i++){
  chessboard[i] = null
}
//Place white
chessboard[0] = new Chesspiece(playerSide.light, gamePiece.rook)
chessboard[1] = new Chesspiece(playerSide.light, gamePiece.knight)
chessboard[2] = new Chesspiece(playerSide.light, gamePiece.bishop)
chessboard[3] = new Chesspiece(playerSide.light, gamePiece.queen)
chessboard[4] = new Chesspiece(playerSide.light, gamePiece.king)
chessboard[5] = new Chesspiece(playerSide.light, gamePiece.bishop)
chessboard[6] = new Chesspiece(playerSide.light, gamePiece.knight)
chessboard[7] = new Chesspiece(playerSide.light, gamePiece.rook)

chessboard[8] = new Chesspiece(playerSide.light, gamePiece.pawn)
chessboard[9] = new Chesspiece(playerSide.light, gamePiece.pawn)
chessboard[10] = new Chesspiece(playerSide.light, gamePiece.pawn)
chessboard[11] = new Chesspiece(playerSide.light, gamePiece.pawn)
chessboard[12] = new Chesspiece(playerSide.light, gamePiece.pawn)
chessboard[13] = new Chesspiece(playerSide.light, gamePiece.pawn)
chessboard[14] = new Chesspiece(playerSide.light, gamePiece.pawn)
chessboard[15] = new Chesspiece(playerSide.light, gamePiece.pawn)

//Place black
chessboard[48] = new Chesspiece(playerSide.dark, gamePiece.pawn)
chessboard[49] = new Chesspiece(playerSide.dark, gamePiece.pawn)
chessboard[50] = new Chesspiece(playerSide.dark, gamePiece.pawn)
chessboard[51] = new Chesspiece(playerSide.dark, gamePiece.pawn)
chessboard[52] = new Chesspiece(playerSide.dark, gamePiece.pawn)
chessboard[53] = new Chesspiece(playerSide.dark, gamePiece.pawn)
chessboard[54] = new Chesspiece(playerSide.dark, gamePiece.pawn)
chessboard[55] = new Chesspiece(playerSide.dark, gamePiece.pawn)

chessboard[56] = new Chesspiece(playerSide.dark, gamePiece.rook)
chessboard[57] = new Chesspiece(playerSide.dark, gamePiece.knight)
chessboard[58] = new Chesspiece(playerSide.dark, gamePiece.bishop)
chessboard[59] = new Chesspiece(playerSide.dark, gamePiece.queen)
chessboard[60] = new Chesspiece(playerSide.dark, gamePiece.king)
chessboard[61] = new Chesspiece(playerSide.dark, gamePiece.bishop)
chessboard[62] = new Chesspiece(playerSide.dark, gamePiece.knight)
chessboard[63] = new Chesspiece(playerSide.dark, gamePiece.rook)

}
initializeChessboard()


// <-- INITIALIZE CHESSBOARD AND PLACE PIECE IN THEIR STARTING POSITIONS

// SET VALID MOVES -->

//1) need to see if the position is on the chessboard

function positionOnChessboard(x, y){
  return x >= 0 && x < 8 && y >= 0 && y < 8
}

console.log(positionOnChessboard(7, 7))

//2) need a function to see if a square is empty?

function emptySquare(x, y, chessboard){

let indexOfSquare = y * 8 + x

if(chessboard[indexOfSquare] === null){
  return true 

} else {
  
  return false
}

}
console.log(emptySquare(7, 1, chessboard))

//3) need to see if a piece can be captured at a given position 

function capturablePiece (x, y, chessboard, currentPlayerSide){

  let index = y * 8 + x
  let gamePiece = chessboard[index]

  if(gamePiece !== null && Chesspiece.side !== currentPlayerSide){
    return true
  } else {
    return false
  }
}

console.log(capturablePiece(7,1, chessboard, playerSide.light))

//4) need to set the valid moves for each piece


//PAWN - moves up and down; one square at a time, but two squares for their very first move; captures diagonally

function pawnValidMoves (x, y, chessboard, currentPlayerSide){
const validMoves = []
const directions = [] //this will depend on light (down) and dark (up)


}

//PAWN

//ROOK - moves up and down, left and right; unlimited 

function rookValidMoves (x, y, chessboard, currentPlayerSide){
  const validMoves = []
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  
  for(let [dx, dy] of directions){
    let newX = x + dx
    let newY = y + dy
  
  while(positionOnChessboard(newX, newY)){
    if(emptySquare(newX, newY, chessboard)){
      validMoves.push([newX, newY])
    } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)){
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

//ROOK

//KNIGHT - moves in an L shape; only piece that can move over other pieces

function knightValidMoves (x, y, chessboard, currentPlayerSide){
  const validMoves = []
  const directions = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
  
  
  }

//KNIGHT

//BISHOP - moves diagonally; unlimited

function bishopValidMoves (x, y, chessboard, currentPlayerSide){
  const validMoves = []
  const directions = [[-1, -1], [-1, 1], [1, -1], [1, 1]]
  
  for(let [dx, dy] of directions){
    let newX = x + dx
    let newY = y + dy
    
    while(positionOnChessboard(newX, newY)){
      if(emptySquare(newX, newY, chessboard)){
        validMoves.push([newX, newY])
      } else if (capturablePiece(newX, newY, chessboard, currentPlayerSide)){
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

function queenValidMoves (x, y, chessboard, currentPlayerSide){
  const validMoves = []
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
  

  
  
  }

//QUEEN

//KING - moves in all directions; one square at a time

function kingValidMoves (x, y, chessboard, currentPlayerSide){
  const validMoves = []
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
  
  
  }

//KING


// <-- SET VALID MOVES


// <-- ESTABLISH CHESSBOARD, SIDES, AND GAME PIECES


