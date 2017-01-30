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

$('.thumbnails li').click(function(e) {
    index = $(e.target.parentNode).index();

    /*change_image();*/

    selected_now = index;
});

$('.right-arrow').click(function() {

    slider_box = $(this).parent();

    var slider_object = slider_box.data('slider');
    if (slider_object == null) {
        thumb_list = slider_box.find('.thumbnails');
        slider_list = slider_box.find('.slider');

        slider_object = new Slider(thumb_list, slider_list);
        slider_box.data('slider', slider_object);
        console.log("HEy");
    }

    change_image(slider_object);

});


function change_image(slider_object) {

    deselected_button = get_button(slider_object);
    /*deselected_thumb = slider_box.thumb_list.find('li').eq(slider_box.selected_now);
    deselected_button = deselected_thumb.children('button');*/
    deselected_button.removeClass('selected-thumb');

    deselected_img = slider_object.slider_list.eq(slider_object.selected_now);
    deselected_img.css('opacity', ('0'));

    slider_object.selected_now += 1;

    button = get_button(slider_object);
    /*thumb = slider_box.thumb_list.find('li').eq(slider_box.selected_now + 1);
    button = thumb.children('button');*/
    button.addClass('selected-thumb');

    img = slider_box.slider_list.eq(slider_object.selected_now);
    img.css('opacity', ('1'));
}


function get_button(slider_object) {
    console.log(slider_object.thumb_list);
    thumb = slider_object.thumb_list.eq(slider_object.selected_now);
    button = thumb.children('button');
    return button;
}
