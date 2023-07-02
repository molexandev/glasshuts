$(function () {

//    // fadeIn

//    (function () {
//       var topSlider = document.querySelector(".top-slider");
//       var cabinsTitle = document.querySelector(".cabins__title");
//       var cabinsText = document.querySelector(".cabins__text");
//       var cabinsLink = document.querySelector(".cabins__link");
//       var videoItemFadeIn = document.querySelector(".video__item--fadein");
  
//       var observer = new IntersectionObserver((entries) => {
//           entries.forEach((entry) => {
//               if (
//                   typeof getCurrentAnimationPreference === "function" && !getCurrentAnimationPreference()
//               ) {
//                   return;
//               }
  
//               if (entry.isIntersecting) {
//                   entry.target.classList.add("animate__animated");
//                   entry.target.classList.add("animate__fadeIn");
//               }
//           });
//       });
  
//             observer.observe(topSlider);
//             observer.observe(cabinsTitle);
//             observer.observe(cabinsText);
//             observer.observe(cabinsLink);
//             observer.observe(videoItemFadeIn);

//       })();

//    // fadeInRLeft

//     (function () {
//       var videoItemLeft = document.querySelector(".video__item--left");
//       var moreAboutLeft = document.querySelector(".more-about__img-box--left");

//       var observer = new IntersectionObserver((entries) => {
//           entries.forEach((entry) => {
//               if (
//                   typeof getCurrentAnimationPreference === "function" && !getCurrentAnimationPreference()
//               ) 
//               {
//                   return;
//               }

//               if (entry.isIntersecting) {
//                   entry.target.classList.add("animate__fadeInLeft");
//                   entry.target.classList.add("animate__animated");
//               }
//           });
//       });

//       observer.observe(videoItemLeft);
//       observer.observe(moreAboutLeft);
//    })();


//       // fadeInRight

//       (function () {
//          var videoItemRight = document.querySelector(".video__item--right");
//          var moreAboutRight = document.querySelector(".more-about__img-box--right");
 
//          var observer = new IntersectionObserver((entries) => {
//              entries.forEach((entry) => {
//                  if (
//                      typeof getCurrentAnimationPreference === "function" && !getCurrentAnimationPreference()
//                  ) 
//                  {
//                      return;
//                  }
 
//                  if (entry.isIntersecting) {
//                      entry.target.classList.add("animate__fadeInRight");
//                      entry.target.classList.add("animate__animated");
//                  }
//              });
//          });

//          observer.observe(videoItemRight);
//          observer.observe(moreAboutRight);
//      })();



 
});






    // =====================   FadeIN

    function addClassOnScrollAppearance() {
        var scrollBlocks = document.querySelectorAll('.fadein__appearance');
        var windowHeight = window.innerHeight;

        scrollBlocks.forEach(function(block) {
            var scrollOffset = block.getBoundingClientRect().top;

            if (scrollOffset < windowHeight) {
                block.classList.add('animate__fadeIn');
                block.classList.add('animate__animated');
            }
        });
    }

    // Викликаємо функцію при першому завантаженні сторінки
    addClassOnScrollAppearance();

    // Відслідковуємо подію прокрутки сторінки і знову викликаємо функцію
    window.addEventListener('scroll', addClassOnScrollAppearance);

    // Відслідковуємо подію перезавантаження сторінки і знову викликаємо функцію
    window.addEventListener('load', addClassOnScrollAppearance);







    // =====================   RIGHT

    function addClassOnScroll() {
        var scrollBlocks = document.querySelectorAll('.fadein__right');
        var windowHeight = window.innerHeight;

        scrollBlocks.forEach(function(block) {
            var scrollOffset = block.getBoundingClientRect().top;

            if (scrollOffset < windowHeight) {
                block.classList.add('animate__fadeInRight');
                block.classList.add('animate__animated');
            }
        });
    }

    // Викликаємо функцію при першому завантаженні сторінки
    addClassOnScroll();

    // Відслідковуємо подію прокрутки сторінки і знову викликаємо функцію
    window.addEventListener('scroll', addClassOnScroll);

    // Відслідковуємо подію перезавантаження сторінки і знову викликаємо функцію
    window.addEventListener('load', addClassOnScroll);







    // =====================   LEFT

    function addClassOnScrollLeft() {
        var scrollBlocks = document.querySelectorAll('.fadein__left');
        var windowHeight = window.innerHeight;

        scrollBlocks.forEach(function(block) {
            var scrollOffset = block.getBoundingClientRect().top;

            if (scrollOffset < windowHeight) {
                block.classList.add('animate__fadeInLeft');
                block.classList.add('animate__animated');
            }
        });
    }

    // Викликаємо функцію при першому завантаженні сторінки
    addClassOnScrollLeft();

    // Відслідковуємо подію прокрутки сторінки і знову викликаємо функцію
    window.addEventListener('scroll', addClassOnScrollLeft);

    // Відслідковуємо подію перезавантаження сторінки і знову викликаємо функцію
    window.addEventListener('load', addClassOnScrollLeft);