const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

// Navigation func
// Implement nav link hovering effect
function navigationFunc() {
  const navContainer = document.querySelector(".nav-container");
  const navLinks = document.querySelectorAll(".nav-item a");
  // Select each nav link element
  navLinks.forEach((navLink) => {
    navLink.addEventListener("mouseover", (e) => {
      const underlineEl = e.target.nextElementSibling;
      underlineEl.classList.remove("hidden");
    });
    navLink.addEventListener("mouseleave", (e) => {
      const underlineEl = e.target.nextElementSibling;
      underlineEl.classList.add("hidden");
    });
  });
}
navigationFunc();

function asideController() {
  const asideNav = document.querySelector(".aside-nav");
  const header = document.querySelector(".header");
  const headerObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      asideNav.classList.remove("hidden");
    } else asideNav.classList.add("hidden");
  }, {});

  headerObserver.observe(header);
}
asideController();
