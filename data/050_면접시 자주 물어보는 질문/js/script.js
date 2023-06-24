$(document).ready(function(){

    // h2를 누르면 아래것이 열리고 위에 버튼 누르면 다 닫히게
    $(".toggle li").click(function(e){
        e.preventDefault();
        if ($(this).parents()[3].tagName == "HEADER") {
            switch ($(this).index()) {
                case 0:
                    // console.log("전체 열기");
                    $("main .toggle_container").next().stop().show("fold");
                    $("article").css({"border-bottom":"none"});
                    break;
                case 1:
                    // console.log("전체 닫기");
                    $("main .toggle_container").next().stop().hide("fold");
                    $("article").css({"border-bottom":"1px solid #ccc"});
                    break;
                default:
                    console.log("오류");
                    break;
            }
        } else {
            switch ($(this).index()) {
                case 0:
                    // console.log("개별 열기");
                    $(this).parents(".toggle_container").next().stop().show("fold");
                    $(this).parents("article").css({"border-bottom":"none"});
                    break;
                case 1:
                    // console.log("개별 닫기");
                    $(this).parents(".toggle_container").next().stop().hide("fold");
                    $(this).parents("article").css({"border-bottom":"1px solid #ccc"});
                break;
                default:
                    console.log("오류");
                    break;
            }
        }
    })
    
    // $("header .toggle li:first-child").click(function(e){
    //     e.preventDefault();
    //     $("article p").stop().show("fold");
    //     $("article").css({"border-bottom":"none"});
    // })
    // $("header .toggle li:last-child").click(function(e){
    //     e.preventDefault();
    //     $("article p").stop().hide("fold");
    //     $("article").css({"border-bottom":"1px solid #ccc"});
    // })
    // $(".toggle li:first-child").click(function(e){
    //     e.preventDefault();
    //     $(this).parents("main .toggle_container").next().stop().show("fold");
    //     $(this).parents("article").css({"border-bottom":"none"});
    // })
    
    // $(".toggle li:last-child").click(function(e){
    //     e.preventDefault();
    //     $(this).parents("main .toggle_container").next().stop().hide("fold");
    //     $(this).parents("article").css({"border-bottom":"1px solid #ccc"});
    // })

})
