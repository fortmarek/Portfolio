/**
 * Created by marekfort on 13/04/16.
 */


$(document).ready(function(){
    // Setting summary to be centered to the iphone mockup
    swipeSummary = $('.section-swipe .summary');
    swipeSummary.css('padding-top', ($('.section-swipe img').height() / 2 - swipeSummary.height() / 2 ));
    suplSummary = $('.section-supl .summary');
    suplSummary.css('margin-top', ($('.section-supl img').height() / 2 - suplSummary.height() / 2 ));

});

translateValue = 0;
lastScroll = 0;
shouldAnimate = true;
lastColor = "#3C9BFF";
$(window).on('scroll', function(){
    sectionSupl = $('.section-supl');

    scrollTop = $('body').scrollTop();
    scrollingUp = scrollTop < lastScroll;
    lastScroll = scrollTop;
    heightOfTransition = sectionSupl.height();

    $('.section-supl img').css('transform', ("translate(0, " + translateValue + "px)"));
    translateValue++;
    $('.section-swipe img').css('transform', ("translate(0, " + translateValue + "px)"));
    //$('.section-swipe img').css('top', (swipeTop));

    if  (sectionSupl.offset().top + heightOfTransition - heightOfTransition / 3 - scrollTop < 0 && lastColor != "#FF3D97" && scrollingUp == false && shouldAnimate ) {
        lastColor = "#FF3D97";
        shouldAnimate = false;
        jQuery(".content").animate({
            backgroundColor: "#FF3D97"
        }, 1500 );
        setTimeout(function(){
            shouldAnimate = true
        },1500);
    }
    else if (sectionSupl.offset().top + heightOfTransition + heightOfTransition / 3 - scrollTop > 0 && lastColor != "#3C9BFF" && scrollingUp && shouldAnimate) {
        lastColor = "#3C9BFF";
        shouldAnimate = false;
        jQuery(".content").animate({
            backgroundColor: "#3C9BFF"
        }, 1500 );
        setTimeout(function(){
            shouldAnimate = true
        },1500);
    }

    $('.section-me').waypoint(function() {
        $('.slide').addClass('animated zoomIn');
    }, {
        offset: '10%'
    });


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

