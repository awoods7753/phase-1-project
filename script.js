//Initial function to fetch data from db.json for the characters
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

//function to add the characters and their information to the character card on the DOM
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
    likebutton.addEventListener('click', (e) => addAVote(e))

    let votes = document.createElement('h5')
    votes.innerText = `Votes: ${characters.votes}`
    votes.id = "votes-id"

    card.append(name, img, description, likebutton, votes)
    characterContainer.append(card)
}
//Adding the ability for the vote button to increment the db.json votes #

// let addAVote = (characters) => {
//     console.log(characters)
//     fetch('http://localhost:3000/characters', {
//         method: "PATCH",
//         headers: 
//              {
//                  "Content-Type":"application/json",
//                  Accept: "application/json"
//              },
//         body: JSON.stringify(
//             characters.votes
//         )
//     })
//     .then(resp => resp.json())
//     .then(votes => {
//         incrementVotes(votes)
//     })
// }

// function incrementVotes(characters) {
//     let votesNumber = characters.votes
//     let votesContainer = document.getElementById('votes-id')
//     votesContainer.value = votesNumber
//     votesNumber++
// }

//Function to add the submit form to the bottom-reel of the website