// Funktion zum Erstellen der Kopfzeile
function createHeader() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header'); // Füge eine CSS-Klasse hinzu, um die Kopfzeile zu gestalten
  
    // Array mit Links und ihren Texten
    const links = [
      { text: 'Über mich', url: 'About/index.html' },
      { text: 'Projekte', url: 'Projects/index.html' },
      { text: 'Weihnachtswebseite', url: 'Weihnachtswebseite/Index.html' },
      { text: 'Archivierte Seiten', url: 'Archiv/index.html' }
    ];
  
    // Erstelle Links und füge sie zur Kopfzeile hinzu
    links.forEach(linkInfo => {
      const link = document.createElement('a');
      link.href = linkInfo.url;
      link.classList.add('button'); // Füge eine CSS-Klasse für den Button hinzu
      link.textContent = linkInfo.text;
      headerDiv.appendChild(link);
    });
  
    // Füge das Header-Div zum Dokument hinzu
    const headerContainer = document.getElementById('header');
    headerContainer.appendChild(headerDiv);
  }
  
  // Rufe die Funktion auf, um die Kopfzeile zu erstellen
  createHeader();
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZN5SJZ79ZD');

var n = localStorage.getItem('on_load_counter');

if (n === null) {
  n = 0;
}
n++;

