$(document).ready(function(){
  $('#testimonial2').css({'display': 'block'});
  $(".rounded__light").click(function(e) {
      e.preventDefault();
      $('.testimonials__single p').fadeOut('slow');
      $('#' + $(this).data('rel')).fadeIn('slow');
    });
});
