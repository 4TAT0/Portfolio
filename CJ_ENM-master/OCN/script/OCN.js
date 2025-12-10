$(document).ready(function () {
  $("header .bar a").on("click", function (e) {
    e.preventDefault()
    $(".menu_bg").fadeIn();
    $(".menu_wrap").fadeIn().animate({ right: 0 });
  });
  $(".close a").on("click", function (e) {
    e.preventDefault()
    console.log(".close a")
    $(".menu_bg").fadeOut();
    $(".menu_wrap")
      .fadeOut()
      .animate({ right: "-" +20  + "%"}, function () {
        $(".menu_wrap").fadeOut();
      });
  });
});



// sect2

// var sect2swiper = new Swiper(".sect2_poster", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "3",
//   spaceBetween: 100,
//   loop: true,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 40,
//     depth: 100,
//     modifier: 2,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var sect2swiper = new Swiper(".sect2_poster", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate:0,
    stretch: 40,
    depth: 100,
    modifier: 1,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


sect2swiper.on("slideChange", function () {
  let idx = sect2swiper.activeIndex - 5;
  $(".sect2Wrap .contents").removeClass("on");
  console.log(idx);
  $(".sect2Wrap .contents").eq(idx).addClass("on");
});

// sect3
var swiper = new Swiper(".sect3_slide", {
  slidesPerView: 4,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//sect4

//01
var swiper = new Swiper(".sect4_slide01", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 02
var swiper = new Swiper(".sect4_slide02", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$(document).ready(function () {
  var elem = $("#sect3 article"),
    pos = elem.offset(),
    elem_left = pos.left,
    elem_top = pos.top,
    elem_width = elem.width(),
    elem_height = elem.height(),
    x_center,
    y_center;

  $("#sect3 article, #sect4 article").mousemove(function (e) {
    x_center = elem_width / 2 - (e.pageX - elem_left);
    y_center = elem_height / 2 - (e.pageY - elem_top);

    $(".circle01, .circle02, .circle").each(function () {
      var speed = $(this).attr("data-speed"),
        xPos = Math.round(((-1 * x_center) / 20) * speed),
        yPos = Math.round((y_center / 20) * speed);

      if (yPos < 0) yPos = -2 * speed;

      $(this).css(
        "transform",
        "translate3d(" + xPos + "px, " + yPos + "px, 0px)"
      );
    });
  });
});


function setTimer() {
  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }
  if (seconds.toString().length == 1) {
    seconds = "0" + seconds;
  }
  $(".TARGET").html(hour + ":" + minutes + ":" + seconds);
}
setTimer();
setInterval(function () {
  setTimer();
}, 1000);
