const gnb = document.querySelectorAll(".gnb li");
const section = document.querySelectorAll("section");
const CHECK_CLASS = "check";

/** check가 붙으면 해당 gnb 리스트 스타일을 변경하고 해당 요소를 보이게 해주는 함수  */
gnb.forEach((e, i)=> {
    e.addEventListener("click", () => { // 클릭되었을 경우
        // 클릭된 요소외에 클래스 명이 있을 경우, 해당 클래스명을 지우기
        gnb.forEach((e) => e.classList.remove(CHECK_CLASS));
        section.forEach((e) => e.classList.remove(CHECK_CLASS))
        // 클릭된 요소에 클래스명 추가
        e.classList.add(CHECK_CLASS);
        section[i].classList.add(CHECK_CLASS);
    });
});

