const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')






const canvasSize = 700
const squareSize = canvas.width / 8

canvas.width = canvasSize
canvas.height = canvasSize

const chessboard = new Array(8).fill(null).map(() => new Array(8).fill(null));


class Chesspiece {
    constructor(side, type, imageURL) { //will not use starting row and column as parameters
        this.side = side;
        this.type = type;
        this.imageURL = imageURL;
        this.image = new Image(40, 40);
        this.image.src = imageURL;
        // this.currentRow = startingRow
        // this.currentColumn = startingColumn
       
    }

    // moveChesspiece(endingRow, endingColumn){
    //     this.currentRow = endingRow
    //     this.currentColumn = endingColumn
    // }


}

// const lightPlayer = {
//     name: "Light Player",
//     side: "light"
// }

// const darkPlayer = {
//     name: "Dark Player",
//     side: "dark"
// }


canvas.addEventListener('click', handleCanvasClick)

function handleCanvasClick(event) {
    // Get the click coordinates relative to the canvas
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    // Calculate the row and column based on the click coordinates
    const clickedRow = Math.floor(y / squareSize);
    const clickedColumn = Math.floor(x / squareSize);

    // Check if a piece exists at the clicked row and column
    const clickedPiece = chessboard[clickedRow][clickedColumn];

    if (clickedPiece) {
        // A piece was clicked, you can now handle this event
        // For example, you can select the piece, move it, or perform other actions.
        console.log('Piece clicked:', clickedPiece);
    }
}








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

            // if (selectedPieceCoordinates && row === selectedPieceCoordinates[0] && column === selectedPieceCoordinates[1]) {
            //     ctx.strokeStyle = selectedSquareColor;
            //     ctx.lineWidth = 4;
            //     ctx.strokeRect(x, y, squareSize, squareSize);
                
            // } //coloring is a bit off, fix!

        }
    }

}

let leftLightRook = new Chesspiece('light', 'rook', "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg")
chessboard[0][0] = leftLightRook


let rightLightRook = new Chesspiece('light', 'rook', "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg")
chessboard[0][7] = rightLightRook


let leftDarkRook = new Chesspiece('dark', 'rook', "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg")
chessboard[7][0] = leftDarkRook

let rightDarkRook = new Chesspiece('dark', 'rook', "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg")
chessboard[7][7] = rightDarkRook

drawChessBoard()
