addEventListener("load", function() {
    // Inicializar la primera palabra
    changeWordWithOpacityEffect();
    // Obtenemos el elemento #text-explain y todas las tarjetas .services-card
    const textExplain = document.getElementById('text-explain');
    const servicesCards = document.querySelectorAll('.services-card');

    // Agregamos el evento 'mouseenter' a cada tarjeta
    servicesCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Al hacer hover, actualizamos el contenido de #text-explain con el texto del atributo data-text
            textExplain.textContent = card.getAttribute('data-text');
        });
    });
}, false);

const wordsArray = ['Nuria Liaño', "profe", "sysadmin", "web developer", "de Cantabria", "metalera"];
const wordElement = document.getElementById("initial-text-change");
let currentIndex = 0;

function changeWordWithOpacityEffect() {
  document.getElementById("initial-text-change").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("initial-text-change").textContent = wordsArray[currentIndex];
    currentIndex = (currentIndex + 1) % wordsArray.length;
    document.getElementById("initial-text-change").style.opacity = 1;
  }, 500); // Tiempo de transición (ms)
}
// Cambiar la palabra cada cierto tiempo (por ejemplo, cada 3 segundos)
setInterval(changeWordWithOpacityEffect, 10000);
function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    const menuIconBars = document.querySelectorAll('.bar');
  
    if (menuItems.style.display === 'block') {
      menuItems.style.display = 'none';
      menuIconBars.forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
      });
    } else {
      menuItems.style.display = 'block';
      menuIconBars.forEach((bar, index) => {
        if (index === 0 || index === 1) {
          bar.style.transform = `translateY(${index === 0 ? 7 : 0}px) rotate(${index === 0 ? 45 : -45}deg)`;
        } else {
          bar.style.opacity = '0';
        }
      });
    }
  }


