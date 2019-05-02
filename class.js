
// class Grass {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.energy = 0;
//         this.multiply = 0; 
//         this.directions = [];
//     }


//     newDirections() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }

//     getDirections(t) {
//         this.newDirections();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//                 if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                      if (matrix[y][x] == t) {
//                        found.push(this.directions[i]);
//                         }
//                     }
//                 }
//                 return found;
//             }
//     mul() {
//         this.multiply++;

//         if (this.multiply = 8) { 
//             var fundCords = this.getDirections(0);
//             var cord = random(fundCords);
//             if (cord) {
//                 var x = cord[0];
//                 var y = cord[1];
//                 var newgrass = new Grass(x, y);
//                 grassArr.push(newgrass);
//                 matrix[y][x] = 1;
//                 this.multiply = 0;

//             }
//         }
//     }



// }

// class Eatgrass {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.multiply = 0;
//         this.energy = 3;
//         this.directions =[];
//     }



//     newDirections() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     getDirections(t) {
//         this.newDirections();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == t) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }




//     move() {

//         var fundCords = this.getDirections(0);
//         var cord = random(fundCords);
//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];  
//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;
//             this.x = x;
//             this.y = y;

//         }
//     }



//     eat() {      
//         var fundCords = this.getDirections(1);
//         var cord = random(fundCords);
//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];         
//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;      
//             this.x = x;
//             this.y = y;
//             this.multiply++;
//             this.energy++;
//             for (var i in grassArr) {
//                 if (x == grassArr[i].x && y == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                 }
//             }
//             if (this.multiply == 10) {
//                 this.mul()
//                 this.multiply = 0;
//             }
//         } else {
//             this.move();
//             this.energy--;
//             if (this.energy <= 0) { 
//                 this.die();
//             }
//         }
//     }

//     mul() {

//         var fundCords = this.getDirections(0);
//         var cord = random(fundCords);
//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];
//             var neweatgrass = new Eatgrass(x, y);
//             eatArr.push(neweatgrass);
//             this.multiply++;
//             matrix[y][x] = 1;
//             this.multiply = 0; 
//         } 
//     }

//     die() {
//         matrix[this.y][this.x] = 0;
//         for (var i in eatArr) {
//             if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
//                 eatArr.splice(i, 1);
//             }
//         }
//     }
// }


// class Eatdino {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.multiply = 0;
//         this.energy = 6;
//         this.directions =[];
//     }


//     newDirections() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     getDirections(t) {
//         this.newDirections();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == t) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }




//     move() {

//         var fundCords = this.getDirections(0);
//         var cord = random(fundCords);
//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];  
//             matrix[y][x] = 3;
//             matrix[this.y][this.x] = 0;
//             this.x = x;
//             this.y = y;

//         }
//     }



//     eat() {      
//         var fundCords = this.getDirections(2);
//         var cord = random(fundCords);
//         if (cord) {
//             var x = cord[0];
//             var y = cord[2];         

//             matrix[y][x] = 3;
//             matrix[this.y][this.x] = 0;      

//             this.x = x;
//             this.y = y;
//             this.multiply++;
//             this.energy ++;
//             ;
//             for (var i in Arr) {
//                 if (x == eatdinoArr[i].x && y == eatdinoArr[i].y) {
//                     eatdinoArr.splice(i, 1);
//                 }
//             }
//             if (this.multiply == 10) {
//                 this.mul()
//                 this.multiply = 0;
//             }
//         } else {

//             this.move();
//             this.energy--;
//             if (this.energy < 3) { 
//                 this.die();
//             }
//         }
//     }
//     mul() {

//         var fundCords = this.getDirections(0);
//         var cord = random(fundCords);
//         if (cord) {
//             var x = cord[0];
//             var y = cord[1];
//             this.multiply++
//             var neweatdino = new Eatdino(x, y);
//             eatdinoArr.push(neweatdino);
//             this.multiply++;
//             matrix[y][x] = 1;
//             this.multiply = 0; 
//         } 
//     }


//     die() {
//         matrix[this.y][this.x] = 0;
//         for (var i in eatArr) {
//             if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
//                 eatArr.splice(i, 1);
//             }
//         }
//     }

// }









class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++;
        if (this.multiply == 15) {
            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var newgrass = new Grass(x, y);
                grassArr.push(newgrass);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }
}
class Eatgrass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 3;
        this.directions = [];
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    move() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }


    eat() {
        var fundCords = this.getDirections(1);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;

            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }

            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }


    mul() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];
            var newgrass = new Eatgrass(x, y);
            eatArr.push(newgrass);

            matrix[y][x] = 2;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;

        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }

}





class Eatdino {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 10;
        this.directions = [];
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    move() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }


    eat() {
        var fundCords = this.getDirections(2);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;

            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }

            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }


    mul() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];
            var neweatdinoArr = new Eatdino(x, y)
            eatdinoArr.push(neweatdinoArr);

            matrix[y][x] = 3;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;

        for (var i in eatdinoArr) {
            if (this.x == eatdinoArr[i].x && this.y == eatdinoArr[i].y) {
                eatdinoArr.splice(i, 1);
            }
        }
    }

}


class Eatall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 100;
        this.directions = [];
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    move() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }


    eat() {
        var fundCords1 = this.getDirections(2);
        var fundCords2 = this.getDirections(1);
        var fundCords = this.getDirections(3);
        fundCords=fundCords.concat(fundCords2,fundCords1)
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            
            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
                  for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            
            for (var i in eatdinoArr) {
                if (x == eatdinoArr[i].x && y == eatdinoArr[i].y) {
                    eatdinoArr.splice(i, 1);
                }
            }


            if (this.multiply == 15) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }


    mul() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];
            var neweatallArr = new Eatall(x, y)
            eatallArr.push(neweatallArr);

            matrix[y][x] = 4;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;

        for (var i in eatallArr) {
            if (this.x == eatallArr[i].x && this.y == eatallArr[i].y) {
                eatallArr.splice(i, 1);
            }
        }
    }

}




class Mulgrass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {

        this.multiply++;
        if (this.multiply == 1) {
            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var newgrass = new Grass(x, y);
                grassArr.push(newgrass);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
            if (this.energy <= 0) {
                this.die();
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0;

        for (var i in mulgrassArr) {
            if (this.x == mulgrasslArr[i].x && this.y == mulgrassArr[i].y) {
                mulgrassArr.splice(i, 1);
            }
        }
    }
}

class Mul2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {

        this.multiply++;
        if (this.multiply == 3) {
            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var neweatdino = new Eatdino(x, y);
               eatdinoArr.push(neweatdino);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
           
        }
    }

}
class Mul1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++;
        if (this.multiply == 1) {
            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var neweat = new Eatgrass(x, y);
                eatArr.push(neweat);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
          
        }
    }

}
