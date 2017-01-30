/**
 * Created by marekfort on 1/8/17.
 */


(function($) {

    $.Slider = function(el) {
        this.selected_now = 2;
        this.thumb_list = $(this).find('.thumbnails');
        this.slider_list = $(this).find('.slider');
    };

}(jQuery));

$('.thumbnails li').click(function(e) {
    index = $(e.target.parentNode).index();

    /*change_image();*/

    selected_now = index;
});

$('.right-arrow').click(function() {
    slider_box = $(this.parent);
    if (!(slider_box instanceof $.Slider)) {
        console.log("FAIL");
        this.parent = new $.Slider(this.parent);
        slider_box = new $.Slider(slider_box);
    }

    console.log(slider_box.selected_now);

    change_image(slider_box);

    slider_box.selected_now += 1;

});


function change_image(slider_box) {

    /*deselected_button = get_button(slider_box.selected_now);*/
    deselected_thumb = slider_box.thumb_list.find('li').eq(slider_box.selected_now);
    deselected_button = deselected_thumb.children('button');
    deselected_button.removeClass('selected-thumb');
    /*button = get_button(slider_box, index);*/
    console.log(slider_box.thumb_list);
    thumb = slider_box.thumb_list.find('li').eq(slider_box.selected_now);
    button = thumb.children('button');
    button.addClass('selected-thumb');

    deselected_img = slider_box.slider_list.eq(slider_box.selected_now);
    deselected_img.css('opacity', ('0'));

    img = slider_box.slider_list.eq(slider_box.selected_now);
    img.css('opacity', ('1'));
}


/*
function get_button(slider_box, index) {
    thumb = slider_box.thumb_list.eq(index);
    button = thumb.children('button');
    return button;
}*/
