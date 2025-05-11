const styleSwitcher = document.querySelector(".style-switcher-toggler");
styleSwitcher.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})