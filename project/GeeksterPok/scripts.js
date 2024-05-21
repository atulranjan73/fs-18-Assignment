const pokemonDiv = document.getElementById('pokemon');
const nameSearch  = document.querySelector('#name');
const typeFilter = document.querySelector('.type');

const reset = document.querySelector("#reset");

let pokemonArray = [];

let uniqueTypes = new Set();

const pokeQueryParams = new URLSearchParams(window.location.search);
const typeParams = new URLSearchParams(window.location.search);
const typeSearch = typeParams.get('type');

const fetchPokemon = () => {
    const promises = [];
    for(let i=1; i<= 351; i++){
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json()))
    }

    Promise.all(promises)
    .then(allPokemon =>{
        const pikapika = allPokemon.map(pokemon=>({
            frontImage: pokemon.sprites.other.dream_world.front_default,
            pokemon_id:pokemon.id,
            name:pokemon.name,
            type:pokemon.types[0].type.name,
            abilities:pokemon.abilities.map(ability=>ability.ability.name).join(', '),
            description:pokemon.species.url,
            height:pokemon.height,
            weight:pokemon.weight
        }))
        pokemonArray = pikapika;
        createPokemonCards(pikapika);
    })
    .then(getTypes);
}

fetchPokemon()

nameSearch.addEventListener('input',(event)=>{
    const value = nameSearch.value;
    const filterPokemon = pokemonArray.filter(pokemon => pokemon.name.includes(value.toLowerCase()));
    clearPokemon();
    createPokemonCards(filterPokemon);
})

function clearPokemon(){
    let section = document.querySelector('#pokemon');
    section.innerHTML = ''
}

function createPokemonCards(pokemons){
    let currentPokemon = pokemons;
    if(typeSearch){
        currentPokemon = pokemons.filter(pokemon => pokemon.type.includes(typeSearch.toLowerCase()))
    }
    currentPokemon.forEach(pokemon=>{
        createPokemonCard(pokemon)
    })
}

function createPokemonCard(pokemon) {
    const flipCard = document.createElement("div")
    flipCard.classList.add("flip-card")
    flipCard.id = `${pokemon.name}`
    pokemonDiv.append(flipCard)
    
    const flipCardInner = document.createElement("div")
    flipCardInner.classList.add("flip-card-inner")
    flipCardInner.id = `${pokemon.type}`
    flipCard.append(flipCardInner)

    // front of card
    const frontCard = document.createElement("div")
    frontCard.classList.add('front-pokemon-card')

    const frontImage = document.createElement('img')
    frontImage.src = `${pokemon.frontImage}`
    frontImage.classList.add("front-pokemon-image")

    const frontPokeName = document.createElement('h2')
    frontPokeName.innerHTML = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>`
    frontPokeName.classList.add("front-pokemon-name")

    const frontPokeID = document.createElement('p')
    frontPokeID.textContent = `#${pokemon.pokemon_id}`
    
    
    const frontPokeType = document.createElement('p')
    frontPokeType.textContent = `${pokemon.type.toUpperCase()}`

    frontCard.append(frontPokeID, frontImage, frontPokeName, frontPokeType)
    
    // back of card
    const backCard = document.createElement("div")
    backCard.classList.add('back-pokemon-card')


    const backPokeName = document.createElement('h2')
    backPokeName.innerHTML = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>`
    backPokeName.classList.add("back-pokemon-name")

    const abilities = document.createElement("p")
    abilities.innerHTML = `<p><strong>Abilities:</strong><br>${pokemon.abilities}<p>`

    const height = document.createElement("p")
    height.innerHTML = `<p><strong>Height:</strong><br>${pokemon.height}<p>`

    const weight = document.createElement("p")
    weight.innerHTML = `<p><strong>Weight:</strong><br>${pokemon.weight}<p>`

    backCard.append( backPokeName, abilities,height,weight)
    flipCardInner.append(frontCard, backCard);
    uniqueTypes.add(pokemon.type);
}

function getTypes(){
    uniqueTypes.forEach(type=>{
        const typeOption = document.createElement('option');
        typeOption.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        typeOption.value = type;
        typeFilter.append(typeOption)
    })
}

reset.addEventListener("click",()=>{
    window.location.reload();
    
})