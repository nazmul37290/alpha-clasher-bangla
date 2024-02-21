function play() {
  hideElementById("home-page");
  hideElementById("finalScoreCard");
  showElementById("playground");
  const lifeElement = document.getElementById("life");
  lifeElement.innerText = 10;
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = 0;
  continuePlay();
  audio.setAttribute("src", "wrong.mp3");
}

function continuePlay() {
  // array of letters
  const bornomala = "কখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়অআইঈউঊএঐওঔ";
  const letter = bornomala.split("");
  // testing
  const upperLetterString = "য়ঢফঠছঝঞঘঢ়ঊঈঅভখথধঐরণষশ";
  const upperLetterArray = upperLetterString.split("");

  // testing
  //   generating random number for random letters
  const randomNumber = Math.round(Math.random() * 44);

  //   generated random letter
  const randomLetter = letter[randomNumber];

  //   displayed random letter to display board
  const displayBoard = document.getElementById("display");
  displayBoard.innerText = randomLetter;
  setBackgroundColor(displayBoard.innerText);
  // hiding small letters when capital letter appears
  if (upperLetterArray.includes(randomLetter)) {
    hideElementsByClassName("smallLetter");
    showElementsByClassName("capitalLetter");
    setBackgroundColor("shift");
  }
  // hiding capital letters when small letter appears
  else {
    hideElementsByClassName("capitalLetter");
    showElementsByClassName("smallLetter");
  }
}

// key up event handler for keyboard press
document.addEventListener("keyup", function (event) {
  const displayedLetter = document.getElementById("display").innerText;
  const pressedKey = document.getElementById(event.key);

  if (pressedKey.classList.contains(displayedLetter)) {
    removeBackgroundColor(displayedLetter);
    removeBackgroundColor("shift");
    continuePlay();

    // get the score board
    const scoreBoard = document.getElementById("score");
    const score = parseInt(scoreBoard.innerText);
    const newScore = score + 1;
    // set the score to the board
    scoreBoard.innerText = newScore;
  } else if (pressedKey.classList.contains("shift")) {
    const lifeBoard = document.getElementById("life");
    const life = lifeBoard.innerText;
    const newLife = life;

    lifeBoard.innerText = newLife;
  } else {
    audio.play();
    audio.playbackRate = 2;
    const lifeBoard = document.getElementById("life");
    const life = lifeBoard.innerText;
    const newLife = life - 1;

    lifeBoard.innerText = newLife;

    if (newLife === 0) {
      const lastLetter = document.getElementById("display").innerText;
      removeBackgroundColor(lastLetter);
      removeBackgroundColor("shift");
      audio.setAttribute("src", "");
      gameOver();
    }
  }
});

function gameOver() {
  hideElementById("playground");
  showElementById("finalScoreCard");
  const finalScore = document.getElementById("score").innerText;
  const finalScoreBoard = document.getElementById("finalScore");
  finalScoreBoard.innerText = finalScore;
}

// utility functions
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function hideElementsByClassName(elementClass) {
  const elements = document.getElementsByClassName(elementClass);
  for (const element of elements) {
    element.classList.add("hidden");
  }
}
function showElementsByClassName(elementClass) {
  const elements = document.getElementsByClassName(elementClass);
  for (const element of elements) {
    element.classList.remove("hidden");
  }
}

function setBackgroundColor(elementClass) {
  const keys = document.getElementsByClassName(elementClass);
  for (const key of keys) {
    key.classList.add("bg-green-800", "text-white");
  }
}
function removeBackgroundColor(elementClass) {
  const keys = document.getElementsByClassName(elementClass);
  for (const key of keys) {
    key.classList.remove("bg-green-800", "text-white");
  }
}

// class name a dot ko ante hobe

// user jeta press korce sei key er moddhe jodi displayed class thake taile continue hobe

// sob key ke same nam er id diye jodi access kori tarpor setar vetore class ache naki check dei
