function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Scrieți un script care schimbă culorile de fundal al elementului <body>,
// prin stiluri inline,
// atunci când se face click pe button.change - color și afișați valoarea culorii în span.color.
// Pentru a genera o culoare aleatorie, folosiți getRandomHexColor.

const body = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
