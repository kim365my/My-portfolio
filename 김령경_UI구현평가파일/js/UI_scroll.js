$(".gnb a").click(function(){
    console.log(this.hash);
    $(window).scrollTo(this.hash|| 0,500);
})

