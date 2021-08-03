
// All color  buttons
var greenButton = document.getElementById("green")
var redButton = document.getElementById("red")
var yellowButton = document.getElementById("yellow")
var blueButton = document.getElementById("blue")


// Set default color of buttons via JS (! code must come AFTER color buttons are initialized)
greenButton.style.backgroundColor = "rgb(4, 170, 109)"
redButton.style.backgroundColor = "rgb(220, 20, 60)"
yellowButton.style.backgroundColor = "rgb(243, 243, 114)"
blueButton.style.backgroundColor = "rgb(75, 75, 243)"


// state of green button
var greenStatus = true
var gameCounter = 0
var score = -10
var scoreMessage = document.getElementById("score")

// All arrays
var randomColorsArray = []
var inputColorsArray = []


function getGreen() {
    // if the state of the green button is flashing, call startGame()
    if (greenStatus) {
        stopFlash()
        startGame()
    }
    else {
    // add (push) "green" to inputColorsArray
        inputColorsArray.push("green")
    // run (call) the "check" function to compare inputColorsArray against the randomColorsArray
        if (checkBothArrays(randomColorsArray, inputColorsArray) == false) gameOver()
    // if the "check" function shows an error (returns false) then call the "game over" function
    //      which clears both Arrays
    // else if the "check" function returns true AND inputColorsArray.length == randomColorsArray.length then
        else if (checkBothArrays(randomColorsArray, inputColorsArray) && inputColorsArray.length==randomColorsArray.length){
    //      call function to add a new random color
        continueGame()
        flashRandomColorsArray(randomColorsArray, 0)
        inputColorsArray = []
        scoreMessage.innerHTML = `<div id="score">Score: ${score}  </div>`
        }
    }
    console.log(randomColorsArray)
    console.log(inputColorsArray)
}

function getRed() {
        inputColorsArray.push("red")
        if (checkBothArrays(randomColorsArray, inputColorsArray) == false) gameOver()
        else if (checkBothArrays(randomColorsArray, inputColorsArray) && inputColorsArray.length==randomColorsArray.length){
            continueGame()
            flashRandomColorsArray(randomColorsArray, 0)
            inputColorsArray = []
            scoreMessage.innerHTML = `<div id="score">Score: ${score}  </div>`
        }
        console.log(randomColorsArray)
        console.log(inputColorsArray)
}

function getYellow() {
        inputColorsArray.push("yellow")
        if (checkBothArrays(randomColorsArray, inputColorsArray) == false) gameOver()
        else if (checkBothArrays(randomColorsArray, inputColorsArray) && inputColorsArray.length==randomColorsArray.length){
            continueGame()
            flashRandomColorsArray(randomColorsArray, 0)
            inputColorsArray = []
            scoreMessage.innerHTML = `<div id="score">Score: ${score}  </div>`
        }
        console.log(randomColorsArray)
        console.log(inputColorsArray)
}

function getBlue() {
    inputColorsArray.push("blue")
    if (checkBothArrays(randomColorsArray, inputColorsArray) == false) gameOver()
    else if (checkBothArrays(randomColorsArray, inputColorsArray) && inputColorsArray.length==randomColorsArray.length){
        continueGame()
        flashRandomColorsArray(randomColorsArray, 0)
        inputColorsArray = []
        scoreMessage.innerHTML = `<div id="score">Score: ${score}  </div>`
    }
    console.log(randomColorsArray)
    console.log(inputColorsArray)
}


// function to compare randomArray and inputArray
function checkBothArrays(randomColorsArray, inputColorsArray) {
    for (var i=0; i < inputColorsArray.length; i++) {
        if (randomColorsArray[i] != inputColorsArray[i]) return false
    }
    return true
}

// function to start game
function startGame() {
    greenStatus = false
    continueGame()
    flashRandomColorsArray(randomColorsArray, 0)
    document.getElementById("startMessage").innerHTML = ``
    score = 0
    scoreMessage.innerHTML = `<div id="score">Score: ${score}  </div>`
}


