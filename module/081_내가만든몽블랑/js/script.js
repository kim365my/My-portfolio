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
const mainSlider = document.querySelector(".main-slider");
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
    breakpoints:{
        320:{

        },
        480 : {

        },
        1080 : {

        },
    },
    on: {
        // 첫번째나 마지막 슬라이드로 이동하게 되면 마우스휠 비활성화
        reachBeginning:() => {
            window.setTimeout(() => {
                stopScrollSwiper();
                document.body.classList.remove("stop-scrolling");
            }, 1000)
        },
        reachEnd:() => {
            window.setTimeout(() => {
                stopScrollSwiper();
                document.body.classList.remove("stop-scrolling");
            }, 1000)
        },
        scroll:() => {
            thresholdTime = 500; // 마우스 휠 이벤트 시간 0.5초
        },
    },

});
const startScrollSwiper = () => swiper.mousewheel.enable();
const stopScrollSwiper = () => swiper.mousewheel.disable();


// --------------------------------
// 스크롤링 이벤트
// 현재 화면 요소가 보이는지 파악
let inter = new IntersectionObserver((e) => {
    // 감시 중 박스가 화면에 등장하거나 퇴장할 때 여기에 코드를 실행
    e.forEach((slide) => {
        if(slide.isIntersecting) { // 등장했을 경우
            scrollToY(mainSlider.offsetTop, 30);
            startScrollSwiper();
            document.body.classList.add("stop-scrolling");
        } else { // 퇴장했을 경우
            stopScrollSwiper();
            document.body.classList.remove("stop-scrolling");
        }
    })
    console.log(e);

}, {threshold: 0.5}); // 50% 등장했을 경우
inter.observe(mainSlider); // 감시해주는 코드, 배열로 저장됨



// --------------------------------
// 콘텐츠 배너 슬라이더
// --------------------------------
const adSwiper = new Swiper(".content-slider", {
    slidesPerView:3,
    spaceBetween: 80,
    centeredSlides:true,
    grabCursor: true,
    // effect: "fade",
    loop:true,
    loopedSlides: 2,
    pagination: {
        el: ".swiper-pagination",
        type : "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },

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