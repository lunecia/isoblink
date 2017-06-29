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