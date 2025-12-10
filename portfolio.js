// 로드
// const load = $(".load");
// const html = $("html");

// html.css({ overflow: "hidden" });

// $(window).on("load", () => {
//   setTimeout(() => {
//     load.fadeOut(300);
//     html.css({ overflow: "auto" });
//   }, 2800);
// });

// ★★★★★★★★★★제이쿼리 스크롤 제어문 ★★★★★★★★★★★★★★★★★
// $(window).scroll(function () {
//   let scrTop = $(window).scrollTop();
//   $("h1").text(scrTop);
// });
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

// ★★★★★★★★★★자바스크립트 스크롤 제어문 ★★★★★★★★★★★★★★★★★

// const h1Elem = document.querySelector("h1");

// window.scroll(function () {
//   let scrTop = this.scrollY;
//   console.log(scrTop);
//   h1Elem.innerText(scrTop);
// });

//★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// remote > 오른쪽버튼
let remoteElems = document.querySelectorAll(".remote ul li a");

remoteElems.forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

$(window).scroll(function () {
  let h = $(window).height();
  let scrTop = $(this).scrollTop();

  $(".wrap section").each(function (idx) {
    let sectT = $(this).offset().top;
    if (scrTop >= sectT) {
      // console.log(idx);
      if (idx == 0) {
        let s = scrTop / 10;
        console.log(s);
        $("#intro .door").css({"trasnform": "scale(" + s + ")"});
      }
      if (idx == 5) {
        $(".desc_title").addClass("text-typing");
      }
      if (idx == 7) {
        bar.forEach((elem) => {
          frame(elem);
        });
      }
      // 능력치바, 타이핑 반응형 제어문

      $("section").removeClass("on");
      $(this).addClass("on");

      $(".remote li a").removeClass();

      if (idx == 1 || idx == 2 || idx == 3 || idx == 4) {
        $(".remote li").eq(idx).find("a").addClass("white");
      } else {
        $(".remote li").eq(idx).find("a").addClass("black");
      }
    }
  });
});

// // 마우스휠
$("section").on("mousewheel", function (e, delta) {
  if (delta > 0) {
    // console.log("UP");
    let prev = $(this).prev().offset().top;
    $("html, body").stop().animate({ scrollTop: prev }, 500);
  } else if (delta < 0) {
    // console.log("Down");
    let next = $(this).next().offset().top;
    $("html, body").stop().animate({ scrollTop: next }, 500);
  }
});

// 인트로
var typingBool = false;
var typingIdx = 0;
var liIndex = 0;
var liLength = $(".typing-txt01>ul>li").length;
var tyInt;

// 타이핑될 텍스트를 가져온다
var typingTxt = $(".typing-txt01>ul>li").eq(liIndex).text();
typingTxt = typingTxt.split(""); // 한글자씩 자른다.
if (typingBool == false) {
  // 타이핑이 진행되지 않았다면
  typingBool = true;
  setTimeout(() => {
    tyInt = setInterval(typing, 100); // 반복동작
  }, 0);
}

function typing() {
  $(".typing ul li").removeClass("on");
  $(".typing ul li").eq(liIndex).addClass("on");
  if (typingIdx < typingTxt.length) {
    // 타이핑될 텍스트 길이만큼 반복
    $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
    typingIdx++;
  } else {
    if (liIndex < liLength - 1) {
      //다음문장으로  가기위해 인덱스를 1증가
      liIndex++;
      //다음문장을 타이핑하기위한 셋팅
      typingIdx = 0;
      typingBool = false;
      typingTxt = $(".typing-txt01>ul>li").eq(liIndex).text();

      //다음문장 타이핑전 1초 쉰다
      clearInterval(tyInt);
      //타이핑종료

      setTimeout(function () {
        //1초후에 다시 타이핑 반복 시작
        tyInt = setInterval(typing, 100);
      }, 1000);
    } else if (liIndex == liLength - 1) {
      //마지막 문장까지 써지면 반복종료
      clearInterval(tyInt);
    }
  }

  if (matchMedia("screen and (min-width: 1024px)").matches) {
    // 1024px 이상에서 사용할 JavaScript
  } else {
    // 1024px 미만에서 사용할 JavaScript
  }

  $(function () {
    $(".typing ul li").addClass("titleStyle_black");
    $(".typing ul li").last().addClass("titleStyle_stroke");
  });
}

let num = 0;
let idx = 0;
let delta;
const mainImg = document.querySelector(".door");
const mainTit = document.querySelector(".typing-txt01");
const elMainCon = document.querySelectorAll("#webdesign");

