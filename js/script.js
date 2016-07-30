/**
 * Created by marekfort on 13/04/16.
 */

$(document).ready(function(){
    setLayout();
});

$(window).resize(function() {
    setLayout();
});

lastScroll = 0;
lastColor = "#3C9BFF";
pixelsForScroll = 0;
translateValue = -50;
shouldMove = true;

$(window).on('scroll', function(){

    sectionSupl = $('.section-supl');

    scrollTop = $('body').scrollTop();
    scrollingUp = scrollTop < lastScroll;
    heightOfTransition = sectionSupl.height();
    customWaypoint = sectionSupl.offset().top + heightOfTransition - heightOfTransition / 3 - scrollTop;

    if (scrollingUp) {
        color = "#3C9BFF";
        if (customWaypoint > 0 && lastColor != color) {
            changeColor(color);
        }
        translateValue -= (lastScroll - scrollTop) / pixelsForScroll;
    }

    if (scrollingUp == false) {
        color = "#FF3D97";
        if  ( customWaypoint < 0 && lastColor != color) {
            changeColor(color);
        }
        translateValue += (scrollTop - lastScroll) / pixelsForScroll;
    }

    //Screenshot parallax movement
    if (shouldMove) {
        $('.content img').css('transform', ("translate(0, " + translateValue + "px)"),
            setTimeout(function(){
                shouldMove = true
            },100));
    }
    shouldMove = false;


    //Section me animation
    if ($('.section-swipe').offset().top < scrollTop) {
        $('.slide').addClass('animated fadeIn');
    }

    lastScroll = scrollTop;


});

// Navigation elements
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

function setLayout() {
    // Eg for 3px of body scroll, the screenshot should move only by 1px
    headerHeight = $('header').height();
    pixelsToScroll = parseFloat($('h3').css('padding-bottom'));
    pixelsForScroll = headerHeight / pixelsToScroll;

    // Setting summary to be centered to the iphone mockup
    swipeSummary = $('.section-swipe .summary');
    // 100 is for padding-botttom and top of section-swipe and section-supl
    swipeSummary.css('padding-top', ($('.section-swipe img').height() / 2 - swipeSummary.height() / 2 + (($('.section-supl').height() + 100) / pixelsForScroll)));
    suplSummary = $('.section-supl .summary');
    suplSummary.css('margin-top', ($('.section-supl img').height() / 2 - suplSummary.height() / 2));
}
