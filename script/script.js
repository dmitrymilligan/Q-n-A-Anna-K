$(function() {
  var btn   = $("#btn"),
      email = $("#mail"),
      popupwrap = $(".popup-wrap"),
      popup = $(".popup"),
      pattern  = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

  btn.on( "click", function() {
  var mail = JSON.stringify( email.val() )
      if( pattern.test( email.val() ) ) {
        popupwrap.css( {opacity: 1, left: 0} );
        popup.text( mail );
      } else {
        popupwrap.css( {opacity: 1, left: 0} );
        popup.text( "Введите корректный email" );
      }

    });
  });
