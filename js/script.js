$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<button class="prev-btn" type="button"><img src="./images/prev-arrow.svg" alt="Icon"></button>',
    nextArrow:
      '<button class="next-btn" type="button"><img src="./images/next-arrow.svg" alt="Icon"></button>',
    asNavFor: ".slider-dots",
  });

  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });
});
