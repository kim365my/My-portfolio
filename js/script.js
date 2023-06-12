const navListBtn = document.querySelectorAll(".list a");
const desTitle = document.querySelector(".des h2");
const desLink = document.querySelector(".des p > a");
const iframe = document.querySelector(".innerPage iframe");

// 함수실행
printContent();

/** iframe에서 a태그에서 src를 받아와서 해당 요소를 출력하는 함수  */
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

        })
    }
    // console.dir(iframe.clientWidth);
}



