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
// 탑배너 닫기 이벤트
// --------------------------------
const closeBtn = document.querySelector(".close_btn");
const topBanner = document.querySelector(".top_banner");

// 로컬스토리지
const bannerItem = localStorage.getItem("closeBanner");
if(bannerItem === null) {
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        topBanner.classList.add("close");
        window.setTimeout(() => {
            topBanner.classList.add("hidden");
            // 로컬스토리지 시간 추가
            localStorage.setItem("closeBanner", Date.now().toString());
        }, 300)
        
    });
} else {
    const date = Date.parse(bannerItem);
    if(Date.now() > date){
        localStorage.removeItem("closeBanner");
        topBanner.classList.remove("hidden, close");
    } else {
        topBanner.classList.add("hidden");
    }
}

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
const totalGnbBtn = document.querySelector(".total_gnb_wrap");
const gnb = document.querySelector(".gnb_all");
totalGnbBtn.addEventListener("mouseenter", () => {
    gnb.classList.add("on");
});    

gnb.addEventListener("mouseleave", () => {
    gnb.classList.remove("on");
});

// --------------------------------
// 박스 슬라이더
// --------------------------------
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 5000, // 오토플레이 시간
    disableOnInteraction: false,
    // pauseOnMouseEnter :true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

  },
});

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");

playBtn.addEventListener("click", () => {
    swiper.autoplay.resume();
    // console.log(swiper.autoplay.running);
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
})
pauseBtn.addEventListener("click", () => {
    swiper.autoplay.pause();
    // console.log(swiper.autoplay.paused);
    // console.log(swiper.autoplay.timeLeft);
    pauseBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
})



