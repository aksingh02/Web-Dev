// for mouse click

var numOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfButtons; i++) {
    var myClick = document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonClick = this.innerHTML;
        playSound(buttonClick);
        btnAnimation(buttonClick);
    });
}

//   for key press

document.addEventListener("keypress",function (event) {
    playSound(event.key);
    btnAnimation(event.key);
});

function playSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(buttonClick);
    }
}

// button animation

function btnAnimation(crrKey){
document.querySelector("." + crrKey).classList.add("pressed");

    setTimeout (function(){
        document.querySelector("." + crrKey).classList.remove("pressed");
    }, 100);
}