function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];

    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');

    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');

    let gishatichCountElement = document.getElementById('gishatichCount');
    let gishatichLiveCountElement = document.getElementById('gishatichLiveCount');

    let txaCountElement = document.getElementById('txaCount');
    let txaLiveCountElement = document.getElementById('txaLiveCount');

    let axjikCountElement = document.getElementById('axjikCount');
    let axjikLiveCountElement = document.getElementById('axjikLiveCount');

    let hreshCountElement = document.getElementById('hreshCount');
    let hreshLiveCountElement = document.getElementById('hreshLiveCount');


    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCount;
        grassLiveCountElement.innerText = data.grassLiveCount;
        grassEaterCountElement.innerText = data.grassEaterCount;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCount;
        gishatichCountElement.innerText = data.gishatichCount;
        gishatichLiveCountElement.innerText = data.txaLiveCount;
        axjikCountElement.innerText = data.axjikCount;
        axjikLiveCountElement.innerText = data.axjikLiveCount;
        txaCountElement.innerText = data.txaCount;
        txaLiveCountElement.innerText = data.txaLiveCount;
        hreshCountElement.innerText = data.hreshCount;
        hreshLiveCountElement.innerText = data.hreshLiveCount;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "ամառ") {
                        fill("#00ff08");
                    } else if (data.weather == "աշուն") {
                        fill("#00c206");
                    }
                    else if (data.weather == "ձմեռ") {
                        fill("#009605");
                    }
                    else if (data.weather == "գարուն") {
                        fill("#006303");
                    }
                    rect(j * side, i * side, side, side);
                }

                else if
                    (matrix[i][j] == 2) {
                    if (data.weather == "ամառ") {
                        fill("#f3ff00");
                    } else if (data.weather == "աշուն") {
                        fill("#c7d100");
                    }
                    else if (data.weather == "ձմեռ") {
                        fill("#a8b000");
                    }
                    else if (data.weather == "գարուն") {
                        fill("#838a00");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);

                } else if (matrix[i][j] == 3) {
                    if (data.weather == "ամառ") {
                        fill("#ff0000");
                    } else if (data.weather == "աշուն") {
                        fill("#bf0000");
                    }
                    else if (data.weather == "ձմեռ") {
                        fill("#a60000");
                    }
                    else if (data.weather == "գարուն") {
                        fill("#850101");
                    }
                    rect(j * side, i * side, side, side);

                } else if (matrix[i][j] == 4) {
                    if (data.weather == "ամառ") {
                        fill("#000000");
                    } else if (data.weather == "աշուն") {
                        fill("#242424");
                    }
                    else if (data.weather == "ձմեռ") {
                        fill("#363636");
                    }
                    else if (data.weather == "գարուն") {
                        fill("#525252");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    if (data.weather == "ամառ") {
                        fill("#ff00bb");
                    } else if (data.weather == "աշուն") {
                        fill("#c90094");
                    }
                    else if (data.weather == "ձմեռ") {
                        fill("#ad0280");
                    }
                    else if (data.weather == "գարուն") {
                        fill("#8c0168");
                    }
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    if (data.weather == "ամառ") {
                        fill("#00ffea");
                    } else if (data.weather == "աշուն") {
                        fill("#02d1c0");
                    }
                    else if (data.weather == "ձմեռ") {
                        fill("#00998c");
                    }
                    else if (data.weather == "գարուն") {
                        fill("#01665d");
                    }
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}