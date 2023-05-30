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
    responsive: [
      {
        breakpoint: 851,
        settings: "unslick",
      },
    ],
  });
  $(".surf-slider").slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    asNavFor: ".image-slider",
    arrows: false,
    focusOnSelect: true,
    useTransform: false,

    responsive: [
      {
        breakpoint: 1102,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          transformEnabled: false,
          //centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 966,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 966,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
  $(".travel-slider, .shop-slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<button class="prev-btn" type="button"><img src="./images/prev-arrow.svg" alt="Icon"></button>',
    nextArrow:
      '<button class="next-btn" type="button"><img src="./images/next-arrow.svg" alt="Icon"></button>',
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./images/sleep/plus.svg" alt="Icon"></div><div class="quantity-button quantity-down"><img src="./images/sleep/minus.svg" alt="Icon"></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".quantity-button").on("click", function () {
    let summ =
      $(".nights").val() * $(".info__summ").data("nights") +
      ($(".guests").val() - 1) * $(".info__summ").data("guests");
    $(".info__summ").html("$" + " " + summ + " USD");
  });

  let summ =
    $(".nights").val() * $(".info__summ").data("nights") +
    ($(".guests").val() - 1) * $(".info__summ").data("guests");
  $(".info__summ").html("$" + " " + summ + " USD");

  $(".sleep-slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<button class="prev-btn" type="button"><img src="./images/prev-arrow.svg" alt="Icon"></button>',
    nextArrow:
      '<button class="next-btn" type="button"><img src="./images/next-arrow.svg" alt="Icon"></button>',
  });

  $(".shop-slider__surfboard-circle").on("click", function () {
    $(this).toggleClass("active");
  });
  $(".header__menu").on("click", function () {
    $(".header__nav").toggleClass("active");
  });
  new WOW().init();
});
