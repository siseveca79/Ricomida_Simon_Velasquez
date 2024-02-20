  document.addEventListener("DOMContentLoaded", function() {
    // Evento click para toggle el contenido de las tarjetas "card"
  document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        let cardBody = this.querySelector('.card-body');
        cardBody.style.display = (cardBody.style.display === 'none') ? 'block' : 'none';
    });
  });

  // Inicialización del carousel de Bootstrap
  var carousels = document.querySelectorAll('.carousel');
  carousels.forEach(function(carousel) {
    new bootstrap.Carousel(carousel);
  });
});
