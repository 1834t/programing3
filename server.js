var side = 10;
var grassArr = []; 
var eatArr = []; 
var eatdinoArr =[];
var eatallArr =[]
var mulgrassArr = []
var mul1Arr = []
var mul2Arr = []

let matrix = [];
let rows = 50;
let columns = 50; 


    Grass = require("./classm/classGrass.js");
    EatGrass = require("./classm/classEatgrass.js");
    eatdino= require("./classm/classeatdino.js");
    Eatall = require("./classm/Eatall.js");
    mul1 = require("./classm/classmul1.js");
    mulgrass = require("./classm/classmulgrass.js");
    mul2 = require("./classm/classmul2.js");



for (let y = 0; y < rows; y++) {
   matrix[y] = []; 
      for (let x = 0; x < columns; x++) {
          let a = Math.floor(Math.random()*100);
              if (a >= 0 && a < 0) {
                 matrix[y][x] = 0;} 
                   if (a >= 0 && a < 40) {
                      matrix[y][x] = 1;} 
                         else if (a >= 40 && a < 80) {
                            matrix[y][x] = 2;} 
                               else if (a >= 80 && a < 95) {
                                   matrix[y][x] = 3;} 
                                      else if(a >= 95 && a < 96) {
                                         matrix[y][x] = 4; } 
                                            else if(a >= 96 && a < 97) {
                                               matrix[y][x] = 5; } 
                                                 else if(a >= 97 && a < 98) {
                                                     matrix[y][x] = 6;   } 
                                                        else if(a >= 98 && a < 99) {
                                                            matrix[y][x] = 7;  } 
                                                               else if(a >= 99 && a < 100) {
                                                                 matrix[y][x] = 8;  } }}


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

    
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 2) {
            var eatgrass = new Eatgrass(x, y);
            eatArr.push(eatgrass);
        } else if (matrix[y][x] == 1) {
            var grass = new Grass(x, y);
            grassArr.push(grass);
        }
        else if (matrix[y][x] == 3) {
            var eatdino = new Eatdino(x, y);
            eatdinoArr.push(eatdino);
        }
        else if (matrix[y][x] == 4) {
            var eatall = new Eatall(x, y);
            eatallArr.push(eatall);
        }
        else if (matrix[y][x] == 6) {
            var mulgrass = new Mulgrass(x, y);
            mulgrassArr.push(mulgrass);
        }
        else if (matrix[y][x] == 7) {
            var mul1 = new Mul1(x, y);
            mul1Arr.push(mul1);
        }
        else if (matrix[y][x] == 8) {
            var mul2 = new Mul2(x, y);
            mul2Arr.push(mul2);
        }
    }
}



function draw() {

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

    createObj();

function game(){
    for(var i in grassArr){
        grassArr[i].mul();    
    }
    for(var i in eatarr){
        eatarr[i].eat();
    }
    for(var i in eatdinoArr){
        eatdinoArr[i].eat();
    }
    for(var i in eatallArr){
        eatallArr[i].eat();
    }
    for(var i in mul2Arr){
      mul2Arr[i].mul();
    }
    for(var i in mul1Arr){
        mul1Arr[i].mul();
      }
      for(var i in eatArr ){
        eatArr [i].mul();
      }
    
    io.sockets.emit("send matrix", matrix);
}

setInterval(game,300)

