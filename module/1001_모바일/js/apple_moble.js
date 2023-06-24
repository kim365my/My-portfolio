const MARK = "mark";
const toggleFooterMenu = document.querySelectorAll(".footer_title");
toggleFooterMenu.forEach((item) => {
    item.addEventListener("click", (e) => {
        if(item.classList.contains(MARK)){
            item.classList.remove(MARK);
        } else{
            toggleFooterMenu.forEach((i) => i.classList.remove(MARK));
            item.classList.add(MARK);
        }
    })
});

