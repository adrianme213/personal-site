
const arrayOfColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

const playAudio = (audioFile) =>  {
  audioFile.play();
}
const pauseAudio = (audioFile) =>  {
  audioFile.pause();
}


const audioLibrary = {
  "blue": new Audio(`sounds/blue.mp3`),
  "green": new Audio(`sounds/green.mp3`),
  "red": new Audio(`sounds/red.mp3`),
  "yellow": new Audio(`sounds/yellow.mp3`),
  "wrong": new Audio(`sounds/wrong.mp3`),
}

const nextSequence = () => {
  level++;
  $("#level-title").text(`Level ${level}`);
  setTimeout(1000);
  const randomNum = Math.floor(Math.random()*4);
  gamePattern.push(arrayOfColors[randomNum]);

  const divId = `#${arrayOfColors[randomNum]}`;
  const audioToPlay = audioLibrary[arrayOfColors[randomNum]];
  $(divId).fadeOut(100).fadeIn(100);
  playAudio(audioToPlay);

};


$("body").keypress((e) => {
  if(level === 0) {
    nextSequence();
  }
});

const displaySequence = () => {
  for(let ii = 0; ii < gamePattern.length; ii++) {
    const divId = `#${gamePattern[ii]}`;
    $(divId).fadeOut(100).fadeIn(100);
  }
}

$(".btn").click((e) => {
  if(level === 0) return;

  const userChosenColor = e.target.id;
  if(userChosenColor === gamePattern[userClickedPattern.length]) {
    const audioToPlay = audioLibrary[userChosenColor];
    playAudio(audioToPlay);
    $(`#${userChosenColor}`).fadeOut(100).fadeIn(100);
    userClickedPattern.push(userChosenColor);
    if(userClickedPattern.length === gamePattern.length) {
      userClickedPattern = [];
      setTimeout(nextSequence, 1*1000);
    }
  } else {
    $("#level-title").text(`You Lost at Level ${level}. \nPress any key to restart or refresh page.`);
    playAudio(audioLibrary["wrong"]);
    $("body").css("background-color", "red");
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    setTimeout(() => {
      $("body").css("background-color", "#011F3F");
    }, 1*1000);
  }


});
