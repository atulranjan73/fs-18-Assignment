const frontGrid = document.querySelector('.game-front');
const attemptsOutput = document.querySelector('output');
const restartButton = document.querySelector('.btn');

let backTiles = [
    '🥝', '🚗', '🍿', '🍢',
    '🎂', '🏀', '🍎', '🍎',
    '🍿', '🎂', '🍢', '🏀',
    '🥝', '🚗', '🍿', '🍿'
];

let flippedTiles = [];
let matchedTiles = [];
let attempts = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createTile(x, y, idx) {
    const tile = document.createElement('button');
    tile.classList.add('tile');
    tile.dataset.x = x;
    tile.dataset.y = y;
    tile.dataset.idx = idx;
    tile.addEventListener('click', () => flipTile(tile));
    return tile;
}

function flipTile(tile) {
    if (flippedTiles.length < 2 && !tile.classList.contains('flipped') && !tile.classList.contains('matched')) {
        tile.classList.add('flipped');
        const idx = tile.dataset.idx;
        tile.textContent = backTiles[idx];
        flippedTiles.push(tile);

        if (flippedTiles.length === 2) {
            attempts++;
            attemptsOutput.textContent = attempts;
            checkMatch();
        }
    }
}

function checkMatch() {
    const [tile1, tile2] = flippedTiles;

    if (tile1.textContent === tile2.textContent) {
        tile1.classList.add('matched');
        tile2.classList.add('matched');
        matchedTiles.push(tile1, tile2);
        flippedTiles = [];

        if (matchedTiles.length === backTiles.length) {
            setTimeout(() => alert(`Game Over! Total attempts: ${attempts}`), 300);
        }
    } else {
        setTimeout(() => {
            tile1.classList.remove('flipped');
            tile2.classList.remove('flipped');
            tile1.textContent = '';
            tile2.textContent = '';
            flippedTiles = [];
        }, 1000);
    }
}

function restartGame() {
    attempts = 0;
    attemptsOutput.textContent = attempts;
    matchedTiles = [];
    flippedTiles = [];
    frontGrid.innerHTML = '';
    shuffle(backTiles);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const tile = createTile(i, j, i * 4 + j);
            frontGrid.appendChild(tile);
        }
    }
}

restartButton.addEventListener('click', restartGame);

document.addEventListener('DOMContentLoaded', restartGame);
