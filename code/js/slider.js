$(function(){
    $('.c-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        infinite: false,
        centerMode:true,
        zIndex: 1,
        appendArrows: $('.c-arrow'),
        prevArrow: '<img src="./img/icon/arrow-left.png" class="c-arrow__prev">',
        nextArrow: '<img src="./img/icon/arrow-right.png" class="c-arrow__next">',
   });
}); 