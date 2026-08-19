const productCards = document.querySelectorAll(".card");
const changeColorAllCardButton = document.querySelector("#change-color-all-card");
const greenColorHash = 'rgb(0, 255, 187)';
const blueColorHash = 'rgb(0, 229, 255)';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


const firstProductCard = document.querySelector(".card");
const changeColorFirstCardButton = document.querySelector("#change-color-first-card");

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})


const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)
  

function openGoogle() {
  const answer = confirm('вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('Дз №6'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

const mainTitle = document.querySelector('.title');

mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

const backgroundBody = document.querySelector(".background-body");
const changeColorBackgroundButton = document.querySelector(".change-color-background");

changeColorBackgroundButton.addEventListener('click', () => {
  backgroundBody.classList.toggle('background-body-active');
});
