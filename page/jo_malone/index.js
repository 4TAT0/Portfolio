$("li.main").mouseenter(function () {
  $("li.main").removeClass("on");
  $(this).addClass("on");

  $("ul.sub li").removeClass("on");
  $(this).find("ul.sub li").addClass("on");
});

$("ul.sub li").mouseenter(function () {
  $("ul.sub li a").removeClass("on");
  $(this).find("a").addClass("on");
});
