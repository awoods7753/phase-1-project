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
    let name = document.createElement('h1')
    name.innerText = characters.name
    let img = document.createElement('img')
    img.src = characters.image
    let description = document.createElement('h4')
    description.innerText = `Bio: ${characters.description}`
    let likebutton = document.createElement('button')
    likebutton.innerHTML = 'Vote! By Order of the Peaky Blinders!'
    likebutton.id = "like-button"

    card.append(name, img, description, likebutton)
    characterContainer.append(card)
}
