// Contorul este format dintr - un tag span și două butoane care, atunci când sunt apăsate, ar trebui să - și mărească sau scadă valoarea cu unu.
// Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
// Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
// Actualizați interfața cu noua valoare a variabilei counterValue.

let counterValue = 0;
const valueSpan = document.getElementById("value");

const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");

incrementButton.addEventListener("click", function () {
  counterValue++;
  valueSpan.textContent = counterValue;
});

decrementButton.addEventListener("click", function () {
  counterValue--;
  valueSpan.textContent = counterValue;
});
