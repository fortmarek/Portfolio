/**
 * Created by marekfort on 13/04/16.
 */



lastColor = "#6665FF";
colors = ["#6665FF", "#FF3D97"];
summaryDict = {"elisa-heading":"#6665FF", "klozet-heading": "#FF7F00", "swipe-heading": "#FF3D97", "supl-heading":"#3C9BFF" };



inView('.summary h4')
    .on('enter', function(heading) {
        console.log($(window).width());
        if ($(window).width() > 1024) {
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
    if ($(window).width() > 1024) {
        return '.parallax'
    }
    else {
        return 'body'
    }
}