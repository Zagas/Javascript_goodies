
  
  /**
 * @author Giuseppe Zagaria <giuseppe.zagaria@adit.it>
 * Script che esegue autocomplete con tutte le città italiane già formattate
 */

jQuery( function() {
    jQuery("#candidate_location" ).autocomplete({
      source: availableTags
    });
    jQuery("#candidate_birthplace" ).autocomplete({
      source: availableTags
    });
  } );