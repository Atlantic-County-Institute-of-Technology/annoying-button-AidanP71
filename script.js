const button1 = document.getElementById("button1");

button1.addEventListener("click", yell_at_user);

function yell_at_user() {
    // This will make a "notification pop up saying "STOP PRESSING THIS BUTTON!
    alert("STOP PRESSING THIS BUTTON!");
}