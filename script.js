$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    console.log($nav.height());
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
  });
});
