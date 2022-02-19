const axios = require("axios");

const dogUrl = "https://some-random-api.ml/animal/dog";
const catUrl = "https://some-random-api.ml/animal/cat";
const foxUrl = "https://some-random-api.ml/animal/fox";
const pandaUrl = "https://some-random-api.ml/animal/panda";
const redPandaUrl = "https://some-random-api.ml/animal/red_panda";
const koalaUrl = "https://some-random-api.ml/animal/koala";
const raccoonUrl = "https://some-random-api.ml/animal/raccoon";
const kangarooUrl = "https://some-random-api.ml/animal/kangaroo";
const birdUrl = "https://some-random-api.ml/animal/bird";

function randomColor() {
  let color = "#";
  let codes = "0123456789ABCDEF";

  for (var i = 0; i < 6; i++) {
    color += codes[Math.floor(Math.random() * 16)];
  }

  console.log(color);
}

function randomFirstName() {
  let firstNames = [
    "John",
    "Ram",
    "Smith",
    "Steven",
    "Steve",
    "Larry",
    "Bailee",
    "Gauge",
    "Madison",
    "Karl",
    "Carl",
    "Jimmy",
    "Chandler",
    "Johnny",
    "Marcus",
    "David",
    "Ashutosh",
    "Alesh",
    "Chris",
    "Vivan",
    "Richard",
    "Issac",
    "Jacob",
    "Dominic",
    "Susan",
    "Natasha",
    "Rohan",
    "Pratibha",
    "Atharva",
    "Alex",
    "Alexander",
    "Billy",
    "Hope",
    "Tony",
    "Howard",
    "Peter",
    "George",
    "Ricky",
  ];
  let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];

  console.log(firstName);
}

function randomLastName() {
  let lastNames = [
    "Evans",
    "Potts",
    "Stark",
    "Bailey",
    "Dukes",
    "Stoinis",
    "Warner",
    "Chapman",
    "Lyon",
    "Wong",
    "Strange",
    "Parker",
    "Holland",
    "Wikkins",
    "Faulkner",
    "Henricks",
    "Brown",
    "Khan",
    "Swamy",
    "Swami",
    "Lang",
    "Thomas",
    "Williomson",
    "Boult",
    "Carey",
  ];
  let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  console.log(lastName);
}

function randomDogImage() {
  axios.default
    .get(dogUrl)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      console.error(err);
    });
}

function randomCatImage() {
  axios.default
    .get(catUrl)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      console.error(err);
    });
}

function randomFoxImage() {
  axios.default
    .get(foxUrl)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      console.error(err);
    });
}

function randomPandaImage() {
  axios.default
    .get(pandaUrl)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      console.error(err);
    });
}

function randomRedPandaImage() {
  axios.default
    .get(redPandaUrl)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      console.error(err);
    });
}

function randomKoalaImage() {
  axios.default
    .get(koalaUrl)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      console.error(err);
    });
}

function randomRaccoonImage() {
  axios.default
    .get(raccoonUrl)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      console.error(err);
    });
}

function randomKangarooImage() {
  axios.default
    .get(kangarooUrl)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      console.error(err);
    });
}

function randomBirdImage() {
  axios.default
    .get(birdUrl)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = {
  randomColor,
  randomFirstName,
  randomLastName,
  randomDogImage,
  randomCatImage,
  randomFoxImage,
  randomPandaImage,
  randomRedPandaImage,
  randomKoalaImage,
  randomRaccoonImage,
  randomKangarooImage,
  randomBirdImage,
};
