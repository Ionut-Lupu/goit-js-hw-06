// Scrieți un script de control al formularului de login.
// 1.Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
// 2.La trimiterea formularului, pagina nu trebuie să se reîncarce.
// 3.Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
// 4.Dacă utilizatorul a completat toate câmpurile și a trimis formularul,
// colectați valorile câmpului într - un obiect în care numele câmpului va fi numele proprietății,
// iar valoarea câmpului va fi valoarea proprietății.Pentru a accesa elementele formularului, folosiți proprietatea elements.
// 5.Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formElements = loginForm.elements;
  const formData = {};

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.tagName === "INPUT" && element.type !== "submit") {
      formData[element.name] = element.value.trim();
    }
  }

  if (!formData.email || !formData.password) {
    alert("Please fill in all fields.");
  } else {
    console.log(formData);
    loginForm.reset();
  }
});
