const button = document.querySelectorAll(".drum");
button.forEach(function (bnt) {
  //click on box through screen
  bnt.addEventListener("click", function () {
    const buttonHtml = this.innerHTML;
    MakeSound(buttonHtml);
    buttonAnimatiom(buttonHtml);
  });
});

//key board key stocks
document.addEventListener("keydown", function (event) {
  MakeSound(event.key);
  buttonAnimatiom(event.key);
});

// sound
function MakeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonHtml);
  }
}

function buttonAnimatiom(currentKey) {
  const activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}
