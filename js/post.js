/**
 * Created by marekfort on 1/8/17.
 */


(function($) {

    $.Slider = function() {
        this.selected_now = 0;
        this.thumb_list = this.find('thumbnails');
        this.slider_list = this.find('slider');
    };

}(jQuery));

$('.thumbnails li').click(function(e) {
    index = $(e.target.parentNode).index();

    change_image();

    selected_now = index;
});

$('.right-arrow').click(function() {
    slider_box = this.parent;
    if (!(slider_box instanceof $.Slider)) {
        this.parent = new $.Slider(slider_box);
    }

    this.parent.selected_now += 1;
    console.log(this.parent.selected_now);

});


function change_image(slider_box) {

    deselected_button = get_button(slider_box.selected_now);
    deselected_button.removeClass('selected-thumb');

    button = get_button(slider_box, index);
    button.addClass('selected-thumb');

    deselected_img = slider_box.slider_list.eq(slider_box.selected_now);
    deselected_img.css('opacity', ('0'));

    img = slider_box.slider_list.eq(index);
    img.css('opacity', ('1'));
}


function get_button(slider_box, index) {
    thumb = slider_box.thumb_list.eq(index);
    button = thumb.children('button');
    return button;
}