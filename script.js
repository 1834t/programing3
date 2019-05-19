var socket = io();
socket.on("send matrix",drawMatrix);
var side = 50;

function setup() {
    createCanvas(20 * side, 20 * side);
    background('#acacac');
}



function  drawMatrix(matrix){
   
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill('red');
                rect(j * side, i * side, side, side);
            }else if (matrix[i][j] == 4) {
            fill('black');
            rect(j * side, i * side, side, side);
        }
      else if (matrix[i][j] == 5) {
        fill('pink');
        rect(j * side, i * side, side, side);
    }
else if (matrix[i][j] == 6) {
    fill('blue');
    rect(j * side, i * side, side, side);
}
else if (matrix[i][j] == 7) {
    fill('orange');
    rect(j * side, i * side, side, side);
}
else if (matrix[i][j] == 8) {
    fill('brown');
    rect(j * side, i * side, side, side);
}
        }
    }}