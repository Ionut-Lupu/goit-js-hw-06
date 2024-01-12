function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Scrieți un script pentru crearea și ștergerea unei colecții de elemente. 
// Utilizatorul introduce numărul de elemente în input și dă click pe butonul Create, după care colecția este afișată în pagină.
// Când se dă click pe butonul Destroy, colecția de elemente va fi ștearsă.

// Creați o funcție createBoxes(amount), care ia ca parametru un număr. 
// Funcția va crea atâtea < div > -uri câte sunt specificate în amount și le va adăuga la div#boxes.

// 1.Dimensiunile primului <div> vor fi 30px pe 30px.
// 2.Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat și mai înalt decât cel anterior.
// 3.Toate elementele trebuie să aibă o culoare de fundal aleatoare în format HEX. 
//   Folosiți funcția getRandomHexColor deja existentă pentru a obține o culoare.

// Scrieți o funcție destroyBoxes() care va șterge conținutul div#boxes, ștergând astfel toate elementele create.

function createBoxes(amount) {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';

      let size = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.classList.add('box');

        boxesContainer.appendChild(box);

        size += 10;
      }
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';
    }

    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const input = document.querySelector('input');

    createButton.addEventListener('click', function () {
      const amount = input.value;
      createBoxes(amount);
    });

    destroyButton.addEventListener('click', destroyBoxes);