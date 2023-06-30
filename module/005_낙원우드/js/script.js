// --------------------------------
// 헤더 고정 & 탑버튼 보이게 하기
// --------------------------------
const header = document.querySelector("header");
document.addEventListener("scroll", (e) => {
    const scroll = window.scrollY; // 스크롤 정보
    if(scroll < 100) {
        header.classList.remove("fixed");
    } else {
        header.classList.add("fixed");
    }
})