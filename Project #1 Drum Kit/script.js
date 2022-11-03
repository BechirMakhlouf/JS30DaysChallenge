"use strict";


const keyPressedHandlingEvent = function (event) {
    if (event.repeat) {
        return;
    }
    const keyPressed = document.querySelector(`div[data-key|="${event.keyCode}"`);
    const audio = document.querySelector(`audio[data-key|="${event.keyCode}"`);
    console.log(`key pressed: ${event.keyCode}`);
    keyPressed.classList.toggle("playing");
    if (event.type == "keydown") {
        audio.play();
    } else {
        audio.pause();
    }
}

document.addEventListener("keydown", keyPressedHandlingEvent);
document.addEventListener("keyup", keyPressedHandlingEvent);

