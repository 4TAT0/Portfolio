// remote 관련 js 코드
const remote = document.querySelectorAll("#remote li");
const sectionElems = document.querySelectorAll("section");
const con = document.querySelector(".container");
const fixedshrimp = document.querySelector(".basic");

remote.forEach((li) => {
  li.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault();
    let href = this.getAttribute("href");
    let sectionTop = document.querySelector(href).offsetTop;

    window.scrollTo({ top: sectionTop, left: 0, behavior: "smooth" });
  });
});

window.addEventListener("scroll", function () {
  let scrollTop = this.scrollY;
  sectionElems.forEach((section, i) => {
    let sectionTop = section.offsetTop;

    if (scrollTop >= sectionTop) {
      remote.forEach((li) => {
        li.querySelector("a").classList.remove("on");
      });
      remote[i].querySelector("a").classList.add("on");

      if (i > 0 && i < 5) {
        wrapElem.forEach((wrap) => {
          wrap.classList.remove("anibg");

          subTit.forEach((title) => {
            title.classList.remove("on");
          });
          contentMenuElems.forEach((menu) => {
            menu.classList.remove("on");
          });
        });
        section.firstElementChild.classList.add("anibg");
        section.querySelector(".subTit").classList.add("on");
        section.querySelector(".contentMenu").classList.add("on");
      }
    }
  });
});

//많은 hover 이미지 관련 코드

function toggleImg(imgElem, enter, leave) {
  let changImg = imgElem.getAttribute("src").replace(enter, leave);
  imgElem.setAttribute("src", changImg);
}

sectionElems.forEach((section) => {
  const liElem = section.querySelectorAll(".contentMenu li");
  liElem.forEach((li) => {
    li.addEventListener("mouseenter", function () {
      let thisImg = this.querySelector("img");
      console.log(thisImg);
      toggleImg(thisImg, "Off", "On");
    });
    li.addEventListener("mouseleave", function () {
      let thisImg = this.querySelector("img");
      toggleImg(thisImg, "On", "Off");
    });
  });
});

//fixed 봉지 코드

window.addEventListener("scroll", function () {
  let scrollY = this.scrollY;
  console.log(scrollY);
  if (scrollY >= 300) {
    fixedshrimp.classList.add("on");
  } else {
    fixedshrimp.classList.remove("on");
  }
});
