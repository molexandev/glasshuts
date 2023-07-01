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

    // BOOKING SLIDER

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

    // FAQ slider

    $(".faq__title").on("click", function () {
      $(this).next().slideToggle();
    });

    // MASK

    var element = document.getElementById('card-number');
    var maskOptions = {
      mask: '0000-0000-0000-0000'
    };    
    var mask = IMask(element, maskOptions);

    
    var element = document.getElementById('phone-number');
    var maskOptions = {
      mask: '+00(000)-000-00-00'
    };
    var mask = IMask(element, maskOptions);


    // FORM styller

    $('.services-aside__inp-number').styler();
    $('.payment__select-flag').styler();


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

  // CHECKBOX

  function fun1() {
    var chbox;
    chbox=document.getElementById('payment-checkbox');
      if (chbox.checked) {
        $('.payment__icon-checked-svg').addClass("payment__icon-checked-svg--active");
        $('.payment__icon-unchecked-svg').addClass("payment__icon-unchecked-svg--active");
      }
      else {
        $('.payment__icon-checked-svg').removeClass("payment__icon-checked-svg--active");
        $('.payment__icon-unchecked-svg').removeClass("payment__icon-unchecked-svg--active");
      }
    };


  