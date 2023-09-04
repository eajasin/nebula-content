const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

/*maybe create a cuteborder
-have the coordinates
-have a last move thing
-have a current move indicator
-have a story behind it 
-display interesting chess facts
-have timer for each move
*/
// DRAW CHESSBOARD, ESTABLISH SIDES, DEFINE GAME PIECES, HAVE THEIR IMAGES --> using an array because easy to organize as a grid, stores info about each square
let chessboard = new Array(64),
  gameSpace = (canvas.width / 8),
  piecesImages,
  validMoves,
  activePiece,
  activePlayer;

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

function gamePieces(side, gamePiece){
  this.side = side
  this.gamePiece = gamePiece
  this.image = new Image(40, 40)
  this.image.src = imageURL
  //this.firstMove = true //indicats whether it's the first move of the piece
}

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














//defines flags that can be used to represent different types of moves or actions 
// }
// Flag = {
//   NONE: "none",
//   ATTACK: "attack",
//   CASTLE: "castle",
//   KING: "king"
// }


  
//   this.clearValidMoves = function() {
//     for(var i = 0; i < validMoves.length; i++) {
//       var index = validMoves[i];
//       boardArray[index]['border'] = boardArray[index]['bg'];
//       draw(index);
//     }
//   }
//   this.getIndex = function() {
//     for(var i = 0; i < boardArray.length; i++) {
//       if(boardArray[i]['piece'] === this) { 
//         return i;
//       }
//     }
//   }
//   this.getValidMoves = function() { return validMoves; }
//   this.isValidMove = function(targetIndex) {
//     if (!Array.isArray(validMoves)) return false;
//     var index = validMoves.indexOf(targetIndex);
//     if(index > -1) {
//       console.log(targetIndex + " is a valid move.");
//       return true;
//     } else {
//       console.log(targetIndex + " is not a valid move.");
//       return false;
//     }
//   }
//   this.move = function(targetIndex) {
//     var oldIndex = this.getIndex();
    
//     this.firstMove = false;
    
//     boardArray[targetIndex]['piece'] = this;
//     boardArray[oldIndex]['piece'] = null;

//     // Redraw gamepieces
//     draw(oldIndex);
//     draw(targetIndex);

//     // Finished moving, clean-up
//     console.log("Finished moving, cleaning-up.");
//     setCurrentPiece();
//     nextPlayer();
//   }
//   this.showValidMoves = function() {
//     console.log("Valid moves for", this.getIndex(), validMoves);
//     for(var i = 0; i < validMoves.length; i++) {
//       var index = validMoves[i];
//       if(boardArray[index]['piece']) {
//         if(boardArray[index]['piece'].side == currentPlayer) {
//           boardArray[index]['border'] = "rgb(0,0,200)";
//         } else {
//           boardArray[index]['border'] = "rgb(200,0,0)";
//         }
//       } else {
//         boardArray[index]['border'] = "rgb(0,200,0)";
//       }
//       draw(index);
//     }
//   }
//   this.setValidMoves = function() {
//     var index = this.getIndex(),
//         originX = getX(index), 
//         originY = getY(index),
//         sideMod = this.side.value,
//         firstMove = this.firstMove;
    
//     validMoves = new Array();
    
//     // Push index of unit to validMoves array
//     switch(this.type) {
//       case Type.PAWN:
//         /* Check for valid attacks */
//         checkMove(1, 1, Flag.ATTACK);
//         checkMove(-1, 1, Flag.ATTACK);
        
//         /* Check for valid moves */
//         if(this.firstMove) {
//           checkMove(0, 1, Flag.NONE, 2);
//         } else {
//           checkMove(0, 1, Flag.NONE, 1);
//         }
//         break;
//       case Type.ROOK:
//         /* Rooks move in a straight line, attacks are the same. Special move called Castling is available */
//         checkMove(0, 1, Flag.NONE, 8);
//         checkMove(0, -1, Flag.NONE, 8);
//         checkMove(1,0,Flag.CASTLE,8);
//         checkMove(-1,0,Flag.CASTLE,8);
//         break;
//       case Type.KNIGHT:
//         checkMove(2, 1);
//         checkMove(2, -1);
//         checkMove(-2, 1);
//         checkMove(-2, -1);
//         checkMove(1, 2);
//         checkMove(1, -2);
//         checkMove(-1, 2);
//         checkMove(-1, -2);
//         break;
//       case Type.BISHOP:
//         checkMove(1, 1, Flag.NONE, 8); // SE
//         checkMove(1, -1, Flag.NONE, 8); // NE
//         checkMove(-1, 1, Flag.NONE, 8); // SW
//         checkMove(-1, -1, Flag.NONE, 8); // NW
//         break;
//       case Type.QUEEN:
//         checkMove(0, -1, Flag.NONE, 8); // N
//         checkMove(0, 1, Flag.NONE, 8); // S
//         checkMove(1, 0, Flag.NONE, 8); // E
//         checkMove(-1, 0, Flag.NONE, 8); // W
//         checkMove(1, 1, Flag.NONE, 8); // SE
//         checkMove(1, -1, Flag.NONE, 8); // NE
//         checkMove(-1, 1, Flag.NONE, 8); // SW
//         checkMove(-1, -1, Flag.NONE, 8); // NW
//         break;
//       case Type.KING:
//         checkMove(0, -1, Flag.KING); // N
//         checkMove(0, 1, Flag.KING); // S
//         checkMove(1, 0, Flag.KING); // E
//         checkMove(-1, 0, Flag.KING); // W
//         checkMove(1, 1, Flag.KING); // SE
//         checkMove(1, -1, Flag.KING); // NE
//         checkMove(-1, 1, Flag.KING); // SW
//         checkMove(-1, -1, Flag.KING); // NW
//         break;
//     }
    
