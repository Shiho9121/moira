$(function() {
    $('.p-header-sp__hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.p-header-sp__nav').addClass('active');
            $('body').addClass('p-header-sp--fixed-scroll');
        } else {
            $('.p-header-sp__nav').removeClass('active');
            $('body').removeClass('p-header-sp--fixed-scroll');
        }
    });
});