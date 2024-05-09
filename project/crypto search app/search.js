const form = document.querySelector("form");
const input = document.querySelector("form input");
const searchResults = document.querySelector("#search-results");

const currentURL = new URL(window.location.href);
const searchParams = new URLSearchParams(currentURL.search);



async function getDataFromAPI(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}


if (searchParams.has("query")) {
  getDataFromAPI(
    "https://api.coingecko.com/api/v3/search?query=" + searchParams.get("query")
  ).then((response) => {
    console.log(response);
    showSearchResults(response.coins);
  })
} 


function showSearchResults(coins) {
  if(coins.length == 0){
    alert("Not Found!!!!!!!!");
    return;
  }
  coins.forEach((coin, index) => {
    const result = document.createElement("div");
    result.classList.add("result");

    const sno = document.createElement("span");
    sno.innerText = index + 1;

    const img = document.createElement("img");
    img.classList.add("coin-photo");
    img.src = coin.thumb;

    const name = document.createElement("h3");
    name.innerText = coin.name + "(" + coin.symbol +")";


    const anchor = document.createElement("a");
    anchor.classList.add("more");
    anchor.innerText = "More Info";
    anchor.href = "detail.html?id=" + coin.id;


    result.append(sno, img, name,anchor);

    searchResults.append(result);
  });
}