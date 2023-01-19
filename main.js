
let dropdown = document.querySelector(".dropdown")

fetch(`https://rickandmortyapi.com/api/character`).then(response => response.json()).then(data => {
    // console.log(data.results)
    data.results.forEach(character => {
        // console.log(character)
        let tag = document.createElement("option")
        tag.innerText = character.name
        tag.value = character.id
        dropdown.append(tag)
    });
})

dropdown.addEventListener("change", (e) => {
    console.log(dropdown.value)

    fetch(`https://rickandmortyapi.com/api/character/${dropdown.value}`).then(response => response.json()).then(character => {
        console.log(character)
        let card = document.querySelector(".character-card")
        card.innerHTML = ""


        let name = document.createElement("h3")
        name.textContent = character.name
        card.append(name)

        let status = document.createElement("p")
        status.textContent = character.status
        card.append(status)

        let species = document.createElement("p")
        species.textContent = character.species
        card.append(species)

        let origin = document.createElement("p")
        origin.textContent = character.origin.name
        card.append(origin)
    })
})
