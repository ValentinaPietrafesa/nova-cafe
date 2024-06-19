$(document).ready(function () {
  var $overlay = $('<div class="overlay"></div>');
  var $container = $('<div class="contenedor-overlay"></div>');
  var $containerImage = $('<div class="contenedor-imagen"></div>');
  var $image = $('<img>');
  var $close = $('<i class="fas fa-window-close"></i>');

  //Appends // (Adding elements to the DOM)
  $container.append($containerImage);
  $containerImage.append($image);
  $containerImage.append($close);
  $overlay.append($container);
  $('body').append($overlay);

  //Event 	// (The action performed when clicked)
  $('.grid-galeria a').click(function (event) {
    event.preventDefault();
    var href = $(this).attr('href');
    $image.attr('src', href);
    $overlay.fadeIn('slow');
  });

  //Hiding // (Hiding the entire overlay if the user clicks anywhere)
  $('.overlay').click(function () {
    $(this).fadeOut('slow');
  });
});
