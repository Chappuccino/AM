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

$(document).ready(function() {
var employee = [
        {
            'id':1,
		    'firstname': "Fred",
	        'lastname': "Bloggs",
	        'county':'Kilkenny',
	        'email':'fbloggs@gmail.com'
        },
        {
            'id':2,
			'firstname': "Katy",
		    'lastname': "Malone",
		    'county':'Waterford',
		    'email':'kmalone@gmail.com'
	    },
        {
            'id':3,
			'firstname': "Sam",
		    'lastname': "Dunne",
		    'county':'Waterford',
		    'email':'samdunne@gmail.com'
	    }
  ];

var source   = $("#some-template").html();
var template = Handlebars.compile(source);
var theCompiledHtml = template(employee);
$("#content-placeholder").html(theCompiledHtml);

$('#emplist').submit(function() {
  newemp= {
	 id:$('#id').val(),
	 firstname:$('#firstname').val(),
	 lastname:$('#lastname').val(),
	 county:$('#county').val(),
	 email:$('#email').val()
  }
  employee.push(newemp);
  var theCompiledHtml = template(employee);
  $("#content-placeholder").html(theCompiledHtml);
  $('#modalForm').modal('hide');
  $('input[type="text"]').each(function() {
		$(this).val("");
  });
  $('input[type="email"]').val("");
  return false;
});
});