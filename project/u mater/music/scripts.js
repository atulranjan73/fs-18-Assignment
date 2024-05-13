// document.addEventListener("DOMContentLoaded", function() {
//     const searchInput = document.getElementById("search-input");
//     const searchButton = document.getElementById("search-button");
//     const musicList = document.getElementById("music-list");

//     // Function to fetch music data from Last.fm API
//     async function fetchMusicData(keyword) {
//         const apiKey = "YOUR_LASTFM_API_KEY";
//         const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${keyword}&api_key=${apiKey}&format=json&limit=50`);
//         const data = await response.json();
//         return data.results.trackmatches.track; // Extract the track data array
//     }

//     // Function to create a music item element
//     function createMusicItem(track) {
//         const musicItem = document.createElement("div");
//         musicItem.classList.add("music-item");

//         const img = document.createElement("img");
//         img.src = track.image[2]["#text"] || "placeholder.png"; // Use placeholder image if image is not available
//         musicItem.appendChild(img);

//         const title = document.createElement("h3");
//         title.textContent = track.name;
//         musicItem.appendChild(title);

//         const artist = document.createElement("p");
//         artist.textContent = track.artist;
//         musicItem.appendChild(artist);

//         return musicItem;
//     }

//     // Function to populate music list
//     async function populateMusicList(keyword) {
//         musicList.innerHTML = ""; // Clear previous music items
//         const musicData = await fetchMusicData(keyword);
//         if (musicData.length === 0) {
//             musicList.innerHTML = "<p>No results found.</p>";
//         } else {
//             musicData.forEach(track => {
//                 const musicItem = createMusicItem(track);
//                 musicList.appendChild(musicItem);
//             });
//         }
//     }

//     // Event listener for search button click
//     searchButton.addEventListener("click", function() {
//         const keyword = searchInput.value.trim();
//         if (keyword !== "") {
//             populateMusicList(keyword);
//         } else {
//             alert("Please enter a keyword to search.");
//         }
//     });

//     // Initial population of music list (optional)
//     // populateMusicList("love");
// });


const settings = {
    async: true,
    crossDomain: true,
    url: 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f5eabd9d2cmsh66c51e16a388d9bp16b810jsn20228bfe4093',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

$.ajax(settings).done(function (response) {
    console.log(response); // Print the response data to the console
});
