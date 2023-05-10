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
  $(".surf-slider").slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    asNavFor: ".image-slider",
    arrows: false,
    focusOnSelect: true,
  });
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:
      '<button class="prev-btn" type="button"><img src="./images/prev-arrow.svg" alt="Icon"></button>',
    nextArrow:
      '<button class="next-btn" type="button"><img src="./images/next-arrow.svg" alt="Icon"></button>',
    asNavFor: ".surf-slider",
  });
});
