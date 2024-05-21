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
