// navMenu
$('.hamberger').on('click', function(){
	$(this).toggleClass('open');
	$('.nav-bar').toggleClass('open');
	$('.wrapper').toggleClass('blur');
});
$('.nav-bar').find('li').on('click', function(){
	$('.hamberger').toggleClass('open');
	$('.nav-bar').toggleClass('open');
	$('.wrapper').toggleClass('blur');
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