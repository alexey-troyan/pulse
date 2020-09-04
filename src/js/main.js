$(document).ready(function () {
  $('.slider__wrap').slick({
    speed: 1000,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.png" alt="prev"></button>',
    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       dots: true,
    //       arrows: false,
    //     }
    //   },
    // ]
    // autoplay: true,
    // autoplaySpeed: 3000,
  });
});
