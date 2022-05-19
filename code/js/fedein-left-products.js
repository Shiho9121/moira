function fadinLeftProducts() {
	$('.c-fade-in-left-products').each(function() { 
		var elemPos = $(this).offset().top-30;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll >= elemPos - windowHeight) {
		    $(this).addClass('c-fade-in-left-products--trigger');
		}
	});
}

$(window).on('load',function () {
	fadinLeftProducts();
});
