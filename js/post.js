/**
 * Created by marekfort on 1/8/17.
 */


selected_now = 0;

$('.thumbnails li').click(function(e) {
    index = $(e.target.parentNode).index();

    change_image();

    selected_now = index;
});

$('.right-arrow').click(function() {
    index = selected_now + 1;

    change_image();

    selected_now = index;

});


function change_image() {
    thumb_list = $('.thumbnails');

    deselected_button = get_button(selected_now);
    deselected_button.removeClass('selected-thumb');

    button = get_button(index);
    button.addClass('selected-thumb');

    slider_list = $('.slider');

    deselected_img = slider_list.children().eq(selected_now);
    deselected_img.css('opacity', ('0'));

    img = slider_list.children().eq(index);
    img.css('opacity', ('1'));
}


function get_button(index) {
    thumb = thumb_list.children().eq(index);
    button = thumb.children('button');
    return button;
}