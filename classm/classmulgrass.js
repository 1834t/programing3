let Living = require("./Living.js")
let  random = require("./random")
module.exports = class Mulgrass extends Living {
    constructor(x, y) {
    super(x,y);
        this.multiply = 0;

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

        for (var i in MulgrassArr) {
            if (this.x == MulgrasslArr[i].x && this.y == MulgrassArr[i].y) {
                MulgrassArr.splice(i, 1);
            }
        }
    }
}
