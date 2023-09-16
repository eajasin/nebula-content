const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const gameMenu = document.getElementById('gameMenu');
const startGameButton = document.getElementById('startGameButton');
const showRulesButton = document.getElementById('showRulesButton');

function showGameMenu() {
    gameMenu.style.display = 'block';
}

function hideGameMenu() {
    gameMenu.style.display = 'none';
}

function showGameRules() {
    alert("Chess is the ultimate battlefield of wits, where two players square off on an 8x8 battlefield. The goal? Checkmate your rival's king while guarding your own. Take turns launching your pieces into action, capturing foes, and defending your kingdom.  Win by trapping your rival's king in an inescapable checkmate! Be a cunning commander, plan ahead, and watch out for cunning tactics!")
}

startGameButton.addEventListener('click', () => {
    hideGameMenu();
});

showRulesButton.addEventListener('click', () => {
    showGameRules();
});

showGameMenu();

// DRAW CHESSBOARD, ESTABLISH SIDES, DEFINE GAME PIECES, HAVE THEIR IMAGES --> using an array because easy to organize as a grid, stores info about each square

const canvasSize = 700
const squareSize = canvas.width / 8

canvas.width = canvasSize
canvas.height = canvasSize

const chessboard = new Array(8).fill(null).map(() => new Array(8).fill(null));

class Chesspiece {
    constructor(side, type, imageURL, value) {
        this.side = side;
        this.type = type;
        this.imageURL = imageURL;
        this.value = value
        this.image = new Image(40, 40);
        this.image.src = imageURL
        // this.position = [x, y]
    }
}

let lightPawn = new Chesspiece('light', 'pawn', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg', 1)
chessboard[1][0] = lightPawn
chessboard[1][1] = lightPawn
chessboard[1][2] = lightPawn
chessboard[1][3] = lightPawn
chessboard[1][4] = lightPawn
chessboard[1][5] = lightPawn
chessboard[1][6] = lightPawn
chessboard[1][7] = lightPawn

let leftLightRook = new Chesspiece('light', 'rook', "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg", 5)
chessboard[0][0] = leftLightRook

let rightLightRook = new Chesspiece('light', 'rook', "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg", 5)
chessboard[0][7] = rightLightRook

let lightKnight = new Chesspiece('light', 'knight', "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg", 3)
chessboard[0][1] = lightKnight
chessboard[0][6] = lightKnight

let leftLightBishop = new Chesspiece('light', 'bishop', "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg", 3)
chessboard[0][2] = leftLightBishop
let rightLightBishop = new Chesspiece('light', 'bishop', "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg", 3)
chessboard[0][5] = rightLightBishop

let lightQueen = new Chesspiece('light', 'queen', "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg", 9)
chessboard[0][3] = lightQueen

let lightKing = new Chesspiece('light', 'king', "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg", 0)
chessboard[0][4] = lightKing

let darkPawn = new Chesspiece('dark', 'pawn', "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg", 1)
chessboard[6][0] = darkPawn
chessboard[6][1] = darkPawn
chessboard[6][2] = darkPawn
chessboard[6][3] = darkPawn
chessboard[6][4] = darkPawn
chessboard[6][5] = darkPawn
chessboard[6][6] = darkPawn
chessboard[6][7] = darkPawn

let leftDarkRook = new Chesspiece('dark', 'rook', "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg", 5)
chessboard[7][0] = leftDarkRook

let rightDarkRook = new Chesspiece('dark', 'rook', "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg", 5)
chessboard[7][7] = rightDarkRook

let darkKnight = new Chesspiece('dark', 'knight', "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg", 3)
chessboard[7][1] = darkKnight
chessboard[7][6] = darkKnight

let leftDarkBishop = new Chesspiece('dark', 'bishop', "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg", 3)
chessboard[7][2] = leftDarkBishop
let rightDarkBishop = new Chesspiece('dark', 'bishop', "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg", 3)
chessboard[7][5] = rightDarkBishop

let darkQueen = new Chesspiece('dark', 'queen', "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg", 9)
chessboard[7][3] = darkQueen

let darkKing = new Chesspiece('dark', 'king', "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg", 0)
chessboard[7][4] = darkKing

let piece = { side: "lightPlayer" }
let selectedSquareColor = 'red'

function drawChessBoard() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);

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

            ctx.fillRect(column * squareSize, row * squareSize, squareSize, squareSize)

            const piece = chessboard[row][column];
            if (piece) {
                //console.log(piece, "draw")

                ctx.drawImage(piece.image, column * squareSize, row * squareSize, squareSize, squareSize);
            }

            if (selectedPieceCoordinates && row === selectedPieceCoordinates[0] && column === selectedPieceCoordinates[1]) {
                ctx.strokeStyle = selectedSquareColor;
                ctx.lineWidth = 4;
                ctx.strokeRect(x, y, squareSize, squareSize);

            } //have to mimic this for both capturing and moving 

        }
    }

}

