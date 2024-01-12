// Scrieți un script care:

// Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
// Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
// Ca rezultat, în consolă vor fi afișate astfel de mesaje:

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categories:", categoryItems.length);
categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("ul li");

  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements.length);
});
