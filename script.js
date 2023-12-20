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
  