$(function () { // wait for document ready
	// init
	if (window.matchMedia("(max-width: 600px)").matches || window.matchMedia("(min-width: 800px)").matches ) {

		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		controller.scrollTo(function (newScrollPos) {
		    $("html, body").animate({scrollTop: newScrollPos});
		});


		// Init slide height


		// Init slides effect

		var viewport_height = controller.info('size');
		var slides = document.querySelectorAll(".zone");

		var scenes = {};
		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			scenes[slides[i].id] = new ScrollMagic.Scene({
						triggerElement: slides[i]
					});
			padding_top = $(slides[i]).css('padding-top').slice(0,-2);
			bloc_height = viewport_height - parseInt(padding_top);
			// Make the slide fit
			$(slides[i]).find('.inner').css('height',bloc_height + "px")
			scenes[slides[i].id].setPin(slides[i]).addTo(controller).addIndicators()
		
		}

		// Scroll to function on click
		
		$('.zone h2').click(function(){
			target = $(this).parent().parent().attr('id');
			controller.scrollTo(scenes[target]);
		});

		console_init();


	}
});