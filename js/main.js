var typed = new Typed(".type", {
  	
  	strings: ['Aavishkar', 'The Cradle of Innovation'],
  	stringsElement: null,
	typeSpeed: 3,
	startDelay: 1200,
	backSpeed: 20,
	backDelay: 500,
	loop: true,
	loopCount: Infinity,
	showCursor: false,
	cursorChar: "",
	attr: null,
	contentType: 'html',
});

var controller = new ScrollMagic.Controller();

var scene1_a = new ScrollMagic.Scene({
	triggerElement: '.content'
})
.setClassToggle('.content','visible')
.addTo(controller);

var scene1_b = new ScrollMagic.Scene({
	triggerElement: '.content'
})
.setClassToggle('.content','fadeInLeft')
.addTo(controller);

var scene2_a = new ScrollMagic.Scene({
	triggerElement: '.heading'
})
.setClassToggle('.heading','visible')
.addTo(controller);

var scene2_b = new ScrollMagic.Scene({
	triggerElement: '.heading'
})
.setClassToggle('.heading','shake')
.addTo(controller);