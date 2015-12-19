/* Show nav on scroll */

var $win = $(window);
var $iLove = $('.ilove');
var $icons = $('.icons img');
var iLoveOffset = $iLove.offset();

	/*$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 20) {
	        $(".nav").addClass("scrolling");
	    } else {
	        $(".nav").removeClass("scrolling");
	    }

	});*/

    $iLove.waypoint(function() {
    $icons.addClass('icons-animate');
}, { offset: '20%' });


    $win.on('scroll', function () {
    var scrollPos = $win.scrollTop();

    $iLove.css('background-position', 'center ' + scrollPos / 2 + 'px')

});


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
        classToAdd: 'visible',
        offset: 100
       });

    jQuery('.post').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });

    jQuery('.bounce1').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceIn',
        offset: 100
       });

    jQuery('.bounce2').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceIn',
        offset: 190
       });

    jQuery('.bounce3').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceIn',
        offset: 250
       });

    jQuery('.bounce4').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceIn',
        offset: 320
       });

     jQuery('.mainlogo').addClass("hideme").viewportChecker({
        classToAdd: 'logovis animated fadeInLeft',
        offset: 100
       });

     jQuery('.quote').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
       });
});

$('.menu, .menu-x').click(function() {
   $('.mobilenav').toggleClass("active");
   $('.menu').toggleClass("menuhide");
   $('.menu-x').toggleClass("menuhide");
});

/* Animated svg */ 

var hi = new Vivus('hi-there', {type: 'delayed', duration: 150, start: 'autostart', forceRender: false, dashGap: 20}, function () {
                    if (window.console) {
                        console.log('Animation finished. [log triggered from callback]');
                    }
                }),
                obt1 = new Vivus('obturateur1', {type: 'delayed', duration: 150}),
                obt2 = new Vivus('obturateur2', {type: 'async', duration: 150}),
                obt3 = new Vivus('obturateur3', {type: 'oneByOne', duration: 150}),
                pola = new Vivus('polaroid', {type: 'scenario-sync', duration: 20, forceRender: false});




