const video = $("video");

// video 재생관련
const carBtn = $("#car_btn");
carBtn.children().eq(0).css({display:"none"});
carBtn.on("click", function(){
    if (video.get(0).paused) {
        carBtn.children().eq(0).css({display:"none"});
        carBtn.children().eq(1).css({display:"block"});
        video.get(0).play();
    } else {
        carBtn.children().eq(1).css({display:"none"});
        carBtn.children().eq(0).css({display:"block"});
        video.get(0).pause();
    }
})

// sound
const soundBtn = $("#car_sound");
video.prop("muted", true);
soundBtn.children().eq(1).css({display:"none"});
soundBtn.on("click", function(){
    if (video.prop("muted")) {
        soundBtn.children().eq(0).css({display:"none"});
        soundBtn.children().eq(1).css({display:"block"});
        video.prop("muted", false);
        
    } else {
        soundBtn.children().eq(1).css({display:"none"});
        soundBtn.children().eq(0).css({display:"block"});
        video.prop("muted", true);
    }
})