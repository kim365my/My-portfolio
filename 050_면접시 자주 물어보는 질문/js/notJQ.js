window.onload = function(){
    // Dom 요소 불러오기
    var mainContent = document.querySelectorAll("main .toggle_container + p");
    var openBtn = document.querySelectorAll(".toggle li:first-child");
    var closeBtn = document.querySelectorAll(".toggle li:last-child");
    // 열기
    function show(e){
        e.preventDefault();
        if (e.target.closest("header")) {
            for (var i = 0; i < mainContent.length; i++) {
                mainContent[i].style.display = "block";
                mainContent[i].closest("article").classList.remove("content_border");
            }
        } else {
            e.target.closest("article").children[1].style.display = "block";
            e.target.closest("article").classList.remove("content_border");
        }
    }
    // 숨기기
    function hide(e){
        e.preventDefault();
        if (e.target.closest("header")) {
            for (var i = 0; i < mainContent.length; i++) {
                mainContent[i].style.display = "none";
                mainContent[i].closest("article").classList.add("content_border");
            }
        } else {
            e.target.closest("article").children[1].style.display = "none";
            e.target.closest("article").classList.add("content_border");
        }
    }

    // 이벤트리스너 추가
    for (var i = 0; i < openBtn.length; i++) {
        openBtn[i].addEventListener("click", show);
        closeBtn[i].addEventListener("click", hide);
    }

}