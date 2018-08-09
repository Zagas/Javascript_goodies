<?php ?>
<p>    
		    <input id="privacy_si" name="privacy" type="checkbox">Si autorizza al trattamento dei dati personali, nonch&#xE9; a comunicare gli stessi a soggetti terzi, per le finalit&#xE0; per il quali il curriculum è stato presentato, in base alla informativa privacy disponibile <a target="_blank" href="https://cooperazionelavoro.legacoopromagna.it/privacy/">qui</a></input></br>
			<input id="GDPR_si" name="GDPR" type="checkbox">Ho verificato che il documento in formato PDF/DOC che sto caricando contenga l’autorizzazione al trattamento dei dati personali ex art. 13 GDPR 679/16 – “Regolamento europeo sulla protezione dei dati personali” e la mia firma autografa.
</input></br> 
<button id="preview_btn">ERO NASCOSTO</button>
</p>
<script>
jQuery('#privacy_si,#GDPR_si').click(function()
{
if(document.getElementById('privacy_si').checked && document.getElementById('GDPR_si').checked) {
    jQuery('#preview_btn').removeAttr("disabled");
} else {
    jQuery('#preview_btn').attr("disabled","disabled");
}
});
</script>