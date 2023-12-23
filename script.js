document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen-clickable');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.getElementsByClassName('close')[0];
    const downloadLink = document.getElementById('downloadLink');
  
    imagenes.forEach(function(imagen) {
      imagen.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        downloadLink.href = this.src; // Establecer el enlace de descarga
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Obtener el interruptor de modo oscuro
const modoOscuroSwitch = document.getElementById('modoOscuroSwitch');

// Obtener la barra de navegación
const navbar = document.querySelector('.navbar');



// Escuchar cambios en el interruptor
modoOscuroSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode'); // Alternar la clase dark-mode en el body
});


// Escuchar cambios en el interruptor
modoOscuroSwitch.addEventListener('change', () => {
  if (modoOscuroSwitch.checked) {
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark', 'bg-dark');
  } else {
    navbar.classList.remove('navbar-dark', 'bg-dark');
    navbar.classList.add('navbar-light', 'bg-light');
  }
});
