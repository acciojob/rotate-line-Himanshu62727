//your JS code here. If required.

// Initialize the angle
let angle = 0;

// Get the line element
const line = document.getElementById('line');

// Function to update the rotation
function rotateLine() {
    angle += 2;
    line.style.transform = `rotate(${angle}deg)`;
}

setInterval(rotateLine, 20);
