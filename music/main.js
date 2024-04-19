import books from './books.json'

const items = document.getElementById('items')

let itemsHtml = ``

books.forEach(book => {
    itemsHtml += `
    <article>
      <img src="https://placehold.co/400" alt="cover">
      <h3>${ book.name }</h3>
      <p>${ book.writter }</p>
    </article>
    `
})

items.innerHTML = itemsHtml