

let [randomNumber1, randomNumber2] = [0, 0];
while(randomNumber1 === randomNumber2) {
  randomNumber1 = Math.floor(Math.random()*5)+1;
  randomNumber2 = Math.floor(Math.random()*5)+1;
}

const dice1Url = `images/dice${randomNumber1}.png`;
const dice2Url = `images/dice${randomNumber2}.png`;


const item1 = document.querySelector('.img1');
const item2 = document.querySelector('.img2');


item1.setAttribute("src", dice1Url);
item2.setAttribute("src", dice2Url);

const titleElement = document.querySelector('.container h1');
titleElement.innerHTML = `Player ${randomNumber1 > randomNumber2 ? `1` : `2`} Wins`;
