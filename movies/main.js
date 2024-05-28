import { API, generateImageId } from '/utils/api'
import { getUrlParam } from '/utils/url'

async function fetchMovies() {
  const searchParam = getUrlParam('search') || '';
  const res = await fetch(API + '/movie/?search='+searchParam)
  const movies = await res.json()

  const items = document.getElementById('items')
  let itemsHtml = ``

  movies.forEach(movie => {
    const imageUrl = movie.media.imageId ? generateImageId(movie.media.imageId) : '/no-image.svg'
    const href = generateMovieUrl(movie.id)
    itemsHtml += `
      <article>
        <a class="image" href="${ href }">
          <img src="${ imageUrl }" alt="cover">
        </a>
        <a class="text" href="${ href }">
          <h3>${ movie.media.name }</h3>
        </a>
      </article>
      `
  })

  items.innerHTML = itemsHtml
}

function generateMovieUrl(id) {
  return `/movies/single/?id=${ id }`
}

fetchMovies()

const searchInput = document.getElementById('search-input')

document.getElementById('search-button')
  .addEventListener('click', () => {
    if(searchInput.value !== '') {
      location.assign('/movies/?search='+searchInput.value)
    }
  })

document.getElementById('search-input')
  .addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && searchInput.value !== '') {
      location.assign('/movies/?search='+searchInput.value)
    }
  })
