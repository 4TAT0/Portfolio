// -----header 열고닫기
$(function () {
  $(".menuBar").click(function (e) {
    e.preventDefault();

    let opened = $("header").hasClass("on");
    if (opened) {
      // $("a.menuBar i.fa-bars").removeClass("on");
      $("header").removeClass("on");
      $("a.menuBar i").removeClass("active");
      $("a.menuBar .fa-bars").addClass("active");
    } else {
      // $("a.menuBar i").addClass("on");
      $("header").addClass("on");
      $("a.menuBar i").removeClass("active");
      $("a.menuBar .fa-xmark").addClass("active");
    }
  });
});
//------------sect1 tablet
//$("#sect1 .slideContainer .slide").index[0].css({ "background-size": "180vh" });
$("#sect1 .article1 .gnb li").click(function () {
  let idx = $(this).index();
  $("#sect1 .desc li").removeClass("on");
  $("#sect1 .desc li").eq(idx).addClass("on");
  $("#sect1 .slideContainer .slide").removeClass("on");
  $("#sect1 .slideContainer .slide").eq(idx).addClass("on");
});
$("#sect1 .article1 .gnb li a").click(function (e) {
  e.preventDefault();
});

// -------------sect3 mobile --
var swiper31 = new Swiper("#sect3 .dramaSlide", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    activeIndexChange: function () {
      $('#sect3 .article1 .desc li').removeClass('on')
      $('#sect3 .article1 .desc li').eq(this.activeIndex).addClass('on')
    }
  }
});
//------------sect3 tablet
$("#sect3 aside .sect3_tabmenu li").click(function (e) {
  e.preventDefault();
  let idx = $(this).index();
  $("#sect3 aside .sect3_tabmenu li a").removeClass("on");
  $(this).find("a").addClass("on");
  $("#sect3 article").removeClass("on");
  $("#sect3 article").eq(idx).addClass("on");
});
$("#sect3 aside .sect3_tabmenu li a").click(function (e) {
  e.preventDefault();
});

var swiper32 = new Swiper("#sect3 .showSlide", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    activeIndexChange: function () {
      $('#sect3 .article2 .desc li').removeClass('on')
      $('#sect3 .article2 .desc li').eq(this.activeIndex).addClass('on')
    }
  }
});
var swiper33 = new Swiper("#sect3 .storySlide", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    activeIndexChange: function () {
      $('#sect3 .article3 .desc li').removeClass('on')
      $('#sect3 .article3 .desc li').eq(this.activeIndex).addClass('on')
    }
  }
});

//--------------sect4 mobile
$("#sect4 aside ul li").click(function () {
  let idx = $(this).index();
  $("#sect4 aside ul li").removeClass("on");
  $(this).addClass("on");
  $("#sect4 .article1 .slideContainer").removeClass("on");
  $("#sect4 .article1 .slideContainer").eq(idx).addClass("on");
});
//--------------sect5 mobile tabmenu
$("#sect5 aside a").click(function (e) {
  e.preventDefault();
  let idx = $(this).index();
  $("#sect5 aside a").removeClass("on");
  $(this).addClass("on");
  $("#sect5 .article1 .slideContainer").removeClass("on");
  $("#sect5 .article1 .slideContainer").eq(idx).addClass("on");
});
