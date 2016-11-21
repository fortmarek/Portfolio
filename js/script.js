/**
 * Created by marekfort on 13/04/16.
 */


isMobile = false;
lastScroll = 1000;
lastColor = "#3C9BFF";
pixelsForScroll = 0;
translateValue = 0;
shouldMove = true;
enterIndex = 0;
exitIndex = 0;
windowWidth = 0;
colors = ["#3C9BFF", "#FF3D97"];
summaryDict = {"supl-heading":"#3C9BFF", "swipe-heading": "#FF3D97", "klozet-heading": "#FF7F00"};

waypoint = $(window).height() * 2.2;

$(document).ready(function() {
    windowWidth = $(window).width();
});




inView('.summary h4')
    .on('enter', function(heading) {
        if (windowWidth > 767) {
            headingColor = summaryDict[heading.id];

            if (headingColor != lastColor) {
                $('.content').css('background-color', (headingColor));
                lastColor = headingColor;
            }
        }
        

    });

inView('.section-me').once('enter', function() {
    $('.slide').addClass('animated fadeIn');
});


/* Navigation elements*/
$('.portfolio-link').click(function() {
    className = getClassName();
    $(className).animate({scrollTop : $('.content').offset().top}, 600);
});

$('#about-link').click(function() {
    className = getClassName();
    $(className).animate({scrollTop : $('.section-me').offset().top}, 600);
});

function getClassName() {
    if (windowWidth > 767) {
        return '.parallax'
    }
    else {
        return 'body'
    }
}