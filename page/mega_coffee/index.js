$("li.main").mouseenter(function () {
  $("ul.sub").stop().slideDown();
  $(".full_bg").stop().slideDown();
});
$("li.main").mouseleave(function () {
  $("ul.sub").stop().slideUp();
  $(".full_bg").stop().slideUp();
});
// ------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
