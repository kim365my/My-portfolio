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
// 스크롤 이벤트
// --------------------------------
const topBtnWrap = document.querySelector(".top");
window.addEventListener("scroll", () => {
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
        const step = 100; 
        if(pos > 0) {
            window.scrollTo(0, pos - step);
        } else {
            window.clearInterval(scroll);
        }
    }, between);
}


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
const swiper = new Swiper(".main-slider", {
    grabCursor: true,
    direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
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
    parallax: true,
    loopedSlides: 1,
    pagination: {
        el: ".swiper-pagination", 
    },
    on: {

    },

});
const mainSlider = document.querySelector(".main-slider");
// 버그, 위로 올렸다가 다시 2번째의 슬라이드를 보려고 할때 작동 안함
let lastSwiperY = 0;
window.addEventListener('wheel', function (event) {
    console.log(swiper.translate);
    const swiperY = swiper.translate;
    if(lastSwiperY == swiperY) {
        if(swiper.isEnd) {
            swiper.mousewheel.disable()
        }

        if(swiper.isBeginning) {
            swiper.mousewheel.disable()
        }
    }
    lastSwiperY = swiperY;
    
    if (event.deltaY < 0) { // 위로 올릴경우 
        if(swiper.isEnd) {swiper.mousewheel.enable()}
    } else if (event.deltaY > 0) { // 아래로 내릴경우
        if(swiper.isBeginning) {swiper.mousewheel.enable()}
    }
});