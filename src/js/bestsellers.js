import  backendAPI from "./Services/api";

const categoriesBooksList = document.querySelector('.categories-list');

const bestSellers = await backendAPI.getBestSellers();

function renderBooks(elements) {
    console.log(elements);
    const markup = elements.map(({ books, list_name }) => {
       return `<li class="categories-item">${list_name}
        <ul class="categories-books-list"> 
        ${books.map(({ book_image, title, author }) => {
            return `<li class="categories-books-item">
             <img class="categories-books-img" src='${book_image}' alt="${title}"  width="335"
              height="485"/>
             <h3 class="categories-book-title">${title}</h3>
              <p class="categories-book-author">${author}</p>
            </li>`}).join('\n')}
            </ul >
            </li >
            <button class="categories-btn" type="button">See more</button>`        
        }).join('\n');

    categoriesBooksList.insertAdjacentHTML('beforeend', markup);
}

renderBooks(bestSellers)