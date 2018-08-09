$("#Contacts_editView_fieldName_cf_783").change(function(){
		 var iban = $( this ).val();
	     var result = IBAN.isValid(iban);
	     if (result == false)
		 {
	 
			$( "#errorstampa" ).text( 'IBAN NON VALIDO' );
		 }else{

		    $( "#errorstampa" ).text( '' );
		 }
    });

    $("#Accounts_editView_fieldName_cf_1557").change(function(){
        var iban = $( this ).val();
        var result = IBAN.isValid(iban);
        if (result == false)
        {
    
           $( "#errorstampa" ).text( 'IBAN NON VALIDO' );
        }else{

           $( "#errorstampa" ).text( '' );
        }
   });

   $("#Pod_editView_fieldName_cf_1575").change(function(){
    var iban = $( this ).val();
    var result = IBAN.isValid(iban);
    if (result == false)
    {

       $( "#errorstampa" ).text( 'IBAN NON VALIDO' );
    }else{

       $( "#errorstampa" ).text( '' );
    }
});

$("#Pdr_editView_fieldName_cf_1593").change(function(){
    var iban = $( this ).val();
    var result = IBAN.isValid(iban);
    if (result == false)
    {

       $( "#errorstampa" ).text( 'IBAN NON VALIDO' );
    }else{

       $( "#errorstampa" ).text( '' );
    }
});

$("#Pod_editView_fieldName_cf_1645").change(function(){
	var codf = $( this ).val();
	var result = ControllaCF(codf); 
	$( "#errorstampa" ).text( result );
    });


$("#Pdr_editView_fieldName_cf_1659").change(function(){
	var codf = $( this ).val();
	var result = ControllaCF(codf); 
	$( "#errorstampa" ).text( result );
    });
    
    $("#Pdr_editView_fieldName_cf_1655").change(function(){
        var codf = $( this ).val();
        var result = ControllaCF(codf); 
        $( "#errorstampa" ).text( result );
        });
    
	
	$("#Accounts_editView_fieldName_cf_765").change(function(){
	var iva = $( this ).val();
	var result = ControllaPIVA(iva); 
	$( "#errorstampa" ).text( result );
    });

	$("#Contacts_editView_fieldName_cf_785").change(function(){
	var codf = $( this ).val();
	var result = ControllaCF(codf); 
	$( "#errorstampa" ).text( result );
    });

    $("#Accounts_editView_fieldName_cf_1651").change(function(){
        var codf = $( this ).val();
        var result = ControllaCF(codf); 
        $( "#errorstampa" ).text( result );
        });
        
    $("#Accounts_editView_fieldName_cf_763").change(function(){
	var codf = $( this ).val();
	var result = ControllaCF(codf); 
	$( "#errorstampa" ).text( result );
    });

  function ControllaCF(cf) {
            if (cf.length < 12) {
                return ControllaPIVA(cf)    
            } else {
            var validi, i, s, set1, set2, setpari, setdisp;
            if (cf == '') return '';
            cf = cf.toUpperCase();
            if (cf.length != 16)
                return "La lunghezza del codice fiscale non \u00E8\n"
                + "corretta: il codice fiscale dovrebbe essere lungo\n"
                + "esattamente 16 caratteri.\n";
            validi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            for (i = 0; i < 16; i++) {
                if (validi.indexOf(cf.charAt(i)) == -1)
                    return "Il codice fiscale contiene un carattere non valido `" +
                        cf.charAt(i) +
                        "'.\nI caratteri validi sono le lettere e le cifre.\n";
            }
            set1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            set2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ";
            setpari = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            setdisp = "BAKPLCQDREVOSFTGUHMINJWZYX";
            s = 0;
            for (i = 1; i <= 13; i += 2)
                s += setpari.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));
            for (i = 0; i <= 14; i += 2)
                s += setdisp.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));
            if (s % 26 != cf.charCodeAt(15) - 'A'.charCodeAt(0))
                return "Il codice fiscale non \u00E8 corretto:\n" +
                    "il codice di controllo non corrisponde.\n";
            return "";
            }
        }

     /*****************************************
            Controllo della Partita I.V.A.
            Linguaggio: JavaScript
        ******************************************/
        function ControllaPIVA(pi) {
            if (pi == '') return '';
            if (pi.length != 11)
                return "La lunghezza della partita IVA non \u00E8\n" +
                    "corretta: la partita IVA dovrebbe essere lunga\n" +
                    "esattamente 11 caratteri.\n";
            validi = "0123456789";
            for (i = 0; i < 11; i++) {
                if (validi.indexOf(pi.charAt(i)) == -1)
                    return "La partita IVA contiene un carattere non valido `" +
                        pi.charAt(i) + "'.\nI caratteri validi sono le cifre.\n";
            }
            s = 0;
            for (i = 0; i <= 9; i += 2)
                s += pi.charCodeAt(i) - '0'.charCodeAt(0);
            for (i = 1; i <= 9; i += 2) {
                c = 2 * (pi.charCodeAt(i) - '0'.charCodeAt(0));
                if (c > 9) c = c - 9;
                s += c;
            }
            if ((10 - s % 10) % 10 != pi.charCodeAt(10) - '0'.charCodeAt(0))
                return "La partita IVA non \u00E8 valida:\n" +
                    "il codice di controllo non corrisponde.\n";
            return "";
        }