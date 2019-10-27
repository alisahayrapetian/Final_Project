
var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Txa extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.power = 10;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;

            let txa = new Txa(x, y);
            txaArr.push(txa);

            this.power = 0;
            txaHashiv++;
        }
    }
    eattxa() {
        let emptyCells = this.chooseCell(5);
        let emptyCellss = this.chooseCell(3);
        let emptyCellsss = this.chooseCell(6);

        let newCell = random(emptyCells,emptyCellss,emptyCellsss);
        if (newCell) {
            this.power++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;


            for (let i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            for (let i in axjikArr) {
                if (axjikArr[i].x == x && axjikArr[i].y == y) {
                    axjikArr.splice(i, 1)
                }
            }
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            for (let i in hreshArr) {
                if (hreshArr[i].x == x && hreshArr[i].y == y) {
                    hreshArr.splice(i, 1)
                }
            }

            this.x = x;
            this.y = y;

            if (this.power >= 15) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.power--;

        let emptyCells = this.chooseCell(0);
        let emptyCellss = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCellss));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 0)
                }
            }

            this.y = y;
            this.x = x;
        }
        else if (newCell) {
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;

            this.y = y;
            this.x = x;
        }
    }
}