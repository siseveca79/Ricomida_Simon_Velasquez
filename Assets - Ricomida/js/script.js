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


document.addEventListener("DOMContentLoaded", function() {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function() {
      if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
      } else {
          navbarCollapse.classList.add("show");
      }
  });
});
