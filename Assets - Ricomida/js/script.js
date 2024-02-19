$(document).ready(function() {
  // Selectores de clase: Ocultar y mostrar contenido de tarjetas "card"
  $('.card').click(function() {
      $(this).find('.card-body').toggle();
  });
});


$(document).ready(function() {
  $('.carousel').carousel();
});
