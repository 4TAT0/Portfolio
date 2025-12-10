$('li.main').mouseenter(function(){
    $('ul.sub').stop().slideUp()
    $(this).find('ul.sub').stop().slideDown()
})
$('li.main').mouseleave(function(){
    $('ul.sub').stop().slideUp()
})