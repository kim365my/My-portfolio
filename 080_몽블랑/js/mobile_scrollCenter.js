var vh = $(window).height();
var mainTh = $("main").height();
var result = (vh-(vh-mainTh))/2;

$("#wrap").css({height:vh});
// $("main").css({marginTop:result});