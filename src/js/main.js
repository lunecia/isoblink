<<<<<<< HEAD
$(() => {
	$('#circle1').hover(() =>{
		$('#circle1').addClass('active');
		$('#circle2').removeClass('active');
		$('#circle3').removeClass('active');
		$('#service-desc1').fadeIn();
		$('#service-desc2').css('display', 'none');
		$('#service-desc3').css('display', 'none');
	},
	() => {

	});

	$('#circle2').hover(() =>{
		$('#circle2').addClass('active');
		$('#circle1').removeClass('active');
		$('#circle3').removeClass('active');
		$('#service-desc2').fadeIn();
		$('#service-desc1').css('display', 'none');
		$('#service-desc3').css('display', 'none');
	},
	() => {

	});

	$('#circle3').hover(() =>{
		$('#circle3').addClass('active');
		$('#circle1').removeClass('active');
		$('#circle2').removeClass('active');
		$('#service-desc3').fadeIn();
		$('#service-desc1').css('display', 'none');
		$('#service-desc2').css('display', 'none');
	},
	() => {
		
	});
=======
// navMenu
$('.hamberger').on('click', function(){
	$(this).toggleClass('open');
	$('.nav-bar').toggleClass('open');
>>>>>>> d85ca8fb0ba02f4dd8a0375e787a0575721e301f
});