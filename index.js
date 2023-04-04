//Detecting Button Presses

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    
});

}

// Detecting Keyboard Press

document.addEventListener("keypress", function (event) {

makeSound(event.key);

buttonAnimation(event.key);

});


function makeSound(key) {


    switch (key) {
        case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
    
        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "d":
            var tomOne = new Audio("sounds/tom-1.mp3");
            tomOne.play();
            break;
    
        case "j":
            var tomTwo = new Audio("sounds/tom-2.mp3");
            tomTwo.play();
            break;
    
        case "k":
            var tomThree = new Audio("sounds/tom-3.mp3");
            tomThree.play();
            break;
                
        case "l":
            var tomFour = new Audio("sounds/tom-4.mp3");
            tomFour.play();
            break;  
            
            
        default: console/log();
    
    };

};

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}