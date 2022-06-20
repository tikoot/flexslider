/*$(window).load(function() {
    $('.flexslider').flexslider(); 
  });// this function exists because of plugin latest verson doesn't support this

*/


$(window).on('load',function() {
    $('.flexslider').flexslider({
        // built in plugin
        animation: "slide" ,
        slideShowSpeed : 5000,
        pauseOnHover: true,
        before: function(){$('.cta').css('bottom','100%')},
        start: function(){$('.cta').animate({bottom:'5%'},3000,"easeOutElastic");},
        after: function(){$('.cta').animate({bottom:'5%'},3000,"easeOutElastic");},

    }); 
});