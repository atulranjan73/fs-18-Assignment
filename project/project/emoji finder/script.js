const resultsDiv = document.querySelector(".results");

window.addEventListener("load", () => {
  createList(emojiList)
  attachListener();
} );

function createList(inputList) {
  inputList.forEach((emoji) => {
    const parent = document.createElement("div");
    parent.classList.add("parent");

    const em = document.createElement("span");
    em.innerText = emoji.emoji;
    parent.append(em);

    const alias = document.createElement("span");
    const newAlias = emoji.aliases.map((alias) => alias.replaceAll("_", " "));
    alias.innerText = newAlias.join();
    parent.append(alias);

    const desc = document.createElement("span");
    desc.innerText = emoji.description;
    parent.append(desc);

    resultsDiv.append(parent);
  });
}

function attachListener() {
  const input = document.querySelector("input");

  input.addEventListener("keyup", filterEmojis);
}

function filterEmojis(e) {
  const keyword = e.target.value;

  const filteredData = emojiList.filter((emoji) => {
    if (emoji.description.includes(keyword)) return emoji;
    else if (emoji.category.includes(keyword)) return emoji;
    else if (emoji.aliases.includes(keyword)) return emoji;
    else if (emoji.tags.includes(keyword)) return emoji;
  });

  //resetting previous data in the div
  resultsDiv.innerText = "";
  createList(filteredData)
}
