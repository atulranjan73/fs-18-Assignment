const coinImage = document.querySelector(".single-crypto-details .left");
const coinDetails = document.querySelector(".single-crypto-details .right");
const cryptoChart = document.querySelector("#cryptoChart");

// console.log(window.location.href);
const currentURL = new URL(window.location.href);
// console.log(currentURL);
const params = new URLSearchParams(currentURL.search);

// console.log(params);

if (!params.has("id")) {
  window.location.href = "search.html";
} else {
  getDataFromAPI(
    `https://api.coingecko.com/api/v3/coins/${params.get(
      "id"
    )}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  ).then((response) => {
    console.log(response);
    showDetails(response);
  });

  // GET CHART DATA
  getDataFromAPI(
    `https://api.coingecko.com/api/v3/coins/${params.get(
      "id"
    )}/market_chart?vs_currency=inr&days=2`
  ).then((response) => {
    console.log(response);
    showChart(response.prices);
  });
}

function showDetails(obj) {
  const prices = document.createElement("div");
  prices.classList.add("prices");

  const ind = document.createElement("p");
  ind.innerHTML= "₹ "+obj.market_data.current_price.inr;
  const usd = document.createElement("p");
  usd.innerHTML ="$ "+ obj.market_data.current_price.usd;
  const eur = document.createElement("p");
  eur.innerHTML ="€ "+ obj.market_data.current_price.eur;
  const btc = document.createElement("p");
  btc.innerHTML = "₿ "+ obj.market_data.current_price.btc;

  
  prices.append(ind,usd,eur,btc);
  coinDetails.append(prices);
  const img = document.createElement("img");
  img.src = obj.image.large;
  coinImage.append(img);

  const name = document.createElement("h3");
  name.innerText = obj.name + " ( " + obj.symbol + " ) ";

  const desc = document.createElement("p");
  desc.innerHTML = obj.description.en;

  coinDetails.append(name, desc);
}

function showChart(data) {
  const timesstamps = [];
  const priceInINR = [];

  data.forEach((dt) => {
    const date_obj = new Date(dt[0]);

    let hours = date_obj.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = date_obj.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    timesstamps.push(`${hours}:${minutes}`);
    priceInINR.push(dt[1]);
  });

 const ctx = document.getElementById("cryptoChart").getContext("2d");

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: timesstamps,
      datasets: [
        {
          label: "Price (in INR)",
          data: priceInINR,
          borderColor: '#00FF00',
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

async function getDataFromAPI(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}