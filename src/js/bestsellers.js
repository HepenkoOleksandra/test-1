import backendAPI from "./Services/api";

export const renderBestBooks = async () => {
    const bestBooksList = document.querySelector('.bestsellers-list');
    try {
        const bestSellersData = await backendAPI.getBestSellers();
        const markup = bestSellersData.map(({ books, list_name }) => {
            return `<li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${list_name}</h2>
                <ul class="bestsellers-books-list"> 
                    ${books.map(({ book_image, title, author }) => { // if(){}else{}
                        return `<li class="bestsellers-books-item">
                            <img class="bestsellers-books-img" src='${book_image}' alt="" />
                            <h3 class="bestsellers-book-title">${title}</h3>
                            <p class="bestsellers-book-author">${author}</p>
                        </li>`}).join('\n')}
                </ul>
                <button class="bestsellers-btn" type="button">See more</button>
            </li>`;        
        }).join('\n');
        
        bestBooksList.insertAdjacentHTML('beforeend', markup);

    } catch (error) {
        console.error("Error fetching best sellers:", error);
    }
}

renderBestBooks();

// ==================================================================

const bestsellersBtn = document.querySelector('.bestsellers-btn');
const categoryTitle = document.querySelector('.bestsellers-category-title');

bestsellersBtn.addEventListener('click', async (e) => {
    const category = categoryTitle.textContent;  
  const result = await backendAPI.getSelectedCategory(category);
  renderCategoryPage(result, category);
});

// =================================================================

const bestsellersList = document.querySelector('.bestsellers-list');

bestsellersList.addEventListener('click', async (e) => {
     e.preventDefault();

     if (e.target.nodeName !== 'IMG') {
    return;
    }
    // викликаємо модальне вікно
});