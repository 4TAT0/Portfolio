$(window).scroll(function () {
  $("section").each(function (i) {
    let h = $(window).height() / 2;
    let scrTop = $(window).scrollTop();
    scrTop = scrTop + h;
    

    let sect4 = $("#sect4").offset().Top;

    if (scrTop >= sect4) {
      $(".sticky").addClass("on");

      $("article").each(function (i) {
        let articleTop = $(this).offset().top;
        if (scrTop >= articleTop) {
          console.log(articleTop);
          $(".menu li a").removeClass("on");
          $(".menu li").eq(i).find("a").addClass("on");
          $(this)
            .find("li")
            .each(function (j) {
              $(this)
                .delay(j * 100)
                .animate({ opacity: "1", top: "0" });
            }, "linear");
        }
      });
    } else {
      $(".sticky").removeClass("on");
    }
  });
});
