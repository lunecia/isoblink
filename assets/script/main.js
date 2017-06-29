'use strict';

// navMenu
$('.hamberger').on('click', function () {
	$(this).toggleClass('open');
	$('.nav-bar').toggleClass('open');
});