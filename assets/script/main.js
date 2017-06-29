'use strict';

$(".box").waypoint(function () {
		$(this).toggleClass('seen animated fadeInDown');
}, {
		offset: 'bottom-in-view'
});