$(function () {
  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: `<button type="button" class="slick-next slick-arrow"><img src="./images/next-arrow.svg" alt="next"></button>`,
    prevArrow:  `<button type="button" class="slick-prev slick-arrow"><img src="./images/prew-arrow.svg" alt="prew"></button>`,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }
    ]
  });
});


