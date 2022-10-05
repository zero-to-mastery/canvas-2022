function drawChessboard() {
  const squareSize = 30;
  const boardTopx = 50;
  const boardTopy = 50;
  let canvas = document.getElementById("chessboard");
  context = canvas.getContext("2d");
  for(let i=0; i<8; i++) {
    for(let j=0; j<8; j++) {
      context.fillStyle = ((i+j)%2==0) ? "#FFFFFF":"#000000";
      let x = boardTopx + j*squareSize;
      let y = boardTopy + i*squareSize;
      context.fillRect(x, y, squareSize, squareSize);
    }
  }
  context.strokeStyle = "#000000";
  context.strokeRect(boardTopx, boardTopy, squareSize*8, squareSize*8)
}
