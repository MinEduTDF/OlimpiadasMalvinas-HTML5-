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
 });

    /******* LEER MAS ********/
    $('.boton-leer').on('click', function() {
      $('.leer').stop().addClass('active');
      $(this).hide();
  });
    /******* FIN - LEER MAS ********/

    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();

    /* ======= Instagram ======= */
    //Instafeed.js - add Instagram photos to your website
    //Ref: http://instafeedjs.com/

    // var loadButton = document.getElementById('load-more');
    // var feed = new Instafeed({
    //         limit: 28,
    //         get: 'user',
    //         userId: 2934481847,
    //         accessToken: '2934481847.2c57abf.ba1dd82d555b444c82410e405ede07b7',
    //         tagName: 'concursomalvinas2016', /* Remember to use a unique hastag for the wedding */
    //         clientId: '2c57abf2d4b240beacee198677ca4507', /* IMPORTANT: REPLACE THE DEMO CLIENTID */
    //         resolution: 'thumbnail',
    //         template: '<a class="instagram-item item" href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a>',
    //         sortBy: 'most-liked',
    //       // every time we load more, run this function
    //       after: function() {
    //         // disable button if no more results to load
    //         if (!this.hasNext()) {
    //           loadButton.setAttribute('disabled', 'disabled');
    //         }
    //       },
    // });
var dir = "https://api.instagram.com/v1/tags/concursomalvinas2016/media/recent/?access_token=2253563781.137bf98.bd1c3693d2b84f80a7ab8d661f641437";
$(insta(dir));
function insta(dir) {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: dir,
        success: function(data) {
                console.log(data);
                next_url = data.pagination.next_url;
            for (var i = 0; i < data.data.length; i++) {
                var imagen = data.data[i].images.low_resolution.url;
                $(".instagramfeed").append("<a href="+ imagen +" data-gallery><img class='img-rounded' style='float:left; margin:10px;' src=" + imagen +" width='200' height='200'> </div>");
           
            }   
                $('#load-more').on('click', function() {
                    console.log("loading: " + next_url)
                    insta(next_url);
                });         

        }
});
}
    // bind the load more button
    // loadButton.addEventListener('click', function() {
    //   feed.next();
    // });

    // // run our feed!
    // feed.run();
    
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
    
    /* ======= RSVP jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $(".rsvp-form").validate({
        messages: {
            /*cue: {
                required: 'Por favor ingrese el CUE de la institución' //You can customise this message
            },*/
            namei: {
                required: 'Por favor ingrese el nombre completo de la institución' //You can customise this message
            },
            namep: {
                required: 'Por favor ingrese su nombre completo' //You can customise this message
            },
            /*tel: {
                required: 'Por favor ingrese su teléfono de contacto' //You can customise this message
            },*/
            email: {
                required: 'Por favor ingrese su email de contacto' //You can customise this message
            },
        }
    });
/* ======= CONSULTATIONS jQuery form validator ======= */ 
/* Ref: http://jqueryvalidation.org/documentation/ */   
$(".consultations-form").validate({
    messages: {
        cue: {
                required: 'Por favor ingrese el CUE de la institución' //You can customise this message
            },
            namei: {
                required: 'Por favor ingrese el nombre completo de la institución' //You can customise this message
            },
            namep: {
                required: 'Por favor ingrese su nombre completo' //You can customise this message
            },
            tel: {
                required: 'Por favor ingrese su teléfono de contacto' //You can customise this message
            },
            email: {
                required: 'Por favor ingrese su email de contacto' //You can customise this message
            },
        }
    });
