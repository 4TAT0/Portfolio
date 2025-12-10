// 스크롤할 때 마다 색상 변하는 js

const headerBg = [
  "#1e2c5a",
  "#ee781f",
  "#ffe100",
  "#7057a3",
  "#eb6ea5",
  "#c4d700",
  "#00341f",
];
const h1Img = ["logo_y.png", "logo_n.png", "logo_w.png"];
const menu_y = [
  "intro_y.png",
  "yyd_y.png",
  "banpo_y.png",
  "ddp_y.png",
  "chung_y.png",
  "season_y.png",
  "christ_y.png",
];
const menu_n = [
  "intro_n.png",
  "yyd_n.png",
  "banpo_n.png",
  "ddp_n.png",
  "chung_n.png",
  "season_n.png",
  "christ_n.png",
];
const memu_w = [
  "intro_w.png",
  "yyd_w.png",
  "banpo_w.png",
  "ddp_w.png",
  "chung_w.png",
  "season_w.png",
  "christ_w.png",
];

const sns_y = [
  "sns_facebook_icon_y.png",
  "sns_insta_icon_y.png",
  "sns_twitter_icon_y.png",
  "sns_youtube_icon_y.png",
];
const sns_n = [
  "sns_facebook_icon_n.png",
  "sns_insta_icon_n.png",
  "sns_twitter_icon_n.png",
  "sns_youtube_icon_n.png",
];
const sns_w = [
  "facebook_w.png",
  "insta_w.png",
  "twitter_w.png",
  "youtube_w.png",
];

let headerElem = document.querySelector("header");
headerElem.style.backgroundColor = headerBg[0];
let menuElems = headerElem.querySelectorAll(".menu li");
let snsElems = headerElem.querySelectorAll(".sns li");
let sectionElems = document.querySelectorAll("section");
let home = document.querySelector("a.top");
let banner = document.querySelector(".banner ul li");
var menuHight = document.querySelector(".menu").offsetHight;

window.addEventListener("scroll", function () {
  let scrTop = window.scrollY;
  sectionElems.forEach((section, i) => {
    // 각각의 section 위치값을 구하기.
    let secTop = section.offsetTop;
    // 스크롤 위치값과 각각의 section 위치 비교하기
    if (scrTop > secTop) {
      headerElem.style.backgroundColor = headerBg[i];

      if (i == 0 || i == 3) {
        headerElem
          .querySelector("h1 img")
          .setAttribute("src", "./img/" + h1Img[0]);
        menuElems.forEach((li, j) => {
          li.querySelector("img").setAttribute("src", "./img/" + menu_y[j]);
        });
        snsElems.forEach((li, k) => {
          li.querySelector("img").setAttribute("src", "./img/" + sns_y[k]);
        });
      } else if (i == 1 || i == 2 || i == 4 || i == 5) {
        headerElem
          .querySelector("h1 img")
          .setAttribute("src", "./img/" + h1Img[1]);
        menuElems.forEach((li, j) => {
          li.querySelector("img").setAttribute("src", "./img/" + menu_n[j]);
        });
        snsElems.forEach((li, k) => {
          li.querySelector("img").setAttribute("src", "./img/" + sns_n[k]);
        });
      } else {
        headerElem
          .querySelector("h1 img")
          .setAttribute("src", "./img/" + h1Img[2]);
        menuElems.forEach((li, j) => {
          li.querySelector("img").setAttribute("src", "./img/" + memu_w[j]);
        });
        snsElems.forEach((li, k) => {
          li.querySelector("img").setAttribute("src", "./img/" + sns_w[k]);
        });
      }
    }
  });

  if (scrTop >= 3000) {
    home.style.opacity = 1;
  } else {
    home.style.opacity = 0;
  }

  home.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  
  // banner.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   window.scrollTo({ top: sectionElems - menuHight, behavior: "smooth" });
  // });

  // menuElems.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   window.scrollTo({ top: sectionElems - menuHight, behavior: "smooth" });
  // });
});
