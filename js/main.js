var $win = $(window);
var $iLove = $('.ilove');
var $icons = $('.icons img,p');
var iLoveOffset = $iLove.offset();

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 30) {
	        $(".nav").addClass("scrolling logo-w");
	    } else {
	        $(".nav").removeClass("scrolling logo-w");
	    }
	});

    $iLove.waypoint(function() {
    $icons.addClass('icons-animate');
}, { offset: '55%' });


    $win.on('scroll', function () {
    var scrollPos = $win.scrollTop();

    $iLove.css('background-position', 'center ' + scrollPos / 2 + 'px')

});


	// Smooth scroll for in page links
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


$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});
