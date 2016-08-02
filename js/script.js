/**
 * Created by marekfort on 13/04/16.
 */

$(document).ready(function(){
    console.log($(window).width());
    setLayout();
});

$(window).resize(function() {
    if (isMobile == false) {
        setLayout();
    }
});

isMobile = false;
lastScroll = 0;
lastColor = "#3C9BFF";
pixelsForScroll = 0;
translateValue = 0;
shouldMove = true;

$(window).on('scroll', function() {

    scrollTop = $('body').scrollTop();

    if (isMobile == false) {
        sectionSupl = $('.section-supl');

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

        /*Screenshot parallax movement*/
        if (shouldMove) {
            $('.content img').css('transform', ("translate(0, " + translateValue + "px)"),
                setTimeout(function(){
                    shouldMove = true
                },100));
        }
        shouldMove = false;

        lastScroll = scrollTop;
    }

    /*Section me animation*/
    if ($('.section-swipe').offset().top < scrollTop) {
        $('.slide').addClass('animated fadeIn');
    }

});

/* Navigation elements*/
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
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
        $('.section-swipe').css('background-color', ('#FF3D97'));
        $('.content img').css('transform', ('translate(0, 0)'));

        if ($(window).width() > 480) {
            /*Setting summary to be centered to the iphone mockup*/
            swipeSummary = $('.section-swipe .summary');
            swipeSummary.css('padding-top', ($('.section-swipe img').height() / 2 - swipeSummary.height() / 2));
            suplSummary = $('.section-supl .summary');
            suplSummary.css('margin-top', ($('.section-supl img').height() / 2 - suplSummary.height() / 2));
        }

    }

    else {
        /* Eg for 3px of body scroll, the screenshot should move only by 1px*/
        headerHeight = $('header').height();
        pixelsToScroll = parseFloat($('h3').css('padding-bottom'));
        translateValue = -pixelsToScroll;
        pixelsForScroll = headerHeight / pixelsToScroll;

        /*Setting summary to be centered to the iphone mockup*/
        swipeSummary = $('.section-swipe .summary');
        /* 100 is for padding-botttom and top of section-swipe and section-supl*/
        swipeSummary.css('padding-top', ($('.section-swipe img').height() / 2 - swipeSummary.height() / 2 + (($('.section-supl').height() + 150) / pixelsForScroll)));
        suplSummary = $('.section-supl .summary');
        suplSummary.css('margin-top', ($('.section-supl img').height() / 2 - suplSummary.height() / 2));
    }


}
