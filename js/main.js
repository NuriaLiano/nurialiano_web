addEventListener("load", function() {
    // Inicializar la primera palabra
    changeWordWithOpacityEffect();
    // // Obtenemos el elemento #text-explain y todas las tarjetas .services-card
    // const textExplain = document.getElementById('text-explain');
    // const servicesCards = document.querySelectorAll('.services-card');

    // // Agregamos el evento 'mouseenter' a cada tarjeta
    // servicesCards.forEach(card => {
    //     card.addEventListener('mouseenter', () => {
    //         // Al hacer hover, actualizamos el contenido de #text-explain con el texto del atributo data-text
    //         textExplain.textContent = card.getAttribute('data-text');
    //     });
    // });
    infoServices();
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

function infoServices() {
      // Obtener todas las tarjetas
      const servicesCards = document.querySelectorAll(".services-card");
      // Agregar un evento "mouseover" a cada tarjeta
      servicesCards.forEach((card) => {
          card.addEventListener("mouseover", () => {
              let cardId = card.id;
              switch (cardId) {
                case 'services-cp':
                  document.getElementById("text-explain").textContent = "Clases particulares";
                  document.getElementById("linktoweb").href = "www.skilly.es";
                  document.getElementById("imglink").src = "media/img/7AC943_black_transparent.png";
                  document.getElementById("ico-github").src = "media/img/icons/github.svg";
                  document.getElementById("ico-gitlab").src = "media/img/icons/gitlab.svg";
                  document.getElementById("repo-github").src = "https://gitlab.com/Nuria_Liano/skilly";
                  document.getElementById("repo-gitlab").src = "https://github.com/NuriaLiano/skilly";
                  break
                case 'services-sy':
                  document.getElementById("text-explain").textContent = "Administración de sistemas";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/soon.svg";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
                case 'services-doc':
                  document.getElementById("text-explain").textContent = "Documentación";
                  document.getElementById("linktoweb").href = "www.nuridocu.es";
                  document.getElementById("imglink").src = "media/img/logo_nuridocu_linea_blue.png";
                  document.getElementById("ico-github").src = "media/img/icons/github.svg";
                  document.getElementById("ico-gitlab").src = "media/img/icons/gitlab.svg";
                  document.getElementById("repo-github").src = "https://gitlab.com/Nuria_Liano/nuridocu";
                  document.getElementById("repo-gitlab").src = "https://github.com/NuriaLiano/nuridocu";
                  break
                case 'services-dw':
                  document.getElementById("text-explain").textContent = "Desarrollo Web";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/soon.svg";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
                case 'services-me':
                  document.getElementById("text-explain").textContent = "Mantenimiento y reparación de equipos";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/soon.svg";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
                case 'services-ve':
                  document.getElementById("text-explain").textContent = "Venta de equipos informáticos";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/soon.svg";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
              }
          });
      });
}