/**
 * Created by marekfort on 1/8/17.
 */


selected_now = 1;

$('.thumbnails li').click(function(e) {
    el = $(e.target.parentNode);
    console.log(el.index());
});