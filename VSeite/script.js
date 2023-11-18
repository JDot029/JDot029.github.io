function onButtonClick() {
  location.assign("../index.html");
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

// Füge CSS-Klassen zum Button hinzu, um ihn zu stylen
button.classList.add('schönerButton');
