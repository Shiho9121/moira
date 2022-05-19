function fadinRight() {
	$('.c-fade-in-right').each(function() { 
		var elemPos = $(this).offset().top-30;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll >= elemPos - windowHeight) {
		    $(this).addClass('c-fade-in-right--trigger');
		}
	});
}

$(window).scroll(function () {
	fadinRight();
});
