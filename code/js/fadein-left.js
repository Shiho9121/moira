function fadinLeft() {
	$('.c-fade-in-left').each(function() { 
		var elemPos = $(this).offset().top-30;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll >= elemPos - windowHeight) {
		    $(this).addClass('c-fade-in-left--trigger');
		}
	});
}

$(window).scroll(function () {
	fadinLeft();
});
