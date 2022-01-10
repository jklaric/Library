let books = [];

const bookCardElement = document.querySelector(".main__wrapper");
bookCardElement.innerHTML = "";

function addNewBook() {
  const titleValue = document.querySelector(".main__add--title");
  const authorValue = document.querySelector(".main__add--author");
  const genreValue = document.querySelector(".main__add--genre");
  const pageCountValue = document.querySelector(".main__add--pages");

  const newBook = {
    title: titleValue.value,
    author: authorValue.value,
    genre: genreValue.value,
    pagecount: pageCountValue.value,
  };

  books.push(newBook);

  const bookElement =
    '<section class="main__card">' +
    '<a class="main__card--link" href="">' +
    '<p class="main__card--title">' +
    newBook.title +
    "</p>" +
    '<p class="main__card--by">by:</p>' +
    '<p class="main__card--author">' +
    newBook.author +
    "</p>" +
    '<p class="main__card--genre">' +
    newBook.genre +
    "</p>" +
    '<p class="main__card--length">' +
    newBook.pagecount +
    "</p>" +
    '<img class="main__card--cover" src="./assets/images/LibraryIcon.png" alt="">' +
    "</a>" +
    "</section>";

  bookCardElement.innerHTML = bookCardElement.innerHTML + bookElement;
}
