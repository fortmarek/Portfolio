/**
 * Created by marekfort on 1/8/17.
 */


/*(function($) {

    $.Slider = function() {
        this.selected_now = 1;
        this.thumb_list = $(this).find('.thumbnails');
        this.slider_list = $(this).find('.slider');

    };

}(jQuery));*/


function Slider(thumb_list, slider_list) {
    this.selected_now = 0;
    this.thumb_list = thumb_list;
    this.slider_list = slider_list
}

$('.thumbnails li').click(function() {

    thumb_list = $(this).parent();
    slider_box = thumb_list.parent();

    var slider_object = get_slider_object(slider_box);
    select_next = thumb_list.find(this).index();
    change_image(slider_object, select_next);
});

$('.left-arrow').click(function() {

    slider_box = $(this).parent();

    var slider_object = get_slider_object(slider_box);

    if (slider_object.selected_now <= 0) {
        select_next = slider_object.slider_list.children().length - 1;
        change_image(slider_object, select_next);
    }
    else {
        change_image(slider_object, slider_object.selected_now - 1);
    }


});

$('.right-arrow').click(function() {

    slider_box = $(this).parent();

    var slider_object = get_slider_object(slider_box);

    if (slider_object.selected_now >= slider_object.slider_list.children().length - 1) {
        select_next = 0;
        change_image(slider_object, select_next);
    }
    else {
        change_image(slider_object, slider_object.selected_now + 1);
    }


});

function get_slider_object(slider_box) {
    var slider_object = slider_box.data('slider');
    if (slider_object == null) {
        thumb_list = slider_box.find('.thumbnails');
        slider_list = slider_box.find('.slider');

        slider_object = new Slider(thumb_list, slider_list);
        slider_box.data('slider', slider_object);
    }
    return slider_object;
}


function change_image(slider_object, select_next) {

    deselected_button = get_button(slider_object);
    deselected_button.removeClass('selected-thumb');
    deselected_img = slider_object.slider_list.find('li').eq(slider_object.selected_now);
    deselected_img.css('opacity', ('0'));

    slider_object.selected_now = select_next;

    button = get_button(slider_object);
    button.addClass('selected-thumb');
    img = slider_object.slider_list.find('li').eq(slider_object.selected_now);
    img.css('opacity', ('1'));
}


function get_button(slider_object) {
    thumb = slider_object.thumb_list.find('li').eq(slider_object.selected_now);
    button = thumb.find('button');
    return button;
}
