

const jokePara = document.getElementById("jokePara");

async function getDataFromAPI() {
    let config = {
        headers:{
            Accept : "application/json",
        },
    };
    let a = await fetch("https://icanhazdadjoke.com" , config)
    let b = await a.json();
    console.log(b.joke);
    jokePara.innerText = b.joke+"🤪";

}
getDataFromAPI();

document.getElementById("jokeBtn").addEventListener( ('click') , getDataFromAPI);

