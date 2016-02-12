$(function() {

	// Get the form.
	var form = $('#rsvp-form');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		var isvalid=$("#rsvp-form").valid();
		if(isvalid)
        {
			// Stop the browser from submitting the form.
			e.preventDefault();

			// Serialize the form data.
			var formData = $(form).serialize();

			var url = 'https://script.google.com/macros/s/AKfycbzeWTvwl1qhOMP_MG-b_oIxuYsZ-ddhT4eyyWGoU-AFoTSOzOY/exec'; /* Debes agregar aquí el vínculo hacia el aplicativo web ejecutable */
	        // show the loading 
	        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
	        var jqxhr = $.post(url, formData, function(data) {
	            console.log("Success! Data: " + data.statusText);
	            $(formMessages).removeClass('alert alert-danger');
				$(formMessages).addClass('alert alert-success');

				// Set the message text.
				$(formMessages).text("Gracias! Hemos registrado su Pre-Inscripción.");

				// Clear the form.
				$('#ccue').val('');
				$('#cnamei').val('');
				$('#cnamep').val('');
				$('#ctel').val('');
				$('#cemail').val('');
	        }).fail(function(data) {
	            $(formMessages).removeClass('alert alert-success');
				$(formMessages).addClass('alert alert-danger');

				$(formMessages).text('Oops! Ocurrió un error y tu confirmación no fue registrada.');
	        });
	    }
	});

});
