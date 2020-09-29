$(function(){

    $('.featured-item__inner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.lbtn'),
        nextArrow: $('.rbtn'),
    });

    $('.rate-star').rateYo({
        starWidth: "14px",
        rating: 4.5,
        readOnly: true,
      });
});
