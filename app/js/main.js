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

    // // BOOKING SLIDE

    // $(".choose-services__label").on("click", function () {
    //   $(".choose-services__input").toggleClass("choose-services__input--active");
    //   $(this).next().slideToggle();
    // });

    $('input ').styler();
    
    new AirDatepicker('#airdatepicker', {
      autoClose: true,
      position: 'bottom center',
    });
    new AirDatepicker('#airdatepicker2', {
      autoClose: true,
      position: 'bottom center',
    });
    
  });
