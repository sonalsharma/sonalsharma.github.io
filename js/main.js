/* Show nav on scroll */

var $win = $(window);
var $iLove = $('.ilove');
var $icons = $('.icons img');
var iLoveOffset = $iLove.offset();

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 20) {
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

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
});


/* Icon animations */

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

     jQuery('.quote').addClass("hideme").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
       });
});

/* Scroll to top for mobile */ 
$(function(){
 
    $(document).on( 'scroll', function(){
 
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
 
    $('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

/* ---------------------------------------------------------- */



/*$(document).ready(function() {
    
    // Portfolio section 
    
    // Toggle a portfolio item
    $('.portfolio-work a').click(function() {
        $('.portfolio-details .portfolio-item').hide();
        
        var itemId = $(this).attr('href');
        $(itemId).show();
        
        if ($('.portfolio-details').css('display') == 'none') {
            $('.portfolio-details').slideDown();
        }
        
       $.smoothScroll({
          scrollTarget: '#portfolio-details',
          offset: -300
        });

        return false;

        
    });

    
    // Close portfolio
    $('#close-portfolio').click(function() {
        $('.portfolio-details').slideUp();
        return false;
    });
    // END - Portfolio section  
    
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});*/



