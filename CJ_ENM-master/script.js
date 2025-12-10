let bullet = $(".swiper-pagination-bullet");
let atv = bullet.hasClass(".swiper-pagination-bullet-active");
function underLine() {
  let i = bullet.index();
  console.log(i);
  if (atv == 0) {
    $("li.tab-list").eq(i).addClass("on");
  }
  if (atv !== 0) {
    $("li.tab-list").removeClass("on");
  }
}