const navbar = document.querySelector('.nav-bar'); // Corrected selector
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('acti');
});

