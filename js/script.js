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
colors = ["#3C9BFF", "#FF3D97"];
summaryDict = {"supl-heading":"#3C9BFF", "swipe-heading": "#FF3D97"};

waypoint = $(window).height() * 2.2;


inView('.summary h4')
    .on('enter', function(heading) {

        headingColor = summaryDict[heading.id];

        if (headingColor != lastColor) {
            $('.content').css('background-color', (headingColor));
            lastColor = headingColor;
        }
    });

inView('.section-me').once('enter', function() {
    $('.slide').addClass('animated fadeIn');
});

$(window).scroll(function() {
    console.log("WINDOW SCROLL");
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
    $('.content').css('background-color', ('#FF3D97'));
}