// SET VALID MOVES -->

// ROOK - moves up and down, left and right; unlimited -->

function isValidRookMove(chessboard, startingRow, startingColumn, endingRow, endingColumn, currentPlayerSide) {

    if (chessboard[startingRow][startingColumn].side !== currentPlayerSide) {
        return false;
    }

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

    const targetPiece = chessboard[endingRow][endingColumn];
    if (targetPiece === null) {
        return true; // Valid move without capture
    } else if (targetPiece.side !== currentPlayerSide) {
        //capturePiece(startingRow, startingColumn, endingRow, endingColumn, currentPlayerSide);
        return true; // Valid move with capture
    }
    return false;

}
// <-- ROOK

// BISHOP - diagonal, unlimited -->

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
    const targetPiece = chessboard[endingRow][endingColumn];
    if (targetPiece === null || targetPiece.side !== currentPlayerSide) {
        return true;
    }

    return false;

}

// <-- BISHOP

// QUEEN - unlimited -->
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

    const targetPiece = chessboard[endingRow][endingColumn];
    if (targetPiece === null || targetPiece.side !== currentPlayerSide) {
        return true;
    }

    return false;
}

// <-- QUEEN


// KING - one space, any direction -->

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

// KNIGHT - L-shaped, can jump -->

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

        const targetPiece = chessboard[endingRow][endingColumn];
        if (targetPiece === null || targetPiece.side !== currentPlayerSide) {
            return true;
        }
    }

    return false;
}

// <-- KNIGHT

// PAWN - one/two spaces, diagonal capture -->
function isValidPawnMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayerSide) {

    const direction = (currentPlayerSide === 'light') ? 1 : -1;

    const rowDiff = clickedRow - startingRow;
    const colDiff = Math.abs(clickedColumn - startingColumn);

    if (rowDiff === direction && colDiff === 0) {

        return chessboard[clickedRow][clickedColumn] === null;
    }

    if (rowDiff === 2 * direction && colDiff === 0 && startingRow === (currentPlayerSide === 'light' ? 1 : 6)) {

        const intermediateRow = startingRow + direction;
        return (
            chessboard[intermediateRow][startingColumn] === null &&
            chessboard[clickedRow][clickedColumn] === null
        );
    }

    if (rowDiff === direction && colDiff === 1) {

        const targetPiece = chessboard[clickedRow][clickedColumn];
        return targetPiece !== null && targetPiece.side !== currentPlayerSide;
    }

    return false;
}

// PAWN <--

// <-- SET VALID MOVES

// IMPLEMENT CHECK, CHECKMATE AND STALEMATE -->
// <-- IMPLEMENT CHECK, CHECKMATE AND STALEMATE 

let activePiece = null

canvas.addEventListener('click', handleCanvasClick);

function handleCanvasClick(event) {

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calculate the row and column of the clicked square
    const clickedRow = Math.floor(y / squareSize);
    const clickedColumn = Math.floor(x / squareSize);

    let clickedPiece = chessboard[clickedRow][clickedColumn]
    
    if (clickedPiece == null) {
        selectOrMovePiece(clickedRow, clickedColumn)
        
    } else {
        selectOrMovePiece(clickedRow, clickedColumn)

    }
    selectedPieceCoordinates = [clickedRow, clickedColumn];
    drawChessBoard();
}

// TRACK CURRENT PLAYER AND DISABLE OTHER PLAYER -->

let selectedPieceCoordinates = null

const lightPlayer = {
    name: "Light Player",
    side: "light",
}

const darkPlayer = {
    name: "Dark Player",
    side: "dark",
}

let currentPlayer = lightPlayer

function updateCurrentPlayer() {
    const currentPlayerDisplay = document.getElementById('currentPlayerDisplay')
    currentPlayerDisplay.textContent = `Current Turn: ${currentPlayer.name}`
}

