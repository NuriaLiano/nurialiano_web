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
setInterval(changeWordWithOpacityEffect, 2000);
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
                  document.getElementById("text-explain").innerHTML = "<p>La plataforma Skilly es un espacio dedicado a una formación diferente. No es tan sólo una plataforma de cursos online si no que persigue, cree y desarrolla un método de enseñanza distinto basado en la experiencia profesional, comprensión y practica.</p><p>Este método se aleja totalmente de teoría, de powepoints, de examenes al estilo medieval, etc. Apuesta por una mentalidad totalmente abierta y flexible a cada alumno, donde se refuercen sus puntos débiles y se potencien sus fortalezas</p><p>Skilly ofrece cursos privados con profesores expertos en la matería, vídeos de refuerzo, documentación adaptada a cada alumno, simulación de exámenes y, lo que más nos gusta poner en práctica, nuestro 'Modo Historia'</p><p class='text-click'>Haz click en el logo de Skilly para conocer más sobre este proyecto</p>";
                  document.getElementById("linktoweb").href = "www.skilly.es";
                  document.getElementById("imglink").src = "media/img/7AC943_black_transparent.png";
                  document.getElementById("ico-github").src = "media/img/icons/github.svg";
                  document.getElementById("ico-gitlab").src = "media/img/icons/gitlab.svg";
                  document.getElementById("repo-github").src = "https://gitlab.com/Nuria_Liano/skilly";
                  document.getElementById("repo-gitlab").src = "https://github.com/NuriaLiano/skilly";
                  break
                case 'services-sy':
                  document.getElementById("title-text-services").textContent = "Administración de sistemas";
                  document.getElementById("text-explain").innerHTML = "<p>Nuestros servicios de administración de sistemas ofrecen una solución integral para mantener tus sistemas informáticos en óptimo funcionamiento.</p><p> Con más de una década de experiencia en el sector, nuestro equipo altamente calificado se encarga de gestionar y optimizar tus sistemas para que puedas centrarte en tu negocio. Ofrecemos atención personalizada, adaptando nuestros servicios a tus necesidades específicas. Desde la instalación y configuración hasta la resolución de problemas y actualizaciones, estamos comprometidos con brindarte resultados comprobados.</p><p> Además, creemos en ofrecer calidad a precios competitivos, lo que hace que nuestra administración de sistemas sea la elección perfecta para garantizar la eficiencia y la confiabilidad de tu infraestructura informática. Confía en nosotros para mantener tus sistemas en su mejor estado</p>";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/website_soon.png";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
                case 'services-doc':
                  document.getElementById("title-text-services").textContent = "Documentación";
                  document.getElementById("text-explain").innerHTML = "<p>La plataforma de 'Nuridocu' nace de la necesidad de documentar y compartir los conocimientos que voy aprendiendo a lo largo de mi vida profesional y personal.</p><p>En ella puedes encontrar documentación sobre diversas tecnologías, áreas de la informática y, también, proyectos que he desarrollado.</p><p>Es una plataforma constantemente en desarrollo y actualización ya que la documentación existente se revisa y actualiza y se añaden más contenidos.</p><p>Es una plataforma totalmente gratuita y accesible para todos</p><p class='text-click'>Haz click en el logo de Nuridocu para conocer más sobre este proyecto</p>";
                  document.getElementById("linktoweb").href = "www.nuridocu.es";
                  document.getElementById("imglink").src = "media/img/logo_nuridocu_linea_blue.png";
                  document.getElementById("ico-github").src = "media/img/icons/github.svg";
                  document.getElementById("ico-gitlab").src = "media/img/icons/gitlab.svg";
                  document.getElementById("repo-github").src = "https://gitlab.com/Nuria_Liano/nuridocu";
                  document.getElementById("repo-gitlab").src = "https://github.com/NuriaLiano/nuridocu";
                  break
                case 'services-dw':
                  document.getElementById("title-text-services").textContent = "Desarrollo Web";
                  document.getElementById("text-explain").innerHTML = "<p>En nuestro enfoque de desarrollo web, nos especializamos en soluciones diseñadas para impulsar y digitalizar el pequeño y mediano comercio en Cantabria. Comprendemos la importancia de la presencia en línea en el mundo actual, y nuestra misión es ayudar a las empresas locales a prosperar en el entorno digital.</p><p>Ofrecemos una gama completa de servicios de desarrollo web que van desde la creación de sitios web atractivos y funcionales hasta la implementación de soluciones de comercio electrónico personalizadas. Nos enorgullece colaborar estrechamente con los propietarios de negocios de Cantabria para comprender sus necesidades específicas y ofrecer soluciones que impulsen sus operaciones en línea.</p><p>Nuestro enfoque se centra en la accesibilidad, la usabilidad y la visibilidad en línea para que los comercios locales de Cantabria puedan llegar a un público más amplio y competir en el mercado digital actual. Si buscas transformar tu negocio y llevarlo al siguiente nivel en línea, nuestro equipo de desarrollo web está aquí para ayudarte a lograrlo.</p>";
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/website_soon.png";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
                case 'services-me':
                  document.getElementById("title-text-services").textContent = "Mantenimiento y reparación de equipos";
                  //document.getElementById("text-explain").innerHTML = "<p>Desde hace más de 10 años realizamos mantenimiento, reparación y asesoramiento de equipos informáticos.</p><p> Nuestro objetivo es ofrecer servicios de calidad a precios absequibles y aconsejar en todas las compras para que los clientes puedan optimizar tanto su dinero como sus equipos. También nos dedicamos a la optimización de equipos, buscando una mayor eficiencia y eficacia</p><p>Tanto los años de experiencia como los clientes satisfechos avalan la calidad de nuestros servicios</p>";
                  document.getElementById("text-explain").innerHTML = "<p>Con más de una década de experiencia en el sector, hemos estado proporcionando servicio de mantenimiento y reparación de equipos informáticos. Nuestra dedicación y compromiso se reflejan en:</p><ul><li>Equipo altamente calificado: Contamos con un equipo de técnicos expertos en la última tecnología informática.</li><li>Atención personalizada: Nos enorgullece brindar un servicio personalizado, adaptado a las necesidades específicas de cada cliente.</li><li>Resultados comprobados: Nuestra larga lista de clientes satisfechos respalda la calidad de nuestros servicios.</li><li>Precios competitivos: Creemos en ofrecer servicios de calidad a precios asequibles.</li></ul><p>Ya sea que necesites reparar una computadora personal, optimizar una red empresarial o cualquier otro servicio informático, estamos aquí para ayudarte.</p>"
                  document.getElementById("linktoweb").href = "";
                  document.getElementById("imglink").src = "media/img/icons/website_soon.png";
                  document.getElementById("ico-github").src = "";
                  document.getElementById("ico-gitlab").src = "";
                  document.getElementById("repo-github").src = "";
                  document.getElementById("repo-gitlab").src = "";
                  break
                case 'services-ve':
                  document.getElementById("title-text-services").textContent = "Venta de equipos de segunda mano";
                  document.getElementById("text-explain").innerHTML = "<p>También somos apasionados por la sostenibilidad y la preservación del medio ambiente. Nuestra filosofía es clara: reutilizar y reciclar.</p><p>Cuando eliges comprar uno de nuestros equipos de segunda mano, no solo obtienes un producto confiable y asequible, sino que también participas en la reducción de la huella de carbono y en la conservación de recursos naturales. Nuestro compromiso con la reutilización va más allá de simplemente vender equipos usados; trabajamos para extender la vida útil de estos dispositivos y reducir la generación de desechos electrónicos.</p><p>Además, cada equipo de segunda mano que ofrecemos ha sido cuidadosamente inspeccionado y restaurado por nuestro equipo de expertos, asegurando su funcionamiento óptimo y la satisfacción del cliente. Creemos que puedes obtener un producto de alta calidad mientras contribuyes a un planeta más saludable.</p>";
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

