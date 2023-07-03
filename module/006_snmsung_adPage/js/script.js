
// 유듀브 iframe api를 활용해서 비디오 제어하기 
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '1080',
        width: '1920',
        videoId: '6ysOTabfwuc',
        playerVars: {
            'mute': 1,
            'autoplay' : 1,
            'showinfo' : 0,
            'rel': 0,
            'loop' : 1,
            'disablekb' : 1,
            'controls' : 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
}
function onPlayerReady(event) {
    player.setPlaybackQuality("highres");
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

const HIDDEN = "hidden";
const videoBtn = document.querySelectorAll(".video_btn button");
videoBtn.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        switch (index) {
            case 0 :
                player.playVideo(); // 재생버튼
                item.classList.add(HIDDEN);
                videoBtn[index + 1].classList.remove(HIDDEN);
                break;
            case 1: 
                player.pauseVideo(); // 멈춤버튼
                item.classList.add(HIDDEN);
                videoBtn[index - 1].classList.remove(HIDDEN);
                break;
            case 2 : 
                player.stopVideo(); // stop 버튼
                player.mute(); // 음소거
                videoBtn[index - 1].classList.add(HIDDEN);
                videoBtn[index - 2].classList.remove(HIDDEN);
                videoBtn[index + 1].classList.remove(HIDDEN);
                videoBtn[index + 2].classList.add(HIDDEN);
                break;
            case 3 : 
                player.unMute(); // 음소거 해제
                item.classList.add(HIDDEN);
                videoBtn[index + 1].classList.remove(HIDDEN);
                break;
            case 4 :
                player.mute(); // 음소거
                item.classList.add(HIDDEN);
                videoBtn[index - 1].classList.remove(HIDDEN);
                break;
            default: console.log("뭐지"); // stop 버튼
        }
    })
});