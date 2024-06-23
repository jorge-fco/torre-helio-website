// VARS
const CoverVideo = document.querySelector(".home__cover__video");
const CoverTitle = document.querySelector(".home__cover__text h1 span");
const CoverSubTitle = document.querySelector(".home__cover__text h2 span");

const HeaderLogo = document.querySelector(".header__logo a");
const HeaderContact = document.querySelector(".header__contact");
const HeaderMenu = document.querySelector(".header__menu");

var Intro = function(){

	gsap.to(CoverVideo, 2,{
		delay: 0.25,
		scale: 1,
		autoAlpha: 1,
		ease: "Expo.inOut"
	});

	gsap.to(CoverTitle, 1,{
		delay: 0.35,
		y: 1,
		autoAlpha: 1,
		ease: "power4.inOut"
	});

	gsap.to(CoverSubTitle, 1,{
		delay: 0.45,
		y: 1,
		autoAlpha: 1,
		ease: "power4.inOut"
	});

	gsap.to(HeaderMenu, 1,{
		delay: 0.55,
		y: 1,
		autoAlpha: 1,
		ease: "power4.inOut"
	});

	gsap.to(HeaderContact, 0.5,{
		delay: 0.65,
		autoAlpha: 1,
		ease: "power4.inOut"
	});

	gsap.to(HeaderLogo, 2,{
		delay: 0.65,
		autoAlpha: 1,
		scale: 1,
		ease: "Expo.inOut"
	});
}

var Animations = function(){
	var wow = new WOW({
		boxClass:     'set',
		animateClass: 'animation',
	});
	wow.init();

	var _time = 800;
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene_01 = new ScrollMagic.Scene({triggerElement: ".column--01", duration: _time})
	.setClassToggle('.item--01', 'is--animation')
	//.addIndicators({name: "1 (duration: 200)"})
	.addTo(controller);

	// build scene
	var scene_02 = new ScrollMagic.Scene({triggerElement: ".column--02", duration: _time})
	.setClassToggle('.item--02', 'is--animation')
	//.addIndicators({name: "2 (duration: 200)"})
	.addTo(controller);

	// build scene
	var scene_03 = new ScrollMagic.Scene({triggerElement: ".column--03", duration: _time})
	.setClassToggle('.item--03', 'is--animation')
	//.addIndicators({name: "2 (duration: 200)"})
	.addTo(controller);

	// build scene
	var scene_04 = new ScrollMagic.Scene({triggerElement: ".column--04", duration: _time})
	.setClassToggle('.item--04', 'is--animation')
	//.addIndicators({name: "2 (duration: 200)"})
	.addTo(controller);
}

var Header = function(){
	var controller = new ScrollMagic.Controller();

	// build scene
	var Header = new ScrollMagic.Scene({triggerElement: ".home__cover__text"})
	.setClassToggle('.js-header', 'is--scroll')
	//.addIndicators({name: "1 (duration: 200)"})
	.addTo(controller);

	// build scene
	var Logo = new ScrollMagic.Scene({triggerElement: ".home__cover__text"})
	.setClassToggle('.js-logo', 'is--scroll')
	//.addIndicators({name: "1 (duration: 200)"})
	.addTo(controller);
}

// RUN...
Intro();
Header();
Animations();