 
const get = (target) => {
  return document.querySelector(target);
};
const getAll = (target) => {
  return document.querySelectorAll(target);
};

const fixedHeader = get(".fixedHeader");
const headerElem = get("header");

// 헤더
document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    headerElem.classList.add("on");
  } else if (e.deltaY < 0) {
    headerElem.classList.remove("on");
  }
});


//  메뉴 호버
$("nav li.main").mouseenter(function () {
 
  $("ul.sub").stop().slideDown();
  $(".bgNav").stop().slideDown();
});
$("nav li.main").mouseleave(function () {
  $("ul.sub").stop().slideUp();
  $(".bgNav").stop().slideUp();
});

window.addEventListener("resize", function () {
  pointerAni(aElems[0]);
});



// brand 스크롤
window.addEventListener("scroll", function () {
  let winTop = this.document.documentElement.scrollTop;
  // document.querySelector("h1").innerHTML = winTop;

  const sect3Top = document.querySelector("#sect3").offsetTop;
// console.log(winTop);
  if (winTop >= 1500) {
    fixedHeader.classList.remove("on");
  } else {
    fixedHeader.classList.add("on");
  }
});
 
activeBtn($(".tabmenu li a.on"));

$(".tabmenu li a").click(function (e) {
  e.preventDefault();
  activeBtn($(this));
  let href = $(this).attr("href");
  $("article").removeClass("on");
  $(href).addClass("on");
});

function activeBtn(active) {
  $(".tabmenu li a").removeClass("on");
  active.addClass("on");
  let posX = active.offset().left - 5;
  let aWidth = active.width() / 2;

  console.log(posX, aWidth);
  $("a.dot")
    .stop()
    .animate({ left: posX + aWidth });
}


const aElems = getAll(".tabmenu li a");
const pointer = get("a.dot");
const articleElems = getAll("article");

pointerAni(aElems[0]);

aElems.forEach((aElem) => {
  aElem.addEventListener("click", function (e) {
    e.preventDefault();
    let href = aElem.getAttribute("href");
    pointerAni(this);
    articleShow(idx);
  });
});
function pointerAni(target) {
  let posX = target.offsetLeft;
  let aWid = target.clientWidth;
  pointer.style.left = posX + aWid / 2 - 5 + "px";
}
function articleShow(i) {
  articleElems.forEach((tab) => {
    tab / classList.remove("on");
  });
  articleElems[i].classList.add("on");
}
window.addEventListener("resize", function () {
  pointerAni(aElems[0]);
});
 
