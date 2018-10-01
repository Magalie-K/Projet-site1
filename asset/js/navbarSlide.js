$(document).ready(function(){
  var navScrollTop2 = 0;
  $(window).scroll(function() {
    var navScrollTop = $(window).scrollTop() ;
    var navtop = parseInt($("nav").css('top'));
    var navheight = parseInt($("nav").css('height'));


      if( navtop == 0 && (navScrollTop2 - navScrollTop) <0 ){

           // $( "nav" ).animate({
           //   top: "-50"
           // }, 500);
          if( $( "nav" ).hasClass( "navscrolltop" ) != true){
            $( "nav" ).removeClass( "navscrollDown" );
            $( "nav" ).addClass( "navscrolltop" );

          }

          //console.log( "je peux monter la nav"  );

      }else if( navtop == -118 && (navScrollTop2 - navScrollTop) >0 ){

            // $( "nav" ).animate({
            //   top: "0"
            // }, 500);
            if( $( "nav" ).hasClass( "navscrolltop" ) == true){
              $( "nav" ).removeClass( "navscrolltop" );
              $( "nav" ).addClass( "navscrollDown" );
            }
            //console.log( "je peux baisser la nav"  );

      }
      //console.log( (navScrollTop2 - navScrollTop)  );
      navScrollTop2 = navScrollTop;


  });
});
