$(document).ready(function() {
  // Evento click para mostrar alerta al hacer clic en el botón "Enviar por correo"
  $('#enviarCorreo').on('click', function() {
      alert("El correo fue enviado correctamente...");
  });

  // Evento click para mostrar alerta al hacer clic en el botón "Añadir a favoritos"
  $('#favorito').on('click', function() {
      alert("Receta añadida a favoritos");
  });

  // Evento dblclick para cambiar el color del texto de los títulos "INGREDIENTES" y "PREPARACIÓN"
  $('h3').on('dblclick', function() {
      $(this).css('color', 'red');
  });

  // Evento click para toggle el contenido de las tarjetas "card"
  $('.card').on('click', function() {
      $(this).find('.card-body').toggle();
  });

  // Inicialización del carousel de Bootstrap
  $('.carousel').carousel();
});
