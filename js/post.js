/**
 * Created by marekfort on 1/8/17.
 */


selected_now = 0;

$('.thumbnails li').click(function(e) {
    index = $(e.target.parentNode).index();
    thumb_list = $('.thumbnails');
    thumb = thumb_list.children().eq(index);
    button = thumb.children('button');
    button.addClass('selected-thumb');
});