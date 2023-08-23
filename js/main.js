addEventListener("load", function() {
    // Inicializar la primera palabra
    changeWordWithOpacityEffect();
    infoServices();
    changeImgContactSocial()
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

function changeImgContactSocial(){
  const socialIcons = document.querySelectorAll('.social-img');

  socialIcons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
          icon.src = `media/img/icons/${icon.alt}-hover.svg`; // Cambia la imagen al pasar el cursor
      });

      icon.addEventListener('mouseout', () => {
          icon.src = `media/img/icons/${icon.alt}.svg`; // Restaura la imagen original al quitar el cursor
      });
  });
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
                  document.getElementById("title-text-services").textContent = "Formación";
                  document.getElementById("text-explain").textContent = "lorem ipsum dolor sit amet";
                  document.getElementById("linktoweb").href = "www.skilly.es";
                  document.getElementById("imglink").src = "media/img/7AC943_black_transparent.png";
                  document.getElementById("ico-github").src = "media/img/icons/github.svg";
                  document.getElementById("ico-gitlab").src = "media/img/icons/gitlab.svg";
                  document.getElementById("repo-github").src = "https://gitlab.com/Nuria_Liano/skilly";
                  document.getElementById("repo-gitlab").src = "https://github.com/NuriaLiano/skilly";
                  break
                case 'services-sy':
                  document.getElementById("title-text-services").textContent = "Administración de sistemas";
                  document.getElementById("text-explain").textContent = "Formación";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/website_soon.png";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
                case 'services-doc':
                  document.getElementById("title-text-services").textContent = "Documentación";
                  document.getElementById("text-explain").textContent = "Formación";
                  document.getElementById("linktoweb").href = "www.nuridocu.es";
                  document.getElementById("imglink").src = "media/img/logo_nuridocu_linea_blue.png";
                  document.getElementById("ico-github").src = "media/img/icons/github.svg";
                  document.getElementById("ico-gitlab").src = "media/img/icons/gitlab.svg";
                  document.getElementById("repo-github").src = "https://gitlab.com/Nuria_Liano/nuridocu";
                  document.getElementById("repo-gitlab").src = "https://github.com/NuriaLiano/nuridocu";
                  break
                case 'services-dw':
                  document.getElementById("title-text-services").textContent = "Desarrollo Web";
                  document.getElementById("text-explain").textContent = "Formación";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/website_soon.png";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
                case 'services-me':
                  document.getElementById("title-text-services").textContent = "Mantenimiento y reparación de equipos";
                  document.getElementById("text-explain").textContent = "Formación";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/website_soon.png";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
                case 'services-ve':
                  document.getElementById("title-text-services").textContent = "Venta de equipos informáticos";
                  document.getElementById("text-explain").textContent = "Formación";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/website_soon.png";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
              }
          });
      });
}

