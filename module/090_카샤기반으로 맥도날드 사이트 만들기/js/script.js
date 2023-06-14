// --------------------------------
// 미구현기능 클릭시 안내문
// --------------------------------
$(function(){
    $(`<div class="alert">죄송합니다. 해당페이지는 준비중입니다.</div>`).appendTo("#wrap");
    $("a[href='#']").not(".eventNone").on("click", function(e){
        e.preventDefault();
        $(".alert").stop().fadeIn(700)
        setTimeout(() => {
            $(".alert").stop().fadeOut(700);
        }, 1000);
    })
})


const realTimeBtn = document.querySelectorAll(".real_time_btn a");
const realTimeFrame = document.querySelector(".real_time iframe");
const moreBtn = document.querySelector(".real_time .moreBtn");
const YOUYUBE = "https://youtu.be/";
const RealTimePlay = "real_time_play";
realTimeBtn.forEach((e) =>{
    e.addEventListener("click", (event) =>{
        event.preventDefault();
        // 클래스 추가
        realTimeBtn.forEach((btn) => btn.classList.remove(RealTimePlay));
        e.classList.add(RealTimePlay);
        
        // 아이프레임에 해당 링크 넣기
        const link = e.getAttribute("href");
        const links = link.split("/");

        realTimeFrame.setAttribute("src", link);
        moreBtn.setAttribute("href", YOUYUBE + links[links.length - 1]);
    })
})

// --------------------------------
// snb 메뉴 표시
// --------------------------------
const totalGnbBtn = document.querySelectorAll(".gnb > li");
const total = document.querySelectorAll(".snb");
const gnb = document.querySelector(".gnb");
totalGnbBtn.forEach((e)=> {
    e.addEventListener("mouseenter", () => {
        total.forEach((snb) => snb.classList.remove("hidden"));
        gnb.classList.add("on");
    });    
})
gnb.addEventListener("mouseleave", () => {
    total.forEach((snb) => snb.classList.add("hidden"));
    gnb.classList.remove("on");
});

// --------------------------------
// 박스 슬라이더
// --------------------------------
// const slideTimes = ["6","10","10"];
const slider = $('.slider').bxSlider({
    slideMargin:0, // 슬라이드간의 마진
    // 오토슬라이드
    auto: true,
    autoControls: true,
    autoHover: true,   // 마우스 호버시 정지 여부
    pager: true,
    // 오토슬라이드 start/pause버튼 합치기
    autoControlsCombine:true,
    // 텍스트 없게
    startText:" ",
    stopText:" ",
    // 오류픽스 : 터치로 이동되는 것을 막아서 이미지 클릭이 이동 되도록
    touchEnabled : (navigator.maxTouchPoints > 0),
    onSlideAfter : function(el, old, current){
        slider.stopAuto();
        slider.pause = (6 * 1000) || 5000; // 스피드 조절
        console.log(slider);
        
    }

});

var current = slider.getCurrentSlide(); // 현재 활성 슬라이드 가져오기
console.log(current);