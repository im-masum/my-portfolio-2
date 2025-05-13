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