//     function checkMove(stepX, stepY, flag = Flag.NONE, maxSteps = 1) {
//       MoveLoop:
//       for(var i = 1; i <= maxSteps; i++) {
//         var targetX = originX + stepX * i;
//         var targetY = originY + stepY * i * sideMod;
//         if(targetX >= 0 && targetX <= 7 && targetY >= 0 && targetY <= 7) {
//           var targetIndex = getIndex(targetX, targetY);
//           var targetPiece = boardArray[targetIndex]['piece'];
//           switch (flag) {
//             case Flag.ATTACK:
//               if(targetPiece && targetPiece.side != currentPlayer) {
//                 validMoves.push(targetIndex);
//               }
//               break;
//             case Flag.KING:
//               for(var j = 0; j < boardArray.length; j++) {
//                 var piece = boardArray[j]['piece'];
//                 if(piece && piece.side != currentPlayer) {
//                   if(piece.isValidMove(j)) {
//                     console.log("Invalid move, this will put you in check.");
//                     break;
//                   }
//                 }
//               }
//             case Flag.CASTLE:
//               if(targetPiece && firstMove && targetPiece.firstMove && targetPiece.type == Type.KING && targetPiece.side == currentPlayer) {
//                 validMoves.push(targetIndex);
//                 break MoveLoop;
//               }
//             default:
//               if(targetPiece) {
//                 if(targetPiece.side == currentPlayer) {
//                   break MoveLoop;
//                 } else {
//                   validMoves.push(targetIndex);
//                   break MoveLoop;
//                 }
//               } else {
//                 validMoves.push(targetIndex);
//               }
//           } 
//         } else {
//           break MoveLoop;
//         }
//       }
//     }
//   }
// }
// function draw(index) {
//   // Draw square specified by index
//   var x = getX(index),
//       y = getY(index),
//       fill = boardArray[index]['bg'],
//       border = boardArray[index]['border'],
//       img = boardArray[index]['piece'],
//       strokeWidth = 2;

//   context.fillStyle = fill;
//   context.fillRect(x * boardSpace, y * boardSpace, boardSpace, boardSpace);
//   if (img) {
//     context.drawImage(img.image, x * boardSpace, y * boardSpace, boardSpace, boardSpace);
//   }
//   context.strokeStyle = border;
//   context.lineWidth = strokeWidth;
//   context.strokeRect(x * boardSpace + (strokeWidth/2), y * boardSpace + (strokeWidth/2), boardSpace - strokeWidth, boardSpace - strokeWidth);
// }
// function getClick() {
//   var canvasLeft = canvas.offsetLeft,
//       canvasTop = canvas.offsetTop,
//       x = event.pageX - canvasLeft,
//       y = event.pageY - canvasTop,
//       xIndex = Math.floor(x / boardSpace),
//       yIndex = Math.floor(y / boardSpace),
//       clickIndex = xIndex + (yIndex * 8);
  
//   return clickIndex;
// }
// function getScreenshot() {
//   var dataURL = canvas.toDataURL();
//   var dataImg = document.createElement('img');
//   dataImg.src = dataURL;
//   document.body.insertBefore(dataImg, canvas);
// }
// function getIndex(x, y) {
//   var index = x + y * 8;
//   return index;
// }
// function getX(index) {
//   var x = index % 8;
//   return x;
// }
// function getY(index) {
//   var y = Math.floor(index / 8);
//   return y;
// }
// function isOdd(num) {
//   return (num % 2) == 1;
// }
// function nextPlayer() {
//   console.log("Current player is: " + currentPlayer + ". Setting next player.");
//   if(currentPiece) {
//     currentPiece = null;
//   }
//   switch(currentPlayer) {
//     case Side.LIGHT:
//       currentPlayer = Side.DARK;
//       break;
//     case Side.DARK:
//       currentPlayer = Side.LIGHT;
//       break;
//     default:
//       currentPlayer = Side.LIGHT;
//   }
//   console.log("Current player set to " + currentPlayer);
//   for(var i = 0; i < boardArray.length; i++) {
//     var piece = boardArray[i]['piece'];
//     if(piece) {
//       piece.setValidMoves();
//     }
//   }
//   console.log("Current player is " + currentPlayer.name);
// }
// function selectPiece() {
//   var boardIndex = getClick();
//   var selectedPiece = boardArray[boardIndex]['piece'];