// function to end game (clears both Arrays)
function gameOver() {
    greenStatus = true
    randomColorsArray = []
    inputColorsArray = []
    lightGreen()
    lightRed()
    lightYellow()
    lightBlue()
    setTimeout(function() {
    setColorGreen()
    }, 2000)
    greenFlash = setInterval(setColorGreen, 500)
    document.getElementById("startMessage").innerHTML = `<div id="startMessage" class="counter">Game Over! Click on green to start</div>`
    score = 0
    // scoreMessage.innerHTML = `<div id="score">Score ${score}:  </div>`
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
    score += 10
}

// function to flash the randomColorsArray 
// function flashRandomColorsArray(array) {
//     for (var i=0; i < array.length; i++) {
//         if (array[i] == 'green') {flashGreenOnce() }
//         else if (array[i] == 'red') {flashRedOnce() }
//         else if (array[i] == 'yellow') {flashYellowOnce() }
//         else if (array[i] == 'blue') {flashBlueOnce() }
//     }
// }


// This is a helper function for the function flashRandomColorsArray
function timedFlashes(array, i) {
    setTimeout(function() {
        if (array[i] == 'green') {flashGreenOnce() }
        else if (array[i] == 'red') {flashRedOnce() }
        else if (array[i] == 'yellow') {flashYellowOnce() }
        else if (array[i] == 'blue') {flashBlueOnce() }
        i++
        if (i<array.length) {
            timedFlashes(array, i)
        }
    }, 800)
}
 // call this function to flash current random colors
function flashRandomColorsArray(array, i) {
    timedFlashes(array, i)
}



// functions to change button brightness
function lightGreen() {
    greenButton.style.backgroundColor = "rgb(72, 235, 77)"
}

function darkGreen() {
    greenButton.style.backgroundColor = "rgb(4, 170, 109)"
}

function lightRed() {
    redButton.style.backgroundColor = "rgb(250, 127, 152)"
}

function darkRed() {
    redButton.style.backgroundColor = "rgb(220, 20, 60)"
}

function lightYellow() {
    yellowButton.style.backgroundColor = "rgb(255, 253, 244)"
}

function darkYellow() {
    yellowButton.style.backgroundColor = "rgb(243, 243, 114)"
}

function lightBlue() {
    blueButton.style.backgroundColor = "rgb(95, 204, 255)"
}

function darkBlue() {
    blueButton.style.backgroundColor = "rgb(75, 75, 243)"
}
//-----------------------------------------------------------


// functions to light up buttons during play
async function flashGreenOnce() {
    setTimeout(function(){
        lightGreen()
        gameCounter++}, 500)
    setTimeout(function(){
        darkGreen()
    },1000)
}

async function flashRedOnce() {
    setTimeout(function(){
        lightRed()
        gameCounter++}, 500)
    setTimeout(function() {
        darkRed()
    }, 1000)
}

async function flashYellowOnce() {
    setTimeout(function(){
        lightYellow()
        gameCounter++}, 500)
    setTimeout(function() {
        darkYellow()
    }, 1000)
}

async function flashBlueOnce() {
    setTimeout(function(){
        lightBlue()
        gameCounter++}, 500)
    setTimeout(function() {
        darkBlue()
    }, 1000)
}

// function to flash green button when variable greenStatus is true


var greenFlash = setInterval(setColorGreen, 500)

function setColorGreen() {
    if (greenButton.style.backgroundColor == "rgb(72, 235, 77)") greenButton.style.backgroundColor = "rgb(4, 170, 109)"
    else if (greenButton.style.backgroundColor == "rgb(4, 170, 109)") greenButton.style.backgroundColor = "rgb(72, 235, 77)"
    darkRed()
    darkYellow()
    darkBlue()
}

function stopFlash(){
    clearInterval(greenFlash)
    greenButton.style.backgroundColor = "rgb(4, 170, 109)"
}

// function to countdown
console.log(randomColorsArray)
console.log(inputColorsArray)




// test arrayy
testArray = ["red", "green", "blue", "blue", "green", "red", "green", "yellow"]
