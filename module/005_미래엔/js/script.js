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
// 헤더 고정 & 탑버튼 보이게 하기
// --------------------------------
const hambeger = document.querySelector("#ham");
const header = document.querySelector("header");
const topBtn = document.querySelector(".top");
// 탑 버튼 클릭시 이동
topBtn.addEventListener("click", () => {scrollToTop();});

document.addEventListener("scroll", (e) => {
    const scroll = window.scrollY; // 스크롤 정보
    if(scroll < 100 || hambeger.checked) {
        topBtn.classList.add("hidden")
        header.classList.remove("fixed");
    } else {
        topBtn.classList.remove("hidden");
        header.classList.add("fixed");
    }
})
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
// 박스 슬라이더
// --------------------------------
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const swiper = new Swiper(".main-slider", {
    grabCursor: true,
    parallax: true,
    loop:true,
    loopedSlides: 1,
    autoplay: {
        delay: 10000, // 오토플레이 시간
        disableOnInteraction: false,
        // pauseOnMouseEnter :true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
    on: {
        autoplayResume() {
            playBtn.classList.add("hidden");
            pauseBtn.classList.remove("hidden");
        },
        autoplayPause(){
            pauseBtn.classList.add("hidden");
            playBtn.classList.remove("hidden");
        },
    }
});

playBtn.addEventListener("click", () => swiper.autoplay.resume())
pauseBtn.addEventListener("click", () => swiper.autoplay.pause())


// --------------------------------
// work 배너 슬라이드
// --------------------------------
const sinceSwiper = new Swiper(".now-slider", {
    slidesPerView:2,
    spaceBetween: 10,
    grabCursor: true,
    loopedSlides: 2,
    scrollbar: {
        el: '.now-swiper-scrollbar',
        draggable: true,
    },
    breakpoints: { // 반응형
        768 : {
            slidesPerView:3,
            spaceBetween: 10,
        },
        1024 : {
            slidesPerView:4,
            spaceBetween: 10,
        }
    },
});
