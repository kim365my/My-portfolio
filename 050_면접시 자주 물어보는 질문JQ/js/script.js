$(document).ready(function(){

    // h2를 누르면 아래것이 열리고 위에 버튼 누르면 다 닫히게
    $(".toggle li").click(function(e){
        e.preventDefault();
        if ($(this).parents()[3].tagName == "MAIN") {
            switch ($(this).index()) {
                case 0:
                    // console.log("개별 열기");
                    $(this).parents(".toggle_container").next().stop().show("fold");
                        break;
                case 1:
                    // console.log("개별 닫기");
                    $(this).parents(".toggle_container").next().stop().hide("fold");
                    break;
                default:
                    console.log("오류");
                    break;
            }
        } else {
            switch ($(this).index()) {
                case 0:
                    // console.log("전체 열기");
                    $("main .toggle_container").next().stop().show("fold");
                    break;
                case 1:
                    // console.log("전체 닫기");
                    $("main .toggle_container").next().stop().hide("fold");
                    break;
                default:
                    console.log("오류");
                    break;
            }
        }
    })

})