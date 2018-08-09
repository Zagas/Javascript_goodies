$( function() {
if (!$.cookie('cia_dichiarazione')) {
   //no cookie
  $( "#dialog-confirm" ).dialog({
    resizable: false,
    height: "auto",
    width: 800,
    modal: true,
    buttons: {
      "ACCETTO e CONFERMO": function() {
        $("input").removeAttr('disabled');
        $( this ).dialog( "close" );
        $.cookie("cia_dichiarazione", "accettato_cookies_qui", { expires: 30 });
      }
    }
  });
  } else {
  // have cookie
  $("input").removeAttr('disabled');
  }
} );
