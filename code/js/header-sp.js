$(function() {
    $('.p-header-sp__hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.p-header-sp__nav').addClass('active');
        } else {
            $('.p-header-sp__nav').removeClass('active');
        }
    });
});