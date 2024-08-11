// JavaScript (script.js)
const colorDiv = document.getElementById("color");
const shapeDiv = document.getElementById("shape");
const headingColor = document.getElementById("heading");

const shapes = [
    'circle(50% at 50% 50%)', // Circle
'polygon(50% 0%, 0% 100%, 100% 100%)', // Triangle
'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Rectangle
'ellipse(50% 40% at 50% 50%)', // Ellipse
'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond
'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', // Pentagon
'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // Hexagon
'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', // Octagon
'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', // Star
'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', // Parallelogram
'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)', // Trapezoid
'ellipse(50% 50% at 50% 50%)', // Crescent
'polygon(50% 0%, 100% 50%, 75% 50%, 75% 100%, 25% 100%, 25% 50%, 0% 50%)', // Arrow
'polygon(50% 0%, 75% 0%, 100% 25%, 50% 100%, 0% 25%, 25% 0%)', // Heart
'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Rhombus
'polygon(0% 0%, 100% 0%, 0% 100%)', // Right Triangle
// 'polygon(50% 0%, 

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

