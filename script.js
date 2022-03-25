let fetchCharacters = () => {
    fetch('http://localhost:3000/characters/?_limit=5&_page=1')
    .then(resp=>resp.json())
    .then(characters => {
        console.log("characters", characters)
        characters.forEach((character) => {
            addOneCharacter(character)
        })
    })
}
fetchCharacters();

function addOneCharacter(characters) {
    let characterContainer = document.querySelector('#characters-container')
    let card = document.createElement('div')
    card.id = "character-card"
    let name = document.createElement('h2')
    name.innerText = characters.name
    let img = document.createElement('img')
    img.src = characters.image
    let description = document.createElement('p')
    description.innerText = characters.description

    card.append(name, img, description)
    characterContainer.append(card)
}
