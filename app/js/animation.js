$(function () {

   // fadeIn

   (function () {
      var topSlider = document.querySelector(".top-slider");
      var cabinsTitle = document.querySelector(".cabins__title");
      var cabinsText = document.querySelector(".cabins__text");
      var cabinsLink = document.querySelector(".cabins__link");
      var videoItemFadeIn = document.querySelector(".video__item--fadein");
  
      var observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (
                  typeof getCurrentAnimationPreference === "function" &&
                  !getCurrentAnimationPreference()
              ) {
                  return;
              }
  
              if (entry.isIntersecting) {
                  entry.target.classList.add("animate__animated");
                  entry.target.classList.add("animate__fadeIn");
              }
          });
      });
  
            observer.observe(topSlider);
            observer.observe(cabinsTitle);
            observer.observe(cabinsText);
            observer.observe(cabinsLink);
            observer.observe(videoItemFadeIn);

      })();

   // fadeInRLeft

    (function () {
      var videoItemLeft = document.querySelector(".video__item--left");
      var moreAboutLeft = document.querySelector(".more-about__img-box--left");

      var observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (
                  typeof getCurrentAnimationPreference === "function" && !getCurrentAnimationPreference()
              ) 
              {
                  return;
              }

              if (entry.isIntersecting) {
                  entry.target.classList.add("animate__fadeInLeft");
                  entry.target.classList.add("animate__animated");
              }
          });
      });

      observer.observe(videoItemLeft);
      observer.observe(moreAboutLeft);
   })();


      // fadeInRight

      (function () {
         var videoItemRight = document.querySelector(".video__item--right");
         var moreAboutRight = document.querySelector(".more-about__img-box--right");
 
         var observer = new IntersectionObserver((entries) => {
             entries.forEach((entry) => {
                 if (
                     typeof getCurrentAnimationPreference === "function" && !getCurrentAnimationPreference()
                 ) 
                 {
                     return;
                 }
 
                 if (entry.isIntersecting) {
                     entry.target.classList.add("animate__fadeInRight");
                     entry.target.classList.add("animate__animated");
                 }
             });
         });

         observer.observe(videoItemRight);
         observer.observe(moreAboutRight);
     })();
 
});