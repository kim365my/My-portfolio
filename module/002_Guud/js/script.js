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
// 맨 위로 이동
// --------------------------------
const topBtn = document.querySelector(".top");
document.addEventListener("scroll", (e) => {
    const scroll = window.scrollY; // 스크롤 정보
    if(scroll < 100) {
        topBtn.classList.add("hidden")
    } else {
        topBtn.classList.remove("hidden");
    }
})
// 탑 버튼 클릭시 이동
topBtn.addEventListener("click", () => {scrollToTop();});

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
// snb 메뉴 표시
// --------------------------------
const totalGnbBtn = document.querySelector(".total_gnb_wrap");
const totalGnb = document.querySelector(".total_gnb");
const gnb = document.querySelector(".gnb_all");
const totalGnbUlBtn = document.querySelectorAll(".total_gnb_ul > li");
const selectListBtn = document.querySelectorAll(".select_list > li");
const CHECK = "check";

totalGnbBtn.addEventListener("mouseenter", () => {
    gnb.classList.add("on");
    totalGnb.classList.add("on");
});    

gnb.addEventListener("mouseleave", () => {
    totalGnbUlBtn.forEach((item) => item.classList.remove(CHECK));
    selectListBtn.forEach((item) => item.classList.remove(CHECK));
    totalGnbUlBtn[0].classList.add(CHECK);
    selectListBtn[0].classList.add(CHECK);

    gnb.classList.remove("on");
    totalGnb.classList.remove("on");
});


totalGnbUlBtn.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        if(!e.classList.contains(CHECK)){
            totalGnbUlBtn.forEach((item) => item.classList.remove(CHECK));
            e.classList.add(CHECK);
        }
    });
})
// 자식요소
selectListBtn.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        if(!item.classList.contains(CHECK)) {
            selectListBtn.forEach((item) => item.classList.remove(CHECK));
            item.classList.add(CHECK);
        }
    });
})

// --------------------------------
// md pick 상품 표시
// --------------------------------
const mdPickBtn = document.querySelectorAll(".md_pick_select input");
const mdPickList = document.querySelectorAll(".md_pick_itme_wrap");
mdPickBtn.forEach((e, index) => {
    e.addEventListener("click", () => {
        mdPickList.forEach((item) => item.classList.remove(CHECK));
        mdPickList[index].classList.add(CHECK);
    })
})
// --------------------------------
// real_time 상품 표시
// --------------------------------
const realBtn = document.querySelectorAll(".real_time_btn");
const realImg = document.querySelectorAll(".real_time_img a");
realBtn.forEach((e, index) => {
    e.addEventListener("click", () => {
        realBtn.forEach((item) => item.classList.remove(CHECK));
        realImg.forEach((item) => item.classList.remove(CHECK));
        realImg[index].classList.add(CHECK);
        realBtn[index].classList.add(CHECK);
    })
})

// --------------------------------
// 박스 슬라이더
// --------------------------------
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const swiper = new Swiper(".main-slider", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    parallax: true,
    loop:true,
    loopedSlides: 1,
    autoplay: {
        delay: 5000, // 오토플레이 시간
        disableOnInteraction: false,
        // pauseOnMouseEnter :true
    },
    pagination: {
        el: ".swiper-pagination",
        type : "fraction",
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
// 광고배너 슬라이더
// --------------------------------
const adSwiper = new Swiper(".ad-slider", {
    spaceBetween: 0,
    centeredSlides: true,
    loop:true, // 반복
    autoplay: {
        delay: 5000, // 오토플레이 시간
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

});