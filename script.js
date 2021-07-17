// All color  buttons
var greenButton = document.getElementById("green")
var redButton = document.getElementById("red")
var yellowButton = document.getElementById("yellow")
var blueButton = document.getElementById("blue")

// state of green button
var greenStatus = true

// All arrays
var randomColorsArray = []
var inputColorsArray = []


function getGreen() {
    // if the state of the green button is flashing, call startGame()
    // else
    // add (push) "green" to inputColorsArray
    // run (call) the "check" function to compare inputColorsArray against the randomColorsArray
    // if the "check" function shows an error (returns false) then call the "game over" function
    //      which clears both Arrays
    // else if the "check" function returns true AND inputColorsArray.length == randomColorsArray.length then
    //      call function to add a new random color
}

function checkBothArrays(randomColorsArray, inputColorsArray) {
    for (var i=1; i <= inputColorsArray.length; i++) {
        if (randomColorsArray[i] != inputColorsArray[i]) return false
    }
    return true
}

// function to start game
function startGame() {
    greenStatus = false
    continueGame()
}


// function to end game (clears both Arrays)
function gameOver() {
    randomColorsArray = []
    inputColorsArray =[]
    lightGreen()
    lightRed()
    lightYellow()
    lightBlue()
}


// function to continue game (add a new color)
function continueGame() {
    var color = ''
    switch (Math.floor(Math.random()*4+1)) {
        case 1:
            color = 'green';
            break;
        case 2:
            color = 'red';
            break;
        case 3:
            color = 'yellow';
            break;
        case 4:
            color = 'blue';
            break;
    }

    randomColorsArray.push(color)

    // need to clear inputColorsArray to test memory from beginning
    inputColorsArray = []
}


// functions to change button brightness
function lightGreen() {
    // greenButton.innerHTML = `<div id="green" onclick="getGreen()" style="background-color: #48eb4d;"></div>`
    greenButton.style.backgroundColor = "rgb(72, 235, 77)"
    // alert(greenButton.style.backgroundColor)
}

function darkGreen() {
    // greenButton.innerHTML = `<div id="green" onclick="getGreen()" style="background-color: #04AA6D;"></div>`
    greenButton.style.backgroundColor = "rgb(4, 170, 109)"
}

function lightRed() {
    redButton.innerHTML = `<div id="red" onclick="getRed()" style="background-color: rgb(250, 127, 152);"></div>`
}

function lightYellow() {
    yellowButton.innerHTML = `<div id="yellow" onclick="getYellow()" style="background-color: rgb(255, 253, 244);"></div>`
}

function lightBlue() {
    blueButton.innerHTML = `<div id="blue" onclick="getBlue()" style="background-color: rgb(95, 204, 255);"></div>`
}

// function to flash green button
// function flashGreen() {
//     var colorOfGreenButton = setInterval(setColorGreen, 500)
//     function setColorGreen() {
//         if (greenButton.style.backgroundColor == "#48eb4d") greenButton.style.backgroundColor = "#04AA6D"
//         else if (greenButton.style.backgroundColor == "#04AA6D") greenButton.style.backgroundColor = "#48eb4d"
//     }
// }
lightGreen()

setInterval(setColorGreen, 500)
function setColorGreen() {
    if (greenButton.style.backgroundColor == "rgb(72, 235, 77)") greenButton.style.backgroundColor = "rgb(4, 170, 109)"
    else if (greenButton.style.backgroundColor == "rgb(4, 170, 109)") greenButton.style.backgroundColor = "rgb(72, 235, 77)"
}


