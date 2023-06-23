const CHECK = "check";

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