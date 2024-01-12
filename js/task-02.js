const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Scrieți un script care pentru fiecare element al matricei ingredients:

// Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().
// Adăugați numele ingredientului ca conținut text.
// Adăugați clasa item la element.
// Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  ingredientsList.appendChild(liElement);
});
