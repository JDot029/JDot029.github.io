function onButtonClick() {
  location.assign("https://jdot029.github.io/");
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

// Füge CSS-Klassen zum Button hinzu, um ihn zu stylen
button.classList.add('schönerButton');
