// --------------------------------
// 미구현기능 클릭시 안내문
// --------------------------------
const alertMeg = document.querySelector(".alert");
const noLink = document.querySelectorAll("a[href='#']");
noLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        if(!link.classList.contains("eventNone") && !linkTest(link, "snb")) {
            e.preventDefault();
            alertMeg.classList.add("showAlert");
            window.setTimeout(() => {
                alertMeg.classList.remove("showAlert");
            }, 2000);
        }
    })
});
function linkTest(e, className) {
    if(e.nextElementSibling != null) {
        if(e.nextElementSibling.classList.contains(className)) {
            return true
        }
    }
    return false
}

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

// 모바일 헤더
const mobileTwoBtn = document.querySelectorAll("header .gnb > div > ul > li > a");
const mobileTwo = document.querySelectorAll("header .gnb > div > ul > li > a + ul");
mobileTwoBtn.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        if(window.innerWidth < 1132) { // 모바일 화면에서만 구동하도록
            if(linkTest(item, "snb")) { // snb가 있으면 
                if(item.nextElementSibling.style.display == "block") {
                    item.nextElementSibling.style.display = "none";
                } else {
                    mobileTwo.forEach((i) => i.style.display = "none");
                    item.nextElementSibling.style.display = "block";
                }
            }
        } else {
            alertMeg.classList.add("showAlert");
            window.setTimeout(() => {
                alertMeg.classList.remove("showAlert");
            }, 2000);
        }
    })
})


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
const workSwiper = new Swiper(".work-slider", {
    slidesPerView:3,
    spaceBetween: 20,
    grabCursor: true,
    loopedSlides: 2,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: { // 반응형
        768 : {
            slidesPerView:5,
            spaceBetween: 40,
        },
        1024 : {
            slidesPerView:7,
            spaceBetween: 40,
        }
    },
});
// --------------------------------
// pick 배너 슬라이드
// --------------------------------
const pickSwiper = new Swiper(".pick-slider", {
    slidesPerView:2,
    spaceBetween: 10,
    grabCursor: true,
    loopedSlides: 2,
    scrollbar: {
        el: '.swiper-scrollbar',
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

// pick 배너 클릭한 부분만 보이게
const HIDDEN = "hidden";
const CHECK = "check";

const pickSlider = document.querySelectorAll(".pick-slider");
const pickBtn = document.querySelectorAll(".sec_title_wrap li");
pickBtn.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        pickBtn.forEach((i) => i.classList.remove(CHECK));
        item.classList.add(CHECK);
        pickSlider.forEach((i) => i.classList.add(HIDDEN));
        pickSlider[index].classList.remove(HIDDEN);
    })
});


// --------------------------------
// 사회공헌 슬라이더
// --------------------------------
const giveSwiper = new Swiper(".give-slider", {
    loop:true,
    loopedSlides: 1,
    effect : "fade",
    fadeEffect: {
        crossFade: true
    },
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
});



function searchNextSiblings(ele, q, fn) {
    let flag = false;
    const nodeIterator = document.createNodeIterator(
  ele.parentNode, 
  NodeFilter.SHOW_ELEMENT, 
  function(node) {
        if (ele.isSameNode(node)) flag = true;
        if (!flag) return NodeFilter.FILTER_REJECT;
        else {
            if (node.matches(q)) {
                flag = false;
                return NodeFilter.FILTER_ACCEPT
            };
        }
    });
    let currentNode;
    while (currentNode = nodeIterator.nextNode()) {
        fn(currentNode);
    }
}