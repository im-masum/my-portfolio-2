
function toggleNav() {
  const aside = document.getElementById("aside");
  const icon = document.getElementById("toggleIcon");

  aside.classList.toggle("show");
  aside.classList.toggle("hide");

  if (aside.classList.contains(".aside")) {
    icon.innerHTML = "&#9776;";
  } else {
    icon.innerHTML = "&times;";
  }
}

// Animated Text
const typed = new Typed("#typed-text", {
  strings: ["Frontend Web Developer","UI/UX Enthusiast","Responsive Designer",],
  typeSpeed: 60,
  backSpeed: 50,
  loop: true,
});

// Toggle nav for mobile (optional enhancement)
const navToggle = document.querySelector(".nav-toggle");
const aside = document.querySelector(".aside");

navToggle.addEventListener("click", () => {
  aside.classList.toggle("open");
});