// // mousewheel DOMMouseScroll 스크롤 이벤트
// window.addEventListener("mousewheel DOMMouseScroll", function (e) {
//   delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;
//   // e.originalEvent.wheelDelta || e.originalEvent.detail는 스크롤을 했을때 페이지가 아래로 이동하면 양수가, 위로 이동하면 음수가 나온다. 여기서는 편의를 위해 -1을 곱해서 음수와 양수를 역으로 만들어주었다.

//   if (delta < 0) {
//     // 스크롤을 아래로 내렸을 때

//     if (!(num == 12)) {
//       // num이 12가 아닐 때
//       // num의 증가범위를 12로 잡은 이유는, 비주얼 컨텐츠의 동작 횟수를 12회 내로 잡았기 때문.

//       num++; // num 증가

//       if (num <= 11) {
//         // num이 11과 같거나 작다면

//         mainImg.style = `width:${num * 5 + 50}vw; height:${
//           num * 5 + 105
//         }vh; border-radius: 600px 600px 0 0; opacity: 1`;
//         // 비주얼 컨텐츠 영역의 넓이가 변하도록 스타일 조정(커짐)
//       }
//     }
//     if (num == 12 && idx < elMainCon.length) {
//       // num이 12와 같고(비주얼 컨텐츠가 변하고 다음 페이지로 넘어갈 준비가 된 순간),
//       // idx(초기값0)가 첫 페이지 다음으로 오는 페이지들의 수보다 적을 때

//       idx++; // idx를 증가시킴
//     }
//   } else {
//     // 스크롤을 위로 올렸을 때

//     if (!(idx == 0)) {
//       // idx가 0이 아니라면
//       idx--; // idx를 감소시켜라
//     }
//     if (num > 0 && idx == 0) {
//       // num이 0보다 크고 idx가 0일때

//       num--; // num을 감소시키고

//       mainImg.style = ` width:300px; height:500px;
//       }vh; border-radius: 300px 300px 0 0;`;
//       // 비주얼 컨텐츠 영역의 넓이가 변하도록 스타일 조정(작아짐)
//     }
//   }

//   if (num >= 10) {
//     mainTit.style = `color: #fff;`;
//     mainImg.classList.add("on");
//   } else {
//     mainTit.style = `color:#000;`;
//     mainImg.classList.remove("on");
//   }

//   $("html,body")
//     .stop()
//     .animate(
//       {
//         scrollTop: $(window).height() * idx,
//       },
//       600
//     );
//   $("html,body")
//     .stop()
//     .animate(
//       {
//         scrollTop: $(window).height() * idx,
//         // 화면의 높이값에 스크롤에 따라 변하는 idx값을 곱해서 페이지 단위로 이동시킨다.
//         // idx가 1이라면 첫 페이지에서 다음 페이지로, idx가 2라면 두 번 째 페이지에서 세 번 째 페이지로 이동하는 식으로 작동한다.
//       },
//       700
//     );
// });
// // 인트로end

// 퍼블리싱 호버
const door = document.querySelector(".thum_door");
const liElem = document.querySelectorAll(".list li");

liElem.forEach((li) => {
  li.addEventListener("mouseenter", function () {
    let thisImg = this.querySelector(".list a").dataset.img;
    // console.log(thisImg);
    door.style.backgroundImage = `url(${thisImg})`;
    door.style.backgroundPosition = "center";
    door.classList.add("on");
  });
});

// 앱팀프로젝트 텍스트타이핑
const text = document.querySelector(".typ-txt01");
const words = ["WALK.", "ENJOY.", "HEALING.", "TODOG."];

setTyper(text, words);

function setTyper(element, words) {
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}

// 웹팀프로젝트 텍스트타이핑
const text02 = document.querySelector(".typ-txt02");
const words02 = ["MNET.", "tvN.", "OCN.", "CJ ENM."];

setTyper(text02, words02);

function setTyper(element, words) {
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}

// 능력치바
const bar = document.querySelectorAll(".bar");

function frame(item) {
  let initRate = 0;
  let rate = item.dataset.rate;
  let skill = item.querySelector(".rate");
  let span = item.querySelector("span");

  let id = setInterval(function () {
    initRate++;
    if (rate == initRate) {
      clearInterval(id);
    }
    skill.style.width = `${initRate}%`;
    span.innerText = `${initRate}%`;
  }, 10);
}

// bar.forEach((elem) => {
//   frame(elem);
// });
// ↑실행조건문

//탭메뉴
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


$(document).ready(function (event) {
  $(".iframe").colorbox({ iframe: true, innerWidth: "1000px", height: "80%" })
});