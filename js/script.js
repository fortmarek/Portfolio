/**
 * Created by marekfort on 13/04/16.
 */

$(document).ready(function(){
    // Setting summary to be centered to the iphone mockup
    swipeSummary = $('.section-swipe .summary');
    swipeSummary.css('padding-top', ($('.section-swipe img').height() / 2 - swipeSummary.height() / 2 ));
    suplSummary = $('.section-supl .summary');
    suplSummary.css('margin-top', ($('.section-supl img').height() / 2 - suplSummary.height() / 2 ));
    headerHeight = $('header').height();
    pixelsForScroll = headerHeight / parseFloat($('h3').css('padding-bottom'));

});

lastScroll = 0;
lastTranslate = 0;
shouldAnimate = true;
lastColor = "#3C9BFF";
pixelsForScroll = 0;
translateValue = -50;
shouldMove = true;
$(window).on('scroll', function(){
    sectionSupl = $('.section-supl');

    scrollTop = $('body').scrollTop();
    scrollingUp = scrollTop < lastScroll;
    heightOfTransition = sectionSupl.height();


    if (scrollingUp) {
        color = "#3C9BFF";
        if (sectionSupl.offset().top + heightOfTransition + heightOfTransition / 3 - scrollTop > 0 && lastColor != color && shouldAnimate) {
            changeColor(color);
        }
        if (shouldMove) {
            translateValue -= (lastScroll - scrollTop) / pixelsForScroll;
        }
    }

    if (scrollingUp == false) {
        color = "#FF3D97";
        if  (sectionSupl.offset().top + heightOfTransition - heightOfTransition / 3 - scrollTop < 0 && lastColor != color && shouldAnimate ) {
            changeColor(color);
        }

        if (shouldMove) {
            translateValue += (scrollTop - lastScroll) / pixelsForScroll;
        }


    }
    shouldMove = false;

    $('.content img').css('transform', ("translate(0, " + translateValue + "px)"));
        /*setTimeout(function(){
        shouldMove = true
    },100));*/


    $('.section-me').waypoint(function() {
        $('.slide').addClass('animated zoomIn');
    }, {
        offset: '10%'
    });

    lastScroll = scrollTop;


});

$('.portfolio-link').click(function() {
    body = $('body');
    scrollTop = body.scrollTop();
    body.animate({scrollTop : $('.section-supl').offset().top}, 600);
});

$('#about-link').click(function() {
    body = $('body');
    scrollTop = body.scrollTop();
    body.animate({scrollTop : $('.section-me').offset().top}, 600);
});


function changeColor(color) {
    lastColor = color;
    shouldAnimate = false;
    jQuery(".content").animate({
        backgroundColor: color
    }, 1500 );
    setTimeout(function(){
        shouldAnimate = true
    },1500);
}
