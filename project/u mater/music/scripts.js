document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const musicList = document.querySelectorAll('.musics');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        musicList.forEach(function (music) {
            const musicTitle = music.dataset.title.toLowerCase();
            if (musicTitle.includes(searchTerm)) {
                music.style.display = 'block';
            } else {
                music.style.display = 'none';
            }
        });
    });
});

const navbar = document.querySelector('.nav-bar'); // Corrected selector
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('acti');
});


