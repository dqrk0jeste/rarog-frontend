import { getUrlParam } from '/utils/url'
import { API, generateImageId } from '/utils/api'

async function fetchMovie() {
  const id = getUrlParam('id')
  const res = await fetch(API + `/movie/${ id }`)
  const movie = await res.json()

  const tape = document.getElementById('tape')

  const imageUrl = movie.media.imageId ? generateImageId(movie.media.imageId) : '/no-image.svg'

  tape.innerHTML = `
    <img src="${ imageUrl }" alt="cover" class="cover">
    <div class="info">
      <h1>${ movie.media.name || '/' }</h1>
      <h2>${ movie.director || '/'  }</h2>
      <p>${ movie.media.releaseYear || '/'  }</p>
      <p>${ movie.media.genre || '/'  }</p>
    </div>
    <img class="pin" src="/info.svg" alt="info">
  `
}
fetchMovie()

const searchParamsButtons = document.querySelectorAll('.search-params button')
searchParamsButtons.forEach(button => {
  button.addEventListener('click', () => {
    searchParamsButtons.forEach(b => {
      b.classList.remove('active')
    })
    button.classList.add('active')
  })
})

const favouriteButton = document.getElementById('favourite')
const whiteHearth = document.getElementById('white-hearth')
const redHearth = document.getElementById('red-hearth')
favouriteButton.addEventListener('click', () => {
  // here should go the logic for sending the new state to server 
  whiteHearth.classList.toggle('active') 
  redHearth.classList.toggle('active')
})
