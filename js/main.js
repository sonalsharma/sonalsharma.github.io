var $win = $(window);
var $iLove = $('.ilove');
var $icons = $('.icons img');
var iLoveOffset = $iLove.offset();

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 200) {
	        $(".nav").addClass("scrolling");
	    } else {
	        $(".nav").removeClass("scrolling");
	    }

	});

    $iLove.waypoint(function() {
    $icons.addClass('icons-animate');
}, { offset: '20%' });


    $win.on('scroll', function () {
    var scrollPos = $win.scrollTop();

    $iLove.css('background-position', 'center ' + scrollPos / 2 + 'px')

});


/*----Smooth scroll for in page links---*/

$(function(){
    var target, scroll;

    $("a[href*=#]:not([href=#])").on("click", function(e) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            target = $(this.hash);
            target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

            if (target.length) {
                if (typeof document.body.style.transitionProperty === 'string') {
                    e.preventDefault();
                  
                    var avail = $(document).height() - $(window).height();

                    scroll = target.offset().top;
                  
                    if (scroll > avail) {
                        scroll = avail;
                    }

                    $("html").css({
                        "margin-top" : ( $(window).scrollTop() - scroll ) + "px",
                        "transition" : "1s ease-in-out"
                    }).data("transitioning", true);
                } else {
                    $("html, body").animate({
                        scrollTop: scroll
                    }, 1000);
                    return;
                }
            }
        }
    });

    $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function (e) {
        if (e.target == e.currentTarget && $(this).data("transitioning") === true) {
            $(this).removeAttr("style").data("transitioning", false);
            $("html, body").scrollTop(scroll);
            return;
        }
    });
});


jQuery(document).ready(function() {

    jQuery('.post').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });

    jQuery('.bounce1').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
       });

    jQuery('.bounce2').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 190
       });

    jQuery('.bounce3').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 250
       });

    jQuery('.bounce4').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 320
       });

     jQuery('.mainlogo').addClass("hideme").viewportChecker({
        classToAdd: 'logovis animated fadeInLeft',
        offset: 100
       });
});