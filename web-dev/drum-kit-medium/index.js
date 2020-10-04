const mapping = {
  'w': new Audio('sounds/crash.mp3'),
  'a': new Audio('sounds/kick-bass.mp3'),
  's': new Audio('sounds/snare.mp3'),
  'd': new Audio('sounds/tom-1.mp3'),
  'j': new Audio('sounds/tom-2.mp3'),
  'k': new Audio('sounds/tom-3.mp3'),
  'l': new Audio('sounds/tom-4.mp3'),
}

const functionAnimation = (key) => {
  const buttonPressed = document.querySelector(`.${key}`);
  const audioLength = mapping[key].duration*1000;
  buttonPressed.classList.toggle("pressed");
  setTimeout(() => {
    buttonPressed.classList.toggle("pressed");
  },
  audioLength);
}

document.addEventListener("keypress", (e) => {
  if(mapping[e.key] !== undefined) {
    mapping[e.key].play();
    functionAnimation(e.key);
  }
});
