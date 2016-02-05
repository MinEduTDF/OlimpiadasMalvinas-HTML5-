$(document).ready(function() {
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	}); 
     
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();

    /* ======= Instagram ======= */
    //Instafeed.js - add Instagram photos to your website
    //Ref: http://instafeedjs.com/

    var loadButton = document.getElementById('load-more');
    var feed = new Instafeed({
            limit: 28,
            get: 'tagged',
            tagName: 'filmweddingphotographer', /* Remember to use a unique hastag for the wedding */
            clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3', /* IMPORTANT: REPLACE THE DEMO CLIENTID */
            resolution: 'thumbnail',
            template: '<a class="instagram-item item" href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a>',
            sortBy: 'most-liked',
          // every time we load more, run this function
          after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
              loadButton.setAttribute('disabled', 'disabled');
            }
          },
    });

    // bind the load more button
    loadButton.addEventListener('click', function() {
      feed.next();
    });

    // run our feed!
    feed.run();
    
    /* ===== Packery ===== */
    //Ref: http://packery.metafizzy.co/
    //Ref: http://imagesloaded.desandro.com/

    var $container = $('#photos-wrapper');
    
    // init
    $container.imagesLoaded(function () {
        $container.packery({
            itemSelector: '.item',
            percentPosition: true
        });
    });
    
    
    /* ======= RSVP Form (Dependent form field) ============ */
    $('#cguests').on("change", function(){
        
        if ($(this).val() == "") {
            $('.guestinfo-group').slideUp(); //hide
            console.log('not selected');
        } else if ($(this).val() == 'No Guests' ) {
            $('.guestinfo-group').slideUp(); //hide
            console.log('No guests');
            $('#cguestinfo').val('No Guests'); //Pass data to the field so mailer.php can send the form.
            
        } else {
            $('.guestinfo-group').slideDown(); //show
            $('#cguestinfo').val(''); //Clear data
            console.log('Has guests');
        }

       
    });

    /* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $(".rsvp-form").validate({
        messages: {
            name: {
                required: 'Por favor ingresa tu nombre' //You can customise this message
            },
            email: {
                required: 'Por favor ingresa tu email' //You can customise this message
            },
            events: {
                required: '¿Asistirás?' //You can customise this message
            },
            guests: {
                required: '¿Con cuántos invitados vendrás?' //You can customise this message
            },
            guestinfo: {
                required: 'Por favor ingresa los nombres de los invitados' //You can customise this message
            },
        }
    });
  

});