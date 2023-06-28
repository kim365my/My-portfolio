$(document).ready(function(){
    $("#mybtn").on("click", myFunction);
    function myFunction(){
        var dots = $("#dots");
        var moreBtn = $("#more");
        var btnText = $("#mybtn");

        if (result == 'none') {
            dots.css({display:"inline"});
            btnText.text("+More");
            moreBtn.css({display:"none"});
        } else {
            dots.css({display:"none"});
            btnText.text("+Close");
            moreBtn.css({display:"inline"});
        }
    }
})