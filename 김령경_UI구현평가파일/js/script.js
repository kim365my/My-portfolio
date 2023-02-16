$(".bxslider").bxSlider({
    mode: 'horizontal',
    auto: true,
    // 자동재생
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
});

$(".gnb a").click(function(){
    console.log(this.hash);
    $(window).scrollTo(this.hash|| 0,500);
})

$(window).scroll(function(){
    // 문자열로 해당 top위치를 가져옴
    var lastScroll = 100;
    var top = $(window).scrollTop();
    var width = $(window).width();
    if (width <= 768) {
        var place = $(".gnb");
    } else {
        var place = $("header");
    }

    if (top > lastScroll) {
        place.addClass("fixed");
    } else {
        place.removeClass("fixed");
    }
})