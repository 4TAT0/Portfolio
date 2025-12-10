
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


// ------------------------------------------------

gsap.utils.toArray('.list li a')
.forEach(category => {
    let {label} = category.dataset
    
    category.addEventListener('mouseenter', () => {
        gsap.to(`img[data-image=${label}]`, {opacity: 1, scale: 1})
        gsap.set(`img[data-image=${label}]`, {zIndex: 1})
        gsap.set(`a[data-label=${label}]`, {zIndex: 2})
    })
    
    category.addEventListener('mouseleave', () => {
        gsap.to(`img[data-image=${label}]`, {opacity: 0, zIndex: -1, scale: .80})
        gsap.set(`a[data-label=${label}]`, {zIndex: 0})
    })
})