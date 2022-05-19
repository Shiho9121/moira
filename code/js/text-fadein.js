function textFadin() {
	$('.c-text-fade-in').each(function() { 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll >= elemPos - windowHeight) {
		    $(this).addClass('c-text-fade-in--trigger');
		} 
	});
}

$(window).scroll(function () {
	textFadin();
});
