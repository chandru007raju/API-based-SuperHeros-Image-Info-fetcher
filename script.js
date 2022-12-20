//https://superheroapi.com/api/access-token/character-id

// 10223569763528853

// https://www.superheroapi.com/api.php/10223569763528853/245

const newHeroButton = document.getElementById('newHeroButton')

const heroImageDiv =document.getElementById('heroImage')

const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`


const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      heroImageDiv.innerHTML += `<img src="${json.image.url}" height=200 width=200/>`
    })
}

const randomHero = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
}

newHeroButton.onclick = () => getSuperHero(randomHero())
  

