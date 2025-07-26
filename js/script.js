// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
            // action section for animate on scroll
            sec.classList.add('show-animate')
        }
        // if want to use animation that repeatson scroll use this
        else {
            sec.classList.remove('show-animate')
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')

    // Animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

function iniciarContador() {
    const agora = new Date();
    const dataFinal = new Date(agora.getTime() + (1 * 24 * 60 * 60 * 1000) + // 1 dia
                                        (13 * 60 * 60 * 1000) +  // 1 hora
                                        (27 * 60 * 1000) +      // 32 minutos
                                        (59 * 1000));           // 59 segundos
  
    function atualizarContador() {
      const agora = new Date();
      const diferenca = dataFinal - agora;
  
      if (diferenca <= 0) {
        document.getElementById("dias").innerText = "00";
        document.getElementById("horas").innerText = "00";
        document.getElementById("minutos").innerText = "00";
        document.getElementById("segundos").innerText = "00";
        return;
      }
  
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
      document.getElementById("dias").innerText = dias.toString().padStart(2, "0");
      document.getElementById("horas").innerText = horas.toString().padStart(2, "0");
      document.getElementById("minutos").innerText = minutos.toString().padStart(2, "0");
      document.getElementById("segundos").innerText = segundos.toString().padStart(2, "0");
    }
  
    setInterval(atualizarContador, 1000);
    atualizarContador();
  }
  
  iniciarContador();
  