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

// closes the responsive menu on menu item click
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
	); 
}); 
}); 

// json array of tracks and song length
$(document).ready(function() {
var track = [
        {
            'id':1,
		    'title': "Star Treatment",
	        'length': "5:15",
        },
        {
            'id':2,
		    'title': "One Perspective",
	        'length': "4:41",
        },
        {
            'id':3,
		    'title': "American Sports",
	        'length': "4:27",
        },
		{
            'id':4,
		    'title': "Tranquility Base Hotel & Casino",
	        'length': "3:13",
        },
		{
            'id':5,
		    'title': "Golden Trunks",
	        'length': "5:01",
        },
		{
            'id':6,
		    'title': "Four out of Five",
	        'length': "4:47",
        },
		{
            'id':7,
		    'title': "The Worlds First Ever Monster Truck Front Flip",
	        'length': "4:50",
        },
		{
            'id':8,
		    'title': "Science Fiction",
	        'length': "3:10",
        },
		{
            'id':9,
		    'title': "She Looks Like Fun",
	        'length': "3:20",
        },
		{
            'id':10,
		    'title': "Batphone",
	        'length': "5:20",
        },
		{
            'id':11,
		    'title': "The Ultracheese",
	        'length': "5:53",
        },
  ];

/* test
for (i in track.songs) 
{
	x += "<h1>" + track.songs[i].name + "</h1>";
	for (j in track.songs[i].title) {
    x += track.songs[i].title[j];
  }
}
*/
  
//handlebars for json array
var source   = $("#some-template").html();
var template = Handlebars.compile(source);
var theCompiledHtml = template(track);
$("#content-placeholder").html(theCompiledHtml);

//form
$('#trackList').submit(function() {
  newtrack= {
	 id:$('#id').val(),
	 title:$('#title').val(),
	 length:$('#length').val(),
  }
  track.push(newtrack);
  var theCompiledHtml = template(track);
  $("#content-placeholder").html(theCompiledHtml);
  $('#modalForm').modal('hide');
  $('input[type="text"]').each(function() {
		$(this).val("");
  });
});
});