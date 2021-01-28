// Detecting Button Press - 1st Check the letter (innerHTML) of which button clicked, then send to MakeSound to play the right one.


var numberOfDrumButtons = document.querySelectorAll(".drum").length; //equals 7

for (var i = 0; i<numberOfDrumButtons; i++) {//start with the 0 then the less-than sign shows when to stop(length:7) the i++ continues it

document.querySelectorAll(".drum")[i].addEventListener("click", function () { // add an event listener to all buttons
   
    var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML); // the letter of the button that got pressed matched with the right sound

    buttonAnimation(buttonInnerHTML);
});

}

// Detecting Keyboard Press - Send it to the event and the makeSound function

document.addEventListener("keydown", function(event) {
    
    makeSound(event.key); // The key property of the event (which key on keyboard)

    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) { // it switches to the correct button 
        case "w":
            var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;

        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;
        
        case "s":
            var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
            
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;

        case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
    
        default: console.log(buttonInnerHTML); //kind of like the "else" statement at the end of a loop
        }
    }

    function buttonAnimation(currentKey) {
        
        var activeButton = document.querySelector("." + currentKey);
        
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");

        }, 100); x//after 1.1sec, the shadow is gone
    }