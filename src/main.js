const categoriesList = document.querySelector('.categories-list');
console.log(categoriesList);



function getGallery() {
    
    return fetch('https://books-backend.p.goit.global/books/top-books')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}
getGallery().then((data) => {
    console.log(data);

    const categories1 = data.map(({books, list_name}) => {
    return `<li class="categories-item">
      <ul class="books-list">${list_name}</ul>
    </li>`
    }).join('\n');
    
    categoriesList.insertAdjacentHTML('beforeend', categories1);

    const booksList = document.querySelectorAll('.books-list');
    console.log(booksList);

    // const categories = data.map(({books, list_name}) => { 
    //     return books.map((book) => {
    //         return `<li class="categories-item">
    //   <ul class="books-list">${list_name}
    //     <li class="book-item">
    //         <img class="categories-img" src='${ book.book_image }' alt="" />
    //         <h3 class="categories-book-title">${book.title}</h3>
    //         <p class="categories-book-author">${book.author}</p></li>
    //     <li class="book-item"><img class="categories-img" src='${ book.book_image }' alt="" />
    //         <h3 class="categories-book-title">${book.title[0]}</h3>
    //         <p class="categories-book-author">${book.author[0]}</p></li></li>
    //     <li class="book-item"><img class="categories-img" src='${ book.book_image }' alt="" />
    //         <h3 class="categories-book-title">${book.title[0]}</h3>
    //         <p class="categories-book-author">${book.author[0]}</p></li></li>
    //     <li class="book-item"><img class="categories-img" src='${ book.book_image }' alt="" />
    //         <h3 class="categories-book-title">${book.title[0]}</h3>
    //         <p class="categories-book-author">${book.author[0]}</p></li></li>
    //     <li class="book-item"><img class="categories-img" src='${ book.book_image }' alt="" />
    //         <h3 class="categories-book-title">${book.title[0]}</h3>
    //         <p class="categories-book-author">${book.author[0]}</p></li></li>
    //   </ul>
    // </li>`});
    // }).join('\n');
            
            
        //     `<li class="categories-item">${list_name}
        // <img class="categories-img" src='${ book.book_image }' alt="" />
        //      <h3 class="categories-book-title">${book.title}</h3>
        //       <p class="categories-book-author">${book.author}</p>
        //     </li>`
        
    
    // categoriesList.insertAdjacentHTML('beforeend', categories);
    
    console.log(categories1);
}).catch((error) => { console.log(error); })

// function galleryTemplate(element) {
//     `<li class="categories-item">
//             <img class="categories-img" src="" alt="" />
//             <h3 class="categories-book-title"></h3>
//             <p class="categories-book-author"></p>
//           </li>`
// }

function renderGallery(elements) {
    const categories = data.map((categori) => { 
        return categori.books.map((book)=>{return `<li class="categories-item">${book.list_name}
        <img class="categories-img" src='${ book.book_image }' alt="" />
             <h3 class="categories-book-title">${book.title}</h3>
              <p class="categories-book-author">${book.author}</p>
            </li>`});
    }).join('\n');
       
//     refs.galleryList.insertAdjacentHTML('beforeend', markup);
    
}







// function setCardLayout() {
//     const screenWidth = window.innerWidth;

//     if (screenWidth < 768) {
//         // Mobile version: display one card
//         displayCards(1);
//     } else {
//         // Desktop version: display five cards
//         displayCards(5);
//     }
// }

// function displayCards(numCards) {
//     // Code to display the specified number of cards
//     console.log(`Displaying ${numCards} cards`);
// }

// // Call setCardLayout() initially and whenever the window is resized
// setCardLayout();
// window.addEventListener('resize', setCardLayout);