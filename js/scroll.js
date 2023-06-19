// gnb 버튼으로 해당 섹션으로 이동
const navList = document.querySelectorAll(".list");
const gnb_li = document.querySelectorAll('.gnb_ul  > li');
const gnb_btn = document.querySelectorAll('.gnb_ul button');

const gnb = document.querySelectorAll(".gnb li");
const section = document.querySelectorAll("section");
const CHECK_CLASS = "check";

// 함수실행
gnbAndList();
scrollEvent();

/** check가 붙으면 해당 gnb 리스트 스타일을 변경하고 해당 요소를 보이게 해주는 함수  */
function gnbAndList(){
    gnb.forEach((e, i)=> {
        e.addEventListener("click", () => { // 클릭되었을 경우
            gnb.forEach((element, index) => {
                if(element.classList.contains(CHECK_CLASS)){ 
                    // 클릭된 요소외에 클래스 명이 있을 경우, 해당 클래스명을 지우기
                    element.classList.remove(CHECK_CLASS);
                    section[index].classList.remove(CHECK_CLASS);
                }
            });
            // 클릭된 요소에 클래스명 추가
            e.classList.add(CHECK_CLASS);
            section[i].classList.add(CHECK_CLASS);
        });
    });
}
/** 한 섹션 단위로 스크롤 */ 
function scrollEvent() {
    window.addEventListener("wheel", (e) => {
        if(e.target.closest(".list") == null){
            let num = 0;
            let nextNum = 0;
            section.forEach((data, index) => {
                if (data.classList.contains(CHECK_CLASS)) num = index;
            });
            if(e.deltaY > 0) {
                // 마우스 휠이 내리는 경우 아래 섹션으로 이동 마지막 섹션이면 첫번째 섹션으로 이동
                nextNum = num + 1;
                if(nextNum >= section.length) nextNum = 0;
            } else {
                nextNum = num - 1;
                if(nextNum < 0) nextNum = section.length - 1;
            }
            section[num].classList.remove(CHECK_CLASS);
            section[nextNum].classList.add(CHECK_CLASS);
            gnb[num].classList.remove(CHECK_CLASS);
            gnb[nextNum].classList.add(CHECK_CLASS);
        }
    })
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });