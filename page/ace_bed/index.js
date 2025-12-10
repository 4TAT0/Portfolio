// header
let menu01 = $("ul.menu01");
menu01.mouseenter(function (e) {
  e.preventDefault();
  $("header").removeClass("on");
  $(".fullbg").stop().animate({ top: "155px" }).css("z-index", 1);
  $(this).find("ul.sub").stop().fadeIn().css("z-index", 2);
  $(this).find("span.current").stop().hide();
  $(this).find("span.over").stop().show();
  $(this).find("li.main>a").addClass("on");
  $("h1").stop().fadeOut();
});
menu01.mouseleave(function (e) {
  e.preventDefault();
  $("header").addClass("on");
  $(".fullbg").stop().animate({ top: "0" }).css("z-index", -1);
  $(this).find("ul.sub").stop().fadeOut();
  $(this).find("span.current").stop().show();
  $(this).find("span.over").stop().hide();
  $(this).find("li.main>a").removeClass("on");
  $("h1").stop().fadeIn();
});

let menu02 = $("ul.menu02");
menu02.mouseenter(function (e) {
  e.preventDefault();
  $("header").removeClass("on");
  $(".fullbg").stop().animate({ top: "155px" }).css("z-index", 1);
  $(this).find("ul.sub").stop().fadeIn().css("z-index", 2);
  $(this).find("li.main>a").addClass("on");
  $("h1").stop().fadeOut();
});
menu02.mouseleave(function (e) {
  e.preventDefault();
  $("header").addClass("on");
  $(".fullbg").stop().animate({ top: "0" }).css("z-index", -1);
  $(this).find("ul.sub").stop().fadeOut();
  $(this).find("li.main>a").removeClass("on");
  $("h1").stop().fadeIn();
});
// sect1

var swiper = new Swiper(".sect01", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// sect2

let currentIndex = 0;
let slideCount = $(".slide").length;
let prev = $("a.prev");
let next = $("a.next");
// ㄴ공통변수

function eventNone(arrow) {
  arrow.css({ "pointer-events": "none" });
  arrow.addClass("none");
}
function eventAuto(arrow) {
  arrow.css({ "pointer-events": "auto" });
  arrow.removeClass("none");
}
//ㄴ화살표값

function goToSlide(i) {
  $(".slideWrap")
    .stop()
    .animate({ left: i * -100 + "%" }, 1000, "swing");
  $(".verticalSlide")
    .stop()
    .animate({ top: i * -100 + "%" }, 1000, "swing");
  currentIndex = i;
  updateNav();
}
//ㄴ슬라이드값

function updateNav() {
  if (currentIndex === 0) {
    eventNone(prev);
  } else {
    eventAuto(prev);
  }
  if (currentIndex === slideCount - 1) {
    eventNone(next);
  } else {
    eventAuto(next);
  }
}
//네비값

function ActiveLi(i) {
  $("#sect2 .menu li").removeClass("on");
  $("#sect2 .menu li").eq(i).addClass("on");
  $("#sect2 .verticalSlide div").eq(i).removeClass("on");
  $("#sect2 .verticalSlide div").eq(i).addClass("on");
}
//

next.click(function (e) {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    console.log(`currentIndex : ${currentIndex}<=>slideCount:${slideCount}`);
    goToSlide(currentIndex + 1);
    ActiveLi(currentIndex);
  }
});
prev.click(function (e) {
  e.preventDefault();
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
    ActiveLi(currentIndex);
  }
});
// ㄴ화살표버튼이동값

$("#sect2 .menu li").click(function (e) {
  e.preventDefault();
  let idx = $(this).index();
  ActiveLi(idx);
  goToSlide(idx);
});
goToSlide(0);
// ㄴ메뉴버튼이동값

// sect3

// 탭

$(".category li a").click(function (e) {
  e.preventDefault();
  $(".category li a").removeClass("on");
  $(this).addClass("on");

  let href = $(this).attr("href");
  $("#sect3 .swiper").css({ opacity: "0", "z-index": "90" });
  $(href).css({ opacity: "1", "z-index": "100" });
});

// 슬라이드
var sect3swiper01 = new Swiper(".sect_slide01", {
  slidesPerView: "auto",
  spaceBetween: 50,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

var sect3swiper02 = new Swiper(".sect_slide02", {
  slidesPerView: "auto",
  spaceBetween: 50,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

// sect4
// 슬라이드
var sect4swiper = new Swiper(".sect3_slide", {});

// 탭메뉴
$("#sect4 .menu li").click(function (e) {
  e.preventDefault();
  idx = $(this).index();
  $("#sect4 .menu li").removeClass("on");
  $(this).addClass("on");
  $("#sect4 .swiper-wrapper").animate({ left: idx * -100 + "%" });
});
sect4swiper.on("slideChange", function () {
  let idx = sect4swiper.activeIndex;
  $("#sect4 .menu li").removeClass("on");
  $("#sect4 .menu li").eq(idx).addClass("on");
});
