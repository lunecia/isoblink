'use strict';

$(".box").waypoint(function () {
		$(this).addClass('seen animated fadeInDown');
}, {
		offset: 'bottom-in-view'
});