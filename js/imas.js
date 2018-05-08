$(document).ready(function(){
    var menuTop = $(".main_nav > li > a");
    var center = $(".main_nav").css("top",$(window).height()/2-$(".main_nav").height()/2);
    $(".main_nav").css("top",center);
    $(window).scroll(function(){
        var t = $(this).scrollTop+($(this).height()/2 - $(".main_nav").height()/2);
        $(".main_nav").stop().animate({top:t},300);
    })
    $(".main_nav > li > a").click(function(){
        var target = $(this).attr("href");
        $("html,body").animate({scrollTop:$(target).offset().top},1000);
    });

    $(".member").mouseover(function(){
        $(this).css("width","calc( 100% / 13 + 1.2vw )").siblings().css("width","calc( ( 100% - ( 100% / 13 + 1.2vw ) ) / 12 )");
    });
});