function switchPlayer() {
    currentPlayer === lightPlayer ? (currentPlayer = darkPlayer) : (currentPlayer = lightPlayer)
    updateCurrentPlayer()

}
let lightScore = 0
let darkScore = 0

const moveSound = new Audio('Move.wav')
const captureSound = new Audio('Capture.wav')

function selectOrMovePiece(clickedRow, clickedColumn) {
   
    if (!activePiece) {
        let piece = chessboard[clickedRow][clickedColumn]
       
        if (piece && piece.side === currentPlayer.side) {
            
            activePiece = {
                row: clickedRow,
                column: clickedColumn,
                piece,
            };
            selectedPieceCoordinates = [activePiece.row, activePiece.column];
            console.log(selectedPieceCoordinates);
            drawChessBoard()
        }
    } else {
        const piece = activePiece.piece
        const startingRow = activePiece.row;
        const startingColumn = activePiece.column;

        let validMove = false;

        switch (piece.type) {
            case "rook":
                if (isValidRookMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
                    validMove = true;

                    console.log("Rook move is valid");
                } else {
                    validMove = false;
                    console.log("Rook move is invalid");
                }
                break;
            case "bishop":
                if (isValidBishopMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
                    validMove = true;

                    console.log("Bishop move is valid");
                } else {
                    validMove = false;
                    console.log("Bishop move is invalid");
                }
                break;
            case "queen":
                if (isValidQueenMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
                    validMove = true;

                    console.log("Queen move is valid");
                } else {
                    validMove = false;
                    console.log("Queen move is invalid");
                }
                break;
            case "knight":
                if (isValidKnightMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
                    validMove = true;

                    console.log("Knight move is valid");
                } else {
                    validMove = false;
                    console.log("Knight move is invalid");
                }
                break;
            case "king":
                if (isValidKingMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
                    validMove = true;
                    // lightKingPosition(piece.side, clickedRow, clickedColumn)
                    // // console.log("King move is valid");
                    // console.log(`${currentPlayer.side} king position: `, clickedRow, clickedColumn)
                    // darkKingPosition(piece.side, clickedRow, clickedColumn)
                } else {
                    validMove = false;
                    console.log("King move is invalid");
                }
                break;
            case "pawn":
                if (isValidPawnMove(chessboard, startingRow, startingColumn, clickedRow, clickedColumn, currentPlayer.side)) {
                    validMove = true;

                    console.log("Pawn move is valid");
                } else {
                    validMove = false;
                    console.log("Pawn move is invalid");
                }
                break;
            default:
                validMove = false;
                console.log("Move is invalid");
                break;
        }

        if (validMove) {
           
            const targetPiece = chessboard[clickedRow][clickedColumn];

            function updateLightScore() {
                
                const lightScoreDisplay = document.getElementById('lightScore');
                
                if (targetPiece instanceof Chesspiece) {
                    lightScore += targetPiece.value;
                }
                        
                lightScoreDisplay.textContent = `Light Score: ${lightScore}`;
            }

            function updateDarkScore() {
                
                const darkScoreDisplay = document.getElementById('darkScore');
                
                if (targetPiece instanceof Chesspiece) {
                    darkScore += targetPiece.value;
                }
                            
                darkScoreDisplay.textContent = `Dark Score: ${darkScore}`
            }

            
            if (targetPiece && targetPiece.side !== currentPlayer.side) {
                
                
                
                if (currentPlayer.side === 'light') {
                    updateLightScore()
                } else {
                    updateDarkScore()
                }
            }
                function updateCaptureDisplay() {
                    const captureDisplay = document.getElementById('captureDisplay')
                    
                    if (currentPlayer.side === 'light') {
                        captureDisplay.textContent = `Dark captured a ${targetPiece.type}!`
                    } else {
                        captureDisplay.textContent = `Light captured a ${targetPiece.type}!` 
                    }
    
                    captureSound.play()
                    
                    setTimeout(() => {
                        captureDisplay.textContent = ''
                    }, 3000); 
               
                }
  
            chessboard[clickedRow][clickedColumn] = piece;
            chessboard[startingRow][startingColumn] = null;
            activePiece.row = clickedRow;
            activePiece.column = clickedColumn;
            moveSound.play()

            activePiece = null;
            selectedPieceCoordinates = null
           
            drawChessBoard();
            switchPlayer();
            updateCaptureDisplay()
           
            updateCurrentPlayer()
         
        } 
       
    }

}

drawChessBoard()



