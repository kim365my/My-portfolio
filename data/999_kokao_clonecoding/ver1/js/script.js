const audio = new Audio("./music/짱구브금.mp3");
const playAudio = document.querySelector(".fa-music");

playAudio.addEventListener("click", e=>{
  audio.play();
});

