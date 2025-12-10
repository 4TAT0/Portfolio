// 슬라이드 동작

let cnt = 0;
let prev=$("a.prev")
let next=$("a.next")
next.click(function () {
  cnt++;
  $(this).addClass("on");
  prev.removeClass("on");
  prev.fadeIn();
  if (cnt == 5) {
    $("section").animate({ left: "-=160" }, function () {
      $("section").animate({ left: "0" });
    });
    cnt = 0;
    prev.fadeOut();
    $(this).removeClass("on");
  } else {
    $("section").animate({ left: "-=380" });
  }
});
prev.click(function () {
  cnt--;
  $(this).addClass("on");
  next.removeClass("on");
  next.fadeIn();
  idx = $(this).index();
  if (cnt == 0) {
    $("section").animate({ left: "0" });
    prev.fadeOut();
    $(this).removeClass("on");
  } else if ((cnt > 1, cnt < 5)) {
    $("section").animate({ left: "+=380" });
  }
});
