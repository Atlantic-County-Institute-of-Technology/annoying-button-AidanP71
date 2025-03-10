let text = document.getElementById("text");
let button1 = document.getElementById("button1");
const container = document.getElementById ("container")
let button2 = null;
let button3 = null;

let clicks = 0;

button1.addEventListener("click", annoy);
// plays a sound for every click
function annoy() {
    let quack = new Audio('assets/quack.mp3');
    quack.play()
    clicks++;
    if(clicks == 1 ) {
        text.innerHTML = "Hey! Stop That!";
    }
    else if( clicks == 2 ) {
        text.innerHTML = "I said stop!"
    }

    else if (clicks == 3 ) {
        text.innerHTML = "I'm pretty sure I said stop."
    }
    else if (clicks == 4 ) {
        text.innerHTML = "You're still clicking?"
    }
    else if (clicks == 5 ) {
        text.innerHTML = "Why?"
    }
    else if (clicks == 6 ) {
        text.innerHTML = "Go outside"
    }
    else if (clicks == 7 ) {
        text.innerHTML = "You're seriously still clicking?"
    }
    else if (clicks == 8 ) {
        text.innerHTML = "I'm trying to go to sleep"
    }
    else if (clicks == 9 ) {
        text.innerHTML = "Really? You're still clicking"
    }
    else if (clicks == 10) {
        text.innerHTML = "Fine"
    }
    else if (clicks == 11) {
        text.innerHTML = "I'm going to sleep"
    }
    else if (clicks == 12) {
        text.innerHTML = "..."
    }
    else if (clicks == 13) {
        text.innerHTML = "..."
    }
    else if (clicks == 14) {
        text.innerHTML = "..."
    }
    else if (clicks == 15) {
        text.innerHTML = "..."
    }
    else if (clicks == 16) {
        text.innerHTML = "..."
    }
    else if (clicks == 17) {
        text.innerHTML = "..."
    }
    else if (clicks == 18) {
        text.innerHTML = "..."
    }
    else if (clicks == 19) {
        text.innerHTML = "..."
    }
    else if (clicks == 20) {
        text.innerHTML = "..."
    }
    else if (clicks == 21) {
        text.innerHTML = "*wakes up*"
    }
    else if (clicks == 22) {
        text.innerHTML = "You are still here?"
    }
    else if (clicks == 23) {
        text.innerHTML = "Fine, try and click me now."
        button1.classList.add("rotate");
    }
    // removes rotate classlist but adds to buttons
    else if (clicks == 24) {
        text.innerHTML = "Ok! How about now?"
        button1.classList.remove("rotate"); 
        button2 = document.createElement("button");
        button2.innerHTML = "Press Me!";
        button2.classList.add("button1");
        button2.classList.add("button2");
        container.appendChild(button2);

        button3 = document.createElement("button");
        button3.innerHTML = "NO Press Me!";
        button3.classList.add("button2");
        button3.classList.add("button3");
        container.appendChild(button3);
    }
    else if (clicks == 25) {
        text.innerHTML = "Try and get me now."
        button2.classList.remove("button2");
        button3.classList.remove("button3");
        container.appendChild(button2);
        button3.remove()
        button1.classList.add("back-and-forth");
    }
    else if (clicks == 26) {
        text.innerHTML = "Fine"
        button1.classList.remove("back-and-forth")
    }
    else if (clicks == 27) {
        text.innerHTML = "You win"
    }
    else if (clicks == 28) {
        text.innerHTML = "HA!"
    }
    else if (clicks == 29) {
        text.innerHTML = "You acutally thought"
    }
    // loops clicks back to the first click
    else if (clicks == 30) {
        text.innerHTML = "The game is NEVER over"
        clicks = 0
    }
}