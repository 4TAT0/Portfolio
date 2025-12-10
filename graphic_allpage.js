$(".bluelogo").click(function () {
  $("#tabmenu").slideDown(1000);
  $(this).removeClass("on");
  $(".whitelogo").addClass("on");
});
$(".whitelogo").click(function () {
  $("#tabmenu").slideUp(1000);
  $(this).removeClass("on");
  $(".bluelogo").addClass("on");
});

$(document).ready(function () {
  $(".menu li a").click(function () {
    let href = $(this).attr("href");
    $("#tabmenu").slideUp(1000);
  });
});
