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



    const navbar = document.getElementById('nav');
    const toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('acti');
    });

