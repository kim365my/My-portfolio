const CHECK = "check";

// --------------------------------
// 미구현기능 클릭시 안내문
// --------------------------------
const alertMeg = document.querySelector(".alert");
const noLink = document.querySelectorAll("a[href='#']");
noLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        if(!link.classList.contains("eventNone")) {
            e.preventDefault();
            alertMeg.classList.add("showAlert");
            window.setTimeout(() => {
                alertMeg.classList.remove("showAlert");
            }, 2000);
        }
        
    })
});

// --------------------------------
// FQA
// --------------------------------
const faqBtn = document.querySelectorAll(".faq_list dt");

faqBtn.forEach((e, index) => {
    e.addEventListener("click", () => {
        e.classList.contains(CHECK);
        if(e.classList.contains(CHECK)){
            e.classList.remove(CHECK);
        } else{
            faqBtn.forEach((i) => i.classList.remove(CHECK));
            e.classList.add(CHECK);
        }
    })
})