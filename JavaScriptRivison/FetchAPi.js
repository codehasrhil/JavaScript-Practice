// fetch = function used for making HTTP requests to fetch resources.

fetchData()
async function fetchData() {
    try{

        const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
        console.log(pokemonName)


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonImage = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonspirt")
        const pokemonID = document.querySelector(".id")
        const Name = document.querySelector(".Name");
        const type = document.querySelector(".type")
        const poName = data.name
        const potype = data.types[0].type.name;
        const PoId = data.id

        Name.innerText = `Name:${poName}`;
        pokemonID.innerText = `ID:${PoId}`;
        type.innerText =`Type:${potype}`;

        

        imgElement.src = pokemonImage;
        imgElement.style.display = "block";
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
} 

