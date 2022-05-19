$(function(){
    $('.c-merchandise-slide').slick({
        infinite: true,
        arrows: false,
        fade: true,
        draggable: false
    });
      $('.c-merchandise-slide-nav').slick({
        infinite: true,
        slidesToShow: 2,
        focusOnSelect: true,
        asNavFor: '.c-merchandise-slide',
      });
});