document.addEventListener("DOMContentLoaded", function () {
  let topButtons = document.querySelectorAll(".about-top");

  topButtons.forEach(function (topButton) {
    let parent = topButton.closest(".about");
    let down = parent.querySelector(".about-down");

    topButton.addEventListener("mouseenter", function () {
      if (down) {
        down.style.display = "block";
      } else {
        console.error("No corresponding .about-down element found.");
      }
    });

    parent.addEventListener("mouseleave", function () {
      if (down) {
        down.style.display = "none";
      }
    });
  });
});

const navbar = document.querySelector(".nav-bar"); // Corrected selector
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("acti");
});




  const phrases = ["Are you strong?", "You are strong!", "I love you","You did great today!" ,"Be a light." ,"Be good. Do good" ,"Stay hopeful!" ,"Protect your peace" ,"Keep on fighting!" ,"I believe in you!"];
  let index = 0;

  function changeText() {
    const spanElement = document.getElementById("dynamic-text");
    index = (index + 1) % phrases.length;
    spanElement.textContent = phrases[index];
  }

  setInterval(changeText, 1000);

