//name: evan o neill
//number: 20067121
//course: multimedia applications development
//module: web development 2

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});



// replace the images with colour
$(document).ready(function() {
var images = ['img/small/alexColour.jpg', 'img/small/mattColour.jpg', 'img/small/jamieColour.jpg', 'img/small/nickColour.jpg']
var index =0;
$('#gallery img').each(function() {
	var imgFile = $(this).attr('src');
	var preloadImage = new Image();
   	preloadImage.src = images[index];
   	index++;

	$(this).hover(
		function() {
			$(this).attr('src', preloadImage.src);
		},
		function () {
			$(this).attr('src', imgFile);
		}
	); // end hover
}); // end each
}); // end ready()

