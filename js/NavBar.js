$('.jeuxlive li').mouseenter(function(){
    $(this).children('.deroulant').css('display','inline')
})

$('.jeuxlive li').mouseleave(function(){
    $(this).children('.deroulant').css('display','none')
})