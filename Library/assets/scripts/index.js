const newTitle = {
  title: "IIIIII",
  author: "F. M. Dostojevski",
  genre: "psychological novel",
  length: 576,
};

let titles = [];

titleCardElement = document.querySelector(".main__card");
titleCardElement.innerHTML = "";

const titleElement =
  '<a class="main__card--link" href="">' +
  '<p class="main__card--title">' +
  newTitle.title +
  "</p>" +
  '<p class="main__card--by">by:</p>' +
  '<p class="main__card--author">' +
  newTitle.author +
  "</p>" +
  '<p class="main__card--genre">' +
  newTitle.genre +
  "</p>" +
  '<p class="main__card--length">' +
  newTitle.length +
  "</p>" +
  '<img class="main__card--cover" src="./assets/images/LibraryIcon.png" alt="">' +
  "</a>";

titleCardElement.innerHTML = titleCardElement.innerHTML + titleElement;
