$(document).ready(function(){
  $('.slider__window').find('.slider__slide').css({'width': $(window).width()});
  $('slider__window .slider__slide').find('img').css({'width': $(window).width()});

var currentPosition = 0;
var slideWidth = $('.slider__slide').width();
var slides = $('.slider__slide');
var numberOfSlides = slides.length;
var slideShowInterval;
var speed = 4500;

// uncomment if auto slide should be enabledPlugin
slideShowInterval = setInterval(changePosition, speed);
$('.slides__holder').css('width', slideWidth * numberOfSlides);

//on click next slide
    $('#next').on('click', function(){
        if(currentPosition == numberOfSlides - 1){
            currentPosition = 0;
        }else{
            currentPosition++;
        }

        clearInterval(slideShowInterval);
        slideShowInterval = setInterval(changePosition, speed);
        moveSlide();
    });
    $('#prev').on('click', function(){
        if(currentPosition == 0){
            currentPosition =0;
        }else{
            currentPosition --;
        }

        clearInterval(slideShowInterval);
        slideShowInterval = setInterval(changePosition, speed);
        moveSlide();
    });

// sliders moves with timer
function changePosition() {
    if(currentPosition == numberOfSlides - 1) {
        currentPosition = 0;
    } else {
        currentPosition++;
    }
    moveSlide();
}
    moveSlide(); //makes slider move
    function moveSlide() {
    $('.slides__holder').animate({'marginLeft' : slideWidth*(-currentPosition)},1250);
    }

});
