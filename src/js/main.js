
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
	}, 2500);
	setTimeout(function() {
	 	$('.enter-site').addClass('loaded');   
	}, 2500);
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

//tilt
$('.tilt-box').tilt({
	scale: 1,
  	maxGlare: 0.3
});
$('.tilt-box2').tilt({
	scale: 1,
  	maxGlare: 0.3,
  	perspective: 1500
});

// title


var mouseX = 0,
	mouseY = 0,
	windowHalfX = window.innerWidth / 2,
	windowHalfY = window.innerHeight / 2,
	SEPARATION = 200,
	AMOUNTX = 10,
	AMOUNTY = 10,
	camera,
	scene,
	renderer;

init();
animate();

function init() {

	var container,
	separation = 100,
	amountX = 50,
	amountY = 50,
	particle,
	title = document.getElementById('backgroundAni');;

	container = document.createElement( 'div' );
	backgroundAni.appendChild( container );

	scene = new THREE.Scene();

	renderer = new THREE.CanvasRenderer({ alpha: true }); // gradient; this can be swapped for WebGLRenderer
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,10000);
	camera.position.z = 100;

	// particles
	var PI2 = Math.PI * 2;
	var material = new THREE.SpriteCanvasMaterial({
		color: 0xffffff,
		program: function ( context ) {
			context.beginPath();
		    context.arc( 0, 0, 0.5, 0, PI2, true );
		    context.fill();
	}
});

var geometry = new THREE.Geometry();

for ( var i = 0; i < 100; i ++ ) {
	particle = new THREE.Sprite( material );
	particle.position.x = Math.random() * 2 - 1;
	particle.position.y = Math.random() * 2 - 1;
	particle.position.z = Math.random() * 2 - 1;
	particle.position.normalize();
	particle.position.multiplyScalar( Math.random() * 10 + 450 );
	particle.scale.x = particle.scale.y = 10;
	scene.add( particle );
	geometry.vertices.push( particle.position );
}

// lines
var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
scene.add( line );

// mousey
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'touchstart', onDocumentTouchStart, false );
document.addEventListener( 'touchmove', onDocumentTouchMove, false );
	
window.addEventListener( 'resize', onWindowResize, false );

} // end init();

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove(event) {

	mouseX = event.clientX - windowHalfX;
	mouseY = event.clientY - windowHalfY;

}

function onDocumentTouchStart( event ) {

	if ( event.touches.length > 1 ) {

	event.preventDefault();

      mouseX = event.touches[ 0 ].pageX - windowHalfX;
      mouseY = event.touches[ 0 ].pageY - windowHalfY;

    }
}

function onDocumentTouchMove( event ) {

  	if ( event.touches.length == 1 ) {

	    event.preventDefault();

	    mouseX = event.touches[ 0 ].pageX - windowHalfX;
	    mouseY = event.touches[ 0 ].pageY - windowHalfY;

	}
}

function animate() {

	requestAnimationFrame( animate );
	render();

}

function render() {
		
    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
    camera.lookAt( scene.position );

    renderer.render( scene, camera );
  
}

// word
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

$('.text-cover').hover(function(){
	$('.main').hide();
	$('.need').show();
}, function(){
	$('.need').hide();
	$('.main').show();
});





