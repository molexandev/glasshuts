$(function () {

    $(".top-slider__inner").slick({
        dots: true,
        arrows: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        draggable: true,
    });

    // page-slider-left

    $(".slider-page__slider-inner").slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        draggable: true,
    });

    // BOOKING SLIDE

    $(".choose-services__label").on("click", function () {
      $(".choose-services__input").toggleClass("choose-services__input--active");
      $(this).next().slideToggle();
    });



  //   $(".asdasdasdas").on("click", function () {
  //     $('.asdasdasdas').toggleClass("choose-services__label-77777777777");
  // });

});
