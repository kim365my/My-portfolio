// dom 객체 생성
const gnb = document.querySelectorAll(".gnb li");
const navList = document.querySelectorAll(".list");
const navListBtn = document.querySelectorAll(".list a");
const desTitle = document.querySelector(".des h2");
const desLink = document.querySelector(".des p > a");
const iframe = document.querySelector(".innerPage iframe");

// 함수실행
printContent();
gnbAndList();

function printContent(){
    // 이벤트 리스너
    for (let i = 0; i < navListBtn.length; i++) {
        navListBtn[i].addEventListener("click", function(e){
            e.preventDefault();

            let eText= e.target.text;
            let eLink= e.target.getAttribute("href");

            // e.target.text를 des의 h2에
            desTitle.innerText = eText;
            iframe.setAttribute("title", eText);
            
            // e.target.href를 des의 a와 iframe에
            desLink.setAttribute("href", eLink);
            iframe.setAttribute("src", eLink);

            // 설명을 li에 숨겨서 그것도 가져오게
            // console.dir(e.target);
        })
    }
}

function gnbAndList(){
    const CHECK_CLASS = "check"
    for (let i = 0; i < gnb.length; i++) {
        gnb[i].addEventListener("click", function(e){
            e.preventDefault();

            let className = gnb[i].classList.contains(CHECK_CLASS);
            if (!className) {
                for (let index = 0; index < gnb.length; index++) {
                    gnb[index].classList.remove(CHECK_CLASS);
                    navList[index].classList.remove(CHECK_CLASS);
                }
                gnb[i].classList.add(CHECK_CLASS);
                navList[i].classList.add(CHECK_CLASS);
            }
        })
        
    }
}