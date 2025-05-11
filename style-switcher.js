/* ====Toggler style switcher====== */
const styleSwitcher = document.querySelector(".style-switcher-toggler");
styleSwitcher.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* =======Theme colors====== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color )
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
            {
            style.removeAttribute("disabled");
            }
        else{
            style.removeAttribute("disabled", "true");

        }
    })
}