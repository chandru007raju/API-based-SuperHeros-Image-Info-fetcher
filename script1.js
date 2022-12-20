//https://superheroapi.com/api/access-token/character-id

// 10223569763528853

// https://www.superheroapi.com/api.php/10223569763528853/245

const newHeroButton = document.getElementById('newHeroButton')

const heroImageDiv = document.getElementById('heroImage')

const searchButton = document.getElementById('searchButton')

const searchInput = document.getElementById('searchInput')

const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`


const getSuperHero = (id, name) => {
  console.log(searchInput)
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.power)
      const superHero = json
      showHeroInfo(json)
      
    })
}

const getSearchSuperHero = (name) => {
  console.log(searchInput.value)
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      console.log(hero)
      // heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=200 width=200/>`
      showHeroInfo(hero)
    })
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}


const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`  

  const img= `<img src="${character.image.url}" height=200 width=200/>`
  
  const stats = Object.keys(character.powerstats).map(stat =>{
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  // console.log(stats.join(''))
  // console.log(name)
  
  heroImageDiv.innerHTML = `${name}${img}${stats}`
 
}


const randomHero = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
}

newHeroButton.onclick = () => getSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(searchInput.value)