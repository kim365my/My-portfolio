$(document).ready(function(){
    var tw = $(window).width();
    var th = $(window).height();
    var header_th = $("header").height();
    var result = (th-header_th)/2;
    
    $(".youtube").css({marginTop:result});
    
})