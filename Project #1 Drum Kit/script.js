"use strict";


const keyPressedHandlingEvent = function (event) {
    const keyPressed = document.querySelector(`div[data-key|="${event.keyCode}"`);
    console.log(`key pressed: ${event.keyCode}`);
    keyPressed.classList.toggle("playing");
}

document.addEventListener("keydown", keyPressedHandlingEvent);
document.addEventListener("keyup", keyPressedHandlingEvent);

