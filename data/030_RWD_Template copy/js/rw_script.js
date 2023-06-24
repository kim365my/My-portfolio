// 모바일단 햄버거 클릭시 토글
$('.menu_toggle_btn').click(function(){
    $('.gnb').stop().slideToggle();
})
// 슬라이드 플러그인 사용
$('.slider').bxSlider();

$(".gnb a").click(function(){
    console.log(this.hash);
    $(window).scrollTo(this.hash|| 0,500);
})
$(window).scroll(function(){
    // 문자열로 해당 top위치를 가져옴
    var top = $(window).scrollTop();

    if (top > 100) {
        $(".top_btn").css({display:"block"});
    } else {
        $(".top_btn").css({display:"none"});
    }
})