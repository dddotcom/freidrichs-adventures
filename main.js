

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

  $("#home-link").click( function() {
    console.log("homelink clicked");
    window.location.href = 'alt_index.html';
    return false;
  });

  //check that all form inputs are valid
  // $("#submit-contact").click( function(e) {
  //   e.preventDefault();
  //   clearErrors();
  //   var noErrors = true;
  //
  //   if( $("#name-input").val().length === 0 ){
  //     document.getElementsByClassName('error')[0].textContent = "Please enter your name";
  //     noErrors = false;
  //   }
  //   if( $("#email-input").val().length === 0 ){
  //     document.getElementsByClassName('error')[1].textContent = "Please enter your email address";
  //     noErrors = false;
  //   } else if ( !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#email-input").val())) {
  //     document.getElementsByClassName('error')[1].textContent = "Please enter a valid email";
  //     noErrors = false;
  //   }
  //
  //   if( $("#subject-input").val().length === 0 ){
  //     document.getElementsByClassName('error')[2].textContent = "Please enter your subject";
  //     noErrors = false;
  //   }
  //   if( $("#message-input").val().length === 0 ){
  //     document.getElementsByClassName('error')[3].textContent = "Pleaese enter your message";
  //     noErrors = false;
  //   }
  //
  //   if(noErrors) {
  //     // send email
  //   }
  // });

  // function clearErrors() {
  //   for( var i = 0; i < document.getElementsByClassName('error').length; i++ ) {
  //     document.getElementsByClassName('error')[i].textContent = "";
  //   }
  // }


  //disable right click on images
  $('img').bind('contextmenu', function(e) {
    return false;
  });

});
