// dom 객체 생성
const aLink = document.querySelectorAll(".list a");

aLink.forEach(e=>{
    console.log(e.innerHTML)
    aLink = new iframeLink(e.innerHTML);
    
})

// class 생성
class iframeLink {
    constructor(name){
        this.name = name;
    }
}

