

$(document).ready(function() {
  $('.home-body').css('display', 'none');
  $('.home-body').fadeIn(1500);

  $(document).on("click", "#enter-button", function () {
      $("body").fadeOut(1000, function() {
          window.location.href = 'about.html';
      });
      return false;
  });

  $("#exit-button").click(function() {
    $("body").fadeOut(1000, function() {
        window.location.href = 'index.html';
    })
    return false;
  });

  //disable right click on images
  $('img').bind('contextmenu', function(e) {
    return false;
  });

});
