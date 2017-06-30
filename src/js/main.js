
$(() => {
	// About us handle hover
	$('#circle1').hover(() =>{
		$('#circle1').addClass('active');
		$('#circle2').removeClass('active');
		$('#circle3').removeClass('active');
		$('.circle-container').removeClass('active');
		$('.circle-container:nth-child(1)').addClass('active');
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
		$('.circle-container').removeClass('active');
		$('.circle-container:nth-child(2)').addClass('active');
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
		$('.circle-container').removeClass('active');
		$('.circle-container:nth-child(3)').addClass('active');
		$('#service-desc3').fadeIn();
		$('#service-desc1').css('display', 'none');
		$('#service-desc2').css('display', 'none');
	},
	() => {
		
	});
	//waypoints for about us
	$(".fade-about").waypoint(function(){
		$(this).addClass('seen animated fadeInDown');
	}, { 
		offset: 'bottom-in-view'
	});
});
// navMenu
$('.hamberger').on('click', function(){
	$(this).toggleClass('open');
	$('.nav-bar').toggleClass('open');
	$('.wrapper,footer,.logo').toggleClass('blur');
});
$('.nav-bar').find('li').on('click', function(){
	$('.hamberger').toggleClass('open');
	$('.nav-bar').toggleClass('open');
	$('.wrapper,footer,.logo').toggleClass('blur');
});

// preload
$(window).on("load", function() {
    setTimeout(function() { 
	 	$('.loading').fadeOut(); 
	}, 1500);
	setTimeout(function() { 
	 	$('header').fadeIn();
	 	$('.scroll').fadeIn();  
	}, 5500);
});

// scrollTo
$('.goto a').on('click', function(e){
	e.preventDefault();
	$.scrollTo(this.hash, 400);
});

//waypoints
$(".fade-box").waypoint(function(){
		$(this).addClass('seen animated fadeInDown');
	}, { 
		offset: 'bottom-in-view'
	
});
$('.tilt-box').tilt({
	scale: 1,
  	maxGlare: 0.3
});
$('.tilt-box2').tilt({
	scale: 1,
  	maxGlare: 0.3,
  	perspective: 1500
});