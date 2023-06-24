

$("article").mouseenter(function(){
    $(this).stop().animate({width:"50%"}, 500);
})
$("article").mouseleave(function(){
    $(this).stop().animate({width:"12%"}, 500);
})