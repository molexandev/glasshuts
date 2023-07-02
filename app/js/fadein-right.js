$(function () {




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