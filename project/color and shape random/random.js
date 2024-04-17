// JavaScript (script.js)
const colorDiv = document.getElementById("color");
const shapeDiv = document.getElementById("shape");

const getColor = () => {
    // Generate random hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);

    // Apply the random color to the background of the #color div
    colorDiv.style.backgroundColor = randomCode;
}

const changeShape = () => {
    // Toggle between square and circle
    if (shapeDiv.classList.contains("circle")) {
        shapeDiv.classList.remove("circle");
    } else {
        shapeDiv.classList.add("circle");
    }
}

// Add event listeners to the buttons
document.getElementById("color-btn").addEventListener("click", getColor);
document.getElementById("shape-btn").addEventListener("click", changeShape);
