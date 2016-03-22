   // Initialize Swiper -->
   var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
  });
  //Initialize Swiper -->

  $(document).ready(function (){
    var folder = "assets/images/gallery/";
    $.ajax({
      url : folder,
      success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
          if( val.match(/\.(jpe?g|png|gif)$/) ) { 
            $(".imagenes").append("<a href="+ folder + val +" data-gallery><img class='img-rounded' style='float:left; margin:10px;' src="+ folder + val +" width='200' height='200'> </a>");
          } 
        });
      }
    });
  });
