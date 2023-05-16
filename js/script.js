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
  $(".travel-slider").slick({
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
    $(".info__summ").html("$" + summ);
  });

  let summ =
    $(".nights").val() * $(".info__summ").data("nights") +
    ($(".guests").val() - 1) * $(".info__summ").data("guests");
  $(".info__summ").html("$" + summ);
});
