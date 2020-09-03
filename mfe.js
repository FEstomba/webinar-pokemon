let count = 1
function pokemones() {
    let pokemonContainer = document.getElementById("pokemon")
    pokemonContainer.innerHTML = pokemonContainer.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}

let prev = document.getElementById('anterior')
let next = document.getElementById('siguiente')

prev.onclick = function () {
    if (count > 1) {
        count = count - 1
        pokemones()
    }
}

next.onclick = function () {
    if (count < 649) {
        count = count + 1
        pokemones()
    }
}
pokemones()


