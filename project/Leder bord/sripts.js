document.addEventListener("DOMContentLoaded", function() {
    const addPlayerBtn = document.getElementById("add_btn");
    const playerNameInput = document.getElementById("fname");
    const playerCountryInput = document.getElementById("lname");
    const playerScoreInput = document.getElementById("score");
    const playersContainer = document.getElementById("players");

    // Function to add player
    function addPlayer(name, country, score) {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");

        playerDiv.innerHTML = `
            <div class="name">
                <h3>${name}</h3>
                <p>${new Date().toLocaleString()}</p>
            </div>
            <div class="country">${country}</div>
            <div class="score">${score}</div>
            <button class="remove">❌</button>
            <button class="add5">+5</button>
            <button class="minus5">-5</button>
        `;

        playersContainer.appendChild(playerDiv);

        // Add event listeners for +5, -5, and remove buttons
        const removeBtn = playerDiv.querySelector(".remove");
        const add5Btn = playerDiv.querySelector(".add5");
        const minus5Btn = playerDiv.querySelector(".minus5");

        removeBtn.addEventListener("click", function() {
            playersContainer.removeChild(playerDiv);
        });

        add5Btn.addEventListener("click", function() {
            updateScore(playerDiv, 5);
        });

        minus5Btn.addEventListener("click", function() {
            updateScore(playerDiv, -5);
        });
    }

    // Initial three players
    addPlayer("Atul Ranjan", "India", "100");
    addPlayer("ritik", "Pakistan", "150");
    addPlayer("Ayush", "China", "200");

    // Event listener for adding a player
    addPlayerBtn.addEventListener("click", function() {
        const playerName = playerNameInput.value.trim();
        const playerCountry = playerCountryInput.value.trim();
        const playerScore = playerScoreInput.value.trim();

        if (playerName === "" || playerCountry === "" || playerScore === "") {
            alert("Please fill out all fields");
            return;
        }

        addPlayer(playerName, playerCountry, playerScore);
        playerNameInput.value = "";
        playerCountryInput.value = "";
        playerScoreInput.value = "";
    });

    // Function to update score
    function updateScore(playerDiv, increment) {
        const scoreDiv = playerDiv.querySelector(".score");
        let score = parseInt(scoreDiv.textContent);
        score += increment;
        scoreDiv.textContent = score;
    }
});
