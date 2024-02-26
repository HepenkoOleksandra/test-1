import backendAPI from "./Services/api";
import { bookTemplate, renderTitle } from "./Services/helpers";
import { renderCategoryPage } from "./categorypage";

// ==================================================================================================
// Рендер сторінки
// ======================================================================================================

export function renderBestBooks(bestBooks) {
  const bestBooksContainer = document.querySelector('.bestsellers-container');
  bestBooksContainer.innerHTML = '';
  renderTitle('.bestsellers-container', 'Best Sellers Books');
  bestBooksContainer.insertAdjacentHTML('beforeend', `<ul class="bestsellers-list"></ul>`);
  const bestBooksList = document.querySelector('.bestsellers-list');
  // ========pull
    const markup = bestBooks
    .map(({ books, list_name }) => {
      return `<li class="bestsellers-item">
      <h2 class="bestsellers-category-title">${list_name}</h2>
      <ul class="bestsellers-books-list">${
        books.map(({ title, author, book_image, _id }) => {
          if (books.length === 0) {
            return `<p class="category-empty">Sorry, no books were found for the given category!</p>`;
          }else{
            return bookTemplate({ title, author, book_image, _id });
          }
        }).join('\n')}
        </ul>
        <button class="bestsellers-btn" type="button" data-category="${list_name}">See more</button>
      </li>`;
    }).join('\n');
// =========================
  bestBooksList.insertAdjacentHTML('beforeend', markup);

  const bestsellersBtn = document.querySelector('.bestsellers-list');
  bestsellersBtn.addEventListener('click', onButtonClick);
}

// ========================================================================
// Слухач на кнопку
// ======================================================================== 
async function onButtonClick(e) {
  
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  
  let category = e.target.dataset.category;;
   
  const openCategory = await backendAPI.getSelectedCategory(category);
    
  renderCategoryPage(openCategory, category);
};


// ==================================================================================
// Тестовий код
// ==============================================================================
export async function testBestsellersBooks() {
    try {
        const bestSellersData = await backendAPI.getBestSellers();
      renderBestBooks(bestSellersData);
     
    } catch (error) {
        console.error("Error fetching best sellers:", error);
    }
}
testBestsellersBooks();

// =======================================================================
// Слухач для модалки
// =======================================================================
// const bestsellersList = document.querySelector('.bestsellers-list');

// bestsellersList.addEventListener('click', async (e) => {
//      e.preventDefault();

//      if (e.target.nodeName !== 'IMG') {
//     return;
//     }
//     // викликаємо модальне вікно
// });

// =========================================================================

// const handleSeeMoreClick = async (e) => {
//     const category = e.target.getAttribute('data-category');

//     const openCategory = await backendAPI.getSelectedCategory(category);


//     const markupCategory = openCategory.map(({ books, list_name }) => {
//       return `<li class="bestsellers-item">
//         <h2 class="bestsellers-category-title">${list_name}</h2>
//         <ul class="bestsellers-books-list"> 
//           ${books.map(({ book_image, title, author }) => {
//             return `<li class="bestsellers-books-item">
//                       <img class="bestsellers-books-img" src='${book_image}' alt="" />
//                       <h3 class="bestsellers-book-title">${title}</h3>
//                       <p class="bestsellers-book-author">${author}</p>
//                     </li>`;
//           }).join('\n')}
//         </ul>
//         <button class="bestsellers-btn" type="button" data-category="${list_name}">See more</button>
//       </li>`;
//     }).join('\n');


//     document.querySelector('.bestsellers-list').insertAdjacentHTML('beforeend', markupCategory);
// };

// ========================================================================
