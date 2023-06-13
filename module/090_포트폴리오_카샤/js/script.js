const totalGnbBtn = document.querySelector(".total_gnb");
const total = document.querySelector(".total");

totalGnbBtn.addEventListener("mouseenter", () => {
    total.classList.remove("hidden");
});
totalGnbBtn.addEventListener("mouseleave", () => {
    total.classList.add("hidden");
});