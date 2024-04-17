// JavaScript (script.js)
const colorDiv = document.getElementById("color");
const shapeDiv = document.getElementById("shape");
const headingColor = document.getElementById("heading");

const shapes = [
    'circle(50% at 50% 50%)', // Circle
    'polygon(50% 0%, 0% 100%, 100% 100%)', // Triangle
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' // Rectangle
];

let currentShapeIndex = 0;

const getColor = () => {
    // Generate random hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);

    // Apply the random color to the background of the #color div
    colorDiv.style.backgroundColor = randomCode;
    headingColor.style.color =randomCode ;
}

const changeShape = () => {
    shapeDiv.style.clipPath = shapes[currentShapeIndex];
    currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
}

// Add event listeners to the buttons
document.getElementById("color-btn").addEventListener("click", getColor);
document.getElementById("shape-btn").addEventListener("click", changeShape);

