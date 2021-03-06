var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Gishatich = require("./modules/Gishatich.js");
var Txa = require("./modules/Txa.js");
var Axjik = require("./modules/Axjik.js");
var Hresh = require("./modules/Hresh.js");
let random = require('./modules/random');



grassArr = [];
grassEaterArr = [];
gishatichArr = [];
txaArr = [];
axjikArr = [];
hreshArr = [];
matrix = [];


grassHashiv = 0;
grassEaterHashiv = 0;
gishatichHashiv = 0;
txaHashiv = 0;
axjikHashiv = 0;
hreshHashiv = 0;




function matrixGenerator(matrixSize, grass, grassEater, gishatich, txa, axjik, hresh) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < txa; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < axjik; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < hresh; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
}

matrixGenerator(30, 25, 15, 35, 5, 10, 5);


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3001);


function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
                gishatichHashiv++
            }
            else if (matrix[y][x] == 4) {
                var txa = new Txa(x, y);
                txaArr.push(txa);
                txaHashiv++
            }
            else if (matrix[y][x] == 5) {
                var axjik = new Axjik(x, y);
                axjikArr.push(axjik);
                axjikHashiv++
            }
            else if (matrix[y][x] == 6) {
                var hresh = new Hresh(x, y);
                hreshArr.push(hresh);
                hreshHashiv++
            }
        }
    }
}

creatingObjects();

let exanak = 0;
let weather = ""

function game() {

    exanak++;
    if (exanak <= 10) {
        weather = "ամառ"
    } else if (exanak <= 20) {
        weather = "աշուն"
    } else if (exanak <= 30) {
        weather = "ձմեռ"
    }
    else if (exanak <= 40) {
        weather = "գարուն"
    }
    else if (exanak > 40) {
        exanak = 0
    }



    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (gishatichArr[0] !== undefined) {
        for (var i in gishatichArr) {
            gishatichArr[i].eatgishatich();
        }
    }
    if (txaArr[0] !== undefined) {
        for (var i in txaArr) {
            txaArr[i].eattxa();
        }
    }
    if (axjikArr[0] !== undefined) {
        for (var i in axjikArr) {
            axjikArr[i].eataxjik();
        }
    }
    if (hreshArr[0] !== undefined) {
        for (var i in hreshArr) {
            hreshArr[i].eathresh();
        }
    }


    let sendData = {
        matrix: matrix,
        grassCount: grassHashiv,
        grassLiveCount: grassArr.length,
        grassEaterCount: grassEaterHashiv,
        grassEaterLiveCount: grassEaterArr.length,
        gishatichCount: gishatichHashiv,
        gishatichLiveCount: gishatichArr.length,
        axjikCount: axjikHashiv,
        axjikLiveCount: axjikArr.length,
        txaCount: txaHashiv,
        txaLiveCount: txaArr.length,
        hreshCount: hreshHashiv,
        hreshLiveCount: hreshArr.length,
        weather: weather
    }


    io.sockets.emit("data", sendData);
}



setInterval(game, 500)