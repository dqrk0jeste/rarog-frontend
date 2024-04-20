import { API, generateImageId } from '/utils/api'

async function fetchMovies() {
  const res = await fetch(API + '/movie/')
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

