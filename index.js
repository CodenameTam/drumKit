// Detecting Button Press - 1st Check the letter (innerHTML) of which button clicked, then send to MakeSound to play the right one.


const numberOfDrumButtons = document.querySelectorAll(".drum").length; //equals 7

for (const i = 0; i<numberOfDrumButtons; i++) {//start with the 0 then the less-than sign shows when to stop(length:7) the i++ continues it

document.querySelectorAll(".drum")[i].addEventListener("click", function () { // add an event listener to all buttons
   
    const buttonInnerHTML = this.innerHTML;

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
            const crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;

        case "a":
            const kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;
        
        case "s":
            const snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;

        case "d":
            const tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;

        case "j":
            const tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
            
        case "k":
            const tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;

        case "l":
        const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
    
        // default: console.log(buttonInnerHTML); //kind of like the "else" statement at the end of a loop **has a runtime error so I may need to alter this function
        }
    }

    function buttonAnimation(currentKey) {
        
        const activeButton = document.querySelector("." + currentKey);
        
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");

        }, 100); //after 1.1sec, the shadow is gone
    }