$(document).ready(function () {

 $(".navbar-toggler").click(function () {
   $(".navbar-ul-items").addClass("active");
 });

 $(".close-toggler").click(function () {
   $(".navbar-ul-items").removeClass("active");
 });


  // current years jQuery
  $("#currentYear").text(new Date().getFullYear());

  $(".input-form input, .input-form textarea").focus(function () {
    $(this).parents(".input-form").addClass("active");
  });

  $(".input-form input, .input-form textarea").blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".input-form").removeClass("active");
    } else {
      $(this).addClass("filled");
    }
  });

  // wow animation jQuery
  new WOW().init();
});