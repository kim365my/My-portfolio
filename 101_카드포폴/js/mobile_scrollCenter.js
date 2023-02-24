var vh = $(window).height();
var headerTh = $("header").height();
var result = (vh-headerTh)/2
$("main").css({marginTop:result})