var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var mode = 1; //hard

easyButton.addEventListener('click',function(){

    if (mode === 1 ){
        easyButton.classList.add("selected");
        hardButton.classList.remove("selected");
    
        mode = 0; //easy
    
        colors = generateRandomColors(3);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        messageDisplay.textContent = "";
        h1.style.backgroundColor = "#4682B4";

        for (var i = 0 ; i < squares.length ; i++){
            if (colors[i]){
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
    }
    
});

hardButton.addEventListener('click',function(){

    if (mode === 0 ){
        easyButton.classList.remove("selected");
        hardButton.classList.add("selected");
    
        mode = 1; //easy
    
        colors = generateRandomColors(6);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        messageDisplay.textContent = "";
        h1.style.backgroundColor = "#4682B4";

        for (var i = 0 ; i < squares.length ; i++){
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";
            
        }
    }
    
});

hardButton.addEventListener('click',function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    mode = 1; //easy
});

resetButton.addEventListener("click", function(){
    if (mode === 1){
        colors = generateRandomColors(6);
    } else {
        colors = generateRandomColors(3);
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0 ; i < colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#4682B4";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (var i = 0 ; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            changeColors(pickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
            messageDisplay.textContent = "Correct!";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";

        }
    });
}

function changeColors(color){
    for (var i = 0 ; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0 ; i < num ; i++){
        var randomList = [];
        for (var j = 0 ; j < 3 ; j++){
            var random = Math.floor(Math.random() * 256);
            randomList.push(random);
        }
        var color = "rgb(" + randomList[0] +", " + randomList[1] + ", " + randomList[2] + ")";
        arr.push(color);
    }
    return arr;
}