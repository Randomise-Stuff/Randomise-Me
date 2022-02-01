const axios = require("axios");

function generateRandomColor() {
  let color = "#";
  let codes = "0123456789ABCDEF";

  for (var i = 0; i < 6; i++) {
    color += codes[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generateDogImage() {
  let url = "https://some-random-api.ml/animal/dog";

  axios
    .get(url)
    .then((res) => {
      let image = res.data.image;
      return image;
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function generateCatImage() {
  let url = "https://some-random-api.ml/animal/cat";

  axios
    .get(url)
    .then((res) => {
      let image = res.data.image;
      return image;
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function generateDogFact() {
  let url = "https://some-random-api.ml/animal/dog";

  axios
    .get(url)
    .then((res) => {
      let fact = res.data.fact;
      return fact;
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function generateCatFact() {
  let url = "https://some-random-api.ml/animal/cat";

  axios
    .get(url)
    .then((res) => {
      let fact = res.data.fact;
      return fact;
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

module.exports = {
  generateRandomColor,
  generateDogImage,
  generateCatImage,
  generateDogFact,
  generateCatFact,
};
