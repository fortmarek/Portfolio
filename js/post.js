/**
 * Created by marekfort on 1/8/17.
 */


selected_now = 1;

$('.thumbnails li').click(function(e) {
    index = $(e.target.parentNode).index();
    thumb_list = $('.thumbnails');
    thumb = thumb_list.children('li:nth(1)');
    console.log(thumb.index());
    button = thumb.children('button');
    console.log(button);
    button.addClass('selected-thumb');
});

