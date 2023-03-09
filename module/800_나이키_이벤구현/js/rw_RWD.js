
// const video = document.querySelector(".vid figure > video");
// const videoBtn = document.querySelectorAll(".vid figure > button");


// videoBtn[0].addEventListener("click", function(){
//     console.log("play");
//     $("video").get(0).play();
// })
// videoBtn[1].addEventListener("click", function(){
//     console.log("pause");
//     $("video").get(0).pause();
// })
// videoBtn[2].addEventListener("click", function(){
//     console.log("stop");
//     $("video").get(0).stop();    
// })


// 제이쿼리
var videoBtn = $("figure button");

videoBtn.eq(0).on("click", ()=>{
    console.log("play");
    $("video").get(0).play();
})
videoBtn.eq(1).on("click", ()=>{
    console.log("pause");
    $("video").get(0).pause();
})
videoBtn.eq(2).on("click", ()=>{
    console.log("stop");
    $("video").get(0).load();    
    $("video").get(0).pause();
})

videoBtn.eq(3).children().eq(1).css({display:"none"});
videoBtn.eq(3).on("click", ()=>{
    console.log("sound");
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
        videoBtn.eq(3).children().eq(0).css({display:"none"});
        videoBtn.eq(3).children().eq(1).css({display:"block"});
    } else {
        $("video").prop('muted', true);
        videoBtn.eq(3).children().eq(0).css({display:"block"});
        videoBtn.eq(3).children().eq(1).css({display:"none"});
    }
})