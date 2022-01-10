const crimeAndPunishment = {
  title: "Crime and Punishment",
  author: "F. M. Dostojevski",
  genre: "psychological novel",
  length: 576,
};

titleCardElement = document.querySelector(".main__card");
titleCardElement.innerHTML = "";

const titleElement =
  '<a class="main__card--link" href="">' +
  '<p class="main__card--title">' +
  crimeAndPunishment.title +
  "</p>" +
  '<p class="main__card--by">by:</p>' +
  '<p class="main__card--author">' +
  crimeAndPunishment.author +
  "</p>" +
  '<p class="main__card--genre">' +
  crimeAndPunishment.genre +
  "</p>" +
  '<p class="main__card--length">' +
  crimeAndPunishment.length +
  "</p>" +
  '<img class="main__card--cover" src="./assets/images/LibraryIcon.png" alt="">' +
  "</a>";

titleCardElement.innerHTML = titleCardElement.innerHTML + titleElement;
