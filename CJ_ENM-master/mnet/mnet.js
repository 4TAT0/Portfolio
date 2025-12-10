//hamburger menu -----------------------------------
$('h1.menu').click(function(){
    $('.ham').css({'right':'0'})
    $('.ham').find('li').css({'opacity':'1'})
    $('.ham').find('li').css({'top':'0'})
    
})
$('.xmark').click(function(){
    $('.ham').css({'right':'-500px'})
})


// sect2 탭 메뉴---------------------------------------
$('.tabmenu p').click(function(){
    $('.tabmenu p').removeClass('on')
    $(this).addClass('on')
    let idx=$(this).index()
    $('.tab').removeClass('on')
    $('.tab').eq(idx).addClass('on')
})

//sect2 클릭 시 이미지 교체 -----------------------------------
$('.box1').click(function(e){
    e.preventDefault()
    let href=$(this).find('a').attr('href')
    $('.box1').not().removeClass('on')
    $(this).addClass('on')
    $('.audimg').css({'background-image':'url('+href+')'})
    var idx=$(this).index()
    $(this).attr('data-idx')
    $('.pg1').removeClass('on')
    $('.pg1').eq(idx).addClass('on')
    
})
$('.box2').click(function(e){
    e.preventDefault()
    let href=$(this).find('a').attr('href')
    $('.box2').not().removeClass('on')
    $(this).addClass('on')
    $('.awdimg').css({'background-image':'url('+href+')'})
    var idx=$(this).index()
    $(this).attr('data-idx')
    $('.pg2').removeClass('on')
    $('.pg2').eq(idx).addClass('on')
    
})
$('.box3').click(function(e){
    e.preventDefault()
    let href=$(this).find('a').attr('href')
    $('.box3').not().removeClass('on')
    $(this).addClass('on')
    $('.chartimg').css({'background-image':'url('+href+')'})
    var idx=$(this).index()
    $(this).attr('data-idx')
    $('.pg3').removeClass('on')
    $('.pg3').eq(idx).addClass('on')
    
})
