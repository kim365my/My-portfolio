window.onload = function(){
    // Dom 요소 불러오기
    var content = document.querySelectorAll(".content");
    var openBtn = document.querySelectorAll(".toggle .open");
    var closeBtn = document.querySelectorAll(".toggle .close");
    var toggleH2 = document.querySelectorAll(".toggle_container > h2");

    // =========================================================
    // 개별 열기 닫기
    // =========================================================

    // 열기
    function show(e){
        e.preventDefault();        
        // 전체열기버튼을 따로 빼버려서 안써도 됨. 그냥 코드가 복잡해질 뿐임
        // if (e.target.closest("header")) {
        //     for (var i = 0; i < content.length; i++) {
        //         content[i].classList.remove("hidden");
        //         content[i].closest("article").classList.remove("content_border");
        //     }
        // } else {
        //     e.target.closest("article").children[1].classList.remove("hidden");
        //     e.target.closest("article").classList.remove("content_border");
        // }
        this.closest("article").children[1].classList.remove("hidden");
        this.closest("article").classList.remove("content_border");
        var nuldl = this.parentElement.nextElementSibling;
        console.log(nuldl);
    }
    // 숨기기
    function hide(e){
        e.preventDefault();
        // if (e.target.closest("header")) {
        //     for (var i = 0; i < content.length; i++) {
        //         content[i].classList.add("hidden");
        //         content[i].closest("article").classList.add("content_border");
        //     }
        // } else {
        //     e.target.closest("article").children[1].classList.add("hidden");
        //     e.target.closest("article").classList.add("content_border");
        // }
        this.closest("article").children[1].classList.add("hidden");
        this.closest("article").classList.add("content_border");
        // this.closest("article").style.backgroundColor = "red"
    }
    // 토글
    function toggle(e){
        e.preventDefault();
        this.closest("article").children[1].classList.toggle("hidden");
        this.closest("article").classList.toggle("content_border");
    }
    
    // 이벤트리스너 추가
    for (var i = 0; i < openBtn.length; i++) {
        openBtn[i].addEventListener("click", show);
        closeBtn[i].addEventListener("click", hide);
        toggleH2[i].addEventListener("click", toggle);
    }

    // =========================================================
    // 전체 열기 닫기
    // =========================================================
    var openAll = document.querySelector(".openAll");
    var closeAll = document.querySelector(".closeAll");

    function printAll(){
        // alert("전부열기 경고창");
        for (var i = 0; i < content.length; i++) {
            content[i].classList.remove("hidden");
            content[i].closest("article").classList.remove("content_border");
        }
    }    
    function removeAll(){
        // alert("전부닫기 경고창");
        for (var i = 0; i < content.length; i++) {
            content[i].classList.add("hidden");
            content[i].closest("article").classList.add("content_border");
        }
    }    
    openAll.addEventListener("click", printAll);
    closeAll.addEventListener("click", removeAll);

}