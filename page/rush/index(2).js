const iconBar = document.querySelector(".menu-icon");
//  메뉴아이콘
const nav = document.querySelector(".nav");
// 메뉴들
const loginIcon = document.querySelector(".fa-user");
// 로그인폼
const loginForm = document.querySelector(".login-form");
// 체크하는부분[메뉴들이 열려있나 닫혀있나]

const btn = document.querySelectorAll(".category");
const desc = document.querySelectorAll(".desc");
const contents = document.querySelectorAll(".contents");
const item = document.querySelectorAll("ul.item li a");

let sw = 0;

iconBar.addEventListener("click", function () {
  sw = !sw;
  this.classList.toggle("change");
  if (sw) {
    nav.style.height = "150px";
  } else {
    nav.style.height = "0";
  }
});
loginIcon.addEventListener("click", function () {
  loginForm.classList.toggle("on");
  this.classList.toggle("on")
});

// btn.addEventListener("click", function (e) {
//   e.preventDefault()
//   // desc.classList.toggle("on");
  
// });

for (let i=0; i < desc.length; i++) {
  btn[i].addEventListener('click', function() {
      this.nextElementSibling.classList.toggle('on');
  });
}


(window.onload = function () {
  const tabMenu = document.querySelectorAll(".con_btn");
  const tabcontent = document.querySelectorAll(".contents");

  tabMenu.forEach((tabmenu, i) => {
    tabmenu.addEventListener("click", function (e) {
      e.preventDefault();
      tabShow(i);
      activeMenu(i);
    });
  });

  function activeMenu(idx) {
    tabMenu.forEach((tabmenu) => {
      tabmenu.classList.remove("on");
    });
    tabMenu[idx].classList.add("on");
  }

  function tabShow(idx) {
    tabcontent.forEach((tab) => {
      tab.style.display = "none";
    });
    tabcontent[idx].style.display = "block";
  }
});

// 왜 첫 태그만 실행이 되는가???

// item.addEventListener("click", function (e) {
//   e.preventDefault();
// });
