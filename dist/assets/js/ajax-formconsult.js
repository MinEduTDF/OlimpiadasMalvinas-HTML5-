$(function() {

	// Get the form.
	var formconsultations = $('#consultations-form');

	// Get the messages div.
	var formMessages = $('#formconsultations-messages');

	// Set up an event listener for the contact form.
	$(formconsultations).submit(function(e) {
		var isvalid=$("#consultations-form").valid();
		if(isvalid)
        {
			// Stop the browser from submitting the form.
			e.preventDefault();

			// Serialize the form data.
			var formData = $(formconsultations).serialize();

			var url = 'https://script.google.com/macros/s/AKfycbyErkzACRC6HUHOCBYRrwOIqQrKLxoLwh-b0hoWePO7EYPJFf4/exec'; /* Debes agregar aquí el vínculo hacia el aplicativo web ejecutable */
	        // show the loading 
	        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
	        var jqxhr = $.post(url, formData, function(data) {
	            console.log("Success! Data: " + data.statusText);
	            $(formMessages).removeClass('alert alert-danger');
				$(formMessages).addClass('alert alert-success');

				// Set the message text.
				$(formMessages).text("Gracias! Hemos registrado su Consulta. Pronto nos pondremos en contacto con usted.");

				// Clear the form.
				//$('#ccue').val('');
				$('#cnamei').val('');
				$('#cnamep').val('');
				//$('#ctel').val('');
				$('#cemail').val('');
				$('#cmessage').val('');
	        }).fail(function(data) {
	            $(formMessages).removeClass('alert alert-success');
				$(formMessages).addClass('alert alert-danger');

				$(formMessages).text('Oops! Ocurrió un error y su consulta no fue registrada. Por favor inténtelo nuevamente.');
	        });
	    }
	});
});