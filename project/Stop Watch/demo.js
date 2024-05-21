const URL = "https://cat-fact.herokuapp.com/facts";

const para = document.getElementById("facts");
const btn = document.getElementById("btn");

const getData = async () => {
  console.log("Getting Data .....");
  let response = await fetch(URL);
  console.log(response); // this is return JSON formate JSON stand for js object notatatin
  let data = await response.json();
  para.innerText = data[0].text;
};

btn.addEventListener("click", getData);
