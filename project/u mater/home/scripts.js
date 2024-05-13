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