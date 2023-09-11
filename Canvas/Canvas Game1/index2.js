const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const gameMenu = document.getElementById('game-menu');
const startGameButton = document.getElementById('startGameButton');
const showRulesButton = document.getElementById('showRulesButton');


function showGameMenu() {
    gameMenu.style.display = 'block';
}

function hideGameMenu() {
    gameMenu.style.display = 'none';
}

function showGameRules() {
    alert('INSERT CONTENT HERE')
}

startGameButton.addEventListener('click', () => {
    hideGameMenu();
});

showRulesButton.addEventListener('click', () => {
    showGameRules();
});

showGameMenu();






/*maybe create a cuteborder
-have the coordinates

-display current player 

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


// ROOK - moves up and down, left and right; unlimited -->

function isValidRookMove(chessboard, startingRow, startingColumn, endingRow, endingColumn, currentPlayerSide) {



    if (chessboard[startingRow][startingColumn].side !== currentPlayerSide) {
        //console.log('wrong player')
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

function isValidBishopMove(chessboard, startingRow, startingColumn, endingRow, endingColumn, currentPlayerSide) {


    if (chessboard[startingRow][startingColumn].side !== currentPlayerSide) {
        return false;
    }
    if (endingRow < 0 || endingRow >= 8 || endingColumn < 0 || endingColumn >= 8) {
        return false;
    }

    const rowDifference = Math.abs(startingRow - endingRow);
    const colDifference = Math.abs(startingColumn - endingColumn);

    if (rowDifference !== colDifference) {
        return false;
    }

    const rowIncrement = startingRow < endingRow ? 1 : -1;
    const colIncrement = startingColumn < endingColumn ? 1 : -1;


    for (let row = startingRow + rowIncrement, col = startingColumn + colIncrement;
        row !== endingRow;
        row += rowIncrement, col += colIncrement) {
        if (chessboard[row][col] !== null) {
            return false;
        }
    }


    const endingPiece = chessboard[endingRow][endingColumn];
    if (endingPiece === null || endingPiece.side !== currentPlayerSide) {
        return true;
    }

    return false;


}

// <-- BISHOP

// QUEEN -->
function isValidQueenMove(chessboard, startingRow, startingColumn, endingRow, endingColumn, currentPlayerSide) {

    if (chessboard[startingRow][startingColumn].side !== currentPlayerSide) {
        return false;
    }

    if (endingRow < 0 || endingRow >= 8 || endingColumn < 0 || endingColumn >= 8) {
        return false;
    }

    const rowDifference = Math.abs(startingRow - endingRow);
    const colDifference = Math.abs(startingColumn - endingColumn);


    if (rowDifference !== 0 && colDifference !== 0 && rowDifference !== colDifference) {
        return false;
    }

    const rowIncrement = startingRow < endingRow ? 1 : startingRow > endingRow ? -1 : 0;
    const colIncrement = startingColumn < endingColumn ? 1 : startingColumn > endingColumn ? -1 : 0;


    for (let row = startingRow + rowIncrement, col = startingColumn + colIncrement;
        row !== endingRow || col !== endingColumn;
        row += rowIncrement, col += colIncrement) {
        if (chessboard[row][col] !== null) {
            return false;
        }
    }

    const endingPiece = chessboard[endingRow][endingColumn];
    if (endingPiece === null || endingPiece.side !== currentPlayerSide) {
        return true;
    }

    return false;
}

// <-- QUEEN

// KING -->

function isValidKingMove(chessboard, startingRow, startingColumn, endingRow, endingColumn, currentPlayerSide) {

    if (chessboard[startingRow][startingColumn].side !== currentPlayerSide) {
        return false;
    }

    if (endingRow < 0 || endingRow >= 8 || endingColumn < 0 || endingColumn >= 8) {
        return false;
    }

    const rowDifference = Math.abs(startingRow - endingRow);
    const colDifference = Math.abs(startingColumn - endingColumn);


    if (rowDifference <= 1 && colDifference <= 1) {
        return true;
    }

    return false;
}

// <-- KING

// KNIGHT -->

function isValidKnightMove(chessboard, startingRow, startingColumn, endingRow, endingColumn, currentPlayerSide) {

    if (chessboard[startingRow][startingColumn].side !== currentPlayerSide) {
        return false;
    }
    if (endingRow < 0 || endingRow >= 8 || endingColumn < 0 || endingColumn >= 8) {
        return false;
    }

    const rowDiff = Math.abs(endingRow - startingRow);
    const colDiff = Math.abs(endingColumn - startingColumn);


    if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) {

        const endingPiece = chessboard[endingRow][endingColumn];
        if (endingPiece === null || endingPiece.side !== currentPlayerSide) {
            return true;
        }
    }

    return false;
}

// <-- KNIGHT

// PAWN -->
function isValidPawnMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayerSide) {
    // Determine the direction of pawn movement based on the current player's side
    const direction = (currentPlayerSide === 'light') ? 1 : -1;

    // Calculate the row and column differences
    const rowDiff = clickedRow - startingRow;
    const colDiff = Math.abs(clickedColumn - startingColumn);

    // Pawn can move one square forward
    if (rowDiff === direction && colDiff === 0) {
        // Check if the target square is empty
        return chessboard[clickedRow][clickedColumn] === null;
    }

    // Pawn can move two squares forward from its starting position
    if (rowDiff === 2 * direction && colDiff === 0 && startingRow === (currentPlayerSide === 'light' ? 1 : 6)) {
        // Check if the two intermediate squares and the target square are empty
        const intermediateRow = startingRow + direction;
        return (
            chessboard[intermediateRow][startingColumn] === null &&
            chessboard[clickedRow][clickedColumn] === null
        );
    }

    // Pawn can capture diagonally
    if (rowDiff === direction && colDiff === 1) {
        // Check if the target square has an opponent's piece
        const targetPiece = chessboard[clickedRow][clickedColumn];
        return targetPiece !== null && targetPiece.side !== currentPlayerSide;
    }

    // Invalid pawn move
    return false;
}

// PAWN <--

// <-- SET VALID MOVES

// function findOpponentKingPosition(chessboard, currentPlayerSide) {
//     for (let row = 0; row < 8; row++) {
//         for (let col = 0; col < 8; col++) {
//             const piece = chessboard[row][col];
//             if (piece && piece.side !== currentPlayerSide && piece.type === 'king') {
//                 return { row, column: col };
//             }
//         }
//     }
//     return null; // Return null if the opponent's king is not found (should not happen in a valid game)
// }


// function kingIsChecked(chessboard, oppositeKingPosition, currentPlayerSide){

//     for (let row = 0; row < 8; row++) {
//         for (let col = 0; col < 8; col++) {
//             const piece = chessboard[row][col];
//             if (piece && piece.side !== currentPlayerSide) {
//                 // Check if the opponent's piece can attack the king's position
//                 if (isValidMoveToSquare(chessboard, row, col, kingPosition.row, kingPosition.column, piece.type)) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// }

// function isCheckmate(chessboard, kingPosition, currentPlayerSide) {
//     // Check if the king is in check
//     if (isKingInCheck(chessboard, kingPosition, currentPlayerSide)) {
//         // Check if there are any legal moves for the current player
//         for (let row = 0; row < 8; row++) {
//             for (let col = 0; col < 8; col++) {
//                 const piece = chessboard[row][col];
//                 if (piece && piece.side === currentPlayerSide) {
//                     // Check if the piece has any valid moves
//                     if (hasValidMoves(chessboard, row, col, currentPlayerSide)) {
//                         return false; // There is a legal move, so it's not checkmate
//                     }
//                 }
//             }
//         }
//         return true; // There are no legal moves for the current player, it's checkmate
//     }
//     return false; // The king is not in check
// }

// const kingPosition = {
//     row: 3,
//     column: 4
// };










let activePiece = null

//this.firstMove = true //indicats whether it's the first move of the piece
canvas.addEventListener('click', handleCanvasClick);

function handleCanvasClick(event) {


    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calculate the row and column of the clicked square
    const clickedRow = Math.floor(y / squareSize);
    const clickedColumn = Math.floor(x / squareSize);

    let clickedPiece = chessboard[clickedRow][clickedColumn]
    //console.log(clickedPiece, "clickedPiece")
    if (clickedPiece == null) {
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

function switchPlayer() {
    currentPlayer === lightPlayer ? (currentPlayer = darkPlayer) : (currentPlayer = lightPlayer)

    //console.log(`current player is ${currentPlayer.name}`)
}



function movePiece(clickedRow, clickedColumn) {
    console.log(clickedRow, clickedColumn)
    if (activePiece) {
        const piece = activePiece.piece;
        const startingRow = activePiece.row;
        const startingColumn = activePiece.column;

        let validMove = false;

        switch (piece.type) {
            case "rook":
                if (isValidRookMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
                    validMove = true;
                    pieceType = "rook";
                    console.log("Rook move is valid");
                } else {
                    validMove = false;
                    console.log("Rook move is invalid");
                }
                break;
            // case "bishop":
            //     if (isValidBishopMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
            //         validMove = true;
            //         pieceType = "bishop";
            //         console.log("Bishop move is valid");
            //     } else {
            //         validMove = false;
            //         console.log("Bishop move is invalid");
            //     }
            //     break;
            case "queen":
                if (isValidQueenMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
                    validMove = true;
                    pieceType = "queen";
                    console.log("Queen move is valid");
                } else {
                    validMove = false;
                    console.log("Queen move is invalid");
                }
                break;
            // case "knight":
            //             if (isValidKnightMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
            //                 validMove = true;
            //                 pieceType = "knight";
            //                 console.log("Knight move is valid");
            //             } else {
            //                 validMove = false;
            //                 console.log("King move is invalid");
            //             }
            //             break;
            case "king":
                if (isValidKingMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
                    validMove = true;
                    pieceType = "king";
                    console.log("King move is valid");
                } else {
                    validMove = false;
                    console.log("King move is invalid");
                }
                break;
            // case "pawn":
            //         if (isValidPawnMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
            //             validMove = true;
            //             pieceType = "pawn";
            //             console.log("Pawn move is valid");
            //         } else {
            //             validMove = false;
            //             console.log("Pawn move is invalid");
            //         }
            //         break;
            default:
                validMove = false;
                console.log("Move is invalid");
                break;
        }

        if (validMove) {
            // Check if there's a piece to capture at the target square
            const targetPiece = chessboard[clickedRow][clickedColumn];
            if (targetPiece && targetPiece.side !== currentPlayer.side) {

                // Capture the opponent's piece by setting it to null
                chessboard[clickedRow][clickedColumn] = null;
            }


            chessboard[clickedRow][clickedColumn] = piece;
            chessboard[startingRow][startingColumn] = null;
            piece.row = clickedRow;
            piece.column = clickedColumn;

            activePiece = null;
            drawChessBoard();
            switchPlayer();
            console.log(`current player: ${currentPlayer.side}`);
        }

        // const oppositeKingPosition = findOpponentKingPosition(chessboard, currentPlayer.side)
        //     if(kingIsChecked(chessboard, oppositeKingPosition, currentPlayer.side)){
        //         console.log(`${player.side}'s king is in check`)
        //     }
    }
    // if(isCheckmate(chessboard, oppositeKingPosition, currentPlayer.side)){
    //     console.log("Checkmate")
    // }



}






// <-- TRACK CURRENT PLAYER AND DISABLE OTHER PLAYER -->


function selectedPiece(row, column) {
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

            const piece = chessboard[row][column];
            if (piece) {
                //console.log(piece, "draw")

                ctx.drawImage(piece.image, x, y, squareSize, squareSize);
            }

            if (selectedPieceCoordinates && row === selectedPieceCoordinates[0] && column === selectedPieceCoordinates[1]) {
                ctx.strokeStyle = selectedSquareColor;
                ctx.lineWidth = 4;
                ctx.strokeRect(x, y, squareSize, squareSize);
            } //coloring is a bit off, fix!



        }
    }

}

//   let lightPawn = new Chesspiece('light', 'pawn', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg')
// //   chessboard[1][0] = lightPawn
// //   chessboard[1][1] = lightPawn
// //   chessboard[1][2] = lightPawn
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

// let leftLightBishop = new Chesspiece('light', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg")
// chessboard[0][2] = leftLightBishop
// let rightLightBishop = new Chesspiece('light', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg")
// chessboard[0][5] = rightLightBishop

let lightQueen = new Chesspiece('light', 'queen', "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg")
chessboard[0][3] = lightQueen

let lightKing = new Chesspiece('light', 'king', "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg")
chessboard[0][4] = lightKing

//  let darkPawn = new Chesspiece ('dark', 'pawn',"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg")
// // chessboard[6][0] = darkPawn
// // chessboard[6][1] = darkPawn
// // chessboard[6][2] = darkPawn
// chessboard[6][3] = darkPawn
// chessboard[6][4] = darkPawn
// chessboard[6][5] = darkPawn
// chessboard[6][6] = darkPawn
// chessboard[6][7] = darkPawn

let leftDarkRook = new Chesspiece('dark', 'rook', "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg")
chessboard[7][0] = leftDarkRook

let rightDarkRook = new Chesspiece('dark', 'rook', "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg")
chessboard[7][7] = rightDarkRook

// let darkKnight = new Chesspiece('dark', 'knight',"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg")
// chessboard[7][1] = darkKnight
// chessboard[7][6] = darkKnight

// let leftDarkBishop = new Chesspiece('dark', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg")
// chessboard[7][2] = leftDarkBishop
// let rightDarkBishop = new Chesspiece('dark', 'bishop',"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg")
// chessboard[7][5] = rightDarkBishop

let darkQueen = new Chesspiece('dark', 'queen', "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg")
chessboard[7][3] = darkQueen

let darkKing = new Chesspiece('dark', 'king', "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg")
chessboard[7][4] = darkKing


drawChessBoard()

// <-- INITIALIZE CHESSBOARD AND PLACE PIECES IN THEIR STARTING POSITIONS


