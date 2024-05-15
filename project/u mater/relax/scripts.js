document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.nav-bar'); // Changed selector
    const toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('acti');
    });
});
