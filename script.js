let text = document.getElementById("text");
let button1 = document.getElementById("button1");

let clicks = 0;

button1.addEventListener("click", annoy);

function annoy() {
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
    }
}