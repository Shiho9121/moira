function imgFadeup() {
	var time = 0.2;
	var value = time;
	$('.c-fade-up-img').each(function () {
		var parent = this;
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var childs = $(this).children();
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
			$(childs).each(function () {
				
				if (!$(this).hasClass("c-fade-up-img__animation")) {
					
					$(parent).addClass("play");
					$(this).css("animation-delay", value + "s");
					$(this).addClass("c-fade-up-img__animation");
					value = value + time;
					
					
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}
	})
}

	$(window).scroll(function (){
		imgFadeup();
	});
