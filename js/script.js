window.onload = function(){
    // gnb를 배열화해서 클릭시 해당 버튼 관련 내용이 나오도록 코딩

    // 변수생성
    var index = 0;

    var nav = document.querySelector(".nav_btn");
    var navBtn = document.querySelectorAll(".nav_btn > li");
    var navLink = document.querySelectorAll(".nav_btn a");
    var contentsBox = document.querySelector(".contents");

    // link : "./name/index.html"식으로 불러오고
    // old 폴더에 있는건 어떻게 하지...구조상 li > ul니까 
    var content = [
        {
            "name" : "000_resume",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "001_레쥬메",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.17"

        },
        {
            "name" : "002_기초스크립트테스트",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "003_네이버 프로필연습",
            "info" : "네이버 프로필연습",
            "date" : "2023.02.03"
        },
        {
            "name" : "010_미디어 쿼리실습",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "011_플립",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "020_전체실습",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "020_플렉스박스기본레이아웃",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "050_3단플롯 레이아웃",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "050_면접시 자주 물어보는 질문",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "050_프로젝트기본레이아웃실습",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "070_3단플롯르브르",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "080_몽블랑",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "081_내가만든몽블랑",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "090_포트폴리오_카샤",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "100_플롯연습",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "101_카드포폴",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
        {
            "name" : "102_플러그인 연습",
            "info" : "김령경 자기소개 레쥬메",
            "date" : "2023.01.26"
        },
    ]

    for (var i = 0; i < content.length; i++) {
        console.log(content[i].name);
    }
    function removeContent(){
        console.log("remove");
    }
    
    function printContent(e){
        // a링크가 클릭되었을때 이동하지 못하게
        e.preventDefault();
        // 이벤트 버블링 방지
        e.stopPropagation();

        // 먼저 출력되어 있는 값을 지움
        removeContent();

        // 그리고 contents 섹션을 이용해서 표시
        console.log("print");
        console.log(e);
    }

    // nav.addEventListener("click", printContent);
    // 링크를 클릭했을 때 반응하게 하고 싶어
    for (let i = 0; i < navBtn.length; i++) {
        navBtn[i].addEventListener("click", printContent);
        
    }
}