//   if(currentPiece && selectedPiece) {
//     if (selectedPiece.side == currentPlayer) {
//       if(currentPiece.type == "rook" && selectedPiece.type == "king" && currentPiece.isValidMove(boardIndex)) {
//         var result = confirm("Do you wish to perform a castle?");
//         if(result) {
//           var kingX = getX(boardIndex);
//           var kingY = getY(boardIndex);
//           if(getX(currentPiece.getIndex()) == 0) {
//             currentPiece.move(getIndex(kingX - 1, kingY));
//             selectedPiece.move(getIndex(kingX - 2, kingY));
//           } else {
//             currentPiece.move(getIndex(kingX + 1, kingY));
//             selectedPiece.move(getIndex(kingX + 2, kingY));
//           }
//         } else {
//           setCurrentPiece(boardIndex);
//         }
//       }
//       // Check for castle BEFORE changing selection
//       setCurrentPiece(boardIndex);
//     } else if(currentPiece.isValidMove(boardIndex)) {
//       currentPiece.move(boardIndex);
//     } else {
//       console.log("Invalid selection. Move along.");
//     }
//   } else if (currentPiece) {
//     if(currentPiece.isValidMove(boardIndex)) {
//       console.log("Valid move, moving piece.");
//       currentPiece.move(boardIndex);
//     } else {
//       console.log("Not a valid move. Move along.");
//     }
//   } else if (selectedPiece) {
//     if(selectedPiece.side == currentPlayer) {
//       console.log("Changing current piece.");
//       setCurrentPiece(boardIndex);
//     } else {
//       console.log("Please select a valid piece.");
//     }
//   } else {
//     console.log("No valid selection. Move along.");
//   }
// }
// function setCurrentPiece(boardIndex = -1) {
//   console.log("Setting Current Piece to index:", boardIndex);
//   if(currentPiece) {
//     currentPiece.clearValidMoves();
//   }
//   if(boardIndex >= 0) {
//     currentPiece = boardArray[boardIndex]['piece'];
//     currentPiece.showValidMoves();
//   } else {
//     currentPiece = null;
//   }
// }
// function setupBoard() {
//   /* Set background color for each square on a board set up in an 8x8 grid */
//   /* Default border is the same as background */
//   for (var i = 0; i < boardArray.length; i++) {
//     boardArray[i] = new Array(3);

//     var row = getY(i);
//     var fill = "rgb(50,50,50)";
//     if (isOdd(i + row)) {
//       fill = "rgb(255,255,255)";
//     }

//     boardArray[i]['border'] = fill;
//     boardArray[i]['bg'] = fill;
//   }
// }
// function setupGame() {
//   var button = document.getElementById('StartButton');
//   // Initializes or resets initial variables
//   images = new Array();
//   currentPlayer = null;

//   console.log("Setting up board");
//   setupBoard();
//   console.log("Setting up pieces.");
//   setupPieces();
//   console.log("Drawing board.");
//   for (var i = 0; i < boardArray.length; i++) {
//     draw(i);
//   }
//   canvas.addEventListener('click', selectPiece, false);
//   nextPlayer();
//   button.innerHTML = "RESET";
// }
// function setupPieces() {
//   // initialize game pieces
//   for (var i = 0; i < boardArray.length; i++) {
//     var row = getY(i),
//       column = getX(i),
//       side = null,
//       type = null;

//     switch (row) {
//       case 0:
//         switch (column) {
//           case 0:
//           case 7:
//             type = Type.ROOK;
//             break;
//           case 1:
//           case 6:
//             type = Type.KNIGHT;
//             break;
//           case 2:
//           case 5:
//             type = Type.BISHOP;
//             break;
//           case 3:
//             type = Type.KING;
//             break;
//           case 4:
//             type = Type.QUEEN;
//             break;
//         }
//         side = Side.LIGHT;
//         break;
//       case 1:
//         type = Type.PAWN;
//         side = Side.LIGHT;
//         break;
//       case 6:
//         type = Type.PAWN;
//         side = Side.DARK;
//         break;
//       case 7:
//         switch (column) {
//           case 0:
//           case 7:
//             type = Type.ROOK;
//             break;
//           case 1:
//           case 6:
//             type = Type.KNIGHT;
//             break;
//           case 2:
//           case 5:
//             type = Type.BISHOP;
//             break;
//           case 3:
//             type = Type.KING;
//             break;
//           case 4:
//             type = Type.QUEEN;
//             break;
//         }
//         side = Side.DARK;
//         break;
//     }
//     if (type) {
//       boardArray[i]['piece'] = new GamePiece(type, side);
//     }
//   }
// }