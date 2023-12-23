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

// Verificar si el modo oscuro está activo en el almacenamiento local al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const modoOscuroActivo = localStorage.getItem('modoOscuro') === 'true';

  // Aplicar el modo oscuro si está activo en el almacenamiento local
  if (modoOscuroActivo) {
    document.body.classList.add('dark-mode');
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark', 'bg-dark');
    modoOscuroSwitch.checked = true;
  }
});

// Escuchar cambios en el interruptor
modoOscuroSwitch.addEventListener('change', () => {
  // Alternar la clase dark-mode en el body
  document.body.classList.toggle('dark-mode');

  // Modificar estilos de la barra de navegación
  if (modoOscuroSwitch.checked) {
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark', 'bg-dark');
    localStorage.setItem('modoOscuro', 'true'); // Guardar estado en el almacenamiento local
  } else {
    navbar.classList.remove('navbar-dark', 'bg-dark');
    navbar.classList.add('navbar-light', 'bg-light');
    localStorage.setItem('modoOscuro', 'false'); // Guardar estado en el almacenamiento local
  }
});


