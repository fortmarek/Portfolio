/**
 * Created by marekfort on 13/04/16.
 */


$(document).ready(function(){
    // Setting summary to be centered to the iphone mockup
    $('.section-swipe .summary').css('padding-top', ($('.section-swipe img').height() / 2 - $('.section-swipe .summary').height() / 2 ));
    $('.section-supl .summary').css('margin-top', ($('.section-supl img').height() / 2 - $('.section-supl .summary').height() / 2 ));

});

translateValue = 0;
lastScroll = 0;
shouldAnimate = true;
lastColor = "#3C9BFF";
$(window).on('scroll', function(){
    scrollTop = $('body').scrollTop();
    scrollingUp = scrollTop < lastScroll;
    lastScroll = scrollTop;
    heightOfTransition = $('.section-supl').height();

    $('.section-supl img').css('transform', ("translate(0, " + translateValue + "px)"));
    translateValue++;
    swipeTop = (scrollTop - $('.section-swipe').offset().top) / 14;
    //$('.section-swipe img').css('top', (swipeTop));


    /*
    $('.section-supl img').waypoint(function() {
        $('.section-supl img').addClass('animated fadeInUp');
        console.log("ANIMATEEE")
    }, {
        offset: '120%'
    });
    */


    if  ($('.section-supl').offset().top + heightOfTransition - heightOfTransition / 3 - scrollTop < 0 && lastColor != "#FF3D97" && scrollingUp == false && shouldAnimate ) {
        lastColor = "#FF3D97";
        shouldAnimate = false;
        jQuery(".content").animate({
            backgroundColor: "#FF3D97"
        }, 1500 );
        setTimeout(function(){
            shouldAnimate = true
        },1500);
    }
    else if ($('.section-supl').offset().top + heightOfTransition + heightOfTransition / 3 - scrollTop > 0 && lastColor != "#3C9BFF" && scrollingUp && shouldAnimate) {
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

