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

    $("#choose-services__inp1").on("click", function () {
      $('.form-open__inp1').slideToggle();
      $('.choose-services__arrow-open').toggleClass("choose-services__arrow-open--active");
      $('.choose-services__arrow-close').toggleClass("choose-services__arrow-close--active");
    });

    $("#choose-services__inp2").on("click", function () {
      $('.form-open__inp2').slideToggle();
      $('.choose-services__arrow-open2').toggleClass("choose-services__arrow-open--active2");
      $('.choose-services__arrow-close2').toggleClass("choose-services__arrow-close--active2");
    });

    // $("#choose-services__inp1, #choose-services__inp2").on("click", function () {
    //   $('.choose-services__arrow-open').toggleClass("choose-services__arrow-open--active");
    // });


    // FORM styller

    $('.services-aside__inp-number').styler();


    // CALENDER
    
    new AirDatepicker('#airdatepicker', {
      autoClose: true,
      position: 'bottom center',
    });
    new AirDatepicker('#airdatepicker2', {
      autoClose: true,
      position: 'bottom center',
    });
    
  });
