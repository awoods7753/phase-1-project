//Initial function to fetch data from db.json for the first five characters
let fetchCharacters = () => {
    fetch('http://localhost:3000/characters/?_limit=5&_page=1')
    .then(resp=>resp.json())
    .then(characters => {
        console.log("characters", characters)
        characters.forEach((character) => {
            addAllCharacters(character)
        })
    })
}
fetchCharacters();

//Adding the ability for the vote button to increment the db.json votes #
let clicked = false;
let addAVote = (characters) => {
    if(!clicked) {
    clicked=true;
    fetch(`http://localhost:3000/characters/${characters.id}`, {
        method: "PATCH",
        headers: 
             {
                 "Content-Type":"application/json",
                 Accept: "application/json"
             },
        body: JSON.stringify({
           votes: characters.votes++
        })
    
    })
    .then(resp => resp.json())
    .then(votes => console.log(votes))
    alert('Thank you for voting!')
} else {
    alert('You already voted!')
}
}


//function to add the first five characters and their information to the character card on the DOM
function addAllCharacters(characters) {
    let characterContainer = document.getElementById('characters-container')
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
    likebutton.addEventListener('click', () => addAVote(characters))

    let votes = document.createElement('h5')
    votes.innerText = `Votes: ${characters.votes}`
    votes.id = "votes-id"

    card.append(name, img, description, likebutton, votes)
    characterContainer.append(card)
}

//fetches data from db.json for the second set of five characters
let fetchCharactersTwo = () => {
    fetch('http://localhost:3000/characters?_start=5&_end=10')
    .then(resp=>resp.json())
    .then(characters => {
        console.log("characters", characters)
        characters.forEach((character) => {
            addAllCharactersTwo(character)
        })
    })
}
fetchCharactersTwo();

//Appends the second set of characters to the DOM, which are hidden in HTML
function addAllCharactersTwo(characters) {
    let characterContainer = document.getElementById('characters-container-two')
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
    likebutton.addEventListener('click', () => addAVote(characters))

    let votes = document.createElement('h5')
    votes.innerText = `Votes: ${characters.votes}`
    votes.id = "votes-id"

    card.append(name, img, description, likebutton, votes)
    characterContainer.append(card)
}



//next button which hides the first five appended characters and shows the second set, vice-versa on click
document.getElementById('next-button').addEventListener('click', (e) => {
    e.preventDefault()
        document.getElementById('characters-container').classList.toggle("classname")
        document.getElementById('characters-container-two').classList.toggle("classname")
})

//submit function on the form with an alert and reset
let submitButton = document.querySelector('#form')
submitButton.addEventListener('submit', (event) => {
    event.preventDefault()
    alert("Thank you for your submission!")
    submitButton.reset();
})

//function to append highest voted character to the DOM on button click
function showHighestVotedCharacter(characters) {
    let highestVotedContainer = document.getElementById('highest-voted')
    let card = document.createElement('div')
    let votedCharacterImage = document.createElement('img')
    votedCharacterImage.src = characters.image

    card.append(votedCharacterImage)
    highestVotedContainer.append(card)
}

//descends characters by votes with fetch, then displays the first character on the list to
//get the highest voted character
let fetchCharactersThree = () => {
    fetch('http://localhost:3000/characters?_sort=votes&_order=desc')
    .then(resp=>resp.json())
    .then(characters => showHighestVotedCharacter(characters[0])
)}

fetchCharactersThree();

//click event for the highest voted button to unhide the highest character
document.getElementById('highest-voted-button').addEventListener('click', (e) => {
    e.preventDefault()
        document.getElementById('highest-voted').classList.toggle("classname")
})
