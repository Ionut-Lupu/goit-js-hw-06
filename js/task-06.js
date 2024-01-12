//Scrieți un script care,
// atunci când focalizarea este pierdută de pe un input(evenimentul blur),
// verifică dacă numărul de caractere introduse este corect.

// Numărul de caractere admis trebuie specificat în atributul data-length.
// Dacă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
// Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă ale acestui exercițiu.

const validationInput = document.getElementById("validation-input");
const expectedLength = parseInt(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", function () {
  const inputValue = validationInput.value;

  if (inputValue.length === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
