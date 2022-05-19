$(function() {
	var headNav = $(".p-nav--header");
	$(window).on('load scroll', function () {
		if($(this).scrollTop() > 100 && headNav.hasClass('p-nav--fixed') == false) {
			headNav.css({"top": '-100px'});
			headNav.addClass('p-nav--fixed');
			headNav.animate({"top": 0},600);
		}
		else if($(this).scrollTop() < 100 && headNav.hasClass('p-nav--fixed') == true){
			headNav.removeClass('p-nav--fixed');
		}
	});
});