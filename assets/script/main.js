'use strict';

$(function () {
	$('#circle1').hover(function () {
		$('#circle1').addClass('active');
		$('#circle2').removeClass('active');
		$('#circle3').removeClass('active');
		$('#service-desc1').fadeIn();
		$('#service-desc2').css('display', 'none');
		$('#service-desc3').css('display', 'none');
	}, function () {});

	$('#circle2').hover(function () {
		$('#circle2').addClass('active');
		$('#circle1').removeClass('active');
		$('#circle3').removeClass('active');
		$('#service-desc2').fadeIn();
		$('#service-desc1').css('display', 'none');
		$('#service-desc3').css('display', 'none');
	}, function () {});

	$('#circle3').hover(function () {
		$('#circle3').addClass('active');
		$('#circle1').removeClass('active');
		$('#circle2').removeClass('active');
		$('#service-desc3').fadeIn();
		$('#service-desc1').css('display', 'none');
		$('#service-desc2').css('display', 'none');
	}, function () {});
});
// navMenu
$('.hamberger').on('click', function () {
	$(this).toggleClass('open');
	$('.nav-bar').toggleClass('open');
	$('.wrapper,footer,.logo').toggleClass('blur');
});
$('.nav-bar').find('li').on('click', function () {
	$('.hamberger').toggleClass('open');
	$('.nav-bar').toggleClass('open');
	$('.wrapper,footer,.logo').toggleClass('blur');
});

// preload
$(window).on("load", function () {
	setTimeout(function () {
		$('.loading').fadeOut();
	}, 1500);
	setTimeout(function () {
		$('header').fadeIn();
		$('.scroll').fadeIn();
	}, 5500);
});

// scrollTo
$('.goto').on('click', function (e) {
	e.preventDefault();
	$.scrollTo(this.hash, 400);
});

//waypoints
$(".fade-box").waypoint(function () {
	$(this).addClass('seen animated fadeInDown');
}, {
	offset: 'bottom-in-view'

});