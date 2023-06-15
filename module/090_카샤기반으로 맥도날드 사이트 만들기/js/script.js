// --------------------------------
// 미구현기능 클릭시 안내문
// --------------------------------
$(`<div class="alert">죄송합니다. 해당페이지는 준비중입니다.</div>`).appendTo("#wrap");
$("a[href='#']").not(".eventNone").on("click", function(e){
    e.preventDefault();
    $(".alert").stop().fadeIn(700)
    setTimeout(() => {
        $(".alert").stop().fadeOut(700);
    }, 1000);
})

// --------------------------------
// 스크롤 이벤트
// --------------------------------
const topBtnWrap = document.querySelector(".top");
window.addEventListener("scroll", (e) => {
    // 변수 선언
    let scroll = window.scrollY;
    if(scroll < 100) {
        topBtnWrap.classList.add("hidden")
    } else {
        topBtnWrap.classList.remove("hidden");
    }
})

// --------------------------------
// 맨 위로 이동
// --------------------------------
const topBtn = document.querySelector(".top a");
topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToTop();
});

/** 위로 부드럽게 올라가는 메소드 */
function scrollToTop() {
    const between = 16;
    const scroll = window.setInterval(() => {
        const pos = window.scrollY;
        const step = 50; 
        if(pos > 0) {
            window.scrollTo(0, pos - step);
        } else {
            window.clearInterval(scroll);
        }
    }, between);
}



// --------------------------------
// 썸머크리스피월드 아이프레임 동영상 바꾸는 메소드
// --------------------------------
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
const totalGnbBtn = document.querySelectorAll(".gnb > li > a");
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
const slider = $('.slider').slick({
    slidesToShow : 1, // 보여지는 슬라이드 갯수
    dots :true, // 도트 
    // 오토슬라이드
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow : `<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>`,
    nextArrow : `<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>`,
    pauseOnDotsHover : true, // 점에 호버시 일시중지

});