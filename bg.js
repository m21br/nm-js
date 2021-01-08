const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  document.body.style.background = `url('images/${
    imgNumber + 1
  }.jpg') no-repeat center center fixed`;
  // const image = new Image();
  // image.src = `images/${imgNumber + 1}.jpg`;
  // image.classList.add("bgImage");
  // body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
