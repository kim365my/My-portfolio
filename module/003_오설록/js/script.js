// 상수
const CHECK = "check";

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
            alertMeg.classList.remove("hidden");
            window.setTimeout(() => {
                alertMeg.classList.remove("showAlert");
            }, 2000);
        }
        
    })
});
// --------------------------------
// 헤더 고정 & 탑버튼 보이게 하기
// --------------------------------
const header = document.querySelector("header");
const topBtn = document.querySelector(".top");
// 탑 버튼 클릭시 이동
topBtn.addEventListener("click", () => {scrollToY(0,16);});

document.addEventListener("scroll", (e) => {
    const scroll = window.scrollY; // 스크롤 정보
    if(scroll < 100) {
        topBtn.classList.add("hidden")
        header.classList.remove("fixed");
    } else {
        topBtn.classList.remove("hidden");
        header.classList.add("fixed");
    }
})


// --------------------------------
// 페이지 다운 버튼 클릭하면 페이지 이동하기 
// --------------------------------
const playDown = document.querySelector(".playDown");
playDown.addEventListener("click", () => {
    scrollToY(document.querySelector("#main_content").offsetHeight, 40)

});


// --------------------------------
// 오설록의 차밭 정보 보여주기
// --------------------------------
const aboutBtn = document.querySelectorAll(".about_us .areaBtn li");
const aboutLocation = document.querySelectorAll(".about_us .location li");
const aboutImgList = document.querySelectorAll(".about_us .about_img_wrap li");

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
const startScrollSwiper = () => swiper.mousewheel.enable();
const stopScrollSwiper = () => swiper.mousewheel.disable();
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
    on: {
        // 첫번째나 마지막 슬라이드로 이동하게 되면 마우스휠 비활성화
        reachBeginning:() => {
            stopScrollSwiper();
            window.setTimeout(() => {
                startScrollSwiper();
            }, 2000)
        },
        reachEnd:() => {
            stopScrollSwiper();
            window.setTimeout(() => {
                startScrollSwiper();
            }, 2000);
        },
        scroll:(swiper, e) => {
            thresholdTime = 500; // 마우스 휠 이벤트 시간 0.5초
        },
        progress:(e, progress)=>{
            if(progress > 1 || progress < 0) {
                stopScrollSwiper();
            }
        },
    },
});


// // 스크롤링 이벤트
// // 현재 화면 요소가 보이는지 파악
let ioIndex = 0;
let boundingRect;
const section = document.querySelectorAll("main > section");
const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((item, index) => {
        if(item.isIntersecting) {
            ioIndex = item.target.dataset.index;
            boundingRect = item.boundingClientRect.top + window.screenY;
            
            if(item.target.id == "main_content3") {
                scrollByY(boundingRect, 30);
                startScrollSwiper();
            }
        } else{
            if(item.target.id == "main_content3") {
                stopScrollSwiper();
            }
        }
    })
}, {threshold : 0.2}) // 20%로 등장했을 경우
section.forEach((item, index) => {
    item.setAttribute("data-index", index);
    io.observe(item);
});



// --------------------------------
// 콘텐츠 배너 슬라이더
// --------------------------------
const contentSwiper = new Swiper(".content-slider", {
    slidesPerView:3,
    spaceBetween: 80,
    centeredSlides:true,
    grabCursor: true,
    loop:true,
    loopedSlides: 2,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },

});
// --------------------------------
// 오설록의 역사 배너 슬라이더
// --------------------------------
const sinceSwiper = new Swiper(".since-slider", {
    slidesPerView:4.5,
    spaceBetween: 10,
    grabCursor: true,
    loopedSlides: 2,
    scrollbar: {
        el: '.since-swiper-scrollbar',
        draggable: true,
      },
});

// --------------------------------
// 사용하는 함수들
// --------------------------------

/** 윈하는 절대위치로 부드럽게 이동할 수 있게 해주는 함수로 
 * 이동할 위치(Number)와 몇ms마다 이동할 것인지에 대해 인수로 받음 */
function scrollToY(targetPos, between) {
    if(targetPos > window.scrollY) { // 이동할 위치가 현재 위치보다 큰 경우
        const up = window.setInterval(() => {
            const pos = window.scrollY; // 현재 위치
            const step = 100 + pos; // 위치 이동
            if(pos == targetPos) { // 현재 위치가 목표로 설정한 위치와 동일한 경우 setinterval 해제
                window.clearInterval(up);
            } else if(step > targetPos) {
                window.scrollTo(0, targetPos);
                window.clearInterval(up);
            } else {
                window.scrollTo(0, step);
            }
        }, between) 
        
    } else if(targetPos < window.scrollY) { // 이동할 위치가 현재 위치보다 작은 경우
        const down = window.setInterval(() => {
            const pos = window.scrollY; // 현재 위치
            const step = pos - 100; // 위치 이동

            if(pos == targetPos) { // 현재 위치가 목표로 설정한 위치와 동일한 경우 setinterval 해제
                window.clearInterval(down);
            } else if(step < targetPos) {
                window.scrollTo(0, targetPos);
                window.clearInterval(down);
            } else {
                window.scrollTo(0, step);
            }
        }, between) 
    }
}
/** 윈하는 상대위치로 부드럽게 이동할 수 있게 해주는 함수로 
 * 이동할 위치(Number)와 몇ms마다 이동할 것인지에 대해 인수로 받음 */
function scrollByY(targetPos, between) {
    const step = 100;
    if(targetPos > 0) {
        const down = window.setInterval(() => {
            if(targetPos > 0) {
                targetPos -= step;
                console.log(`내릴때 위치 : ${targetPos}`);
                window.scrollBy({
                    top : (targetPos >= 0)? step : 0,
                    left : 0,
                    behavior : "smooth"
                });
            } else{
                window.clearInterval(down);
            }
        }, between)
    } else if(targetPos <= 0){
        const up = window.setInterval(() => {
            targetPos += step;
            console.log(targetPos);
            if(targetPos == 0) {
                window.clearInterval(up);
            } else if(targetPos < 0) {
                window.scrollBy({
                    top : -step,
                    left : 0,
                    behavior : "smooth"
                });
            } else{
                window.scrollBy({
                    top : targetPos - step,
                    left : 0,
                    behavior : "smooth"
                });
                targetPos = -100;
            }
        }, between)

    } 
}
