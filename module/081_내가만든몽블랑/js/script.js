// --------------------------------
// 미구현기능 클릭시 안내문
// --------------------------------
const alertMeg = document.querySelector(".alert");
const noLink = document.querySelectorAll("a[href='#']");
noLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        if(!link.classList.contains("eventNone")) {
            e.preventDefault();
            alertMeg.classList.add("showAlert");
            window.setTimeout(() => {
                alertMeg.classList.remove("showAlert");
            }, 2000);
        }
        
    })
});

// --------------------------------
// 탑버튼 보이게 하기
// --------------------------------
const topBtnWrap = document.querySelector(".top");
// showTopBtn();

window.addEventListener("scroll", () => showTopBtn());

function showTopBtn() {
    const scroll = window.scrollY;
    if(scroll < 100) {
        topBtnWrap.classList.add("hidden")
    } else {
        topBtnWrap.classList.remove("hidden");
    }
}

// --------------------------------
// 맨 위로 이동
// --------------------------------
const topBtn = document.querySelector(".top a");
topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToY(0,16);
});
// --------------------------------
// 페이지 다운 버튼 클릭하면 페이지 이동하기 
// --------------------------------
const playDown = document.querySelector(".playDown");
playDown.addEventListener("click", () => {
    scrollToY(document.querySelector("main").offsetTop, 40)
});


// --------------------------------
// 
// --------------------------------
const aboutBtn = document.querySelectorAll(".about_us .areaBtn li");
const aboutLocation = document.querySelectorAll(".about_us .location li");
const aboutImgList = document.querySelectorAll(".about_us .about_img_wrap li");
const CHECK = "check";
aboutBtn.forEach((e, index) => {
    e.addEventListener("click", () => {
        aboutBtn.forEach((i) => i.classList.remove(CHECK));
        e.classList.add(CHECK);
        // 선택된 지역 보여주기
        aboutLocation.forEach((i) => i.classList.remove(CHECK));
        aboutLocation[index].classList.add(CHECK);
        // 선택된 이미지 보여주기
        aboutImgList.forEach((i) => i.classList.remove(CHECK));
        aboutImgList[index].classList.add(CHECK);

    })
})


// --------------------------------
// 박스 슬라이더
// --------------------------------
const offsetData = document.querySelector(".main-slider").offsetTop;
const swiper = new Swiper(".main-slider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    parallax: true,
    loopedSlides: 1,
    mousewheel: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, "-20%", -1],
        },
        next: {
            translate: [0, "100%", 0],
        },
    },
    on: {
        slideChange:() => {
        },
        sliderFirstMove:()=>{
            scrollToY(offsetData, 0);
            document.body.classList.add("stop-scrolling");
        },
        // 첫번째나 마지막 슬라이드로 이동하게 되면 마우스휠 비활성화
        reachBeginning:() => {
            stopScrollSwiper()
            document.body.classList.remove("stop-scrolling");
        },
        reachEnd:() => {
            stopScrollSwiper()
            document.body.classList.remove("stop-scrolling");
        },
        scroll:() => {
            thresholdTime = 500; // 마우스 휠 이벤트 시간 0.5초
        },
    },

});

const startScrollSwiper = () => swiper.mousewheel.enable();
const stopScrollSwiper = () => swiper.mousewheel.disable();

// 버그, 위로 올렸다가 다시 2번째의 슬라이드를 보려고 할때 작동 안함
let lastSwiperY = 0;
window.addEventListener('wheel', function (event) {
    const swiperY = swiper.translate;
    lastSwiperY = swiperY;
    
    if(window.scrollY == offsetData) {
        
    }
    if (event.deltaY < 0 && swiper.isEnd || // 마우스 휠 아래로 내렸는데 마지막 슬라이드면
    event.deltaY > 0 && swiper.isBeginning) { // 마우스 휠 위로 올렸는데 첫번째 슬라이드면
        startScrollSwiper();
        document.body.classList.remove("stop-scrolling");
    }
});


// --------------------------------
// 사용하는 함수들
// --------------------------------
/** 윈하는 위치로 부드럽게 이동할 수 있게 해주는 함수로 이동할 위치(Number)와 몇ms마다 이동할 것인지에 대해 인수로 받음 */
function scrollToY(tagetPos, between) {
    if(tagetPos > window.scrollY) { // 이동할 위치가 현재 위치보다 큰 경우
        const up = window.setInterval(() => {
            const pos = window.scrollY; // 현재 위치
            const step = 100 + pos; // 위치 이동
            if(pos == tagetPos) { // 현재 위치가 목표로 설정한 위치와 동일한 경우 setinterval 해제
                window.clearInterval(up);
            } else if(step > tagetPos) {
                window.scrollTo(0, tagetPos);
                window.clearInterval(up);
            } else {
                window.scrollTo(0, step);
            }
        }, between) 
        
    } else if(tagetPos < window.scrollY) { // 이동할 위치가 현재 위치보다 작은 경우
        const down = window.setInterval(() => {
            const pos = window.scrollY; // 현재 위치
            const step = pos - 100; // 위치 이동

            if(pos == tagetPos) { // 현재 위치가 목표로 설정한 위치와 동일한 경우 setinterval 해제
                window.clearInterval(down);
            } else if(step < tagetPos) {
                window.scrollTo(0, tagetPos);
                window.clearInterval(down);
            } else {
                window.scrollTo(0, step);
            }
        }, between) 
    }
}