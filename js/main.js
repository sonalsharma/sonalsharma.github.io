/*----Smooth scroll for in page links---*/

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});


/* Icon animations */

jQuery(document).ready(function() {

    jQuery('.hello').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });
});



