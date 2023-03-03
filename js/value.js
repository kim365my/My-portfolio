window.onload = function(){
    // dom 객체 생성
    const navBtn = document.querySelectorAll(".gnb a");
    const desTitle = document.querySelector(".des h2");
    const desLink = document.querySelector(".des p > a");
    const iframe = document.querySelector(".innerPage iframe");

    // 이벤트 리스너
    for (let i = 0; i < navBtn.length; i++) {
        navBtn[i].addEventListener("click", function(e){
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