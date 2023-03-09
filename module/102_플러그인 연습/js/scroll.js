$(document).ready(function(){
    // scrollTo() 플러그인 사용
    $(".gnb a").click(function(){
        // this.hash <- 누르는 #으로 이동시켜라 || 해당 Y축 픽셀값, 애니메이션시간
        $(window).scrollTo(this.hash || 0,500)
    })

    $(".top").click(function(e){
        // scrollTop이 css에서도 있었나봐
        // 그냥 복잡하게 생각하지 말고 위로 보내면 되는 거였음
        e.preventDefault();
        $(window).stop().animate({scrollTop:0});
    })

    // 스크롤 100px이상 되었을때 TOP 버튼 나오도록 코딩
    $(".top").hide();
    $(window).scroll(function(e){
        e.preventDefault();
        // 문자열로 해당 top위치를 가져옴
        var top = $(window).scrollTop();
        console.log(top);

        if (top >= 100) {
            $("aside .top").show();
        } else {
            $("aside .top").fadeOut();
        }
    })

})