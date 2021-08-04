
// All global vars
var greenButton = document.getElementById("green")
var redButton = document.getElementById("red")
var yellowButton = document.getElementById("yellow")
var blueButton = document.getElementById("blue")
var scoreMessage = document.getElementById("score")
var score = null
var greenStatus = true // true when waiting for player to start
var randomColorsArray = [] // stores random generated colors
var inputColorsArray = [] // stores colors clicked by user


// Set default color of buttons via JS (avoids certains bugs cashes if relying only on css)
greenButton.style.backgroundColor = "rgb(4, 170, 109)"
redButton.style.backgroundColor = "rgb(220, 20, 60)"
yellowButton.style.backgroundColor = "rgb(243, 243, 114)"
blueButton.style.backgroundColor = "rgb(75, 75, 243)"


function startGame() {
    greenStatus = false
    continueGame()
    flashRandomColorsArray(randomColorsArray, 0)
    //document.getElementById("startMessage").textContent = "Correctly repeat a longer and longer sequence of signals."
    document.getElementById("startMessage").innerHTML = `<div id="startMessage" class="counter">Correctly repeat a longer and longer sequence of signals <a href="https://www.youtube.com/watch?v=1Yqj76Q4jJ4" target="_blank" style="color: rgb(250, 127, 152);">Instructions</a></div>`
    score = 0
    scoreMessage.textContent = "score: " + score
}


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
    document.getElementById("startMessage").innerHTML =`<div id="startMessage" class="counter">Game Over! Click green to start <a href="https://www.youtube.com/watch?v=1Yqj76Q4jJ4" target="_blank" style="color: rgb(250, 127, 152);">Instructions</a></div>`
    score = 0
}



// functions for onclick events
function getGreen() {
    if (greenStatus) {
        stopFlash()
        startGame()
    }
    else {
    clickEventHandler("green")
    }
}

function getRed() {
        clickEventHandler("red")
}

function getYellow() {
        clickEventHandler("yellow")
}

function getBlue() {
    clickEventHandler("blue")
}

// Stores user input clicks on the array 'inputColorsArray' and compares this array with 'randomColorsArray'
function clickEventHandler(color) {
    inputColorsArray.push(color)
    if (checkBothArrays(randomColorsArray, inputColorsArray) == false) gameOver()
    else if (checkBothArrays(randomColorsArray, inputColorsArray) && inputColorsArray.length==randomColorsArray.length){
        continueGame()
        flashRandomColorsArray(randomColorsArray, 0)
        inputColorsArray = []
        scoreMessage.innerHTML = `<div id="score">Score: ${score}  </div>`
    }
}


// function to compare randomArray and inputArray
function checkBothArrays(randomColorsArray, inputColorsArray) {
    for (var i=0; i < inputColorsArray.length; i++) {
        if (randomColorsArray[i] != inputColorsArray[i]) return false
    }
    return true
}


// function to continue game after player selects all the correct colors (add a new color to the sequence)
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

 // This function cycles thru randomColorsArray and flashes each color stored in this array. This function is called by clickEventHandler()
 function flashRandomColorsArray(array, i) {
    timedFlashes(array, i)
}


// This is a helper function for the function flashRandomColorsArray above
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
function flashGreenOnce() {
    flashColorOnce(lightGreen,darkGreen)
}

function flashRedOnce() {
    flashColorOnce(lightRed,darkRed)
}

function flashYellowOnce() {
    flashColorOnce(lightYellow,darkYellow)
}

function flashBlueOnce() {
    flashColorOnce(lightBlue,darkBlue)
}

// helper function for flashGreenOnce(), flashRedOnce(), flashBlueOnce(), flashYellowOnce()
function flashColorOnce(lightColorFunction, darkColorFunction) {
    setTimeout(function(){
        lightColorFunction()
        gameCounter++}, 500)
    setTimeout(function(){
        darkColorFunction()
    },1000)
}


// function to flash green button when variable greenStatus is true
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

var greenFlash = setInterval(setColorGreen, 500)
